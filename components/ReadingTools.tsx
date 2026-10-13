"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { blankReadingProgress, readReadingProgress, saveReadingProgress, whenProgressReady, syncProfile } from "@/lib/reading-progress";
import {saveAppearance} from "@/lib/appearance";
import {useAppearance} from "./AppearanceControls";
import {useProfileState} from "./ProfileControls";
import type { ReviewQuestion } from "@/content/textbook/schema";
import { scoreReview } from "@/lib/review-score";

export function ReadingTools({slug}: {slug:string}) {
  const {ready,status}=useProfileState();
  const [completed,setCompleted] = useState(false);
  const {size}=useAppearance();
  const [message,setMessage] = useState("");
  useEffect(()=>{
    let active=true;
    void whenProgressReady().then(()=>{if(active) saveReadingProgress(current=>({...current,lastChapter:slug}));});
    const sync=()=>setCompleted(readReadingProgress().completed.includes(slug));
    sync(); window.addEventListener("reading-progress",sync); window.addEventListener("storage",sync);
    return ()=>{active=false;window.removeEventListener("reading-progress",sync);window.removeEventListener("storage",sync);};
  },[slug]);
  function toggle() {
    const ok = saveReadingProgress(current=>({...current,completed:current.completed.includes(slug)?current.completed.filter(s=>s!==slug):[...current.completed,slug]}));
    if(!ok) setMessage("Progress could not be saved. Try again after the profile loads.");
  }
  return <div className="reading-tools"><button className="book-secondary" type="button" disabled={size>=28} onClick={()=>saveAppearance(p=>({...p,size:Math.min(28,p.size+2)}))}>Larger text</button><button className="book-secondary" type="button" onClick={()=>window.print()}>Print chapter</button><button className="book-primary" type="button" aria-pressed={completed} disabled={!ready} onClick={toggle}>{completed?"Chapter completed":"Mark chapter complete"}</button><span className="save-status" role="status">{message||status}</span></div>;
}

export function ChapterNotebook({slug,prompt,guidance}: {slug:string;prompt:string;guidance:string}) {
  const {ready,status}=useProfileState();
  const [text,setText]=useState(""); const [error,setError]=useState("");
  useEffect(()=>{
    const update=()=>setText(readReadingProgress().notes[slug]??"");update();
    window.addEventListener("reading-progress",update);window.addEventListener("storage",update);
    return()=>{window.removeEventListener("reading-progress",update);window.removeEventListener("storage",update);};
  },[slug]);
  function save(value:string) {
    setText(value);
    const ok=saveReadingProgress(current=>({...current,notes:{...current.notes,[slug]:value}}));
    setError(ok?"":"Could not save. Copy your response before leaving.");
  }
  return <section className="notebook" id="apply"><p className="eyebrow">Explain it in your own words</p><h2>Apply what you learned</h2><p>{prompt}</p><label htmlFor="chapter-notes">Your response</label><textarea id="chapter-notes" value={text} disabled={!ready} maxLength={30000} onChange={e=>save(e.target.value)} rows={6} placeholder="Write your explanation here…"/><div className="notebook-actions"><button className="book-primary" type="button" disabled={!ready} onClick={()=>{save(text);void syncProfile();}}>Save response</button><span role="status">{error||status}</span></div><p className="video-context">Responses save automatically as you type.</p><details><summary>Compare with the guidance</summary><p>{guidance}</p></details></section>;
}

export function ChapterReview({questions,slug,final=false}: {questions:ReviewQuestion[];slug:string;final?:boolean}) {
  const {ready,status}=useProfileState();
  const [answers,setAnswers]=useState<Record<string,number>>({}); const [submitted,setSubmitted]=useState(false); const [message,setMessage]=useState("");
  useEffect(()=>{
    const sync=()=>{const p=readReadingProgress();const savedAnswers=Object.fromEntries(questions.flatMap(q=>p.answers[slug+":"+q.id]!==undefined?[[q.id,p.answers[slug+":"+q.id]]]:[]));setAnswers(savedAnswers);setSubmitted(Boolean(p.submitted[slug])&&scoreReview(questions,savedAnswers).complete);};
    sync();window.addEventListener("reading-progress",sync);window.addEventListener("storage",sync);
    return()=>{window.removeEventListener("reading-progress",sync);window.removeEventListener("storage",sync);};
  },[questions,slug]);
  const score=scoreReview(questions,answers);
  function submit() {
    setSubmitted(true);
    const ok=saveReadingProgress(current=>({...current,scores:{...current.scores,[slug]:{correct:score.correct,total:score.total}},submitted:{...current.submitted,[slug]:true}}));
    setMessage(ok?"":"Could not save the review result.");
  }
  return <section className="book-review" id="review"><p className="eyebrow">{final?"Cumulative review":"Pause and check your understanding"}</p><h2>{final?"Connect the whole process":"Chapter review"}</h2><p>Answer first, then compare the reasoning. These checks support learning; they do not certify operating competence.</p>
    {questions.map((q,index)=><fieldset key={q.id}><legend>{index+1}. {q.prompt}</legend>{q.choices.map((choice,i)=><label key={i} className={submitted?(i===q.answer?"review-correct":answers[q.id]===i?"review-incorrect":""):""}><input type="radio" name={slug+"-"+q.id} value={i} checked={answers[q.id]===i} disabled={!ready} onChange={()=>{setAnswers(current=>({...current,[q.id]:i}));setSubmitted(false);setMessage(saveReadingProgress(p=>({...p,answers:{...p.answers,[slug+":"+q.id]:i},submitted:{...p.submitted,[slug]:false}}))?"":"Could not save this answer.");}}/><span>{choice}</span></label>)}{submitted?<div className="review-explanation"><strong>{answers[q.id]===q.answer?"Correct.":"Review this idea."}</strong> {q.explanation} <a href={final?q.revisit:"#"+q.revisit}>Return to the explanation</a></div>:null}</fieldset>)}
    <div className="review-actions"><button type="button" className="book-primary" disabled={!ready||!score.complete} onClick={submit}>Check answers</button><button type="button" className="book-secondary" disabled={!ready} onClick={()=>{setAnswers({});setSubmitted(false);setMessage(saveReadingProgress(p=>({...p,answers:Object.fromEntries(Object.entries(p.answers).filter(([id])=>!id.startsWith(slug+":"))),submitted:{...p.submitted,[slug]:false}}))?"":"Could not save the reset.");}}>Try again</button></div><div role="status" aria-live="polite">{submitted?<p><strong>{score.correct} of {questions.length} correct.</strong> {message||status}</p>:<p>{message||status}</p>}</div>
  </section>;
}

export function CourseProgress({slugs}: {slugs:string[]}) {
  const {user,status}=useProfileState();
  const [progress,setProgress]=useState(blankReadingProgress());
  useEffect(()=>{const sync=()=>setProgress(readReadingProgress());sync();window.addEventListener("reading-progress",sync);window.addEventListener("storage",sync);return()=>{window.removeEventListener("reading-progress",sync);window.removeEventListener("storage",sync);};},[]);
  const completed=slugs.filter(s=>progress.completed.includes(s)).length;
  const resume=progress.lastChapter&&slugs.includes(progress.lastChapter)?progress.lastChapter:slugs[0];
  return <div className="course-progress"><div><span>{completed} / {slugs.length} chapters completed</span><span>{Math.round(completed/slugs.length*100)}%</span></div><progress max={slugs.length} value={completed} aria-label="Completed chapters"/><Link className="book-primary" href={"/learn/"+resume}>{progress.lastChapter?"Continue reading":"Begin with electricity"} <span aria-hidden="true">→</span></Link><p>{user?user+" · "+status:"Log in to keep separate profile saves. Guest work stays on this device."}</p></div>;
}

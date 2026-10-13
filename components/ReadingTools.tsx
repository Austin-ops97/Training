"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { blankReadingProgress, readReadingProgress, saveReadingProgress } from "@/lib/reading-progress";
import type { ReviewQuestion } from "@/content/textbook/schema";
import { scoreReview } from "@/lib/review-score";

export function ReadingTools({slug}: {slug:string}) {
  const [completed,setCompleted] = useState(false);
  const [large,setLarge] = useState(false);
  const [message,setMessage] = useState("");
  useEffect(()=>{
    saveReadingProgress(current=>({...current,lastChapter:slug}));
    const sync=()=>setCompleted(readReadingProgress().completed.includes(slug));
    sync(); window.addEventListener("reading-progress",sync); window.addEventListener("storage",sync);
    return ()=>{window.removeEventListener("reading-progress",sync);window.removeEventListener("storage",sync); document.documentElement.classList.remove("book-large");};
  },[slug]);
  function toggle() {
    const ok = saveReadingProgress(current=>({...current,completed:current.completed.includes(slug)?current.completed.filter(s=>s!==slug):[...current.completed,slug]}));
    if(!ok) setMessage("Progress could not be saved in this browser.");
  }
  return <div className="reading-tools"><button className="book-secondary" type="button" aria-pressed={large} onClick={()=>{document.documentElement.classList.toggle("book-large",!large);setLarge(!large);}}>Larger text</button><button className="book-secondary" type="button" onClick={()=>window.print()}>Print chapter</button><button className="book-primary" type="button" aria-pressed={completed} onClick={toggle}>{completed?"Chapter completed":"Mark chapter complete"}</button><span role="status">{message}</span></div>;
}

export function ChapterNotebook({slug,prompt,guidance}: {slug:string;prompt:string;guidance:string}) {
  const [text,setText]=useState(""); const [message,setMessage]=useState("");
  useEffect(()=>{setText(readReadingProgress().notes[slug]??"");setMessage("");},[slug]);
  return <section className="notebook" id="apply"><p className="eyebrow">Explain it in your own words</p><h2>Apply what you learned</h2><p>{prompt}</p><label htmlFor="chapter-notes">Your response</label><textarea id="chapter-notes" value={text} onChange={e=>{setText(e.target.value);setMessage("Unsaved changes");}} rows={6} placeholder="Write your explanation here…"/><div className="notebook-actions"><button className="book-primary" type="button" onClick={()=>setMessage(saveReadingProgress(current=>({...current,notes:{...current.notes,[slug]:text}}))?"Response saved on this browser.":"Could not save. Copy your response before leaving.")}>Save response</button><span role="status">{message}</span></div><details><summary>Compare with the guidance</summary><p>{guidance}</p></details></section>;
}

export function ChapterReview({questions,slug,final=false}: {questions:ReviewQuestion[];slug:string;final?:boolean}) {
  const [answers,setAnswers]=useState<Record<string,number>>({}); const [submitted,setSubmitted]=useState(false); const [message,setMessage]=useState("");
  const score=scoreReview(questions,answers);
  function submit() {
    setSubmitted(true);
    const ok=saveReadingProgress(current=>({...current,scores:{...current.scores,[slug]:{correct:score.correct,total:score.total}}}));
    setMessage(ok?"Result saved on this browser.":"Result shown below; browser storage is unavailable.");
  }
  return <section className="book-review" id="review"><p className="eyebrow">{final?"Cumulative review":"Pause and check your understanding"}</p><h2>{final?"Connect the whole process":"Chapter review"}</h2><p>Answer first, then compare the reasoning. These checks support learning; they do not certify operating competence.</p>
    {questions.map((q,index)=><fieldset key={q.id}><legend>{index+1}. {q.prompt}</legend>{q.choices.map((choice,i)=><label key={i} className={submitted?(i===q.answer?"review-correct":answers[q.id]===i?"review-incorrect":""):""}><input type="radio" name={slug+"-"+q.id} value={i} checked={answers[q.id]===i} onChange={()=>{setAnswers(current=>({...current,[q.id]:i}));setSubmitted(false);setMessage("");}}/><span>{choice}</span></label>)}{submitted?<div className="review-explanation"><strong>{answers[q.id]===q.answer?"Correct.":"Review this idea."}</strong> {q.explanation} <a href={final?q.revisit:"#"+q.revisit}>Return to the explanation</a></div>:null}</fieldset>)}
    <div className="review-actions"><button type="button" className="book-primary" disabled={!score.complete} onClick={submit}>Check answers</button><button type="button" className="book-secondary" onClick={()=>{setAnswers({});setSubmitted(false);setMessage("");}}>Try again</button></div><div role="status" aria-live="polite">{submitted?<p><strong>{score.correct} of {questions.length} correct.</strong> {message}</p>:null}</div>
  </section>;
}

export function CourseProgress({slugs}: {slugs:string[]}) {
  const [progress,setProgress]=useState(blankReadingProgress());
  useEffect(()=>{const sync=()=>setProgress(readReadingProgress());sync();window.addEventListener("reading-progress",sync);window.addEventListener("storage",sync);return()=>{window.removeEventListener("reading-progress",sync);window.removeEventListener("storage",sync);};},[]);
  const completed=slugs.filter(s=>progress.completed.includes(s)).length;
  const resume=progress.lastChapter&&slugs.includes(progress.lastChapter)?progress.lastChapter:slugs[0];
  return <div className="course-progress"><div><span>{completed} / {slugs.length} chapters completed</span><span>{Math.round(completed/slugs.length*100)}%</span></div><progress max={slugs.length} value={completed} aria-label="Completed chapters"/><Link className="book-primary" href={"/learn/"+resume}>{progress.lastChapter?"Continue reading":"Begin with electricity"} <span aria-hidden="true">→</span></Link><p>Reading progress, responses, and review results stay in this browser.</p></div>;
}

"use client";
import {useEffect,useState} from "react";
import type {ReactNode} from "react";
import Link from "next/link";
import {useAppearance} from "./AppearanceControls";
import {saveAppearance} from "@/lib/appearance";
import {readReadingProgress} from "@/lib/reading-progress";
type Entry={slug:string;number:number;title:string;minutes?:number};
export function CourseNavigation({entries,slug,goals=[],children}:{entries:Entry[];slug:string;goals?:string[];children:ReactNode}) {
  const {reading}=useAppearance();
  const [collapsed,setCollapsed]=useState(false),[completed,setCompleted]=useState<string[]>([]);
  const [layoutKnown,setLayoutKnown]=useState(false);
  const [compact,setCompact]=useState(false),[mobileOpen,setMobileOpen]=useState(false);
  useEffect(()=>{
    try {setCollapsed(window.localStorage.getItem("training.navigation.collapsed")==="true");} catch { /* Preference is optional. */ }
    const sync=()=>setCompleted(readReadingProgress().completed);sync();window.addEventListener("reading-progress",sync);window.addEventListener("storage",sync);
    const media=window.matchMedia("(max-width: 1023px)");const resize=()=>{setCompact(media.matches);setLayoutKnown(true);};resize();media.addEventListener("change",resize);
    return()=>{window.removeEventListener("reading-progress",sync);window.removeEventListener("storage",sync);media.removeEventListener("change",resize);};
  },[]);
  useEffect(()=>setMobileOpen(false),[slug]);
  const done=entries.filter(e=>completed.includes(e.slug)).length,percent=Math.round(done/entries.length*100);
  const hidden=reading||(compact?!mobileOpen:collapsed);
  return <div className={"book-shell"+(collapsed?" navigation-collapsed":"")+(compact&&mobileOpen?" navigation-open-mobile":"")}>
    <div className="navigation-toggle"><div className="reader-breadcrumb"><Link href="/">Courses</Link><span aria-hidden="true">/</span><span>Power Plant Foundations</span></div>{reading?<button className="book-secondary" type="button" onClick={()=>saveAppearance(p=>({...p,reading:false}))}>Exit reading mode</button>:<button className="book-secondary" type="button" aria-expanded={!hidden} aria-controls="course-navigation" onClick={()=>{if(compact){setMobileOpen(v=>!v);return;}const next=!collapsed;setCollapsed(next);try {window.localStorage.setItem("training.navigation.collapsed",String(next));}catch { /* Still works for this visit. */ }}}>{compact?(mobileOpen?"Close chapters":"Chapters"):collapsed?"Show course navigation":"Hide course navigation"}</button>}</div>
    <aside id="course-navigation" className="book-sidebar" aria-label="Course navigation" hidden={hidden}><div className="sidebar-course"><Link href="/" className="book-back">← All courses</Link><h2>Power Plant Foundations</h2><p>Build from the fundamentals to the complete process.</p><progress max={entries.length} value={done} aria-label="Course completion"/><div><span>{percent}% complete</span><span>{done} of {entries.length} chapters</span></div></div><details open><summary>Course chapters</summary><ol>{entries.map(ch=><li key={ch.slug}><Link className={completed.includes(ch.slug)?"chapter-done":undefined} href={"/learn/"+ch.slug} aria-current={ch.slug===slug?"page":undefined}><span className="chapter-state">{completed.includes(ch.slug)?<><span aria-hidden="true">✓</span><span className="sr-only">Completed chapter </span></>:String(ch.number).padStart(2,"0")}</span><span className="navigation-title">{ch.title}{ch.minutes?<small>{ch.minutes} min reading</small>:null}</span></Link></li>)}</ol></details><Link href="/learn/glossary">Glossary</Link><Link href="/learn/review">Cumulative review</Link></aside>
    {children}
    <aside className="learning-rail" aria-label="Learning overview"><section><div className="learning-progress-title"><h2>Your progress</h2><strong>{percent}%</strong></div><progress max={entries.length} value={done} aria-label="Completed course chapters"/><p>{done} of {entries.length} chapters complete</p>{goals.length?<details className="learning-goals" open={layoutKnown&&!compact}><summary>Learning goals</summary><ul>{goals.map(goal=><li key={goal}><span aria-hidden="true" className="goal-dot"/><span>{goal}</span></li>)}</ul></details>:null}</section></aside>
  </div>;
}

"use client";
import {useEffect,useState} from "react";
import type {ReactNode} from "react";
import Link from "next/link";
import {readReadingProgress} from "@/lib/reading-progress";
type Entry={slug:string;number:number;title:string};
export function CourseNavigation({entries,slug,children}:{entries:Entry[];slug:string;children:ReactNode}) {
  const [collapsed,setCollapsed]=useState(false),[completed,setCompleted]=useState<string[]>([]);
  useEffect(()=>{
    try {setCollapsed(window.localStorage.getItem("training.navigation.collapsed")==="true");} catch { /* Preference is optional. */ }
    const sync=()=>setCompleted(readReadingProgress().completed);sync();window.addEventListener("reading-progress",sync);window.addEventListener("storage",sync);
    return()=>{window.removeEventListener("reading-progress",sync);window.removeEventListener("storage",sync);};
  },[]);
  return <div className={"book-shell"+(collapsed?" navigation-collapsed":"")}>
    <div className="navigation-toggle"><button className="book-secondary" type="button" aria-expanded={!collapsed} aria-controls="course-navigation" onClick={()=>{const next=!collapsed;setCollapsed(next);try {window.localStorage.setItem("training.navigation.collapsed",String(next));}catch { /* Still works for this visit. */ }}}>{collapsed?"Show course navigation":"Hide course navigation"}</button></div>
    <aside id="course-navigation" className="book-sidebar" aria-label="Course navigation" hidden={collapsed}><Link href="/" className="book-back">← Course contents</Link><details open><summary>Chapters · {completed.filter(s=>entries.some(e=>e.slug===s)).length}/{entries.length} complete</summary><ol>{entries.map(ch=><li key={ch.slug}><Link className={completed.includes(ch.slug)?"chapter-done":undefined} href={"/learn/"+ch.slug} aria-current={ch.slug===slug?"page":undefined}><span>{completed.includes(ch.slug)?<><span aria-hidden="true">✓</span><span className="sr-only">Completed chapter </span></>:String(ch.number).padStart(2,"0")}</span><span className="navigation-title">{ch.title}</span></Link></li>)}</ol></details><Link href="/learn/glossary">Glossary</Link><Link href="/learn/review">Cumulative review</Link></aside>
    {children}
  </div>;
}

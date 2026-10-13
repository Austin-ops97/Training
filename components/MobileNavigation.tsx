"use client";
import {useEffect,useId,useRef,useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {NeuroWordmark} from "./NeuroWordmark";
import {AppearanceControls} from "./AppearanceControls";
import {ProfileControls} from "./ProfileControls";
import {readReadingProgress} from "@/lib/reading-progress";

export type MenuEntry={slug:string;number:number;title:string};

export function MobileNavigation({entries}:{entries:MenuEntry[]}) {
  const pathname=usePathname();const id=useId();
  const dialog=useRef<HTMLDialogElement>(null),settings=useRef<HTMLDetailsElement>(null);
  const restoreOverflow=useRef<string|null>(null),opener=useRef<HTMLButtonElement|null>(null);
  const [opened,setOpened]=useState(false),[completed,setCompleted]=useState<string[]>([]);
  const done=entries.filter(ch=>completed.includes(ch.slug)).length;
  const percent=entries.length?Math.round(done/entries.length*100):0;

  function releaseScroll() {
    if(restoreOverflow.current!==null){document.body.style.overflow=restoreOverflow.current;restoreOverflow.current=null;}
  }
  function close() {dialog.current?.close();}
  function open(button:HTMLButtonElement,display=false) {
    if(!dialog.current) return;
    opener.current=button;
    if(!dialog.current.open){restoreOverflow.current=document.body.style.overflow;document.body.style.overflow="hidden";dialog.current.showModal();setOpened(true);}
    if(display&&settings.current){settings.current.open=true;settings.current.scrollIntoView({block:"nearest"});settings.current.querySelector("select")?.focus();}
    else dialog.current.querySelector<HTMLAnchorElement>('[aria-current="page"]')?.scrollIntoView({block:"nearest"});
  }
  useEffect(()=>{dialog.current?.close();},[pathname]);
  useEffect(()=>{
    const sync=()=>setCompleted(readReadingProgress().completed);sync();
    const media=window.matchMedia("(max-width:1023px)");
    const resize=()=>{if(!media.matches)dialog.current?.close();};
    window.addEventListener("reading-progress",sync);window.addEventListener("storage",sync);media.addEventListener("change",resize);
    return()=>{window.removeEventListener("reading-progress",sync);window.removeEventListener("storage",sync);media.removeEventListener("change",resize);if(restoreOverflow.current!==null)document.body.style.overflow=restoreOverflow.current;};
  },[]);

  return <div className="mobile-navigation">
    <div className="mobile-header-row">
      <button className="mobile-icon-button" type="button" aria-label="Open navigation menu" aria-expanded={opened} aria-controls={id} onClick={e=>open(e.currentTarget)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h11M4 17h16"/></svg></button>
      <Link className="mobile-brand" href="/" aria-label="NEURO home"><NeuroWordmark/></Link>
      <button className="mobile-icon-button mobile-display-button" type="button" aria-label="Open display settings" aria-controls={id} onClick={e=>open(e.currentTarget,true)}>Aa</button>
    </div>
    <dialog ref={dialog} id={id} className="mobile-drawer" aria-labelledby={id+"-title"} onClose={()=>{releaseScroll();setOpened(false);opener.current?.focus();}} onClick={e=>{if(e.target===e.currentTarget){const r=e.currentTarget.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)close();}}}>
      <div className="mobile-drawer-heading"><h2 id={id+"-title"} className="sr-only">Learning menu</h2><NeuroWordmark/><button className="mobile-icon-button" type="button" aria-label="Close navigation menu" onClick={close} autoFocus><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg></button></div>
      <div className="mobile-drawer-content">
        <nav className="mobile-destination-links" aria-label="Learning navigation">
          <Link href="/" aria-current={pathname==="/"||pathname==="/learn"?"page":undefined} onClick={close}>Courses<span aria-hidden="true">↗</span></Link>
          <Link href="/learn/glossary" aria-current={pathname==="/learn/glossary"?"page":undefined} onClick={close}>Glossary</Link>
          <Link href="/learn/review" aria-current={pathname==="/learn/review"?"page":undefined} onClick={close}>Cumulative review</Link>
          <Link href="/operator-fundamentals" aria-current={pathname==="/operator-fundamentals"||pathname?.startsWith("/week/")?"page":undefined} onClick={close}>Operator foundations</Link>
        </nav>
        <details className="mobile-settings" ref={settings}><summary>Display & reading<span aria-hidden="true">Aa</span></summary><AppearanceControls embedded/></details>
        <section className="mobile-course-progress" aria-label="Course completion"><p>Power Plant Foundations<strong>{percent}%</strong></p><progress value={done} max={entries.length} aria-label="Course completion"/><small>{done} of {entries.length} chapters complete</small></section>
        <nav className="mobile-chapter-list" aria-label="Course chapters"><ol>{entries.map(ch=><li key={ch.slug}><Link href={"/learn/"+ch.slug} aria-current={pathname==="/learn/"+ch.slug?"page":undefined} className={completed.includes(ch.slug)?"chapter-done":undefined} onClick={close}><span className="mobile-chapter-number">{completed.includes(ch.slug)?<><span aria-hidden="true">✓</span><span className="sr-only">Completed chapter </span></>:String(ch.number).padStart(2,"0")}</span><span>{ch.title}</span></Link></li>)}</ol></nav>
      </div>
      <div className="mobile-profile"><ProfileControls/></div>
    </dialog>
  </div>;
}

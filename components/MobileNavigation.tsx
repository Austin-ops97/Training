"use client";
import {useEffect,useId,useRef,useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {NeuroWordmark} from "./NeuroWordmark";
import {AppearanceControls} from "./AppearanceControls";
import {ProfileControls} from "./ProfileControls";
import {SettingsIcon} from "./SettingsIcon";
import {ThemeToggle} from "./ThemeToggle";
import {readReadingProgress} from "@/lib/reading-progress";

export type MenuEntry={slug:string;number:number;title:string};

export function MobileNavigation({entries}:{entries:MenuEntry[]}) {
  const pathname=usePathname();const id=useId();
  const dialog=useRef<HTMLDialogElement>(null),settingsDialog=useRef<HTMLDialogElement>(null);
  const restoreOverflow=useRef<string|null>(null),opener=useRef<HTMLButtonElement|null>(null);
  const [opened,setOpened]=useState<"navigation"|"settings"|null>(null),[completed,setCompleted]=useState<string[]>([]);
  const done=entries.filter(ch=>completed.includes(ch.slug)).length;
  const percent=entries.length?Math.round(done/entries.length*100):0;

  function releaseScroll() {
    if(restoreOverflow.current!==null){document.body.style.overflow=restoreOverflow.current;restoreOverflow.current=null;}
  }
  function close() {dialog.current?.close();settingsDialog.current?.close();}
  function open(button:HTMLButtonElement,menu:"navigation"|"settings") {
    const target=menu==="navigation"?dialog.current:settingsDialog.current;
    if(!target||dialog.current?.open||settingsDialog.current?.open) return;
    opener.current=button;
    restoreOverflow.current=document.body.style.overflow;document.body.style.overflow="hidden";
    target.showModal();setOpened(menu);
    if(menu==="navigation") target.querySelector<HTMLAnchorElement>('[aria-current="page"]')?.scrollIntoView({block:"nearest"});
  }
  function closed() {releaseScroll();setOpened(null);opener.current?.focus();}
  function backdrop(event:React.MouseEvent<HTMLDialogElement>) {
    if(event.target!==event.currentTarget) return;
    const r=event.currentTarget.getBoundingClientRect();
    if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)close();
  }
  useEffect(()=>{dialog.current?.close();settingsDialog.current?.close();},[pathname]);
  useEffect(()=>{
    const sync=()=>setCompleted(readReadingProgress().completed);sync();
    const media=window.matchMedia("(max-width:1023px)");
    const resize=()=>{if(!media.matches){dialog.current?.close();settingsDialog.current?.close();}};
    window.addEventListener("reading-progress",sync);window.addEventListener("storage",sync);media.addEventListener("change",resize);
    return()=>{window.removeEventListener("reading-progress",sync);window.removeEventListener("storage",sync);media.removeEventListener("change",resize);if(restoreOverflow.current!==null)document.body.style.overflow=restoreOverflow.current;};
  },[]);

  return <div className="mobile-navigation">
    <div className="mobile-header-row">
      <button className="mobile-icon-button" type="button" aria-label="Open navigation menu" aria-expanded={opened==="navigation"} aria-controls={id} onClick={e=>open(e.currentTarget,"navigation")}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h11M4 17h16"/></svg></button>
      <Link className="mobile-brand" href="/" aria-label="NEURO home"><NeuroWordmark/></Link>
      <div className="mobile-quick-controls"><ThemeToggle/><button className="mobile-icon-button mobile-display-button" type="button" aria-label="Open settings menu" aria-expanded={opened==="settings"} aria-controls={id+"-settings"} onClick={e=>open(e.currentTarget,"settings")}><SettingsIcon/></button></div>
    </div>
    <dialog ref={dialog} id={id} className="mobile-drawer" aria-labelledby={id+"-title"} onClose={closed} onClick={backdrop}>
      <div className="mobile-drawer-heading"><h2 id={id+"-title"} className="sr-only">Learning menu</h2><NeuroWordmark/><button className="mobile-icon-button" type="button" aria-label="Close navigation menu" onClick={close} autoFocus><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg></button></div>
      <div className="mobile-drawer-content">
        <nav className="mobile-destination-links" aria-label="Learning navigation">
          <Link href="/" aria-current={pathname==="/"||pathname==="/learn"?"page":undefined} onClick={close}>Home<span aria-hidden="true">↗</span></Link>
          <Link href="/learn/glossary" aria-current={pathname==="/learn/glossary"?"page":undefined} onClick={close}>Glossary</Link>
          <Link href="/learn/review" aria-current={pathname==="/learn/review"?"page":undefined} onClick={close}>Cumulative review</Link>
          <Link href="/operator-fundamentals" aria-current={pathname==="/operator-fundamentals"||pathname?.startsWith("/week/")?"page":undefined} onClick={close}>Operator foundations</Link>
        </nav>
        <section className="mobile-course-progress" aria-label="Course completion"><p>Power Plant Foundations<strong>{percent}%</strong></p><progress value={done} max={entries.length} aria-label="Course completion"/><small>{done} of {entries.length} chapters complete</small></section>
        <nav className="mobile-chapter-list" aria-label="Course chapters"><ol>{entries.map(ch=><li key={ch.slug}><Link href={"/learn/"+ch.slug} aria-current={pathname==="/learn/"+ch.slug?"page":undefined} className={completed.includes(ch.slug)?"chapter-done":undefined} onClick={close}><span className="mobile-chapter-number">{completed.includes(ch.slug)?<><span aria-hidden="true">✓</span><span className="sr-only">Completed chapter </span></>:String(ch.number).padStart(2,"0")}</span><span>{ch.title}</span></Link></li>)}</ol></nav>
      </div>
    </dialog>
    <dialog ref={settingsDialog} id={id+"-settings"} className="mobile-drawer mobile-settings-dialog" aria-labelledby={id+"-settings-title"} onClose={closed} onClick={backdrop}>
      <div className="mobile-drawer-heading"><h2 id={id+"-settings-title"}>Settings</h2><button className="mobile-icon-button" type="button" aria-label="Close settings menu" onClick={close} autoFocus><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg></button></div>
      <div className="mobile-drawer-content mobile-settings-content"><AppearanceControls embedded/></div>
      <div className="mobile-profile"><ProfileControls/></div>
    </dialog>
  </div>;
}

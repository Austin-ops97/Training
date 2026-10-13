"use client";
import {useEffect,useState} from "react";
import {readReadingProgress,saveReadingProgress} from "@/lib/reading-progress";
import {useProfileState} from "./ProfileControls";
export function ChapterCompletion({slug}: {slug:string}) {
  const {ready}=useProfileState();
  const [completed,setCompleted]=useState(false);const [error,setError]=useState("");
  useEffect(()=>{
    const sync=()=>setCompleted(readReadingProgress().completed.includes(slug));
    sync();window.addEventListener("reading-progress",sync);window.addEventListener("storage",sync);
    return()=>{window.removeEventListener("reading-progress",sync);window.removeEventListener("storage",sync);};
  },[slug]);
  return <div className="chapter-completion"><p>Finished the reading and practice? Record your progress before continuing.</p><button className="book-primary" type="button" aria-pressed={completed} disabled={!ready} onClick={()=>{if(!saveReadingProgress(p=>({...p,completed:p.completed.includes(slug)?p.completed.filter(s=>s!==slug):[...p.completed,slug]})))setError("Could not save progress in this browser.");}}>{completed?"Chapter completed":"Mark chapter complete"}</button><span role="status">{error}</span></div>;
}

"use client";
import {useEffect,useRef,useState} from "react";
import {APPEARANCE_KEY,DEFAULT_APPEARANCE,applyAppearance,readAppearance,saveAppearance} from "@/lib/appearance";
import type {Appearance} from "@/lib/appearance";
export function useAppearance() {
  const [preferences,setPreferences]=useState<Appearance>(DEFAULT_APPEARANCE);
  useEffect(()=>{
    const sync=()=>{const next=readAppearance();applyAppearance(next);setPreferences(next);};
    const storage=(e:StorageEvent)=>{if(e.key===APPEARANCE_KEY||e.key===null) sync();};
    sync();window.addEventListener("appearance-change",sync);window.addEventListener("storage",storage);
    return()=>{window.removeEventListener("appearance-change",sync);window.removeEventListener("storage",storage);};
  },[]);
  return preferences;
}
export function AppearanceControls() {
  const preferences=useAppearance();const panel=useRef<HTMLDetailsElement>(null);const [message,setMessage]=useState("");
  useEffect(()=>{
    const outside=(e:PointerEvent)=>{if(e.target instanceof Node&&!panel.current?.contains(e.target)&&panel.current)panel.current.open=false;};
    const escape=(e:KeyboardEvent)=>{if(e.key==="Escape"&&panel.current?.open){panel.current.open=false;panel.current.querySelector("summary")?.focus();}};
    document.addEventListener("pointerdown",outside);document.addEventListener("keydown",escape);
    return()=>{document.removeEventListener("pointerdown",outside);document.removeEventListener("keydown",escape);};
  },[]);
  function update(patch:Partial<Appearance>) {setMessage(saveAppearance(p=>({...p,...patch}))?"":"Applied for this visit. Device storage is unavailable.");}
  return <details className="appearance-menu" ref={panel}>
    <summary aria-label="Display and reading preferences"><span className="appearance-glyph" aria-hidden="true">Aa</span><span>Display</span></summary>
    <div className="appearance-panel">
      <div className="appearance-heading"><strong>Make it yours</strong><span>Display & reading</span></div>
      <fieldset><legend>Theme</legend><div className="segmented"><button type="button" aria-pressed={preferences.theme==="light"} onClick={()=>update({theme:"light"})}>Day</button><button type="button" aria-pressed={preferences.theme==="dark"} onClick={()=>update({theme:"dark"})}>Dark</button></div></fieldset>
      <button type="button" className="reading-mode-switch" aria-pressed={preferences.reading} onClick={()=>update({reading:!preferences.reading})}><span><strong>Reading mode</strong><small>A quiet, paper-like page</small></span><span className="switch-track" aria-hidden="true"><span/></span></button>
      <label className="setting-label" htmlFor="reading-font">Reading font</label><select id="reading-font" value={preferences.font} onChange={e=>update({font:e.target.value as Appearance["font"]})}><option value="literary">Book serif · Palatino</option><option value="classic">Classic serif · Georgia</option><option value="sans">Apple system · Default</option><option value="mono">Monospace</option></select>
      <div className="font-size-heading"><label className="setting-label" htmlFor="reading-size">Text size</label><output htmlFor="reading-size">{preferences.size} px</output></div>
      <div className="font-size-control"><button type="button" aria-label="Decrease reading text size" disabled={preferences.size<=16} onClick={()=>update({size:preferences.size-1})}>A−</button><input id="reading-size" type="range" min={16} max={28} step={1} value={preferences.size} onChange={e=>update({size:Number(e.target.value)})}/><button type="button" aria-label="Increase reading text size" disabled={preferences.size>=28} onClick={()=>update({size:preferences.size+1})}>A+</button></div>
      <p className="font-preview">An idea becomes useful when you can explain how it works.</p>
      <div className="appearance-footer"><button type="button" onClick={()=>{saveAppearance(()=>({...DEFAULT_APPEARANCE}));setMessage("");}}>Reset display</button><span>Saved on this device</span></div><p className="appearance-error" role="status">{message}</p>
    </div>
  </details>;
}

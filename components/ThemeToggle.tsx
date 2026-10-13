"use client";
import {useAppearance} from "./AppearanceControls";
import {saveAppearance} from "@/lib/appearance";

export function ThemeToggle() {
  const {theme}=useAppearance();const dark=theme==="dark";
  const label=dark?"Switch to light mode":"Switch to dark mode";
  return <button className="theme-toggle" type="button" aria-label={label} title={label} onClick={()=>saveAppearance(p=>({...p,theme:p.theme==="dark"?"light":"dark"}))}>
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">{dark?<><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></>:<path d="M20.2 15.2A8.5 8.5 0 0 1 8.8 3.8a8.5 8.5 0 1 0 11.4 11.4Z"/>}</svg>
  </button>;
}

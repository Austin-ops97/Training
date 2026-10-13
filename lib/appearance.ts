export const APPEARANCE_KEY = "training.appearance.v1";
export type Appearance = {theme:"light"|"dark";font:"literary"|"classic"|"sans"|"mono";size:number;reading:boolean};
export const DEFAULT_APPEARANCE:Appearance = {theme:"light",font:"literary",size:19,reading:false};
export function parseAppearance(raw:string|null):Appearance {
  try {
    const data=JSON.parse(raw??"null");
    if(!data||typeof data!=="object") return {...DEFAULT_APPEARANCE};
    return {
      theme:data.theme==="dark"?"dark":"light",
      font:["literary","classic","sans","mono"].includes(data.font)?data.font:"literary",
      size:typeof data.size==="number"&&Number.isFinite(data.size)?Math.min(28,Math.max(16,Math.round(data.size))):19,
      reading:data.reading===true,
    };
  } catch {return {...DEFAULT_APPEARANCE};}
}
let memoryOnly=false;
let current:Appearance={...DEFAULT_APPEARANCE};
export function readAppearance():Appearance {
  if(memoryOnly) return current;
  try {current=parseAppearance(window.localStorage.getItem(APPEARANCE_KEY));} catch { memoryOnly=true; }
  return current;
}
export function applyAppearance(p:Appearance) {
  const root=document.documentElement;
  root.dataset.theme=p.theme;root.dataset.font=p.font;root.dataset.reading=String(p.reading);
  root.style.setProperty("--reader-size",p.size+"px");
}
export function saveAppearance(update:(p:Appearance)=>Appearance):boolean {
  current=parseAppearance(JSON.stringify(update(readAppearance())));
  let persisted=true;
  try {window.localStorage.setItem(APPEARANCE_KEY,JSON.stringify(current));}catch {persisted=false;memoryOnly=true;}
  applyAppearance(current);window.dispatchEvent(new Event("appearance-change"));return persisted;
}
// Validated settings are applied before paint so a returning dark-mode reader does not see a bright flash.
export const appearanceBootstrap=`(()=>{try{const p=JSON.parse(localStorage.getItem("${APPEARANCE_KEY}")||"null");if(!p||typeof p!=="object")return;const d=document.documentElement;d.dataset.theme=p.theme==="dark"?"dark":"light";d.dataset.font=["literary","classic","sans","mono"].includes(p.font)?p.font:"literary";d.dataset.reading=String(p.reading===true);d.style.setProperty("--reader-size",(typeof p.size==="number"&&Number.isFinite(p.size)?Math.min(28,Math.max(16,Math.round(p.size))):19)+"px");}catch{}})();`;

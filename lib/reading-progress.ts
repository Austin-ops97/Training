import {blankReadingProgress,parseReadingProgress,READING_KEY,applyProgressPatch,combinePatches,diffProgress} from "./progress-model";
import type {ReadingProgress,ProgressPatch} from "./progress-model";
export {blankReadingProgress,parseReadingProgress,READING_KEY} from "./progress-model";
export type {ReadingProgress} from "./progress-model";
export type Profile = "Austin" | "Alex";
let user: Profile|null=null;
let ready=false;
let resolveReady:()=>void;
const readiness=new Promise<void>(resolve=>{resolveReady=resolve;});
let timer:ReturnType<typeof setTimeout>|undefined;
let syncing=false;
let generation=0;
let status="Loading profile…";
let pending:ProgressPatch={};
export function whenProgressReady() {return readiness;}
export function profileState() {return {user,ready,status};}
function key() {return user ? READING_KEY+"."+user.toLowerCase() : READING_KEY;}
function pendingKey() {return key()+".pending";}
function emit() {window.dispatchEvent(new Event("reading-progress"));}
function setStatus(value:string) {status=value;emit();}
export function readReadingProgress():ReadingProgress {
  try {return parseReadingProgress(window.localStorage.getItem(key()));} catch {return blankReadingProgress();}
}
function storePending() {window.localStorage.setItem(pendingKey(),JSON.stringify(pending));}
export function saveReadingProgress(update:(p:ReadingProgress)=>ReadingProgress):boolean {
  if(!ready) return false;
  try {
    const before=readReadingProgress(),next=update(before);
    const patch=diffProgress(before,next);
    window.localStorage.setItem(key(),JSON.stringify(next));
    if(user && Object.keys(patch).length) {
      // Include writes from another tab before recording this tab's patch.
      pending=combinePatches(JSON.parse(window.localStorage.getItem(pendingKey())??"{}"),patch);
      storePending(); setStatus("Saved on this device · syncing…");
      clearTimeout(timer);timer=setTimeout(()=>{void syncProfile();},800);
    }
    emit();return true;
  } catch {return false;}
}
export async function initializeProfile(nextUser:Profile|null) {
  generation++;user=nextUser;pending={};clearTimeout(timer);
  try {pending=JSON.parse(window.localStorage.getItem(pendingKey())??"{}");} catch {pending={};}
  ready=true;resolveReady();
  setStatus(user?"Saved on this device · connecting…":"Guest · saved on this device");
  if(user) await syncProfile(true);
}
export async function syncProfile(load=false) {
  if(!user||syncing) return;
  const currentGeneration=generation;
  const currentKey=key(),currentPendingKey=pendingKey();
  syncing=true;
  try {
    const sent=pending;pending={};
    const hasChanges=Object.keys(sent).length>0;
    const response=await fetch("/api/progress",{method:hasChanges?"PATCH":"GET",headers:{"X-Training-Profile":user,...(hasChanges?{"Content-Type":"application/json"}:{})},body:hasChanges?JSON.stringify(sent):undefined,cache:"no-store",keepalive:hasChanges});
    if(currentGeneration!==generation) return;
    if(!response.ok) {
      pending=combinePatches(sent,pending);storePending();
      setStatus((response.status===401||response.status===409)?"Session changed or expired · saved on this device. Log in again.":"Saved on this device · online sync unavailable");return;
    }
    const result=await response.json();
    const cloud=parseReadingProgress(JSON.stringify(result.progress));
    // Server merges patches by field; preserve edits made during the request.
    window.localStorage.setItem(currentKey,JSON.stringify(applyProgressPatch(cloud,pending)));
    window.localStorage.setItem(currentPendingKey,JSON.stringify(pending));
    setStatus(Object.keys(pending).length?"Saved on this device · syncing…":"Saved online");
    if(Object.keys(pending).length) timer=setTimeout(()=>{void syncProfile();},100);
  } catch {
    if(currentGeneration===generation) {
      // Restore any outstanding mutations after a failed connection.
      try {pending=combinePatches(JSON.parse(window.localStorage.getItem(currentPendingKey)??"{}"),pending);} catch { /* Keep current edits. */ }
      setStatus("Saved on this device · online sync unavailable");
    }
  } finally {syncing=false;if(load) emit();}
}
export function importGuestProgress():boolean {
  if(!user) return false;
  try {
    const guest=parseReadingProgress(window.localStorage.getItem(READING_KEY));
    return saveReadingProgress(p=>({...p,completed:[...new Set([...p.completed,...guest.completed])],lastChapter:guest.lastChapter??p.lastChapter,notes:{...guest.notes,...p.notes},scores:{...guest.scores,...p.scores},answers:{...guest.answers,...p.answers},submitted:{...guest.submitted,...p.submitted}}));
  } catch {return false;}
}

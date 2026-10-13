"use client";
import {useEffect,useState} from "react";
import Link from "next/link";
import {initializeProfile,profileState,syncProfile,importGuestProgress,READING_KEY} from "@/lib/reading-progress";
export function useProfileState() {
  const [state,setState]=useState(profileState);
  useEffect(()=>{const update=()=>setState(profileState());update();window.addEventListener("reading-progress",update);return()=>window.removeEventListener("reading-progress",update);},[]);
  return state;
}
export function ProfileBridge() {
  useEffect(()=>{
    let active=true;
    fetch("/api/profile",{cache:"no-store"}).then(r=>{if(!r.ok) throw Error("Profile unavailable");return r.json();}).then(data=>{if(active) void initializeProfile(data.user=== "Austin"||data.user=== "Alex"?data.user:null);}).catch(()=>{if(active) void initializeProfile(null);});
    const retry=()=>{void syncProfile();};
    const leaving=()=>{if(document.visibilityState==="hidden") void syncProfile();};
    window.addEventListener("online",retry);document.addEventListener("visibilitychange",leaving);
    return()=>{active=false;window.removeEventListener("online",retry);document.removeEventListener("visibilitychange",leaving);};
  },[]);
  return null;
}
export function ProfileControls() {
  const {user,ready,status}=useProfileState();const [busy,setBusy]=useState(false);const [error,setError]=useState("");const [hasGuest,setHasGuest]=useState(false);
  useEffect(()=>{try {const raw=window.localStorage.getItem(READING_KEY);setHasGuest(Boolean(raw&&raw.includes('"lastChapter"')));} catch { /* Optional migration. */ }},[]);
  async function logout() {
    setBusy(true);setError("");await syncProfile();
    try {const r=await fetch("/api/profile",{method:"DELETE"});if(!r.ok) throw Error();window.location.replace("/login");}
    catch {setError("Could not log out. Please try again.");setBusy(false);}
  }
  return <div className="profile-controls" role="group" aria-label={user?"Signed in as "+user:"Profile login"}>{user?<><span className="profile-avatar" aria-hidden="true">{user==="Austin"?"AU":"AL"}</span><span className="profile-name">{user}</span><details className="profile-menu"><summary>Profile & saves</summary><div><p role="status">{status}</p><button type="button" className="book-secondary" disabled={busy} onClick={()=>{void syncProfile();}}>Retry online sync</button>{hasGuest?<button type="button" className="book-secondary" onClick={()=>{if(importGuestProgress()) {setHasGuest(false);setError("Previous guest work added to this profile; existing profile answers take priority.");}else setError("Could not import previous work.");}}>Add previous guest work</button>:null}<button type="button" className="book-secondary" disabled={busy} onClick={()=>{void logout();}}>{busy?"Logging out…":"Log out"}</button><p role="status">{error}</p></div></details></>:<Link href="/login">{ready?"Log in":"Loading profile…"}</Link>}</div>;
}

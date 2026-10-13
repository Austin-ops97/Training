"use client";
import {useState} from "react";
export function LoginForm() {
  const [visible,setVisible]=useState(false);
  const [user,setUser]=useState("Austin"),[password,setPassword]=useState(""),[busy,setBusy]=useState(false),[error,setError]=useState("");
  return <form className="login-form" onSubmit={async e=>{
    e.preventDefault();setBusy(true);setError("");
    try {const response=await fetch("/api/profile",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user,password})});const result=await response.json();if(!response.ok) throw Error(result.error??"Could not log in.");window.location.assign("/");}
    catch(err) {setError(err instanceof Error?err.message:"Could not log in.");setBusy(false);}
  }}><label htmlFor="profile-user">Your profile</label><select id="profile-user" name="username" autoComplete="username" value={user} onChange={e=>setUser(e.target.value)} disabled={busy}><option>Austin</option><option>Alex</option></select><label htmlFor="profile-password">Password</label><div className="password-field"><input id="profile-password" name="password" type={visible?"text":"password"} autoComplete="current-password" value={password} onChange={e=>setPassword(e.target.value)} required disabled={busy}/><button className="password-visibility" type="button" aria-label={visible?"Hide password":"Show password"} aria-pressed={visible} disabled={busy} onClick={()=>setVisible(v=>!v)}>{visible?"Hide":"Show"}</button></div><button className="book-primary" type="submit" disabled={busy}>{busy?"Logging in…":"Log in"}</button><p role="alert">{error}</p></form>;
}

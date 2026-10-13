import {cookies} from "next/headers";
import {chapters,finalReview} from "@/content/textbook";
import {SESSION_COOKIE,sameOrigin,verifySession} from "@/lib/profile-auth";
import {loadProfileProgress,patchProfileProgress,storageConfigured} from "@/lib/profile-storage";
import type {ProgressPatch} from "@/lib/progress-model";
export const runtime="nodejs";
export const dynamic="force-dynamic";
const headers={"Cache-Control":"no-store"};
const slugs=new Set(chapters.map(c=>c.slug));
const reviewSlugs=new Set([...slugs,"final-review"]);
const questions=new Map([...chapters.flatMap(c=>c.questions.map(q=>[c.slug+":"+q.id,q.choices.length] as const)),...finalReview.map(q=>["final-review:"+q.id,q.choices.length] as const)]);
function validatePatch(data:unknown):ProgressPatch|null {
  if(!data||typeof data!=="object"||Array.isArray(data)) return null;
  const patch=data as ProgressPatch;
  if(Object.keys(patch).some(k=>!["completed","lastChapter","notes","scores","answers","submitted"].includes(k))) return null;
  if(patch.lastChapter!==undefined && !slugs.has(patch.lastChapter)) return null;
  for(const field of ["completed","notes","scores","answers","submitted"] as const) {
    const values=patch[field];if(values===undefined) continue;
    if(!values||typeof values!=="object"||Array.isArray(values)) return null;
    for(const [id,value] of Object.entries(values)) {
      if(field==="completed" && (!slugs.has(id)||typeof value!=="boolean")) return null;
      if(field==="notes" && (!slugs.has(id)||typeof value!=="string"||value.length>30000)) return null;
      if(field==="submitted" && (!reviewSlugs.has(id)||typeof value!=="boolean")) return null;
      if(field==="answers" && (!questions.has(id)||(value!==null&&(!Number.isInteger(value)||Number(value)<0||Number(value)>=questions.get(id)!)))) return null;
      if(field==="scores") {
        if(!reviewSlugs.has(id)||!value||typeof value!=="object") return null;
        const score=value as {correct:number;total:number};
        const total=id==="final-review"?finalReview.length:chapters.find(c=>c.slug===id)!.questions.length;
        if(score.total!==total||!Number.isInteger(score.correct)||score.correct<0||score.correct>total) return null;
      }
    }
  }
  return patch;
}
export async function GET(request:Request) {
  const user=verifySession((await cookies()).get(SESSION_COOKIE)?.value);
  if(!user) return Response.json({error:"Log in to sync progress."},{status:401,headers});
  if(request.headers.get("X-Training-Profile")!==user) return Response.json({error:"Profile changed. Log in again before syncing."},{status:409,headers});
  if(!storageConfigured()) return Response.json({error:"Online storage is not configured. Your work remains saved on this device."},{status:503,headers});
  try {return Response.json({progress:await loadProfileProgress(user)},{headers});}
  catch {return Response.json({error:"Online sync unavailable. Your work remains saved on this device."},{status:503,headers});}
}
export async function PATCH(request:Request) {
  if(!sameOrigin(request)) return Response.json({error:"Invalid request origin"},{status:403,headers});
  const user=verifySession((await cookies()).get(SESSION_COOKIE)?.value);
  if(!user) return Response.json({error:"Log in to sync progress."},{status:401,headers});
  if(request.headers.get("X-Training-Profile")!==user) return Response.json({error:"Profile changed. Log in again before syncing."},{status:409,headers});
  try {
    const raw=await request.text();if(raw.length>120000) return Response.json({error:"Save too large"},{status:413,headers});
    const patch=validatePatch(JSON.parse(raw));
    if(!patch) return Response.json({error:"Invalid course save"},{status:400,headers});
    if(!storageConfigured()) return Response.json({error:"Online storage is not configured. Your work remains saved on this device."},{status:503,headers});
    return Response.json({progress:await patchProfileProgress(user,patch)},{headers});
  } catch {return Response.json({error:"Could not sync. Your work remains saved on this device."},{status:503,headers});}
}

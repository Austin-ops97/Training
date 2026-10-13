import {get,put,BlobPreconditionFailedError,BlobNotFoundError} from "@vercel/blob";
import {applyProgressPatch,blankReadingProgress,parseReadingProgress} from "./progress-model";
import type {ProgressPatch} from "./progress-model";
import type {User} from "./profile-auth";
export function storageConfigured() {return Boolean(process.env.BLOB_READ_WRITE_TOKEN||process.env.BLOB_STORE_ID);}
async function load(user:User) {
  try {
    const result=await get("course-profiles/"+user.toLowerCase()+".json",{access:"private",useCache:false});
    if(!result) return {progress:blankReadingProgress(),etag:undefined};
    if(!result.stream) throw Error("Missing saved progress");
    const raw=await new Response(result.stream).text();
    // Corrupt server data must not silently become a blank save.
    const value=JSON.parse(raw);if(value.version!==1) throw Error("Unknown saved progress version");
    return {progress:parseReadingProgress(raw),etag:result.blob.etag};
  } catch(error) {if(error instanceof BlobNotFoundError) return {progress:blankReadingProgress(),etag:undefined};throw error;}
}
export async function loadProfileProgress(user:User) {return (await load(user)).progress;}
export async function patchProfileProgress(user:User,patch:ProgressPatch) {
  for(let attempt=0;attempt<4;attempt++) {
    const current=await load(user);
    const progress=applyProgressPatch(current.progress,patch);
    try {
      await put("course-profiles/"+user.toLowerCase()+".json",JSON.stringify(progress),{access:"private",addRandomSuffix:false,contentType:"application/json",...(current.etag?{ifMatch:current.etag}:{allowOverwrite:false})});
      return progress;
    } catch(error) {
      // Retry against the latest save; unrelated chapter edits cannot overwrite each other.
      if(error instanceof BlobPreconditionFailedError || (error instanceof Error && /already exists/i.test(error.message))) continue;
      throw error;
    }
  }
  throw Error("Concurrent save could not be completed");
}

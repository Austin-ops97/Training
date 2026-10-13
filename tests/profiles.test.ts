import {afterEach,beforeEach,describe,expect,it,vi} from "vitest";
import {hashPassword,checkPassword,createSession,verifySession} from "@/lib/profile-auth";
import {blankReadingProgress,applyProgressPatch,combinePatches} from "@/lib/progress-model";
const mocked=vi.hoisted(()=>({get:vi.fn(),put:vi.fn(),cookie:vi.fn(),load:vi.fn(),patch:vi.fn()}));
vi.mock("@vercel/blob",()=>({get:mocked.get,put:mocked.put,BlobPreconditionFailedError:class Conflict extends Error {},BlobNotFoundError:class Missing extends Error {}}));
vi.mock("next/headers",()=>({cookies:async()=>({get:mocked.cookie})}));
import {loadProfileProgress,patchProfileProgress} from "@/lib/profile-storage";
import {GET,PATCH} from "@/app/api/progress/route";
import {BlobPreconditionFailedError} from "@vercel/blob";
afterEach(()=>{vi.unstubAllEnvs();vi.unstubAllGlobals();vi.restoreAllMocks();});
beforeEach(()=>{vi.clearAllMocks();vi.stubEnv("TRAINING_SESSION_SECRET","test-only-session-secret");});
describe("Two-profile authentication",()=>{
  it("verifies salted password hashes without accepting a different password or another user",async()=>{
    const hash=await hashPassword("Test-Password-53!");vi.stubEnv("TRAINING_AUSTIN_PASSWORD_HASH",hash);vi.stubEnv("TRAINING_ALEX_PASSWORD_HASH",await hashPassword("Different-Password-71!"));
    expect(await checkPassword("Austin","Test-Password-53!")).toBe(true);
    expect(await checkPassword("Austin","wrong")).toBe(false);
    expect(await checkPassword("Alex","Test-Password-53!")).toBe(false);
  });
  it("rejects tampered, expired, or unsigned sessions",()=>{
    const token=createSession("Austin");expect(verifySession(token)).toBe("Austin");
    expect(verifySession(token.replace(/.$/,"!"))).toBe(null);
    expect(verifySession("Austin")).toBe(null);
    vi.spyOn(Date,"now").mockReturnValue(Date.now()+31*24*60*60*1000);
    expect(verifySession(token)).toBe(null);
  });
});
describe("Private durable course saves",()=>{
  function saved(notes:Record<string,string>,etag:string) {return {blob:{etag},stream:new Response(JSON.stringify({...blankReadingProgress(),notes})).body};}
  it("reads only the authenticated profile's private file with fresh origin reads",async()=>{
    mocked.get.mockResolvedValue(saved({one:"Alex's answer"},"v1"));
    expect((await loadProfileProgress("Alex")).notes.one).toBe("Alex's answer");
    expect(mocked.get).toHaveBeenCalledWith("course-profiles/alex.json",{access:"private",useCache:false});
  });
  it("retries a conflicting write while preserving another chapter's answer",async()=>{
    mocked.get.mockResolvedValueOnce(saved({one:"Original"},"v1")).mockResolvedValueOnce(saved({one:"Other tab's update"},"v2"));
    mocked.put.mockRejectedValueOnce(new BlobPreconditionFailedError()).mockResolvedValueOnce({});
    const result=await patchProfileProgress("Austin",{notes:{two:"New answer"}});
    expect(result.notes).toEqual({one:"Other tab's update",two:"New answer"});
    expect(mocked.put.mock.calls[1][2]).toMatchObject({access:"private",ifMatch:"v2",addRandomSuffix:false});
  });
  it("preserves selected answers and supports deliberate reset without losing unrelated work",()=>{
    const p={...blankReadingProgress(),answers:{"a:q1":1,"b:q1":2},notes:{b:"Keep"}};
    expect(applyProgressPatch(p,{answers:{"a:q1":null},completed:{a:true}})).toMatchObject({answers:{"b:q1":2},notes:{b:"Keep"},completed:["a"]});
    expect(combinePatches({},{})).toEqual({});
  });
  it("does not accept unauthenticated reads or cross-profile requests",async()=>{
    mocked.cookie.mockReturnValue(undefined);
    expect((await GET(new Request("https://training.test/api/progress"))).status).toBe(401);
    mocked.cookie.mockReturnValue({value:createSession("Alex")});
    expect((await GET(new Request("https://training.test/api/progress",{headers:{"X-Training-Profile":"Austin"}}))).status).toBe(409);
  });
  it("rejects forged origins and invalid answer indexes before saving",async()=>{
    mocked.cookie.mockReturnValue({value:createSession("Austin")});
    expect((await PATCH(new Request("https://training.test/api/progress",{method:"PATCH",headers:{origin:"https://other.test"},body:"{}"}))).status).toBe(403);
    expect((await PATCH(new Request("https://training.test/api/progress",{method:"PATCH",headers:{origin:"https://training.test","X-Training-Profile":"Austin"},body:JSON.stringify({answers:{"circuits-voltage-current:c2a":99}})}))).status).toBe(400);
  });
  it("reports missing online storage rather than acknowledging a false save",async()=>{
    vi.stubEnv("BLOB_READ_WRITE_TOKEN","");vi.stubEnv("BLOB_STORE_ID","");mocked.cookie.mockReturnValue({value:createSession("Austin")});
    const response=await PATCH(new Request("https://training.test/api/progress",{method:"PATCH",headers:{origin:"https://training.test","X-Training-Profile":"Austin"},body:JSON.stringify({notes:{"what-electricity-is":"Saved locally"}})}));
    expect(response.status).toBe(503);expect(mocked.put).not.toHaveBeenCalled();
  });
  it("accepts old queued review work and new questions without blocking chapter saves",async()=>{
    vi.stubEnv("BLOB_READ_WRITE_TOKEN","test-only-storage-token");
    mocked.cookie.mockReturnValue({value:createSession("Austin")});
    mocked.get.mockResolvedValue(null);mocked.put.mockResolvedValue({});
    const request=(body:unknown)=>new Request("https://training.test/api/progress",{method:"PATCH",headers:{origin:"https://training.test","X-Training-Profile":"Austin"},body:JSON.stringify(body)});
    const historical=await PATCH(request({answers:{"final-review:c16a":1},scores:{"final-review":{correct:12,total:16}},notes:{"what-electricity-is":"Keep this chapter answer"}}));
    expect(historical.status).toBe(200);
    const expanded=await PATCH(request({answers:{"final-review:eb20":2},scores:{"final-review":{correct:35,total:35}}}));
    expect(expanded.status).toBe(200);
    expect((await PATCH(request({answers:{"final-review:eb20":4}}))).status).toBe(400);
  });
});
describe("Device saves and retry queue",()=>{
  it("keeps Austin's and Alex's answers separate and retains pending work when sync fails",async()=>{
    vi.resetModules();
    const store=new Map<string,string>();const events=new EventTarget();
    vi.stubGlobal("window",{localStorage:{getItem:(k:string)=>store.get(k)??null,setItem:(k:string,v:string)=>store.set(k,v)},dispatchEvent:(e:Event)=>events.dispatchEvent(e)});
    vi.stubGlobal("fetch",vi.fn().mockResolvedValue({ok:false,status:503}));
    const progress=await import("@/lib/reading-progress");
    await progress.initializeProfile("Austin");progress.saveReadingProgress(p=>({...p,notes:{one:"Austin answer"}}));await progress.syncProfile();
    expect(progress.profileState().status).toContain("online sync unavailable");
    expect(store.get(progress.READING_KEY+".austin.pending")).toContain("Austin answer");
    await progress.initializeProfile("Alex");expect(progress.readReadingProgress().notes).toEqual({});
    progress.saveReadingProgress(p=>({...p,notes:{one:"Alex answer"}}));await progress.syncProfile();
    await progress.initializeProfile("Austin");expect(progress.readReadingProgress().notes.one).toBe("Austin answer");
    await progress.initializeProfile(null);
  });
});

import {createHmac,randomBytes,scrypt as nodeScrypt,timingSafeEqual} from "node:crypto";
import {promisify} from "node:util";
const scrypt=promisify(nodeScrypt);
export type User = "Austin" | "Alex";
export const SESSION_COOKIE="training_session";
export const SESSION_SECONDS=30*24*60*60;
export function normalizeUser(value:unknown):User|null {return typeof value==="string" ? ({austin:"Austin",alex:"Alex"} as Record<string,User>)[value.toLowerCase().trim()]??null : null;}
export async function hashPassword(password:string):Promise<string> {
  const salt=randomBytes(16).toString("hex");
  const hash=await scrypt(password,salt,64) as Buffer;
  return salt+":"+hash.toString("hex");
}
export async function checkPassword(user:User,password:string):Promise<boolean> {
  const encoded=process.env["TRAINING_"+user.toUpperCase()+"_PASSWORD_HASH"];
  if(!encoded) return false;
  const [salt,hex]=encoded.split(":");
  if(!salt||!hex||hex.length!==128) return false;
  const actual=await scrypt(password,salt,64) as Buffer;
  const expected=Buffer.from(hex,"hex");
  return expected.length===actual.length && timingSafeEqual(actual,expected);
}
export function createSession(user:User):string {
  const secret=process.env.TRAINING_SESSION_SECRET;
  if(!secret) throw Error("Profile login is not configured");
  const payload=Buffer.from(JSON.stringify({user,expires:Date.now()+SESSION_SECONDS*1000,nonce:randomBytes(12).toString("hex")})).toString("base64url");
  return payload+"."+createHmac("sha256",secret).update(payload).digest("base64url");
}
export function verifySession(token:string|undefined):User|null {
  const secret=process.env.TRAINING_SESSION_SECRET;
  if(!token||!secret) return null;
  const parts=token.split(".");if(parts.length!==2) return null;
  const [payload,signature]=parts;
  const expected=createHmac("sha256",secret).update(payload).digest();
  const actual=Buffer.from(signature,"base64url");
  if(actual.length!==expected.length||!timingSafeEqual(actual,expected)) return null;
  try {
    const data=JSON.parse(Buffer.from(payload,"base64url").toString());
    return typeof data.expires==="number" && data.expires>Date.now()?normalizeUser(data.user):null;
  } catch {return null;}
}
export function sameOrigin(request:Request):boolean {
  const origin=request.headers.get("origin");
  return origin===new URL(request.url).origin;
}

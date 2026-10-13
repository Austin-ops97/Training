import {cookies} from "next/headers";
import {checkPassword,createSession,normalizeUser,sameOrigin,SESSION_COOKIE,SESSION_SECONDS,verifySession} from "@/lib/profile-auth";
export const runtime="nodejs";
export const dynamic="force-dynamic";
const headers={"Cache-Control":"no-store"};
export async function GET() {
  const user=verifySession((await cookies()).get(SESSION_COOKIE)?.value);
  return Response.json({user},{headers});
}
export async function POST(request:Request) {
  if(!sameOrigin(request)) return Response.json({error:"Invalid request origin"},{status:403,headers});
  if(!process.env.TRAINING_SESSION_SECRET) return Response.json({error:"Login is not configured yet."},{status:503,headers});
  try {
    if(Number(request.headers.get("content-length"))>4096) return Response.json({error:"Request too large"},{status:413,headers});
    const data=await request.json();const user=normalizeUser(data.user);
    if(!user||typeof data.password!=="string"||data.password.length>256||!await checkPassword(user,data.password)) return Response.json({error:"The name or password is incorrect."},{status:401,headers});
    (await cookies()).set(SESSION_COOKIE,createSession(user),{httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"lax",path:"/",maxAge:SESSION_SECONDS});
    return Response.json({user},{headers});
  } catch {return Response.json({error:"Could not log in. Please try again."},{status:400,headers});}
}
export async function DELETE(request:Request) {
  if(!sameOrigin(request)) return Response.json({error:"Invalid request origin"},{status:403,headers});
  (await cookies()).set(SESSION_COOKIE,"",{httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"lax",path:"/",maxAge:0});
  return Response.json({user:null},{headers});
}

import {afterEach,beforeEach,describe,expect,it,vi} from "vitest";
import {createSession,SESSION_COOKIE} from "@/lib/profile-auth";

const mocked=vi.hoisted(()=>({cookie:vi.fn(),redirect:vi.fn((path:string)=>{throw new Error("redirect:"+path);})}));
vi.mock("next/headers",()=>({cookies:async()=>({get:mocked.cookie})}));
vi.mock("next/navigation",()=>({redirect:mocked.redirect}));
import CourseLayout from "@/app/(course)/layout";
import LoginPage from "@/app/login/page";

beforeEach(()=>{
  vi.clearAllMocks();
  mocked.cookie.mockReturnValue(undefined);
  vi.stubEnv("TRAINING_SESSION_SECRET","test-only-session-secret");
});
afterEach(()=>{vi.unstubAllEnvs();vi.restoreAllMocks();});

describe("Login-first course access",()=>{
  it("sends signed-out visitors to login before returning course content",async()=>{
    await expect(CourseLayout({children:"course content"})).rejects.toThrow("redirect:/login");
    expect(mocked.cookie).toHaveBeenCalledWith(SESSION_COOKIE);
    expect(await LoginPage()).toBeTruthy();
  });
  it.each(["Austin","Alex"] as const)("opens the course for %s and redirects away from login",async user=>{
    mocked.cookie.mockReturnValue({value:createSession(user)});
    expect(await CourseLayout({children:"course content"})).toBe("course content");
    await expect(LoginPage()).rejects.toThrow("redirect:/");
  });
  it("returns tampered and expired sessions to login",async()=>{
    const token=createSession("Austin");
    mocked.cookie.mockReturnValue({value:token+"tampered"});
    await expect(CourseLayout({children:"course content"})).rejects.toThrow("redirect:/login");
    mocked.cookie.mockReturnValue({value:token});
    vi.spyOn(Date,"now").mockReturnValue(Date.now()+31*24*60*60*1000);
    await expect(CourseLayout({children:"course content"})).rejects.toThrow("redirect:/login");
  });
  it("requires login again after the session cookie is removed",async()=>{
    mocked.cookie.mockReturnValue({value:createSession("Alex")});
    expect(await CourseLayout({children:"course content"})).toBe("course content");
    mocked.cookie.mockReturnValue(undefined);
    await expect(CourseLayout({children:"course content"})).rejects.toThrow("redirect:/login");
    expect(await LoginPage()).toBeTruthy();
  });
});

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE, verifySession } from "@/lib/profile-auth";

export default async function CourseLayout({ children }: { children: React.ReactNode }) {
  const user = verifySession((await cookies()).get(SESSION_COOKIE)?.value);
  if (!user) redirect("/login");
  return children;
}

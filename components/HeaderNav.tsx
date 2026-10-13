"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
export function HeaderNav() {
  const path=usePathname();
  const links=[{href:"/",label:"Courses",active:path!=="/learn/glossary"&&path!=="/learn/review"&&path!=="/learn/evidence"&&path!=="/login"},{href:"/learn/glossary",label:"Glossary",active:path==="/learn/glossary"},{href:"/learn/review",label:"Review",active:path==="/learn/review"}];
  return <nav className="header-links" aria-label="Learning navigation">{links.map(link=><Link key={link.href} href={link.href} aria-current={link.active?"page":undefined}>{link.label}</Link>)}</nav>;
}

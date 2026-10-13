"use client";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {AppearanceControls} from "./AppearanceControls";
import {ProfileControls} from "./ProfileControls";
import {NeuroWordmark} from "./NeuroWordmark";
import {MobileNavigation} from "./MobileNavigation";
import type {MenuEntry} from "./MobileNavigation";
import {HeaderNav} from "./HeaderNav";
export function SiteHeader({entries}:{entries:MenuEntry[]}) {
  const pathname=usePathname();
  if(pathname==="/login") return null;
  return <header className="site-header"><MobileNavigation entries={entries}/><Link className="brand desktop-brand" href="/" aria-label="NEURO home"><NeuroWordmark/></Link><HeaderNav/><div className="header-actions"><AppearanceControls/><ProfileControls/></div></header>;
}

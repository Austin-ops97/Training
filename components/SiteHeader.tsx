import Link from "next/link";
import {AppearanceControls} from "./AppearanceControls";
import {ProfileControls} from "./ProfileControls";
import {NeuroWordmark} from "./NeuroWordmark";
import {HeaderNav} from "./HeaderNav";
export function SiteHeader() {
  return <header className="site-header"><Link className="brand" href="/" aria-label="NEURO home"><NeuroWordmark/></Link><HeaderNav/><div className="header-actions"><AppearanceControls/><ProfileControls/></div></header>;
}

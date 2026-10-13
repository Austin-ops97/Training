import Link from "next/link";
import {AppearanceControls} from "./AppearanceControls";
import {ProfileControls} from "./ProfileControls";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><path d="M7 24V8h6v16M19 24V8h6v16M4 16h24" stroke="currentColor" strokeWidth="2"/></svg></span><span className="brand-copy"><strong>Training</strong>
        <span>Power Plant Foundations</span></span>
      </Link>
      <nav className="header-links" aria-label="Courses">
        <Link href="/">Course contents</Link>
        <Link href="/learn/glossary">Glossary</Link>
        <Link href="/learn/review">Review</Link>
      </nav>
      <div className="header-actions"><AppearanceControls/><ProfileControls/></div>
    </header>
  );
}

import Link from "next/link";
import {ProfileControls} from "./ProfileControls";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <strong>Training</strong>
        <span>Power Plant Foundations</span>
      </Link>
      <nav className="header-links" aria-label="Courses">
        <Link href="/">Course contents</Link>
        <Link href="/learn/glossary">Glossary</Link>
        <Link href="/learn/review">Review</Link>
      </nav>
      <ProfileControls/>
    </header>
  );
}

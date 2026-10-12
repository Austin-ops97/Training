import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <strong>Training</strong>
        <span>Power Plant Fundamentals for Project Managers</span>
      </Link>
      <nav className="header-links" aria-label="Course">
        <Link href="/week/1">Week 1</Link>
      </nav>
    </header>
  );
}

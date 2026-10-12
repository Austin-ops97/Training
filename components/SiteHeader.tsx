import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <strong>Training</strong>
        <span>Courses</span>
      </Link>
      <nav className="header-links" aria-label="Courses">
        <Link href="/week/1">Project managers</Link>
        <Link href="/operator-fundamentals">Operator fundamentals</Link>
      </nav>
    </header>
  );
}

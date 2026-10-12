import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap">
      <h1>That page is not in this release</h1>
      <p>
        <Link href="/week/1">Return to Week 1</Link>
      </p>
    </div>
  );
}

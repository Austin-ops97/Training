import Link from "next/link";
import { course, lessonMinutes, week1 } from "@/lib/course";

export default function HomePage() {
  const total = week1.lessons.reduce((sum, lesson) => sum + lessonMinutes(lesson), 0);
  return (
    <div className="wrap">
      <section className="hero">
        <p className="kicker">{course.siteName}</p>
        <h1>{course.title}</h1>
        <p className="lede">{course.audience}</p>
        <p>{course.workedExample}</p>
      </section>
      <div className="grid-cards">
        <article className="card">
          <p className="kicker">Published</p>
          <h2>
            <Link href="/week/1">Week 1 — {week1.title}</Link>
          </h2>
          <p>{week1.focus}</p>
          <p className="meta">
            {week1.lessons.length} lessons · {total} minutes of scheduled time · target 60 minutes each, hard cap 90
          </p>
        </article>
        <article className="card">
          <p className="kicker">How the lessons work</p>
          <ul>
            <li>Short sections with a clock time on each one.</li>
            <li>Videos play in the page. Required clips were checked against their spoken text.</li>
            <li>Checks are scored on the server. Explanations appear after you answer.</li>
            <li>Progress stays in this browser.</li>
          </ul>
        </article>
      </div>
    </div>
  );
}

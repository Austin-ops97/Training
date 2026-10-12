import Link from "next/link";
import { courseMinutesTotal, lessonMinutesTotal, operatorCourse, operatorLessons } from "@/content/operator-fundamentals";
import { course, lessonMinutes, week1 } from "@/lib/course";

function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  if (rest === 0) return `${hours} hours`;
  return `${hours} hours ${rest} minutes`;
}

export default function HomePage() {
  const weekMinutes = week1.lessons.reduce((sum, lesson) => sum + lessonMinutes(lesson), 0);
  return (
    <div className="wrap">
      <section className="hero">
        <p className="kicker">{course.siteName}</p>
        <h1>Courses</h1>
        <p className="lede">
          Two courses share this site. They stay separate. Neither one qualifies a person to operate a plant.
        </p>
      </section>
      <div className="grid-cards">
        <article className="card">
          <p className="kicker">Course</p>
          <h2>
            <Link href="/week/1">{course.title}</Link>
          </h2>
          <p>{course.audience}</p>
          <p>{course.workedExample}</p>
          <p>
            <Link href="/week/1">
              Week 1 — {week1.title}
            </Link>
          </p>
          <p className="meta">
            {week1.lessons.length} published lessons · {weekMinutes} minutes · {week1.focus}. Target 60 minutes each,
            hard cap 90.
          </p>
        </article>
        <article className="card">
          <p className="kicker">Course</p>
          <h2>
            <Link href="/operator-fundamentals">{operatorCourse.title}</Link>
          </h2>
          <p>{operatorCourse.audience}</p>
          <p>{operatorCourse.boundary}</p>
          <p className="meta">
            Outline published. {operatorLessons.length} lessons · {formatDuration(lessonMinutesTotal())} · final
            assessment {formatDuration(operatorCourse.finalAssessment.minutes)} · {formatDuration(courseMinutesTotal())}{" "}
            in all.
          </p>
        </article>
        <article className="card">
          <p className="kicker">How the published lessons work</p>
          <ul>
            <li>Short sections with a clock time on each one.</li>
            <li>Videos in the project-manager course play in the page.</li>
            <li>Checks are scored on the server. Explanations appear after you answer.</li>
            <li>Progress for that course stays in this browser.</li>
          </ul>
        </article>
      </div>
    </div>
  );
}

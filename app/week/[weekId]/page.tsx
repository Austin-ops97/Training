import Link from "next/link";
import { notFound } from "next/navigation";
import { lessonMinutes, week1 } from "@/lib/course";
import { WeekProgress } from "@/components/WeekProgress";

export default async function WeekPage({ params }: { params: Promise<{ weekId: string }> }) {
  const { weekId } = await params;
  if (weekId !== "1") notFound();
  const total = week1.lessons.reduce((sum, lesson) => sum + lessonMinutes(lesson), 0);
  return (
    <div className="wrap">
      <p className="kicker">Week 1</p>
      <h1>{week1.title}</h1>
      <p className="lede">{week1.focus}</p>
      <p className="meta">Five lessons. Scheduled time {total} minutes. Later weeks are not in this release.</p>
      <p>
        Dana, Priya, and Luis appear through the week. They are hypothetical people in a scenario, not site staff.
      </p>
      <WeekProgress lessonIds={week1.lessons.map((lesson) => lesson.id)} />
      <ol className="day-list">
        {week1.lessons.map((lesson) => (
          <li key={lesson.id}>
            <Link href={`/week/1/day/${lesson.day}`}>
              <span className="day-num">{lesson.day}</span>
              <span>
                <strong>{lesson.title}</strong>
                <br />
                <span className="meta">{lesson.summary}</span>
              </span>
              <span className="mins">{lessonMinutes(lesson)} min</span>
            </Link>
          </li>
        ))}
      </ol>
      <section className="card" style={{ marginTop: "1rem" }}>
        <h2>Levels</h2>
        <p>
          <span className="pill">Level 1</span> essential knowledge. <span className="pill l2">Level 2</span> practical
          project-manager application. <span className="pill l3">Level 3</span> optional advanced material.
        </p>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { BULLETS, COMPONENTS, ASPECTS } from "@/content/operator-fundamentals/coverage";
import {
  courseMinutesTotal,
  lessonMinutesTotal,
  moduleById,
  modulesInTeachingOrder,
  operatorCourse,
  operatorLessons,
} from "@/content/operator-fundamentals";

export const metadata: Metadata = {
  title: "Peaking Power Plant Operator Fundamentals — Training",
  description:
    "Curriculum outline for a beginner course on US natural-gas peaking plants. It does not qualify anyone to operate.",
};

function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  if (rest === 0) return `${hours} hours`;
  return `${hours} hours ${rest} minutes`;
}

export default function OperatorFundamentalsPage() {
  const modules = modulesInTeachingOrder();
  const byLesson = new Map(BULLETS.map((bullet) => [bullet.id, [] as number[]]));
  for (const lesson of operatorLessons) {
    for (const id of lesson.covers) byLesson.get(id)?.push(lesson.number);
  }
  return (
    <div className="wrap">
      <p className="kicker">Course outline</p>
      <h1>{operatorCourse.title}</h1>
      <p className="lede">{operatorCourse.audience}</p>
      <p>{operatorCourse.boundary}</p>
      <p>{operatorCourse.workedExample}</p>
      <p className="meta">
        {operatorLessons.length} lessons in {modules.length} modules · {formatDuration(lessonMinutesTotal())} of lesson
        time · {operatorCourse.finalAssessment.questionCount}-question final assessment,{" "}
        {operatorCourse.finalAssessment.minutes} minutes · {formatDuration(courseMinutesTotal())} in all. Each lesson
        targets 60 minutes and stays at or under 90. Knowledge checks are planned at {operatorCourse.knowledgeCheckCount}{" "}
        questions. Lesson pages are not in this phase.
      </p>
      <p>
        <Link href="/">All courses</Link>
      </p>

      <section className="card">
        <h2>How a lesson is built</h2>
        <p>
          Each lesson will have a title, three to five objectives, an introduction, a main lesson in full paragraphs,
          a labeled example, a key-terms box, a {operatorCourse.knowledgeCheckCount}-question check, and a summary.
          Short sections carry a time, and two checkpoints sit inside the main lesson. A diagram is an SVG drawn for
          the page. A video, when one is chosen later, plays in the page with a watch-for line before it and takeaways
          after it. The topics below are candidates. No clip has been selected yet.
        </p>
      </section>

      {modules.map((module) => (
        <section key={module.id} id={`module-${module.id}`}>
          <p className="kicker">{module.specNumber === null ? "Added module" : `Spec module ${module.specNumber}`}</p>
          <h2>{module.title}</h2>
          <p>{module.specObjective}</p>
          <p className="meta">
            {module.lessons.length} lessons · {module.lessons.reduce((sum, lesson) => sum + lesson.minutes, 0)} minutes
          </p>
          <ul>
            {module.references.map((reference) => (
              <li key={reference.source}>
                <strong>{reference.source}.</strong> {reference.use}
                {reference.url ? (
                  <>
                    {" "}
                    <a href={reference.url}>{reference.url}</a>
                  </>
                ) : null}
              </li>
            ))}
          </ul>
          {module.lessons.map((lesson) => (
            <article key={lesson.id} className="card" id={lesson.id}>
              <h3>
                Lesson {lesson.number}. {lesson.title}
              </h3>
              <p className="meta">
                {lesson.minutes} minutes · knowledge check {operatorCourse.knowledgeCheckCount} questions · prerequisite{" "}
                {lesson.prerequisites.length === 0
                  ? "none"
                  : lesson.prerequisites
                      .map((id) => {
                        const prior = operatorLessons.find((item) => item.id === id);
                        return prior ? `Lesson ${prior.number}` : id;
                      })
                      .join(", ")}
              </p>
              <h4>Objectives</h4>
              <ul>
                {lesson.objectives.map((objective) => (
                  <li key={objective}>{objective}</li>
                ))}
              </ul>
              <h4>Key topics</h4>
              <p>{lesson.topics.join(" · ")}</p>
              <h4>Sections</h4>
              <ol>
                {lesson.sections.map((section) => (
                  <li key={section.title}>
                    {section.title} <span className="meta">({section.minutes} min, {section.kind})</span>
                  </li>
                ))}
              </ol>
              <h4>Example</h4>
              <p>{lesson.example}</p>
              <h4>Key terms</h4>
              <p>{lesson.terms.join(", ")}</p>
              <h4>Diagram</h4>
              <p>
                <strong>{lesson.diagram.title}.</strong> {lesson.diagram.shows}
              </p>
              <h4>Video candidate</h4>
              <p>{lesson.video.candidateTopic}</p>
              <p>Watch for: {lesson.video.watchFor}</p>
              <ul>
                {lesson.video.takeaways.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      ))}

      <section className="card" id="final-assessment">
        <h2>{operatorCourse.finalAssessment.title}</h2>
        <p>{operatorCourse.finalAssessment.note}</p>
        <p className="meta">
          {operatorCourse.finalAssessment.questionCount} questions · {operatorCourse.finalAssessment.minutes} minutes
        </p>
        <ul>
          {operatorCourse.finalAssessment.domains.map((domain) => (
            <li key={domain.name}>
              {domain.name}: {domain.questions} questions
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Coverage matrix</h2>
        <p>Every specification bullet below is taught in at least one lesson. Checkpoints are not a substitute for that lesson.</p>
        <div className="sheet-wrap">
          <table className="sheet">
            <caption>Spec bullets and the lessons that carry them</caption>
            <thead>
              <tr>
                <th>Module</th>
                <th>Bullet</th>
                <th>Lessons</th>
              </tr>
            </thead>
            <tbody>
              {BULLETS.map((bullet) => (
                <tr key={bullet.id}>
                  <td>{bullet.module === "0" ? "Foundations" : moduleById(bullet.module).specNumber}</td>
                  <td>{bullet.text}</td>
                  <td>{(byLesson.get(bullet.id) ?? []).join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="sheet-wrap">
          <table className="sheet">
            <caption>Eight questions for each major component</caption>
            <thead>
              <tr>
                <th>Component</th>
                {ASPECTS.map((aspect) => (
                  <th key={aspect.id}>{aspect.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPONENTS.map((component) => (
                <tr key={component.id}>
                  <td>{component.label}</td>
                  {ASPECTS.map((aspect) => {
                    const hits = operatorLessons
                      .filter((lesson) => (lesson.parts[component.id] ?? []).includes(aspect.id))
                      .map((lesson) => lesson.number);
                    return <td key={aspect.id}>{hits.join(", ")}</td>;
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

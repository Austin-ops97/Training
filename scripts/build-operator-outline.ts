import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { ASPECTS, BULLETS, COMPONENTS } from "../content/operator-fundamentals/coverage";
import {
  courseMinutesTotal,
  lessonMinutesTotal,
  moduleById,
  modulesInTeachingOrder,
  operatorCourse,
  operatorLessons,
} from "../content/operator-fundamentals";

const outDir = path.resolve("reviews/operator-fundamentals/outline");
mkdirSync(outDir, { recursive: true });

function duration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest === 0 ? `${hours} hours` : `${hours} hours ${rest} minutes`;
}

function outlineDoc(): string {
  const lines: string[] = [];
  lines.push(`# ${operatorCourse.title}`);
  lines.push("");
  lines.push(operatorCourse.audience);
  lines.push("");
  lines.push(operatorCourse.boundary);
  lines.push("");
  lines.push(operatorCourse.workedExample);
  lines.push("");
  lines.push(
    `${operatorLessons.length} lessons. Lesson time ${lessonMinutesTotal()} minutes (${duration(lessonMinutesTotal())}). Final assessment ${operatorCourse.finalAssessment.minutes} minutes. Total ${courseMinutesTotal()} minutes (${duration(courseMinutesTotal())}).`,
  );
  lines.push("");
  lines.push("Each lesson is planned between 60 and 90 minutes, with short sections, two checkpoints, and a 10-question knowledge check. Videos listed here are candidate topics only.");
  lines.push("");
  for (const courseModule of modulesInTeachingOrder()) {
    const moduleMinutes = courseModule.lessons.reduce((sum, lesson) => sum + lesson.minutes, 0);
    const label = courseModule.specNumber === null ? "Added module" : `Spec module ${courseModule.specNumber}`;
    lines.push(`## ${label} — ${courseModule.title} (${moduleMinutes} min)`);
    lines.push("");
    lines.push(courseModule.specObjective);
    lines.push("");
    for (const lesson of courseModule.lessons) {
      const prereq =
        lesson.prerequisites.length === 0
          ? "None"
          : lesson.prerequisites
              .map((id) => {
                const prior = operatorLessons.find((item) => item.id === id);
                return prior ? `Lesson ${prior.number}` : id;
              })
              .join(", ");
      lines.push(`### Lesson ${lesson.number} — ${lesson.title} (${lesson.minutes} min)`);
      lines.push("");
      lines.push(`Prerequisites: ${prereq}.`);
      lines.push("");
      lines.push("Objectives:");
      lines.push("");
      for (const objective of lesson.objectives) lines.push(`- ${objective}`);
      lines.push("");
      lines.push(`Key topics: ${lesson.topics.join("; ")}.`);
      lines.push("");
      lines.push("Sections:");
      lines.push("");
      for (const section of lesson.sections) lines.push(`- ${section.title} — ${section.minutes} min (${section.kind})`);
      lines.push("");
      lines.push(`Example: ${lesson.example}`);
      lines.push("");
      lines.push(`Key terms: ${lesson.terms.join(", ")}.`);
      lines.push("");
      lines.push(`Diagram: ${lesson.diagram.title}. ${lesson.diagram.shows}`);
      lines.push("");
      lines.push(`Video candidate: ${lesson.video.candidateTopic} Watch for: ${lesson.video.watchFor}`);
      lines.push("");
    }
  }
  lines.push("## Final assessment");
  lines.push("");
  lines.push(operatorCourse.finalAssessment.note);
  lines.push("");
  for (const domain of operatorCourse.finalAssessment.domains) {
    lines.push(`- ${domain.name}: ${domain.questions} questions`);
  }
  lines.push("");
  return lines.join("\n");
}

function matrixDoc(): string {
  const lines: string[] = [];
  lines.push("# Coverage matrix");
  lines.push("");
  lines.push("| Module | Bullet | Lessons |");
  lines.push("| --- | --- | --- |");
  for (const bullet of BULLETS) {
    const lessons = operatorLessons.filter((lesson) => lesson.covers.includes(bullet.id)).map((lesson) => lesson.number);
    const moduleLabel = bullet.module === "0" ? "Foundations" : `Spec ${moduleById(bullet.module).specNumber}`;
    lines.push(`| ${moduleLabel} | ${bullet.text.replaceAll("|", "/")} | ${lessons.join(", ")} |`);
  }
  lines.push("");
  lines.push("## Component questions");
  lines.push("");
  lines.push(`| Component | ${ASPECTS.map((aspect) => aspect.label.replaceAll("|", "/")).join(" | ")} |`);
  lines.push(`| --- | ${ASPECTS.map(() => "---").join(" | ")} |`);
  for (const component of COMPONENTS) {
    const cells = ASPECTS.map((aspect) =>
      operatorLessons
        .filter((lesson) => (lesson.parts[component.id] ?? []).includes(aspect.id))
        .map((lesson) => String(lesson.number))
        .join(", "),
    );
    lines.push(`| ${component.label} | ${cells.join(" | ")} |`);
  }
  lines.push("");
  return lines.join("\n");
}

function timeDoc(): string {
  const lines: string[] = [];
  lines.push("# Time budget");
  lines.push("");
  lines.push(`Lesson time: ${lessonMinutesTotal()} minutes (${duration(lessonMinutesTotal())}).`);
  lines.push(`Final assessment: ${operatorCourse.finalAssessment.minutes} minutes.`);
  lines.push(`Total: ${courseMinutesTotal()} minutes (${duration(courseMinutesTotal())}).`);
  lines.push("");
  lines.push("Target for a lesson is 60 minutes. The hard cap is 90. Every lesson in this outline is inside that range.");
  lines.push("");
  lines.push("| Lesson | Module | Minutes |");
  lines.push("| ---: | --- | ---: |");
  for (const lesson of operatorLessons) {
    const courseModule = moduleById(lesson.moduleId);
    const label = courseModule.specNumber === null ? "Foundations" : `Spec ${courseModule.specNumber}`;
    lines.push(`| ${lesson.number} | ${label} — ${lesson.title} | ${lesson.minutes} |`);
  }
  lines.push(`| Final | Assessment | ${operatorCourse.finalAssessment.minutes} |`);
  lines.push("");
  return lines.join("\n");
}

function referencesDoc(): string {
  const lines: string[] = [];
  lines.push("# Planned references");
  lines.push("");
  lines.push("These are the sources phase 2 should open before a claim is quoted. A URL here is a planned starting point, not a statement that the page was re-read for this outline.");
  lines.push("");
  for (const courseModule of modulesInTeachingOrder()) {
    const label = courseModule.specNumber === null ? "Added module" : `Spec module ${courseModule.specNumber}`;
    lines.push(`## ${label} — ${courseModule.title}`);
    lines.push("");
    for (const reference of courseModule.references) {
      lines.push(`- **${reference.source}.** ${reference.use}${reference.url ? ` ${reference.url}` : ""}`);
    }
    lines.push("");
  }
  return lines.join("\n");
}

writeFileSync(path.join(outDir, "outline.md"), outlineDoc());
writeFileSync(path.join(outDir, "coverage-matrix.md"), matrixDoc());
writeFileSync(path.join(outDir, "time-budget.md"), timeDoc());
writeFileSync(path.join(outDir, "references.md"), referencesDoc());
console.log(`wrote operator outline evidence (${operatorLessons.length} lessons, ${courseMinutesTotal()} minutes)`);

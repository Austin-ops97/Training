import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { lessons } from "../content/week-01";
import { answerKey } from "../content/week-01/answer-key";
import { videos } from "../content/week-01/videos";
import { lessonMinutes } from "../lib/course";
import { youtubeEmbedSrc } from "../lib/embed";

const outDir = path.resolve("reviews/week-01");
mkdirSync(outDir, { recursive: true });

function lessonDoc(): string {
  const lines: string[] = [];
  lines.push("# Week 1 lessons, objectives, and time");
  lines.push("");
  lines.push("Site: Training. Course: Power Plant Fundamentals for Project Managers.");
  lines.push("Week: Power Generation Fundamentals — how electricity is produced and delivered.");
  lines.push("Audience: a project manager with a military and project background who needs technical literacy, not an operator qualification.");
  lines.push("Worked example: Viper Power, an anonymized six-unit simple-cycle gas peaker in ERCOT.");
  lines.push("");
  lines.push("Each lesson is 60 to 90 minutes. Video minutes are inside the section that embeds the player. The outline's longer day blocks were rebuilt so no lesson exceeds the cap.");
  lines.push("");
  lines.push("| Day | Lesson id | Route | Scheduled minutes | Knowledge-check items |");
  lines.push("| --- | --- | --- | ---: | ---: |");
  let total = 0;
  for (const lesson of lessons) {
    const minutes = lessonMinutes(lesson);
    total += minutes;
    lines.push(
      `| ${lesson.day} | ${lesson.id} | \`/week/1/day/${lesson.day}\` | ${minutes} | ${lesson.quizIds.length} |`,
    );
  }
  lines.push(`| | | **Total** | **${total}** | |`);
  lines.push("");

  for (const lesson of lessons) {
    const minutes = lessonMinutes(lesson);
    lines.push(`## Day ${lesson.day} — ${lesson.title} (${minutes} min)`);
    lines.push("");
    lines.push(lesson.summary);
    lines.push("");
    lines.push(`Public content: \`content/week-01/day${lesson.day}.ts\`. Lesson id \`${lesson.id}\`.`);
    lines.push("");
    lines.push("### Objectives");
    lines.push("");
    for (const objective of lesson.objectives) lines.push(`- ${objective}`);
    lines.push("");
    lines.push("### Sections");
    lines.push("");
    lines.push("| Section id | Title | Kind | Level | Minutes | Videos | Checks |");
    lines.push("| --- | --- | --- | ---: | ---: | --- | --- |");
    for (const section of lesson.sections) {
      const vids = section.videoIds?.join(", ") || "—";
      const checks = [...(section.questionIds ?? []), section.exerciseId].filter(Boolean).join(", ") || "—";
      lines.push(
        `| \`${section.id}\` | ${section.title} | ${section.kind} | ${section.level} | ${section.minutes} | ${vids} | ${checks} |`,
      );
    }
    lines.push("");
    lines.push(
      `Knowledge-check ids (scored together at the end): ${lesson.quizIds.map((id) => `\`${id}\``).join(", ")}.`,
    );
    lines.push("");
  }
  return lines.join("\n");
}

function assessmentDoc(): string {
  const lines: string[] = [];
  lines.push("# Week 1 assessments");
  lines.push("");
  lines.push(
    "Correct choices and explanations live in `content/week-01/answer-key.ts`. The lesson pages ship the prompts and choices only. `POST /api/quiz/grade` returns the explanation after the student submits. This file is the auditor copy.",
  );
  lines.push("");
  for (const lesson of lessons) {
    const key = answerKey[lesson.id];
    lines.push(`## ${lesson.id} — Day ${lesson.day}`);
    lines.push("");
    if (Object.keys(key.exercises).length === 0) {
      lines.push("No numeric exercise. The exercise section is a sketch or table the student marks complete.");
      lines.push("");
    }
    for (const exercise of lesson.exercises) {
      const graded = key.exercises[exercise.id];
      lines.push(`### ${exercise.id} — numeric exercise`);
      lines.push("");
      lines.push(exercise.prompt);
      lines.push("");
      lines.push(`- Unit: ${exercise.unit}`);
      lines.push(`- Expected: ${graded.expected}`);
      lines.push(`- Tolerance: ${graded.tolerance}`);
      lines.push(`- Worked explanation: ${graded.explanation}`);
      lines.push("");
    }
    for (const question of lesson.questions) {
      const item = key.questions[question.id];
      const where = lesson.quizIds.includes(question.id) ? "knowledge check" : "checkpoint";
      lines.push(`### ${question.id} — ${where}, level ${question.level}`);
      lines.push("");
      lines.push(question.prompt);
      lines.push("");
      question.choices.forEach((choice, index) => {
        const mark = index === item.correctIndex ? " **(correct)**" : "";
        lines.push(`${index}. ${choice}${mark}`);
      });
      lines.push("");
      lines.push(`Explanation: ${item.explanation}`);
      lines.push("");
    }
  }
  return lines.join("\n");
}

function videoDoc(): string {
  const placement = new Map<string, string>();
  for (const lesson of lessons) {
    for (const section of lesson.sections) {
      for (const id of section.videoIds ?? []) {
        placement.set(id, `Day ${lesson.day} section \`${section.id}\` (${section.minutes} min)`);
      }
    }
  }
  const lines: string[] = [];
  lines.push("# Week 1 video verification");
  lines.push("");
  lines.push("Reviewed 12 October 2026.");
  lines.push("");
  lines.push(
    "Titles and channels were confirmed with YouTube oEmbed (`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v={id}&format=json`). Each embed URL returned HTTP 200 and a player document. Timed caption files could not be downloaded from this environment (YouTube blocked the caption clients). Durations are the Appendix A listed lengths, used as the player `end` parameter. They were not re-measured with a media probe. Spoken-word review used the public watch page. This file stores reviewer notes, not a transcript.",
  );
  lines.push("");
  lines.push(
    "Every video is an iframe inside its lesson section. The player source is `https://www.youtube.com/embed/{id}?start={start}&end={end}&rel=0&modestbranding=1&playsinline=1`. There is no outbound-only watch link on the lesson page.",
  );
  lines.push("");
  lines.push("| Code | Title | Channel | YouTube id | Listed duration | Start | End | Required | Placed in | Embed URL |");
  lines.push("| --- | --- | --- | --- | --- | ---: | ---: | --- | --- | --- |");
  for (const video of Object.values(videos)) {
    lines.push(
      `| ${video.code} | ${video.title} | ${video.channel} | \`${video.youtubeId}\` | ${video.listedDuration} | ${video.startSeconds} | ${video.endSeconds} | ${video.required ? "yes" : "no"} | ${placement.get(video.code)} | \`${youtubeEmbedSrc(video)}\` |`,
    );
  }
  lines.push("");
  lines.push("## Reviewer notes");
  lines.push("");
  lines.push("Transcript source for V01–V08 and V10–V14: public watch-page text reviewed 12 October 2026. V09: oEmbed only. No full transcript is stored.");
  lines.push("");
  for (const video of Object.values(videos)) {
    lines.push(`### ${video.code} — ${video.title}`);
    lines.push("");
    lines.push(`- Channel: ${video.channel}. YouTube id \`${video.youtubeId}\`.`);
    lines.push(`- Listed duration ${video.listedDuration}. Player window ${video.startSeconds}–${video.endSeconds} seconds.`);
    lines.push(`- Required: ${video.required ? "yes" : "no"}.`);
    lines.push(`- Objectives supported: see the section named in the table above.`);
    lines.push(`- Notes: ${video.watchNote}`);
    lines.push(
      "- Limitation: the `end` parameter is the listed full-video length. A tighter in-video timestamp was not available because timed captions were not retrieved.",
    );
    lines.push("");
  }
  return lines.join("\n");
}

writeFileSync(path.join(outDir, "lessons.md"), lessonDoc());
writeFileSync(path.join(outDir, "assessments.md"), assessmentDoc());
writeFileSync(path.join(outDir, "videos.md"), videoDoc());
console.log("wrote lessons, assessments, videos");

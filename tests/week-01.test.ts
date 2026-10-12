import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { LessonExperience } from "@/components/LessonExperience";
import { lessons } from "@/content/week-01";
import { answerKey } from "@/content/week-01/answer-key";
import { videos } from "@/content/week-01/videos";
import { youtubeEmbedSrc } from "@/lib/embed";
import { gradeExercise, gradeQuestions } from "@/lib/grade";
import { lessonMinutes } from "@/lib/course";
import { countCompleted, emptyProgress, markSectionComplete } from "@/lib/progress";

const root = path.resolve(__dirname, "..");

function walk(dir: string, acc: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    if (entry === "node_modules" || entry === ".next" || entry === ".git") continue;
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, acc);
    else acc.push(full);
  }
  return acc;
}

const correctSnippets: Record<string, string> = {
  d1c1: "100 MWh",
  d1c2: "changing current",
  d1c3: "not a confirmed Viper Power nameplate",
  d1q1: "MW is power at an instant",
  d1q2: "stores almost no electrical energy",
  d1q3: "60 times each second",
  d1q4: "raises voltage",
  d1q5: "1,062 MWh",
  d1q6: "exercise input",
  d1q7: "Eastern Interconnection",
  d1q8: "balancing authority, the interconnection",
  d1q9: "spins the generator",
  d1q10: "Frequency falls",
  d1q11: "one quarter",
  d1q12: "354 MWh",
  d2c1: "condenser",
  d2c2: "fission",
  d2q1: "Rankine",
  d2q2: "Heat in at the boiler",
  d2q3: "steam turbine driving a generator",
  d2q4: "turns exhaust steam back into water",
  d2q5: "corrosion and deposits",
  d2q6: "cannot keep making steam power",
  d2q7: "91.0 percent",
  d2q8: "preliminary",
  d2q9: "Cool the exhaust steam",
  d2q10: "not a Rankine plant",
  d2q11: "Reactor cooling water and turbine steam are separate",
  d3c1: "Compressor, combustor, turbine",
  d3c2: "without burning more fuel",
  d3q1: "Brayton",
  d3q2: "Compressor, combustor, and turbine",
  d3q3: "heat-recovery steam generator",
  d3q4: "useful thermal energy",
  d3q5: "exceed 80 percent",
  d3q6: "Simple-cycle gas turbines",
  d3q7: "Do not copy it",
  d3q8: "Net or gross",
  d3q9: "33.8 percent",
  d3q10: "reciprocating engine",
  d3q11: "simple cycle",
  d4c1: "solar photovoltaic",
  d4c2: "Do not use it as an ERCOT",
  d4q1: "Actual energy divided",
  d4q2: "Combined cycle 58.4 percent. Gas turbines 14.1 percent",
  d4q3: "dispatched when power is scarce",
  d4q4: "24.9 percent",
  d4q5: "not Viper Power",
  d4q6: "no turbine",
  d4q7: "59.3 percent",
  d4q8: "faster than a rotating machine",
  d4q9: "13.7 percent",
  d4q10: "dam stores water",
  d4q11: "valuable hours are few",
  d5c1: "65 MW ISO",
  d5q1: "MW is the rate of power",
  d5q2: "stores almost no electrical energy",
  d5q3: "Brayton for the gas turbine",
  d5q4: "heat-recovery steam generator",
  d5q5: "useful heat or steam",
  d5q6: "costs more fuel per megawatt-hour",
  d5q7: "faster than a rotating machine",
  d5q8: "13.8 kV",
  d5q9: "Six GE MS7001B",
  d5q10: "less dense",
  d5q11: "transmission service provider",
  d5q12: "Section 16",
  d5q13: "two units",
  d5q14: "7B, 7E, or 7B/E",
};

describe("Week 1 lessons", () => {
  it("has five days in order, each inside the time cap", () => {
    expect(lessons.map((lesson) => lesson.day)).toEqual([1, 2, 3, 4, 5]);
    for (const lesson of lessons) {
      const minutes = lessonMinutes(lesson);
      expect(minutes).toBeGreaterThanOrEqual(60);
      expect(minutes).toBeLessThanOrEqual(90);
      expect(lesson.sections.every((section) => section.minutes >= 0)).toBe(true);
      const kinds = new Set(lesson.sections.map((section) => section.kind));
      for (const kind of ["intro", "core", "visual", "application", "exercise", "quiz"]) {
        expect(kinds.has(kind)).toBe(true);
      }
    }
  });

  it("gives every lesson at least 10 scored questions, all taught before the check", () => {
    for (const lesson of lessons) {
      expect(lesson.quizIds.length).toBeGreaterThanOrEqual(10);
      const quizSection = lesson.sections.find((section) => section.kind === "quiz");
      expect(quizSection).toBeTruthy();
      const quizIndex = lesson.sections.findIndex((section) => section.kind === "quiz");
      expect(quizIndex).toBe(lesson.sections.length - 1);
      const key = answerKey[lesson.id];
      expect(lesson.questions.length).toBeGreaterThanOrEqual(lesson.quizIds.length);
      for (const question of lesson.questions) {
        expect(question.choices).toHaveLength(4);
        const item = key.questions[question.id];
        expect(item, question.id).toBeTruthy();
        expect(question.choices[item.correctIndex]).toContain(correctSnippets[question.id]);
      }
    }
  });

  it("embeds every lesson video in its section with start and end, and no outbound watch link", () => {
    const used = new Set<string>();
    for (const lesson of lessons) {
      const html = renderToStaticMarkup(createElement(LessonExperience, { lesson }));
      expect(html).not.toMatch(/youtube\.com\/watch/);
      expect(html).not.toMatch(/youtu\.be\//);
      expect(html).not.toContain("Do not report 1,062");
      for (const section of lesson.sections) {
        const ids = section.videoIds ?? [];
        if (ids.length === 0) continue;
        const sectionAt = html.indexOf(`id="${section.id}"`);
        expect(sectionAt, section.id).toBeGreaterThan(-1);
        let cursor = sectionAt;
        for (const videoId of ids) {
          used.add(videoId);
          const video = videos[videoId];
          expect(video.youtubeId).toMatch(/^[A-Za-z0-9_-]{11}$/);
          const [minutes, seconds] = video.listedDuration.split(":").map(Number);
          expect(video.startSeconds).toBe(0);
          expect(video.endSeconds).toBe(minutes * 60 + seconds);
          expect(video.endSeconds).toBeGreaterThan(video.startSeconds);
          expect(section.kind).toBe("visual");
          const src = youtubeEmbedSrc(video);
          expect(src).toContain(`https://www.youtube.com/embed/${video.youtubeId}?`);
          expect(src).toContain(`start=${video.startSeconds}`);
          expect(src).toContain(`end=${video.endSeconds}`);
          expect(src).toContain("playsinline=1");
          const at = html.indexOf(src.replaceAll("&", "&amp;"), cursor);
          expect(at, `${lesson.id} ${videoId}`).toBeGreaterThan(cursor);
          const frame = html.slice(at - 400, at);
          expect(frame).toContain("video-aspect");
          expect(frame).toContain("<iframe");
          cursor = at;
        }
      }
      const iframeCount = html.match(/<iframe /g)?.length ?? 0;
      const expected = lesson.sections.reduce((sum, section) => sum + (section.videoIds?.length ?? 0), 0);
      expect(iframeCount).toBe(expected);
    }
    expect([...used].sort()).toEqual(Object.keys(videos).sort());
    const css = readFileSync(path.join(root, "app/globals.css"), "utf8");
    expect(css).toContain("aspect-ratio: 16 / 9");
    expect(css).toContain("width: 100%");
    expect(css).toContain("@media (max-width: 800px)");
  });

  it("keeps answer keys out of client components", () => {
    const clientFiles = walk(root).filter((file) => file.endsWith(".tsx") || file.endsWith(".ts"));
    for (const file of clientFiles) {
      if (file.includes(`${path.sep}tests${path.sep}`)) continue;
      if (file.includes(`${path.sep}scripts${path.sep}`)) continue;
      if (file.endsWith("answer-key.ts")) continue;
      if (file.endsWith(`${path.sep}app${path.sep}api${path.sep}quiz${path.sep}grade${path.sep}route.ts`)) continue;
      const text = readFileSync(file, "utf8");
      expect(text.includes("answer-key")).toBe(false);
    }
  });

  it("scores the worked calculations", () => {
    expect(gradeExercise(answerKey.w1d1.exercises.d1e1, 1062)?.correct).toBe(true);
    expect(gradeExercise(answerKey.w1d1.exercises.d1e1, 1061)?.correct).toBe(false);
    expect(gradeExercise(answerKey.w1d4.exercises.d4e1, 13.7)?.correct).toBe(true);
    expect(gradeExercise(answerKey.w1d5.exercises.d5e1, 15.4)?.correct).toBe(true);
    const lesson = lessons[0];
    const responses: Record<string, number> = {};
    for (const id of lesson.quizIds) responses[id] = answerKey.w1d1.questions[id].correctIndex;
    const graded = gradeQuestions(answerKey.w1d1.questions, responses);
    expect(graded.correct).toBe(lesson.quizIds.length);
    expect(graded.results[0].explanation.length).toBeGreaterThan(20);
  });

  it("stores section progress without dropping other lessons", () => {
    const once = markSectionComplete(emptyProgress(), "w1d1", "intro");
    const twice = markSectionComplete(once, "w1d1", "intro");
    expect(twice.completedSections).toEqual(["w1d1:intro"]);
    expect(countCompleted(twice, "w1d1", ["intro", "quiz"])).toBe(1);
  });

  it("does not contain forbidden plant identifiers", () => {
    const code = ["P", "H", "R"].join("");
    const surname = ["R", "obinson"].join("");
    const dotted = `P.H. ${surname}`;
    const banned = [new RegExp(`\\b${code}\\b`), new RegExp(surname, "i"), new RegExp(dotted.replace(/\./g, "\\."), "i")];
    for (const file of walk(root)) {
      if (file.endsWith(".png") || file.endsWith(".xlsx")) continue;
      const text = readFileSync(file, "utf8");
      for (const pattern of banned) {
        expect(text.match(pattern), `${file} matched a banned token`).toBeNull();
      }
    }
  });
});

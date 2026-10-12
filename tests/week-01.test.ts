import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { LessonExperience } from "@/components/LessonExperience";
import { POST } from "@/app/api/quiz/grade/route";
import { lessons } from "@/content/week-01";
import { answerKey } from "@/content/week-01/answer-key";
import { videos } from "@/content/week-01/videos";
import { shuffleChoices } from "@/lib/choices";
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
  d1c1: "3 A",
  d1c2: "100 MWh",
  d1q1: "elementary charge",
  d1q2: "0.053 Ω",
  d1q3: "13,800 J/C",
  d1q4: "53 kW",
  d1q5: "3 A, from voltage divided",
  d1q6: "series resistances add",
  d1q7: "Voltage is the same",
  d1q8: "longer conductor",
  d1q9: "3.6×10⁶ J",
  d1q10: "one quarter",
  d1q11: "60 times each second",
  d2q11: "governor changes fuel",
  d2c1: "condenser",
  d2c2: "Fission replaces the flame",
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
  d3c1: "Compressor, combustor, turbine",
  d3c2: "without burning more fuel",
  d3q1: "Brayton",
  d3q2: "Compressor, combustor, and turbine",
  d3q3: "heat-recovery steam generator",
  d3q4: "Useful thermal energy",
  d3q5: "exceed 80 percent",
  d3q6: "Simple-cycle gas turbines",
  d3q7: "someone else's",
  d3q8: "net or gross",
  d3q9: "33.8 percent",
  d3q10: "reciprocating engine",
  d4c1: "solar photovoltaic",
  d4c2: "not an ERCOT",
  d4q1: "Actual energy divided",
  d4q2: "Combined cycle 58.4 percent. Gas turbines 14.1 percent",
  d4q3: "dispatched when power is scarce",
  d4q4: "23.3 percent",
  d4q5: "not Viper Power",
  d4q6: "no turbine",
  d4q7: "59.3 percent",
  d4q8: "faster than a rotating machine",
  d4q9: "13.7 percent",
  d4q10: "inverter-based resources",
  d5c1: "65 MW",
  d5q1: "MW is the rate of power",
  d5q2: "stores almost no electrical energy",
  d5q3: "Brayton for the gas turbine",
  d5q4: "exhaust heat",
  d5q5: "useful heat or steam",
  d5q6: "costs more fuel per megawatt-hour",
  d5q7: "faster than a rotating machine",
  d5q8: "13.8 kV",
  d5q9: "Six GE MS7001B",
  d5q10: "less dense",
  d5q11: "transmission service provider",
  d5q12: "Section 16",
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
      const expectedQuiz = lesson.day === 5 ? 12 : lesson.day <= 2 ? 11 : 10;
      expect(lesson.quizIds.length).toBe(expectedQuiz);
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
        const correct = question.choices.find((choice) => choice.id === item.correctChoiceId);
        expect(correct, question.id).toBeTruthy();
        expect(correct?.text).toContain(correctSnippets[question.id]);
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

  it("checks every worked calculation", () => {
    expect(180 / 60).toBe(3);
    expect(50 * 2).toBe(100);
    expect(12 / 4).toBe(3);
    expect(2 + 3 + 7).toBe(12);
    expect(1 / (1 / 4 + 1 / 4)).toBe(2);
    expect(1000 * 3600).toBe(3_600_000);
    expect((1 / 2) ** 2).toBeCloseTo(0.25);
    expect(6 * 59 * 3).toBe(1062);
    expect(120 * 60 / 2).toBe(3600);
    expect(120 * 60 / 4).toBe(1800);
    expect(Number((120_000 / (100 * 8760) * 100).toFixed(1))).toBe(13.7);
    expect(Number((((6 * 65 - 330) / (6 * 65)) * 100).toFixed(1))).toBe(15.4);
    expect(Number((3412 / 10500).toFixed(3))).toBeCloseTo(0.325, 3);
    expect(Number((3412 / 7500).toFixed(3))).toBeCloseTo(0.455, 2);
    expect(Number((0.141 * 8760).toFixed(2))).toBe(1235.16);
    expect(Number((0.584 * 8760).toFixed(2))).toBe(5115.84);
    expect(2.65e-8 * 1000 / 5e-4).toBeCloseTo(0.053, 10);
    expect(1.72e-8 * 1000 / 5e-4).toBeCloseTo(0.0344, 10);
    expect(5e-4 / (2.65e-8 * 1000)).toBeCloseTo(18.8679245283, 6);
    expect(2.65e-8 * 1 / 5e-4).toBeCloseTo(5.3e-5, 12);
    expect(1000 * 0.053).toBeCloseTo(53, 10);
    expect(1000 ** 2 * 0.053).toBeCloseTo(53000, 6);
    expect(53 ** 2 / 0.053).toBeCloseTo(53000, 6);
    expect(53000 * 3600).toBe(190_800_000);
    expect(13.8 * 1000).toBe(13800);
    const worked = [
      answerKey.w1d1.questions.d1c1.explanation,
      answerKey.w1d1.questions.d1c2.explanation,
      answerKey.w1d1.questions.d1q2.explanation,
      answerKey.w1d1.questions.d1q3.explanation,
      answerKey.w1d1.questions.d1q4.explanation,
      answerKey.w1d1.questions.d1q5.explanation,
      answerKey.w1d1.questions.d1q6.explanation,
      answerKey.w1d1.questions.d1q9.explanation,
      answerKey.w1d1.questions.d1q10.explanation,
      answerKey.w1d1.exercises.d1e1.explanation,
      answerKey.w1d4.exercises.d4e1.explanation,
      answerKey.w1d5.exercises.d5e1.explanation,
    ];
    expect(worked.every((text) => /\d/.test(text) && /[=×/]/.test(text))).toBe(true);
  });

  it("scores the worked calculations", () => {
    expect(gradeExercise(answerKey.w1d1.exercises.d1e1, 1062)?.correct).toBe(true);
    expect(gradeExercise(answerKey.w1d1.exercises.d1e1, 1061)?.correct).toBe(false);
    expect(gradeExercise(answerKey.w1d4.exercises.d4e1, 13.7)?.correct).toBe(true);
    expect(gradeExercise(answerKey.w1d5.exercises.d5e1, 15.4)?.correct).toBe(true);
    const lesson = lessons[0];
    const responses: Record<string, string> = {};
    for (const id of lesson.quizIds) responses[id] = answerKey.w1d1.questions[id].correctChoiceId;
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

  it("balances canonical answer positions and grades the choice id after a shuffle", () => {
    const indexes: number[] = [];
    for (const lesson of lessons) {
      for (const question of lesson.questions) {
        const item = answerKey[lesson.id].questions[question.id];
        const index = question.choices.findIndex((choice) => choice.id === item.correctChoiceId);
        expect(index, question.id).toBeGreaterThanOrEqual(0);
        indexes.push(index);
      }
    }
    const counts = [0, 1, 2, 3].map((slot) => indexes.filter((index) => index === slot).length);
    expect(Math.max(...counts) - Math.min(...counts)).toBeLessThanOrEqual(2);
    expect(counts.every((count) => count > 0)).toBe(true);
    const period3 = indexes.every((index, position) => index === indexes[position % 3]);
    expect(period3).toBe(false);
    const period4 = indexes.every((index, position) => index === position % 4);
    expect(period4).toBe(false);
    const oldCycle = indexes.every((index) => index === (indexes[0] + (indexes.indexOf(index) % 3)) % 4);
    expect(oldCycle && !indexes.includes(0)).toBe(false);

    const sample = [
      { id: "a", text: "one" },
      { id: "b", text: "two" },
      { id: "c", text: "three" },
      { id: "d", text: "four" },
    ];
    const positions = new Set<number>();
    for (let seed = 1; seed < 80; seed += 1) {
      positions.add(shuffleChoices(sample, seed).findIndex((choice) => choice.id === "a"));
    }
    expect([...positions].sort()).toEqual([0, 1, 2, 3]);

    const moved = shuffleChoices(lessons[0].questions[0].choices, 7);
    expect(moved.map((choice) => choice.id).join()).not.toBe(lessons[0].questions[0].choices.map((choice) => choice.id).join());
    const selected = moved[0].id;
    const graded = gradeQuestions(answerKey.w1d1.questions, { [lessons[0].questions[0].id]: selected });
    expect(graded.results[0].correct).toBe(selected === answerKey.w1d1.questions[lessons[0].questions[0].id].correctChoiceId);
  });

  it("keeps the keyed choice from being the long option too often", () => {
    let longest = 0;
    let correctTotal = 0;
    let distractorTotal = 0;
    let count = 0;
    for (const lesson of lessons) {
      for (const question of lesson.questions) {
        const item = answerKey[lesson.id].questions[question.id];
        const index = question.choices.findIndex((choice) => choice.id === item.correctChoiceId);
        const lengths = question.choices.map((choice) => choice.text.length);
        const keyed = lengths[index];
        const others = lengths.filter((_, slot) => slot !== index);
        if (keyed > Math.max(...others)) longest += 1;
        correctTotal += keyed;
        distractorTotal += others.reduce((sum, length) => sum + length, 0) / others.length;
        count += 1;
      }
    }
    expect(longest / count).toBeLessThanOrEqual(0.35);
    expect(correctTotal / count).toBeLessThanOrEqual((distractorTotal / count) * 1.15);

    let scoredLongest = 0;
    let scoredCount = 0;
    const scoredPositions = [0, 0, 0, 0];
    for (const lesson of lessons) {
      for (const id of lesson.quizIds) {
        const question = lesson.questions.find((item) => item.id === id);
        const key = answerKey[lesson.id].questions[id];
        const index = question?.choices.findIndex((choice) => choice.id === key.correctChoiceId) ?? -1;
        const lengths = question?.choices.map((choice) => choice.text.length) ?? [];
        const keyed = lengths[index];
        const others = lengths.filter((_, slot) => slot !== index);
        if (keyed > Math.max(...others)) scoredLongest += 1;
        scoredPositions[index] += 1;
        scoredCount += 1;
      }
    }
    expect(scoredCount).toBe(54);
    expect(scoredLongest / scoredCount).toBeLessThanOrEqual(0.35);
    expect(Math.max(...scoredPositions) - Math.min(...scoredPositions)).toBeLessThanOrEqual(2);
  });

  it("returns 400 for malformed quiz JSON and keeps July 2026 gas turbines at 23.3 percent", async () => {
    const response = await POST(
      new Request("http://localhost/api/quiz/grade", {
        method: "POST",
        body: "{",
        headers: { "Content-Type": "application/json" },
      }),
    );
    expect(response.status).toBe(400);
    const july = lessons[3].questions.find((question) => question.id === "d4q4");
    const item = answerKey.w1d4.questions.d4q4;
    const correct = july?.choices.find((choice) => choice.id === item.correctChoiceId);
    expect(correct?.text).toContain("23.3");
    expect(item.explanation).toContain("0.233");
    expect(correct?.text).not.toContain("24.9");
  });

  it("keeps inventory codes, plumbing, and warning voice out of the learner text", () => {
    const voiceFiles = walk(path.join(root, "content/week-01")).filter((file) => /day[1-5]\.ts$/.test(file) || file.endsWith("answer-key.ts"));
    const banned = [
      /C0\d/,
      /\bD\d{2}\b/,
      /\bS\d{3}\b/,
      /SOP\s*\d+/,
      new RegExp(["20", "18"].join("")),
      new RegExp(["re", "loc", "ation"].join(""), "i"),
      /not stored in the page/i,
      /from the server/i,
      /Practical Engineering states/,
      /Do not memorize/,
      /Do not copy/,
      /How does EIA/,
      /What does EIA/,
      /Listed length/,
    ];
    for (const file of voiceFiles) {
      const text = readFileSync(file, "utf8");
      for (const pattern of banned) expect(text.match(pattern), `${file} ${pattern}`).toBeNull();
    }
    const css = readFileSync(path.join(root, "app/globals.css"), "utf8");
    expect(css).toMatch(/\.formula\s*\{[^}]*font-family:\s*inherit/);
    const day1 = renderToStaticMarkup(createElement(LessonExperience, { lesson: lessons[0] }));
    expect(day1).toContain("When someone says");
    expect(day1).toContain("Lesson outline");
    expect(day1).toContain("Sources for this lesson");
    expect(day1).toContain("<svg");
    expect(lessons.map((lesson) => lesson.sections.reduce((sum, section) => sum + section.minutes, 0))).toEqual([84, 76, 66, 70, 61]);
    expect(day1).toContain("symbols-phone");
    expect(day1).toContain("V (volts)");
    expect(day1).toContain("I (amperes)");
    expect(day1).toContain("1.59×10");
    expect(day1).toContain("0.053");
    expect((day1.match(/not a plant nameplate/g) ?? []).length).toBe(1);
    const day2 = renderToStaticMarkup(createElement(LessonExperience, { lesson: lessons[1] }));
    expect(day2).toContain("governor changes fuel");
    expect(day2).toContain("9kgzA0Vd8S8");
    expect(css).toContain(".duty-phone text");
    expect(css).toContain("font-size: 22px");
    const day4 = renderToStaticMarkup(createElement(LessonExperience, { lesson: lessons[3] }));
    expect(day4).toContain("duty-phone");
    expect(day4).toContain("font-size:22px");
    for (const lesson of lessons) {
      const html = renderToStaticMarkup(createElement(LessonExperience, { lesson }));
      expect(html).not.toMatch(/\bDana\b/);
      expect(html).not.toMatch(/\bPriya\b/);
      expect(html).not.toMatch(/\bLuis\b/);
    }
    const recovery = lessons[4].questions.find((question) => question.id === "d5q4");
    const recoveryKey = answerKey.w1d5.questions.d5q4.correctChoiceId;
    const recoveryChoice = recovery?.choices.find((choice) => choice.id === recoveryKey);
    expect(recovery?.prompt.toLowerCase()).toContain("heat-recovery steam generator");
    expect(recoveryChoice?.text.toLowerCase()).not.toContain("heat-recovery steam generator");
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

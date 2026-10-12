import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import HomePage from "@/app/page";
import OperatorFundamentalsPage from "@/app/operator-fundamentals/page";
import { ASPECTS, BULLETS, COMPONENTS, type BulletId } from "@/content/operator-fundamentals/coverage";
import {
  courseMinutesTotal,
  lessonMinutesTotal,
  modulesInTeachingOrder,
  operatorCourse,
  operatorLessons,
} from "@/content/operator-fundamentals";

const root = path.resolve(__dirname, "..");
const kinds = ["intro", "core", "checkpoint", "visual", "example", "terms", "quiz", "summary"] as const;

function walk(dir: string, acc: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    if (entry === "node_modules" || entry === ".next" || entry === ".git") continue;
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, acc);
    else acc.push(full);
  }
  return acc;
}

describe("operator fundamentals outline", () => {
  it("lists 46 lessons in 13 teaching modules, with every spec module present", () => {
    expect(operatorLessons).toHaveLength(46);
    const modules = modulesInTeachingOrder();
    expect(modules).toHaveLength(13);
    expect(modules[0].specNumber).toBeNull();
    const specNumbers = modules.map((module) => module.specNumber).filter((value): value is number => value !== null);
    expect(specNumbers).toEqual([1, 11, 4, 3, 2, 5, 8, 6, 10, 7, 9, 12]);
    expect(new Set(specNumbers).size).toBe(12);
    expect(operatorLessons.map((lesson) => lesson.number)).toEqual(operatorLessons.map((_, index) => index + 1));
  });

  it("keeps every lesson between 60 and 90 minutes, with the planned section shape", () => {
    for (const lesson of operatorLessons) {
      const minutes = lesson.sections.reduce((sum, section) => sum + section.minutes, 0);
      expect(minutes, lesson.id).toBe(lesson.minutes);
      expect(minutes).toBeGreaterThanOrEqual(60);
      expect(minutes).toBeLessThanOrEqual(90);
      expect(lesson.objectives.length).toBeGreaterThanOrEqual(3);
      expect(lesson.objectives.length).toBeLessThanOrEqual(5);
      const present = new Set(lesson.sections.map((section) => section.kind));
      for (const kind of kinds) expect(present.has(kind), `${lesson.id} ${kind}`).toBe(true);
      expect(lesson.sections.filter((section) => section.kind === "checkpoint").length).toBeGreaterThanOrEqual(2);
      expect(lesson.sections.some((section) => section.kind === "quiz" && section.title.includes("10 questions"))).toBe(
        true,
      );
      expect(lesson.video.candidateTopic.length).toBeGreaterThan(0);
      expect(lesson.video.watchFor.length).toBeGreaterThan(0);
      expect(lesson.video.takeaways).toHaveLength(2);
      expect(lesson.diagram.title.length).toBeGreaterThan(0);
      expect(lesson.terms.length).toBeGreaterThanOrEqual(3);
      expect(lesson.example.length).toBeGreaterThan(0);
    }
    expect(operatorCourse.knowledgeCheckCount).toBe(10);
    expect(Math.min(...operatorLessons.map((lesson) => lesson.minutes))).toBe(75);
    expect(Math.max(...operatorLessons.map((lesson) => lesson.minutes))).toBe(83);
  });

  it("covers every spec bullet and every component aspect, with earlier prerequisites", () => {
    const covered = new Set<BulletId>();
    const ids = new Set(operatorLessons.map((lesson) => lesson.id));
    operatorLessons.forEach((lesson, index) => {
      const earlier = new Set(operatorLessons.slice(0, index).map((item) => item.id));
      for (const prerequisite of lesson.prerequisites) {
        expect(ids.has(prerequisite), prerequisite).toBe(true);
        expect(earlier.has(prerequisite), `${lesson.id} -> ${prerequisite}`).toBe(true);
      }
      for (const bullet of lesson.covers) {
        expect(BULLETS.some((item) => item.id === bullet), bullet).toBe(true);
        covered.add(bullet);
      }
    });
    expect([...covered].sort()).toEqual(BULLETS.map((bullet) => bullet.id).sort());
    for (const component of COMPONENTS) {
      for (const aspect of ASPECTS) {
        const hits = operatorLessons.filter((lesson) => (lesson.parts[component.id] ?? []).includes(aspect.id));
        expect(hits.length, `${component.id} ${aspect.id}`).toBeGreaterThan(0);
      }
    }
  });

  it("blueprints a 30-question final that does not qualify anyone", () => {
    const questions = operatorCourse.finalAssessment.domains.reduce((sum, domain) => sum + domain.questions, 0);
    expect(operatorCourse.finalAssessment.questionCount).toBe(30);
    expect(questions).toBe(30);
    expect(operatorCourse.finalAssessment.minutes).toBe(60);
    expect(lessonMinutesTotal()).toBe(3522);
    expect(courseMinutesTotal()).toBe(3582);
    expect(operatorCourse.boundary.toLowerCase()).toContain("does not qualify");
  });

  it("renders both course entries and a placeholder-free outline with no lesson routes", () => {
    const home = renderToStaticMarkup(createElement(HomePage));
    expect(home).toContain("Power Plant Fundamentals for Project Managers");
    expect(home).toContain("Peaking Power Plant Operator Fundamentals");
    expect(home).toContain('href="/week/1"');
    expect(home).toContain('href="/operator-fundamentals"');

    const page = renderToStaticMarkup(createElement(OperatorFundamentalsPage));
    expect(page).toContain("does not qualify");
    expect(page).toContain("Frame 7B");
    expect(page).toContain("Lesson 46");
    expect(page).toContain("Talking the job: operator, supervisor, and dispatcher");
    for (const courseModule of modulesInTeachingOrder()) expect(page).toContain(courseModule.title);
    expect(page).not.toMatch(/youtube\.com/i);
    expect(page.toLowerCase()).not.toMatch(/\bimagine\b/);
    expect(page.toLowerCase()).not.toContain("placeholder");
    expect(page).not.toContain("TODO");
    expect(page.toLowerCase()).not.toContain("coming soon");
    expect(page.toLowerCase()).not.toContain("lorem");
    expect(page).not.toMatch(/\bDana\b|\bPriya\b|\bLuis\b/);
    expect(page).not.toMatch(/href="\/operator-fundamentals\/[^"]+"/);
    expect(existsSync(path.join(root, "app/operator-fundamentals/page.tsx"))).toBe(true);
    const routes = walk(path.join(root, "app/operator-fundamentals")).filter((file) => file.endsWith("page.tsx"));
    expect(routes).toEqual([path.join(root, "app/operator-fundamentals/page.tsx")]);
  });

  it("keeps the evidence files aligned with the data", () => {
    const outline = readFileSync(path.join(root, "reviews/operator-fundamentals/outline/outline.md"), "utf8");
    const matrix = readFileSync(path.join(root, "reviews/operator-fundamentals/outline/coverage-matrix.md"), "utf8");
    const budget = readFileSync(path.join(root, "reviews/operator-fundamentals/outline/time-budget.md"), "utf8");
    const references = readFileSync(path.join(root, "reviews/operator-fundamentals/outline/references.md"), "utf8");
    const decisions = readFileSync(path.join(root, "reviews/operator-fundamentals/outline/scope-decisions.md"), "utf8");
    expect(budget).toContain(`${lessonMinutesTotal()} minutes`);
    expect(budget).toContain(`${courseMinutesTotal()} minutes`);
    expect(outline).toContain("58 hours 42 minutes");
    expect(outline).toContain("59 hours 42 minutes");
    for (const lesson of operatorLessons) expect(outline).toContain(lesson.title);
    for (const bullet of BULLETS) expect(matrix).toContain(bullet.text);
    for (const name of ["DOE", "EIA", "OSHA", "FERC", "NERC", "ERCOT", "PJM", "OEM", "OpenStax"]) {
      expect(references, name).toContain(name === "DOE" ? "Department of Energy" : name);
    }
    expect(references).not.toMatch(/youtube\.com/i);
    expect(decisions.toLowerCase()).toContain("does not qualify");
    const corpus = [outline, matrix, budget, references, decisions].join("\n");
    const code = ["P", "H", "R"].join("");
    const surname = ["R", "obinson"].join("");
    expect(corpus).not.toMatch(new RegExp(`\\b${code}\\b`));
    expect(corpus.toLowerCase()).not.toContain(surname.toLowerCase());
  });
});

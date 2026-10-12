import { lessons } from "@/content/week-01";
import type { Lesson } from "@/lib/types";

export const course = {
  siteName: "Training",
  title: "Power Plant Fundamentals for Project Managers",
  audience:
    "A project manager with a military and project background who is new to power generation and needs technical literacy, not an operator qualification.",
  workedExample:
    "Viper Power, an anonymized six-unit simple-cycle gas peaker in ERCOT, is the worked example.",
};

export const week1 = {
  id: "1",
  code: "week-01",
  title: "Power Generation Fundamentals",
  focus: "How electricity is produced and delivered",
  lessons,
};

export function lessonMinutes(lesson: Lesson): number {
  return lesson.sections.reduce((sum, section) => sum + section.minutes, 0);
}

export function getLesson(weekId: string, day: string): Lesson | undefined {
  if (weekId !== "1") return undefined;
  const dayNumber = Number(day);
  return lessons.find((lesson) => lesson.day === dayNumber);
}

export function getLessonById(lessonId: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === lessonId);
}

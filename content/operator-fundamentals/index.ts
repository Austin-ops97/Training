import { lessonsA } from "@/content/operator-fundamentals/lessons-a";
import { lessonsB } from "@/content/operator-fundamentals/lessons-b";
import { finalAssessment, operatorModules } from "@/content/operator-fundamentals/modules";
import type { OutlineLesson, OutlineSection } from "@/content/operator-fundamentals/schema";

export const operatorCourse = {
  id: "operator-fundamentals",
  title: "Peaking Power Plant Operator Fundamentals",
  audience:
    "An adult with no power, electrical, mechanical, industrial, or market background, preparing to begin supervised, site-specific operator training at a US natural-gas peaking plant.",
  boundary:
    "This course does not qualify anyone to operate a plant, and it does not authorize hazardous work. Approved facility procedures and site authorization govern every real action.",
  workedExample:
    "Most lessons stay general to US gas peakers and say where designs differ. Viper Power, six GE Frame 7B simple-cycle peakers in ERCOT, is a factual worked example when a plant is named.",
  knowledgeCheckCount: 10,
  finalAssessment,
};

export type NumberedLesson = OutlineLesson & { number: number; minutes: number };

function minutesOf(sections: OutlineSection[]): number {
  return sections.reduce((sum, section) => sum + section.minutes, 0);
}

export const operatorLessons: NumberedLesson[] = [...lessonsA, ...lessonsB].map((lesson, index) => ({
  ...lesson,
  number: index + 1,
  minutes: minutesOf(lesson.sections),
}));

export function moduleById(id: string) {
  const found = operatorModules.find((item) => item.id === id);
  if (!found) throw new Error(`Missing module ${id}`);
  return found;
}

export function modulesInTeachingOrder() {
  const seen: string[] = [];
  for (const lesson of operatorLessons) {
    if (!seen.includes(lesson.moduleId)) seen.push(lesson.moduleId);
  }
  return seen.map((id) => ({
    ...moduleById(id),
    lessons: operatorLessons.filter((lesson) => lesson.moduleId === id),
  }));
}

export function lessonMinutesTotal(): number {
  return operatorLessons.reduce((sum, lesson) => sum + lesson.minutes, 0);
}

export function courseMinutesTotal(): number {
  return lessonMinutesTotal() + finalAssessment.minutes;
}

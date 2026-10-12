import { day1 } from "./day1";
import { day2 } from "./day2";
import { day3 } from "./day3";
import { day4 } from "./day4";
import { day5 } from "./day5";
import type { Lesson } from "@/lib/types";

export const lessons: Lesson[] = [day1, day2, day3, day4, day5];

export function questionMap(lesson: Lesson) {
  return new Map(lesson.questions.map((question) => [question.id, question]));
}

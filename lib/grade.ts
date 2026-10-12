import type { AnswerItem, ExerciseAnswer } from "@/lib/types";

export type GradeResult = {
  id: string;
  selected: number;
  correct: boolean;
  correctIndex: number;
  explanation: string;
};

export type ExerciseGrade = {
  id: string;
  submitted: number;
  correct: boolean;
  expected: number;
  explanation: string;
};

export function gradeQuestions(
  key: Record<string, AnswerItem>,
  responses: Record<string, number>,
): { results: GradeResult[]; correct: number; answered: number } {
  const results: GradeResult[] = [];
  let correct = 0;
  for (const [id, selected] of Object.entries(responses)) {
    const item = key[id];
    if (!item) continue;
    if (!Number.isInteger(selected)) continue;
    const isCorrect = selected === item.correctIndex;
    if (isCorrect) correct += 1;
    results.push({
      id,
      selected,
      correct: isCorrect,
      correctIndex: item.correctIndex,
      explanation: item.explanation,
    });
  }
  return { results, correct, answered: results.length };
}

export function gradeExercise(
  spec: ExerciseAnswer | undefined,
  value: number,
): ExerciseGrade | null {
  if (!spec || !Number.isFinite(value)) return null;
  const correct = Math.abs(value - spec.expected) <= spec.tolerance;
  return {
    id: "",
    submitted: value,
    correct,
    expected: spec.expected,
    explanation: spec.explanation,
  };
}

import { NextResponse } from "next/server";
import { answerKey } from "@/content/week-01/answer-key";
import { gradeExercise, gradeQuestions } from "@/lib/grade";
import { getLessonById } from "@/lib/course";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    lessonId?: string;
    questions?: Record<string, number>;
    exercise?: { id?: string; value?: number };
  };
  if (!body.lessonId || !answerKey[body.lessonId] || !getLessonById(body.lessonId)) {
    return NextResponse.json({ error: "Unknown lesson." }, { status: 404 });
  }
  const key = answerKey[body.lessonId];
  const questions = gradeQuestions(key.questions, body.questions ?? {});
  let exercise = null;
  if (body.exercise?.id) {
    const graded = gradeExercise(key.exercises[body.exercise.id], Number(body.exercise.value));
    if (!graded) {
      return NextResponse.json({ error: "Unknown exercise." }, { status: 400 });
    }
    exercise = { ...graded, id: body.exercise.id };
  }
  return NextResponse.json({ questions, exercise });
}

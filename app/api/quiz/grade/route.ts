import { NextResponse } from "next/server";
import { answerKey } from "@/content/week-01/answer-key";
import { gradeExercise, gradeQuestions } from "@/lib/grade";
import { getLessonById } from "@/lib/course";

export async function POST(request: Request) {
  let body: {
    lessonId?: string;
    questions?: Record<string, string>;
    exercise?: { id?: string; value?: number };
  };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "The request was not valid JSON." }, { status: 400 });
  }
  if (!body || typeof body !== "object" || !body.lessonId || !answerKey[body.lessonId] || !getLessonById(body.lessonId)) {
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

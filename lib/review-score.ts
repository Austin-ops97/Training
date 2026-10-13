import type { ReviewQuestion } from "@/content/textbook/schema";
export function scoreReview(questions: ReviewQuestion[], answers: Record<string,number>) {
  return {correct:questions.filter(q=>answers[q.id]===q.answer).length,total:questions.length,complete:questions.every(q=>Number.isInteger(answers[q.id]) && answers[q.id]>=0 && answers[q.id]<q.choices.length)};
}

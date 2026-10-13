import { notFound } from "next/navigation";
import { getLesson } from "@/lib/course";
import { LessonExperience } from "@/components/LessonExperience";

export default async function LessonPage({ params }: { params: Promise<{ weekId: string; day: string }> }) {
  const { weekId, day } = await params;
  const lesson = getLesson(weekId, day);
  if (!lesson) notFound();
  return <LessonExperience lesson={lesson} />;
}

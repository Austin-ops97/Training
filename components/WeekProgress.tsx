"use client";

import { useEffect, useState } from "react";
import { emptyProgress, type ProgressState } from "@/lib/progress";

const STORAGE_KEY = "training.week01.progress.v1";

export function readProgress(): ProgressState {
  if (typeof window === "undefined") return emptyProgress();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyProgress();
    const parsed = JSON.parse(raw) as ProgressState;
    return {
      completedSections: parsed.completedSections ?? [],
      quizzes: parsed.quizzes ?? {},
      exercises: parsed.exercises ?? {},
    };
  } catch {
    return emptyProgress();
  }
}

export function writeProgress(state: ProgressState) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function WeekProgress({ lessonIds }: { lessonIds: string[] }) {
  const [done, setDone] = useState(0);
  useEffect(() => {
    const state = readProgress();
    setDone(lessonIds.filter((id) => state.quizzes[id]).length);
  }, [lessonIds]);
  return (
    <p className="meta" aria-live="polite">
      Knowledge checks saved in this browser: {done} of {lessonIds.length}.
    </p>
  );
}

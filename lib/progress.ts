export type ProgressState = {
  completedSections: string[];
  quizzes: Record<string, { correct: number; total: number; completedAt: string }>;
  exercises: Record<string, boolean>;
};

export const emptyProgress = (): ProgressState => ({
  completedSections: [],
  quizzes: {},
  exercises: {},
});

export function sectionKey(lessonId: string, sectionId: string): string {
  return `${lessonId}:${sectionId}`;
}

export function markSectionComplete(
  state: ProgressState,
  lessonId: string,
  sectionId: string,
): ProgressState {
  const key = sectionKey(lessonId, sectionId);
  if (state.completedSections.includes(key)) return state;
  return { ...state, completedSections: [...state.completedSections, key] };
}

export function countCompleted(
  state: ProgressState,
  lessonId: string,
  sectionIds: string[],
): number {
  return sectionIds.filter((id) => state.completedSections.includes(sectionKey(lessonId, id))).length;
}

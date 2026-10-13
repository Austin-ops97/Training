export const READING_KEY = "training.textbook.progress.v1";
export type ReadingProgress = { version: 1; completed: string[]; lastChapter?: string; notes: Record<string,string>; scores: Record<string,{correct:number;total:number}> };
export const blankReadingProgress = (): ReadingProgress => ({version:1,completed:[],notes:{},scores:{}});
export function parseReadingProgress(raw: string | null): ReadingProgress {
  if (!raw) return blankReadingProgress();
  try {
    const value: unknown = JSON.parse(raw);
    if (!value || typeof value !== "object") return blankReadingProgress();
    const data = value as Record<string,unknown>;
    if (data.version !== 1) return blankReadingProgress();
    const notes: Record<string,string> = {};
    if (data.notes && typeof data.notes === "object") for (const [k,v] of Object.entries(data.notes)) if (typeof v === "string") notes[k] = v;
    const scores: ReadingProgress["scores"] = {};
    if (data.scores && typeof data.scores === "object") for (const [k,v] of Object.entries(data.scores)) {
      if (v && typeof v === "object") {
        const score = v as Record<string,unknown>;
        if (typeof score.correct === "number" && typeof score.total === "number" && Number.isInteger(score.correct) && Number.isInteger(score.total) && score.total > 0 && score.correct >= 0 && score.correct <= score.total) scores[k] = {correct:score.correct,total:score.total};
      }
    }
    return {version:1,completed:Array.isArray(data.completed) ? [...new Set(data.completed.filter((v):v is string => typeof v === "string"))] : [],lastChapter:typeof data.lastChapter === "string" ? data.lastChapter : undefined,notes,scores};
  } catch { return blankReadingProgress(); }
}
export function readReadingProgress(): ReadingProgress {
  try { return parseReadingProgress(window.localStorage.getItem(READING_KEY)); } catch { return blankReadingProgress(); }
}
export function saveReadingProgress(update: (current: ReadingProgress) => ReadingProgress): boolean {
  try {
    const next = update(readReadingProgress());
    window.localStorage.setItem(READING_KEY,JSON.stringify(next));
    window.dispatchEvent(new Event("reading-progress"));
    return true;
  } catch { return false; }
}

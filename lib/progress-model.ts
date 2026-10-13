export const READING_KEY = "training.textbook.progress.v1";
export type ReadingProgress = { answers: Record<string,number>; submitted: Record<string,boolean>; version: 1; completed: string[]; lastChapter?: string; notes: Record<string,string>; scores: Record<string,{correct:number;total:number}> };
export const blankReadingProgress = (): ReadingProgress => ({version:1,completed:[],notes:{},scores:{},answers:{},submitted:{}});
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
    const answers: Record<string,number> = {};
    if(data.answers && typeof data.answers === "object") for(const [k,v] of Object.entries(data.answers)) if(typeof v === "number" && Number.isInteger(v) && v >= 0 && v < 20) answers[k]=v;
    const submitted: Record<string,boolean> = {};
    if(data.submitted && typeof data.submitted === "object") for(const [k,v] of Object.entries(data.submitted)) if(typeof v === "boolean") submitted[k]=v;
    return {answers,submitted,version:1,completed:Array.isArray(data.completed) ? [...new Set(data.completed.filter((v):v is string => typeof v === "string"))] : [],lastChapter:typeof data.lastChapter === "string" ? data.lastChapter : undefined,notes,scores};
  } catch { return blankReadingProgress(); }
}

export type ProgressPatch = { completed?: Record<string,boolean>; lastChapter?: string; notes?: ReadingProgress["notes"]; scores?: ReadingProgress["scores"]; answers?: Record<string,number|null>; submitted?: Record<string,boolean> };
export function applyProgressPatch(current: ReadingProgress, patch: ProgressPatch): ReadingProgress {
  const completed=new Set(current.completed);
  for(const [slug,done] of Object.entries(patch.completed??{})) { if(done) completed.add(slug); else completed.delete(slug); }
  const answers={...current.answers};
  for(const [id,answer] of Object.entries(patch.answers??{})) { if(answer===null) delete answers[id]; else answers[id]=answer; }
  return {...current,completed:[...completed],lastChapter:patch.lastChapter??current.lastChapter,notes:{...current.notes,...patch.notes},scores:{...current.scores,...patch.scores},answers,submitted:{...current.submitted,...patch.submitted}};
}
export function diffProgress(before: ReadingProgress, after: ReadingProgress): ProgressPatch {
  const patch: ProgressPatch={};
  for(const slug of new Set([...before.completed,...after.completed])) if(before.completed.includes(slug)!==after.completed.includes(slug)) (patch.completed??={})[slug]=after.completed.includes(slug);
  if(after.lastChapter && before.lastChapter!==after.lastChapter) patch.lastChapter=after.lastChapter;
  for(const key of ["notes","scores","submitted"] as const) for(const [id,value] of Object.entries(after[key])) if(JSON.stringify(before[key][id])!==JSON.stringify(value)) Object.assign(patch,{[key]:{...patch[key],[id]:value}});
  for(const id of new Set([...Object.keys(before.answers),...Object.keys(after.answers)])) if(before.answers[id]!==after.answers[id]) (patch.answers??={})[id]=after.answers[id]??null;
  return patch;
}
export function combinePatches(a:ProgressPatch,b:ProgressPatch):ProgressPatch {
  const combined={...a,...b,completed:{...a.completed,...b.completed},notes:{...a.notes,...b.notes},scores:{...a.scores,...b.scores},answers:{...a.answers,...b.answers},submitted:{...a.submitted,...b.submitted}};
  return Object.fromEntries(Object.entries(combined).filter(([,value])=>typeof value!=="object" || Object.keys(value).length>0)) as ProgressPatch;
}

import type { AspectId, BulletId, ComponentId } from "@/content/operator-fundamentals/coverage";

export type SectionKind = "intro" | "core" | "checkpoint" | "visual" | "example" | "terms" | "quiz" | "summary";

export type OutlineSection = {
  title: string;
  minutes: number;
  kind: SectionKind;
};

/** Eight-point plan for one component, written for this lesson. */
export type ComponentTreatment = {
  component: ComponentId;
  what: string;
  principle: string;
  how: string;
  parts: string;
  cycle: string;
  interaction: string;
  operator: string;
  /** Failure mechanisms and observable symptoms. No limits, setpoints, or repair steps. */
  trouble: string;
};

export const TREATMENT_KEYS = [
  "what",
  "principle",
  "how",
  "parts",
  "cycle",
  "interaction",
  "operator",
  "trouble",
] as const;

export type OutlineLesson = {
  id: string;
  moduleId: string;
  title: string;
  objectives: [string, string, string] | [string, string, string, string] | [string, string, string, string, string];
  topics: string[];
  prerequisites: string[];
  covers: BulletId[];
  parts: Partial<Record<ComponentId, AspectId[]>>;
  treatments?: ComponentTreatment[];
  example: string;
  video: { candidateTopic: string; watchFor: string; takeaways: [string, string] };
  diagram: { title: string; shows: string };
  terms: string[];
  sections: OutlineSection[];
};

/**
 * Minutes are chosen per lesson from the topic load.
 * Order: intro, first core, checkpoint, second core, checkpoint,
 * then the optional extra core, then visual, example, terms, quiz, summary.
 * A lesson with no `extra` title uses the 10-number row.
 */
export const LESSON_MINUTES: Record<string, number[]> = {
  "of-01": [4, 10, 3, 10, 3, 6, 6, 4, 12, 3],
  "of-02": [5, 12, 4, 13, 4, 8, 7, 7, 5, 12, 4],
  "of-03": [5, 12, 3, 12, 4, 7, 6, 4, 12, 4],
  "of-04": [4, 9, 3, 11, 3, 5, 6, 4, 12, 3],
  "of-05": [5, 10, 3, 12, 3, 6, 6, 4, 12, 4],
  "of-06": [5, 11, 4, 12, 3, 6, 7, 5, 12, 4],
  "of-07": [5, 12, 4, 14, 4, 10, 7, 8, 5, 12, 4],
  "of-07v": [5, 11, 4, 13, 4, 9, 7, 7, 5, 12, 4],
  "of-08": [5, 12, 4, 13, 4, 6, 7, 4, 12, 4],
  "of-09": [5, 12, 3, 14, 4, 7, 7, 4, 12, 4],
  "of-10": [5, 11, 3, 12, 3, 6, 7, 4, 12, 4],
  "of-11": [5, 14, 4, 14, 4, 8, 7, 7, 5, 12, 4],
  "of-12": [5, 10, 3, 11, 4, 6, 6, 4, 12, 4],
  "of-13": [5, 12, 4, 13, 4, 6, 7, 5, 12, 4],
  "of-14": [5, 13, 4, 14, 4, 7, 7, 4, 12, 4],
  "of-15": [5, 14, 4, 13, 4, 7, 8, 5, 12, 4],
  "of-15b": [5, 13, 4, 14, 4, 8, 7, 7, 5, 12, 4],
  "of-16": [5, 12, 4, 13, 4, 7, 6, 5, 12, 4],
  "of-17": [5, 13, 4, 14, 4, 7, 7, 5, 12, 4],
  "of-18": [6, 14, 4, 15, 4, 10, 7, 7, 5, 12, 4],
  "of-19": [5, 14, 4, 14, 4, 12, 7, 8, 5, 12, 4],
  "of-19b": [5, 14, 4, 14, 4, 10, 7, 8, 5, 12, 4],
  "of-20": [5, 13, 4, 14, 4, 10, 7, 7, 5, 12, 4],
  "of-21": [5, 14, 4, 13, 4, 11, 7, 7, 5, 12, 4],
  "of-22": [6, 13, 4, 14, 4, 11, 8, 8, 5, 12, 4],
  "of-23": [5, 14, 4, 14, 4, 12, 8, 8, 5, 12, 4],
  "of-24": [5, 13, 4, 14, 4, 11, 7, 8, 5, 12, 4],
  "of-25": [6, 14, 4, 14, 4, 12, 7, 8, 5, 12, 4],
  "of-26": [5, 13, 4, 14, 4, 11, 8, 7, 5, 12, 4],
  "of-27": [5, 13, 4, 15, 4, 10, 7, 8, 5, 12, 4],
  "of-28": [5, 12, 4, 14, 4, 7, 8, 5, 12, 4],
  "of-29": [5, 14, 4, 15, 4, 7, 8, 5, 12, 4],
  "of-29b": [5, 12, 4, 15, 4, 8, 7, 7, 5, 12, 4],
  "of-30": [5, 14, 4, 13, 4, 8, 7, 7, 5, 12, 4],
  "of-30b": [5, 12, 4, 13, 4, 12, 7, 7, 5, 12, 4],
  "of-31": [5, 14, 4, 13, 4, 9, 7, 7, 5, 12, 4],
  "of-31b": [5, 12, 4, 13, 4, 7, 8, 5, 12, 4],
  "of-32": [5, 15, 4, 13, 4, 10, 7, 8, 5, 12, 4],
  "of-32b": [5, 13, 4, 15, 4, 8, 7, 7, 5, 12, 4],
  "of-33": [5, 14, 4, 14, 4, 8, 7, 8, 5, 12, 4],
  "of-34": [5, 12, 4, 14, 4, 6, 7, 5, 12, 4],
  "of-35": [5, 12, 4, 13, 4, 7, 8, 4, 12, 4],
  "of-36": [6, 13, 4, 14, 4, 8, 7, 7, 5, 12, 4],
  "of-36b": [5, 13, 4, 12, 4, 7, 8, 5, 12, 4],
  "of-37": [5, 13, 4, 14, 4, 7, 8, 7, 5, 12, 4],
  "of-38": [4, 10, 3, 11, 3, 6, 7, 4, 12, 4],
  "of-39": [5, 13, 4, 13, 4, 8, 7, 5, 12, 4],
  "of-40": [5, 12, 4, 13, 4, 8, 8, 5, 12, 4],
  "of-41": [5, 14, 4, 12, 4, 9, 7, 7, 5, 12, 4],
  "of-42": [5, 13, 4, 13, 4, 10, 7, 7, 5, 12, 4],
  "of-43": [5, 13, 4, 14, 4, 7, 7, 8, 5, 12, 4],
  "of-44": [5, 14, 4, 14, 4, 6, 7, 5, 12, 4],
  "of-45": [5, 14, 4, 12, 4, 8, 7, 5, 12, 4],
  "of-46": [5, 12, 3, 10, 3, 6, 8, 4, 12, 3],
};

export function sections(
  input: {
    intro: string;
    first: string;
    check1: string;
    second: string;
    check2: string;
    visual: string;
    example: string;
    extra?: string;
  },
  lessonId: string,
): OutlineSection[] {
  const minutes = LESSON_MINUTES[lessonId];
  if (!minutes) throw new Error(`No section minutes for ${lessonId}`);
  const blocks: Array<Omit<OutlineSection, "minutes">> = [
    { title: input.intro, kind: "intro" },
    { title: input.first, kind: "core" },
    { title: input.check1, kind: "checkpoint" },
    { title: input.second, kind: "core" },
    { title: input.check2, kind: "checkpoint" },
  ];
  if (input.extra) blocks.push({ title: input.extra, kind: "core" });
  blocks.push(
    { title: input.visual, kind: "visual" },
    { title: input.example, kind: "example" },
    { title: "Key terms", kind: "terms" },
    { title: "Knowledge check — 10 questions", kind: "quiz" },
    { title: "Summary", kind: "summary" },
  );
  if (blocks.length !== minutes.length) {
    throw new Error(`${lessonId} has ${blocks.length} sections and ${minutes.length} minute entries`);
  }
  return blocks.map((block, index) => ({ ...block, minutes: minutes[index] }));
}

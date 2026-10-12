import type { AspectId, BulletId, ComponentId } from "@/content/operator-fundamentals/coverage";

export type SectionKind = "intro" | "core" | "checkpoint" | "visual" | "example" | "terms" | "quiz" | "summary";

export type OutlineSection = {
  title: string;
  minutes: number;
  kind: SectionKind;
};

export type OutlineLesson = {
  id: string;
  moduleId: string;
  title: string;
  objectives: [string, string, string] | [string, string, string, string] | [string, string, string, string, string];
  topics: string[];
  prerequisites: string[];
  covers: BulletId[];
  parts: Partial<Record<ComponentId, AspectId[]>>;
  example: string;
  video: { candidateTopic: string; watchFor: string; takeaways: [string, string] };
  diagram: { title: string; shows: string };
  terms: string[];
  sections: OutlineSection[];
};

export function sections(input: {
  intro: string;
  first: string;
  check1: string;
  second: string;
  check2: string;
  visual: string;
  example: string;
  extra?: string;
}): OutlineSection[] {
  const blocks: OutlineSection[] = [
    { title: input.intro, minutes: 6, kind: "intro" },
    { title: input.first, minutes: 12, kind: "core" },
    { title: input.check1, minutes: 4, kind: "checkpoint" },
    { title: input.second, minutes: 12, kind: "core" },
    { title: input.check2, minutes: 4, kind: "checkpoint" },
  ];
  if (input.extra) blocks.push({ title: input.extra, minutes: 8, kind: "core" });
  blocks.push(
    { title: input.visual, minutes: 8, kind: "visual" },
    { title: input.example, minutes: 8, kind: "example" },
    { title: "Key terms", minutes: 5, kind: "terms" },
    { title: "Knowledge check — 10 questions", minutes: 12, kind: "quiz" },
    { title: "Summary", minutes: 4, kind: "summary" },
  );
  return blocks;
}

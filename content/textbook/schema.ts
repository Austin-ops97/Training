import type { Block } from "@/lib/types";

export type ReadingSection = { id: string; title: string; blocks: Block[]; videoIds?: string[] };
export type ReviewQuestion = { id: string; prompt: string; choices: string[]; answer: number; explanation: string; revisit: string };
export type Chapter = {
  slug: string; number: number; unit: string; title: string; description: string;
  question: string; objectives: string[]; prerequisites: string[];
  sections: ReadingSection[]; terms: { term: string; meaning: string }[];
  summary: string[]; reflection: { prompt: string; guidance: string };
  questions: ReviewQuestion[]; sourceIds: string[];
};
export const p = (text: string): Block => ({ type: "p", text });
export const note = (title: string, text: string): Block => ({ type: "callout", tone: "note", title, text });
export const example = (title: string, text: string): Block => ({ type: "callout", tone: "advanced", title, text });
export const pm = (text: string): Block => ({ type: "callout", tone: "pm", title: "What this means for a plant project", text });
export const formula = (label: string, expression: string, explanation: string): Block => ({ type: "formula", label, expression, note: explanation });
export const table = (caption: string, headers: string[], rows: string[][]): Block => ({ type: "table", caption, headers, rows });
export const diagram = (name: Extract<Block, {type: "diagram"}>["diagram"]): Block => ({ type: "diagram", diagram: name });
export const section = (id: string, title: string, blocks: Block[], videoIds?: string[]): ReadingSection => ({id,title,blocks,videoIds});
export const question = (id: string, prompt: string, choices: string[], answer: number, explanation: string, revisit: string): ReviewQuestion => ({id,prompt,choices,answer,explanation,revisit});

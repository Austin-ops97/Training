import { foundations } from "./foundations";
import { generationChapters } from "./generation";
import { operationsChapters } from "./operations";
import { industryChapters } from "./industry";
import type { Block } from "@/lib/types";
import type { Chapter } from "./schema";

export const chapters: Chapter[] = [...foundations, ...generationChapters, ...operationsChapters, ...industryChapters];
export const units = [...new Set(chapters.map(chapter => chapter.unit))];
export function chapterBySlug(slug: string) { return chapters.find(chapter => chapter.slug === slug); }
export function blockText(block: Block): string {
  if (block.type === "p" || block.type === "callout") return block.text;
  if (block.type === "ul" || block.type === "ol" || block.type === "steps") return block.items.join(" ");
  if (block.type === "table") return [block.caption, ...block.headers, ...block.rows.flat()].join(" ");
  if (block.type === "formula") return [block.label, block.expression, block.note].join(" ");
  if (block.type === "terms") return block.items.map(term => term.term + " " + term.meaning).join(" ");
  return "";
}
export function wordCount(chapter: Chapter) {
  return chapter.sections.flatMap(s => s.blocks).map(blockText).join(" ").split(/\s+/).filter(Boolean).length;
}
export const chapterIndex = chapters.map(({slug,number,unit,title,description,sections,terms}) => ({
  slug, number, unit, title, description,
  minutes: Math.ceil(wordCount(chapterBySlug(slug)!) / 180),
  sections: sections.map(({id,title}) => ({id,title})), terms,
}));
const reviewSelection = [0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0];
export const finalReview = chapters.map((chapter,index) => {
  const q = chapter.questions[reviewSelection[index]];
  return {...q,revisit:"/learn/"+chapter.slug+"#"+q.revisit};
});
export const courseTitle = "Power Plant Foundations";

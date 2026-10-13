import Link from "next/link";
import { chapters } from "@/content/textbook";
import { Glossary } from "@/components/Glossary";
export const metadata={title:"Glossary · NEURO"};
export default function GlossaryPage() {
  const terms=[...new Map(chapters.flatMap(c=>c.terms.map(t=>[t.term,{...t,chapter:c.slug,chapterTitle:c.title}] as const))).values()].sort((a,b)=>a.term.localeCompare(b.term));
  return <div className="book-resource"><Link href="/">← Course contents</Link><p className="eyebrow">A reference while you read</p><h1>The glossary</h1><p>Definitions are introduced in the chapters. Return to the explanation when a word feels familiar but its physical meaning is still unclear.</p><Glossary terms={terms}/></div>;
}

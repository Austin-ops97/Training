import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { chapters, chapterBySlug, wordCount } from "@/content/textbook";
import { sources } from "@/content/textbook/sources";
import { BookBlock } from "@/components/BookBlocks";
import { BookVideo } from "@/components/BookVideo";
import { ChapterNotebook, ChapterReview, ReadingTools } from "@/components/ReadingTools";
import {CourseNavigation} from "@/components/CourseNavigation";
import { ChapterCompletion } from "@/components/ChapterCompletion";

export function generateStaticParams() { return chapters.map(c=>({slug:c.slug})); }
export async function generateMetadata({params}: {params:Promise<{slug:string}>}): Promise<Metadata> {
  const {slug}=await params;const c=chapterBySlug(slug);
  return {title:c?c.number+". "+c.title+" · NEURO":"Chapter not found · NEURO",description:c?.description};
}
export default async function ChapterPage({params}: {params:Promise<{slug:string}>}) {
  const {slug}=await params; const c=chapterBySlug(slug);if(!c) notFound();
  const previous=chapters[c.number-2];const next=chapters[c.number];
  return <CourseNavigation entries={chapters.map(ch=>({slug:ch.slug,number:ch.number,title:ch.title,minutes:Math.ceil(wordCount(ch)/180)}))} slug={slug} goals={c.objectives}>
    <article className="book-reader">
      <header className="chapter-header"><p className="eyebrow">{c.unit}</p><p className="chapter-counter">Chapter {String(c.number).padStart(2,"0")} / 16 · about {Math.ceil(wordCount(c)/180)} minutes of reading</p><h1>{c.title}</h1><p className="chapter-description">{c.description}</p><div className="chapter-question">{c.question}</div><ReadingTools key={slug} slug={slug}/></header>
      <details className="chapter-roadmap"><summary>In this chapter</summary><ul>{c.objectives.map(o=><li key={o}>{o}</li>)}</ul><nav aria-label="Chapter sections">{c.sections.map((s,i)=><a key={s.id} href={"#"+s.id}>{c.number}.{i+1} {s.title}</a>)}<a href="#summary">Key ideas and terms</a><a href="#apply">Apply what you learned</a><a href="#review">Chapter review</a></nav>{c.prerequisites.length?<p>Builds on: {c.prerequisites.map((s,i)=><span key={s}>{i?", ":""}<Link href={"/learn/"+s}>{chapterBySlug(s)?.title}</Link></span>)}</p>:null}</details>
      {c.sections.map((s,i)=><section className="reading-section" key={s.id} id={s.id}><p className="section-number">{c.number}.{i+1}</p><h2>{s.title}</h2>{s.blocks.map((b,j)=><BookBlock key={j} block={b}/>)}{s.videoIds?.map(id=><BookVideo key={id} id={id}/>)}</section>)}
      <section className="chapter-summary" id="summary"><p className="eyebrow">Carry these ideas forward</p><h2>What you should now understand</h2><ul>{c.summary.map(s=><li key={s}>{s}</li>)}</ul><h3>Terms introduced</h3><dl>{c.terms.map(t=><div key={t.term}><dt>{t.term}</dt><dd>{t.meaning}</dd></div>)}</dl></section>
      <ChapterNotebook key={slug+"-notes"} slug={slug} {...c.reflection}/>
      <ChapterReview key={slug+"-review"} slug={slug} questions={c.questions}/>
      <details className="chapter-sources"><summary>Sources and further reading</summary><p>The main text synthesizes established principles. Example numbers illustrate the principles rather than reporting actual plant measurements. Plant-specific details come from available records, with unresolved items identified.</p><ul>{c.sourceIds.map(id=><li key={id}><a href={sources[id].url} target="_blank" rel="noreferrer">{sources[id].title}</a><p>{sources[id].scope}</p></li>)}</ul><Link href="/learn/evidence">Review source and video limitations →</Link></details>
      <ChapterCompletion key={slug+"-completion"} slug={slug}/>
      <nav className="chapter-pagination" aria-label="Adjacent chapters">{previous?<Link href={"/learn/"+previous.slug}><span>← Previous chapter</span><strong>{previous.title}</strong></Link>:<Link href="/"><span>← Course contents</span><strong>Return to the learning path</strong></Link>}{next?<Link href={"/learn/"+next.slug}><span>Next chapter →</span><strong>{next.title}</strong></Link>:<Link href="/learn/review"><span>Finish with the cumulative review →</span><strong>Connect the whole process</strong></Link>}</nav>
    </article>
  </CourseNavigation>;
}

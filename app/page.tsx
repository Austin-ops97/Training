import Link from "next/link";
import { chapters, chapterIndex, courseTitle } from "@/content/textbook";
import { CourseCatalog } from "@/components/CourseCatalog";
import { CourseProgress } from "@/components/ReadingTools";
import { EnergyExplorer } from "@/components/EnergyExplorer";

export default function HomePage() {
  return <div className="book-home">
    <section className="book-hero">
      <div className="hero-copy"><p className="eyebrow">A course for project managers · Start from first principles</p><h1>Understand the plant.<br/><em>From the inside out.</em></h1><p className="hero-description">From what electricity is to how a gas turbine makes it, how the grid delivers it, and how projects keep the whole process working.</p><div className="hero-meta"><span>16 complete chapters</span><span>Worked examples</span><span>Chapter reviews + capstone</span></div></div>
      <aside className="start-panel"><span className="eyebrow">{courseTitle}</span><h2>Your place in the course</h2><CourseProgress slugs={chapters.map(c=>c.slug)}/></aside>
    </section>
    <section className="course-orientation"><div><p className="eyebrow">The approach</p><h2>The depth stays.<br/>The explanation comes first.</h2></div><div><p>Read in order the first time. Each chapter introduces the physical idea, defines its vocabulary, works through an example, and connects it to the plant. Equations follow the explanation, with their units and assumptions visible.</p><p>Stop at the end to explain the idea in your own words and check your reasoning. Videos are optional companions placed after the relevant explanation; the written course stands on its own.</p><p className="orientation-links"><Link href="/learn/glossary">Open the glossary →</Link><Link href="/learn/review">Cumulative review →</Link></p></div></section>
    <section className="process-intro"><p className="eyebrow">One connected process</p><h2>Follow the energy.</h2><p>Select a stage to see its role. The course explains what happens between these stages and the systems that support them.</p><EnergyExplorer/></section>
    <CourseCatalog entries={chapterIndex}/>
    <section className="study-plan"><p className="eyebrow">A flexible study rhythm</p><h2>Five parts, at your pace.</h2><p>For a steady introduction, study two chapters per session and discuss the written responses afterward. Electrical foundations may need extra practice. Pause after Chapter 12 and trace the complete simple-cycle plant before comparing other technologies.</p><p>Reading-time estimates on chapter pages cover the text only. Worked examples, reflection, discussion, and videos add time. Understanding the explanation matters more than meeting a timer.</p></section>
    <div className="course-reference-links"><Link href="/learn/evidence">Sources and video review</Link><Link href="/week/1">Original five-day reference material</Link><Link href="/operator-fundamentals">Operator curriculum outline</Link></div>
  </div>;
}

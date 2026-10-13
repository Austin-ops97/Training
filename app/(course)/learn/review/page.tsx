import Link from "next/link";
import { finalReview } from "@/content/textbook";
import { ChapterReview } from "@/components/ReadingTools";
export const metadata={title:"Cumulative review · NEURO"};
export default function ReviewPage() {
  return <div className="book-resource"><Link href="/">← Course contents</Link><p className="eyebrow">After the sixteen chapters</p><h1>Connect the whole process.</h1><p>Use this review after completing the written project brief in Chapter 16. The review contains {finalReview.length} questions, including electrical fundamentals. A correct choice is a starting point: explain the mechanism aloud, then revisit any link you cannot justify.</p><ChapterReview slug="final-review" questions={finalReview} final/><p><Link className="book-primary" href="/learn/project-manager-capstone">Return to the final application exercise →</Link></p></div>;
}

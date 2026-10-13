import type { Block } from "@/lib/types";
import { LessonDiagram } from "./Diagrams";
import { ProcessDiagram } from "./ProcessDiagram";

export function BookBlock({block}: {block: Block}) {
  if (block.type === "p") return <p>{block.text}</p>;
  if (block.type === "formula") return <figure className="book-formula"><figcaption>{block.label}</figcaption><div>{block.expression}</div><p>{block.note}</p></figure>;
  if (block.type === "callout") return <aside className={"book-note " + block.tone}><h3>{block.title}</h3><p>{block.text}</p></aside>;
  if (block.type === "table") return <div className="book-table-scroll" tabIndex={0} role="region" aria-label={block.caption}><table className="book-table"><caption>{block.caption}</caption><thead><tr>{block.headers.map((h,i)=><th scope="col" key={i}>{h}</th>)}</tr></thead><tbody>{block.rows.map((row,i)=><tr key={i}>{row.map((cell,j)=><td key={j}>{cell}</td>)}</tr>)}</tbody></table></div>;
  if (block.type === "diagram") return block.diagram === "grid" || block.diagram === "brayton" || block.diagram === "rankine" ? <ProcessDiagram kind={block.diagram}/> : <LessonDiagram diagram={block.diagram}/>;
  if (block.type === "terms") return <dl>{block.items.map(t=><div key={t.term}><dt>{t.term}</dt><dd>{t.meaning}</dd></div>)}</dl>;
  if (block.type === "ul") return <ul>{block.items.map((item,i)=><li key={i}>{item}</li>)}</ul>;
  return <ol>{block.items.map((item,i)=><li key={i}>{item}</li>)}</ol>;
}

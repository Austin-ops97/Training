"use client";
import { useState } from "react";
import Link from "next/link";
type Entry={slug:string;number:number;unit:string;title:string;description:string;minutes:number;sections:{id:string;title:string}[];terms:{term:string;meaning:string}[]};
export function CourseCatalog({entries}: {entries:Entry[]}) {
  const [query,setQuery]=useState("");
  const matches=entries.filter(c=>[c.title,c.description,...c.sections.map(s=>s.title),...c.terms.map(t=>t.term+" "+t.meaning)].join(" ").toLowerCase().includes(query.trim().toLowerCase()));
  const units=[...new Set(matches.map(c=>c.unit))];
  return <section className="catalog" id="chapters"><div className="catalog-head"><div><p className="eyebrow">The complete course</p><h2>Build understanding, chapter by chapter.</h2></div><div className="catalog-search"><label htmlFor="course-search">Find a chapter or term</label><input type="search" id="course-search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Try “compressor” or “MWh”"/></div></div><p className="search-count" aria-live="polite">{query.trim()?matches.length+" matching chapters":entries.length+" chapters · five parts · read at your own pace"}</p>{units.map(unit=><section className="catalog-unit" key={unit}><h3>{unit}</h3><ol>{matches.filter(c=>c.unit===unit).map(c=><li key={c.slug}><Link href={"/learn/"+c.slug}><span className="chapter-number">{String(c.number).padStart(2,"0")}</span><span><strong>{c.title}</strong><span className="chapter-description">{c.description}</span></span><span className="chapter-open" aria-hidden="true">→</span></Link></li>)}</ol></section>)}{matches.length===0?<p>No chapters match that term. Try a broader term or clear the search.</p>:null}</section>;
}

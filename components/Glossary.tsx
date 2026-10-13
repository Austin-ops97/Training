"use client";
import {useState} from "react";
import Link from "next/link";
type Term={term:string;meaning:string;chapter:string;chapterTitle:string};
export function Glossary({terms}: {terms:Term[]}) {
  const [query,setQuery]=useState("");
  const matches=terms.filter(t=>(t.term+" "+t.meaning).toLowerCase().includes(query.trim().toLowerCase()));
  return <><label className="eyebrow" htmlFor="term-search">Search a term or definition</label><input id="term-search" className="glossary-search" type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="For example: induction, pressure, or heat rate"/><p aria-live="polite">{matches.length} terms</p><dl className="glossary-list">{matches.map(t=><div key={t.term}><dt>{t.term}</dt><dd><p>{t.meaning}</p><Link href={"/learn/"+t.chapter}>Read in context: {t.chapterTitle} →</Link></dd></div>)}</dl></>;
}

import {describe,it,expect,vi,afterEach} from "vitest";
import {renderToStaticMarkup} from "react-dom/server";
import {chapters,finalReview,wordCount} from "@/content/textbook";
import {sources} from "@/content/textbook/sources";
import {textbookVideos as videos} from "@/content/textbook/videos";
import {videoReview} from "@/content/textbook/video-review";
import ChapterPage from "@/app/(course)/learn/[slug]/page";
import {parseReadingProgress,readReadingProgress,saveReadingProgress,READING_KEY,initializeProfile} from "@/lib/reading-progress";
import {scoreReview} from "@/lib/review-score";

afterEach(()=>vi.unstubAllGlobals());
describe("Textbook course",()=>{
  it("builds a valid forward learning path with source references and review targets",()=>{
    expect(chapters).toHaveLength(16);
    expect(new Set(chapters.map(c=>c.slug)).size).toBe(16);
    for(const [index,c] of chapters.entries()) {
      expect(c.number).toBe(index+1);
      expect(wordCount(c)).toBeGreaterThan(300);
      for(const prior of c.prerequisites) expect(chapters.slice(0,index).some(p=>p.slug===prior)).toBe(true);
      for(const id of c.sourceIds) expect(sources[id]?.url).toMatch(/^https:\/\//);
      expect(new Set(c.sections.map(s=>s.id)).size).toBe(c.sections.length);
      for(const q of c.questions) {
        expect(c.sections.some(s=>s.id===q.revisit)).toBe(true);
        expect(q.answer).toBeGreaterThanOrEqual(0);expect(q.answer).toBeLessThan(q.choices.length);
      }
    }
  });
  it("retains every existing video once in a suitable chapter with recorded limitations",()=>{
    const placements=chapters.flatMap(c=>c.sections.flatMap(s=>s.videoIds??[]));
    expect(new Set(Object.values(videos).map(v=>v.youtubeId)).size).toBe(Object.keys(videos).length);
    expect(placements.sort()).toEqual(Object.keys(videos).sort());
    expect(Object.keys(videoReview).sort()).toEqual(Object.keys(videos).sort());
    expect(videoReview.V01.limitation).toContain("60 complete cycles");
    expect(videoReview.V09.status).toContain("Metadata only");
  });
  it("renders every chapter with valid section anchors and adjacent links",async()=>{
    for(const c of chapters) {
      const markup=renderToStaticMarkup(await ChapterPage({params:Promise.resolve({slug:c.slug})}));
      expect(markup).toContain("<h1>"+c.title+"</h1>");
      expect(markup).not.toContain('<details class="book-video"');
      for(const s of c.sections) expect(markup).toContain('id="'+s.id+'"');
      const anchors=[...markup.matchAll(/href="#([^"]+)"/g)].map(m=>m[1]);
      for(const anchor of anchors) expect(markup).toContain('id="'+anchor+'"');
      if(c.number<chapters.length) expect(markup).toContain('href="/learn/'+chapters[c.number].slug+'"');
      if(c.number>1) expect(markup).toContain('href="/learn/'+chapters[c.number-2].slug+'"');
      expect(markup).toContain('aria-current="page"');
    }
  });
  it("rejects unknown chapters and links cumulative feedback to actual chapters",async()=>{
    await expect(ChapterPage({params:Promise.resolve({slug:"not-a-chapter"})})).rejects.toThrow();
    for(const q of finalReview) {
      const match=q.revisit.match(/^\/learn\/([^#]+)#(.+)$/)!;
      expect(chapters.find(c=>c.slug===match[1])?.sections.some(s=>s.id===match[2])).toBe(true);
    }
  });
  it("scores formative answers without counting unknown answers or accepting invalid indexes",()=>{
    const qs=chapters[2].questions;
    expect(scoreReview(qs,{})).toEqual({correct:0,total:2,complete:false});
    const all=Object.fromEntries(qs.map(q=>[q.id,q.answer]));
    expect(scoreReview(qs,{...all,unknown:99})).toEqual({correct:2,total:2,complete:true});
    expect(scoreReview(qs,{...all,[qs[0].id]:99})).toEqual({correct:1,total:2,complete:false});
    expect(qs[0].choices[qs[0].answer]).toBe("1,062 MWh");
    const frequency=chapters[3].questions[0];
    expect(frequency.choices[frequency.answer]).toBe("60 complete cycles per second");
  });
  it("adds the 20 electrical questions without counting the retired cumulative question",()=>{
    expect(finalReview).toHaveLength(35);
    expect(new Set(finalReview.map(q=>q.id)).size).toBe(35);
    expect(finalReview.some(q=>q.id==="c16a")).toBe(false);
    expect(chapters[15].questions.some(q=>q.id==="c16a")).toBe(true);
    const added=finalReview.filter(q=>q.id.startsWith("eb"));
    expect(added).toHaveLength(20);
    expect(added.map(q=>q.answer)).toEqual([2,2,2,2,2,1,1,2,1,2,2,1,2,1,1,0,2,1,2,2]);
    const legacyAnswers=Object.fromEntries(finalReview.slice(0,15).map(q=>[q.id,q.answer]));
    expect(scoreReview(finalReview,{...legacyAnswers,c16a:1})).toEqual({correct:15,total:35,complete:false});
    expect(scoreReview(finalReview,Object.fromEntries(finalReview.map(q=>[q.id,q.answer])))).toEqual({correct:35,total:35,complete:true});
  });
});
describe("Browser learning progress",()=>{
  it("recovers malformed or old data while preserving valid notes and scores",()=>{
    expect(parseReadingProgress("broken").completed).toEqual([]);
    expect(parseReadingProgress('{"version":2,"completed":["x"]}').completed).toEqual([]);
    const p=parseReadingProgress(JSON.stringify({version:1,completed:["a","a",8],notes:{a:"response",b:5},scores:{a:{correct:1,total:2},b:{correct:3,total:2}}}));
    expect(p.completed).toEqual(["a"]);expect(p.notes).toEqual({a:"response"});expect(p.scores).toEqual({a:{correct:1,total:2}});
  });
  it("updates one field without overwriting notes, completion, or review results",async()=>{
    let raw=JSON.stringify({version:1,completed:["a"],notes:{a:"keep"},scores:{a:{correct:2,total:2}}});
    const event=vi.fn();
    vi.stubGlobal("window",{localStorage:{getItem:()=>raw,setItem:(key:string,value:string)=>{expect(key).toBe(READING_KEY);raw=value;}},dispatchEvent:event});
    await initializeProfile(null);event.mockClear();
    expect(saveReadingProgress(p=>({...p,lastChapter:"b"}))).toBe(true);
    expect(readReadingProgress()).toMatchObject({completed:["a"],notes:{a:"keep"},scores:{a:{correct:2,total:2}},lastChapter:"b"});
    expect(event).toHaveBeenCalledOnce();
  });
  it("reports storage failure instead of pretending to save",()=>{
    vi.stubGlobal("window",{localStorage:{getItem:()=>{throw Error("denied");},setItem:()=>{throw Error("denied");}}});
    expect(readReadingProgress().completed).toEqual([]);
    expect(saveReadingProgress(p=>p)).toBe(false);
  });
});

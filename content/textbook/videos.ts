import { videos } from "@/content/week-01/videos";
// Textbook companions are separate so the original five-day reference remains intact.
export const textbookVideos: Record<string, {youtubeId:string;title:string;channel:string}> = {
  ...videos,
  T01: {youtubeId:"w82aSjLuD_8",title:"Voltage Explained - What is Voltage? Basic electricity potential difference",channel:"The Engineering Mindset"},
  T02: {youtubeId:"h6l30kpyhK8",title:"What is electrical resistance? - Electricity Explained - (4)",channel:"Into The Ordinary"},
  T03: {youtubeId:"HsLLq6Rm5tU",title:"Ohms Law Explained - The basics circuit theory",channel:"The Engineering Mindset"},
};

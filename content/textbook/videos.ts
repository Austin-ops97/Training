import { videos } from "@/content/week-01/videos";
// Textbook companions are separate so the original five-day reference remains intact.
export const textbookVideos: Record<string, {youtubeId:string;title:string;channel:string}> = {
  ...videos,
  T01: {youtubeId:"w82aSjLuD_8",title:"Voltage Explained - What is Voltage? Basic electricity potential difference",channel:"The Engineering Mindset"},
  T02: {youtubeId:"h6l30kpyhK8",title:"What is electrical resistance? - Electricity Explained - (4)",channel:"Into The Ordinary"},
  T03: {youtubeId:"HsLLq6Rm5tU",title:"Ohms Law Explained - The basics circuit theory",channel:"The Engineering Mindset"},
  T04: {"youtubeId": "SMPhh8gT_1E", "title": "What is a kWh? Kilowatt-hour calculations", "channel": "The Engineering Mindset"},
  T05: {"youtubeId": "WhATjUHgzxQ", "title": "AC Electrical Generator Basics - How electricity is generated", "channel": "The Engineering Mindset"},
  T06: {"youtubeId": "c9gm_NL7KyE", "title": "How 3 Phase Power works: why 3 phases?", "channel": "The Engineering Mindset"},
  T07: {"youtubeId": "NIrKOVZrqnU", "title": "Power Factor Explained - Real, reactive, and apparent power", "channel": "The Engineering Mindset"},
  T08: {"youtubeId": "T99yH_gw3p8", "title": "What is Torque? - Torque basics explained", "channel": "The Engineering Mindset"},
  T09: {"youtubeId": "GDyQXSEAJNA", "title": "Industrial Heat Exchangers Explained", "channel": "The Engineering Mindset"},
  T10: {"youtubeId": "XpcCUtYzwy0", "title": "Centrifugal Pump Basics - How centrifugal pumps work", "channel": "The Engineering Mindset"},
  T11: {"youtubeId": "blnnAEmVXp0", "title": "Resistance Temperature Detector Basics RTD", "channel": "The Engineering Mindset"},
  T12: {"youtubeId": "uOtdWHMKhnw", "title": "Programmable Logic Controller Basics Explained", "channel": "The Engineering Mindset"},
  T13: {"youtubeId": "gqEu9t8HwW0", "title": "Why Circuit Breakers Do Not Protect People from Electric Shocks", "channel": "The Engineering Mindset"},
};

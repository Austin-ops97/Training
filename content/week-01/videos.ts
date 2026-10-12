import type { VideoSpec } from "@/lib/types";

/**
 * Week 1 videos from the course outline Appendix A.
 * Titles and channels were confirmed with YouTube oEmbed on 2026-10-12.
 * start/end are the listed full-video window. Timed caption files could not
 * be downloaded from this environment (see reviews/week-01).
 */
export const videos: Record<string, VideoSpec> = {
  V01: {
    code: "V01",
    youtubeId: "v1BMWczn7JM",
    title: "How Does the Power Grid Work?",
    channel: "Practical Engineering",
    listedDuration: "10:25",
    startSeconds: 0,
    endSeconds: 625,
    required: true,
    watchNote:
      "Watch the full listed video. Use the generation, transmission, distribution, 60 Hz, and supply-must-meet-demand sections. The closing sponsor message is not part of the lesson.",
  },
  V02: {
    code: "V02",
    youtubeId: "9kgzA0Vd8S8",
    title: "How Power Gets to Your Home: Crash Course Physics #35",
    channel: "CrashCourse",
    listedDuration: "8:33",
    startSeconds: 0,
    endSeconds: 513,
    required: true,
    watchNote:
      "Watch the full listed video for generators, alternating current, and why transformers step voltage up and down. The voltages in the video are round teaching examples, not Viper Power voltages.",
  },
  V03: {
    code: "V03",
    youtubeId: "eqn0VBVWS50",
    title: "Coal-Fired Power Plants Explained | How They Work",
    channel: "saVRee",
    listedDuration: "7:10",
    startSeconds: 0,
    endSeconds: 430,
    required: true,
    watchNote:
      "Watch the full listed video. The retrieved narration covers coal handling, the boiler, and feedwater treatment, then points to a later 3D video for component models. Pair it with the steam-turbine clip for the condenser.",
  },
  V04: {
    code: "V04",
    youtubeId: "jpDRfaWYk3I",
    title: "How does a nuclear power plant work?",
    channel: "ENGIE Belgium",
    listedDuration: "4:08",
    startSeconds: 0,
    endSeconds: 248,
    required: true,
    watchNote:
      "Watch the full listed video for the idea that fission replaces the boiler fire, and that a pressurized-water plant keeps reactor water and turbine steam in separate circuits. Temperatures and plant names in the clip are for those Belgian units.",
  },
  V05: {
    code: "V05",
    youtubeId: "V5cpJwiF0u4",
    title: "The Steam Turbine",
    channel: "Enerdynamics",
    listedDuration: "1:07",
    startSeconds: 0,
    endSeconds: 67,
    required: true,
    watchNote:
      "Watch the full listed video. It states the four-step steam path: fuel heat, boiler steam, turbine and generator, then condenser.",
  },
  V06: {
    code: "V06",
    youtubeId: "2Jm5RVHLlcQ",
    title: "How a gas turbine works | GE Vernova",
    channel: "GE Vernova",
    listedDuration: "2:04",
    startSeconds: 0,
    endSeconds: 124,
    required: true,
    watchNote:
      "Watch the full listed video for compressor, combustor, turbine, and generator. It is an OEM overview, not a Viper Power unit. Do not treat the 'over 3,000 RPM' line as a plant setpoint.",
  },
  V07: {
    code: "V07",
    youtubeId: "wKSaIkeYyF4",
    title: "How a Combined-Cycle, Natural-Gas Power Plant Works | DTE Energy",
    channel: "DTEEnergyCompany",
    listedDuration: "3:36",
    startSeconds: 0,
    endSeconds: 216,
    required: true,
    watchNote:
      "Watch the full listed video for the heat-recovery steam generator and the second turbine. The machine on screen is a combined-cycle 7HA at another utility, not a Viper Power 7B simple-cycle unit.",
  },
  V08: {
    code: "V08",
    youtubeId: "MXlfYXnlSgA",
    title: "What is Combined Heat and Power (CHP)?",
    channel: "INNIO",
    listedDuration: "2:21",
    startSeconds: 0,
    endSeconds: 141,
    required: true,
    watchNote:
      "Watch the full listed video for the idea that a gas engine can make electricity and useful heat. The savings and emissions lines are a marketing story about one town. They are not engineering data and they are not Viper Power.",
  },
  V09: {
    code: "V09",
    youtubeId: "vxb6UGXGv40",
    title: "220MW power plant featuring 12 Wärtsilä 18V50SG engines | Wärtsilä",
    channel: "Wärtsilä Corporation",
    listedDuration: "2:16",
    startSeconds: 0,
    endSeconds: 136,
    required: false,
    watchNote:
      "Optional. oEmbed confirmed the title and channel. A spoken transcript could not be retrieved here, so this clip is not required and is not used as a source for any quiz fact. The title's 220 MW and 12 engines describe the animation, not Viper Power.",
  },
  V10: {
    code: "V10",
    youtubeId: "q8HmRLCgDAI",
    title: "Hydropower 101",
    channel: "Student Energy",
    listedDuration: "3:13",
    startSeconds: 0,
    endSeconds: 193,
    required: true,
    watchNote:
      "Watch the full listed video for dams, run-of-river, pumped storage, and the environmental and dam-failure consequences the narrator names.",
  },
  V11: {
    code: "V11",
    youtubeId: "xy9nj94xvKA",
    title: "How do wind turbines work? - Rebecca J. Barthelmie and Sara C. Pryor",
    channel: "TED-Ed",
    listedDuration: "5:03",
    startSeconds: 0,
    endSeconds: 303,
    required: true,
    watchNote:
      "Watch the full listed video for blades, generator, yaw, and intermittency. The Betz limit (59.3%) is the physical cap the video states. Do not adopt the clip's 'cheapest source' line as a current market fact.",
  },
  V12: {
    code: "V12",
    youtubeId: "xKxrkht7CpY",
    title: "How do solar panels work? - Richard Komp",
    channel: "TED-Ed",
    listedDuration: "4:59",
    startSeconds: 0,
    endSeconds: 299,
    required: true,
    watchNote:
      "Watch the full listed video for the photovoltaic cell: light frees electrons, and there is no turbine. Efficiency percentages in the clip belong to the year it was made, not to a 2026 module rating.",
  },
  V13: {
    code: "V13",
    youtubeId: "UVAXkzCVd2s",
    title: "Grid Scale Battery Storage Explained",
    channel: "Ecotricity",
    listedDuration: "2:46",
    startSeconds: 0,
    endSeconds: 166,
    required: true,
    watchNote:
      "Watch the full listed video for storage and the claim that batteries can react faster than a rotating machine. The project sizes and the National Grid setting are British. They are not ERCOT or Viper Power figures.",
  },
  V14: {
    code: "V14",
    youtubeId: "8aldmvik3aU",
    title: "How does ERCOT work?",
    channel: "ERCOTISO",
    listedDuration: "1:16",
    startSeconds: 0,
    endSeconds: 76,
    required: true,
    watchNote:
      "Watch the full listed video. ERCOT says it dispatches generation, balances generation and load, and does not own the assets. It does not define a QSE. Use the protocol citation in the lesson for that term.",
  },
};

export const videoList = Object.values(videos);

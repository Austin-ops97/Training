# Week 1 video verification

Reviewed 12 October 2026.

Titles and channels were confirmed with YouTube oEmbed (`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v={id}&format=json`). Each embed URL returned HTTP 200 and a player document. Timed caption files could not be downloaded from this environment (YouTube blocked the caption clients). Durations are the Appendix A listed lengths, used as the player `end` parameter. They were not re-measured with a media probe. Spoken-word review used the public watch page. This file stores reviewer notes, not a transcript.

Every video is an iframe inside its lesson section. The player source is `https://www.youtube.com/embed/{id}?start={start}&end={end}&rel=0&modestbranding=1&playsinline=1`. There is no outbound-only watch link on the lesson page.

| Code | Title | Channel | YouTube id | Listed duration | Start | End | Required | Placed in | Embed URL |
| --- | --- | --- | --- | --- | ---: | ---: | --- | --- | --- |
| V01 | How Does the Power Grid Work? | Practical Engineering | `v1BMWczn7JM` | 10:25 | 0 | 625 | yes | Day 1 section `video-grid` (11 min) | `https://www.youtube.com/embed/v1BMWczn7JM?start=0&end=625&rel=0&modestbranding=1&playsinline=1` |
| V02 | How Power Gets to Your Home: Crash Course Physics #35 | CrashCourse | `9kgzA0Vd8S8` | 8:33 | 0 | 513 | yes | Day 1 section `video-home` (8 min) | `https://www.youtube.com/embed/9kgzA0Vd8S8?start=0&end=513&rel=0&modestbranding=1&playsinline=1` |
| V03 | Coal-Fired Power Plants Explained | How They Work | saVRee | `eqn0VBVWS50` | 7:10 | 0 | 430 | yes | Day 2 section `video-coal` (8 min) | `https://www.youtube.com/embed/eqn0VBVWS50?start=0&end=430&rel=0&modestbranding=1&playsinline=1` |
| V04 | How does a nuclear power plant work? | ENGIE Belgium | `jpDRfaWYk3I` | 4:08 | 0 | 248 | yes | Day 2 section `video-nuclear` (5 min) | `https://www.youtube.com/embed/jpDRfaWYk3I?start=0&end=248&rel=0&modestbranding=1&playsinline=1` |
| V05 | The Steam Turbine | Enerdynamics | `V5cpJwiF0u4` | 1:07 | 0 | 67 | yes | Day 2 section `video-steam` (3 min) | `https://www.youtube.com/embed/V5cpJwiF0u4?start=0&end=67&rel=0&modestbranding=1&playsinline=1` |
| V06 | How a gas turbine works | GE Vernova | GE Vernova | `2Jm5RVHLlcQ` | 2:04 | 0 | 124 | yes | Day 3 section `video-gt` (6 min) | `https://www.youtube.com/embed/2Jm5RVHLlcQ?start=0&end=124&rel=0&modestbranding=1&playsinline=1` |
| V07 | How a Combined-Cycle, Natural-Gas Power Plant Works | DTE Energy | DTEEnergyCompany | `wKSaIkeYyF4` | 3:36 | 0 | 216 | yes | Day 3 section `video-gt` (6 min) | `https://www.youtube.com/embed/wKSaIkeYyF4?start=0&end=216&rel=0&modestbranding=1&playsinline=1` |
| V08 | What is Combined Heat and Power (CHP)? | INNIO | `MXlfYXnlSgA` | 2:21 | 0 | 141 | yes | Day 3 section `video-chp` (6 min) | `https://www.youtube.com/embed/MXlfYXnlSgA?start=0&end=141&rel=0&modestbranding=1&playsinline=1` |
| V09 | 220MW power plant featuring 12 Wärtsilä 18V50SG engines | Wärtsilä | Wärtsilä Corporation | `vxb6UGXGv40` | 2:16 | 0 | 136 | no | Day 3 section `video-chp` (6 min) | `https://www.youtube.com/embed/vxb6UGXGv40?start=0&end=136&rel=0&modestbranding=1&playsinline=1` |
| V10 | Hydropower 101 | Student Energy | `q8HmRLCgDAI` | 3:13 | 0 | 193 | yes | Day 4 section `video-water` (9 min) | `https://www.youtube.com/embed/q8HmRLCgDAI?start=0&end=193&rel=0&modestbranding=1&playsinline=1` |
| V11 | How do wind turbines work? - Rebecca J. Barthelmie and Sara C. Pryor | TED-Ed | `xy9nj94xvKA` | 5:03 | 0 | 303 | yes | Day 4 section `video-water` (9 min) | `https://www.youtube.com/embed/xy9nj94xvKA?start=0&end=303&rel=0&modestbranding=1&playsinline=1` |
| V12 | How do solar panels work? - Richard Komp | TED-Ed | `xKxrkht7CpY` | 4:59 | 0 | 299 | yes | Day 4 section `video-quiet` (8 min) | `https://www.youtube.com/embed/xKxrkht7CpY?start=0&end=299&rel=0&modestbranding=1&playsinline=1` |
| V13 | Grid Scale Battery Storage Explained | Ecotricity | `UVAXkzCVd2s` | 2:46 | 0 | 166 | yes | Day 4 section `video-quiet` (8 min) | `https://www.youtube.com/embed/UVAXkzCVd2s?start=0&end=166&rel=0&modestbranding=1&playsinline=1` |
| V14 | How does ERCOT work? | ERCOTISO | `8aldmvik3aU` | 1:16 | 0 | 76 | yes | Day 5 section `video-ercot` (4 min) | `https://www.youtube.com/embed/8aldmvik3aU?start=0&end=76&rel=0&modestbranding=1&playsinline=1` |

## Reviewer notes

Transcript source for V01–V08 and V10–V14: public watch-page text reviewed 12 October 2026. V09: oEmbed only. No full transcript is stored.

### V01 — How Does the Power Grid Work?

- Channel: Practical Engineering. YouTube id `v1BMWczn7JM`.
- Listed duration 10:25. Player window 0–625 seconds.
- Required: yes.
- Objectives supported: see the section named in the table above.
- Notes: Watch the full listed video. Use the generation, transmission, distribution, 60 Hz, and supply-must-meet-demand sections. The closing sponsor message is not part of the lesson.
- Limitation: the `end` parameter is the listed full-video length. A tighter in-video timestamp was not available because timed captions were not retrieved.

### V02 — How Power Gets to Your Home: Crash Course Physics #35

- Channel: CrashCourse. YouTube id `9kgzA0Vd8S8`.
- Listed duration 8:33. Player window 0–513 seconds.
- Required: yes.
- Objectives supported: see the section named in the table above.
- Notes: Watch the full listed video for generators, alternating current, and why transformers step voltage up and down. The voltages in the video are round teaching examples, not Viper Power voltages.
- Limitation: the `end` parameter is the listed full-video length. A tighter in-video timestamp was not available because timed captions were not retrieved.

### V03 — Coal-Fired Power Plants Explained | How They Work

- Channel: saVRee. YouTube id `eqn0VBVWS50`.
- Listed duration 7:10. Player window 0–430 seconds.
- Required: yes.
- Objectives supported: see the section named in the table above.
- Notes: Watch the full listed video. The retrieved narration covers coal handling, the boiler, and feedwater treatment, then points to a later 3D video for component models. Pair it with the steam-turbine clip for the condenser.
- Limitation: the `end` parameter is the listed full-video length. A tighter in-video timestamp was not available because timed captions were not retrieved.

### V04 — How does a nuclear power plant work?

- Channel: ENGIE Belgium. YouTube id `jpDRfaWYk3I`.
- Listed duration 4:08. Player window 0–248 seconds.
- Required: yes.
- Objectives supported: see the section named in the table above.
- Notes: Watch the full listed video for the idea that fission replaces the boiler fire, and that a pressurized-water plant keeps reactor water and turbine steam in separate circuits. Temperatures and plant names in the clip are for those Belgian units.
- Limitation: the `end` parameter is the listed full-video length. A tighter in-video timestamp was not available because timed captions were not retrieved.

### V05 — The Steam Turbine

- Channel: Enerdynamics. YouTube id `V5cpJwiF0u4`.
- Listed duration 1:07. Player window 0–67 seconds.
- Required: yes.
- Objectives supported: see the section named in the table above.
- Notes: Watch the full listed video. It states the four-step steam path: fuel heat, boiler steam, turbine and generator, then condenser.
- Limitation: the `end` parameter is the listed full-video length. A tighter in-video timestamp was not available because timed captions were not retrieved.

### V06 — How a gas turbine works | GE Vernova

- Channel: GE Vernova. YouTube id `2Jm5RVHLlcQ`.
- Listed duration 2:04. Player window 0–124 seconds.
- Required: yes.
- Objectives supported: see the section named in the table above.
- Notes: Watch the full listed video for compressor, combustor, turbine, and generator. It is an OEM overview, not a Viper Power unit. Do not treat the 'over 3,000 RPM' line as a plant setpoint.
- Limitation: the `end` parameter is the listed full-video length. A tighter in-video timestamp was not available because timed captions were not retrieved.

### V07 — How a Combined-Cycle, Natural-Gas Power Plant Works | DTE Energy

- Channel: DTEEnergyCompany. YouTube id `wKSaIkeYyF4`.
- Listed duration 3:36. Player window 0–216 seconds.
- Required: yes.
- Objectives supported: see the section named in the table above.
- Notes: Watch the full listed video for the heat-recovery steam generator and the second turbine. The machine on screen is a combined-cycle 7HA at another utility, not a Viper Power 7B simple-cycle unit.
- Limitation: the `end` parameter is the listed full-video length. A tighter in-video timestamp was not available because timed captions were not retrieved.

### V08 — What is Combined Heat and Power (CHP)?

- Channel: INNIO. YouTube id `MXlfYXnlSgA`.
- Listed duration 2:21. Player window 0–141 seconds.
- Required: yes.
- Objectives supported: see the section named in the table above.
- Notes: Watch the full listed video for the idea that a gas engine can make electricity and useful heat. The savings and emissions lines are a marketing story about one town. They are not engineering data and they are not Viper Power.
- Limitation: the `end` parameter is the listed full-video length. A tighter in-video timestamp was not available because timed captions were not retrieved.

### V09 — 220MW power plant featuring 12 Wärtsilä 18V50SG engines | Wärtsilä

- Channel: Wärtsilä Corporation. YouTube id `vxb6UGXGv40`.
- Listed duration 2:16. Player window 0–136 seconds.
- Required: no.
- Objectives supported: see the section named in the table above.
- Notes: Optional. oEmbed confirmed the title and channel. A spoken transcript could not be retrieved here, so this clip is not required and is not used as a source for any quiz fact. The title's 220 MW and 12 engines describe the animation, not Viper Power.
- Limitation: the `end` parameter is the listed full-video length. A tighter in-video timestamp was not available because timed captions were not retrieved.

### V10 — Hydropower 101

- Channel: Student Energy. YouTube id `q8HmRLCgDAI`.
- Listed duration 3:13. Player window 0–193 seconds.
- Required: yes.
- Objectives supported: see the section named in the table above.
- Notes: Watch the full listed video for dams, run-of-river, pumped storage, and the environmental and dam-failure consequences the narrator names.
- Limitation: the `end` parameter is the listed full-video length. A tighter in-video timestamp was not available because timed captions were not retrieved.

### V11 — How do wind turbines work? - Rebecca J. Barthelmie and Sara C. Pryor

- Channel: TED-Ed. YouTube id `xy9nj94xvKA`.
- Listed duration 5:03. Player window 0–303 seconds.
- Required: yes.
- Objectives supported: see the section named in the table above.
- Notes: Watch the full listed video for blades, generator, yaw, and intermittency. The Betz limit (59.3%) is the physical cap the video states. Do not adopt the clip's 'cheapest source' line as a current market fact.
- Limitation: the `end` parameter is the listed full-video length. A tighter in-video timestamp was not available because timed captions were not retrieved.

### V12 — How do solar panels work? - Richard Komp

- Channel: TED-Ed. YouTube id `xKxrkht7CpY`.
- Listed duration 4:59. Player window 0–299 seconds.
- Required: yes.
- Objectives supported: see the section named in the table above.
- Notes: Watch the full listed video for the photovoltaic cell: light frees electrons, and there is no turbine. Efficiency percentages in the clip belong to the year it was made, not to a 2026 module rating.
- Limitation: the `end` parameter is the listed full-video length. A tighter in-video timestamp was not available because timed captions were not retrieved.

### V13 — Grid Scale Battery Storage Explained

- Channel: Ecotricity. YouTube id `UVAXkzCVd2s`.
- Listed duration 2:46. Player window 0–166 seconds.
- Required: yes.
- Objectives supported: see the section named in the table above.
- Notes: Watch the full listed video for storage and the claim that batteries can react faster than a rotating machine. The project sizes and the National Grid setting are British. They are not ERCOT or Viper Power figures.
- Limitation: the `end` parameter is the listed full-video length. A tighter in-video timestamp was not available because timed captions were not retrieved.

### V14 — How does ERCOT work?

- Channel: ERCOTISO. YouTube id `8aldmvik3aU`.
- Listed duration 1:16. Player window 0–76 seconds.
- Required: yes.
- Objectives supported: see the section named in the table above.
- Notes: Watch the full listed video. ERCOT says it dispatches generation, balances generation and load, and does not own the assets. It does not define a QSE. Use the protocol citation in the lesson for that term.
- Limitation: the `end` parameter is the listed full-video length. A tighter in-video timestamp was not available because timed captions were not retrieved.

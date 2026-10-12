# Week 1 rev2 — corrections and change log

Started from merged `main` at `7e5fdabb`. This revision does not rewrite that history. The new branch is `course/week-01-rev2`.

The owner's direction replaces the earlier running-story standard. Lessons now teach in a direct voice. Fictional names, invented dialogue, and scenario framing are gone, including the note on the Week page. Viper Power stays as the factual plant example. The Day 5 details the owner accepted are unchanged: six GE MS7001B machines, three 138/13.8/13.8 kV transformers with two generators each, the TTS system on an Allen-Bradley PLC-5, the 2024 test, the internal 15 May weatherization date, and the remote operations center.

## What changed

| Change | Where |
| --- | --- |
| Day 1 now teaches charge, current, potential difference, circuits and symbols, Ohm's law and a V–I graph, resistivity, series and parallel, electric power, the kilowatt-hour, and Joule heating, each tied to a plant consequence. | `content/week-01/day1.ts`, `components/Diagrams.tsx` |
| Days 2–5 keep the same machines, videos, and figures. Prompts and section openings no longer use story names. | `content/week-01/day2.ts` through `day5.ts` |
| Knowledge checks are direct. Day 1 and Day 5 have 12 scored questions. Days 2–4 have 10. Checkpoints are extra. | lesson files and `content/week-01/answer-key.ts` |
| Worked arithmetic for every new calculation is in the answer key and in `calculations.md`. A test recomputes each one. | `tests/week-01.test.ts`, `reviews/week-01/calculations.md` |
| The negative checks for the removed year and the removed move-word are built from pieces, so those strings are not written out in the test. | `tests/week-01.test.ts` |
| The Day 5 heat-recovery item no longer repeats the question's equipment name in the keyed choice. | `content/week-01/day5.ts` `d5q4` |
| The Day 4 duty diagram has a phone drawing whose text is 22px in a narrow view box, shown below 800 px. | `components/Diagrams.tsx`, `app/globals.css` |

## Time

| Day | Minutes | Scored questions |
| --- | ---: | ---: |
| 1 | 88 | 12 |
| 2 | 62 | 10 |
| 3 | 66 | 10 |
| 4 | 70 | 10 |
| 5 | 61 | 12 |
| Total | 347 | |

Each lesson stays inside 60 to 90 minutes. Section times are in `lessons.md`.

## Sources for the new electricity

OpenStax College Physics 2e, sections 18.1, 19.1, 20.1, 20.2, 20.3, 20.4, and 21.1, opened 12 October 2026. The exact elementary charge and the SI prefixes are the SI definition, cited from the BIPM SI Brochure. The traceability table is in `traceability.md`. Inventory codes stay out of the learner text and out of grader explanations.

## Left as they were

Video ids, start, and end. The July 2026 gas-turbine factor 0.233. The exercise inputs 59 MW, 100 MW / 120,000 MWh, and 65 MW versus 330 MW. Grading by choice id, with a shuffle after the page loads. The answer key remains in the repository. Five high `braces` findings remain in the lint toolchain; `npm audit --omit=dev` was 0 on the previous revision and this revision did not change dependencies.

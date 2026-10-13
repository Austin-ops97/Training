> Historical Week 1 review. For the current course and subsequent corrections (60 Hz, AC nameplate context, governor/excitation, and storage), see ../textbook/review.md.

# Week 1 rev2 — corrections and change log

Started from merged `main` at `7e5fdabb`. This revision does not rewrite that history. The new branch is `course/week-01-rev2`.

The owner's direction replaces the earlier running-story standard. Lessons now teach in a direct voice. Fictional names, invented dialogue, and scenario framing are gone, including the note on the Week page. Viper Power stays as the factual plant example. The Day 5 details the owner accepted are unchanged: six GE MS7001B machines, three 138/13.8/13.8 kV transformers with two generators each, the TTS system on an Allen-Bradley PLC-5, the 2024 test, the internal 15 May weatherization date, and the remote operations center.

## What changed

| Change | Where |
| --- | --- |
| Day 1 now teaches charge, current, potential difference, circuits and symbols, Ohm's law and a V–I graph, resistivity, series and parallel, electric power, the kilowatt-hour, and Joule heating, each tied to a plant consequence. | `content/week-01/day1.ts`, `components/Diagrams.tsx` |
| Days 2–5 keep the same machines, videos, and figures. Prompts and section openings no longer use story names. | `content/week-01/day2.ts` through `day5.ts` |
| Knowledge checks are direct. Day 1 and Day 2 have 11 scored questions. Days 3 and 4 have 10. Day 5 has 12. Checkpoints are extra and are not counted in the scored-question stats. | lesson files and `content/week-01/answer-key.ts` |
| Worked arithmetic for every new calculation is in the answer key and in `calculations.md`. A test recomputes each one. | `tests/week-01.test.ts`, `reviews/week-01/calculations.md` |
| The negative checks for the removed year and the removed move-word are built from pieces, so those strings are not written out in the test. | `tests/week-01.test.ts` |
| The Day 5 heat-recovery item no longer repeats the question's equipment name in the keyed choice. | `content/week-01/day5.ts` `d5q4` |
| The Day 4 duty diagram has a phone drawing whose text is 22px in a narrow view box, shown below 800 px. | `components/Diagrams.tsx`, `app/globals.css` |

## Time

| Day | Minutes | Scored questions |
| --- | ---: | ---: |
| 1 | 84 | 11 |
| 2 | 76 | 11 |
| 3 | 66 | 10 |
| 4 | 70 | 10 |
| 5 | 61 | 12 |
| Total | 357 | 54 |

Each lesson stays inside 60 to 90 minutes. Section times are in `lessons.md`.

## Sources for the new electricity

OpenStax College Physics 2e, sections 18.1, 19.1, 20.1, 20.2, 20.3, 20.4, and 21.1, opened 12 October 2026. The exact elementary charge and the SI prefixes are the SI definition, cited from the BIPM SI Brochure. The traceability table is in `traceability.md`. Inventory codes stay out of the learner text and out of grader explanations.

## Left as they were

Video ids, start, and end. The July 2026 gas-turbine factor 0.233. The exercise inputs 59 MW, 100 MW / 120,000 MWh, and 65 MW versus 330 MW. Grading by choice id, with a shuffle after the page loads. The answer key remains in the repository. Five high `braces` findings remain in the lint toolchain; `npm audit --omit=dev` was 0 on the previous revision and this revision did not change dependencies. The Day 5 details the owner accepted are unchanged.

## Audit of the first rev2 commit

The follow-up review asked for practice on the new formulas and for room under the 90-minute cap.

| Finding | What changed |
| --- | --- |
| Students now practise the formulas. | Day 1 has OpenStax Table 20.1 (silver 1.59, copper 1.72, aluminum 2.65 ×10⁻⁸ Ω·m at 20°C), cited in the sources panel. An illustrative 1 km aluminum conductor, A = 500 mm², gives R = 0.053 Ω. At 1,000 A the same line gives V = 53 V, P = 53,000 W from VI, I²R, and V²/R, and H = 190,800,000 J in one hour. The 13.8 kV nameplate is worked as 13,800 J/C. The line is labeled illustrative and is not applied as a three-phase generator formula. |
| Two recall items became numeric, and a third became a nameplate calculation. | d1q2 is ρL/A. d1q4 is I²R. d1q3 is the 13.8 kV reading. |
| Day 1 stays under 90 minutes. | "From the shaft to the customer" (6 min) and the transformer video (8 min) moved to Day 2, with the governor question. Day 1 is 84 minutes. Day 2 is 76. Days 3–5 stay 66, 70, and 61. |
| The V–I caption and the symbol labels. | The caption is a wrapping figcaption. Axes read "V (volts)" and "I (amperes)", with ticks. The symbol sheet has a phone layout at 22px. The long plate is thin and marked positive. The short plate is thick. |
| The 59 MW caveat. | The learner page states once that 59 MW is a practice input, not a plant nameplate. The answer key still says not to report 1,062 MWh as a measured plant total. |

Scored questions only, checkpoints excluded: 54 items (11, 11, 10, 10, 12). The keyed choice is strictly longest on 17 of 54, which is 31.5 percent. Positions are 14, 14, 13, 13. Average keyed length is 1.013 times the average distractor length. The existing test still covers every item, including checkpoints: 63 items, 19 longest (30.2 percent), positions 16, 16, 16, 15, ratio 1.004. Both stay inside the 35 percent cap and the 1.15 length ratio.

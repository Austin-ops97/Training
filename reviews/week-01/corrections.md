# Week 1 corrections

Auditor review of PR #1 at `1f278455a70d45764b092c9b1922ee21f6c3e4c6`. This revision answers W1-H1, W1-H2, W1-M1 through W1-M3, and W1-L1 through W1-L7.

## W1-H1 — July 2026 gas-turbine capacity factor

Table 6.07.A, downloaded 12 October 2026: July 2026 gas turbines are 0.233 (23.3 percent), preliminary. July 2026 combined cycle 0.723 was already right. 0.249 is the July 2025 gas-turbine factor and remains only as a labeled distractor on `d4q4`.

Files: `content/week-01/day4.ts`, `content/week-01/answer-key.ts`, `reviews/week-01/assessments.md`, `reviews/week-01/traceability.md`, `reviews/week-01/calculations.md`, `tests/week-01.test.ts`.

## W1-H2 — Teaching voice and learner experience

Learner text no longer names inventory codes or cites a narrator inside the paragraph. Each lesson opens on a hypothetical Viper Power problem with Dana, Priya, and Luis. Each caveat is stated once. Knowledge checks are scenarios: 10 questions on Days 1–4, 12 on Day 5 because that check covers the week. Day 1's three 59 MW items are one question, `d1q5`. Each video has a watch-for line before the player and takeaways after it. Day 4's four videos are split (`video-water`, a checkpoint, `video-quiet`). System sentences about where the score is stored are gone. Each day has a key-terms box. Days 1, 2, 3, and 5 have an SVG diagram. Objectives and the outline sit behind toggles below 800 px. The formula block uses the page font.

The kept lines are still in the lessons: the "plant is 60" coaching on Day 1, the condenser consequence on Day 2, the prime-mover question and the yard callout on Day 3, and the memo title on Day 4.

Scheduled minutes: Day 1 is 73, Day 2 is 62, Day 3 is 66, Day 4 is 70, Day 5 is 61.

Files: `content/week-01/day1.ts` through `day5.ts`, `content/week-01/answer-key.ts`, `components/LessonExperience.tsx`, `components/Diagrams.tsx`, `components/VideoEmbed.tsx`, `app/globals.css`, `lib/types.ts`, `tests/week-01.test.ts`, and the regenerated lesson and assessment notes.

## W1-M1 — Answer position

Each choice has a stable id. The server grades that id, not the on-screen slot. Canonical order in the files uses all four positions (counts 16, 15, 15, and 15 across 61 items) and is not a three-step cycle that never puts the correct choice first. After the page loads, the client shuffles the order. The test covers the distribution, the shuffle, and grading by id.

Files: `lib/types.ts`, `lib/grade.ts`, `lib/choices.ts`, `app/api/quiz/grade/route.ts`, `components/LessonExperience.tsx`, `content/week-01/answer-key.ts`, `content/week-01/day1.ts` through `day5.ts`, `scripts/build-review.ts`, `tests/week-01.test.ts`.

## W1-M2 — Duty labels, dispatchable, inverter-based resources, governor, exciter

Day 1 teaches the governor (fuel and frequency) and the exciter (field current and voltage), and `d1q9` asks which device does which job. Day 4 teaches baseload, intermediate, peaker, dispatchable, and inverter-based resource, and `d4q10` asks for that set. Day 5's review restates both. Lessons stay inside 60 to 90 minutes.

Files: `content/week-01/day1.ts`, `content/week-01/day4.ts`, `content/week-01/day5.ts`, `content/week-01/answer-key.ts`.

## W1-M3 — Plant history that could identify the site

The sentence that dated a move and a commissioning year is gone from the lesson, from `reviews/week-01/traceability.md`, and from `reviews/week-01/open-issues.md`. The Day 5 page still refuses an owner name, a prior-site name, a permit number, and a drawing number, without giving a year.

## W1-L1 — Internal source codes

Codes such as lesson numbers, discrepancy numbers, source-row numbers, and procedure numbers are out of the day files and out of the explanations the grader returns. They remain in this evidence package, where an auditor can still find the basis.

## W1-L2 — Answer key in the repository

Accepted. Documented in `reviews/week-01/open-issues.md` item 11 and in `reviews/week-01/implementation.md`. The grade route returns the correct choice id only after submit. Display order is not the secret.

## W1-L3 — Malformed JSON

`POST /api/quiz/grade` returns 400 with `{ "error": "The request was not valid JSON." }` when the body is not JSON. Unknown lesson remains 404. Unknown exercise remains 400. `tests/week-01.test.ts` posts a broken body and expects 400.

File: `app/api/quiz/grade/route.ts`.

## W1-L4 — Day 3 start time and efficiency

Accepted deviation. The exercise asks for prime mover, leftover heat, and purpose. It does not add a start-time column or an efficiency column. Recorded in `reviews/week-01/open-issues.md` item 9.

## W1-L5 — PostCSS advisory

`package.json` overrides `postcss` to 8.5.29. `npm ls postcss` shows `next@15.5.27` and `vitest` / `vite` both on `postcss@8.5.29`. The production build succeeds. Other `npm audit` findings were left in place. See `reviews/week-01/open-issues.md` item 12.

## W1-L6 — QSE citation

The protocol files linked from the current index are headed August 1, 2026, not a 28 August compilation. Section 2: `https://www.ercot.com/files/docs/2024/06/28/02-080126_Nodal.docx`. Section 1.6.2: `https://www.ercot.com/files/docs/2023/01/26/01-080126_Nodal.docx`. Those URLs are in the Day 5 sources panel and in `reviews/week-01/traceability.md`. The teaching paragraph defines the entity without the URL.

## W1-L7 — Optional engine clip

Accepted. V09 stays embedded, optional, and unused as a quiz source. See `reviews/week-01/open-issues.md` item 2.

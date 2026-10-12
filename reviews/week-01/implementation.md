# Implementation

Week 1 is a Next.js App Router site. There was no existing course framework in the repository. The site name is Training.

## Routes

| Route | What it serves |
| --- | --- |
| `/` | Course home. Week 1 is the only week linked. |
| `/week/1` | Day list in day order, with scheduled minutes. |
| `/week/1/day/1` … `/week/1/day/5` | One lesson. Unknown days 404. |
| `/week/2` | 404. No other week is registered. |
| `POST /api/quiz/grade` | Scores submitted checkpoint or quiz choices, and one numeric exercise. |

Lesson ids: `w1d1`, `w1d2`, `w1d3`, `w1d4`, `w1d5`.

## Files

| Path | Role |
| --- | --- |
| `content/week-01/day1.ts` … `day5.ts` | Public lesson text, prompts, and choices. Each choice has a stable id. No correct id and no explanation. Sources sit in a panel at the end of the lesson. |
| `content/week-01/videos.ts` | V01–V14: id, title, channel, listed duration, start, end, required flag, reviewer watch note. The note is not rendered on the lesson page. |
| `content/week-01/index.ts` | Lesson array and the public question map. |
| `content/week-01/answer-key.ts` | Server-only correct choice ids, explanations, and exercise expectations. |
| `lib/choices.ts` | Seeded shuffle used to vary on-screen order after the page loads. |
| `lib/embed.ts` | Builds the YouTube embed URL with `start`, `end`, and `playsinline=1`. |
| `components/VideoEmbed.tsx` | Responsive iframe. No watch-page link and no runtime arithmetic in the caption. |
| `components/Diagrams.tsx` | Accessible SVG diagrams: grid path, Rankine loop, Brayton and heat recovery, Viper Power block diagram. |
| `components/LessonExperience.tsx` | Sections, in-page players, checkpoints, exercises, knowledge check, section completion, sources panel. |
| `components/WeekProgress.tsx` | Reads and writes `localStorage` key `training.week01.progress.v1`. |
| `lib/grade.ts` | Pure grading functions used by the API route. |
| `lib/course.ts` | Course metadata. Only week id `1` resolves. |
| `app/api/quiz/grade/route.ts` | Imports the answer key. Unknown lesson returns 404. Unknown exercise returns 400. A body that is not JSON returns 400. A response includes only the questions that were submitted. |
| `app/globals.css` | `.video-aspect` is `width: 100%` and `aspect-ratio: 16 / 9`. The iframe fills that box. Formula text uses the page font. At 800 px and below, objectives and the section outline collapse behind toggles, and the section rail stacks. |
| `tests/week-01.test.ts` | Time cap, question coverage, rendered embeds, answer-key isolation, grading, progress, forbidden identifiers. |

## Video placement

Each `videoIds` entry is rendered inside that section, after the "watch for" text and before the takeaway blocks, as `VideoEmbed`. The player URL is:

`https://www.youtube.com/embed/{youtubeId}?start={startSeconds}&end={endSeconds}&rel=0&modestbranding=1&playsinline=1`

`playsinline=1` asks iOS to keep playback in the page. The box is fluid, so the same markup is the desktop and mobile size. Lesson pages do not link out to `youtube.com/watch` or `youtu.be`.

| Code | Lesson section |
| --- | --- |
| V01 | Day 1 `video-grid` |
| V02 | Day 1 `video-home` |
| V03 | Day 2 `video-coal` |
| V04 | Day 2 `video-nuclear` |
| V05 | Day 2 `video-steam` |
| V06, V07 | Day 3 `video-gt` |
| V08, V09 | Day 3 `video-chp` |
| V10, V11 | Day 4 `video-water` |
| V12, V13 | Day 4 `video-quiet` |
| V14 | Day 5 `video-ercot` |

V09 is embedded and labeled not required. It is not a source for any quiz fact.

## Grading and progress

The client posts `{ lessonId, questions, exercise }`. `questions` maps a question id to a choice id. The route compares that id with `correctChoiceId` and returns the correct choice id and the explanation only for submitted questions, plus the expected value only for a submitted exercise. Screen position is not the grade. After hydration the page shuffles choice order with a seeded shuffle; the canonical order in the files is already spread across A–D. Explanations are not in the client module graph. `tests/week-01.test.ts` fails if a client or content module imports the answer key, and the rendered Day 1 HTML is checked for a sentence that exists only in the key.

Progress (sections marked complete, last quiz score, exercise pass/fail) stays in this browser under `training.week01.progress.v1`.

## Data that did not change

No other week, no inventory workbook, and no outline document is stored in the site. Inventory ids are not printed in the lesson text or in the explanations the grader returns. Photos from the library are described as absent from this pack. They are not uploaded.

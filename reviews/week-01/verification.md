# Verification commands

Run from the repository root on 12 October 2026, on `course/week-01-rev2`, after the audit fixes (worked examples, Day 2 path move, diagram fixes). Node v22.14.0. Next.js 15.5.27. Vitest 4.1.11.

## `npm test`

Exit code 0. Vitest 4.1.11.

```
> training@0.1.0 test
> vitest run

 RUN  v4.1.11 /workspace

 Test Files  1 passed (1)
      Tests  12 passed (12)
   Start at  19:17:17
   Duration  494ms (transform 156ms, setup 0ms, import 249ms, tests 151ms, environment 0ms)
```

The embed test renders each lesson to HTML and checks that every video is an iframe inside its section, with `start`, `end`, and `playsinline=1`, and that the page has no `youtube.com/watch` or `youtu.be` link. It also checks that a sentence which exists only in the answer key is absent from the rendered lesson. Choice positions are balanced and are not a 3-step or a strict 4-step cycle. A further test fails if the keyed choice is the longest option on more than 35 percent of items, or if its average length runs more than 15 percent above the distractors. The same caps are applied to the 54 scored questions with checkpoints left out. Another test recomputes the worked arithmetic, including R = 0.053 Ω, P = 53,000 W, and H = 190,800,000 J. Lesson times are 84, 76, 66, 70, and 61 minutes. The Day 5 heat-recovery key must not repeat the equipment name used in the question. Rendered lessons must not contain the three story names.

## `npm run lint`

Exit code 0.

```
> training@0.1.0 lint
> eslint .
```

ESLint ignores `.next`, `node_modules`, `out`, and the generated `next-env.d.ts` triple-slash reference.

## `npm run build`

Exit code 0.

```
> training@0.1.0 build
> next build

   ▲ Next.js 15.5.27

   Creating an optimized production build ...
 ✓ Compiled successfully in 1409ms
   Linting and checking validity of types ...
   Collecting page data ...
   Generating static pages (0/6) ...
   Generating static pages (1/6)
   Generating static pages (2/6)
   Generating static pages (4/6)
 ✓ Generating static pages (6/6)
   Finalizing page optimization ...
   Collecting build traces ...

Route (app)                                 Size  First Load JS
┌ ○ /                                      164 B         106 kB
├ ○ /_not-found                            127 B         103 kB
├ ƒ /api/quiz/grade                        127 B         103 kB
├ ƒ /week/[weekId]                         716 B         107 kB
└ ƒ /week/[weekId]/day/[day]              9.1 kB         115 kB
+ First Load JS shared by all             103 kB
  ├ chunks/255-ce8c7c75002f810b.js       46.5 kB
  ├ chunks/4bd1b696-c023c6e3521b1417.js  54.2 kB
  └ other shared chunks (total)          1.92 kB

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```

## PostCSS

`npm ls postcss` after the override:

```
training@0.1.0
├─┬ next@15.5.27
│ └── postcss@8.5.29 overridden
└─┬ vitest@4.1.11
  └─┬ vite@8.3.4
    └── postcss@8.5.29 deduped
```

After Vitest 4.1.11, `npm audit` reports 5 high findings and no critical or moderate findings. `npm audit --omit=dev` reports 0. Those five highs are the dev-only `braces` / `micromatch` / `fast-glob` chain inside `eslint-config-next` 15.5.27. There is no patched `braces` release, and the suggested fix is a downgrade to `eslint-config-next` 14.2.35, which was not applied. See `open-issues.md` item 12. `npm audit fix --force` was not run.

## Embed URLs

On 12 October 2026, YouTube oEmbed returned HTTP 200 for all 14 ids, with titles and channels matching `content/week-01/videos.ts`. Each `https://www.youtube.com/embed/{id}?start=0&end={listed seconds}&rel=0&modestbranding=1&playsinline=1` URL returned HTTP 200 and a player document. Video ids and windows did not change in this revision.

## Lesson HTML and grade API

Checked 12 October 2026 with HTTP requests against `http://127.0.0.1:3944` after this build. `/favicon.ico` returned HTTP 200, `content-type: image/x-icon`, 4,286 bytes.

| Path | Status | In-page embeds | Outbound watch link |
| --- | ---: | ---: | --- |
| `/` | 200 | 0 | no |
| `/week/1` | 200 | 0 | no |
| `/week/1/day/1` | 200 | 1 | no |
| `/week/1/day/2` | 200 | 4 | no |
| `/week/1/day/3` | 200 | 4 | no |
| `/week/1/day/4` | 200 | 4 | no |
| `/week/1/day/5` | 200 | 1 | no |
| `/week/2` | 404 | 0 | no |

Day 1 HTML contains "When someone says", the resistivity table, the illustrative line at 0.053 Ω, and "1.908×10⁸ J". The phrase "not a plant nameplate" appears once in the visible exercise prompt. Day 1 no longer contains the shaft-to-customer section or the transformer video. Day 2 contains that section, the governor sentence, and four in-page players. Day 4 HTML contains the phone duty diagram. Day 5 HTML still names the frame, the PLC-5, the 15 May date, and the remote operations center.

`POST /api/quiz/grade` scores choice ids:

- `w1d1` question `d1q2` selected choice `d1q2b` returned `correct: true` (R = 0.053 Ω).
- `w1d1` question `d1q3` selected choice `d1q3a` returned `correct: true` (13,800 J/C).
- `w1d1` question `d1q4` selected choice `d1q4c` returned `correct: true` (53 kW).
- `w1d1` exercise `d1e1` value `1062` returned `correct: true`.
- A body of `{` returned HTTP 400 and `The request was not valid JSON.`
- `/week/2` returned HTTP 404.

## Diagram check

Headless Chrome screenshots of the Ohm figure at 1280 px and at 390 px show the caption in full, wrapping onto more than one line at 390 px, with axes labeled "V (volts)" and "I (amperes)". A 390 px screenshot of the phone symbol sheet shows 22 px labels, including "Cell, long thin plate is +", with the long plate thin and the short plate thick. A click-through of the quiz form and a reload of saved progress were not repeated in this pass. Scoring was checked through the grade API.

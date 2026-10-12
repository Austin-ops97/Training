# Verification commands

Run from the repository root on 12 October 2026. Node v22.14.0. Next.js 15.5.27. Vitest 4.1.11.

## `npm test`

Exit code 0. Vitest 4.1.11.

```
> training@0.1.0 test
> vitest run

 RUN  v4.1.11 /workspace

 Test Files  1 passed (1)
      Tests  11 passed (11)
   Start at  09:40:58
   Duration  564ms (transform 202ms, setup 0ms, import 325ms, tests 115ms, environment 0ms)
```

The embed test renders each lesson to HTML and checks that every video is an iframe inside its section, with `start`, `end`, and `playsinline=1`, and that the page has no `youtube.com/watch` or `youtu.be` link. It also checks that a sentence which exists only in the answer key is absent from the rendered lesson. Choice positions are balanced and are not a 3-step or a strict 4-step cycle. A further test fails if the keyed choice is the longest option on more than 35 percent of items, or if its average length runs more than 15 percent above the distractors.

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
 ✓ Compiled successfully in 1080ms
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
└ ƒ /week/[weekId]/day/[day]             7.26 kB         113 kB
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

Checked 12 October 2026 with HTTP requests against `http://127.0.0.1:3921` after this revision's build. `/favicon.ico` returned HTTP 200, `content-type: image/x-icon`, 4,286 bytes, a 32×32 icon.

| Path | Status | In-page embeds | Outbound watch link |
| --- | ---: | ---: | --- |
| `/` | 200 | 0 | no |
| `/week/1` | 200 | 0 | no |
| `/week/1/day/1` | 200 | 2 | no |
| `/week/1/day/2` | 200 | 3 | no |
| `/week/1/day/3` | 200 | 4 | no |
| `/week/1/day/4` | 200 | 4 | no |
| `/week/1/day/5` | 200 | 1 | no |
| `/week/2` | 404 | 0 | no |

Day 1 HTML contains the opening ("It's your second week" / "When someone says"), the sources panel, and does not contain "six questions", "hypothetical people", or the answer-key sentence "Do not report 1,062". The Week page states the hypothetical-people note once. Day 4 HTML contains the duty diagram ("Baseload: on most hours") and "23.3 percent". Day 5 HTML says "two more than the other days" and still names the frame, the PLC-5, the 2024 test, the 15 May date, and the remote operations center.

`POST /api/quiz/grade` scores choice ids:

- `w1d1` question `d1c1` selected choice `d1c1c` returned `correct: true` and the 100 MWh explanation.
- `w1d4` question `d4q4` selected choice `d4q4d` returned `correct: true`. The explanation contains 0.233 and says 0.249 is July 2025.
- `w1d5` question `d5q12` selected choice `d5q12b` returned `correct: true`.
- `w1d5` question `d5q8` selected choice `d5q8a` returned `correct: false`. The correct choice id was `d5q8c`.
- A body of `{` returned HTTP 400 and `The request was not valid JSON.`
- `/week/2` and `/week/1/day/6` returned HTTP 404.

## Browser pass — partial

An interactive browser pass (click play, submit in the UI, resize to a phone width, reload for localStorage) was started on the earlier revision and did not return. It is not claimed as done for this revision either.

What was verified without that pass: the unit test renders each lesson to HTML and asserts an iframe inside the video section; the CSS box is `width: 100%` with `aspect-ratio: 16 / 9` and a layout change at 800 px; the live lesson HTML contains those iframes, the sources panel, and no outbound watch link. Playback inside a real browser window, the phone toggle, and progress surviving a reload were not observed in this pass.

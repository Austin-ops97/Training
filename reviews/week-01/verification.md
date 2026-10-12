# Verification commands

Run from the repository root on 12 October 2026. Node v22.14.0. Next.js 15.5.27. Vitest 3.2.7.

## `npm test`

Exit code 0.

```
> training@0.1.0 test
> vitest run

 RUN  v3.2.7 /workspace

 ✓ tests/week-01.test.ts (10 tests) 85ms

 Test Files  1 passed (1)
      Tests  10 passed (10)
   Start at  09:12:55
   Duration  451ms (transform 141ms, setup 0ms, collect 230ms, tests 85ms, environment 0ms, prepare 42ms)
```

The embed test renders each lesson to HTML and checks that every video is an iframe inside its section, with `start`, `end`, and `playsinline=1`, and that the page has no `youtube.com/watch` or `youtu.be` link. It also checks that a sentence which exists only in the answer key is absent from the rendered lesson. Added checks: canonical answer positions are balanced and are not a three-step cycle, a seeded shuffle spreads one choice across all four slots, grading uses the choice id, malformed JSON returns 400, the July 2026 gas-turbine choice says 23.3 percent and the explanation says 0.233, and learner text does not carry inventory codes or the removed warning phrases.

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
 ✓ Compiled successfully in 1376ms
   Linting and checking validity of types ...
   Collecting page data ...
   Generating static pages (0/5) ...
   Generating static pages (1/5)
   Generating static pages (2/5)
   Generating static pages (3/5)
 ✓ Generating static pages (5/5)
   Finalizing page optimization ...
   Collecting build traces ...

Route (app)                                 Size  First Load JS
┌ ○ /                                      164 B         106 kB
├ ○ /_not-found                            127 B         103 kB
├ ƒ /api/quiz/grade                        127 B         103 kB
├ ƒ /week/[weekId]                         716 B         107 kB
└ ƒ /week/[weekId]/day/[day]             6.93 kB         113 kB
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
└─┬ vitest@3.2.7
  └─┬ vite@7.3.7
    └── postcss@8.5.29 deduped
```

`npm audit` still reports other findings (1 moderate, 5 high, 2 critical). The PostCSS advisory is not among them. `npm audit fix --force` was not run.

## Embed URLs

On 12 October 2026, YouTube oEmbed returned HTTP 200 for all 14 ids, with titles and channels matching `content/week-01/videos.ts`. Each `https://www.youtube.com/embed/{id}?start=0&end={listed seconds}&rel=0&modestbranding=1&playsinline=1` URL returned HTTP 200 and a player document. Video ids and windows did not change in this revision.

## Lesson HTML and grade API

Checked 12 October 2026 with HTTP requests against `http://127.0.0.1:3456` after this revision's build.

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

Day 1 HTML contains the new opening ("It's your second week"), the sources panel, and "23.3 percent" is on Day 4. Day 1 HTML does not contain the answer-key sentence "Do not report 1,062".

`POST /api/quiz/grade` now scores choice ids:

- `w1d1` exercise `d1e1` value `1062` returned `correct: true`, expected `1062`.
- `w1d1` question `d1c1` selected choice `d1c1a` returned `correct: true` and the 100 MWh explanation.
- `w1d5` question `d5q8` selected choice `d5q8a` returned `correct: false`. The correct choice id was `d5q8b`.
- A body of `{` returned HTTP 400 and `The request was not valid JSON.`
- Unknown lesson id returned HTTP 404.

## Browser pass — partial

An interactive browser pass (click play, submit in the UI, resize to a phone width, reload for localStorage) was started on the earlier revision and did not return. It is not claimed as done for this revision either.

What was verified without that pass: the unit test renders each lesson to HTML and asserts an iframe inside the video section; the CSS box is `width: 100%` with `aspect-ratio: 16 / 9` and a layout change at 800 px; the live lesson HTML contains those iframes, the sources panel, and no outbound watch link. Playback inside a real browser window, the phone toggle, and progress surviving a reload were not observed in this pass.

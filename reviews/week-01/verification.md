# Verification commands

Run from the repository root on 12 October 2026. Node v22.14.0. Next.js 15.5.27. Vitest 3.2.7.

## `npm test`

Exit code 0.

```
> training@0.1.0 test
> vitest run

 RUN  v3.2.7 /workspace

 ✓ tests/week-01.test.ts (7 tests) 58ms

 Test Files  1 passed (1)
      Tests  7 passed (7)
   Start at  07:52:55
   Duration  405ms (transform 132ms, setup 0ms, collect 195ms, tests 58ms, environment 0ms, prepare 46ms)
```

The embed test renders each lesson to HTML and checks that every video is an iframe inside its section, with `start`, `end`, and `playsinline=1`, and that the page has no `youtube.com/watch` or `youtu.be` link. It also checks that a sentence which exists only in the answer key is absent from the rendered lesson.

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
 ✓ Compiled successfully in 1149ms
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
└ ƒ /week/[weekId]/day/[day]             5.25 kB         111 kB
+ First Load JS shared by all             103 kB
  ├ chunks/255-ce8c7c75002f810b.js       46.5 kB
  ├ chunks/4bd1b696-c023c6e3521b1417.js  54.2 kB
  └ other shared chunks (total)          1.92 kB

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```

## Embed URLs

On 12 October 2026, YouTube oEmbed returned HTTP 200 for all 14 ids, with titles and channels matching `content/week-01/videos.ts`. Each `https://www.youtube.com/embed/{id}?start=0&end={listed seconds}&rel=0&modestbranding=1&playsinline=1` URL returned HTTP 200 and a player document.

## Lesson HTML and grade API

Dev server: `npm run dev -- --port 3456`. Checked 12 October 2026 with HTTP requests against `http://127.0.0.1:3456`.

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

Every lesson iframe used `playsinline=1` and the listed window:

- Day 1: `v1BMWczn7JM?start=0&end=625`, `9kgzA0Vd8S8?start=0&end=513`
- Day 2: `eqn0VBVWS50?start=0&end=430`, `jpDRfaWYk3I?start=0&end=248`, `V5cpJwiF0u4?start=0&end=67`
- Day 3: `2Jm5RVHLlcQ?start=0&end=124`, `wKSaIkeYyF4?start=0&end=216`, `MXlfYXnlSgA?start=0&end=141`, `vxb6UGXGv40?start=0&end=136`
- Day 4: `q8HmRLCgDAI?start=0&end=193`, `xy9nj94xvKA?start=0&end=303`, `xKxrkht7CpY?start=0&end=299`, `UVAXkzCVd2s?start=0&end=166`
- Day 5: `8aldmvik3aU?start=0&end=76`

Day 1 HTML does not contain the answer-key sentence "Do not report 1,062".

`POST /api/quiz/grade`:

- `w1d1` exercise `d1e1` value `1062` returned `correct: true`, expected `1062`.
- `w1d1` question `d1c1` selected index `0` returned `correct: true` and the 100 MWh explanation.
- `w1d5` question `d5q8` selected index `0` returned `correct: false` for that question only.
- Unknown lesson id returned HTTP 404.

## Browser pass — partial

An interactive browser pass (click play, submit in the UI, resize to a phone width, reload for localStorage) was started and did not return. It is not claimed as done.

What was verified without that pass: the unit test renders each lesson to HTML and asserts an iframe inside the video section; the CSS box is `width: 100%` with `aspect-ratio: 16 / 9` and a layout change at 800 px; the live lesson HTML contains those iframes and no outbound watch link; YouTube's embed URLs returned a player document. Playback inside a real browser window, and progress surviving a reload, were not observed in this pass.

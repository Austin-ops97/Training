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

## Browser pass

Recorded after the in-browser check of the running lesson pages. See the end of this file once that pass is attached.

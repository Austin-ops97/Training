# Power Plant Foundations

A complete textbook-style online course for a project manager new to power generation. Sixteen chapters build from charge and circuits through generator physics, the gas turbine, auxiliary systems, controls, operating states, grid delivery, other technologies, performance, markets, and a project capstone.

## Learning experience

- `/` or `/learn`: course contents, chapter/term search, resume reading, and an interactive energy-path overview.
- `/learn/[slug]`: continuous chapter prose, worked examples, diagrams with text alternatives, optional videos, key terms, written practice, and formative review with explanations.
- `/learn/glossary`: searchable definitions with links back to their chapters.
- `/learn/review`: sixteen-question cumulative review with links to the relevant explanations.
- `/learn/evidence`: source scope, video decisions, and evidence limitations.

Progress, written responses, and review scores use browser-local storage under `training.textbook.progress.v1`. Reading completion is self-reported and independent of review scores. This is technical literacy, not operator qualification. There is no login, cross-device sync, or claim of assessment security.

Text is server-rendered and readable without JavaScript; interactive controls require JavaScript. Chapter reading-time estimates use 180 words/minute and exclude practice and videos. Print styles support a chapter at a time.

## Retained material

The original five-day project-manager lessons remain at `/week/1`. Their 60 Hz answer and several electricity/power explanations have been corrected. Existing progress and the original server grading endpoint remain separate. The operator curriculum outline remains at `/operator-fundamentals`.

All fourteen existing videos are retained in the new course as optional companions. Publisher narration is qualified where needed; the written lessons stand alone. Current metadata was confirmed for all videos, but fresh full timed transcripts were not available. The detailed review is in `reviews/textbook/`.

## Development

```bash
npm ci
npm test
npm run build
npm run dev
```

Course content is in `content/textbook/`. Reading and progress components are in `components/`; the routes are in `app/learn/`. Tests cover course dependencies, source/video references, rendered chapter anchors, adjacent navigation, scoring, storage recovery, and the retained original assessments.

The existing Vercel `training` project is linked to `Austin-ops97/Training` on `main`. Keep that integration rather than creating a second hosted course.

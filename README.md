# NEURO · Power Plant Foundations

A complete textbook-style online course for a project manager new to power generation. Sixteen chapters build from charge and circuits through generator physics, the gas turbine, auxiliary systems, controls, operating states, grid delivery, other technologies, performance, markets, and a project capstone.

## Learning experience

- `/` or `/learn`: course contents, chapter/term search, resume reading, and an interactive energy-path overview.
- `/learn/[slug]`: continuous chapter prose, worked examples, diagrams with text alternatives, optional videos, key terms, written practice, and formative review with explanations.
- `/learn/glossary`: searchable definitions with links back to their chapters.
- `/learn/review`: sixteen-question cumulative review with links to the relevant explanations.
- `/learn/evidence`: source scope, video decisions, and evidence limitations.

Austin and Alex log in at `/login`. Passwords are verified on the server against salted scrypt hashes; sessions use signed HttpOnly cookies. Each profile keeps its own browser cache (`training.textbook.progress.v1.austin` or `.alex`) and pending online-save queue. Written answers autosave as users type; quiz selections, submitted state, scores, completed chapters, and the last chapter are retained. Existing guest work is preserved and can be explicitly imported from Profile & saves. The chapter navigation can collapse; completed chapters show green checks. Reading completion remains self-reported and independent of review scores. This is technical literacy, not operator qualification.

## Display and reading preferences

The header's **Display** menu switches Day/Dark themes, toggles a paper-style reading mode, chooses Book serif/Classic serif/Modern sans/Monospace, and sets reading text from 16–28 px. Preferences persist on the device under `training.appearance.v1`, separate from profile progress and answers. A validated pre-paint script restores the appearance before hydration. If storage is blocked, preferences still apply for the current session.

Reading mode centers the chapter on a quieter paper surface and hides the course navigation temporarily; exiting restores the existing navigation preference. The Larger text shortcut updates the same saved size setting. Video players are visible in the flow of every chapter, with no disclosure required; lazy loading delays offscreen network work without hiding players. Existing video guidance, course content, assessments, and profile/save APIs are preserved.

## Online saves and hosting configuration

Authentication variables are configured on the existing Vercel project: `TRAINING_SESSION_SECRET`, `TRAINING_AUSTIN_PASSWORD_HASH`, and `TRAINING_ALEX_PASSWORD_HASH`. Passwords and signing secrets must never be committed. See `.env.example` for local configuration names.

Cross-device saves require a **private Vercel Blob store connected to this project**, providing `BLOB_READ_WRITE_TOKEN` or `BLOB_STORE_ID` with Vercel OIDC. The storage connector rejected store creation (HTTP 403); no store was provisioned during this change. Until storage is connected and the project redeployed, logins work and each profile saves on its current device, while the UI explicitly reports online sync unavailable. Never use the deployment filesystem for persistent saves.

The authenticated `/api/progress` endpoint reads fresh private blobs and applies field patches with ETag conditional writes and conflict retries. It derives the storage path from the signed session, validates course fields, and checks the expected profile so another tab switching users cannot send one user's work to the other profile. Pending changes remain on the device after failed requests and upload on a later visit or Retry online sync. Independent fields merge; simultaneous edits to the same answer use the last successful patch. Server-save functionality is covered with mocked storage tests; an actual cross-device round trip remains unverified until provisioning is completed.

Text is server-rendered and readable without JavaScript; interactive controls require JavaScript. Chapter reading-time estimates use 180 words/minute and exclude practice and videos. Print styles support a chapter at a time.

## Retained material

The original five-day project-manager lessons remain at `/week/1`. Their 60 Hz answer and several electricity/power explanations have been corrected. Existing progress and the original server grading endpoint remain separate. The operator curriculum outline remains at `/operator-fundamentals`.

Three embedded Chapter 2 companions cover voltage, resistance, and Ohm’s law, in that order. The user-supplied voltage transcript and the publisher’s Ohm’s law article were reviewed; the resistance clip is metadata-verified with full narration review pending. Corrections and limitations are shown beside the players. The original five-day video registry is unchanged.

Ten further Engineering Mindset companions support energy calculations, induction, three-phase generation, power factor, torque, cooling equipment, RTDs, PLCs, and electrical protection. Each appears once, with a viewing question, explanatory guidance, and relevant scope/correction notes. Publisher lesson review is recorded separately from full timed narration verification, which remains outstanding. See `reviews/textbook/engineering-mindset-additions.json` for selected and deferred candidates.

All fourteen existing videos are retained in the new course as optional companions. Publisher narration is qualified where needed; the written lessons stand alone. Current metadata was confirmed for all videos, but fresh full timed transcripts were not available. The detailed review is in `reviews/textbook/`.

## Development

```bash
npm ci
npm test
npm run build
npm run dev
```

Course content is in `content/textbook/`. Reading and progress components are in `components/`; the routes are in `app/(course)/learn/`. Tests cover course dependencies, source/video references, rendered chapter anchors, adjacent navigation, scoring, storage recovery, and the retained original assessments.

The existing Vercel `training` project is linked to `Austin-ops97/Training` on `main`. Keep that integration rather than creating a second hosted course.

## NEURO branding and responsive learning layout

The supplied NEURO wordmark is retained unchanged at `public/neuro-wordmark.png`. `NeuroWordmark` uses Next Image delivery inside an SVG alpha mask. The mask removes the pale background and source margins while preserving the supplied lettering; `currentColor` follows Day, Dark, and reading themes without an opaque backing or blend effects. The original uploaded file is not edited. Site titles, the header, and the login presentation use NEURO; the repository and existing Vercel project remain `Training`/`training`.

On wide desktop screens (1440 px and above), chapter navigation, the reading column, and a compact progress/goals rail share the screen. At 1024–1439 px, the reader has a two-column navigation/content layout. Below 1024 px, chapters default to a closed toggle and progress/goals stack above the lesson; goals can expand when needed. Below 768 px, login stacks into one column and the header navigation moves onto its own row. Phone pagination stacks vertically. Reading mode keeps the support rail hidden and retains the established paper palettes, font choices, and sizing.

Learning goals and progress use the actual course/profile data. The reference image’s sample chapter names, stock photograph, percentages, and goal-completion marks are not curriculum inputs. The login keeps the existing two profiles, passwords, and save APIs; its Show/Hide password control is presentational.

Signed-out visitors are redirected to `/login` by the server layout for all course pages. The login page returns authenticated profiles to the course home; successful logout replaces the current location with `/login`. Existing progress and answers are retained per profile.

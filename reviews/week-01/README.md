# Week 1 evidence package

Training site, course **Power Plant Fundamentals for Project Managers**, Week 1 only: **Power Generation Fundamentals — how electricity is produced and delivered**.

The worked example is Viper Power, an anonymized six-unit simple-cycle gas peaker in ERCOT. This package does not name a prior site, a permit, a drawing number, or a person.

| File | What it is |
| --- | --- |
| [lessons.md](lessons.md) | Five lessons, objectives, and minutes per section |
| [videos.md](videos.md) | In-page embeds, start/end windows, and verification notes |
| [traceability.md](traceability.md) | Claims, inventory ids or public URLs, and verification status |
| [calculations.md](calculations.md) | Worked answer key for every calculation taught or graded |
| [assessments.md](assessments.md) | Every checkpoint, knowledge-check item, and numeric exercise, with the correct choice and explanation |
| [implementation.md](implementation.md) | Files, routes, content ids, and how the player and the grader work |
| [verification.md](verification.md) | Test, lint, and build commands with their output |
| [open-issues.md](open-issues.md) | Items that still need an instructor or a site confirmation |
| [corrections.md](corrections.md) | Auditor findings H1, H2, M1–M3, and L1–L7, and where each was fixed |
| [rev2-corrections.md](rev2-corrections.md) | Owner revision after the merge: voice, electricity fundamentals, and the accepted lows |

Public lesson text is in `content/week-01/day1.ts` through `day5.ts`. The server answer key is `content/week-01/answer-key.ts`. Regenerating the lesson, assessment, and video tables: `npx vite-node --config vitest.config.ts scripts/build-review.ts`.

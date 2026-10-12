# Training

Two separate courses.

**Power Plant Fundamentals for Project Managers** has Week 1 published. The audience is a project manager who needs technical literacy, not an operator qualification. Viper Power, an anonymized six-unit simple-cycle gas peaker in ERCOT, is the worked example.

**Peaking Power Plant Operator Fundamentals** has its curriculum outline at `/operator-fundamentals`. Lesson pages are not published yet. That course does not qualify anyone to operate a plant.

## Run

```bash
npm install
npm test
npm run lint
npm run build
npm run dev
```

Open `/` and then Week 1, Days 1–5. Videos play in the lesson page. Knowledge checks are scored by `POST /api/quiz/grade`. Explanations are not in the client bundle. Progress is stored in this browser under `training.week01.progress.v1`.

The evidence package for this week is in `reviews/week-01/`.

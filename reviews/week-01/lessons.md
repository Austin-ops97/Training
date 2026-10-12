# Week 1 lessons, objectives, and time

Site: Training. Course: Power Plant Fundamentals for Project Managers.
Week: Power Generation Fundamentals — how electricity is produced and delivered.
Audience: a project manager with a military and project background who needs technical literacy, not an operator qualification.
Worked example: Viper Power, an anonymized six-unit simple-cycle gas peaker in ERCOT.

Each lesson is 60 to 90 minutes. Video minutes are inside the section that embeds the player. The outline's longer day blocks were rebuilt so no lesson exceeds the cap.

| Day | Lesson id | Route | Scheduled minutes | Knowledge-check items |
| --- | --- | --- | ---: | ---: |
| 1 | w1d1 | `/week/1/day/1` | 74 | 12 |
| 2 | w1d2 | `/week/1/day/2` | 61 | 11 |
| 3 | w1d3 | `/week/1/day/3` | 66 | 11 |
| 4 | w1d4 | `/week/1/day/4` | 66 | 11 |
| 5 | w1d5 | `/week/1/day/5` | 60 | 14 |
| | | **Total** | **327** | |

## Day 1 — Power versus energy, and how the grid moves electricity (74 min)

The units a project manager has to keep straight, and the path from a spinning generator to a customer.

Public content: `content/week-01/day1.ts`. Lesson id `w1d1`.

### Objectives

- Define MW, MWh, kV, and Hz in one sentence each, and use them without mixing power and energy.
- Explain why supply and demand must match continuously, and what frequency does when they do not.
- Trace electricity from the generator through the step-up transformer, transmission, substation, and distribution.
- Compute a simple energy total from a given megawatt figure and a number of hours, and state the basis of the figure.

### Sections

| Section id | Title | Kind | Level | Minutes | Videos | Checks |
| --- | --- | --- | ---: | ---: | --- | --- |
| `intro` | Why this day matters | intro | 1 | 4 | — | — |
| `units` | Four units: MW, MWh, kV, Hz | core | 1 | 10 | — | — |
| `check-units` | Checkpoint — units | checkpoint | 1 | 3 | — | d1c1 |
| `video-grid` | Visual — the grid as one machine | visual | 1 | 11 | V01 | — |
| `path` | From the generator to the customer | core | 1 | 7 | — | — |
| `video-home` | Visual — generators and transformers | visual | 1 | 9 | V02 | — |
| `check-transformer` | Checkpoint — transformers | checkpoint | 1 | 3 | — | d1c2 |
| `apply` | Viper Power, only as far as the documents go | application | 2 | 6 | — | — |
| `exercise` | Exercise — energy from a given output | exercise | 2 | 8 | — | d1e1 |
| `check-basis` | Checkpoint — the basis of a megawatt | checkpoint | 2 | 3 | — | d1c3 |
| `quiz` | Knowledge check | quiz | 1 | 10 | — | d1q1, d1q2, d1q3, d1q4, d1q5, d1q6, d1q7, d1q8, d1q9, d1q10, d1q11, d1q12 |

Knowledge-check ids (scored together at the end): `d1q1`, `d1q2`, `d1q3`, `d1q4`, `d1q5`, `d1q6`, `d1q7`, `d1q8`, `d1q9`, `d1q10`, `d1q11`, `d1q12`.

## Day 2 — Steam plants: the Rankine cycle in coal and nuclear stations (61 min)

What spins the shaft when the plant boils water, and where the heat is thrown away.

Public content: `content/week-01/day2.ts`. Lesson id `w1d2`.

### Objectives

- Name the Rankine cycle and sketch boiler or reactor, turbine, condenser, and pump.
- Explain that coal and a pressurized-water nuclear plant differ in the heat source, not in the need for a steam turbine and a generator.
- Say where heat enters the cycle and where heat is rejected, and why that rejection is not optional.
- Keep steam-plant equipment off the Viper Power scope. Viper Power is a simple-cycle gas plant.

### Sections

| Section id | Title | Kind | Level | Minutes | Videos | Checks |
| --- | --- | --- | ---: | ---: | --- | --- |
| `intro` | Why a gas-plant PM still learns steam | intro | 1 | 4 | — | — |
| `rankine` | The Rankine loop | core | 1 | 10 | — | — |
| `video-coal` | Visual — coal plant systems | visual | 1 | 8 | V03 | — |
| `video-nuclear` | Visual — nuclear heat, same steam idea | visual | 1 | 5 | V04 | — |
| `video-steam` | Visual — four steps, including the condenser | visual | 1 | 2 | V05 | — |
| `check-loop` | Checkpoint — where the heat goes | checkpoint | 1 | 4 | — | d2c1, d2c2 |
| `apply` | What a PM does with the loop | application | 2 | 8 | — | — |
| `exercise` | Exercise — sketch the loop | exercise | 2 | 8 | — | — |
| `quiz` | Knowledge check | quiz | 1 | 12 | — | d2q1, d2q2, d2q3, d2q4, d2q5, d2q6, d2q7, d2q8, d2q9, d2q10, d2q11 |

Knowledge-check ids (scored together at the end): `d2q1`, `d2q2`, `d2q3`, `d2q4`, `d2q5`, `d2q6`, `d2q7`, `d2q8`, `d2q9`, `d2q10`, `d2q11`.

## Day 3 — Gas-fired plants: simple cycle, combined cycle, CHP, and engines (66 min)

Four ways to burn a fuel for power, and which one Viper Power actually is.

Public content: `content/week-01/day3.ts`. Lesson id `w1d3`.

### Objectives

- Name the Brayton cycle and the compressor, combustor, and turbine path.
- Explain why a combined cycle gets more electricity from the same fuel: an HRSG and a steam turbine.
- Define combined heat and power the way EPA defines it, including the efficiency comparison EPA publishes.
- Place Viper Power as a simple-cycle, gas-only plant and refuse numbers that belong to other companies' machines.

### Sections

| Section id | Title | Kind | Level | Minutes | Videos | Checks |
| --- | --- | --- | ---: | ---: | --- | --- |
| `intro` | Four plants, one fuel family | intro | 1 | 4 | — | — |
| `brayton` | Simple cycle: the Brayton path | core | 1 | 8 | — | — |
| `video-gt` | Visual — compressor, combustor, turbine, generator | visual | 1 | 6 | V06, V07 | — |
| `check-path` | Checkpoint — gas path and heat recovery | checkpoint | 1 | 4 | — | d3c1, d3c2 |
| `chp` | Combined heat and power, and engines | core | 1 | 8 | — | — |
| `video-chp` | Visual — heat used on purpose, and an engine plant | visual | 1 | 6 | V08, V09 | — |
| `apply` | Viper Power is the simple-cycle row | application | 2 | 8 | — | — |
| `exercise` | Exercise — four-row comparison | exercise | 2 | 10 | — | — |
| `quiz` | Knowledge check | quiz | 1 | 12 | — | d3q1, d3q2, d3q3, d3q4, d3q5, d3q6, d3q7, d3q8, d3q9, d3q10, d3q11 |

Knowledge-check ids (scored together at the end): `d3q1`, `d3q2`, `d3q3`, `d3q4`, `d3q5`, `d3q6`, `d3q7`, `d3q8`, `d3q9`, `d3q10`, `d3q11`.

## Day 4 — Hydro, wind, solar, batteries, and the peaker's hours (66 min)

The other prime movers, and why a simple-cycle plant can matter while it sits.

Public content: `content/week-01/day4.ts`. Lesson id `w1d4`.

### Objectives

- Describe hydro, wind, solar PV, and grid batteries at a project-manager level, including what each does with energy.
- Compute a capacity factor from a stated rating and a stated energy total, and label a hypothetical example as hypothetical.
- Read EIA Table 6.07.A for natural-gas combined cycle and gas turbines, and say what those national figures are not.
- Explain why a peaker's capacity factor is low, and how batteries compete for some of the same short-notice hours, without inventing an ERCOT price.

### Sections

| Section id | Title | Kind | Level | Minutes | Videos | Checks |
| --- | --- | --- | ---: | ---: | --- | --- |
| `intro` | The machines that change the peaker's day | intro | 1 | 4 | — | — |
| `resources` | Four resources, in one pass | core | 1 | 8 | — | — |
| `videos` | Visual — hydro, wind, solar, batteries | visual | 1 | 17 | V10, V11, V12, V13 | — |
| `check-resources` | Checkpoint — do not mix the projects | checkpoint | 1 | 4 | — | d4c1, d4c2 |
| `cf` | Capacity factor, with the EIA table open | core | 1 | 8 | — | — |
| `apply` | How batteries take some of the peaker's hours | application | 2 | 7 | — | — |
| `exercise` | Exercise — a labeled hypothetical capacity factor | exercise | 2 | 8 | — | d4e1 |
| `quiz` | Knowledge check | quiz | 1 | 10 | — | d4q1, d4q2, d4q3, d4q4, d4q5, d4q6, d4q7, d4q8, d4q9, d4q10, d4q11 |

Knowledge-check ids (scored together at the end): `d4q1`, `d4q2`, `d4q3`, `d4q4`, `d4q5`, `d4q6`, `d4q7`, `d4q8`, `d4q9`, `d4q10`, `d4q11`.

## Day 5 — Viper Power on one page, and the week review (60 min)

The worked example, with the document conflicts left visible, then the Friday check.

Public content: `content/week-01/day5.ts`. Lesson id `w1d5`.

### Objectives

- State Viper Power's unit count, fuel, frame family, and the two capacity bases the inventory actually records.
- State the generator voltage and the switchyard voltage the inventory supports, and what a shared step-up transformer means.
- Define a Qualified Scheduling Entity from the current ERCOT protocol wording, and say who balances the grid.
- Pass a week review that includes the Friday questions, each one covered in this lesson before the check.

### Sections

| Section id | Title | Kind | Level | Minutes | Videos | Checks |
| --- | --- | --- | ---: | ---: | --- | --- |
| `intro` | One plant, said carefully | intro | 1 | 4 | — | — |
| `plant` | The page you can defend | core | 1 | 12 | — | — |
| `check-bases` | Checkpoint — which megawatt | checkpoint | 2 | 4 | — | d5c1 |
| `video-ercot` | Visual — ERCOT does not own the plants | visual | 1 | 2 | V14 | — |
| `market` | QSE, TSP, and who oversees the market | application | 2 | 6 | — | — |
| `exercise` | Exercise — two bases, and a confirmation list | exercise | 2 | 8 | — | d5e1 |
| `review` | Week review — the Friday points, said once more | review | 1 | 10 | — | — |
| `quiz` | Knowledge check — Friday questions plus the plant page | quiz | 1 | 14 | — | d5q1, d5q2, d5q3, d5q4, d5q5, d5q6, d5q7, d5q8, d5q9, d5q10, d5q11, d5q12, d5q13, d5q14 |

Knowledge-check ids (scored together at the end): `d5q1`, `d5q2`, `d5q3`, `d5q4`, `d5q5`, `d5q6`, `d5q7`, `d5q8`, `d5q9`, `d5q10`, `d5q11`, `d5q12`, `d5q13`, `d5q14`.

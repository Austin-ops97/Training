# Week 1 lessons, objectives, and time

Site: Training. Course: Power Plant Fundamentals for Project Managers.
Week: Power Generation Fundamentals — how electricity is produced and delivered.
Audience: a project manager with a military and project background who needs technical literacy, not an operator qualification.
Worked example: Viper Power, an anonymized six-unit simple-cycle gas peaker in ERCOT.

Each lesson is 60 to 90 minutes. Video minutes are inside the section that embeds the player. The outline's longer day blocks were rebuilt so no lesson exceeds the cap.

| Day | Lesson id | Route | Scheduled minutes | Knowledge-check items |
| --- | --- | --- | ---: | ---: |
| 1 | w1d1 | `/week/1/day/1` | 84 | 11 |
| 2 | w1d2 | `/week/1/day/2` | 76 | 11 |
| 3 | w1d3 | `/week/1/day/3` | 66 | 10 |
| 4 | w1d4 | `/week/1/day/4` | 70 | 10 |
| 5 | w1d5 | `/week/1/day/5` | 61 | 12 |
| | | **Total** | **357** | |

## Day 1 — Electricity, then how a plant puts it on the grid (84 min)

Charge, current, voltage, resistance, and power, with the arithmetic worked, and why raising voltage cuts line heating.

Public content: `content/week-01/day1.ts`. Lesson id `w1d1`.

### Objectives

- Define charge, current, potential difference, resistance, and power, and use the SI unit with each one.
- Use Ohm's law, the resistivity formula, and the series and parallel rules on a simple circuit.
- Compute power and heating from P = VI, I²R, and V²/R, and say why a fuse or breaker opens the path.
- Separate MW from MWh, and keep a plant figure attached to its unit and its basis.

### Sections

| Section id | Title | Kind | Level | Minutes | Videos | Checks |
| --- | --- | --- | ---: | ---: | --- | --- |
| `intro` | The product is electricity | intro | 1 | 3 | — | — |
| `charge-current` | Charge and current | core | 1 | 8 | — | — |
| `voltage-circuits` | Potential difference and the circuit | core | 1 | 9 | — | — |
| `check-current` | Checkpoint — charge per second | checkpoint | 1 | 3 | — | d1c1 |
| `ohm` | Ohm's law and resistance | core | 1 | 12 | — | — |
| `series-parallel` | Series and parallel | core | 1 | 6 | — | — |
| `power-heat` | Power, energy, and heating | core | 1 | 11 | — | — |
| `check-energy` | Checkpoint — power held for two hours | checkpoint | 1 | 2 | — | d1c2 |
| `video-grid` | Visual — one grid, no storage in the wires | visual | 1 | 11 | V01 | — |
| `apply` | The plant numbers, kept in their units | application | 2 | 4 | — | — |
| `exercise` | Exercise — six units, three hours | exercise | 2 | 5 | — | d1e1 |
| `quiz` | Knowledge check | quiz | 1 | 10 | — | — |

Knowledge-check ids (scored together at the end): `d1q1`, `d1q2`, `d1q3`, `d1q4`, `d1q5`, `d1q6`, `d1q7`, `d1q8`, `d1q9`, `d1q10`, `d1q11`.

## Day 2 — The steam cycle a gas-plant PM still has to read (76 min)

The path from a generator to a customer, then how a Rankine plant boils water, makes power, and rejects heat, and why Viper Power has no condenser.

Public content: `content/week-01/day2.ts`. Lesson id `w1d2`.

### Objectives

- Trace electricity from the generator through the step-up transformer to the customer, and name the device that holds shaft speed.
- Sketch a Rankine loop and say where heat enters and where heat is thrown away.
- Separate the fuel fire in a coal plant from fission in a nuclear plant, and keep the steam turbine in both.
- Explain why a condenser or cooling failure is a megawatt failure, and keep national capacity factor off the Viper Power sheet.

### Sections

| Section id | Title | Kind | Level | Minutes | Videos | Checks |
| --- | --- | --- | ---: | ---: | --- | --- |
| `intro` | A boiler on a gas-turbine outage | intro | 1 | 5 | — | — |
| `path` | From the shaft to the customer | core | 1 | 6 | — | — |
| `video-home` | Visual — the transformer and the line | visual | 1 | 8 | V02 | — |
| `rankine` | The Rankine loop | core | 1 | 11 | — | — |
| `video-coal` | Visual — coal plant, fuel and water | visual | 1 | 8 | V03 | — |
| `video-nuclear` | Visual — fission in place of the fire | visual | 1 | 5 | V04 | — |
| `video-steam` | Visual — four steps, including the condenser | visual | 1 | 3 | V05 | — |
| `check-loop` | Checkpoint — heat in, heat out | checkpoint | 1 | 4 | — | d2c1, d2c2 |
| `apply` | What stays off this outage | application | 2 | 8 | — | — |
| `exercise` | Exercise — sketch the loop, then cross it off this plant | exercise | 2 | 8 | — | — |
| `quiz` | Knowledge check | quiz | 1 | 10 | — | — |

Knowledge-check ids (scored together at the end): `d2q1`, `d2q2`, `d2q3`, `d2q4`, `d2q5`, `d2q6`, `d2q7`, `d2q8`, `d2q9`, `d2q10`, `d2q11`.

## Day 3 — Gas turbines, combined cycle, and useful heat (66 min)

How a simple-cycle gas turbine differs from combined cycle and from combined heat and power, and where Viper Power sits.

Public content: `content/week-01/day3.ts`. Lesson id `w1d3`.

### Objectives

- Name the Brayton path: compressor, combustor, turbine, and a hot stack.
- Explain what a heat-recovery steam generator adds, and which megawatts depend on it.
- Describe combined heat and power as electricity plus useful heat, with the efficiency comparison kept general.
- Place Viper Power in the simple-cycle row and say the capacity basis out loud.

### Sections

| Section id | Title | Kind | Level | Minutes | Videos | Checks |
| --- | --- | --- | ---: | ---: | --- | --- |
| `intro` | A boiler drawn on the exhaust | intro | 1 | 5 | — | — |
| `brayton` | Simple cycle: the Brayton path | core | 1 | 8 | — | — |
| `video-gt` | Visual — the gas path, then the recovered heat | visual | 1 | 6 | V06, V07 | — |
| `check-path` | Checkpoint — simple cycle or recovered heat | checkpoint | 1 | 4 | — | d3c1, d3c2 |
| `chp` | Useful heat, and the engine row | core | 1 | 8 | — | — |
| `video-chp` | Visual — heat used on purpose | visual | 1 | 6 | V08, V09 | — |
| `apply` | What this plant actually is | application | 2 | 8 | — | — |
| `exercise` | Exercise — four rows, no invented start times | exercise | 2 | 10 | — | — |
| `quiz` | Knowledge check | quiz | 1 | 11 | — | — |

Knowledge-check ids (scored together at the end): `d3q1`, `d3q2`, `d3q3`, `d3q4`, `d3q5`, `d3q6`, `d3q7`, `d3q8`, `d3q9`, `d3q10`.

## Day 4 — Hydro, wind, solar, storage, and the peaker's year (70 min)

What capacity factor measures, why a peaker's number is low, and how hydro, wind, solar, and batteries fit the day.

Public content: `content/week-01/day4.ts`. Lesson id `w1d4`.

### Objectives

- Separate hydro, wind, solar, and batteries by energy path and by what each cannot do.
- Define baseload, intermediate, peaker, dispatchable, and inverter-based resource.
- Compute a capacity factor and read the national gas-turbine and combined-cycle figures, including which July is which.
- Write a memo that keeps those national figures off the Viper Power name.

### Sections

| Section id | Title | Kind | Level | Minutes | Videos | Checks |
| --- | --- | --- | ---: | ---: | --- | --- |
| `intro` | A low capacity factor is not a retirement | intro | 1 | 5 | — | — |
| `resources` | Four resources, and the words that sort them | core | 1 | 10 | — | — |
| `video-water` | Visual — water and wind | visual | 1 | 9 | V10, V11 | — |
| `check-resources` | Checkpoint — two projects that are not this plant | checkpoint | 1 | 4 | — | d4c1, d4c2 |
| `video-quiet` | Visual — sun and batteries | visual | 1 | 8 | V12, V13 | — |
| `cf` | Capacity factor, with the year and the month separated | core | 1 | 8 | — | — |
| `apply` | What belongs in the memo | application | 2 | 7 | — | — |
| `exercise` | Exercise — a practice capacity factor | exercise | 2 | 8 | — | d4e1 |
| `quiz` | Knowledge check | quiz | 1 | 11 | — | — |

Knowledge-check ids (scored together at the end): `d4q1`, `d4q2`, `d4q3`, `d4q4`, `d4q5`, `d4q6`, `d4q7`, `d4q8`, `d4q9`, `d4q10`.

## Day 5 — Viper Power on one page, and the week in review (61 min)

Viper Power on one page: the machines, the voltages, the capacity bases, and who speaks to ERCOT.

Public content: `content/week-01/day5.ts`. Lesson id `w1d5`.

### Objectives

- State the plant's unit count, fuel, cycle, and the three capacity bases without mixing them.
- Trace 13.8 kV through three step-up transformers to the 138 kV yard, and name the open confirmation items.
- Define the qualified scheduling entity and say who oversees the ERCOT market.
- Score the week's scenarios: power versus energy, the two cycles, heat recovery, peakers, and this plant.

### Sections

| Section id | Title | Kind | Level | Minutes | Videos | Checks |
| --- | --- | --- | ---: | ---: | --- | --- |
| `intro` | One page for the plant | intro | 1 | 5 | — | — |
| `plant` | The page you can defend | core | 1 | 12 | — | — |
| `check-bases` | Checkpoint — which megawatt | checkpoint | 2 | 4 | — | d5c1 |
| `video-ercot` | Visual — the operator that does not own the plants | visual | 1 | 4 | V14 | — |
| `market` | Who calls, and who oversees the market | application | 2 | 6 | — | — |
| `exercise` | Exercise — how far apart the two approximates are | exercise | 2 | 8 | — | d5e1 |
| `review` | Week review — the meeting, said once | review | 1 | 10 | — | — |
| `quiz` | Knowledge check | quiz | 1 | 12 | — | — |

Knowledge-check ids (scored together at the end): `d5q1`, `d5q2`, `d5q3`, `d5q4`, `d5q5`, `d5q6`, `d5q7`, `d5q8`, `d5q9`, `d5q10`, `d5q11`, `d5q12`.

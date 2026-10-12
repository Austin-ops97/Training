# Week 1 assessments

Correct choices and explanations live in `content/week-01/answer-key.ts`. The lesson pages ship the prompts and choices only. `POST /api/quiz/grade` returns the explanation after the student submits. This file is the auditor copy.

## w1d1 — Day 1

### d1e1 — numeric exercise

Using the exercise inputs only (not a plant nameplate): six units, each at 59 MW, for 3 hours. How many MWh is that?

- Unit: MWh
- Expected: 1062
- Tolerance: 0
- Worked explanation: 6 × 59 MW = 354 MW. 354 MW × 3 h = 1,062 MWh. The 59 MW figure is the exercise input from the course outline. Inventory discrepancy D11 records about 65 MW ISO per unit and about 330 MW net at 95°F. Do not report 1,062 MWh as a measured plant total.

### d1c1 — checkpoint, level 1

A unit is producing 50 MW and holds that output for 2 hours. How much energy did it deliver?

0. 100 MWh **(correct)**
1. 50 MW
2. 25 MWh
3. 50 kV

Explanation: 50 MW held for 2 hours is 50 × 2 = 100 MWh. The power is still 50 MW.

### d1c2 — checkpoint, level 1

Why can a transformer change voltage on an AC grid and not on a steady DC circuit?

0. DC is illegal on transmission lines.
1. Transformers store megawatt-hours and release them as voltage.
2. A transformer needs a changing current so the magnetic field in one coil can induce voltage in the other. **(correct)**
3. Frequency and voltage are the same quantity.

Explanation: A transformer needs a changing magnetic field. Steady direct current does not keep inducing voltage in the second coil. Crash Course states this, and it is why the grid is alternating current.

### d1c3 — checkpoint, level 2

Which statement about the 59 MW exercise input is the one a project manager should repeat?

0. It is the plant's total net output at any temperature.
1. It is the generator voltage.
2. It is a PUCT fine.
3. It is the given for this arithmetic. It is not a confirmed Viper Power nameplate, and other documents use different bases. **(correct)**

Explanation: Say the basis. 59 MW is the given in today's problem. D11's documented approximates are about 65 MW ISO per unit and about 330 MW net at 95°F.

### d1q1 — knowledge check, level 1

What is the difference between MW and MWh?

0. MW is energy and MWh is voltage.
1. They are two names for the same unit.
2. MWh is always MW divided by 1,000.
3. MW is power at an instant. MWh is energy: that power held over hours. **(correct)**

Explanation: Power is the rate (MW). Energy is the rate times time (MWh).

### d1q2 — knowledge check, level 1

Why must grid supply equal demand every second?

0. Transformers only work for one second at a time.
1. The grid stores almost no electrical energy. An imbalance shows up immediately as a change in frequency. **(correct)**
2. Customers sign a contract that fixes the frequency once per day.
3. Coal piles and gas pipelines act as electrical batteries.

Explanation: Practical Engineering and EIA both teach that production and use happen together. There is no large electrical storage in the wires, so a mismatch moves frequency immediately.

### d1q3 — knowledge check, level 1

On the North American grids in these lessons, what does 60 Hz mean?

0. The plant heat rate is 60.
1. Transmission voltage is 60 kV.
2. Alternating current reverses direction 60 times each second. **(correct)**
3. Sixty generators must be online.

Explanation: 60 Hz means 60 reversals each second. Both Day 1 videos state the North American figure.

### d1q4 — knowledge check, level 1

What does a step-up transformer do for a power line?

0. It converts alternating current to direct current.
1. It stores the day's energy.
2. It sets the grid frequency to 50 Hz.
3. It raises voltage so the same power can move at lower current, which cuts heating loss in the line. **(correct)**

Explanation: Higher voltage means lower current for the same power. Heating loss follows current squared, so raising voltage cuts line loss. The transformer does not store the energy and it does not set the frequency.

### d1q5 — knowledge check, level 1

Six units at 59 MW each, for 3 hours, deliver how much energy?

0. 177 MWh
1. 1,062 MWh **(correct)**
2. 1,062 MW
3. 10,620 MWh

Explanation: 6 × 59 = 354 MW. 354 × 3 h = 1,062 MWh. The unit of the answer is energy, not power.

### d1q6 — knowledge check, level 2

How should you treat the 59 MW figure in that problem?

0. As the measured net output of the whole plant.
1. As the export voltage.
2. As the exercise input. Inventory notes record other capacity bases, so do not call 59 MW the confirmed nameplate. **(correct)**
3. As a NERC setpoint that operators must hold.

Explanation: The inventory does not quote 59 MW. D11 quotes about 65 MW ISO per unit and about 330 MW net at 95°F. Keep 59 MW labeled as the exercise input.

### d1q7 — knowledge check, level 1

How does EIA describe the major grid interconnections in the Lower 48 states?

0. One national synchronous grid.
1. A separate grid in every county.
2. Only ERCOT and a single FERC grid.
3. Three: the Eastern Interconnection, the Western Interconnection, and ERCOT, which covers most of Texas. **(correct)**

Explanation: EIA's delivery page names the Eastern Interconnection, the Western Interconnection, and ERCOT, which covers most of Texas.

### d1q8 — knowledge check, level 2

What does EIA say is unique about ERCOT as an organization and a physical system?

0. ERCOT is the only system that uses alternating current.
1. The balancing authority, the interconnection, and the regional transmission organization are the same entity. **(correct)**
2. ERCOT owns every generator and every wire in Texas.
3. ERCOT does not have to balance supply and demand.

Explanation: EIA says ERCOT is unique because the balancing authority, the interconnection, and the regional transmission organization are the same entity and the same physical system. ERCOT does not own every generator. The Day 5 video says it does not own the assets.

### d1q9 — knowledge check, level 1

What is a prime mover?

0. The step-up transformer.
1. The company that schedules the plant in the market.
2. The machine that spins the generator. A solar photovoltaic plant does not have one. **(correct)**
3. The distribution feeder to a neighborhood.

Explanation: The prime mover spins the generator. EIA notes that photovoltaic plants do not use a turbine.

### d1q10 — knowledge check, level 1

If demand rises and generation does not follow, what happens to frequency?

0. Frequency rises, because transformers speed up.
1. Frequency becomes direct current.
2. Frequency stays at 60 Hz until the next business day.
3. Frequency falls. Something must add generation or reduce load. **(correct)**

Explanation: If load exceeds generation, the rotating machines slow and frequency falls until generation is added or load is removed.

### d1q11 — knowledge check, level 2

For the same power on a line, doubling the voltage does what to heating loss, if resistance stays the same?

0. Loss doubles.
1. Current is cut in half, and loss, which follows current squared, falls to one quarter. **(correct)**
2. Loss does not change, because only frequency matters.
3. The line starts storing megawatt-hours.

Explanation: Current = power / voltage. Double voltage, half current. Loss follows current squared, so loss falls to one quarter. Crash Course states that relationship. Do not memorize the video's example voltages as plant ratings.

### d1q12 — knowledge check, level 2

A block of generation holds 354 MW for one hour. What energy did it deliver?

0. 354 MW
1. 354 kV
2. 354 MWh **(correct)**
3. 21,240 MWh

Explanation: 354 MW for one hour is 354 MWh. Multiplying by 60 would invent a minutes error.

## w1d2 — Day 2

No numeric exercise. The exercise section is a sketch or table the student marks complete.

### d2c1 — checkpoint, level 1

In the Rankine loop, where does the heat that the cycle cannot turn into electricity leave?

0. In the generator stator, as the main energy product.
1. In the step-up transformer.
2. In the condenser, into cooling water or a cooling tower. **(correct)**
3. It does not leave. The cycle is 100 percent efficient.

Explanation: The condenser rejects the heat the cycle does not turn into work. The generator delivers electricity. It is not the heat sink for the steam.

### d2c2 — checkpoint, level 1

On a pressurized-water nuclear plant, what replaces the coal fire?

0. The generator burns uranium directly.
1. The cooling tower is the heat source.
2. Photovoltaic panels on the containment building.
3. Heat from fission in the reactor. A separate circuit boils the turbine steam. **(correct)**

Explanation: The ENGIE clip says fission, not a flame, makes the heat, and that on those pressurized-water units the reactor water and the turbine steam are separate circuits.

### d2q1 — knowledge check, level 1

What thermodynamic cycle does a steam plant use?

0. Brayton
1. Rankine **(correct)**
2. Otto
3. A cycle with no heat rejection

Explanation: Steam plants use the Rankine cycle. Gas turbines use Brayton. That split is the Friday question.

### d2q2 — knowledge check, level 1

Which sequence is the Rankine loop?

0. Compressor, combustor, gas turbine, stack, with no boiler.
1. Solar cell, inverter, battery, only.
2. Heat in at the boiler or reactor, expand in the steam turbine, reject heat in the condenser, pump the liquid back. **(correct)**
3. Condenser first, then the boiler, with no turbine.

Explanation: Heat in, expand, reject heat, pump the liquid back. The condenser is the rejection step.

### d2q3 — knowledge check, level 1

What do a coal plant and a pressurized-water nuclear plant share?

0. They both burn pulverized coal in the reactor vessel.
1. Neither one uses a condenser.
2. Both are simple-cycle gas turbines.
3. A steam turbine driving a generator. The heat source is what changes. **(correct)**

Explanation: Both can drive a steam turbine and a generator. The nuclear clip's first point is that the heat source is the difference.

### d2q4 — knowledge check, level 1

What does the condenser do?

0. It raises generator voltage to transmission voltage.
1. It turns exhaust steam back into water and rejects heat the cycle did not convert. **(correct)**
2. It pulverizes coal.
3. It is optional. The steam can be vented and the water replaced for free with no consequence.

Explanation: Exhaust steam must become water again so the cycle can continue, and the rejected heat has to go somewhere. That is the condenser's job.

### d2q5 — knowledge check, level 1

Why does the coal-plant video say you cannot put raw lake or city water straight into a high-pressure boiler?

0. Water cannot be pumped.
1. Boilers only run on steam from a river, never on treated water.
2. Untreated water causes corrosion and deposits. It has to be filtered and deaerated before it is boiler feedwater. **(correct)**
3. The PUCT bans deaerator vessels.

Explanation: The saVRee narration says untreated water causes corrosion and deposits, so makeup water is treated and deaerated before it is boiler feedwater.

### d2q6 — knowledge check, level 2

What is the project-manager point of a condenser or cooling-tower outage on a steam plant?

0. Only the paint on the tower is affected.
1. The gas-turbine combustor trips, because every plant has one.
2. Frequency rises because less heat is rejected.
3. The cycle stops rejecting heat, so the plant cannot keep making steam power. It is a production problem, not a cosmetic one. **(correct)**

Explanation: If the plant cannot reject heat, it cannot keep the Rankine cycle in service. Cooling work is megawatt work.

### d2q7 — knowledge check, level 1

What did EIA Table 6.07.B report as the US utility-scale nuclear capacity factor for annual 2025?

0. 14.1 percent, which is the gas-turbine figure from a different table.
1. 91.0 percent, and the table marks 2025 as preliminary. **(correct)**
2. 35.3 percent, which is the hydro figure from the same table.
3. The table does not report nuclear.

Explanation: Table 6.07.B annual 2025 nuclear capacity factor is 0.910, and the sheet marks 2025 as preliminary. 0.910 is 91.0 percent. 14.1 percent is the gas-turbine figure on Table 6.07.A. 35.3 percent is hydro on 6.07.B.

### d2q8 — knowledge check, level 2

How should you use that 91.0 percent figure?

0. As Viper Power's capacity factor.
1. As the efficiency of a Rankine cycle.
2. As a national annual statistic for utility-scale nuclear, preliminary for 2025. It is not a Viper Power number and not an ERCOT-only number. **(correct)**
3. As a setpoint the operator holds every hour.

Explanation: Quote the table, the year, and the word preliminary. It is a national utility-scale statistic, not Viper Power and not an efficiency.

### d2q9 — knowledge check, level 1

The short steam-turbine video lists four steps. What is the last of the four?

0. Step the voltage up to 138 kV.
1. Start a reciprocating engine.
2. Shed load at ERCOT.
3. Cool the exhaust steam back to liquid so it can be pumped to the boiler again. **(correct)**

Explanation: Enerdynamics' fourth step is cooling the exhaust steam so it can be pumped back to the boiler.

### d2q10 — knowledge check, level 2

Which sentence is true of Viper Power?

0. It has a coal boiler and a cooling tower as its prime mover.
1. It is not a Rankine plant. The steam equipment in today's videos is industry context, not Viper Power scope. **(correct)**
2. It is a pressurized-water reactor.
3. SOP 029 describes it as a combined-cycle steam plant.

Explanation: C01.1.1 describes gas turbines on natural gas. Today's steam equipment is comparison material.

### d2q11 — knowledge check, level 3

The nuclear video describes three water circuits on those Belgian pressurized-water units. What is the safe lesson to take, without memorizing their temperatures?

0. All three circuits are the same water, boiled inside the reactor and sent to the cooling tower.
1. The tertiary circuit is the fuel.
2. Reactor cooling water and turbine steam are separate. Heat crosses a steam generator. A third circuit cools the condenser. **(correct)**
3. Those temperatures and the 1.3 second rod time are universal setpoints for every plant, including gas turbines.

Explanation: Take the separation of circuits. Leave the Belgian temperatures and the 1.3 second figure on those units. Boiling-water reactors are a different arrangement.

## w1d3 — Day 3

No numeric exercise. The exercise section is a sketch or table the student marks complete.

### d3c1 — checkpoint, level 1

Which three sections does the GE Vernova clip put in the gas path before the generator?

0. Boiler, condenser, cooling tower.
1. Reactor, steam generator, cooling tower.
2. Inverter, battery, solar cell.
3. Compressor, combustor, turbine. **(correct)**

Explanation: GE Vernova's clip: compressor, then combustor, then turbine, then the generator.

### d3c2 — checkpoint, level 1

What does the DTE clip say the heat-recovery steam generator does?

0. It replaces the generator.
1. It captures gas-turbine exhaust heat and makes steam for a steam turbine, without burning more fuel for that steam. **(correct)**
2. It is the coal pulverizer.
3. It steps 13.8 kV up to 138 kV.

Explanation: DTE says the HRSG captures exhaust heat that would otherwise leave the stack and makes steam for a steam turbine without additional fuel for that steam.

### d3q1 — knowledge check, level 1

What cycle does a gas turbine use?

0. Rankine
1. The nuclear tertiary circuit
2. Brayton **(correct)**
3. No thermodynamic cycle

Explanation: The gas-turbine cycle is the Brayton cycle. Rankine is the steam cycle.

### d3q2 — knowledge check, level 1

What are the three main gas-path sections of a gas turbine?

0. Condenser, cooling tower, and pulverizer.
1. Day silo, deaerator, and economizer.
2. QSE, TSP, and ERCOT.
3. Compressor, combustor, and turbine. **(correct)**

Explanation: Compressor, combustor, turbine. The generator is driven by the turbine. It is not one of the three gas-path sections.

### d3q3 — knowledge check, level 1

Why can a combined cycle make more electricity from the same fuel than a simple cycle?

0. The gas turbine runs without a compressor.
1. A heat-recovery steam generator turns leftover exhaust heat into steam for a steam turbine. **(correct)**
2. The steam turbine replaces the need for a generator.
3. Combined cycle means two gas turbines on one shaft with no heat recovery.

Explanation: The extra electricity comes from recovered exhaust heat, not from deleting the compressor.

### d3q4 — knowledge check, level 1

How does EPA define combined heat and power?

0. Any plant that sells power into ERCOT.
1. A battery charged by solar panels.
2. A system that produces electricity and useful thermal energy from the same fuel, at high efficiency. **(correct)**
3. Two generators sharing one transformer.

Explanation: EPA: electricity and useful thermal energy from the same fuel, at high efficiency.

### d3q5 — knowledge check, level 2

What efficiency comparison does the EPA CHP page state?

0. Every simple-cycle gas turbine is 80 percent efficient.
1. CHP is less efficient than separate generation because it wastes heat on purpose.
2. The page gives Viper Power's tested heat rate.
3. CHP can exceed 80 percent, compared with about 50 percent for typical separate electricity plus an on-site boiler. **(correct)**

Explanation: EPA states CHP can exceed 80 percent, compared with 50 percent for typical separate generation plus an on-site boiler. That is not a Viper Power test result.

### d3q6 — knowledge check, level 2

Which description matches Viper Power?

0. A 7HA combined-cycle plant like the machine in the DTE video.
1. Simple-cycle gas turbines, pipeline natural gas only. Not a combined cycle and not a coal plant. **(correct)**
2. A Jenbacher engine supplying town heating, with the marketing savings from the INNIO story.
3. Twelve reciprocating engines totaling 220 MW.

Explanation: Simple-cycle, gas only, six frames. The 7HA, the town-heating story, and the 12-engine animation are other plants.

### d3q7 — knowledge check, level 2

The DTE video shows a 7HA and mentions a weight of about 300 tons. What may you do with that figure?

0. Use it as the Viper Power turbine weight in the outage plan.
1. Use it as the GSU weight.
2. Leave it on that utility's combined-cycle machine. Do not copy it onto a Viper Power 7B. **(correct)**
3. Treat it as an ERCOT requirement.

Explanation: The weight belongs to the machine in that video. Do not copy another utility's 7HA data onto these units.

### d3q8 — knowledge check, level 2

What question does a project manager ask before comparing two megawatt numbers?

0. Which relay is the 87?
1. What is the operator's password?
2. How many control rods are inserted?
3. Net or gross, and at what ambient temperature? **(correct)**

Explanation: Net or gross, and at what ambient temperature. Hot air cuts gas-turbine output.

### d3q9 — knowledge check, level 1

In EIA's 2022 US utility-scale generation mix, how did combined-cycle generation compare with single-cycle combustion turbines?

0. They were equal.
1. Combined cycle was about 33.8 percent of generation. Single-cycle combustion turbines were about 3.6 percent. **(correct)**
2. Single-cycle turbines were most of US generation.
3. The page says both were under 1 percent.

Explanation: EIA's generation page, 2022 data: combined cycle about 33.8 percent of utility-scale generation, single-cycle combustion turbines about 3.6 percent. That is a share of generation, not a capacity factor.

### d3q10 — knowledge check, level 2

EPA lists which pair as one common CHP configuration?

0. A solar cell and a cooling tower only.
1. A dam and a pulverizer.
2. A combustion turbine or a reciprocating engine, with a heat-recovery unit. **(correct)**
3. A step-up transformer and a battery only.

Explanation: EPA lists a combustion turbine or reciprocating engine with heat recovery as one of the two common CHP configurations.

### d3q11 — knowledge check, level 2

What is the right project question if a combined-cycle steam side is out of service?

0. The gas turbine cannot run unless the steam turbine is online. That is true of every plant.
1. Outages on the steam side do not affect megawatts.
2. ERCOT will count the steam megawatts anyway.
3. Can the gas turbine still run as a simple cycle, and how many megawatts does that leave? Ask it of that plant's design. Do not assume Viper Power has a steam side. **(correct)**

Explanation: Ask whether that combined-cycle plant can run the gas turbine alone, and at what output. Viper Power has no steam bottoming cycle in the Week 1 description.

## w1d4 — Day 4

### d4e1 — numeric exercise

Hypothetical unit, not Viper Power. Rating 100 MW. It generates 120,000 MWh in a non-leap year of 8,760 hours. What is the capacity factor in percent, to one decimal place?

- Unit: percent
- Expected: 13.7
- Tolerance: 0.05
- Worked explanation: Hypothetical, not Viper Power. Hours in a non-leap year: 365 × 24 = 8,760. Maximum energy = 100 MW × 8,760 h = 876,000 MWh. Capacity factor = 120,000 / 876,000 = 0.136986, which is 13.7 percent to one decimal place.

### d4c1 — checkpoint, level 1

Which resource in today's videos has no turbine?

0. A dam.
1. A solar photovoltaic cell. Electrons move. No shaft does. **(correct)**
2. A wind rotor.
3. A gas turbine.

Explanation: EIA and the solar video: photovoltaic cells have no turbine. Electrons are the moving parts.

### d4c2 — checkpoint, level 2

The Ecotricity clip describes a 10 MW battery in Britain. What may you do with that size?

0. Enter it as Viper Power's battery obligation.
1. Use it as the ISO rating of one 7B.
2. Leave it as that developer's project. Do not use it as an ERCOT or Viper Power rating. **(correct)**
3. Treat it as the EIA gas-turbine capacity factor.

Explanation: The 10 MW and 24 MWh figures are Ecotricity's British project. They are not an ERCOT rating and not a 7B rating.

### d4q1 — knowledge check, level 1

What is capacity factor?

0. The heat rate.
1. The transmission voltage.
2. The number of starts in a day.
3. Actual energy divided by the energy the unit could have made by running at its rated capacity for every hour in the period. **(correct)**

Explanation: Capacity factor = actual MWh / (rated MW × hours in the period). It is not a heat rate and not a voltage.

### d4q2 — knowledge check, level 1

EIA Table 6.07.A, annual 2025, preliminary: what capacity factors did it report for natural-gas combined cycle and for gas turbines?

0. Both about 91 percent.
1. Combined cycle 58.4 percent. Gas turbines 14.1 percent. **(correct)**
2. Gas turbines 58.4 percent and combined cycle 14.1 percent.
3. The table does not include natural gas.

Explanation: Table 6.07.A annual 2025, preliminary: combined cycle 0.584 = 58.4 percent, gas turbines 0.141 = 14.1 percent.

### d4q3 — knowledge check, level 2

Why is a simple-cycle gas turbine's capacity factor low?

0. The laws of physics stop it from running more than a few hours a year.
1. ERCOT forbids gas turbines from running in July.
2. It burns more fuel per megawatt-hour than a combined cycle, so it is dispatched when power is scarce or high-priced, not around the clock. **(correct)**
3. A low capacity factor means the machine is broken.

Explanation: Higher fuel use per megawatt-hour means the unit is in the money in fewer hours. Physics does not cap it at a few hours, and a low factor is not proof the unit is broken.

### d4q4 — knowledge check, level 2

What did the same EIA workbook show for gas-turbine capacity factor in July 2026?

0. 91 percent.
1. Zero. Gas turbines do not run in July.
2. The sheet has no 2026 months.
3. 24.9 percent, preliminary, higher than the 2025 annual 14.1 percent. Summer is busier. It is still not a baseload figure. **(correct)**

Explanation: July 2026 gas-turbine capacity factor on the same sheet is 0.249 = 24.9 percent, preliminary. Summer runs harder than the annual average and still far below baseload.

### d4q5 — knowledge check, level 2

What are those EIA capacity factors not?

0. They are Viper Power's guaranteed contract quantity.
1. They are not Viper Power's capacity factor and they are not an ERCOT-only statistic. **(correct)**
2. They are heat rates.
3. They are relay settings.

Explanation: National utility-scale fossil statistics. Not this plant, and not ERCOT-only.

### d4q6 — knowledge check, level 1

How does a solar photovoltaic plant make electricity?

0. It boils water in a Rankine loop only.
1. It is a gas turbine with a different fuel.
2. Light frees electrons in a semiconductor cell. There is no turbine and no output at night. **(correct)**
3. It stores grid frequency in the panel.

Explanation: A photon frees an electron in the cell. There is no shaft, and there is no output at night.

### d4q7 — knowledge check, level 1

What limit does the wind video state for how much of the wind's energy a turbine can capture?

0. 100 percent, if the blades are large enough.
1. 15 to 20 percent, which is a solar-cell figure from a different video and a different year.
2. The grid frequency, 60 Hz.
3. Betz's limit, 59.3 percent. Some wind has to keep moving past the rotor. **(correct)**

Explanation: The wind video states Betz's limit at 59.3 percent. The 15 to 20 percent line is from the solar video and is not a current rating to memorize.

### d4q8 — knowledge check, level 2

What can a grid battery do that a simple-cycle turbine cannot match as quickly?

0. Burn natural gas more efficiently than a combined cycle.
1. Change output faster than a rotating machine, and shift energy from one hour to a later hour. Which ERCOT service it may sell is a question for the QSE. **(correct)**
2. Replace the step-up transformer.
3. Set the Rankine condenser vacuum.

Explanation: The storage video's useful claim is speed and shifting energy in time. It does not say batteries beat a combined cycle on fuel, and this course does not assign an ERCOT ancillary-service award.

### d4q9 — knowledge check, level 2

Hypothetical, not Viper Power: 100 MW running to 120,000 MWh in 8,760 hours. What is the capacity factor?

0. 82.2 percent
1. 1.37 percent
2. 13.7 percent **(correct)**
3. 120 percent

Explanation: 120,000 / (100 × 8,760) = 120,000 / 876,000 = 13.7 percent.

### d4q10 — knowledge check, level 1

How does the hydropower video distinguish dammed hydro from run-of-river?

0. They are the same plant.
1. Run-of-river uses a gas compressor.
2. Only run-of-river can fail catastrophically. Dams cannot.
3. A dam stores water and can release it when power is needed. Run-of-river takes the river's flow and varies with it. **(correct)**

Explanation: Student Energy: a dam can release stored water. Run-of-river follows the river. The same video says dam failure can be catastrophic, so the last option is backwards.

### d4q11 — knowledge check, level 2

A peaker posts a low annual capacity factor. What should a project manager conclude?

0. The plant should be retired because capacity factor is the only measure of value.
1. The valuable hours are few. Missing one of them matters more than the annual average. A low factor is not, by itself, a broken plant. **(correct)**
2. The plant ran every hour of the year.
3. Net and gross are the same number.

Explanation: Value sits in a short list of hours. Annual capacity factor alone does not say the plant failed, and it does not say the plant ran all year.

## w1d5 — Day 5

### d5e1 — numeric exercise

Using the inventory's approximate figures only: 6 times 65 MW, compared with 330 MW. The shortfall as a percent of 6 times 65, to one decimal place.

- Unit: percent
- Expected: 15.4
- Tolerance: 0.05
- Worked explanation: 6 × 65 = 390 MW. 390 − 330 = 60 MW. 60 / 390 = 0.153846, which is 15.4 percent to one decimal. These are inventory approximates on different bases (D11): about 65 MW ISO per unit, and about 330 MW net at 95°F for the plant. 390 MW is not a documented plant nameplate, and 15.4 percent is not a measured test derate.

### d5c1 — checkpoint, level 2

Which pair of capacity figures does inventory discrepancy D11 actually put side by side?

0. 59 MW nameplate and 1,062 MWh as a tested plant total.
1. 220 MW and 12 engines.
2. About 65 MW ISO per unit on the 2024 test, and about 330 MW net at 95°F in SOP 029. A prior-owner figure of about 360 MW is also noted. **(correct)**
3. 10 MW and 24 MWh.

Explanation: D11 puts about 65 MW ISO per unit (2024 test) next to about 330 MW net at 95°F (SOP 029), and also notes a prior-owner figure of about 360 MW. The 59 MW figure is an exercise input. The 220 MW and 10 MW figures belong to other companies' videos.

### d5q1 — knowledge check, level 1

What is the difference between MW and MWh?

0. MW is energy. MWh is voltage.
1. MW is the rate of power at an instant. MWh is energy: power times hours. **(correct)**
2. They differ by a factor of 1,000 volts.
3. MWh is the frequency.

Explanation: MW is instantaneous power. MWh is power times hours.

### d5q2 — knowledge check, level 1

Why must grid supply equal demand every second?

0. Because transformers require a daily energy balance and ignore seconds.
1. Because fuel tanks are the electrical storage.
2. The grid stores almost no electrical energy. An imbalance shows up immediately as a change in frequency. **(correct)**
3. Because ERCOT owns every generator and switches them by hand once a day.

Explanation: Almost no electrical energy is stored in the grid, so imbalance moves frequency immediately.

### d5q3 — knowledge check, level 1

Name the thermodynamic cycle of a gas turbine and of a steam plant.

0. Rankine for both.
1. Brayton for both.
2. Otto for the gas turbine and Diesel for the steam plant.
3. Brayton for the gas turbine. Rankine for the steam plant. **(correct)**

Explanation: Brayton is the gas turbine. Rankine is the steam plant.

### d5q4 — knowledge check, level 1

What makes a combined cycle more efficient than a simple cycle?

0. The compressor is removed.
1. A heat-recovery steam generator uses the gas-turbine exhaust to make steam for a steam turbine. Leftover heat becomes more megawatts from the same fuel. **(correct)**
2. The plant stops rejecting heat in the condenser and also has no stack loss.
3. It uses a higher grid frequency.

Explanation: The HRSG recovers exhaust heat as steam for another turbine. Same fuel, more megawatts. The condenser still rejects heat on the steam side. The gain is the exhaust that a simple cycle would have thrown up the stack.

### d5q5 — knowledge check, level 1

What is combined heat and power?

0. Two generators on one transformer.
1. A battery charged at night.
2. Electricity and useful heat or steam for a host, from one fuel input. **(correct)**
3. ERCOT's name for a peaker.

Explanation: EPA: electricity and useful heat or steam from one fuel input.

### d5q6 — knowledge check, level 2

Why is a peaker's capacity factor low?

0. Because a peaker is not allowed to synchronize.
1. Because capacity factor and heat rate are the same number.
2. Because six units cannot run in the same hour.
3. It costs more fuel per megawatt-hour, so it is dispatched when prices or demand justify that fuel, not in every hour. **(correct)**

Explanation: More fuel per megawatt-hour means fewer hours clear. EIA's national gas-turbine capacity factor is the public picture of that pattern.

### d5q7 — knowledge check, level 2

How do batteries compete with peakers?

0. They burn gas at a lower heat rate than a combined cycle.
1. They can change output faster than a rotating machine and can shift energy into a later hour. Which market product they win is a QSE question, not a number from this week. **(correct)**
2. They replace the need to balance supply and demand.
3. They are Rankine-cycle boilers.

Explanation: Faster than a rotating machine, and able to move energy to a later hour. Do not invent which ERCOT product they win.

### d5q8 — knowledge check, level 1

What voltage does the Viper Power generator nameplate photo record, and what voltage does the switchyard material record?

0. 480 V at the generator and 4,160 V on the transmission line.
1. The Crash Course examples: about 12 kV and about 240 kV.
2. 13.8 kV at the generator. 138 kV at the switchyard. **(correct)**
3. 60 Hz and 59 MW.

Explanation: S105 records 13.8 kV on the CT6 generator nameplate. S136 records 138 kV on the switchyard voltage-transformer sheet. The Crash Course voltages are teaching examples.

### d5q9 — knowledge check, level 1

How many units does Viper Power have, what frame does the inventory tell you to state, and what fuel?

0. Twelve engines, 220 MW, dual fuel.
1. One combined-cycle 7HA.
2. Six coal units.
3. Six GE MS7001B (7B/E) units on pipeline natural gas only. Documents also say 7B and 7E, so the exact hardware is a confirmation item. **(correct)**

Explanation: C01.1.1: six GE MS7001B (7B/E) units, pipeline natural gas only. D12 says 7B, 7E, and 7B/E all appear, so confirm the hardware.

### d5q10 — knowledge check, level 2

Why can a nameplate or ISO megawatt differ from a hot-day net megawatt?

0. Because megawatts and megawatt-hours are the same unit.
1. Hot inlet air is less dense, so mass flow and output fall. Net also subtracts the plant's own auxiliary load. The inventory's 65 MW ISO and 330 MW net at 95°F are different bases. **(correct)**
2. Because the generator voltage changes from 13.8 kV to 60 Hz.
3. ISO and net are required to be identical by the laws of physics.

Explanation: Hot air is less dense, so compressor mass flow falls. Net output also subtracts auxiliaries. D11's two approximates are different bases, not a single nameplate.

### d5q11 — knowledge check, level 2

Who is on the transmission side of Viper Power's interconnection?

0. The QSE owns the 138 kV breakers and switches them alone.
1. FERC switches the yard from Washington.
2. The inventory calls it a transmission service provider interface at 138 kV, with a backfeed procedure in SOP 017. Confirm who performs the switching. The plant one-line is a library gap. **(correct)**
3. The condenser operator.

Explanation: C05.2.4 identifies a transmission service provider interface and SOP 017 covers 138 kV backfeed. The one-line is a documented gap, so switching authority is a confirmation item, not a guess.

### d5q12 — knowledge check, level 1

What is a Qualified Scheduling Entity, in the ERCOT protocol definition reviewed for this lesson?

0. The transmission owner who racks out a breaker.
1. The generator's exciter.
2. A NERC regional entity.
3. A market participant qualified by ERCOT, under Protocol Section 16, to communicate with ERCOT for resource entities and load-serving entities and to settle payments and charges with ERCOT. **(correct)**

Explanation: ERCOT Nodal Protocols, 28 August 2026, Section 2. The QSE page adds bids, offers, the current operating plan, ancillary services, and settlement. The short ERCOT video does not define the term.

### d5q13 — knowledge check, level 2

Why does the inventory's electrical objective say two generators share a three-winding step-up transformer?

0. Because each unit has its own transformer and a GSU outage trips only that unit.
1. GSU1 through GSU3 serve six units. One transformer outage takes two units. The objective states 138/13.8/13.8 kV. The one-line drawing itself is missing from the library. **(correct)**
2. Because the plant exports at 13.8 kV with no transformer.
3. Because CHP requires three windings.

Explanation: C05.2.1: three-winding 138/13.8/13.8 kV GSUs, two generators each, so one transformer outage takes two units. The plant one-line is missing from the library.

### d5q14 — knowledge check, level 2

Which item is a confirmation flag, not a settled Week 1 fact?

0. That MW times hours gives MWh.
1. That a Rankine cycle rejects heat in a condenser.
2. Whether the hardware is 7B, 7E, or 7B/E, and which capacity basis a speaker means. **(correct)**
3. That ERCOT's about page places oversight with the PUCT and the Texas Legislature.

Explanation: Frame designation (D12) and which capacity basis is in use (D11) are confirmation items. The other three statements are taught from EIA, the cycle lessons, or ERCOT's about page.

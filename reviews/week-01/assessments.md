# Week 1 assessments

Correct choices and explanations live in `content/week-01/answer-key.ts`. The lesson pages ship the prompts and choices only. `POST /api/quiz/grade` returns the explanation after the student submits. This file is the auditor copy.

## w1d1 — Day 1

### d1e1 — numeric exercise

Practice numbers, not a plant nameplate: six units, each given as 59 MW, for 3 hours. How many MWh is that? Plant documents use other bases. Day 5 lines those bases up.

- Unit: MWh
- Expected: 1062
- Tolerance: 0
- Worked explanation: 6 × 59 MW = 354 MW. 354 MW × 3 h = 1,062 MWh. The 59 MW figure is the given for this problem, not a plant nameplate. Other plant documents use about 65 MW per unit at standard conditions and about 330 MW net at 95°F. Do not report 1,062 MWh as a measured plant total.

### d1c1 — checkpoint, level 1

A charge of 180 C passes a point in 60 s. What is the current?

0. 10,800 A, because the charge and the time are multiplied together.
1. 0.33 A, because the time is divided by the charge that passed.
2. 3 A, because current is the charge divided by the time. **(correct)**
3. 180 C, because a current keeps the coulomb as its unit.

Explanation: I = Q / t = 180 C / 60 s = 3 A. Current is charge per time, so the coulomb and the second do not get multiplied, and the unit is the ampere.

### d1c2 — checkpoint, level 1

A generator holds 50 MW for 2 hours. How much energy is that?

0. 100 MWh, because 50 MW held for two hours is energy. **(correct)**
1. 25 MWh, because the two hours cut the 50 MW reading in half.
2. 50 MW, because a timed run keeps the power unit on the page.
3. 50 kV, because a two-hour run is reported as electrical pressure.

Explanation: Energy = power × time = 50 MW × 2 h = 100 MWh. The machine is still a 50 MW machine. The two hours change the unit from power to energy.

### d1q1 — knowledge check, level 1

Which statement about electric charge is right?

0. Charge is used up inside a resistor and the generator has to replace it.
1. Charge is the same quantity as current, and both are measured in amperes.
2. Charge flows only on an open path, where the conductor has a break.
3. Charge is conserved, and ordinary amounts come in multiples of the elementary charge. **(correct)**

Explanation: Charge is conserved, so a resistor does not consume it. Ordinary charges come in whole-number multiples of the elementary charge, e = 1.602176634×10⁻¹⁹ C. Current is a different quantity, in amperes, and it flows on a closed path.

### d1q2 — knowledge check, level 1

What are 1 mA and 1 µA?

0. 1 mA is a millionth of an ampere, and 1 µA is a thousandth.
1. 1 mA is one thousandth of an ampere, and 1 µA is one millionth. **(correct)**
2. Both are voltages: one thousand volts and one million volts.
3. 1 mA is one ampere, and 1 µA is one coulomb of charge.

Explanation: The milli prefix is 10⁻³, so 1 mA = 0.001 A. The micro prefix is 10⁻⁶, so 1 µA = 0.000001 A. Neither one is a volt or a coulomb.

### d1q3 — knowledge check, level 1

What is potential difference, and what measures it?

0. Work per unit charge, in volts, and a voltmeter measures it. **(correct)**
1. Charge per unit time, in amperes, and an ammeter measures it.
2. Resistance per unit length, in ohm-metres, from the material alone.
3. Heat per unit time, in joules, and a fuse measures that heat.

Explanation: V = W / Q. One volt is one joule per coulomb. A voltmeter reads that difference and is connected in parallel. An ammeter reads current and is connected in series.

### d1q4 — knowledge check, level 1

What is the difference between a closed circuit and an open circuit?

0. A closed circuit stores the day's energy, and an open circuit releases it.
1. A closed circuit is direct current, and an open circuit is alternating current.
2. A closed circuit is a continuous path. An open circuit is a broken path. **(correct)**
3. A closed circuit has zero resistance, and an open circuit has zero voltage.

Explanation: A closed circuit is one continuous conducting path, so current can flow. An open circuit has a break, so the current stops. A switch or an open breaker is that break, made on purpose.

### d1q5 — knowledge check, level 1

A resistor has 12 V across it and a resistance of 4 Ω. What is the current?

0. 48 A, because the voltage and the resistance are multiplied.
1. 0.33 A, because the resistance is divided by the voltage.
2. 12 Ω, because the current keeps the resistance as its unit.
3. 3 A, from voltage divided by resistance, with conditions steady. **(correct)**

Explanation: Ohm's law at steady conditions: I = V / R = 12 V / 4 Ω = 3 A. Multiplying 12 by 4 gives 48, which is not the current. The ohm is the unit of resistance, not of current.

### d1q6 — knowledge check, level 1

Resistors of 2 Ω, 3 Ω, and 7 Ω are connected in series. What is the equivalent resistance?

0. About 1 Ω, because series resistors use the parallel formula.
1. 12 Ω, because series resistances add to one equivalent. **(correct)**
2. 42 Ω, because the three resistances are multiplied together.
3. 2 Ω, because only the first resistor carries the current.

Explanation: Series resistances add: R = 2 Ω + 3 Ω + 7 Ω = 12 Ω. The same current passes through each resistor. The parallel formula is for a different connection.

### d1q7 — knowledge check, level 1

What stays the same for resistors connected in parallel?

0. The current is the same in every branch, and the voltages add.
1. Each branch resistance falls to zero when the others are connected.
2. Voltage is the same across each branch, and the branch currents add. **(correct)**
3. Each branch takes the same power, whatever its resistance is.

Explanation: Parallel branches share the same two points, so the voltage across each branch is the same. The branch currents add to the total current. Series is the connection where the current is common and the voltages add.

### d1q8 — knowledge check, level 2

From R = ρL/A, what raises resistance if the other factors stay the same?

0. A longer conductor, a smaller cross-section, or a higher resistivity. **(correct)**
1. A shorter conductor, a larger cross-section, or a lower resistivity.
2. A higher voltage by itself, with length and area left unchanged.
3. A lower temperature in a typical metal, which raises its resistance.

Explanation: R = ρ L / A. Increasing L, decreasing A, or increasing ρ each increases R when the others are held fixed. For a typical metal, a lower temperature lowers resistance rather than raising it.

### d1q9 — knowledge check, level 1

How many joules are in 1 kWh?

0. 3.6×10³ J, because the hour is left out of the conversion.
1. 3.6×10⁶ J, because a kilowatt for one hour is that many joules. **(correct)**
2. 1,000 J, because the kilo prefix is the only factor used.
3. 3.6×10⁶ W, because the converted result is still a power.

Explanation: 1 kWh = 1,000 W × 3,600 s = 3,600,000 J = 3.6×10⁶ J. The result is energy, in joules, not power in watts. Dropping the 3,600 s would leave 3.6×10³ J, which is only one kilowatt for one second.

### d1q10 — knowledge check, level 2

The same power is sent down a line, and the voltage is doubled. Heating follows I²R. What happens to that heating?

0. The current doubles, so heating in the line resistance quadruples.
1. The current is unchanged, so the heating in the line stays put.
2. The current is halved, so the heating falls only to one half.
3. The current is halved, so the heating falls to one quarter. **(correct)**

Explanation: For the same power, current = power / voltage. Double the voltage and the current is halved. Heating follows current squared, so (1/2)² = 1/4. The line heating falls to one quarter if the resistance is unchanged.

### d1q11 — knowledge check, level 1

What does 60 Hz mean on the grids in this lesson?

0. Alternating current reverses direction 60 times each second. **(correct)**
1. Transmission voltage is 60 kV on the lines used in this lesson.
2. The heat rate of these grids is 60, which is why they use that label.
3. Direct current pulses 60 times a second, and a transformer steps it up.

Explanation: 60 Hz means the alternating current reverses direction 60 times each second. It is not a voltage, a heat rate, or a description of direct current.

### d1q12 — knowledge check, level 2

On a synchronous generator, which device holds shaft speed, and which holds voltage?

0. The exciter adds fuel to raise frequency, and the governor changes field current.
1. Both devices move a transformer tap, and neither one touches fuel or field current.
2. The governor changes fuel to hold shaft speed, and the exciter holds voltage. **(correct)**
3. The step-up transformer holds both frequency and voltage once the unit is online.

Explanation: The governor changes fuel to hold shaft speed, and shaft speed is locked to frequency. The exciter changes field current to hold voltage. The step-up transformer changes voltage between windings. It does not hold both quantities by itself.

## w1d2 — Day 2

No numeric exercise. The exercise section is a sketch or table the student marks complete.

### d2c1 — checkpoint, level 1

The boiler is healthy and the plant still cannot make power. Which failure fits a Rankine unit?

0. The step-up transformer, because that winding is where the feedwater is boiled.
1. The condenser. If it cannot reject heat, the cycle cannot keep turning. **(correct)**
2. The gas compressor, because every Rankine plant starts by compressing pipeline gas.
3. The inverter, because a steam plant connects as an inverter-based resource.

Explanation: The condenser rejects the heat the cycle cannot turn into work. If it cannot do that, the Rankine loop stops even when the boiler is healthy.

### d2c2 — checkpoint, level 1

The nuclear clip is about specific pressurized-water units. What is the lesson that travels, and what stays on those units?

0. Every reactor boils water in the vessel and sends that same water to the tower.
1. The temperatures and the rod time in the clip are setpoints for a gas turbine too.
2. A nuclear plant has no condenser, because fission feeds the grid from the vessel.
3. Fission replaces the flame. On those units, reactor water and turbine steam stay apart. **(correct)**

Explanation: Fission replaces the flame. On the pressurized-water units in the film, reactor water and turbine steam stay apart, and a third circuit cools the condenser. The temperatures and the rod time belong to those units.

### d2q1 — knowledge check, level 1

What cycle is a coal plant or a nuclear steam plant running?

0. Rankine: boil a liquid, expand the vapor, condense it, and pump it back. **(correct)**
1. Brayton, because every turbine compresses air before it produces steam.
2. A battery cycle, because the condenser stores the day's energy for later.
3. Combined heat and power, because every condenser sells its steam to a neighbor.

Explanation: Rankine is boil, expand, condense, and pump. Brayton is the gas-turbine cycle from tomorrow.

### d2q2 — knowledge check, level 1

Where does heat enter a Rankine cycle, and where does the leftover heat leave?

0. Heat in at the generator, and heat out at the fuel pile beside the boiler.
1. Heat in at the pump, and heat out when the boiler fires the returning water.
2. Heat in at the boiler or the steam generator, and heat out at the condenser. **(correct)**
3. Heat in at the condenser, and heat out through the turbine blades to the shaft.

Explanation: Heat enters at the boiler or at a nuclear steam generator. The condenser throws the leftover heat away. The pump only returns liquid water.

### d2q3 — knowledge check, level 1

A coal plant and a pressurized-water nuclear plant sit on the same drawing. What is shared, and what is not?

0. Both burn coal in a boiler. The reactor only changes which cooling tower is used.
1. Coal uses a gas turbine, and the nuclear unit uses a battery in place of a shaft.
2. The nuclear unit skips the generator and feeds the grid straight from the vessel.
3. Both end as a steam turbine driving a generator. The heat source is not the same. **(correct)**

Explanation: Both plants end as a steam turbine driving a generator. The heat source is a fire in one case and fission in the other.

### d2q4 — knowledge check, level 1

What is the condenser's job?

0. It burns the fuel a second time so the steam temperature can rise on the next pass.
1. It turns exhaust steam back into water so the pump can send it around again. **(correct)**
2. It steps the generator voltage up to the transmission voltage in the yard.
3. It stores megawatt-hours overnight and releases them at the morning peak.

Explanation: The condenser turns exhaust steam back into water so the pump can send it around again.

### d2q5 — knowledge check, level 2

Why does a boiler plant treat the water before it becomes steam?

0. Untreated water would move the grid frequency off the 60 Hz target.
1. Treatment is the step that raises the plant's transmission voltage.
2. Raw water leads to corrosion and deposits inside a high-pressure boiler. **(correct)**
3. The treatment plant is the prime mover that spins the electrical generator.

Explanation: Raw water in a high-pressure boiler leads to corrosion and deposits. Treatment is there to protect the metal.

### d2q6 — knowledge check, level 2

A cooling tower is described as only a heat dump. What is the consequence on a steam plant?

0. If the plant cannot reject heat, it cannot keep making steam power. **(correct)**
1. Cooling can wait. The turbine keeps its megawatts with the condenser valved out.
2. A cooling failure changes water chemistry only, and electrical output stays put.
3. The tower is optional equipment, installed so the yard looks finished.

Explanation: If the plant cannot reject heat, it cannot keep making steam power. A cooling-tower outage on a Rankine unit is a megawatt outage.

### d2q7 — knowledge check, level 2

The 2025 national nuclear capacity factor is quoted as if it were an efficiency. What is it?

0. 91.0 percent is the efficiency of every steam turbine, including a gas peaker.
1. 91.0 percent, preliminary, is a national capacity factor, not this plant's efficiency. **(correct)**
2. 35.3 percent is the nuclear figure, and 91.0 percent is the hydro fleet.
3. The figure is Viper Power's own tested efficiency on a 95°F summer afternoon.

Explanation: The national 2025 nuclear capacity factor is 0.910, which is 91.0 percent, and it is marked preliminary. Hydro on the same sheet is 35.3 percent. Neither figure is an efficiency, and neither is Viper Power.

### d2q8 — knowledge check, level 2

The 2025 nuclear and hydro capacity factors in today's sources are marked preliminary. What does that word change?

0. Preliminary means the figure is a performance guarantee you can put on this plant.
1. Preliminary means the fleet ran at full rating and the table rounded down.
2. A later workbook can revise a preliminary figure. It is still not an efficiency. **(correct)**
3. Preliminary capacity factor and heat-rate efficiency are the same measurement.

Explanation: Preliminary means a later workbook can revise the figure. It does not turn a national capacity factor into this plant's efficiency.

### d2q9 — knowledge check, level 1

Put the steam path in order. What is the last step before water returns to be heated?

0. Cool the exhaust steam back into liquid water before the pump takes it. **(correct)**
1. Send the steam out onto the transmission line and call that electrical energy.
2. Burn the condensed water in the combustor with the pipeline gas.
3. Invert the steam into direct current before it reaches the pump.

Explanation: The last step before the pump is to cool the exhaust steam back into liquid water.

### d2q10 — knowledge check, level 2

Boiler and cooling-tower scope is proposed for the Viper Power outage. What belongs in the reply?

0. Approve it. Every gas turbine in simple cycle has a Rankine condenser.
1. Approve the cooling tower and drop the boiler. The stack condenses the steam.
2. Move the scope onto the heat-recovery boiler this plant uses after dark.
3. Viper Power is not a Rankine plant, so that boiler scope does not belong. **(correct)**

Explanation: Viper Power's Week 1 description is gas turbines on pipeline gas. It is not a Rankine plant, so boiler and cooling-tower scope does not belong on this outage unless a current plant document adds it.

## w1d3 — Day 3

No numeric exercise. The exercise section is a sketch or table the student marks complete.

### d3c1 — checkpoint, level 1

Put a simple-cycle gas turbine's gas path in order.

0. Compressor, combustor, turbine. The exhaust then leaves hot. **(correct)**
1. Condenser, boiler, cooling tower. The air is compressed after that.
2. Steam turbine, pump, condenser. The compressor is an optional extra.
3. Inverter, battery, solar field. The combustor stores the leftover heat.

Explanation: Compressor, combustor, turbine, then a hot stack. That is the simple-cycle gas path.

### d3c2 — checkpoint, level 1

A combined-cycle plant makes extra megawatts from the gas-turbine exhaust. Where does that extra energy come from?

0. A second gas compressor burns another fuel stream to make those extra megawatts.
1. The stack stores the exhaust overnight and returns it as electricity next morning.
2. Exhaust heat boils water in a recovery boiler, without burning more fuel. **(correct)**
3. The steam turbine replaces the gas turbine, so the compressor comes off the train.

Explanation: The heat-recovery steam generator boils water with exhaust heat. The extra steam megawatts do not require a second fuel stream.

### d3q1 — knowledge check, level 1

What cycle is a simple-cycle gas turbine running?

0. Rankine, because the combustor boils a stream of water.
1. Brayton: compress air, burn fuel in it, and expand the hot gas. **(correct)**
2. A condenser cycle, because the stack turns the exhaust back into water.
3. Combined heat and power, because every stack serves a steam host.

Explanation: A simple-cycle gas turbine follows the Brayton path: compress, burn, expand. Rankine is the steam cycle.

### d3q2 — knowledge check, level 1

Which three sections are on the gas path of that machine?

0. Boiler, condenser, and cooling tower.
1. Dam, penstock, and wicket gate.
2. Reactor, steam generator, and pressurizer.
3. Compressor, combustor, and turbine. **(correct)**

Explanation: The three gas-path sections are the compressor, the combustor, and the turbine.

### d3q3 — knowledge check, level 1

What is the ordinary name for the boiler on the exhaust, and what does it feed?

0. A step-up transformer, which raises exhaust pressure up to transmission voltage.
1. A condenser, which turns the hot exhaust gas back into gas for the pipeline.
2. A heat-recovery steam generator, which makes steam from exhaust headed for the stack. **(correct)**
3. A governor, which holds grid frequency by cooling the gas before it leaves.

Explanation: A heat-recovery steam generator makes steam from exhaust that would otherwise leave the stack, and a steam turbine turns that steam into more electricity.

### d3q4 — knowledge check, level 1

What does combined heat and power add beyond electricity?

0. Useful thermal energy: process heat, steam, hot water, or chilled water. **(correct)**
1. A second generator voltage, with no use found for the leftover heat at all.
2. A second interconnection, so the plant can sell into two grids at once.
3. Storage of the exhaust as chemical energy inside a site battery.

Explanation: Combined heat and power adds useful thermal energy: process heat, steam, hot water, or chilled water.

### d3q5 — knowledge check, level 2

How should you use the over-80-percent comparison in a memo?

0. It is the heat rate measured on this plant's pipeline-gas turbines.
1. It is the annual capacity factor of the national simple-cycle fleet.
2. It is the capture limit the wind lesson gives for a turbine in open air.
3. Combined heat can exceed 80 percent useful output, and that is not this plant. **(correct)**

Explanation: The published comparison is that combined heat and power can exceed 80 percent, against about 50 percent for typical separate electricity plus an on-site boiler. It is not a Viper Power test and not a capacity factor.

### d3q6 — knowledge check, level 2

Where does Viper Power sit in today's four rows?

0. Combined cycle, because a row of six turbines implies a steam plant behind them.
1. Simple-cycle gas turbines, with the exhaust leaving and no steam turbine. **(correct)**
2. Combined heat and power, because a host sits just beyond the fence line.
3. Reciprocating engines, matching the optional animation of an engine row.

Explanation: Viper Power is the simple-cycle row. Exhaust heat leaves the stack. The Week 1 description has no steam bottoming cycle.

### d3q7 — knowledge check, level 2

A slide shows a 300-ton combined-cycle machine and a price for the same scope here. What is that figure good for?

0. It is this plant's as-built weight, so a foundation calc can use 300 tons.
1. It stands in for the heat-rate test this week does not have on file.
2. It is the standard weight of every Frame 7, simple cycle or not.
3. It shows someone else's machine, and that weight does not describe this plant. **(correct)**

Explanation: The 300-ton machine is someone else's combined-cycle unit. It is on the page so you can see a heat-recovery steam generator. The weight and the frame stay with that unit.

### d3q8 — knowledge check, level 2

Two documents quote the plant as 330 MW and as 65 MW per unit. What do you ask before you pick one?

0. Which figure is the generator voltage printed on the nameplate.
1. Whether each quote is net or gross, and what outdoor condition it uses. **(correct)**
2. Which figure was taken in megawatt-hours rather than in megawatts.
3. Which figure is the grid frequency the unit synchronized to.

Explanation: Ask net or gross, and ask the outdoor condition. About 330 MW net at 95°F and about 65 MW per unit at standard conditions are different bases.

### d3q9 — knowledge check, level 2

Which pair is the 2022 share of US utility-scale generation, not a capacity factor?

0. Combined cycle about 33.8 percent, and single-cycle turbines about 3.6 percent. **(correct)**
1. Nuclear at 91.0 percent and hydro at 35.3 percent, which are capacity factors.
2. Simple-cycle turbines about 33.8 percent, and combined cycle about 3.6 percent.
3. Both rows near 50 percent, matching the separate-boiler comparison.

Explanation: In 2022, combined-cycle plants produced about 33.8 percent of US utility-scale generation, and single-cycle combustion turbines about 3.6 percent. That is a share of energy, not a capacity factor.

### d3q10 — knowledge check, level 2

A host site wants electricity and steam from one fuel, using engines. Which configuration matches?

0. A solar array with a cooling tower and no heat host on the site.
1. A dam paired with a coal pulverizer and a cooling tower on the same site.
2. A reciprocating engine with heat recovery, which is not this peaker. **(correct)**
3. A step-up transformer paired only with a battery on the same bus.

Explanation: A reciprocating engine with heat recovery is one combined-heat configuration. It is a different row from this simple-cycle peaker.

## w1d4 — Day 4

### d4e1 — numeric exercise

Practice numbers, not a Viper Power record. A unit is rated 100 MW and produced 120,000 MWh in a 365-day year (8,760 hours). Capacity factor in percent, to one decimal place.

- Unit: percent
- Expected: 13.7
- Tolerance: 0.05
- Worked explanation: These are practice numbers, not a Viper Power record. Maximum energy is 100 MW × 8,760 h = 876,000 MWh. 120,000 / 876,000 = 0.136986, which is 13.7 percent to one decimal place.

### d4c1 — checkpoint, level 1

Where is the turbine in a solar photovoltaic plant?

0. The turbine sits inside the inverter and spins at 3,600 rpm all day.
1. Solar uses the same boiler as a coal plant, without the pulverizer.
2. The panels store a full day of steam and release it after sunset.
3. A solar photovoltaic plant has no turbine, and output is zero at night. **(correct)**

Explanation: A solar photovoltaic plant has no turbine. Light frees electrons, and there is no output at night.

### d4c2 — checkpoint, level 2

A storage slide quotes 10 MW and 24 MWh from a British project. What may you use it for?

0. As this plant's required battery, because every peaker is now expected to carry one.
1. As a foreign example whose sizes are not an ERCOT rating and not this plant. **(correct)**
2. As the plant heat rate, because megawatt-hours divided by hours equals efficiency.
3. As the July capacity factor published for the national gas-turbine fleet.

Explanation: The 10 MW and 24 MWh project is a British example from the storage film. Those sizes are not an ERCOT rating and not a Viper Power rating.

### d4q1 — knowledge check, level 1

What is the definition of capacity factor?

0. Actual energy divided by rated output across every hour in the period. **(correct)**
1. Fuel burned over the period, divided by boiler steam pressure.
2. Nameplate voltage divided by the number of hours in the year.
3. The scarce-hour energy price divided by the midday price on the same day.

Explanation: Capacity factor is actual energy divided by the energy the plant could have made by running at rated capacity for every hour in the period.

### d4q2 — knowledge check, level 2

Which pair is the preliminary 2025 annual national capacity factor?

0. Gas turbines 58.4 percent. Combined cycle 14.1 percent.
1. Both fleets at 23.3 percent, because the July row matches the year.
2. Combined cycle 58.4 percent. Gas turbines 14.1 percent. **(correct)**
3. Nuclear 14.1 percent. Hydro 58.4 percent.

Explanation: Annual 2025, preliminary: combined cycle 0.584, which is 58.4 percent, and gas turbines 0.141, which is 14.1 percent.

### d4q3 — knowledge check, level 1

Why is a simple-cycle gas turbine's national capacity factor low across the year?

0. The machines are held to 14.1 percent of rated voltage by the transformer.
1. It is dispatched when power is scarce, because it costs more fuel per megawatt-hour. **(correct)**
2. A peaker has no generator, so it cannot synchronize for most of the year.
3. Capacity factor and efficiency are one number, and a rule keeps that number low.

Explanation: A simple-cycle turbine uses more fuel per megawatt-hour, so it is dispatched when power is scarce. The low factor is that pattern, not a ban on running.

### d4q4 — knowledge check, level 2

Which figure is the July 2026 national gas-turbine capacity factor?

0. 14.1 percent. That is the 2025 annual gas-turbine factor, not the July month.
1. 24.9 percent. That figure is July 2025, not July 2026.
2. 72.3 percent. That is the July 2026 combined-cycle factor, not the gas-turbine row.
3. 23.3 percent, preliminary. That is the July 2026 gas-turbine factor. **(correct)**

Explanation: July 2026 gas-turbine capacity factor is 0.233, which is 23.3 percent, preliminary. 0.249 is the July 2025 gas-turbine factor. Combined cycle in July 2026 is 0.723. Summer runs harder than the annual average and still far below baseload. Preliminary values can be revised in a later workbook.

### d4q5 — knowledge check, level 2

National capacity factors are written next to the Viper Power name. What do you change?

0. Label them national and preliminary. They are not Viper Power's own factor. **(correct)**
1. Nothing. A national fleet factor is the factor measured at this plant.
2. Replace them with the British battery's 24 MWh, which is this plant's annual energy.
3. Average the two Julys and call that average the plant's guarantee.

Explanation: The national factors are not Viper Power's capacity factor. This week does not include the plant's own factor, so the memo keeps the national label.

### d4q6 — knowledge check, level 1

A night-time peak arrives and a solar photovoltaic contract is the resource offered to cover it. What can that contract deliver?

0. Full output, because the cells store noon energy and release it after dark.
1. Output from a small steam turbine mounted underneath the photovoltaic array.
2. No nighttime output. Solar photovoltaic has no turbine and nothing to sell then. **(correct)**
3. The same night megawatts as a dam, because both are called renewable.

Explanation: Solar photovoltaic has no turbine and no output at night. The cells do not store the next day's peak.

### d4q7 — knowledge check, level 2

The wind clip's capture limit is quoted as if it were a capacity factor. What is the limit?

0. 59.3 percent of the wind's kinetic energy, a capture limit rather than a capacity factor. **(correct)**
1. 14.1 percent, which is the annual gas-turbine capacity factor in the national table.
2. 100 percent, once the rotor is tall enough to clear the turbulence from nearby trees.
3. 3.3 percent, which is the 2022 solar share of utility-scale generation.

Explanation: The Betz limit in the wind film is 59.3 percent of the wind's kinetic energy. It is a capture limit, not a capacity factor and not a price.

### d4q8 — knowledge check, level 2

A battery and a gas turbine can both cover a short peak. What difference does the storage clip support?

0. The battery can respond only after a steam cycle has been warmed up.
1. The battery raises plant heat rate by storing steam in chemical form.
2. A charged battery is not dispatchable, so the market cannot call on it.
3. A battery can change output faster than a rotating machine until it is empty. **(correct)**

Explanation: The storage film says a battery can react faster than a rotating machine. An empty battery has nothing left for the next hour.

### d4q9 — knowledge check, level 2

Your practice unit, not the plant, produced 120,000 MWh from a 100 MW rating over 8,760 hours. What capacity factor do you report?

0. 8.3 percent, because dividing the rating by the hours gives the factor.
1. 72.3 percent, which is the July combined-cycle figure in the national table.
2. 13.7 percent, from 120,000 MWh divided by a maximum of 876,000 MWh. **(correct)**
3. 120 percent, because the energy produced is numerically larger than the rating.

Explanation: 100 × 8,760 = 876,000 MWh maximum. 120,000 / 876,000 = 13.7 percent. These are practice numbers, not a Viper Power record.

### d4q10 — knowledge check, level 2

Which statement about these resource labels is right?

0. A peaker runs most hours, baseload runs only in shortages, and wind is fully dispatchable.
1. Solar and batteries with no synchronous shaft are inverter-based resources. **(correct)**
2. Intermediate means the plant uses an inverter, and baseload means the fuel is coal.
3. Dispatchable means a synchronous governor, which solar plants and batteries both have.

Explanation: Baseload runs most hours, intermediate runs many hours, and a peaker runs in the scarce hours. Dispatchable means the hours can be chosen. An inverter-based resource connects through an inverter and has no synchronous shaft.

## w1d5 — Day 5

### d5e1 — numeric exercise

Two different approximates, not one nameplate. Six times the 65 MW standard-condition figure, compared with about 330 MW net at 95°F. Express the difference as a percent of the six-times-65 figure, to one decimal place. The result is not a measured derate.

- Unit: percent
- Expected: 15.4
- Tolerance: 0.05
- Worked explanation: 6 × 65 = 390 MW. 390 − 330 = 60 MW. 60 / 390 = 0.153846, which is 15.4 percent to one decimal. These are approximates on different bases: about 65 MW per unit at standard conditions, and about 330 MW net at 95°F for the plant. 390 MW is not a documented plant nameplate, and 15.4 percent is not a measured test derate.

### d5c1 — checkpoint, level 2

Which pair of figures belongs on the first slide, and what is each one?

0. 59 MW and 1,062 MWh, treated as two nameplate ratings from the same test.
1. 220 MW and twelve engines, treated as the machines standing in this yard today.
2. About 65 MW per unit at standard conditions, and about 330 MW net at 95°F. **(correct)**
3. 13.8 kV and 60 Hz, treated as this plant's summer capacity figures.

Explanation: The pair to show is about 65 MW per unit at standard conditions, from the 2024 test, and about 330 MW net at 95°F. A prior-owner sheet says about 360 MW. The 59 MW figure is an exercise input. The 220 MW figure belongs to someone else's animation.

### d5q1 — knowledge check, level 1

What is the difference between MW and MWh?

0. MW is the rate of power. MWh is that rate held over hours. **(correct)**
1. MW and MWh are both voltages, taken an hour apart.
2. MWh is the rate, and MW is the energy left at the end of the day.
3. They differ only by the outdoor temperature at the compressor inlet.

Explanation: MW is the rate of power. MWh is that rate held over hours.

### d5q2 — knowledge check, level 1

Can the 138 kV lines hold the plant's energy overnight?

0. The lines store electrical energy in proportion to their operating voltage.
1. The grid stores almost no electrical energy, so a mismatch moves frequency. **(correct)**
2. The wires hold a few hours of energy, and then the frequency resets itself.
3. The step-up transformer is the battery for energy that leaves the yard.

Explanation: The grid stores almost no electrical energy. A mismatch moves frequency at once.

### d5q3 — knowledge check, level 1

A gas turbine is called a Rankine machine. Which correction is right?

0. Both cycles boil water. The only difference is which fuel truck arrives.
1. Rankine is the gas turbine, and Brayton is the condenser on the steam side.
2. Neither cycle rejects heat. Both turn all of the fuel into electricity.
3. Brayton for the gas turbine. Rankine for a steam plant, which this yard is not. **(correct)**

Explanation: Brayton for the gas turbine. Rankine for the steam plant. Viper Power is the Brayton machine.

### d5q4 — knowledge check, level 1

The vendor from Wednesday is in the meeting. What does a heat-recovery steam generator add?

0. A second gas compressor that burns a separate stream of fuel for the extra power.
1. Extra megawatts from exhaust heat, without a second fuel burn. **(correct)**
2. A cooling tower installed in the yard in place of the electrical generator.
3. An inverter that stores the exhaust gas and releases it at the next peak.

Explanation: A heat-recovery steam generator turns exhaust into steam for a second turbine. The plant description you are defending has none.

### d5q5 — knowledge check, level 1

What is combined heat and power, in one line?

0. Two plants billed on one invoice, with the leftover heat thrown away at both of them.
1. A peaker that runs only in winter so the exhaust leaving the stack stays cool.
2. Electricity plus useful heat or steam from one fuel, for a host that wants the heat. **(correct)**
3. Power from one plant and steam from a separate boiler, with no shared use of fuel.

Explanation: Combined heat and power is electricity plus useful heat or steam from one fuel.

### d5q6 — knowledge check, level 2

Why does a simple-cycle peaker's national capacity factor stay low even though the machine can run?

0. It costs more fuel per megawatt-hour, so it runs when that fuel is worth paying for. **(correct)**
1. The grid frequency forbids operation past a few hundred hours in a normal year.
2. A peaker has no generator of its own, so it cannot stay synchronized for long.
3. A standing rule caps a peaker at a few hundred hours, whatever the system will pay.

Explanation: The machine costs more fuel per megawatt-hour, so it runs when the system is willing to pay for that. The factor is not a ban on operating.

### d5q7 — knowledge check, level 2

A battery is offered as a substitute for the next short peak. What can you say from this week?

0. A battery is slower than a steam cycle, so it cannot cover a short evening peak on its own.
1. The battery size in one British example is the size this plant is required to install.
2. A battery replaces the scheduling entity, so this plant no longer needs a separate one.
3. A battery can move faster than a rotating machine until its charge is gone. **(correct)**

Explanation: A battery can move energy across hours and can move faster than a rotating machine. Empty storage cannot cover the next hour, and the product it may offer is a question for the scheduling entity.

### d5q8 — knowledge check, level 1

What voltages do you write on the one-page diagram?

0. 60 Hz measured at the generator and 50 Hz measured out in the switchyard.
1. 138 kV at the generator and 13.8 kV on the transmission side of the yard.
2. 13.8 kV measured at the generator and 138 kV measured in the switchyard. **(correct)**
3. The round example voltages from Monday's film, because they match every plant.

Explanation: The generator nameplate figure used this week is 13.8 kV. The switchyard figure is 138 kV.

### d5q9 — knowledge check, level 2

How do you describe the machines and the transformers in one breath?

0. Twelve engines on one shared stack, as in the optional engine animation.
1. Six GE MS7001B gas turbines. Three transformers, two generators each. **(correct)**
2. Six turbines, each with its own transformer, so one transformer outage trips one unit.
3. Six turbines feeding one heat-recovery boiler that stays in service with them.

Explanation: Six GE MS7001B units, gas only, with 7B, 7E, and 7B/E all appearing in the documents, so the hardware is still a confirmation item. Three step-up transformers serve six units, two generators each.

### d5q10 — knowledge check, level 2

Why can a standard-condition megawatt and a hot-day net megawatt both be honest?

0. Megawatts and megawatt-hours are the same unit, so both labels fit either test.
1. The standard-condition test already subtracts the hot-afternoon air effect.
2. The two figures are required to match, so one of the sheets has a typo.
3. Hot inlet air is less dense, so output falls, and net also subtracts plant use. **(correct)**

Explanation: Hot inlet air is less dense, so compressor mass flow and output fall. Net also subtracts auxiliaries. The 65 MW and 330 MW approximates are different bases.

### d5q11 — knowledge check, level 2

Who is on the far side of the 138 kV breakers, and what is still open?

0. A transmission service provider interface, and who switches it is still unconfirmed. **(correct)**
1. The scheduling entity owns those breakers and is the only party that operates them.
2. The plant exports at generator voltage, with no transformer and no utility neighbor.
3. The remote operations center opens the yard breakers without anyone on site.

Explanation: The 138 kV yard is the transmission service provider interface, and the notes include a backfeed practice. Who switches is a confirmation item because the one-line is not in this course pack.

### d5q12 — knowledge check, level 1

Who calls ERCOT for the plant? What is a Qualified Scheduling Entity?

0. The transmission service provider that owns the breakers and switches them in the 138 kV yard.
1. A market participant qualified under Protocol Section 16 to speak for the plant and settle. **(correct)**
2. ERCOT itself, the organization that dispatches generation and balances the region.
3. The plant's remote operations center, placing the market calls without a scheduler.

Explanation: A Qualified Scheduling Entity is a market participant qualified under Protocol Section 16 to communicate with ERCOT for resource entities and load-serving entities and to settle with ERCOT.

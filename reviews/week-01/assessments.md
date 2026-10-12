# Week 1 assessments

Correct choices and explanations live in `content/week-01/answer-key.ts`. The lesson pages ship the prompts and choices only. `POST /api/quiz/grade` returns the explanation after the student submits. This file is the auditor copy.

## w1d1 — Day 1

### d1e1 — numeric exercise

Training problem, not a plant nameplate: six units, each given as 59 MW, for 3 hours. How many MWh is that? The 59 MW figure is the problem's given. Plant documents use other bases, which Day 5 lines up.

- Unit: MWh
- Expected: 1062
- Tolerance: 0
- Worked explanation: 6 × 59 MW = 354 MW. 354 MW × 3 h = 1,062 MWh. The 59 MW figure is the given for this problem, not a plant nameplate. Other plant documents use about 65 MW per unit at standard conditions and about 330 MW net at 95°F. Do not report 1,062 MWh as a measured plant total.

### d1c1 — checkpoint, level 1

A unit holds 50 MW for 2 hours. How much energy did it deliver?

0. 25 MWh, because the two hours cut the 50 MW reading in half.
1. 50 MW, because a timed run keeps the power unit on the page.
2. 100 MWh, because 50 MW held for two hours is energy delivered. **(correct)**
3. 50 kV, because a two-hour run is reported as electrical pressure.

Explanation: 50 MW held for 2 hours is 50 × 2 = 100 MWh. The power is still 50 MW.

### d1c2 — checkpoint, level 1

Why can a transformer change voltage on an AC line and not on a steady DC circuit?

0. It needs a changing current so one coil can induce voltage in the other. **(correct)**
1. It stores the day's megawatt-hours and later releases them as voltage.
2. Steady direct current induces more voltage because the field never falls.
3. Frequency and voltage are one quantity, so either one can be stepped up.

Explanation: A transformer needs a changing magnetic field. Steady direct current does not keep inducing voltage in the second coil. That is why the grid is alternating current.

### d1q1 — knowledge check, level 1

Priya forwards an invoice that says the plant 'lost 60 on Tuesday.' What distinction do you settle before you approve it?

0. MW is the energy collected over a day, and MWh is the line voltage.
1. They are two labels for one unit, so either one can sit on the invoice.
2. MWh is the megawatt reading divided by 1,000, so 60 MW is 0.06 MWh.
3. MW is power at an instant, and MWh is that power held over hours. **(correct)**

Explanation: Power is the rate, in MW. Energy is that rate times time, in MWh. The invoice needs the unit before it needs a signature.

### d1q2 — knowledge check, level 1

A contractor says the transmission lines can store Tuesday's generation and deliver it Wednesday morning. What do you tell Dana?

0. Transformers pass power for one second and then reset until the next dispatch call.
1. The grid stores almost no electrical energy, so an imbalance shows up as frequency. **(correct)**
2. The gas pipeline holds the electrical energy until the plant is called to run.
3. Customer contracts fix the frequency each morning and hold that value all day.

Explanation: Production and use happen together. There is no large store of electrical energy in the wires, so a mismatch moves frequency immediately.

### d1q3 — knowledge check, level 1

Luis asks what 60 Hz means on the North American grids in this lesson.

0. The plant heat rate is 60, which is why these grids are described that way.
1. Transmission voltage is 60 kV on the North American lines used in this lesson.
2. The generator nameplate is a 60-volt machine once it is tied to these grids.
3. Alternating current reverses direction 60 times each second on these grids. **(correct)**

Explanation: 60 Hz means the alternating current reverses 60 times each second. It is not a voltage, a heat rate, or a headcount of machines.

### d1q4 — knowledge check, level 1

Why does the plant raise voltage before a long transmission line?

0. It raises voltage so the same power travels the line at a lower current. **(correct)**
1. It turns the plant's alternating current into direct current for the long line.
2. The core stores the day's energy and releases that energy at the far substation.
3. It sets the grid frequency to 50 Hz so the line matches overseas equipment.

Explanation: Higher voltage means lower current for the same power. Heating follows the square of the current, so raising voltage cuts line loss. The transformer does not store the energy and it does not set the frequency.

### d1q5 — knowledge check, level 2

The training problem says six units at 59 MW for 3 hours. What belongs on the answer line?

0. 177 MWh, from adding 59 and 3 and then multiplying by the six units.
1. 354 MW, because the three hours do not change a power figure into energy.
2. 1,062 MWh, from six units at 59 MW each, held for three hours. **(correct)**
3. 59 kV, because that figure is the generator voltage held for three hours.

Explanation: 6 × 59 = 354 MW. 354 × 3 h = 1,062 MWh. The 59 MW figure is the problem's given, not a confirmed nameplate. The plant's own bases are a hot-day net figure and a standard-condition figure per unit.

### d1q6 — knowledge check, level 2

A developer wants to sell power from a new Viper Power unit into a utility in Oklahoma. Why is that harder than selling to a Texas utility?

0. Oklahoma uses 50 Hz, so these machines cannot synchronize with that utility at all.
1. Texas is mostly its own interconnection, ERCOT, with limited ties to the east. **(correct)**
2. ERCOT owns the Texas plants and can refuse a sale that leaves the state.
3. Federal law bans an interstate electricity sale from a plant inside Texas.

Explanation: Most of Texas is on ERCOT, its own interconnection, with limited ties to the Eastern grid. Oklahoma is on that Eastern grid. ERCOT does not own the plants, and the lesson does not say interstate sales are banned or that Oklahoma runs at 50 Hz.

### d1q7 — knowledge check, level 1

Load jumps and the online machines do not pick it up. What happens to frequency?

0. Frequency falls until generation is added or some of the load is removed. **(correct)**
1. Frequency rises, because the extra load speeds the online shafts up.
2. Frequency stays at 60 Hz by definition, and only the voltage is free to move.
3. The step-up transformer absorbs the extra load and holds it as stored energy.

Explanation: If load exceeds generation, the rotating machines slow and frequency falls until generation is added or load is removed.

### d1q8 — knowledge check, level 2

Same power, and the line voltage is doubled. Heating loss follows the square of the current. What happens to that loss?

0. The loss doubles, because voltage and conductor heating move together.
1. The loss stays put, because the transformer cancels current out on the line.
2. The loss falls by half, because current and heating stay in proportion.
3. The current is cut in half, so heating loss falls to one quarter. **(correct)**

Explanation: Current is power divided by voltage. Double the voltage and the current is cut in half. Loss follows current squared, so loss falls to one quarter. The example voltages in the film are not this plant's voltages.

### d1q9 — knowledge check, level 2

During a test, frequency is low and voltage is low. Which device does which job?

0. The exciter adds fuel to raise frequency, and the governor changes field current.
1. The governor changes fuel to hold shaft speed, and the exciter holds voltage. **(correct)**
2. Both devices move a transformer tap, and neither one touches fuel or field current.
3. The step-up transformer holds both frequency and voltage once the unit is online.

Explanation: The governor changes fuel to hold shaft speed, and shaft speed is locked to frequency. The exciter changes field current to hold voltage.

### d1q10 — knowledge check, level 1

Priya asks what spins a gas-turbine generator, and whether a solar plant has the same shaft.

0. The transformer spins the generator, and a solar plant uses a smaller transformer for that job.
1. Grid frequency spins the shaft, and a solar plant is spun by that same frequency.
2. The prime mover spins the generator, and a photovoltaic plant has no turbine shaft. **(correct)**
3. The condenser spins the shaft on every plant, including a photovoltaic plant.

Explanation: The prime mover spins the generator. A photovoltaic plant has no turbine. The transformer changes voltage. It does not spin the shaft.

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

Dana asks what cycle a coal plant or a nuclear steam plant is running.

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

Luis wants the cooling tower in the outage because it is only a heat dump. What is the project consequence on a steam plant?

0. If the plant cannot reject heat, it cannot keep making steam power. **(correct)**
1. Cooling can wait. The turbine keeps its megawatts with the condenser valved out.
2. A cooling failure changes water chemistry only, and electrical output stays put.
3. The tower is optional equipment, installed so the yard looks finished.

Explanation: If the plant cannot reject heat, it cannot keep making steam power. A cooling-tower outage on a Rankine unit is a megawatt outage.

### d2q7 — knowledge check, level 2

Priya quotes a national nuclear capacity factor for 2025 and asks if that is the efficiency to use on a Viper Power memo.

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

Luis still wants boiler and cooling-tower scope on the Viper Power outage. What do you send back?

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

The vendor calls the boiler on the exhaust a recovery unit. What is the ordinary name, and what does it feed?

0. A step-up transformer, which raises exhaust pressure up to transmission voltage.
1. A condenser, which turns the hot exhaust gas back into gas for the pipeline.
2. A heat-recovery steam generator, which makes steam from exhaust headed for the stack. **(correct)**
3. A governor, which holds grid frequency by cooling the gas before it leaves.

Explanation: A heat-recovery steam generator makes steam from exhaust that would otherwise leave the stack, and a steam turbine turns that steam into more electricity.

### d3q4 — knowledge check, level 1

Priya asks what combined heat and power adds beyond electricity.

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

The vendor's slide shows a 300-ton combined-cycle machine and a price for the same scope here. What is that slide good for?

0. It is this plant's as-built weight, so a foundation calc can use 300 tons.
1. It stands in for the heat-rate test this week does not have on file.
2. It is the standard weight of every Frame 7, simple cycle or not.
3. It shows someone else's machine, and that weight does not describe this plant. **(correct)**

Explanation: The 300-ton machine is someone else's combined-cycle unit. It is on the page so you can see a heat-recovery steam generator. The weight and the frame stay with that unit.

### d3q8 — knowledge check, level 2

Two people quote the plant as 330 MW and as 65 MW per unit. What do you ask before you pick one?

0. Which figure is the generator voltage printed on the nameplate.
1. Whether each quote is net or gross, and what outdoor condition it uses. **(correct)**
2. Which figure was taken in megawatt-hours rather than in megawatts.
3. Which figure is the grid frequency the unit synchronized to.

Explanation: Ask net or gross, and ask the outdoor condition. About 330 MW net at 95°F and about 65 MW per unit at standard conditions are different bases.

### d3q9 — knowledge check, level 2

Priya mixes a generation share into a capacity-factor sentence. Which pair is the 2022 share of US utility-scale generation?

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

Hypothetical unit, not Viper Power. It is rated 100 MW and produced 120,000 MWh in a 365-day year (8,760 hours). Capacity factor in percent, to one decimal place.

- Unit: percent
- Expected: 13.7
- Tolerance: 0.05
- Worked explanation: The unit is hypothetical, not Viper Power. Maximum energy is 100 MW × 8,760 h = 876,000 MWh. 120,000 / 876,000 = 0.136986, which is 13.7 percent to one decimal place.

### d4c1 — checkpoint, level 1

Priya points at a solar contract and asks where the turbine is.

0. The turbine sits inside the inverter and spins at 3,600 rpm all day.
1. Solar uses the same boiler as a coal plant, without the pulverizer.
2. The panels store a full day of steam and release it after sunset.
3. A solar photovoltaic plant has no turbine, and output is zero at night. **(correct)**

Explanation: A solar photovoltaic plant has no turbine. Light frees electrons, and there is no output at night.

### d4c2 — checkpoint, level 2

Luis drops a storage slide into the folder: 10 MW and 24 MWh, from a British project. What may you use it for?

0. As this plant's required battery, because every peaker is now expected to carry one.
1. As a foreign example whose sizes are not an ERCOT rating and not this plant. **(correct)**
2. As the plant heat rate, because megawatt-hours divided by hours equals efficiency.
3. As the July capacity factor published for the national gas-turbine fleet.

Explanation: The 10 MW and 24 MWh project is a British example from the storage film. Those sizes are not an ERCOT rating and not a Viper Power rating.

### d4q1 — knowledge check, level 1

Dana asks for the definition you will use when Priya says the factor is low.

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

Priya says last July the national gas-turbine fleet ran at about a quarter of rating. Which figure is July 2026?

0. 14.1 percent. That is the 2025 annual gas-turbine factor, not the July month.
1. 24.9 percent. That figure is July 2025, not July 2026.
2. 72.3 percent. That is the July 2026 combined-cycle factor, not the gas-turbine row.
3. 23.3 percent, preliminary. That is the July 2026 gas-turbine factor. **(correct)**

Explanation: July 2026 gas-turbine capacity factor is 0.233, which is 23.3 percent, preliminary. 0.249 is the July 2025 gas-turbine factor. Combined cycle in July 2026 is 0.723. Summer runs harder than the annual average and still far below baseload. Preliminary values can be revised in a later workbook.

### d4q5 — knowledge check, level 2

Priya writes those national factors next to the Viper Power name. What do you change?

0. Label them national and preliminary. They are not Viper Power's own factor. **(correct)**
1. Nothing. A national fleet factor is the factor measured at this plant.
2. Replace them with the British battery's 24 MWh, which is this plant's annual energy.
3. Average the two Julys and call that average the plant's guarantee.

Explanation: The national factors are not Viper Power's capacity factor. This week does not include the plant's own factor, so the memo keeps the national label.

### d4q6 — knowledge check, level 1

A night-time peak arrives and the solar contract is the resource Priya hoped would cover it. What can that contract deliver?

0. Full output, because the cells store noon energy and release it after dark.
1. Output from a small steam turbine mounted underneath the photovoltaic array.
2. No nighttime output. Solar photovoltaic has no turbine and nothing to sell then. **(correct)**
3. The same night megawatts as a dam, because both are called renewable.

Explanation: Solar photovoltaic has no turbine and no output at night. The cells do not store the next day's peak.

### d4q7 — knowledge check, level 2

Luis quotes the wind clip's capture limit as if it were a capacity factor. What is the limit?

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

Explanation: 100 × 8,760 = 876,000 MWh maximum. 120,000 / 876,000 = 13.7 percent. The unit is hypothetical.

### d4q10 — knowledge check, level 2

Dana asks you to label the resources in the memo without mixing the words. Which set is right?

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

Dana asks which pair of figures you will put on the first slide, and what each one is.

0. 59 MW and 1,062 MWh, treated as two nameplate ratings from the same test.
1. 220 MW and twelve engines, treated as the machines standing in this yard today.
2. About 65 MW per unit at standard conditions, and about 330 MW net at 95°F. **(correct)**
3. 13.8 kV and 60 Hz, treated as this plant's summer capacity figures.

Explanation: The pair to show is about 65 MW per unit at standard conditions, from the 2024 test, and about 330 MW net at 95°F. A prior-owner sheet says about 360 MW. The 59 MW figure is an exercise input. The 220 MW figure belongs to someone else's animation.

### d5q1 — knowledge check, level 1

The invoice from Monday is back. Priya still needs the units in one sentence.

0. MW is the rate of power. MWh is that rate held over hours. **(correct)**
1. MW and MWh are both voltages, taken an hour apart.
2. MWh is the rate, and MW is the energy left at the end of the day.
3. They differ only by the outdoor temperature at the compressor inlet.

Explanation: MW is the rate of power. MWh is that rate held over hours.

### d5q2 — knowledge check, level 1

Luis says the 138 kV lines can hold the plant's energy overnight. What is the grid fact?

0. The lines store electrical energy in proportion to their operating voltage.
1. The grid stores almost no electrical energy, so a mismatch moves frequency. **(correct)**
2. The wires hold a few hours of energy, and then the frequency resets itself.
3. The step-up transformer is the battery for energy that leaves the yard.

Explanation: The grid stores almost no electrical energy. A mismatch moves frequency at once.

### d5q3 — knowledge check, level 1

Someone in Dana's meeting calls the gas turbine a Rankine machine. Which correction is right?

0. Both cycles boil water. The only difference is which fuel truck arrives.
1. Rankine is the gas turbine, and Brayton is the condenser on the steam side.
2. Neither cycle rejects heat. Both turn all of the fuel into electricity.
3. Brayton for the gas turbine. Rankine for a steam plant, which this yard is not. **(correct)**

Explanation: Brayton for the gas turbine. Rankine for the steam plant. Viper Power is the Brayton machine.

### d5q4 — knowledge check, level 1

The vendor from Wednesday is in the meeting. What does a heat-recovery steam generator add?

0. A second gas compressor that burns a separate stream of fuel for the extra power.
1. A heat-recovery steam generator makes extra megawatts from exhaust heat. **(correct)**
2. A cooling tower installed in the yard in place of the electrical generator.
3. An inverter that stores the exhaust gas and releases it at the next peak.

Explanation: A heat-recovery steam generator turns exhaust into steam for a second turbine. The plant description you are defending has none.

### d5q5 — knowledge check, level 1

Priya asks what combined heat and power is, in one line.

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

Dana asks who calls ERCOT. What is a Qualified Scheduling Entity?

0. The transmission service provider that owns the breakers and switches them in the 138 kV yard.
1. A market participant qualified under Protocol Section 16 to speak for the plant and settle. **(correct)**
2. ERCOT itself, the organization that dispatches generation and balances the region.
3. The plant's remote operations center, placing the market calls without a scheduler.

Explanation: A Qualified Scheduling Entity is a market participant qualified under Protocol Section 16 to communicate with ERCOT for resource entities and load-serving entities and to settle with ERCOT.

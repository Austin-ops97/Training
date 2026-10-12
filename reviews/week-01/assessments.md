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

0. 100 MWh **(correct)**
1. 50 MW, because energy uses the same unit as power
2. 25 MWh, because you divide power by hours
3. 50 kV, because a two-hour run is read in kilovolts

Explanation: 50 MW held for 2 hours is 50 × 2 = 100 MWh. The power is still 50 MW.

### d1c2 — checkpoint, level 1

Why can a transformer change voltage on an AC line and not on a steady DC circuit?

0. A transformer stores the day's megawatt-hours and releases them as a higher voltage.
1. A transformer needs a changing current so the magnetic field in one coil can induce voltage in the other. **(correct)**
2. Steady direct current induces a higher voltage because the magnetic field never collapses.
3. Frequency and voltage are the same quantity, so either one can be stepped up.

Explanation: A transformer needs a changing magnetic field. Steady direct current does not keep inducing voltage in the second coil. That is why the grid is alternating current.

### d1q1 — knowledge check, level 1

Priya forwards an invoice that says the plant 'lost 60 on Tuesday.' What distinction do you settle before you approve it?

0. MW is energy over a day, and MWh is the voltage of the line.
1. They are two names for the same unit, so either one can go on the invoice.
2. MW is power at an instant. MWh is energy: that power held over hours. **(correct)**
3. MWh is the megawatt reading divided by 1,000, so 60 MW is 0.06 MWh.

Explanation: Power is the rate, in MW. Energy is that rate times time, in MWh. The invoice needs the unit before it needs a signature.

### d1q2 — knowledge check, level 1

A contractor says the transmission lines can store Tuesday's generation and deliver it Wednesday morning. What do you tell Dana?

0. Transformers only pass power for one second, then they reset.
1. The gas pipeline stores the electrical energy until the plant is called.
2. Customers sign a contract that fixes the frequency once each morning.
3. The grid stores almost no electrical energy. An imbalance shows up immediately as a change in frequency. **(correct)**

Explanation: Production and use happen together. There is no large store of electrical energy in the wires, so a mismatch moves frequency immediately.

### d1q3 — knowledge check, level 1

Luis asks what 60 Hz means on the North American grids in this lesson.

0. Alternating current reverses direction 60 times each second. **(correct)**
1. The plant heat rate is 60.
2. Transmission voltage is 60 kV.
3. The generator nameplate is a 60-volt machine.

Explanation: 60 Hz means the alternating current reverses 60 times each second. It is not a voltage, a heat rate, or a headcount of machines.

### d1q4 — knowledge check, level 1

Why does the plant raise voltage before a long transmission line?

0. The transformer converts the plant's alternating current into direct current for the line.
1. It raises voltage so the same power moves at a lower current, and line heating falls. **(correct)**
2. The transformer core stores the day's energy and releases it at the far end.
3. It sets the grid frequency to 50 Hz so the line matches overseas equipment.

Explanation: Higher voltage means lower current for the same power. Heating follows the square of the current, so raising voltage cuts line loss. The transformer does not store the energy and it does not set the frequency.

### d1q5 — knowledge check, level 2

The training problem says six units at 59 MW for 3 hours. What do you put on the answer line, and what is the 59?

0. 177 MWh. Add 59 and 3, then multiply by six.
1. 354 MW. Energy and power share a unit, so the hours do not change the label.
2. 1,062 MWh. The 59 MW is the problem's given, not a confirmed Viper Power nameplate. **(correct)**
3. 59 kV. The figure is the generator voltage, held for three hours.

Explanation: 6 × 59 = 354 MW. 354 × 3 h = 1,062 MWh. The 59 MW figure is the problem's given, not a confirmed nameplate. The plant's own bases are a hot-day net figure and a standard-condition figure per unit.

### d1q6 — knowledge check, level 2

A developer wants to sell power from a new Viper Power unit into a utility in Oklahoma. Why is that harder than selling to a Texas utility?

0. Oklahoma uses 50 Hz, so the machines cannot synchronize.
1. ERCOT owns the Texas plants, so it can refuse an out-of-state sale.
2. Federal law bans interstate electricity sales.
3. Texas is mostly its own interconnection, ERCOT, with limited ties to the Eastern grid. **(correct)**

Explanation: Most of Texas is on ERCOT, its own interconnection, with limited ties to the Eastern grid. Oklahoma is on that Eastern grid. ERCOT does not own the plants, and the lesson does not say interstate sales are banned or that Oklahoma runs at 50 Hz.

### d1q7 — knowledge check, level 1

Load jumps and the online machines do not pick it up. What happens to frequency?

0. Frequency falls until generation is added or load is removed. **(correct)**
1. Frequency rises, because extra load speeds the shafts up.
2. Frequency stays at 60 Hz by definition. Only voltage can move.
3. The step-up transformer absorbs the extra load as stored energy.

Explanation: If load exceeds generation, the rotating machines slow and frequency falls until generation is added or load is removed.

### d1q8 — knowledge check, level 2

Same power, and the line voltage is doubled. Heating loss follows the square of the current. What happens to that loss?

0. Loss doubles, because voltage and heating move together.
1. Current is cut in half, so heating loss falls to one quarter. **(correct)**
2. Loss is unchanged, because the transformer cancels current.
3. Loss falls to one half, because current and heating are proportional.

Explanation: Current is power divided by voltage. Double the voltage and the current is cut in half. Loss follows current squared, so loss falls to one quarter. The example voltages in the film are not this plant's voltages.

### d1q9 — knowledge check, level 2

During a test, frequency is low and voltage is low. Which device does which job?

0. The exciter adds fuel to raise frequency, and the governor changes field current to raise voltage.
1. Both devices move the transformer tap. Fuel flow and field current are not part of either job.
2. The governor changes fuel to hold shaft speed and frequency. The exciter changes field current to hold voltage. **(correct)**
3. The step-up transformer holds both, so neither device matters once the unit is online.

Explanation: The governor changes fuel to hold shaft speed, and shaft speed is locked to frequency. The exciter changes field current to hold voltage.

### d1q10 — knowledge check, level 1

Priya asks what spins a gas-turbine generator, and whether a solar plant has the same shaft.

0. The transformer spins the generator. A solar plant uses a smaller transformer for the same job.
1. Grid frequency spins the shaft. A solar plant is spun by that same frequency.
2. The condenser spins the shaft on every plant, including a photovoltaic plant.
3. The prime mover spins the generator. A photovoltaic plant has no turbine shaft. **(correct)**

Explanation: The prime mover spins the generator. A photovoltaic plant has no turbine. The transformer changes voltage. It does not spin the shaft.

## w1d2 — Day 2

No numeric exercise. The exercise section is a sketch or table the student marks complete.

### d2c1 — checkpoint, level 1

The boiler is healthy and the plant still cannot make power. Which failure fits a Rankine unit?

0. The condenser. If it cannot reject heat, the cycle cannot keep turning. **(correct)**
1. The step-up transformer, because that is where the water is boiled.
2. The gas compressor, because every Rankine plant starts by compressing pipeline gas.
3. The inverter, because a steam plant is an inverter-based resource.

Explanation: The condenser rejects the heat the cycle cannot turn into work. If it cannot do that, the Rankine loop stops even when the boiler is healthy.

### d2c2 — checkpoint, level 1

The nuclear clip is about specific pressurized-water units. What is the lesson that travels, and what stays on those units?

0. Every reactor boils water in the vessel and sends that same water through the cooling tower.
1. Fission replaces the flame. On those units, reactor water and turbine steam stay in separate circuits. **(correct)**
2. The temperatures and the 1.3 second rod time are setpoints for a gas turbine too.
3. A nuclear plant has no condenser, because fission feeds the grid directly.

Explanation: Fission replaces the flame. On the pressurized-water units in the film, reactor water and turbine steam stay apart, and a third circuit cools the condenser. The temperatures and the rod time belong to those units.

### d2q1 — knowledge check, level 1

Dana asks what cycle a coal plant or a nuclear steam plant is running.

0. Brayton, because every turbine compresses air before it makes steam.
1. A battery cycle, because the condenser stores the day's energy.
2. Rankine: boil a liquid, expand the vapor, condense it, and pump it back. **(correct)**
3. Combined heat and power, because every condenser sells steam to a neighbor.

Explanation: Rankine is boil, expand, condense, and pump. Brayton is the gas-turbine cycle from tomorrow.

### d2q2 — knowledge check, level 1

Where does heat enter a Rankine cycle, and where does the leftover heat leave?

0. Heat in at the generator, heat out at the fuel pile.
1. Heat in at the pump, heat out at the boiler.
2. Heat in at the condenser, heat out at the turbine blades.
3. Heat in at the boiler or the steam generator. Heat thrown away at the condenser. **(correct)**

Explanation: Heat enters at the boiler or at a nuclear steam generator. The condenser throws the leftover heat away. The pump only returns liquid water.

### d2q3 — knowledge check, level 1

A coal plant and a pressurized-water nuclear plant sit on the same drawing. What is shared, and what is not?

0. Both end as a steam turbine driving a generator. Coal makes heat with a fire. Those nuclear units make heat with fission. **(correct)**
1. Both burn coal in a boiler. The reactor only changes the cooling tower.
2. Coal uses a gas turbine and the nuclear unit uses a battery.
3. The nuclear unit skips the generator and feeds the grid from the reactor vessel.

Explanation: Both plants end as a steam turbine driving a generator. The heat source is a fire in one case and fission in the other.

### d2q4 — knowledge check, level 1

What is the condenser's job?

0. It burns the fuel a second time to raise steam temperature.
1. It turns exhaust steam back into water so the cycle can be pumped around again. **(correct)**
2. It steps generator voltage up to transmission voltage.
3. It stores megawatt-hours overnight and releases them at the morning peak.

Explanation: The condenser turns exhaust steam back into water so the pump can send it around again.

### d2q5 — knowledge check, level 2

Why does a boiler plant treat the water before it becomes steam?

0. Untreated water would change the grid frequency.
1. Treatment is how the plant raises transmission voltage.
2. Raw water leads to corrosion and deposits inside a high-pressure boiler. **(correct)**
3. The treatment plant is the prime mover that spins the generator.

Explanation: Raw water in a high-pressure boiler leads to corrosion and deposits. Treatment is there to protect the metal.

### d2q6 — knowledge check, level 2

Luis wants the cooling tower in the outage because 'it is only a heat dump.' What is the project consequence on a steam plant?

0. Cooling can wait. The turbine keeps its megawatts with the condenser isolated.
1. A cooling failure only affects water chemistry, not electrical output.
2. The tower is optional equipment installed for appearance.
3. If the plant cannot reject heat, it cannot keep making steam power. **(correct)**

Explanation: If the plant cannot reject heat, it cannot keep making steam power. A cooling-tower outage on a Rankine unit is a megawatt outage.

### d2q7 — knowledge check, level 2

Priya quotes a national nuclear capacity factor for 2025 and asks if that is the efficiency to use on a Viper Power memo.

0. 91.0 percent, preliminary, is the national 2025 nuclear capacity factor. It is not an efficiency and it is not this plant. **(correct)**
1. 91.0 percent is the efficiency of every steam turbine, including a gas peaker.
2. 35.3 percent is the nuclear figure, and 91.0 percent is hydro.
3. The figure is Viper Power's tested efficiency at 95°F.

Explanation: The national 2025 nuclear capacity factor is 0.910, which is 91.0 percent, and it is marked preliminary. Hydro on the same sheet is 35.3 percent. Neither figure is an efficiency, and neither is Viper Power.

### d2q8 — knowledge check, level 2

The 2025 nuclear and hydro capacity factors in today's sources are marked preliminary. What does that word change?

0. Preliminary means the figure is a Viper Power guarantee.
1. A later workbook can revise a preliminary figure. It is still not this plant's efficiency. **(correct)**
2. Preliminary means the plants ran at 100 percent and the table rounded down.
3. Preliminary capacity factor and heat-rate efficiency are the same measurement.

Explanation: Preliminary means a later workbook can revise the figure. It does not turn a national capacity factor into this plant's efficiency.

### d2q9 — knowledge check, level 1

Put the steam path in order. What is the last step before water returns to be heated?

0. Send the steam out the transmission line.
1. Burn the condensed water in the combustor.
2. Cool the exhaust steam back into liquid water. **(correct)**
3. Invert the steam into direct current.

Explanation: The last step before the pump is to cool the exhaust steam back into liquid water.

### d2q10 — knowledge check, level 2

Luis still wants boiler and cooling-tower scope on the Viper Power outage. What do you send back?

0. Approve it. Every gas turbine has a Rankine condenser.
1. Approve the cooling tower and drop the boiler. Simple-cycle plants condense steam in the stack.
2. Move the scope to the heat-recovery boiler this plant uses at night.
3. Viper Power is not a Rankine plant. The Week 1 description is gas turbines on pipeline gas, with no boiler in that description. **(correct)**

Explanation: Viper Power's Week 1 description is gas turbines on pipeline gas. It is not a Rankine plant, so boiler and cooling-tower scope does not belong on this outage unless a current plant document adds it.

## w1d3 — Day 3

No numeric exercise. The exercise section is a sketch or table the student marks complete.

### d3c1 — checkpoint, level 1

Put a simple-cycle gas turbine's gas path in order.

0. Compressor, combustor, turbine. Then the exhaust leaves hot. **(correct)**
1. Condenser, boiler, cooling tower. Then the air is compressed.
2. Steam turbine, pump, condenser. The compressor is optional.
3. Inverter, battery, solar cell. The combustor stores the heat.

Explanation: Compressor, combustor, turbine, then a hot stack. That is the simple-cycle gas path.

### d3c2 — checkpoint, level 1

A combined-cycle plant makes extra megawatts from the gas-turbine exhaust. Where does that extra energy come from?

0. A second gas compressor burns a second stream of fuel.
1. A heat-recovery steam generator boils water with exhaust heat, without burning more fuel for that steam. **(correct)**
2. The stack stores the exhaust and returns it as electricity the next day.
3. The steam turbine replaces the gas turbine, so the compressor can be removed.

Explanation: The heat-recovery steam generator boils water with exhaust heat. The extra steam megawatts do not require a second fuel stream.

### d3q1 — knowledge check, level 1

What cycle is a simple-cycle gas turbine running?

0. Rankine, because the combustor boils water.
1. A condenser cycle, because the stack condenses the exhaust.
2. Brayton: compress air, burn fuel in it, expand the hot gas through a turbine. **(correct)**
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

0. A heat-recovery steam generator. It makes steam for another turbine from exhaust that would have gone up the stack. **(correct)**
1. A step-up transformer. It raises exhaust pressure to transmission voltage.
2. A condenser. It turns the exhaust gas back into pipeline gas.
3. A governor. It holds grid frequency by cooling the stack.

Explanation: A heat-recovery steam generator makes steam from exhaust that would otherwise leave the stack, and a steam turbine turns that steam into more electricity.

### d3q4 — knowledge check, level 1

Priya asks what 'combined heat and power' adds beyond electricity.

0. A second generator voltage, and no use for the heat.
1. Useful thermal energy: process heat, steam, hot water, or chilled water. **(correct)**
2. A second interconnection, so the plant can sell into two grids at once.
3. Storage of the exhaust as chemical energy in a battery.

Explanation: Combined heat and power adds useful thermal energy: process heat, steam, hot water, or chilled water.

### d3q5 — knowledge check, level 2

How should you use the 'over 80 percent' comparison in a memo?

0. It is Viper Power's tested heat rate.
1. It is the capacity factor of a simple-cycle peaker.
2. A combined-heat system can exceed 80 percent useful output, against about 50 percent for separate electricity plus an on-site boiler. That comparison is not a test of this plant. **(correct)**
3. It is the Betz limit for a wind turbine.

Explanation: The published comparison is that combined heat and power can exceed 80 percent, against about 50 percent for typical separate electricity plus an on-site boiler. It is not a Viper Power test and not a capacity factor.

### d3q6 — knowledge check, level 2

Where does Viper Power sit in today's four rows?

0. Combined cycle, because six turbines imply a steam bottoming plant.
1. Combined heat and power, because the stacks face the fence line.
2. Reciprocating engines, because the optional animation shows twelve engines.
3. Simple-cycle gas turbines. Exhaust heat leaves the stack. There is no steam bottoming cycle in the plant description. **(correct)**

Explanation: Viper Power is the simple-cycle row. Exhaust heat leaves the stack. The Week 1 description has no steam bottoming cycle.

### d3q7 — knowledge check, level 2

The vendor's slide shows a 300-ton combined-cycle machine and a price for the same scope here. What is that slide good for?

0. It shows someone else's combined-cycle machine. The weight and the frame do not describe Viper Power. **(correct)**
1. It is this plant's as-built weight, so the foundation calc can use 300 tons.
2. It replaces the heat-rate test this course does not have.
3. It is the standard weight of every Frame 7, simple cycle or not.

Explanation: The 300-ton machine is someone else's combined-cycle unit. It is on the page so you can see a heat-recovery steam generator. The weight and the frame stay with that unit.

### d3q8 — knowledge check, level 2

Two people quote the plant as 330 MW and as 65 MW per unit. What do you ask before you pick one?

0. Which figure is the generator voltage.
1. Net or gross, and at what outdoor condition. A hot-day net megawatt and a standard-condition megawatt are different bases. **(correct)**
2. Which figure was measured in megawatt-hours.
3. Which figure is the grid frequency.

Explanation: Ask net or gross, and ask the outdoor condition. About 330 MW net at 95°F and about 65 MW per unit at standard conditions are different bases.

### d3q9 — knowledge check, level 2

Priya mixes a generation share into a capacity-factor sentence. Which pair is the 2022 share of US utility-scale generation?

0. Nuclear 91.0 percent and hydro 35.3 percent. Those are capacity factors, not generation shares.
1. Simple cycle 33.8 percent and combined cycle 3.6 percent.
2. Combined cycle about 33.8 percent. Single-cycle combustion turbines about 3.6 percent. That is a share of energy produced, not a capacity factor. **(correct)**
3. Both rows at 50 percent, because that is the separate-boiler comparison.

Explanation: In 2022, combined-cycle plants produced about 33.8 percent of US utility-scale generation, and single-cycle combustion turbines about 3.6 percent. That is a share of energy, not a capacity factor.

### d3q10 — knowledge check, level 2

A host site wants electricity and steam from one fuel, using engines. Which configuration matches?

0. A solar array with a cooling tower and no heat host.
1. A dam with a coal pulverizer.
2. A step-up transformer paired with a battery only.
3. A reciprocating engine with heat recovery. That is one of the combined-heat configurations, and it is not this peaker. **(correct)**

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

0. A solar photovoltaic plant has no turbine. Light frees electrons, and output is zero at night. **(correct)**
1. The turbine is in the inverter, and it spins at 3,600 rpm.
2. Solar uses the same boiler as a coal plant, without the pulverizer.
3. The panels store a full day of steam and release it after sunset.

Explanation: A solar photovoltaic plant has no turbine. Light frees electrons, and there is no output at night.

### d4c2 — checkpoint, level 2

Luis drops a storage slide into the folder: 10 MW and 24 MWh, from a British project. What may you use it for?

0. As Viper Power's required battery size, because every peaker now carries one.
1. As an example from another country. Those sizes are not an ERCOT rating and not a Viper Power rating. **(correct)**
2. As the plant's heat rate, because megawatt-hours divided by hours is efficiency.
3. As the July capacity factor of the national gas-turbine fleet.

Explanation: The 10 MW and 24 MWh project is a British example from the storage film. Those sizes are not an ERCOT rating and not a Viper Power rating.

### d4q1 — knowledge check, level 1

Dana asks for the definition you will use when Priya says the factor is 'low.'

0. Fuel burned divided by the steam pressure.
1. Nameplate voltage divided by hours in the year.
2. Actual energy divided by the energy the plant could have made at its rated capacity for every hour in the period. **(correct)**
3. The price in the expensive hours divided by the price at noon.

Explanation: Capacity factor is actual energy divided by the energy the plant could have made by running at rated capacity for every hour in the period.

### d4q2 — knowledge check, level 2

Which pair is the preliminary 2025 annual national capacity factor?

0. Gas turbines 58.4 percent. Combined cycle 14.1 percent.
1. Both at 23.3 percent, because July and the year match.
2. Nuclear 14.1 percent. Hydro 58.4 percent.
3. Combined cycle 58.4 percent. Gas turbines 14.1 percent. **(correct)**

Explanation: Annual 2025, preliminary: combined cycle 0.584, which is 58.4 percent, and gas turbines 0.141, which is 14.1 percent.

### d4q3 — knowledge check, level 1

Why is a simple-cycle gas turbine's national capacity factor low across the year?

0. It costs more fuel per megawatt-hour, so it is dispatched when power is scarce. It is not low because the plant is forbidden to run. **(correct)**
1. The machines are limited to 14.1 percent of rated voltage.
2. A peaker has no generator, so most of the year it cannot synchronize.
3. Capacity factor and efficiency are the same number, and the efficiency is low by rule.

Explanation: A simple-cycle turbine uses more fuel per megawatt-hour, so it is dispatched when power is scarce. The low factor is that pattern, not a ban on running.

### d4q4 — knowledge check, level 2

Priya says last July the national gas-turbine fleet ran at about a quarter of rating. Which figure is July 2026?

0. 14.1 percent. That is the 2025 annual gas-turbine factor, not the July month.
1. 23.3 percent, preliminary. That is the July 2026 gas-turbine factor. It is higher than the annual figure and still far from baseload. **(correct)**
2. 24.9 percent. That figure is July 2025, not July 2026.
3. 72.3 percent. That is the July 2026 combined-cycle factor, not the gas-turbine factor.

Explanation: July 2026 gas-turbine capacity factor is 0.233, which is 23.3 percent, preliminary. 0.249 is the July 2025 gas-turbine factor. Combined cycle in July 2026 is 0.723. Summer runs harder than the annual average and still far below baseload. Preliminary values can be revised in a later workbook.

### d4q5 — knowledge check, level 2

Priya writes those national factors next to the Viper Power name. What do you change?

0. Nothing. A national fleet factor is the plant's tested factor.
1. Replace them with the British battery's 24 MWh, which is this plant's annual energy.
2. Label them national and preliminary. They are not Viper Power's capacity factor. This lesson does not have the plant's own. **(correct)**
3. Average July 2025 and July 2026 and call the average the plant's guarantee.

Explanation: The national factors are not Viper Power's capacity factor. This week does not include the plant's own factor, so the memo keeps the national label.

### d4q6 — knowledge check, level 1

A night-time peak arrives and the solar contract is the resource Priya hoped would cover it. What can that contract deliver?

0. Full output, because panels store the noon energy inside the cells.
1. Output from a small steam turbine under the array.
2. The same megawatts as a dam, because both are renewable.
3. Nothing from the sun. Solar photovoltaic has no turbine and no output at night. **(correct)**

Explanation: Solar photovoltaic has no turbine and no output at night. The cells do not store the next day's peak.

### d4q7 — knowledge check, level 2

Luis quotes the wind clip's capture limit as if it were a capacity factor. What is the limit?

0. 59.3 percent of the wind's kinetic energy. Some air has to keep moving. It is not a capacity factor and not a market price. **(correct)**
1. 14.1 percent, the annual gas-turbine capacity factor.
2. 100 percent, if the turbine is tall enough.
3. 3.3 percent, the 2022 solar share of generation.

Explanation: The Betz limit in the wind film is 59.3 percent of the wind's kinetic energy. It is a capture limit, not a capacity factor and not a price.

### d4q8 — knowledge check, level 2

A battery and a gas turbine can both cover a short peak. What is the difference the storage clip supports?

0. The battery can only respond after a steam cycle is warm.
1. A battery can change output faster than a rotating machine that has to spin up. An empty battery cannot cover the next hour. **(correct)**
2. A battery raises the plant's heat rate by storing steam.
3. A battery is not dispatchable, even when it is charged.

Explanation: The storage film says a battery can react faster than a rotating machine. An empty battery has nothing left for the next hour.

### d4q9 — knowledge check, level 2

Your hypothetical unit, not the plant, produced 120,000 MWh from a 100 MW rating over 8,760 hours. What capacity factor do you report?

0. 8.3 percent, because 100 divided by 1,200 is the factor.
1. 72.3 percent, the July combined-cycle figure.
2. 13.7 percent. Maximum energy is 876,000 MWh, and 120,000 divided by that is 0.137. **(correct)**
3. 120 percent, because the energy is larger than the rating.

Explanation: 100 × 8,760 = 876,000 MWh maximum. 120,000 / 876,000 = 13.7 percent. The unit is hypothetical.

### d4q10 — knowledge check, level 2

Dana asks you to label the resources in the memo without mixing the words. Which set is right?

0. A peaker runs most hours, baseload runs only in shortages, and every wind plant is dispatchable.
1. Intermediate means the plant has an inverter. Baseload means the fuel is coal.
2. Dispatchable means the resource has a synchronous governor. Solar and batteries both have one.
3. Baseload runs most hours, intermediate runs many hours, and a peaker runs when power is scarce. Dispatchable means the operator or the market can choose the hours. Wind and solar follow the weather. A battery is dispatchable until it is empty. Solar and batteries that connect through an inverter, with no synchronous shaft, are inverter-based resources. **(correct)**

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

0. About 65 MW per unit at standard conditions, and about 330 MW net at 95°F. A prior-owner sheet says about 360 MW. They are different bases. **(correct)**
1. 59 MW and 1,062 MWh. Both are nameplate ratings from the same test.
2. 220 MW and 12 engines. Both describe this yard.
3. 13.8 kV and 60 Hz. Both are the plant's summer capacity.

Explanation: The pair to show is about 65 MW per unit at standard conditions, from the 2024 test, and about 330 MW net at 95°F. A prior-owner sheet says about 360 MW. The 59 MW figure is an exercise input. The 220 MW figure belongs to someone else's animation.

### d5q1 — knowledge check, level 1

The invoice from Monday is back. Priya still needs the units in one sentence.

0. MW and MWh are both voltages, measured an hour apart.
1. MW is the rate of power. MWh is that rate held over hours. **(correct)**
2. MWh is the rate, and MW is the energy left at the end of the day.
3. They differ only by the outdoor temperature.

Explanation: MW is the rate of power. MWh is that rate held over hours.

### d5q2 — knowledge check, level 1

Luis says the 138 kV lines can hold the plant's energy overnight. What is the grid fact?

0. The lines store energy in proportion to their voltage.
1. Storage in the wires is fine for a few hours, then frequency resets.
2. The grid stores almost no electrical energy. An imbalance shows up immediately as frequency. **(correct)**
3. The step-up transformer is the battery for the yard.

Explanation: The grid stores almost no electrical energy. A mismatch moves frequency at once.

### d5q3 — knowledge check, level 1

Someone in Dana's meeting calls the gas turbine a Rankine machine. Which correction is right?

0. Both cycles boil water. The only difference is the fuel truck.
1. Rankine is the gas turbine and Brayton is the condenser.
2. Neither cycle rejects heat. Both convert all of the fuel into electricity.
3. Brayton for the gas turbine: compress, burn, expand. Rankine for a steam plant: boil, expand, condense, pump. **(correct)**

Explanation: Brayton for the gas turbine. Rankine for the steam plant. Viper Power is the Brayton machine.

### d5q4 — knowledge check, level 1

The vendor from Wednesday is in the meeting. What does a heat-recovery steam generator add?

0. A heat-recovery steam generator and a steam turbine, so exhaust heat becomes more megawatts. This plant's description does not include one. **(correct)**
1. A second gas compressor that burns a second fuel.
2. A cooling tower that replaces the generator.
3. An inverter that stores the exhaust.

Explanation: A heat-recovery steam generator turns exhaust into steam for a second turbine. The plant description you are defending has none.

### d5q5 — knowledge check, level 1

Priya asks what combined heat and power is, in one line.

0. Two plants on one invoice, with the heat thrown away at both.
1. Electricity plus useful heat or steam from one fuel, for a host that wants the heat. **(correct)**
2. A peaker that runs only in winter so the stack stays cool.
3. A battery charged from a condenser.

Explanation: Combined heat and power is electricity plus useful heat or steam from one fuel.

### d5q6 — knowledge check, level 2

Why does a simple-cycle peaker's national capacity factor stay low even though the machine can run?

0. Because the grid frequency forbids operation above a few hundred hours.
1. Because a peaker has no generator.
2. Because it costs more fuel per megawatt-hour, so it runs in the hours when that fuel is worth paying for. **(correct)**
3. Because capacity factor is the generator voltage.

Explanation: The machine costs more fuel per megawatt-hour, so it runs when the system is willing to pay for that. The factor is not a ban on operating.

### d5q7 — knowledge check, level 2

A battery is offered as a substitute for the next short peak. What can you say from this week?

0. A battery is slower than a steam cycle, so it cannot cover a short peak.
1. A battery's size in a British example is the size this plant must install.
2. A battery replaces the scheduling entity, so the plant no longer needs one.
3. A battery can move energy across hours and can move faster than a rotating machine. An empty battery cannot cover the next hour. Which product it may offer is a scheduling-entity question. **(correct)**

Explanation: A battery can move energy across hours and can move faster than a rotating machine. Empty storage cannot cover the next hour, and the product it may offer is a question for the scheduling entity.

### d5q8 — knowledge check, level 1

What voltages do you write on the one-page diagram?

0. 60 Hz at the generator and 50 Hz in the yard.
1. 13.8 kV at the generator and 138 kV in the switchyard. **(correct)**
2. 138 kV at the generator and 13.8 kV on the transmission side.
3. The example voltages from the Monday film, because they match every plant.

Explanation: The generator nameplate figure used this week is 13.8 kV. The switchyard figure is 138 kV.

### d5q9 — knowledge check, level 2

How do you describe the machines and the transformers in one breath?

0. Six GE MS7001B units on natural gas only. Documents also say 7B, 7E, and 7B/E, so the hardware is a confirmation item. Three step-up transformers, two generators each, so one transformer outage takes two units. **(correct)**
1. Twelve engines and one shared stack, as in the optional animation.
2. Six units, each with its own transformer, so a transformer outage trips one unit.
3. Six steam boilers sharing one condenser.

Explanation: Six GE MS7001B units, gas only, with 7B, 7E, and 7B/E all appearing in the documents, so the hardware is still a confirmation item. Three step-up transformers serve six units, two generators each.

### d5q10 — knowledge check, level 2

Why can a standard-condition megawatt and a hot-day net megawatt both be honest?

0. Because megawatts and megawatt-hours are the same unit.
1. Because the generator voltage changes from 13.8 kV to 60 Hz on a hot day.
2. Hot inlet air is less dense, so mass flow and output fall. Net also subtracts the plant's own use. About 65 MW per unit at standard conditions and about 330 MW net at 95°F are different bases. **(correct)**
3. Physics requires the two figures to match, so one of them is a typo.

Explanation: Hot inlet air is less dense, so compressor mass flow and output fall. Net also subtracts auxiliaries. The 65 MW and 330 MW approximates are different bases.

### d5q11 — knowledge check, level 2

Who is on the far side of the 138 kV breakers, and what is still open?

0. The scheduling entity owns the breakers and switches them alone.
1. A condenser operator switches the yard from the cooling tower.
2. The plant exports at 13.8 kV with no transformer and no neighbor.
3. Plant documents call it a transmission service provider interface at 138 kV, with a backfeed practice. Confirm who performs the switching. The one-line is not in this course pack. **(correct)**

Explanation: The 138 kV yard is the transmission service provider interface, and the notes include a backfeed practice. Who switches is a confirmation item because the one-line is not in this course pack.

### d5q12 — knowledge check, level 1

Dana asks who calls ERCOT. What is a Qualified Scheduling Entity?

0. A market participant qualified under Protocol Section 16 to communicate with ERCOT for resource entities and load-serving entities and to settle payments and charges with ERCOT. **(correct)**
1. The transmission owner who racks out a breaker.
2. The generator's exciter.
3. The regional entity that writes the reliability standards.

Explanation: A Qualified Scheduling Entity is a market participant qualified under Protocol Section 16 to communicate with ERCOT for resource entities and load-serving entities and to settle with ERCOT.

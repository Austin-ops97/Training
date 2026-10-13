> Historical Week 1 review. For the current course and subsequent corrections (60 Hz, AC nameplate context, governor/excitation, and storage), see ../textbook/review.md.

# Source traceability

Status values:

- **Verified 2026-10-12** — a public page or workbook was opened on that date and the claim matches it.
- **Inventory** — the claim is the classroom inventory's own statement (lesson-source map, discrepancy list, gap list, or an inventory row). The workbook was read for this package. It is not republished here.
- **Taught as a flag** — the lesson tells the student not to treat the figure as a Viper Power fact.
- **Not used** — present in a source and deliberately left out of Week 1.

The prior-owner press-release reference (inventory key OWNER_PR) is withheld. It is not linked.

Inventory ids in this file stay in the evidence package. Learner-facing lessons and the explanations returned after a quiz do not print them. Attribution for public pages sits in each lesson's sources panel.

## Plant facts used in Week 1

| Claim | Taught in | Source | Status |
| --- | --- | --- | --- |
| Six units, GE MS7001B (7B/E), pipeline natural gas only, about 330 MW net at 95°F in SOP 029, ERCOT peaker dispatched through a QSE and monitored by a remote operations center | Day 5 `plant`; Day 3 application | Lesson-source map C01.1.1. SOP manual is inventory S157. | Inventory |
| Three capacity bases: about 330 MW net at 95°F, prior-owner about 360 MW, 2024 test about 65 MW ISO per unit | Day 3, Day 5, exercises | Discrepancy D11. 2024 test is inventory S010, cited by the map under C02.2.2. | Inventory |
| Documents use 7B, 7E, and 7B/E. The mechanical manual in the library is the MS7001B book. | Day 3, Day 5 | Discrepancy D12. Manual is S175 (GEK 110135 Volume II). | Inventory |
| GE manuals describe older controls and liquid fuel. The plant notes are gas-only TTS on an Allen-Bradley PLC-5. | Day 3, Day 5 | Discrepancy D09. PLC-5 is also in lesson-source map C02.5.2. Operator training describing LEC is S165. | Inventory |
| CT6 generator nameplate records 13.8 kV and 71,889 kVA. The quiz uses 13.8 kV only. | Day 1 note, Day 5 | Inventory S105. Lesson-source map C05.1.1 states the same 13.8 kV and 71,889 kVA. | Inventory |
| Switchyard coupling-capacitor voltage transformer sheet records 138 kV. | Day 5 | Inventory S136 (Kuhlman/ABB SSVT-650 test data, 138 kV). | Inventory |
| Three-winding 138/13.8/13.8 kV GSUs, two generators each, GSU1–GSU3. One transformer outage takes two units. The plant one-line is not in the library. | Day 5 | Lesson-source map C05.2.1 objective. Gap G02: electrical one-lines are missing. | Inventory |
| 138 kV yard is the transmission service provider interface. SOP 017 covers 138 kV backfeed. Who switches is a confirmation item. | Day 5 | Lesson-source map C05.2.4. SOP 017 is inside S157. | Inventory |
| Summer weatherization file uses an internal 15 May date, stricter than the PUCT 1 June date. Pointed at, not taught as a procedure. | Day 5 outage callout | S008. Discrepancy D17. | Inventory |
| Drone and install photos S166–S171 exist in the library and are not in this course pack. The lesson says the photos are absent. It does not print these ids. | Day 5 intro and exercise | Inventory rows S166–S171. | Inventory |
| 59 MW × 6 × 3 h = 1,062 MWh | Day 1 exercise | Course outline exercise input. Not an inventory nameplate. | Taught once, as the problem's given |

## Electricity fundamentals added in rev2

Reviewed 12 October 2026. Learner text states the relations. The URLs stay in the Day 1 sources panel.

| Claim | Taught in | Source | Status |
| --- | --- | --- | --- |
| Charge is conserved. Directly observed charges are integer multiples of the electron charge. OpenStax prints \|q_e\| = 1.60×10⁻¹⁹ C. | Day 1 `charge-current` | OpenStax College Physics 2e, 18.1, https://openstax.org/books/college-physics-2e/pages/18-1-static-electricity-and-charge-conservation-of-charge | Verified 2026-10-12 |
| The elementary charge is the exact SI defining constant e = 1.602176634×10⁻¹⁹ C. Milli is 10⁻³ and micro is 10⁻⁶. The coulomb, volt, ohm, and watt are SI units. | Day 1 charge and unit formulas | BIPM SI Brochure page, https://www.bipm.org/en/publications/si-brochure , opened 12 October 2026. It points to the 9th edition (2019), which is the edition that fixes e. The lesson tells the reader that OpenStax rounds the same charge to 1.60×10⁻¹⁹ C. | Brochure page opened 2026-10-12. The exact digits are the 2019 defining constant, not a measurement made for this course. |
| Potential difference is energy per unit charge. 1 V = 1 J/C. A 13.8 kV nameplate is 13,800 J per coulomb. | Day 1 `voltage-circuits`, d1q3 | OpenStax College Physics 2e, 19.1, https://openstax.org/books/college-physics-2e/pages/19-1-electric-potential-energy-potential-difference | Verified 2026-10-12 |
| I = ΔQ/Δt and 1 A = 1 C/s. An ampere is the SI unit of current. | Day 1 `charge-current`, checkpoint d1c1 | OpenStax College Physics 2e, 20.1, https://openstax.org/books/college-physics-2e/pages/20-1-current | Verified 2026-10-12 |
| For an ohmic conductor, I = V/R. 1 Ω = 1 V/A. Resistance of a metal rises with temperature. | Day 1 `ohm`, d1q5 | OpenStax College Physics 2e, 20.2, https://openstax.org/books/college-physics-2e/pages/20-2-ohms-law-resistance-and-simple-circuits | Verified 2026-10-12 |
| R = ρ L / A, with ρ in Ω·m. Table 20.1 at 20°C: silver 1.59×10⁻⁸, copper 1.72×10⁻⁸, aluminum 2.65×10⁻⁸ Ω·m. Resistivity of a metal increases with temperature. | Day 1 `ohm`, d1q2, d1q8 | OpenStax College Physics 2e, 20.3, Table 20.1, https://openstax.org/books/college-physics-2e/pages/20-3-resistance-and-resistivity | Verified 2026-10-12 |
| P = IV for a device. For a resistor, P = I²R = V²/R. Energy E = Pt. 1 kWh = 3.6×10⁶ J. The illustrative line (0.053 Ω at 1,000 A) gives 53 kW and 1.908×10⁸ J in one hour. | Day 1 `power-heat`, d1q4, d1q9, d1q10 | OpenStax College Physics 2e, 20.4, https://openstax.org/books/college-physics-2e/pages/20-4-electric-power-and-energy | Verified 2026-10-12. The line numbers are a teaching example, not a plant measurement. |
| Series: the same current, voltages add, R = R1 + R2 + R3. Parallel: the same voltage across each branch, currents add, and the equivalent resistance is the reciprocal sum. | Day 1 `series-parallel`, d1q6, d1q7 | OpenStax College Physics 2e, 21.1, https://openstax.org/books/college-physics-2e/pages/21-1-resistors-in-series-and-parallel | Verified 2026-10-12 |
| A fuse or breaker is rated in amperes and limits current so heating does not continue in the protected conductor. | Day 1 `power-heat` | OpenStax 20.1 and 20.4 discuss fuses and breakers as current-limiting devices. The lesson does not invent a trip setting. | Verified 2026-10-12 for the rating statement. No plant breaker setting is used. |

## Public sources checked for this lesson

| Claim | Taught in | Source | Status |
| --- | --- | --- | --- |
| Lower 48 has three interconnections: Eastern, Western, and ERCOT (most of Texas). ERCOT is the balancing authority, the interconnection, and the regional transmission organization as one entity. Supply must match demand. NERC writes mandatory standards; FERC approves them. | Day 2 `path` | EIA, "Electricity explained: How electricity is delivered to consumers," https://www.eia.gov/energyexplained/electricity/delivery-to-consumers.php | Verified 2026-10-12 |
| Generators induce current by moving a magnet relative to a coil. A prime mover supplies the spin. Photovoltaic cells have no turbine. Steam turbines, combined cycle, and single-cycle combustion turbines are described as shares of generation (2022 data on the page: steam about 42 percent, combined cycle about 33.8 percent, single-cycle combustion turbines about 3.6 percent). | Day 2, Day 3 | EIA, "Electricity explained: Electricity generation," https://www.eia.gov/energyexplained/electricity/how-electricity-is-generated.php (page updated 31 October 2023, 2022 data) | Verified 2026-10-12 |
| Efficiency percent = 3,412 / heat rate. EIA examples 10,500 Btu/kWh ≈ 33 percent and 7,500 Btu/kWh ≈ 45 percent. | Day 3 level 3 | EIA FAQ "What is the efficiency of different types of power plants?", https://www.eia.gov/tools/faqs/faq.php?id=107&t=3 . The page states 3,412 Btu per kWh, and the 10,500 and 7,500 examples. The arithmetic is checked in [calculations.md](calculations.md). | Verified 2026-10-12. Not a Viper Power heat rate. |
| Annual 2025 natural-gas combined cycle capacity factor 0.584 (58.4 percent). Gas turbines 0.141 (14.1 percent). July 2026 gas turbines 0.233 (23.3 percent) and combined cycle 0.723 (72.3 percent). July 2025 gas turbines were 0.249 (24.9 percent) and are taught only as that earlier July. 2024 and earlier final; 2025 and 2026 preliminary. Months through July 2026. | Day 4 | EIA Electric Power Monthly Table 6.07.A workbook, downloaded for this lesson. National utility-scale fossil generators, not ERCOT-only and not Viper Power. | Verified 2026-10-12 against the workbook |
| Annual 2025 nuclear capacity factor 0.910 (91.0 percent). Hydro 0.353 (35.3 percent). 2025 preliminary. | Day 2 | EIA Electric Power Monthly Table 6.07.B, same workbook. | Verified 2026-10-12 against the workbook |
| CHP produces electricity and useful thermal energy. CHP can exceed 80 percent, compared with about 50 percent for typical separate electricity plus an on-site boiler. Configurations include a combustion turbine or reciprocating engine with heat recovery, and a steam boiler with a steam turbine. | Day 3 | EPA combined heat and power page, https://www.epa.gov/chp/what-chp | Verified 2026-10-12 |
| ERCOT serves more than 27 million Texas customers, about 90 percent of state load, and is overseen by the PUCT and the Texas Legislature. The about page does not say ERCOT owns the plants. | Day 2, Day 5 | https://www.ercot.com/about | Verified 2026-10-12 |
| The short ERCOT video says ERCOT dispatches generation, balances generation and load, and does not own the assets. It does not define a QSE. | Day 5 `video-ercot` | V14, channel ERCOTISO, id `8aldmvik3aU`. See [videos.md](videos.md). | oEmbed verified 2026-10-12. Spoken review from the public watch page. Timed captions not retrieved. |
| A QSE is a market participant qualified by ERCOT under Section 16 to communicate with ERCOT for resource entities and load-serving entities and to settle payments and charges. Energy is transmitted through the ERCOT system only through a QSE. | Day 5 sources panel. The teaching paragraph does not carry the URL. | Section 2, Definitions, document header August 1, 2026: https://www.ercot.com/files/docs/2024/06/28/02-080126_Nodal.docx . Section 1.6.2, same header date: https://www.ercot.com/files/docs/2023/01/26/01-080126_Nodal.docx . Both linked from https://www.ercot.com/mktrules/nprotocols/current and opened 12 October 2026. | Verified 2026-10-12 against those files |
| QSEs submit bids and offers, a current operating plan, and ancillary-service offers, and they settle with ERCOT. | Day 5 | ERCOT QSE page, https://www.ercot.com/services/rq/qse | Verified 2026-10-12 |
| PUCT oversees the ERCOT market. NERC standards still exist. Do not claim FERC has no role. A 2014 protocol excerpt filed at the PUCT described the ERCOT system as under PUCT jurisdiction and not synchronously tied to the Eastern or Western interconnections. | Day 5 | 2026 about page and EIA delivery page for the sentence students may say. The 2014 excerpt is labeled historical wording. | Verified 2026-10-12 for the current pages. 2014 excerpt is historical. |

## Video claims that are comparison material

| Claim | Taught in | Source | Status |
| --- | --- | --- | --- |
| Generation, transmission, distribution, 60 Hz, and supply matching demand | Day 1 V01 | Practical Engineering, `v1BMWczn7JM` | oEmbed verified. Watch-page review. Not a NERC standard. |
| Alternating current, transformers, and why raising voltage cuts I²R loss | Day 1 V02 | Crash Course, `9kgzA0Vd8S8` | oEmbed verified. Example voltages are not plant voltages. |
| Coal plant: fuel handling, boiler, feedwater treatment. Condenser is completed by V05. | Day 2 V03, V05 | saVRee `eqn0VBVWS50`; Enerdynamics `V5cpJwiF0u4` | oEmbed verified. Do not memorize the boiler pressure in the coal video. |
| Fission replaces the fire. On those pressurized-water units, reactor water and turbine steam are separate. | Day 2 V04 | ENGIE Belgium `jpDRfaWYk3I` | oEmbed verified. Belgian temperatures and rod time are not a template for every reactor. Viper Power is not a Rankine plant. |
| Compressor, combustor, turbine, generator | Day 3 V06 | GE Vernova `2Jm5RVHLlcQ` | oEmbed verified. Not a Viper Power unit. "Over 3,000 RPM" is not a setpoint. |
| Heat-recovery steam generator and a second turbine | Day 3 V07 | DTE Energy `wKSaIkeYyF4` | oEmbed verified. The machine on screen is a combined-cycle 7HA at another utility. Do not copy its weight. |
| An engine can make electricity and useful heat | Day 3 V08 | INNIO `MXlfYXnlSgA` | oEmbed verified. Marketing counts are not engineering data. |
| Many engines at one site | Day 3 V09 | Wärtsilä `vxb6UGXGv40` | oEmbed only. Not required. Not a quiz source. |
| Dams, run-of-river, pumped storage, and dam-failure consequences | Day 4 V10 | Student Energy `q8HmRLCgDAI` | oEmbed verified. |
| Blades, generator, yaw, intermittency, Betz limit stated as 59.3 percent | Day 4 V11 | TED-Ed `xy9nj94xvKA` | oEmbed verified. Do not adopt a "cheapest source" line as a current market fact. |
| Photovoltaic cell: light frees electrons. No turbine. | Day 4 V12 | TED-Ed `xKxrkht7CpY` | oEmbed verified. Efficiency percentages in the clip are from the time it was made. |
| Storage can react faster than a rotating machine | Day 4 V13 | Ecotricity `UVAXkzCVd2s` | oEmbed verified. Project sizes are British, not ERCOT and not Viper Power. |

## Explicitly not copied into Week 1

Setpoints, relay settings, tag numbers, permit numbers, drawing numbers, device passwords, serial numbers, and the withheld prior-owner press-release URL. Gap-list items other than the missing one-line (G02), which is named so students do not invent a drawing.

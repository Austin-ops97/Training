# Source traceability

Status values:

- **Verified 2026-10-12** — a public page or workbook was opened on that date and the claim matches it.
- **Inventory** — the claim is the classroom inventory's own statement (lesson-source map, discrepancy list, gap list, or an inventory row). The workbook was read for this package. It is not republished here.
- **Taught as a flag** — the lesson tells the student not to treat the figure as a Viper Power fact.
- **Not used** — present in a source and deliberately left out of Week 1.

The prior-owner press-release reference (inventory key OWNER_PR) is withheld. It is not linked.

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
| Drone and install photos S166–S171 exist in the library and are not in this course pack. | Day 5 intro and exercise | Inventory rows S166 and the photo series named in the lesson. | Inventory |
| Orientation mentions relocation and commissioning around 2018. That file is Revision 0 (June 2023) and needs a tool check. No prior-site name is used. | Day 5 flag | Lesson-source map C01.1.1 objective and gap note. Inventory S162. | Inventory. Year is an orientation statement, not a nameplate. |
| 59 MW × 6 × 3 h = 1,062 MWh | Day 1 exercise | Course outline exercise input. Not an inventory nameplate. | Taught as a flag |

## Public sources checked for this lesson

| Claim | Taught in | Source | Status |
| --- | --- | --- | --- |
| Lower 48 has three interconnections: Eastern, Western, and ERCOT (most of Texas). ERCOT is the balancing authority, the interconnection, and the regional transmission organization as one entity. Supply must match demand. NERC writes mandatory standards; FERC approves them. | Day 1 | EIA, "Electricity explained: How electricity is delivered to consumers," https://www.eia.gov/energyexplained/electricity/delivery-to-consumers.php | Verified 2026-10-12 |
| Generators induce current by moving a magnet relative to a coil. A prime mover supplies the spin. Photovoltaic cells have no turbine. Steam turbines, combined cycle, and single-cycle combustion turbines are described as shares of generation (2022 data on the page: steam about 42 percent, combined cycle about 33.8 percent, single-cycle combustion turbines about 3.6 percent). | Day 1, Day 3 | EIA, "Electricity explained: Electricity generation," https://www.eia.gov/energyexplained/electricity/how-electricity-is-generated.php (page updated 31 October 2023, 2022 data) | Verified 2026-10-12 |
| Efficiency percent = 3,412 / heat rate. EIA examples 10,500 Btu/kWh ≈ 33 percent and 7,500 Btu/kWh ≈ 45 percent. | Day 3 level 3 | EIA FAQ "What is the efficiency of different types of power plants?", https://www.eia.gov/tools/faqs/faq.php?id=107&t=3 . The page states 3,412 Btu per kWh, and the 10,500 and 7,500 examples. The arithmetic is checked in [calculations.md](calculations.md). | Verified 2026-10-12. Not a Viper Power heat rate. |
| Annual 2025 natural-gas combined cycle capacity factor 0.584 (58.4 percent). Gas turbines 0.141 (14.1 percent). July 2026 gas turbines 0.249 (24.9 percent) and combined cycle 0.723 (72.3 percent). 2024 and earlier final; 2025 and 2026 preliminary. Months through July 2026. | Day 4 | EIA Electric Power Monthly Table 6.07.A workbook, downloaded for this lesson. National utility-scale fossil generators, not ERCOT-only and not Viper Power. | Verified 2026-10-12 against the workbook |
| Annual 2025 nuclear capacity factor 0.910 (91.0 percent). Hydro 0.353 (35.3 percent). 2025 preliminary. | Day 2 | EIA Electric Power Monthly Table 6.07.B, same workbook. | Verified 2026-10-12 against the workbook |
| CHP produces electricity and useful thermal energy. CHP can exceed 80 percent, compared with about 50 percent for typical separate electricity plus an on-site boiler. Configurations include a combustion turbine or reciprocating engine with heat recovery, and a steam boiler with a steam turbine. | Day 3 | EPA combined heat and power page, https://www.epa.gov/chp/what-chp | Verified 2026-10-12 |
| ERCOT serves more than 27 million Texas customers, about 90 percent of state load, and is overseen by the PUCT and the Texas Legislature. The about page does not say ERCOT owns the plants. | Day 1, Day 5 | https://www.ercot.com/about | Verified 2026-10-12 |
| The short ERCOT video says ERCOT dispatches generation, balances generation and load, and does not own the assets. It does not define a QSE. | Day 5 `video-ercot` | V14, channel ERCOTISO, id `8aldmvik3aU`. See [videos.md](videos.md). | oEmbed verified 2026-10-12. Spoken review from the public watch page. Timed captions not retrieved. |
| A QSE is a market participant qualified by ERCOT under Section 16 to communicate with ERCOT for resource entities and load-serving entities and to settle payments and charges. Energy is transmitted through the ERCOT system only through a QSE. | Day 5 | ERCOT Nodal Protocols compilation dated 28 August 2026, Section 2 definition and Section 1.6.2. Current protocols index: https://www.ercot.com/mktrules/nprotocols/current | Verified 2026-10-12 against that compilation |
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

# Final requested clarity and precision pass

Applied the user's supplied chapter-by-chapter clarity recommendations and six final precision refinements. The chapter order, slugs, prerequisites, section anchors, 32 chapter quiz IDs and correct-answer positions, and all video placements remain intact. Profile progress, saved answers, authentication, and storage remain intact. The progress API also accepts queued results from the prior review so historical saves cannot block later work.

| Chapter | Applied changes |
| --- | --- |
| 1 | Shaft definition; nucleus neutron qualification; insulation wording; early duty/boundary/limit definitions; chemical-energy answer B. |
| 2 | DC/AC introduced before use; voltage question clarified; backfeed/isolation defined; motor-operated valve explained and application question bounded. |
| 3 | Instantaneous notation, RMS, and squared current explained; transmission introduction and example labels clarified. |
| 4 | Coil/winding, prime mover/torque, grid, governor, three-phase offset, load angle, reactive exchange, apparent power/power factor, line measurements, and isolated-generator distinction clarified; guidance includes speed calculations. |
| 5 | Heat-transfer examples, pressure units, actual/standard gas flow, valve/switch distinction, and required pump flow/pressure. |
| 6 | Consistent complete-engine/turbine-section labels; shaft balance, self-sustaining definition, plant-case introduction, hypothetical values, and ideal Brayton assumptions. |
| 7 | Guide vanes/bleeds, pressure basis, fouling, flame region/liner, airflow paths, lean combustion/dynamics, exhaust treatment, unverified LEC label, and two-effect application with explanatory guidance. |
| 8 | rpm conversion, radial/axial bearing loads, clearances, firing versus exhaust temperature, retrofit/uprate/hot section, and post-generation support question. |
| 9 | Oil air separation, pump inlet/outlet, cooling trains/redundancy, receiver/dryer, bus/breaker/trip supply, and concrete AC/DC distinction. |
| 10 | Thermocouple reference, RTD, mA mapping and midpoint, thermostat example, first-out qualification, and safety-term definitions. |
| 11 | Work-control clearance, purge purpose, FSNL, synchronization, actual versus permitted ramp rate, minimum load, and a six-sentence application with self-contained guidance. |
| 12 | Transformer/core/turns, kV, electrical faults, breaker interruption, energy-conversion caption, impedance, rotating kinetic energy, and evidence-request application. |
| 13 | Steam/condensation, typical condensing-plant qualification, liquid-water plume droplets, bottoming cycle, duct firing, CHP customer, head/inverter/PV array, charge/capacity, and explicit eight-hour storage comparison. |
| 14 | Gross/net example, measurement boundary, nameplate/reference conditions/ISO, heat-rate units and conversion, HHV/LHV, annual capacity factor, and operating-duty definitions. |
| 15 | Bids/offers, commercial positions, contribution margin, cost exclusions, settlement symbols and zero-production result, LMP/hub, energy/ancillary/capacity distinction, and clear application response. |
| 16 | Project definitions and boundaries, records needing confirmation, switching authority, final exercise assumptions, worked 1,200 MWh / $54,000 contribution calculation, and review prompt. |

Across the learner material, example values are described as examples, plant details are tied to available records with verification limitations retained, and development jargon is removed. Project callouts now say “What this means for a plant project.” Video identity, URLs, and placement are unchanged; earlier narration-review status remains distinguished from fresh identity checks.

The accompanying UI request uses a neutral black/gray dark palette, a direct sun/moon header toggle, and a settings gear. Settings opening no longer focuses a font selector. Login uses two native radio-based profile choices instead of a dropdown, so there is no name picker to open automatically. Reading-mode paper palettes remain available.

Validation: the production build and existing regression suite; comparison of all question IDs/answer positions, section anchors, and video placements against the previous commit; live signed-in curriculum/header and signed-out login markup checks. Browser/device interaction and visual checks are unavailable in the managed environment.


Cumulative review update: removed the original question 16 (`c16a`) only from the cumulative review, keeping its Chapter 16 exercise and chapter quiz. Added all 20 questions from the supplied Electrical Basics Quiz with stable `eb01`–`eb20` IDs, explanations, and chapter/section feedback links. The review now has 35 questions. The series-lamp failure is explicitly an open-path failure, the fuse question describes interruption according to its rating rather than preventing every excessive current from beginning, and the grounding question identifies equipment grounding rather than a normal return conductor. Brief supporting lesson explanations cover glass, series-path interruption, inductors/capacitors, nominal US household AC, short circuits, fuses, and equipment grounding. Added primary-source references for these topics. Existing selected answers survive; an old submitted flag does not reveal new answers until the expanded review is complete. Legacy queued answers/results remain accepted by the progress API to preserve synchronization.

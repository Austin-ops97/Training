import type { AnswerItem, ExerciseAnswer } from "@/lib/types";

/**
 * Server-only answer key. Import this from the grade route and from tests.
 * Do not import it from a client component.
 */
export type LessonKey = {
  questions: Record<string, AnswerItem>;
  exercises: Record<string, ExerciseAnswer>;
};

const q = (correctIndex: number, explanation: string): AnswerItem => ({ correctIndex, explanation });

export const answerKey: Record<string, LessonKey> = {
  w1d1: {
    exercises: {
      d1e1: {
        expected: 1062,
        tolerance: 0,
        explanation:
          "6 × 59 MW = 354 MW. 354 MW × 3 h = 1,062 MWh. The 59 MW figure is the exercise input from the course outline. Inventory discrepancy D11 records about 65 MW ISO per unit and about 330 MW net at 95°F. Do not report 1,062 MWh as a measured plant total.",
      },
    },
    questions: {
      d1c1: q(0, "50 MW held for 2 hours is 50 × 2 = 100 MWh. The power is still 50 MW."),
      d1c2: q(
        2,
        "A transformer needs a changing magnetic field. Steady direct current does not keep inducing voltage in the second coil. Crash Course states this, and it is why the grid is alternating current.",
      ),
      d1c3: q(
        3,
        "Say the basis. 59 MW is the given in today's problem. D11's documented approximates are about 65 MW ISO per unit and about 330 MW net at 95°F.",
      ),
      d1q1: q(3, "Power is the rate (MW). Energy is the rate times time (MWh)."),
      d1q2: q(
        1,
        "Practical Engineering and EIA both teach that production and use happen together. There is no large electrical storage in the wires, so a mismatch moves frequency immediately.",
      ),
      d1q3: q(2, "60 Hz means 60 reversals each second. Both Day 1 videos state the North American figure."),
      d1q4: q(
        3,
        "Higher voltage means lower current for the same power. Heating loss follows current squared, so raising voltage cuts line loss. The transformer does not store the energy and it does not set the frequency.",
      ),
      d1q5: q(1, "6 × 59 = 354 MW. 354 × 3 h = 1,062 MWh. The unit of the answer is energy, not power."),
      d1q6: q(
        2,
        "The inventory does not quote 59 MW. D11 quotes about 65 MW ISO per unit and about 330 MW net at 95°F. Keep 59 MW labeled as the exercise input.",
      ),
      d1q7: q(
        3,
        "EIA's delivery page names the Eastern Interconnection, the Western Interconnection, and ERCOT, which covers most of Texas.",
      ),
      d1q8: q(
        1,
        "EIA says ERCOT is unique because the balancing authority, the interconnection, and the regional transmission organization are the same entity and the same physical system. ERCOT does not own every generator. The Day 5 video says it does not own the assets.",
      ),
      d1q9: q(
        2,
        "The prime mover spins the generator. EIA notes that photovoltaic plants do not use a turbine.",
      ),
      d1q10: q(
        3,
        "If load exceeds generation, the rotating machines slow and frequency falls until generation is added or load is removed.",
      ),
      d1q11: q(
        1,
        "Current = power / voltage. Double voltage, half current. Loss follows current squared, so loss falls to one quarter. Crash Course states that relationship. Do not memorize the video's example voltages as plant ratings.",
      ),
      d1q12: q(2, "354 MW for one hour is 354 MWh. Multiplying by 60 would invent a minutes error."),
    },
  },
  w1d2: {
    exercises: {},
    questions: {
      d2c1: q(
        2,
        "The condenser rejects the heat the cycle does not turn into work. The generator delivers electricity. It is not the heat sink for the steam.",
      ),
      d2c2: q(
        3,
        "The ENGIE clip says fission, not a flame, makes the heat, and that on those pressurized-water units the reactor water and the turbine steam are separate circuits.",
      ),
      d2q1: q(1, "Steam plants use the Rankine cycle. Gas turbines use Brayton. That split is the Friday question."),
      d2q2: q(2, "Heat in, expand, reject heat, pump the liquid back. The condenser is the rejection step."),
      d2q3: q(
        3,
        "Both can drive a steam turbine and a generator. The nuclear clip's first point is that the heat source is the difference.",
      ),
      d2q4: q(
        1,
        "Exhaust steam must become water again so the cycle can continue, and the rejected heat has to go somewhere. That is the condenser's job.",
      ),
      d2q5: q(
        2,
        "The saVRee narration says untreated water causes corrosion and deposits, so makeup water is treated and deaerated before it is boiler feedwater.",
      ),
      d2q6: q(
        3,
        "If the plant cannot reject heat, it cannot keep the Rankine cycle in service. Cooling work is megawatt work.",
      ),
      d2q7: q(
        1,
        "Table 6.07.B annual 2025 nuclear capacity factor is 0.910, and the sheet marks 2025 as preliminary. 0.910 is 91.0 percent. 14.1 percent is the gas-turbine figure on Table 6.07.A. 35.3 percent is hydro on 6.07.B.",
      ),
      d2q8: q(
        2,
        "Quote the table, the year, and the word preliminary. It is a national utility-scale statistic, not Viper Power and not an efficiency.",
      ),
      d2q9: q(3, "Enerdynamics' fourth step is cooling the exhaust steam so it can be pumped back to the boiler."),
      d2q10: q(
        1,
        "C01.1.1 describes gas turbines on natural gas. Today's steam equipment is comparison material.",
      ),
      d2q11: q(
        2,
        "Take the separation of circuits. Leave the Belgian temperatures and the 1.3 second figure on those units. Boiling-water reactors are a different arrangement.",
      ),
    },
  },
  w1d3: {
    exercises: {},
    questions: {
      d3c1: q(3, "GE Vernova's clip: compressor, then combustor, then turbine, then the generator."),
      d3c2: q(
        1,
        "DTE says the HRSG captures exhaust heat that would otherwise leave the stack and makes steam for a steam turbine without additional fuel for that steam.",
      ),
      d3q1: q(2, "The gas-turbine cycle is the Brayton cycle. Rankine is the steam cycle."),
      d3q2: q(3, "Compressor, combustor, turbine. The generator is driven by the turbine. It is not one of the three gas-path sections."),
      d3q3: q(
        1,
        "The extra electricity comes from recovered exhaust heat, not from deleting the compressor.",
      ),
      d3q4: q(2, "EPA: electricity and useful thermal energy from the same fuel, at high efficiency."),
      d3q5: q(
        3,
        "EPA states CHP can exceed 80 percent, compared with 50 percent for typical separate generation plus an on-site boiler. That is not a Viper Power test result.",
      ),
      d3q6: q(
        1,
        "Simple-cycle, gas only, six frames. The 7HA, the town-heating story, and the 12-engine animation are other plants.",
      ),
      d3q7: q(2, "The weight belongs to the machine in that video. Do not copy another utility's 7HA data onto these units."),
      d3q8: q(3, "Net or gross, and at what ambient temperature. Hot air cuts gas-turbine output."),
      d3q9: q(
        1,
        "EIA's generation page, 2022 data: combined cycle about 33.8 percent of utility-scale generation, single-cycle combustion turbines about 3.6 percent. That is a share of generation, not a capacity factor.",
      ),
      d3q10: q(2, "EPA lists a combustion turbine or reciprocating engine with heat recovery as one of the two common CHP configurations."),
      d3q11: q(
        3,
        "Ask whether that combined-cycle plant can run the gas turbine alone, and at what output. Viper Power has no steam bottoming cycle in the Week 1 description.",
      ),
    },
  },
  w1d4: {
    exercises: {
      d4e1: {
        expected: 13.7,
        tolerance: 0.05,
        explanation:
          "Hypothetical, not Viper Power. Hours in a non-leap year: 365 × 24 = 8,760. Maximum energy = 100 MW × 8,760 h = 876,000 MWh. Capacity factor = 120,000 / 876,000 = 0.136986, which is 13.7 percent to one decimal place.",
      },
    },
    questions: {
      d4c1: q(1, "EIA and the solar video: photovoltaic cells have no turbine. Electrons are the moving parts."),
      d4c2: q(2, "The 10 MW and 24 MWh figures are Ecotricity's British project. They are not an ERCOT rating and not a 7B rating."),
      d4q1: q(
        3,
        "Capacity factor = actual MWh / (rated MW × hours in the period). It is not a heat rate and not a voltage.",
      ),
      d4q2: q(
        1,
        "Table 6.07.A annual 2025, preliminary: combined cycle 0.584 = 58.4 percent, gas turbines 0.141 = 14.1 percent.",
      ),
      d4q3: q(
        2,
        "Higher fuel use per megawatt-hour means the unit is in the money in fewer hours. Physics does not cap it at a few hours, and a low factor is not proof the unit is broken.",
      ),
      d4q4: q(
        3,
        "July 2026 gas-turbine capacity factor on the same sheet is 0.249 = 24.9 percent, preliminary. Summer runs harder than the annual average and still far below baseload.",
      ),
      d4q5: q(1, "National utility-scale fossil statistics. Not this plant, and not ERCOT-only."),
      d4q6: q(2, "A photon frees an electron in the cell. There is no shaft, and there is no output at night."),
      d4q7: q(
        3,
        "The wind video states Betz's limit at 59.3 percent. The 15 to 20 percent line is from the solar video and is not a current rating to memorize.",
      ),
      d4q8: q(
        1,
        "The storage video's useful claim is speed and shifting energy in time. It does not say batteries beat a combined cycle on fuel, and this course does not assign an ERCOT ancillary-service award.",
      ),
      d4q9: q(2, "120,000 / (100 × 8,760) = 120,000 / 876,000 = 13.7 percent."),
      d4q10: q(
        3,
        "Student Energy: a dam can release stored water. Run-of-river follows the river. The same video says dam failure can be catastrophic, so the last option is backwards.",
      ),
      d4q11: q(
        1,
        "Value sits in a short list of hours. Annual capacity factor alone does not say the plant failed, and it does not say the plant ran all year.",
      ),
    },
  },
  w1d5: {
    exercises: {
      d5e1: {
        expected: 15.4,
        tolerance: 0.05,
        explanation:
          "6 × 65 = 390 MW. 390 − 330 = 60 MW. 60 / 390 = 0.153846, which is 15.4 percent to one decimal. These are inventory approximates on different bases (D11): about 65 MW ISO per unit, and about 330 MW net at 95°F for the plant. 390 MW is not a documented plant nameplate, and 15.4 percent is not a measured test derate.",
      },
    },
    questions: {
      d5c1: q(
        2,
        "D11 puts about 65 MW ISO per unit (2024 test) next to about 330 MW net at 95°F (SOP 029), and also notes a prior-owner figure of about 360 MW. The 59 MW figure is an exercise input. The 220 MW and 10 MW figures belong to other companies' videos.",
      ),
      d5q1: q(1, "MW is instantaneous power. MWh is power times hours."),
      d5q2: q(2, "Almost no electrical energy is stored in the grid, so imbalance moves frequency immediately."),
      d5q3: q(3, "Brayton is the gas turbine. Rankine is the steam plant."),
      d5q4: q(
        1,
        "The HRSG recovers exhaust heat as steam for another turbine. Same fuel, more megawatts. The condenser still rejects heat on the steam side. The gain is the exhaust that a simple cycle would have thrown up the stack.",
      ),
      d5q5: q(2, "EPA: electricity and useful heat or steam from one fuel input."),
      d5q6: q(
        3,
        "More fuel per megawatt-hour means fewer hours clear. EIA's national gas-turbine capacity factor is the public picture of that pattern.",
      ),
      d5q7: q(
        1,
        "Faster than a rotating machine, and able to move energy to a later hour. Do not invent which ERCOT product they win.",
      ),
      d5q8: q(
        2,
        "S105 records 13.8 kV on the CT6 generator nameplate. S136 records 138 kV on the switchyard voltage-transformer sheet. The Crash Course voltages are teaching examples.",
      ),
      d5q9: q(
        3,
        "C01.1.1: six GE MS7001B (7B/E) units, pipeline natural gas only. D12 says 7B, 7E, and 7B/E all appear, so confirm the hardware.",
      ),
      d5q10: q(
        1,
        "Hot air is less dense, so compressor mass flow falls. Net output also subtracts auxiliaries. D11's two approximates are different bases, not a single nameplate.",
      ),
      d5q11: q(
        2,
        "C05.2.4 identifies a transmission service provider interface and SOP 017 covers 138 kV backfeed. The one-line is a documented gap, so switching authority is a confirmation item, not a guess.",
      ),
      d5q12: q(
        3,
        "ERCOT Nodal Protocols, 28 August 2026, Section 2. The QSE page adds bids, offers, the current operating plan, ancillary services, and settlement. The short ERCOT video does not define the term.",
      ),
      d5q13: q(
        1,
        "C05.2.1: three-winding 138/13.8/13.8 kV GSUs, two generators each, so one transformer outage takes two units. The plant one-line is missing from the library.",
      ),
      d5q14: q(
        2,
        "Frame designation (D12) and which capacity basis is in use (D11) are confirmation items. The other three statements are taught from EIA, the cycle lessons, or ERCOT's about page.",
      ),
    },
  },
};

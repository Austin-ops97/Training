import type { AnswerItem, ExerciseAnswer } from "@/lib/types";

/**
 * Server-only answer key. Import this from the grade route and from tests.
 * Do not import it from a client component.
 */
export type LessonKey = {
  questions: Record<string, AnswerItem>;
  exercises: Record<string, ExerciseAnswer>;
};

const q = (correctChoiceId: string, explanation: string): AnswerItem => ({ correctChoiceId, explanation });

export const answerKey: Record<string, LessonKey> = {
  w1d1: {
    exercises: {
      d1e1: {
        expected: 1062,
        tolerance: 0,
        explanation:
          "6 × 59 MW = 354 MW. 354 MW × 3 h = 1,062 MWh. The 59 MW figure is the given for this problem, not a plant nameplate. Other plant documents use about 65 MW per unit at standard conditions and about 330 MW net at 95°F. Do not report 1,062 MWh as a measured plant total.",
      },
    },
    questions: {
      d1c1: q("d1c1c", "I = Q / t = 180 C / 60 s = 3 A. Current is charge per time, so the coulomb and the second do not get multiplied, and the unit is the ampere."),
      d1c2: q("d1c2a", "Energy = power × time = 50 MW × 2 h = 100 MWh. The machine is still a 50 MW machine. The two hours change the unit from power to energy."),
      d1q1: q(
        "d1q1d",
        "Charge is conserved, so a resistor does not consume it. Ordinary charges come in whole-number multiples of the elementary charge, e = 1.602176634×10⁻¹⁹ C. Current is a different quantity, in amperes, and it flows on a closed path.",
      ),
      d1q2: q(
        "d1q2b",
        "A = 500 mm² = 5.00×10⁻⁴ m². R = ρ L / A = (2.65×10⁻⁸ Ω·m) × (1,000 m) / (5.00×10⁻⁴ m²) = 0.053 Ω. Copper's 1.72×10⁻⁸ would give 0.0344 Ω. Inverting the formula gives about 18.9 Ω. Using 1 m instead of 1,000 m gives 5.3×10⁻⁵ Ω.",
      ),
      d1q3: q(
        "d1q3a",
        "13.8 kV = 13,800 V. For the stated steady potential difference, 1 V = 1 J/C gives 13,800 J/C. This is a voltage, not watts or megawatts. An AC generator nameplate normally gives RMS line-to-line voltage, a different context from this steady example.",
      ),
      d1q4: q(
        "d1q4c",
        "P = I² R = (1,000 A)² × 0.053 Ω = 53,000 W = 53 kW. The product I R = 53 V is the voltage drop, not the power. 53,000 J is the heat in one second. 53 MW would be a thousand times too large.",
      ),
      d1q5: q(
        "d1q5d",
        "Ohm's law at steady conditions: I = V / R = 12 V / 4 Ω = 3 A. Multiplying 12 by 4 gives 48, which is not the current. The ohm is the unit of resistance, not of current.",
      ),
      d1q6: q(
        "d1q6b",
        "Series resistances add: R = 2 Ω + 3 Ω + 7 Ω = 12 Ω. The same current passes through each resistor. The parallel formula is for a different connection.",
      ),
      d1q7: q(
        "d1q7c",
        "Parallel branches share the same two points, so the voltage across each branch is the same. The branch currents add to the total current. Series is the connection where the current is common and the voltages add.",
      ),
      d1q8: q(
        "d1q8a",
        "R = ρ L / A. Increasing L, decreasing A, or increasing ρ each increases R when the others are held fixed. For a typical metal, a lower temperature lowers resistance rather than raising it.",
      ),
      d1q9: q(
        "d1q9b",
        "1 kWh = 1,000 W × 3,600 s = 3,600,000 J = 3.6×10⁶ J. The result is energy, in joules, not power in watts. Dropping the 3,600 s would leave 3.6×10³ J, which is only one kilowatt for one second.",
      ),
      d1q10: q(
        "d1q10d",
        "For the same power, current = power / voltage. Double the voltage and the current is halved. Heating follows current squared, so (1/2)² = 1/4. The line heating falls to one quarter if the resistance is unchanged.",
      ),
      d1q11: q(
        "d1q11a",
        "60 Hz means 60 complete cycles per second. A sinusoidal current changes direction twice per cycle, or 120 times per second. It is not a voltage, heat rate, or description of direct current.",
      ),
    },
  },
  w1d2: {
    exercises: {},
    questions: {
      d2c1: q(
        "d2c1b",
        "The condenser rejects the heat the cycle cannot turn into work. If it cannot do that, the Rankine loop stops even when the boiler is healthy.",
      ),
      d2c2: q(
        "d2c2d",
        "Fission replaces the flame. On the pressurized-water units in the film, reactor water and turbine steam stay apart, and a third circuit cools the condenser. The temperatures and the rod time belong to those units.",
      ),
      d2q1: q("d2q1a", "Rankine is boil, expand, condense, and pump. Brayton is the gas-turbine cycle from tomorrow."),
      d2q2: q(
        "d2q2c",
        "Heat enters at the boiler or at a nuclear steam generator. The condenser throws the leftover heat away. The pump only returns liquid water.",
      ),
      d2q3: q(
        "d2q3d",
        "Both plants end as a steam turbine driving a generator. The heat source is a fire in one case and fission in the other.",
      ),
      d2q4: q("d2q4b", "The condenser turns exhaust steam back into water so the pump can send it around again."),
      d2q5: q("d2q5c", "Raw water in a high-pressure boiler leads to corrosion and deposits. Treatment is there to protect the metal."),
      d2q6: q(
        "d2q6a",
        "If the plant cannot reject heat, it cannot keep making steam power. A cooling-tower outage on a Rankine unit is a megawatt outage.",
      ),
      d2q7: q(
        "d2q7b",
        "The national 2025 nuclear capacity factor is 0.910, which is 91.0 percent, and it is marked preliminary. Hydro on the same sheet is 35.3 percent. Neither figure is an efficiency, and neither is Viper Power.",
      ),
      d2q8: q(
        "d2q8c",
        "Preliminary means a later workbook can revise the figure. It does not turn a national capacity factor into this plant's efficiency.",
      ),
      d2q9: q("d2q9a", "The last step before the pump is to cool the exhaust steam back into liquid water."),
      d2q10: q(
        "d2q10d",
        "Viper Power's Week 1 description is gas turbines on pipeline gas. It is not a Rankine plant, so boiler and cooling-tower scope does not belong on this outage unless a current plant document adds it.",
      ),
      d2q11: q(
        "d2q11c",
        "Before grid connection, the governor changes fuel to regulate shaft speed and the exciter regulates voltage. On a large grid, added torque chiefly increases real power; excitation chiefly influences voltage/reactive output. A transformer changes voltage between windings.",
      ),
    },
  },
  w1d3: {
    exercises: {},
    questions: {
      d3c1: q("d3c1a", "Compressor, combustor, turbine, then a hot stack. That is the simple-cycle gas path."),
      d3c2: q(
        "d3c2c",
        "The heat-recovery steam generator boils water with exhaust heat. The extra steam megawatts do not require a second fuel stream.",
      ),
      d3q1: q("d3q1b", "A simple-cycle gas turbine follows the Brayton path: compress, burn, expand. Rankine is the steam cycle."),
      d3q2: q("d3q2d", "The three gas-path sections are the compressor, the combustor, and the turbine."),
      d3q3: q(
        "d3q3c",
        "A heat-recovery steam generator makes steam from exhaust that would otherwise leave the stack, and a steam turbine turns that steam into more electricity.",
      ),
      d3q4: q("d3q4a", "Combined heat and power adds useful thermal energy: process heat, steam, hot water, or chilled water."),
      d3q5: q(
        "d3q5d",
        "The published comparison is that combined heat and power can exceed 80 percent, against about 50 percent for typical separate electricity plus an on-site boiler. It is not a Viper Power test and not a capacity factor.",
      ),
      d3q6: q(
        "d3q6b",
        "Viper Power is the simple-cycle row. Exhaust heat leaves the stack. The Week 1 description has no steam bottoming cycle.",
      ),
      d3q7: q(
        "d3q7d",
        "The 300-ton machine is someone else's combined-cycle unit. It is on the page so you can see a heat-recovery steam generator. The weight and the frame stay with that unit.",
      ),
      d3q8: q(
        "d3q8b",
        "Ask net or gross, and ask the outdoor condition. About 330 MW net at 95°F and about 65 MW per unit at standard conditions are different bases.",
      ),
      d3q9: q(
        "d3q9a",
        "In 2022, combined-cycle plants produced about 33.8 percent of US utility-scale generation, and single-cycle combustion turbines about 3.6 percent. That is a share of energy, not a capacity factor.",
      ),
      d3q10: q(
        "d3q10c",
        "A reciprocating engine with heat recovery is one combined-heat configuration. It is a different row from this simple-cycle peaker.",
      ),
    },
  },
  w1d4: {
    exercises: {
      d4e1: {
        expected: 13.7,
        tolerance: 0.05,
        explanation:
          "These are practice numbers, not a Viper Power record. Maximum energy is 100 MW × 8,760 h = 876,000 MWh. 120,000 / 876,000 = 0.136986, which is 13.7 percent to one decimal place.",
      },
    },
    questions: {
      d4c1: q(
        "d4c1d",
        "A solar photovoltaic plant has no turbine. Light frees electrons, and there is no output at night.",
      ),
      d4c2: q(
        "d4c2b",
        "The 10 MW and 24 MWh project is a British example from the storage film. Those sizes are not an ERCOT rating and not a Viper Power rating.",
      ),
      d4q1: q(
        "d4q1a",
        "Capacity factor is actual energy divided by the energy the plant could have made by running at rated capacity for every hour in the period.",
      ),
      d4q2: q(
        "d4q2c",
        "Annual 2025, preliminary: combined cycle 0.584, which is 58.4 percent, and gas turbines 0.141, which is 14.1 percent.",
      ),
      d4q3: q(
        "d4q3b",
        "A simple-cycle turbine uses more fuel per megawatt-hour, so it is dispatched when power is scarce. The low factor is that pattern, not a ban on running.",
      ),
      d4q4: q(
        "d4q4d",
        "July 2026 gas-turbine capacity factor is 0.233, which is 23.3 percent, preliminary. 0.249 is the July 2025 gas-turbine factor. Combined cycle in July 2026 is 0.723. Summer runs harder than the annual average and still far below baseload. Preliminary values can be revised in a later workbook.",
      ),
      d4q5: q(
        "d4q5a",
        "The national factors are not Viper Power's capacity factor. This week does not include the plant's own factor, so the memo keeps the national label.",
      ),
      d4q6: q("d4q6c", "Solar photovoltaic has no turbine and no output at night. The cells do not store the next day's peak."),
      d4q7: q(
        "d4q7a",
        "The Betz limit in the wind film is 59.3 percent of the wind's kinetic energy. It is a capture limit, not a capacity factor and not a price.",
      ),
      d4q8: q(
        "d4q8d",
        "The storage film says a battery can react faster than a rotating machine. An empty battery has nothing left for the next hour.",
      ),
      d4q9: q(
        "d4q9c",
        "100 × 8,760 = 876,000 MWh maximum. 120,000 / 876,000 = 13.7 percent. These are practice numbers, not a Viper Power record.",
      ),
      d4q10: q(
        "d4q10b",
        "Baseload runs most hours, intermediate runs many hours, and a peaker runs in the scarce hours. Dispatchable means the hours can be chosen. An inverter-based resource connects through an inverter and has no synchronous shaft.",
      ),
    },
  },
  w1d5: {
    exercises: {
      d5e1: {
        expected: 15.4,
        tolerance: 0.05,
        explanation:
          "6 × 65 = 390 MW. 390 − 330 = 60 MW. 60 / 390 = 0.153846, which is 15.4 percent to one decimal. These are approximates on different bases: about 65 MW per unit at standard conditions, and about 330 MW net at 95°F for the plant. 390 MW is not a documented plant nameplate, and 15.4 percent is not a measured test derate.",
      },
    },
    questions: {
      d5c1: q(
        "d5c1c",
        "The pair to show is about 65 MW per unit at standard conditions, from the 2024 test, and about 330 MW net at 95°F. A prior-owner sheet says about 360 MW. The 59 MW figure is an exercise input. The 220 MW figure belongs to someone else's animation.",
      ),
      d5q1: q("d5q1a", "MW is the rate of power. MWh is that rate held over hours."),
      d5q2: q("d5q2b", "Ordinary wires are not bulk storage, but fields, rotating machinery, and connected storage contain energy. System inflows and outflows still need to balance; a mismatch can move frequency."),
      d5q3: q("d5q3d", "Brayton for the gas turbine. Rankine for the steam plant. Viper Power is the Brayton machine."),
      d5q4: q(
        "d5q4b",
        "A heat-recovery steam generator turns exhaust into steam for a second turbine. The plant description you are defending has none.",
      ),
      d5q5: q("d5q5c", "Combined heat and power is electricity plus useful heat or steam from one fuel."),
      d5q6: q(
        "d5q6a",
        "The machine costs more fuel per megawatt-hour, so it runs when the system is willing to pay for that. The factor is not a ban on operating.",
      ),
      d5q7: q(
        "d5q7d",
        "A battery can move energy across hours and can move faster than a rotating machine. Empty storage cannot cover the next hour, and the product it may offer is a question for the scheduling entity.",
      ),
      d5q8: q("d5q8c", "The generator nameplate figure used this week is 13.8 kV. The switchyard figure is 138 kV."),
      d5q9: q(
        "d5q9b",
        "Six GE MS7001B units, gas only, with 7B, 7E, and 7B/E all appearing in the documents, so the hardware is still a confirmation item. Three step-up transformers serve six units, two generators each.",
      ),
      d5q10: q(
        "d5q10d",
        "Hot inlet air is less dense, so compressor mass flow and output fall. Net also subtracts auxiliaries. The 65 MW and 330 MW approximates are different bases.",
      ),
      d5q11: q(
        "d5q11a",
        "The 138 kV yard is the transmission service provider interface, and the notes include a backfeed practice. Who switches is a confirmation item because the one-line is not in this course pack.",
      ),
      d5q12: q(
        "d5q12b",
        "A Qualified Scheduling Entity is a market participant qualified under Protocol Section 16 to communicate with ERCOT for resource entities and load-serving entities and to settle with ERCOT.",
      ),
    },
  },
};

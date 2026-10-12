import type { Lesson } from "@/lib/types";

export const day1: Lesson = {
  id: "w1d1",
  week: 1,
  day: 1,
  title: "Electricity, then how a plant puts it on the grid",
  summary:
    "Charge, current, voltage, resistance, and power, with the arithmetic worked, and why raising voltage cuts line heating.",
  objectives: [
    "Define charge, current, potential difference, resistance, and power, and use the SI unit with each one.",
    "Use Ohm's law, the resistivity formula, and the series and parallel rules on a simple circuit.",
    "Compute power and heating from P = VI, I²R, and V²/R, and say why a fuse or breaker opens the path.",
    "Separate MW from MWh, and keep a plant figure attached to its unit and its basis.",
  ],
  exercises: [
    {
      id: "d1e1",
      prompt:
        "Six units, each given as 59 MW, run for 3 hours. How many MWh is that? The 59 MW figure is a practice input, not a plant nameplate.",
      unit: "MWh",
      decimals: 0,
    },
  ],
  quizIds: ["d1q1", "d1q2", "d1q3", "d1q4", "d1q5", "d1q6", "d1q7", "d1q8", "d1q9", "d1q10", "d1q11"],
  sources: [
    {
      title: "OpenStax College Physics 2e, electric charge, potential, current, resistance, and power",
      detail:
        "https://openstax.org/books/college-physics-2e/pages/18-1-static-electricity-and-charge-conservation-of-charge , https://openstax.org/books/college-physics-2e/pages/19-1-electric-potential-energy-potential-difference , https://openstax.org/books/college-physics-2e/pages/20-1-current , https://openstax.org/books/college-physics-2e/pages/20-2-ohms-law-resistance-and-simple-circuits , https://openstax.org/books/college-physics-2e/pages/20-3-resistance-and-resistivity , https://openstax.org/books/college-physics-2e/pages/20-4-electric-power-and-energy , and https://openstax.org/books/college-physics-2e/pages/21-1-resistors-in-series-and-parallel . Reviewed 12 October 2026. Charge is conserved, and observed charges are integer multiples of the electron charge (the book uses 1.60×10⁻¹⁹ C). Current is I = ΔQ/Δt and 1 A = 1 C/s. R = ρL/A. Table 20.1 at 20°C lists silver 1.59×10⁻⁸ Ω·m, copper 1.72×10⁻⁸ Ω·m, and aluminum 2.65×10⁻⁸ Ω·m. Power in a resistor is P = IV = I²R = V²/R, and 1 kWh = 3.6×10⁶ J.",
    },
    {
      title: "BIPM, SI Brochure, and the elementary charge",
      detail:
        "https://www.bipm.org/en/publications/si-brochure reviewed 12 October 2026. The coulomb, volt, ohm, and watt are SI units. The elementary charge is the exact defining constant e = 1.602176634×10⁻¹⁹ C. The milli and micro prefixes are 10⁻³ and 10⁻⁶.",
    },
    {
      title: "Practical Engineering, How Does the Power Grid Work?",
      detail:
        "In-lesson video. Generation, transmission, distribution, 60 Hz on the grids in that film, and why supply has to match demand continuously. The closing sponsor message is not part of the lesson.",
    },
    {
      title: "Training problem",
      detail: "Exercise d1e1 uses the inputs written in the prompt: six units, 59 MW, and 3 hours.",
    },
  ],
  questions: [
    {
      id: "d1c1",
      level: 1,
      prompt: "A charge of 180 C passes a point in 60 s. What is the current?",
      choices: [
        { id: "d1c1a", text: "10,800 A, because the charge and the time are multiplied together." },
        { id: "d1c1b", text: "0.33 A, because the time is divided by the charge that passed." },
        { id: "d1c1c", text: "3 A, because current is the charge divided by the time." },
        { id: "d1c1d", text: "180 C, because a current keeps the coulomb as its unit." },
      ],
    },
    {
      id: "d1c2",
      level: 1,
      prompt: "A generator holds 50 MW for 2 hours. How much energy is that?",
      choices: [
        { id: "d1c2a", text: "100 MWh, because 50 MW held for two hours is energy." },
        { id: "d1c2b", text: "25 MWh, because the two hours cut the 50 MW reading in half." },
        { id: "d1c2c", text: "50 MW, because a timed run keeps the power unit on the page." },
        { id: "d1c2d", text: "50 kV, because a two-hour run is reported as electrical pressure." },
      ],
    },
    {
      id: "d1q1",
      level: 1,
      prompt: "Which statement about electric charge is right?",
      choices: [
        { id: "d1q1a", text: "Charge is used up inside a resistor and the generator has to replace it." },
        { id: "d1q1b", text: "Charge is the same quantity as current, and both are measured in amperes." },
        { id: "d1q1c", text: "Charge flows only on an open path, where the conductor has a break." },
        { id: "d1q1d", text: "Charge is conserved, and ordinary amounts come in multiples of the elementary charge." },
      ],
    },
    {
      id: "d1q2",
      level: 2,
      prompt:
        "An illustrative aluminum conductor is 1 km long and has a cross-section of 500 mm². Use ρ = 2.65×10⁻⁸ Ω·m. What is R?",
      choices: [
        { id: "d1q2a", text: "0.0344 Ω, using copper's 1.72×10⁻⁸ Ω·m in place of aluminum." },
        { id: "d1q2b", text: "0.053 Ω, from ρL/A with the area converted to square metres." },
        { id: "d1q2c", text: "18.9 Ω, from turning the formula upside down as A divided by ρL." },
        { id: "d1q2d", text: "5.3×10⁻⁵ Ω, from entering the length as 1 m instead of 1 km." },
      ],
    },
    {
      id: "d1q3",
      level: 2,
      prompt: "A generator nameplate reads 13.8 kV. How much work is that per coulomb of charge?",
      choices: [
        { id: "d1q3a", text: "13,800 J/C, because 13.8 kV is 13,800 V and one volt is one joule per coulomb." },
        { id: "d1q3b", text: "13.8 J/C, because the kilo prefix was left off before the nameplate was read." },
        { id: "d1q3c", text: "13,800 W, because a generator nameplate voltage was read as electric power." },
        { id: "d1q3d", text: "13.8 MW, because the kilo prefix on that voltage was taken as a power unit." },
      ],
    },
    {
      id: "d1q4",
      level: 2,
      prompt: "That same illustrative aluminum line has R = 0.053 Ω and carries 1,000 A. What is the heating power?",
      choices: [
        { id: "d1q4a", text: "53 V, which is current times resistance and is a voltage drop." },
        { id: "d1q4b", text: "53,000 J, which is the heat released in one second, not the power." },
        { id: "d1q4c", text: "53 kW, from I²R with current in amperes and resistance in ohms." },
        { id: "d1q4d", text: "53 MW, from putting a mega prefix on a result that is in kilowatts." },
      ],
    },
    {
      id: "d1q5",
      level: 1,
      prompt: "A resistor has 12 V across it and a resistance of 4 Ω. What is the current?",
      choices: [
        { id: "d1q5a", text: "48 A, because the voltage and the resistance are multiplied." },
        { id: "d1q5b", text: "0.33 A, because the resistance is divided by the voltage." },
        { id: "d1q5c", text: "12 Ω, because the current keeps the resistance as its unit." },
        { id: "d1q5d", text: "3 A, from voltage divided by resistance, with conditions steady." },
      ],
    },
    {
      id: "d1q6",
      level: 1,
      prompt: "Resistors of 2 Ω, 3 Ω, and 7 Ω are connected in series. What is the equivalent resistance?",
      choices: [
        { id: "d1q6a", text: "About 1 Ω, because series resistors use the parallel formula." },
        { id: "d1q6b", text: "12 Ω, because series resistances add to one equivalent." },
        { id: "d1q6c", text: "42 Ω, because the three resistances are multiplied together." },
        { id: "d1q6d", text: "2 Ω, because only the first resistor carries the current." },
      ],
    },
    {
      id: "d1q7",
      level: 1,
      prompt: "What stays the same for resistors connected in parallel?",
      choices: [
        { id: "d1q7a", text: "The current is the same in every branch, and the voltages add." },
        { id: "d1q7b", text: "Each branch resistance falls to zero when the others are connected." },
        { id: "d1q7c", text: "Voltage is the same across each branch, and the branch currents add." },
        { id: "d1q7d", text: "Each branch takes the same power, whatever its resistance is." },
      ],
    },
    {
      id: "d1q8",
      level: 2,
      prompt: "From R = ρL/A, what raises resistance if the other factors stay the same?",
      choices: [
        { id: "d1q8a", text: "A longer conductor, a smaller cross-section, or a higher resistivity." },
        { id: "d1q8b", text: "A shorter conductor, a larger cross-section, or a lower resistivity." },
        { id: "d1q8c", text: "A higher voltage by itself, with length and area left unchanged." },
        { id: "d1q8d", text: "A lower temperature in a typical metal, which raises its resistance." },
      ],
    },
    {
      id: "d1q9",
      level: 1,
      prompt: "How many joules are in 1 kWh?",
      choices: [
        { id: "d1q9a", text: "3.6×10³ J, because the hour is left out of the conversion." },
        { id: "d1q9b", text: "3.6×10⁶ J, because a kilowatt for one hour is that many joules." },
        { id: "d1q9c", text: "1,000 J, because the kilo prefix is the only factor used." },
        { id: "d1q9d", text: "3.6×10⁶ W, because the converted result is still a power." },
      ],
    },
    {
      id: "d1q10",
      level: 2,
      prompt: "The same power is sent down a line, and the voltage is doubled. Heating follows I²R. What happens to that heating?",
      choices: [
        { id: "d1q10a", text: "The current doubles, so heating in the line resistance quadruples." },
        { id: "d1q10b", text: "The current is unchanged, so the heating in the line stays put." },
        { id: "d1q10c", text: "The current is halved, so the heating falls only to one half." },
        { id: "d1q10d", text: "The current is halved, so the heating falls to one quarter." },
      ],
    },
    {
      id: "d1q11",
      level: 1,
      prompt: "What does 60 Hz mean on the grids in this lesson?",
      choices: [
        { id: "d1q11a", text: "Alternating current reverses direction 60 times each second." },
        { id: "d1q11b", text: "Transmission voltage is 60 kV on the lines used in this lesson." },
        { id: "d1q11c", text: "The heat rate of these grids is 60, which is why they use that label." },
        { id: "d1q11d", text: "Direct current pulses 60 times a second, and a transformer steps it up." },
      ],
    },
  ],
  sections: [
    {
      id: "intro",
      title: "The product is electricity",
      minutes: 3,
      level: 1,
      kind: "intro",
      blocks: [
        {
          type: "p",
          text: "A power plant's product is electric charge pushed through a circuit. Charge, current, voltage, resistance, and power are different quantities. Put the wrong unit on a figure and the rest of the calculation follows the wrong quantity.",
        },
        {
          type: "p",
          text: "Today's job is those quantities, with the arithmetic worked in the sections. Viper Power supplies the plant figures, and each one stays attached to its unit and its basis. A practice problem uses the numbers written in the problem.",
        },
      ],
    },
    {
      id: "charge-current",
      title: "Charge and current",
      minutes: 8,
      level: 1,
      kind: "core",
      blocks: [
        {
          type: "p",
          text: "Electric charge is a property of matter. Like charges repel, and unlike charges attract. Charge is conserved: a circuit does not use it up. It moves. Charges that can be observed directly come in whole-number multiples of the elementary charge. A textbook rounds that charge to 1.60×10⁻¹⁹ C. The SI definition fixes it exactly at 1.602176634×10⁻¹⁹ C. You do not need the digits memorized. You need the fact that charge is quantised, not a continuous smear.",
        },
        {
          type: "formula",
          label: "Current",
          expression: "I = Q / t    and    1 A = 1 C/s",
          note: "I is current, Q is charge in coulombs, and t is time in seconds. The ampere is the SI base unit.",
        },
        {
          type: "ul",
          items: [
            "An ammeter measures current. It is placed in series, so the charge being measured goes through the meter.",
            "1 mA = 10⁻³ A. 1 µA = 10⁻⁶ A. Control circuits and instrument loops use these small currents. A generator terminal current is the same quantity, at a much larger size.",
            "Conventional current is drawn in the direction positive charge would move. In a metal wire the moving charges are electrons, which drift the other way. The formulas use the conventional direction.",
          ],
        },
        {
          type: "p",
          text: "Why it matters: the current is what heats a conductor, and it is what a fuse or a breaker is rated to carry. A plant that can push more charge per second can deliver more power at the same voltage.",
        },
        {
          type: "terms",
          items: [
            { term: "Coulomb (C)", meaning: "SI unit of charge. One ampere flowing for one second moves one coulomb." },
            { term: "Ampere (A)", meaning: "SI unit of current. One coulomb per second." },
            { term: "Ammeter", meaning: "Measures current. Connected in series with the load." },
          ],
        },
      ],
    },
    {
      id: "voltage-circuits",
      title: "Potential difference and the circuit",
      minutes: 9,
      level: 1,
      kind: "core",
      blocks: [
        {
          type: "p",
          text: "Potential difference is the work done per unit charge as charge moves between two points. A volt is one joule per coulomb. A voltmeter measures that difference, and it is connected in parallel with the part being measured, so it sees the same two points.",
        },
        {
          type: "formula",
          label: "Potential difference",
          expression: "V = W / Q    and    1 V = 1 J/C",
          note: "W is work or energy in joules. Q is charge in coulombs. Voltage is not a store of energy by itself.",
        },
        {
          type: "p",
          text: "A circuit is a path for current. A closed circuit is a continuous path, so current can flow. An open circuit is a broken path, so current stops. A switch, a fuse, or an open breaker is a deliberate opening. The components in a simple drawing are a source, conductors, a switch, and a load such as a lamp or a resistor. On the cell and the battery, the long thin plate is positive and the short thick plate is negative.",
        },
        { type: "diagram", diagram: "symbols" },
        {
          type: "p",
          text: "Worked example, read from a nameplate. Viper Power's generators are marked 13.8 kV. That is 13,800 V. Because 1 V = 1 J/C, the nameplate means 13,800 J of work per coulomb: V = W / Q = 13,800 J / 1 C = 13,800 V. The nameplate is a voltage. It is not a power, and it is not a measured energy total for one particular coulomb that passed through the machine.",
        },
        {
          type: "p",
          text: "Why it matters: the switchyard side of the step-up transformers is 138 kV, another potential difference. Opening a breaker opens the path. The current does not keep flowing through an open contact.",
        },
      ],
    },
    {
      id: "check-current",
      title: "Checkpoint — charge per second",
      minutes: 3,
      level: 1,
      kind: "checkpoint",
      questionIds: ["d1c1"],
      blocks: [{ type: "p", text: "Work the division, then commit to an answer." }],
    },
    {
      id: "ohm",
      title: "Ohm's law and resistance",
      minutes: 12,
      level: 1,
      kind: "core",
      blocks: [
        {
          type: "p",
          text: "Resistance is the opposition a conductor offers to current. For many metal conductors, at one temperature, the current is proportional to the potential difference. That proportion is Ohm's law. If the temperature or the material changes, the resistance can change, and the straight line moves.",
        },
        {
          type: "formula",
          label: "Ohm's law",
          expression: "V = I R    and    1 Ω = 1 V/A",
          note: "Rearranged, I = V / R and R = V / I. Use it when the resistor is ohmic and the physical conditions are steady.",
        },
        { type: "diagram", diagram: "ohm" },
        {
          type: "formula",
          label: "What sets the resistance",
          expression: "R = ρ L / A",
          note: "ρ is resistivity in ohm-metres (Ω·m), L is length in metres, and A is cross-sectional area in square metres. Resistivity belongs to the material. Resistance belongs to a particular piece of that material.",
        },
        {
          type: "table",
          caption: "Resistivity at 20°C, from OpenStax College Physics 2e Table 20.1",
          headers: ["Metal", "Resistivity (Ω·m)"],
          rows: [
            ["Silver", "1.59×10⁻⁸"],
            ["Copper", "1.72×10⁻⁸"],
            ["Aluminum", "2.65×10⁻⁸"],
          ],
        },
        {
          type: "p",
          text: "Worked example. These figures are illustrative. They are not a measured Viper Power conductor. Take 1 km of aluminum at the table value, with a cross-section of 500 mm². Convert the area before you divide: 1 mm² = 10⁻⁶ m², so 500 mm² = 500 × 10⁻⁶ m² = 5.00×10⁻⁴ m². Then R = ρ L / A = (2.65×10⁻⁸ Ω·m) × (1,000 m) / (5.00×10⁻⁴ m²) = 0.053 Ω.",
        },
        {
          type: "ul",
          items: [
            "A longer conductor has more resistance. A thicker conductor has less. A material with a higher resistivity has more. Copper at the same length and area would be (1.72×10⁻⁸ × 1,000) / 5.00×10⁻⁴ = 0.0344 Ω.",
            "For a typical metal, resistance rises as temperature rises. The table is at 20°C. A hot conductor is not the same resistor it was cold.",
            "Transmission conductors are chosen and sized so ρ L / A stays small. The 0.053 Ω left in this example is where that line turns electrical energy into heat.",
          ],
        },
        {
          type: "p",
          text: "Why it matters: a long line is a resistor whether or not anyone draws it as a zigzag. The heating in that resistance is the loss a project is trying to keep small.",
        },
      ],
    },
    {
      id: "series-parallel",
      title: "Series and parallel",
      minutes: 6,
      level: 1,
      kind: "core",
      blocks: [
        {
          type: "p",
          text: "Two connections show up everywhere from a panel to a yard. In series, the resistors are end to end, so the same current passes through each one. The voltages across them add. In parallel, each resistor connects across the same two points, so the voltage is the same on each branch and the currents add.",
        },
        {
          type: "table",
          caption: "What is common, and how the resistances combine",
          headers: ["Quantity", "Series", "Parallel"],
          rows: [
            ["Current", "Same through each resistor", "Branch currents add"],
            ["Voltage", "Resistor voltages add", "Same across each branch"],
            ["Resistance", "R = R1 + R2 + R3", "1/R = 1/R1 + 1/R2 + 1/R3"],
          ],
        },
        {
          type: "p",
          text: "Two 4 Ω resistors in parallel give 1/R = 1/4 + 1/4 = 1/2, so R = 2 Ω. The voltage across each is the supply voltage. Why it matters: series resistances add, so a long line plus a connection plus a winding is a bigger resistance than any one of them. Parallel paths split current. An ammeter is a series instrument. A voltmeter is a parallel instrument. A short extra path in parallel can pull a large current, which is why a fault is dangerous.",
        },
      ],
    },
    {
      id: "power-heat",
      title: "Power, energy, and heating",
      minutes: 11,
      level: 1,
      kind: "core",
      blocks: [
        {
          type: "p",
          text: "Electric power is the rate of energy transfer. For any device, power is current times potential difference. In a resistor, that same power is also I²R and V²/R. Those two forms belong to the resistor. They are how a conductor turns electrical energy into heat.",
        },
        {
          type: "formula",
          label: "Power and Joule heating",
          expression: "P = V I = I² R = V² / R    and    H = I² R t",
          note: "P is in watts when V is in volts and I is in amperes. H is the heat energy in joules when R is in ohms and t is in seconds. 1 W = 1 J/s. P = VI is general. P = I²R and P = V²/R belong to a resistor.",
        },
        {
          type: "p",
          text: "Worked example, same illustrative line, still not a plant measurement and not a three-phase generator formula. R = 0.053 Ω and I = 1,000 A. The voltage drop is V = I R = 1,000 A × 0.053 Ω = 53 V. The three power forms agree: P = V I = 53 V × 1,000 A = 53,000 W; P = I² R = (1,000 A)² × 0.053 Ω = 53,000 W; P = V² / R = (53 V)² / 0.053 Ω = 2,809 V² / 0.053 Ω = 53,000 W. That is 53 kW. Over 1 hour, H = I² R t = 53,000 W × 3,600 s = 190,800,000 J = 1.908×10⁸ J. Do not apply this single-conductor P = V I to a three-phase generator.",
        },
        {
          type: "formula",
          label: "Energy, in plant units and in joules",
          expression: "Energy (MWh) = power (MW) × time (h)    and    1 kWh = 3.6×10⁶ J",
          note: "A kilowatt-hour is a thousand watts for 3,600 seconds, which is 3.6 million joules. Bills and plant meters use kWh and MWh. The joule is the SI unit underneath them.",
        },
        {
          type: "ul",
          items: [
            "A lamp lights because the filament is heated by I²R until it glows. A heating element is the same effect, used on purpose.",
            "A fuse is a short piece of conductor chosen to heat and open the circuit when the current is too high. A breaker opens the path as well, and it can be closed again. Either one exists so the heating stops in the fuse or the breaker instead of in the cable or the machine.",
            "For the same power, I = P / V. Double the voltage and the current is cut in half. Because heating follows I², that heating falls to one quarter if the resistance is unchanged. That is why a plant steps voltage up for a long line.",
          ],
        },
        {
          type: "callout",
          tone: "pm",
          title: "Know your basis",
          text: "When someone says 'the plant is 60,' ask: 60 MW or 60 MWh, net or gross, and at what outdoor temperature? A one-hour run at 60 MW is 60 MWh. A 60 MWh day could have been 10 MW for six hours. Those are different machines and different money.",
        },
      ],
    },
    {
      id: "check-energy",
      title: "Checkpoint — power held for two hours",
      minutes: 2,
      level: 1,
      kind: "checkpoint",
      questionIds: ["d1c2"],
      blocks: [{ type: "p", text: "Multiply, keep the unit, and commit to an answer." }],
    },
    {
      id: "video-grid",
      title: "Visual — one grid, no storage in the wires",
      minutes: 11,
      level: 1,
      kind: "visual",
      videoIds: ["V01"],
      blocks: [
        {
          type: "p",
          text: "This 10-minute video treats the grid as one machine. While you watch, count the voltage changes between the generator and a customer, and listen for why the wires cannot store the day's electricity.",
        },
        {
          type: "ul",
          afterVideo: true,
          items: [
            "Generation, transmission, and distribution are three different jobs with three different voltages.",
            "The grids in this film reverse 60 times a second. Some other countries use 50. That reversal is alternating current. Direct current holds one direction.",
            "Production and use happen together. A mismatch shows up as frequency, not as a pile of saved electricity.",
            "The closing sponsor message is not part of the lesson.",
          ],
        },
      ],
    },
    {
      id: "apply",
      title: "The plant numbers, kept in their units",
      minutes: 4,
      level: 2,
      kind: "application",
      blocks: [
        {
          type: "p",
          text: "Viper Power is six GE Frame 7 gas turbines on pipeline gas, in ERCOT. Three capacity figures sit in the plant documents: about 330 MW net on a 95°F day, about 360 MW on an older owner's sheet, and about 65 MW per unit at standard conditions. They were measured differently. Day 5 lines them up. Today the habit is the unit and the basis.",
        },
        {
          type: "p",
          text: "A figure with no unit is not ready to use. Ask whether it is MW or MWh, whether it is net or gross, and what outdoor condition or test condition goes with it.",
        },
      ],
    },
    {
      id: "exercise",
      title: "Exercise — six units, three hours",
      minutes: 5,
      level: 2,
      kind: "exercise",
      exerciseId: "d1e1",
      blocks: [
        {
          type: "p",
          text: "Multiply the inputs in the problem, and label the result in MWh.",
        },
      ],
    },
    {
      id: "quiz",
      title: "Knowledge check",
      minutes: 10,
      level: 1,
      kind: "quiz",
      blocks: [
        {
          type: "p",
          text: "Eleven questions. The worked arithmetic is in the result after you submit.",
        },
      ],
    },
  ],
};

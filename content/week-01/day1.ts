import type { Lesson } from "@/lib/types";

export const day1: Lesson = {
  id: "w1d1",
  week: 1,
  day: 1,
  title: "Electricity, then how a plant puts it on the grid",
  summary:
    "Charge, current, voltage, resistance, and power, and why a generator steps voltage up before a long line.",
  objectives: [
    "Define charge, current, potential difference, resistance, and power, and use the SI unit with each one.",
    "Use Ohm's law, the resistivity formula, and the series and parallel rules on a simple circuit.",
    "Explain why I²R heating is why a plant raises voltage for transmission, and why a fuse or breaker opens the path.",
    "Separate MW from MWh, and trace electricity from the generator through the step-up transformer to the customer.",
  ],
  exercises: [
    {
      id: "d1e1",
      prompt:
        "Practice numbers, not a plant nameplate: six units, each given as 59 MW, for 3 hours. How many MWh is that? Plant documents use other bases. Day 5 lines those bases up.",
      unit: "MWh",
      decimals: 0,
    },
  ],
  quizIds: ["d1q1", "d1q2", "d1q3", "d1q4", "d1q5", "d1q6", "d1q7", "d1q8", "d1q9", "d1q10", "d1q11", "d1q12"],
  sources: [
    {
      title: "OpenStax College Physics 2e, electric charge, potential, current, resistance, and power",
      detail:
        "https://openstax.org/books/college-physics-2e/pages/18-1-static-electricity-and-charge-conservation-of-charge , https://openstax.org/books/college-physics-2e/pages/19-1-electric-potential-energy-potential-difference , https://openstax.org/books/college-physics-2e/pages/20-1-current , https://openstax.org/books/college-physics-2e/pages/20-2-ohms-law-resistance-and-simple-circuits , https://openstax.org/books/college-physics-2e/pages/20-3-resistance-and-resistivity , https://openstax.org/books/college-physics-2e/pages/20-4-electric-power-and-energy , and https://openstax.org/books/college-physics-2e/pages/21-1-resistors-in-series-and-parallel . Reviewed 12 October 2026. Charge is conserved, and observed charges are integer multiples of the electron charge (the book uses 1.60×10⁻¹⁹ C). Current is I = ΔQ/Δt and 1 A = 1 C/s. R = ρL/A. Power in a resistor is P = IV = I²R = V²/R, and 1 kWh = 3.6×10⁶ J.",
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
      title: "Crash Course Physics #35, How Power Gets to Your Home",
      detail:
        "In-lesson video. Alternating current, why a transformer needs a changing current, and why raising voltage cuts heating in a long line. The voltages in the film are round teaching examples, not this plant's voltages.",
    },
    {
      title: "U.S. Energy Information Administration, delivery to consumers",
      detail:
        "https://www.eia.gov/energyexplained/electricity/delivery-to-consumers.php reviewed 12 October 2026. Three interconnections in the Lower 48, ERCOT covering most of Texas, supply matched to demand, and reliability standards written by NERC and approved by FERC.",
    },
    {
      title: "U.S. Energy Information Administration, how electricity is generated",
      detail:
        "https://www.eia.gov/energyexplained/electricity/how-electricity-is-generated.php (page updated 31 October 2023, data through 2022). A prime mover spins a generator. Photovoltaic plants have no turbine.",
    },
    {
      title: "Training problem",
      detail:
        "Six units at 59 MW for 3 hours is the arithmetic given for today's exercise. It is not a Viper Power nameplate. The plant bases are listed with Day 5.",
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
      level: 1,
      prompt: "What are 1 mA and 1 µA?",
      choices: [
        { id: "d1q2a", text: "1 mA is a millionth of an ampere, and 1 µA is a thousandth." },
        { id: "d1q2b", text: "1 mA is one thousandth of an ampere, and 1 µA is one millionth." },
        { id: "d1q2c", text: "Both are voltages: one thousand volts and one million volts." },
        { id: "d1q2d", text: "1 mA is one ampere, and 1 µA is one coulomb of charge." },
      ],
    },
    {
      id: "d1q3",
      level: 1,
      prompt: "What is potential difference, and what measures it?",
      choices: [
        { id: "d1q3a", text: "Work per unit charge, in volts, and a voltmeter measures it." },
        { id: "d1q3b", text: "Charge per unit time, in amperes, and an ammeter measures it." },
        { id: "d1q3c", text: "Resistance per unit length, in ohm-metres, from the material alone." },
        { id: "d1q3d", text: "Heat per unit time, in joules, and a fuse measures that heat." },
      ],
    },
    {
      id: "d1q4",
      level: 1,
      prompt: "What is the difference between a closed circuit and an open circuit?",
      choices: [
        { id: "d1q4a", text: "A closed circuit stores the day's energy, and an open circuit releases it." },
        { id: "d1q4b", text: "A closed circuit is direct current, and an open circuit is alternating current." },
        { id: "d1q4c", text: "A closed circuit is a continuous path. An open circuit is a broken path." },
        { id: "d1q4d", text: "A closed circuit has zero resistance, and an open circuit has zero voltage." },
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
    {
      id: "d1q12",
      level: 2,
      prompt: "On a synchronous generator, which device holds shaft speed, and which holds voltage?",
      choices: [
        { id: "d1q12a", text: "The exciter adds fuel to raise frequency, and the governor changes field current." },
        { id: "d1q12b", text: "Both devices move a transformer tap, and neither one touches fuel or field current." },
        { id: "d1q12c", text: "The governor changes fuel to hold shaft speed, and the exciter holds voltage." },
        { id: "d1q12d", text: "The step-up transformer holds both frequency and voltage once the unit is online." },
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
          text: "A power plant's product is electric charge pushed through a circuit. Before the machines, the words have to be sharp: charge, current, voltage, resistance, and power are different quantities, and mixing them loses the project.",
        },
        {
          type: "p",
          text: "Today's job is those quantities, then the path from a generator to a customer. Viper Power is the plant the numbers belong to when a plant number is used. The arithmetic problems use their own given figures.",
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
      minutes: 7,
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
          text: "A circuit is a path for current. A closed circuit is a continuous path, so current can flow. An open circuit is a broken path, so current stops. A switch, a fuse, or an open breaker is a deliberate opening. The components in a simple drawing are a source, conductors, a switch, and a load such as a lamp or a resistor.",
        },
        { type: "diagram", diagram: "symbols" },
        {
          type: "p",
          text: "Why it matters: at Viper Power, the generators produce 13.8 kV. That nameplate figure is a potential difference, not a megawatt. The switchyard side of the step-up transformers is 138 kV. Opening a breaker opens the path. The current does not keep flowing through an open contact.",
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
      minutes: 8,
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
          note: "ρ is resistivity in ohm-metres (Ω·m), L is length, and A is cross-sectional area. Resistivity belongs to the material. Resistance belongs to a particular piece of that material.",
        },
        {
          type: "ul",
          items: [
            "A longer conductor has more resistance. A thicker conductor has less. A material with a higher resistivity has more.",
            "For a typical metal, resistance rises as temperature rises. A hot conductor is not the same resistor it was cold.",
            "Transmission conductors are chosen and sized so ρ L / A stays small. Leftover resistance is where the line turns electrical energy into heat.",
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
      minutes: 7,
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
          note: "P is in watts when V is in volts and I is in amperes. H is the heat energy in joules when R is in ohms and t is in seconds. 1 W = 1 J/s.",
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
      id: "path",
      title: "From the shaft to the customer",
      minutes: 6,
      level: 1,
      kind: "core",
      blocks: [
        { type: "diagram", diagram: "grid" },
        {
          type: "p",
          text: "A prime mover spins the generator. The generator pushes alternating current out at the plant's voltage. A step-up transformer raises that voltage for the long line, which cuts the current and cuts the I²R heating. Transmission carries it. A substation steps the voltage down. Distribution delivers it. A transformer needs a changing current. Steady direct current does not keep inducing voltage in the second coil. The film's example voltages are illustrations.",
        },
        {
          type: "p",
          text: "The Lower 48 has three major grids: the Eastern Interconnection, the Western Interconnection, and ERCOT, which covers most of Texas and has limited ties to the grids next door. Selling from a Texas plant into a utility on the Eastern grid is a different project from selling to a Texas utility. ERCOT directs the system. It does not own the plants.",
        },
        {
          type: "p",
          text: "If load exceeds generation, the rotating machines slow and frequency falls until generation is added or load is removed. On a synchronous machine, two devices split the work. The governor changes fuel to hold shaft speed, and shaft speed is locked to frequency. The exciter changes field current to hold voltage. A two-pole machine at 60 Hz turns at 3,600 rpm, and a four-pole machine at 1,800 rpm. That relationship is the physics, not a setpoint for this plant.",
        },
      ],
    },
    {
      id: "video-home",
      title: "Visual — the transformer and the line",
      minutes: 8,
      level: 1,
      kind: "visual",
      videoIds: ["V02"],
      blocks: [
        {
          type: "p",
          text: "This 8-minute video is the generator and the transformer. While you watch, notice why a transformer needs a changing current, and why a higher voltage means a lower current for the same power. Treat the voltages as round examples.",
        },
        {
          type: "ul",
          afterVideo: true,
          items: [
            "A changing current in one coil induces voltage in the other. Steady direct current does not keep doing that.",
            "Step up for the long line, step down near the customer.",
            "Double the voltage, half the current, and I²R heating falls to a quarter if the resistance is unchanged.",
            "Those example voltages are not Viper Power's 13.8 kV generator or 138 kV yard.",
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
          text: "A figure with no unit is not ready to use. Ask whether it is MW or MWh, whether it is net or gross, and what outdoor condition or test condition goes with it. The next problem uses a teaching input so the multiplication can be practiced without borrowing one of those plant figures.",
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
          text: "Use the inputs in the problem only. Multiply, label the result in MWh, and leave the plant's own capacity figures for Friday.",
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
          text: "Twelve questions. The worked arithmetic is in the result after you submit.",
        },
      ],
    },
  ],
};

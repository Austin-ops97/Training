import type { Lesson } from "@/lib/types";

export const day1: Lesson = {
  id: "w1d1",
  week: 1,
  day: 1,
  title: "Power versus energy, and how the grid moves electricity",
  summary:
    "An invoice says the plant lost 60. This lesson is how you decide whether that is power, energy, or a number from the wrong basis.",
  objectives: [
    "Define MW, MWh, kV, and Hz in one sentence each, and use them without mixing power and energy.",
    "Explain why supply and demand must match continuously, and what frequency does when they do not.",
    "Trace electricity from the generator through the step-up transformer, transmission, substation, and distribution.",
    "Compute a simple energy total from a given megawatt figure and a number of hours, and state the basis of the figure.",
  ],
  exercises: [
    {
      id: "d1e1",
      prompt:
        "Training problem, not a plant nameplate: six units, each given as 59 MW, for 3 hours. How many MWh is that? The 59 MW figure is the problem's given. Plant documents use other bases, which Day 5 lines up.",
      unit: "MWh",
      decimals: 0,
    },
  ],
  quizIds: ["d1q1", "d1q2", "d1q3", "d1q4", "d1q5", "d1q6", "d1q7", "d1q8", "d1q9", "d1q10"],
  sources: [
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
      prompt: "A unit holds 50 MW for 2 hours. How much energy did it deliver?",
      choices: [
        { id: "d1c1a", text: "100 MWh" },
        { id: "d1c1b", text: "50 MW, because energy uses the same unit as power" },
        { id: "d1c1c", text: "25 MWh, because you divide power by hours" },
        { id: "d1c1d", text: "50 kV, because a two-hour run is read in kilovolts" },
      ],
    },
    {
      id: "d1c2",
      level: 1,
      prompt: "Why can a transformer change voltage on an AC line and not on a steady DC circuit?",
      choices: [
        { id: "d1c2a", text: "A transformer stores the day's megawatt-hours and releases them as a higher voltage." },
        { id: "d1c2b", text: "A transformer needs a changing current so the magnetic field in one coil can induce voltage in the other." },
        { id: "d1c2c", text: "Steady direct current induces a higher voltage because the magnetic field never collapses." },
        { id: "d1c2d", text: "Frequency and voltage are the same quantity, so either one can be stepped up." },
      ],
    },
    {
      id: "d1q1",
      level: 1,
      prompt: "Priya forwards an invoice that says the plant 'lost 60 on Tuesday.' What distinction do you settle before you approve it?",
      choices: [
        { id: "d1q1a", text: "MW is energy over a day, and MWh is the voltage of the line." },
        { id: "d1q1b", text: "They are two names for the same unit, so either one can go on the invoice." },
        { id: "d1q1c", text: "MW is power at an instant. MWh is energy: that power held over hours." },
        { id: "d1q1d", text: "MWh is the megawatt reading divided by 1,000, so 60 MW is 0.06 MWh." },
      ],
    },
    {
      id: "d1q2",
      level: 1,
      prompt: "A contractor says the transmission lines can store Tuesday's generation and deliver it Wednesday morning. What do you tell Dana?",
      choices: [
        { id: "d1q2a", text: "Transformers only pass power for one second, then they reset." },
        { id: "d1q2b", text: "The gas pipeline stores the electrical energy until the plant is called." },
        { id: "d1q2c", text: "Customers sign a contract that fixes the frequency once each morning." },
        { id: "d1q2d", text: "The grid stores almost no electrical energy. An imbalance shows up immediately as a change in frequency." },
      ],
    },
    {
      id: "d1q3",
      level: 1,
      prompt: "Luis asks what 60 Hz means on the North American grids in this lesson.",
      choices: [
        { id: "d1q3a", text: "Alternating current reverses direction 60 times each second." },
        { id: "d1q3b", text: "The plant heat rate is 60." },
        { id: "d1q3c", text: "Transmission voltage is 60 kV." },
        { id: "d1q3d", text: "The generator nameplate is a 60-volt machine." },
      ],
    },
    {
      id: "d1q4",
      level: 1,
      prompt: "Why does the plant raise voltage before a long transmission line?",
      choices: [
        { id: "d1q4a", text: "The transformer converts the plant's alternating current into direct current for the line." },
        { id: "d1q4b", text: "It raises voltage so the same power moves at a lower current, and line heating falls." },
        { id: "d1q4c", text: "The transformer core stores the day's energy and releases it at the far end." },
        { id: "d1q4d", text: "It sets the grid frequency to 50 Hz so the line matches overseas equipment." },
      ],
    },
    {
      id: "d1q5",
      level: 2,
      prompt:
        "The training problem says six units at 59 MW for 3 hours. What do you put on the answer line, and what is the 59?",
      choices: [
        { id: "d1q5a", text: "177 MWh. Add 59 and 3, then multiply by six." },
        { id: "d1q5b", text: "354 MW. Energy and power share a unit, so the hours do not change the label." },
        { id: "d1q5c", text: "1,062 MWh. The 59 MW is the problem's given, not a confirmed Viper Power nameplate." },
        { id: "d1q5d", text: "59 kV. The figure is the generator voltage, held for three hours." },
      ],
    },
    {
      id: "d1q6",
      level: 2,
      prompt: "A developer wants to sell power from a new Viper Power unit into a utility in Oklahoma. Why is that harder than selling to a Texas utility?",
      choices: [
        { id: "d1q6a", text: "Oklahoma uses 50 Hz, so the machines cannot synchronize." },
        { id: "d1q6b", text: "ERCOT owns the Texas plants, so it can refuse an out-of-state sale." },
        { id: "d1q6c", text: "Federal law bans interstate electricity sales." },
        { id: "d1q6d", text: "Texas is mostly its own interconnection, ERCOT, with limited ties to the Eastern grid." },
      ],
    },
    {
      id: "d1q7",
      level: 1,
      prompt: "Load jumps and the online machines do not pick it up. What happens to frequency?",
      choices: [
        { id: "d1q7a", text: "Frequency falls until generation is added or load is removed." },
        { id: "d1q7b", text: "Frequency rises, because extra load speeds the shafts up." },
        { id: "d1q7c", text: "Frequency stays at 60 Hz by definition. Only voltage can move." },
        { id: "d1q7d", text: "The step-up transformer absorbs the extra load as stored energy." },
      ],
    },
    {
      id: "d1q8",
      level: 2,
      prompt: "Same power, and the line voltage is doubled. Heating loss follows the square of the current. What happens to that loss?",
      choices: [
        { id: "d1q8a", text: "Loss doubles, because voltage and heating move together." },
        { id: "d1q8b", text: "Current is cut in half, so heating loss falls to one quarter." },
        { id: "d1q8c", text: "Loss is unchanged, because the transformer cancels current." },
        { id: "d1q8d", text: "Loss falls to one half, because current and heating are proportional." },
      ],
    },
    {
      id: "d1q9",
      level: 2,
      prompt: "During a test, frequency is low and voltage is low. Which device does which job?",
      choices: [
        { id: "d1q9a", text: "The exciter adds fuel to raise frequency, and the governor changes field current to raise voltage." },
        { id: "d1q9b", text: "Both devices move the transformer tap. Fuel flow and field current are not part of either job." },
        { id: "d1q9c", text: "The governor changes fuel to hold shaft speed and frequency. The exciter changes field current to hold voltage." },
        { id: "d1q9d", text: "The step-up transformer holds both, so neither device matters once the unit is online." },
      ],
    },
    {
      id: "d1q10",
      level: 1,
      prompt: "Priya asks what spins a gas-turbine generator, and whether a solar plant has the same shaft.",
      choices: [
        { id: "d1q10a", text: "The transformer spins the generator. A solar plant uses a smaller transformer for the same job." },
        { id: "d1q10b", text: "Grid frequency spins the shaft. A solar plant is spun by that same frequency." },
        { id: "d1q10c", text: "The condenser spins the shaft on every plant, including a photovoltaic plant." },
        { id: "d1q10d", text: "The prime mover spins the generator. A photovoltaic plant has no turbine shaft." },
      ],
    },
  ],
  sections: [
    {
      id: "intro",
      title: "The invoice that says 60",
      minutes: 5,
      level: 1,
      kind: "intro",
      blocks: [
        {
          type: "p",
          text: "It's your second week at Viper Power. A contractor's invoice says the plant 'lost 60 on Tuesday.' Sixty what? Megawatts for a moment, or megawatt-hours over the day? That difference is real money, and by the end of this lesson you will catch it before you approve the invoice.",
        },
        {
          type: "p",
          text: "Dana runs the plant, Priya runs commercial, and Luis is the outage contractor. They are hypothetical people in this scenario, not site staff. You are the project manager. Today's problem is that invoice. The rest of the week hangs other problems on the same three people.",
        },
        {
          type: "p",
          text: "Every section answers the same six questions in one line: what the thing is, why it exists, how it fails, what a project manager does with it, which number has a basis, and what this plant is not.",
        },
      ],
    },
    {
      id: "units",
      title: "Power, energy, voltage, frequency",
      minutes: 10,
      level: 1,
      kind: "core",
      blocks: [
        {
          type: "p",
          text: "Power is the rate. A megawatt is a million watts, the rate at one moment. Energy is that rate held over time. A megawatt-hour is one megawatt continued for one hour. A kilovolt is a thousand volts, the electrical pressure. A hertz is one reversal per second.",
        },
        {
          type: "formula",
          label: "Energy from a steady output",
          expression: "Energy (MWh) = power (MW) × time (hours)",
          note: "50 MW held for 2 hours is 100 MWh. The machine is still a 50 MW machine.",
        },
        {
          type: "callout",
          tone: "pm",
          title: "Know your basis",
          text: "When someone says 'the plant is 60,' ask: 60 MW or 60 MWh, net or gross, and at what outdoor temperature? A one-hour run at 60 MW is 60 MWh. A 60 MWh day could have been 10 MW for six hours. Those are different machines and different money.",
        },
        {
          type: "terms",
          items: [
            { term: "MW", meaning: "Power at an instant. A rate, not a quantity you can store in an invoice line by itself." },
            { term: "MWh", meaning: "Energy. Power held over hours. This is what a bill for production is made of." },
            { term: "kV", meaning: "Electrical pressure, in thousands of volts. Not a substitute for MW." },
            { term: "Hz", meaning: "How often alternating current reverses. The grids in this lesson use 60 Hz." },
            { term: "Net / gross", meaning: "Gross is at the generator. Net is what leaves after the plant's own equipment takes its share." },
          ],
        },
      ],
    },
    {
      id: "check-units",
      title: "Checkpoint — 50 MW for 2 hours",
      minutes: 3,
      level: 1,
      kind: "checkpoint",
      questionIds: ["d1c1"],
      blocks: [
        { type: "p", text: "Quick check: commit to an answer before you read on." },
      ],
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
            "The grids in this film reverse 60 times a second. Some other countries use 50.",
            "Production and use happen together. A mismatch shows up as frequency, not as a pile of saved electricity.",
            "The closing sponsor message is not part of the lesson.",
          ],
        },
      ],
    },
    {
      id: "path",
      title: "From the shaft to the customer",
      minutes: 8,
      level: 1,
      kind: "core",
      blocks: [
        {
          type: "diagram",
          diagram: "grid",
        },
        {
          type: "p",
          text: "A prime mover spins the generator. The generator pushes alternating current out at the plant's voltage. A step-up transformer raises that voltage for the long line. Transmission carries it. A substation steps the voltage down. Distribution delivers it. The film's example voltages are illustrations. This plant's generator voltage and yard voltage are on Friday's page.",
        },
        {
          type: "p",
          text: "For the same power, current is power divided by voltage. Double the voltage and the current is cut in half. Heating in the line follows the square of the current, so that heating falls to one quarter. That is why the step-up transformer exists.",
        },
        {
          type: "p",
          text: "The Lower 48 has three major grids: the Eastern Interconnection, the Western Interconnection, and ERCOT, which covers most of Texas and has limited ties to the grids next door. Selling from a Texas plant into Oklahoma is a different project from selling to a Texas utility. ERCOT directs the system. It does not own the plants.",
        },
        {
          type: "p",
          text: "If load exceeds generation, the rotating machines slow and frequency falls until generation is added or load is removed. On a synchronous machine, two devices split that work. The governor changes fuel to hold shaft speed, and shaft speed is locked to frequency. The exciter changes field current to hold voltage. A two-pole machine at 60 Hz turns at 3,600 rpm, and a four-pole machine at 1,800 rpm. That relationship is not a setpoint for this plant.",
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
            "Double the voltage, half the current, and heating loss falls to a quarter if it follows current squared.",
            "Those example voltages are not Viper Power's 13.8 kV generator or 138 kV yard. Friday puts the plant numbers on the diagram.",
          ],
        },
      ],
    },
    {
      id: "check-path",
      title: "Checkpoint — why the transformer needs AC",
      minutes: 3,
      level: 1,
      kind: "checkpoint",
      questionIds: ["d1c2"],
      blocks: [
        { type: "p", text: "Quick check: commit to an answer before you read on." },
      ],
    },
    {
      id: "apply",
      title: "Reply to the invoice",
      minutes: 7,
      level: 2,
      kind: "application",
      blocks: [
        {
          type: "p",
          text: "Viper Power is six GE Frame 7 gas turbines on pipeline gas, in ERCOT. Ask three people how big it is and you may get three answers: about 330 MW net on a 95°F day, about 360 MW on an older owner's sheet, or about 65 MW per unit at standard conditions. None of those is a sloppy version of the others. They were measured differently. Day 5 is the meeting where you line them up. Today you only need the habit.",
        },
        {
          type: "p",
          text: "Write Priya three lines. Ask whether 60 is MW or MWh. Ask whether the figure is net or gross. Ask the outdoor temperature, or the test condition, that goes with it. If the invoice cannot answer those, it is not ready to approve. The arithmetic problem in the next section uses a teaching input so you can practice the multiplication without borrowing one of those plant figures.",
        },
      ],
    },
    {
      id: "exercise",
      title: "Exercise — six units, three hours",
      minutes: 8,
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
          text: "Ten questions. You'll see why each answer is right or wrong when you submit.",
        },
      ],
    },
  ],
};

import type { Lesson } from "@/lib/types";

export const day1: Lesson = {
  id: "w1d1",
  week: 1,
  day: 1,
  title: "Power versus energy, and how the grid moves electricity",
  summary:
    "The units a project manager has to keep straight, and the path from a spinning generator to a customer.",
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
        "Using the exercise inputs only (not a plant nameplate): six units, each at 59 MW, for 3 hours. How many MWh is that?",
      unit: "MWh",
      decimals: 0,
    },
  ],
  quizIds: ["d1q1", "d1q2", "d1q3", "d1q4", "d1q5", "d1q6", "d1q7", "d1q8", "d1q9", "d1q10", "d1q11", "d1q12"],
  questions: [
    {
      id: "d1c1",
      level: 1,
      prompt: "A unit is producing 50 MW and holds that output for 2 hours. How much energy did it deliver?",
      choices: [
        "100 MWh",
        "50 MW",
        "25 MWh",
        "50 kV",
      ],
    },
    {
      id: "d1c2",
      level: 1,
      prompt: "Why can a transformer change voltage on an AC grid and not on a steady DC circuit?",
      choices: [
        "DC is illegal on transmission lines.",
        "Transformers store megawatt-hours and release them as voltage.",
        "A transformer needs a changing current so the magnetic field in one coil can induce voltage in the other.",
        "Frequency and voltage are the same quantity.",
      ],
    },
    {
      id: "d1c3",
      level: 2,
      prompt: "Which statement about the 59 MW exercise input is the one a project manager should repeat?",
      choices: [
        "It is the plant's total net output at any temperature.",
        "It is the generator voltage.",
        "It is a PUCT fine.",
        "It is the given for this arithmetic. It is not a confirmed Viper Power nameplate, and other documents use different bases.",
      ],
    },
    {
      id: "d1q1",
      level: 1,
      prompt: "What is the difference between MW and MWh?",
      choices: [
        "MW is energy and MWh is voltage.",
        "They are two names for the same unit.",
        "MWh is always MW divided by 1,000.",
        "MW is power at an instant. MWh is energy: that power held over hours.",
      ],
    },
    {
      id: "d1q2",
      level: 1,
      prompt: "Why must grid supply equal demand every second?",
      choices: [
        "Transformers only work for one second at a time.",
        "The grid stores almost no electrical energy. An imbalance shows up immediately as a change in frequency.",
        "Customers sign a contract that fixes the frequency once per day.",
        "Coal piles and gas pipelines act as electrical batteries.",
      ],
    },
    {
      id: "d1q3",
      level: 1,
      prompt: "On the North American grids in these lessons, what does 60 Hz mean?",
      choices: [
        "The plant heat rate is 60.",
        "Transmission voltage is 60 kV.",
        "Alternating current reverses direction 60 times each second.",
        "Sixty generators must be online.",
      ],
    },
    {
      id: "d1q4",
      level: 1,
      prompt: "What does a step-up transformer do for a power line?",
      choices: [
        "It converts alternating current to direct current.",
        "It stores the day's energy.",
        "It sets the grid frequency to 50 Hz.",
        "It raises voltage so the same power can move at lower current, which cuts heating loss in the line.",
      ],
    },
    {
      id: "d1q5",
      level: 1,
      prompt: "Six units at 59 MW each, for 3 hours, deliver how much energy?",
      choices: [
        "177 MWh",
        "1,062 MWh",
        "1,062 MW",
        "10,620 MWh",
      ],
    },
    {
      id: "d1q6",
      level: 2,
      prompt: "How should you treat the 59 MW figure in that problem?",
      choices: [
        "As the measured net output of the whole plant.",
        "As the export voltage.",
        "As the exercise input. Inventory notes record other capacity bases, so do not call 59 MW the confirmed nameplate.",
        "As a NERC setpoint that operators must hold.",
      ],
    },
    {
      id: "d1q7",
      level: 1,
      prompt: "How does EIA describe the major grid interconnections in the Lower 48 states?",
      choices: [
        "One national synchronous grid.",
        "A separate grid in every county.",
        "Only ERCOT and a single FERC grid.",
        "Three: the Eastern Interconnection, the Western Interconnection, and ERCOT, which covers most of Texas.",
      ],
    },
    {
      id: "d1q8",
      level: 2,
      prompt: "What does EIA say is unique about ERCOT as an organization and a physical system?",
      choices: [
        "ERCOT is the only system that uses alternating current.",
        "The balancing authority, the interconnection, and the regional transmission organization are the same entity.",
        "ERCOT owns every generator and every wire in Texas.",
        "ERCOT does not have to balance supply and demand.",
      ],
    },
    {
      id: "d1q9",
      level: 1,
      prompt: "What is a prime mover?",
      choices: [
        "The step-up transformer.",
        "The company that schedules the plant in the market.",
        "The machine that spins the generator. A solar photovoltaic plant does not have one.",
        "The distribution feeder to a neighborhood.",
      ],
    },
    {
      id: "d1q10",
      level: 1,
      prompt: "If demand rises and generation does not follow, what happens to frequency?",
      choices: [
        "Frequency rises, because transformers speed up.",
        "Frequency becomes direct current.",
        "Frequency stays at 60 Hz until the next business day.",
        "Frequency falls. Something must add generation or reduce load.",
      ],
    },
    {
      id: "d1q11",
      level: 2,
      prompt: "For the same power on a line, doubling the voltage does what to heating loss, if resistance stays the same?",
      choices: [
        "Loss doubles.",
        "Current is cut in half, and loss, which follows current squared, falls to one quarter.",
        "Loss does not change, because only frequency matters.",
        "The line starts storing megawatt-hours.",
      ],
    },
    {
      id: "d1q12",
      level: 2,
      prompt: "A block of generation holds 354 MW for one hour. What energy did it deliver?",
      choices: [
        "354 MW",
        "354 kV",
        "354 MWh",
        "21,240 MWh",
      ],
    },
  ],
  sections: [
    {
      id: "intro",
      title: "Why this day matters",
      minutes: 4,
      level: 1,
      kind: "intro",
      blocks: [
        {
          type: "p",
          text: "You will not operate a unit. You will read schedules, outage requests, test reports, and contractor claims that mix power, energy, voltage, and frequency. Getting those four words wrong makes a cost or a megawatt claim look precise when it is not.",
        },
        {
          type: "p",
          text: "Level 1 is the essential idea. Level 2 is what you do with it on a project. Level 3 is optional depth. Nothing on this day asks you to memorize a tag number, a relay setting, or a plant setpoint.",
        },
        {
          type: "ul",
          items: [
            "Explain what the thing is.",
            "Say why it exists.",
            "Say how it works at a project-manager level.",
            "Say what it touches.",
            "Say what fails if it is wrong.",
            "Say why a project manager should care.",
          ],
        },
      ],
    },
    {
      id: "units",
      title: "Four units: MW, MWh, kV, Hz",
      minutes: 10,
      level: 1,
      kind: "core",
      blocks: [
        {
          type: "p",
          text: "Power is the rate. Energy is the rate held over time. A megawatt (MW) is a million watts, the rate at one moment. A megawatt-hour (MWh) is one megawatt continued for one hour. If a unit holds 50 MW for 2 hours, it has delivered 100 MWh. The MW number did not become 100.",
        },
        {
          type: "formula",
          label: "Energy from a steady output",
          expression: "Energy (MWh) = power (MW) × time (hours)",
          note: "This is the definition of a megawatt-hour. It is exact only while the megawatt figure is the average over those hours.",
        },
        {
          type: "p",
          text: "Voltage is electrical pressure. A kilovolt (kV) is 1,000 volts. Frequency, in hertz (Hz), is how often the alternating current reverses. On the North American grids in this course, that rate is 60 Hz: 60 reversals each second. Practical Engineering states that directly. Crash Course states the same 50 or 60 Hz split and says outlets in most of the world use one of those two.",
        },
        {
          type: "p",
          text: "EIA describes a generator the way Faraday's 1831 discovery still works: moving a magnet relative to a coil induces current. In a power plant the magnet is an electromagnet on the rotor, and the coils sit in the stator. A prime mover — steam turbine, gas turbine, hydro turbine, wind rotor, or engine — supplies the spin. Solar photovoltaic cells are the common exception. EIA says they convert light directly to electricity and have no turbine.",
        },
        {
          type: "callout",
          tone: "advanced",
          title: "Level 3 — speed and frequency",
          text: "For a synchronous generator, shaft speed and grid frequency are locked together: revolutions per minute = 120 × frequency ÷ number of poles. At 60 Hz a 2-pole machine turns at 3,600 rpm and a 4-pole machine at 1,800 rpm. Check: 120 × 60 / 2 = 3,600, and 120 × 60 / 4 = 1,800. Viper Power's shaft speed is not a Week 1 inventory fact. Do not memorize it from the GE marketing line that says 'over 3,000 RPM.'",
        },
      ],
    },
    {
      id: "check-units",
      title: "Checkpoint — units",
      minutes: 3,
      level: 1,
      kind: "checkpoint",
      questionIds: ["d1c1"],
      blocks: [
        {
          type: "p",
          text: "Answer before you go on. The explanation appears after you submit. It is not stored in the page.",
        },
      ],
    },
    {
      id: "video-grid",
      title: "Visual — the grid as one machine",
      minutes: 11,
      level: 1,
      kind: "visual",
      videoIds: ["V01"],
      blocks: [
        {
          type: "p",
          text: "Play the video in the frame below. Listed length 10:25, so this section is budgeted at 11 minutes. The narrator's teaching path is the one to keep: generation, high-voltage transmission, a substation that steps voltage down, distribution feeders, then a final transformer. He names 60 Hz, and he says electricity is used as it is produced.",
        },
        {
          type: "ul",
          items: [
            "He names four North American grids and calls Texas one of the two smaller ones, with the Eastern and Western grids as the large ones.",
            "He gives three design goals: power quality (voltage and frequency), reliability, and supply meeting demand.",
            "He says spinning generators give the grid inertia that smooths sudden bumps. That is why a fleet of inverters is a different operating problem. Week 4 will go further. Do not treat this video as a NERC standard.",
            "The closing sponsor segment is not instructional.",
          ],
        },
      ],
    },
    {
      id: "path",
      title: "From the generator to the customer",
      minutes: 7,
      level: 1,
      kind: "core",
      blocks: [
        {
          type: "steps",
          title: "The path EIA and the grid video agree on",
          items: [
            "A prime mover spins a generator. The generator voltage is high for the plant, and low compared with a long transmission line.",
            "A step-up transformer raises the voltage.",
            "Transmission lines carry the power a long distance.",
            "A substation steps the voltage down and can isolate a fault.",
            "Distribution feeders and a final transformer deliver a voltage that homes and plants can use.",
          ],
        },
        {
          type: "p",
          text: "EIA's delivery page says the Lower 48 has three interconnections that mostly operate independently: Eastern, Western, and ERCOT, which covers most of Texas. EIA also says ERCOT is unique because the balancing authority, the interconnection, and the regional transmission organization are the same entity and the same physical system. A balancing authority's job is the second-by-second match of supply and demand.",
        },
        {
          type: "p",
          text: "If generation is short, frequency falls. If generation is long, frequency rises. Operators add or remove generation, and in an emergency they can shed load. The grid itself is not a battery. Pumped storage, batteries, and fuel piles store energy in other forms. They still have to be converted back before they can prop the frequency up.",
        },
        {
          type: "callout",
          tone: "pm",
          title: "Level 2 — what you ask",
          text: "When someone says 'the plant is 60,' ask: 60 MW or 60 MWh, net or gross, and at what outdoor temperature? A one-hour run at 60 MW is 60 MWh. A 60 MWh day could have been 10 MW for six hours. Those are different machines and different money.",
        },
      ],
    },
    {
      id: "video-home",
      title: "Visual — generators and transformers",
      minutes: 9,
      level: 1,
      kind: "visual",
      videoIds: ["V02"],
      blocks: [
        {
          type: "p",
          text: "The Crash Course clip is listed at 8:33. Budget 9 minutes. A generator coil turning in a magnetic field produces alternating current because the induced voltage follows a sine wave and reverses every half turn. A transformer is two coils. A changing current in one induces voltage in the other. More turns on the second coil raises voltage. Fewer turns lowers it. Direct current does not keep changing, so a simple transformer cannot step it.",
        },
        {
          type: "formula",
          label: "Why high voltage cuts line loss",
          expression: "Line heating follows current squared. For the same power, current = power / voltage.",
          note: "Double the voltage and the current is cut in half. Half squared is one quarter, so heating loss falls to one quarter if the line resistance is unchanged. The video states that relationship. Its example voltages (about 12,000 V at a generator, up to about 240,000 V on a line, 110 V at a US outlet) are round illustrations. They are not Viper Power voltages.",
        },
        {
          type: "callout",
          tone: "note",
          title: "Do not copy the video's example voltages onto the plant",
          text: "Viper Power's generator nameplate photo records 13.8 kV, and the switchyard material records 138 kV. Those are Day 5 facts. The physics in this clip still applies: step up to move power, step down to use it.",
        },
      ],
    },
    {
      id: "check-transformer",
      title: "Checkpoint — transformers",
      minutes: 3,
      level: 1,
      kind: "checkpoint",
      questionIds: ["d1c2"],
      blocks: [
        {
          type: "p",
          text: "One check on the video you just watched.",
        },
      ],
    },
    {
      id: "apply",
      title: "Viper Power, only as far as the documents go",
      minutes: 6,
      level: 2,
      kind: "application",
      blocks: [
        {
          type: "p",
          text: "Viper Power is the worked example for the course: six simple-cycle gas turbines in ERCOT, natural gas only. The classroom inventory's overview objective (lesson C01.1.1) says to state the unit count, the frame as GE MS7001B (7B/E), pipeline natural gas only, and an approximate net capacity of 330 MW at 95°F from SOP 029. The same inventory's discrepancy D11 says three capacity statements sit in the library: SOP 029 at about 330 MW net at 95°F, a prior-owner figure of about 360 MW, and a 2024 test figure of about 65 MW ISO per unit. Those are different bases. Teach the basis. Do not average them.",
        },
        {
          type: "callout",
          tone: "flag",
          title: "Flag — 59 MW is an exercise input",
          text: "Today's arithmetic uses 59 MW because the course outline wrote the problem that way. The inventory notes do not quote 59 MW. They quote about 65 MW ISO per unit and about 330 MW net at 95°F. Report 59 MW as the given in the problem, not as a confirmed rating.",
        },
        {
          type: "p",
          text: "ERCOT's own about page, reviewed 12 October 2026, says it manages power for more than 27 million Texas customers, about 90 percent of the state's electric load, and that it is overseen by the Public Utility Commission of Texas and the Texas Legislature. It schedules power. It does not say on that page that it owns the plants. The short ERCOT video on Day 5 says the same thing in plain language.",
        },
      ],
    },
    {
      id: "exercise",
      title: "Exercise — energy from a given output",
      minutes: 8,
      level: 2,
      kind: "exercise",
      exerciseId: "d1e1",
      blocks: [
        {
          type: "p",
          text: "Write the two steps, then enter the energy. Step 1: six times 59 MW. Step 2: multiply by 3 hours. Keep the unit as MWh. Then write one sentence that says this 59 MW is the problem's given, and name the two inventory bases you would ask the site to confirm.",
        },
        {
          type: "ol",
          items: [
            "MW, in one sentence.",
            "MWh, in one sentence.",
            "kV, in one sentence.",
            "Hz, in one sentence.",
          ],
        },
      ],
    },
    {
      id: "check-basis",
      title: "Checkpoint — the basis of a megawatt",
      minutes: 3,
      level: 2,
      kind: "checkpoint",
      questionIds: ["d1c3"],
      blocks: [
        {
          type: "p",
          text: "This is the habit the rest of the week keeps using.",
        },
      ],
    },
    {
      id: "quiz",
      title: "Knowledge check",
      minutes: 10,
      level: 1,
      kind: "quiz",
      questionIds: ["d1q1", "d1q2", "d1q3", "d1q4", "d1q5", "d1q6", "d1q7", "d1q8", "d1q9", "d1q10", "d1q11", "d1q12"],
      blocks: [
        {
          type: "p",
          text: "Twelve questions. Every one uses an idea from this lesson. Submit once. Score and explanations come back from the server after you answer.",
        },
      ],
    },
  ],
};

import type { Lesson } from "@/lib/types";

export const day3: Lesson = {
  id: "w1d3",
  week: 1,
  day: 3,
  title: "Gas-fired plants: simple cycle, combined cycle, CHP, and engines",
  summary: "Four ways to burn a fuel for power, and which one Viper Power actually is.",
  objectives: [
    "Name the Brayton cycle and the compressor, combustor, and turbine path.",
    "Explain why a combined cycle gets more electricity from the same fuel: an HRSG and a steam turbine.",
    "Define combined heat and power the way EPA defines it, including the efficiency comparison EPA publishes.",
    "Place Viper Power as a simple-cycle, gas-only plant and refuse numbers that belong to other companies' machines.",
  ],
  exercises: [],
  quizIds: ["d3q1", "d3q2", "d3q3", "d3q4", "d3q5", "d3q6", "d3q7", "d3q8", "d3q9", "d3q10", "d3q11"],
  questions: [
    {
      id: "d3c1",
      level: 1,
      prompt: "Which three sections does the GE Vernova clip put in the gas path before the generator?",
      choices: [
        "Boiler, condenser, cooling tower.",
        "Reactor, steam generator, cooling tower.",
        "Inverter, battery, solar cell.",
        "Compressor, combustor, turbine.",
      ],
    },
    {
      id: "d3c2",
      level: 1,
      prompt: "What does the DTE clip say the heat-recovery steam generator does?",
      choices: [
        "It replaces the generator.",
        "It captures gas-turbine exhaust heat and makes steam for a steam turbine, without burning more fuel for that steam.",
        "It is the coal pulverizer.",
        "It steps 13.8 kV up to 138 kV.",
      ],
    },
    {
      id: "d3q1",
      level: 1,
      prompt: "What cycle does a gas turbine use?",
      choices: [
        "Rankine",
        "The nuclear tertiary circuit",
        "Brayton",
        "No thermodynamic cycle",
      ],
    },
    {
      id: "d3q2",
      level: 1,
      prompt: "What are the three main gas-path sections of a gas turbine?",
      choices: [
        "Condenser, cooling tower, and pulverizer.",
        "Day silo, deaerator, and economizer.",
        "QSE, TSP, and ERCOT.",
        "Compressor, combustor, and turbine.",
      ],
    },
    {
      id: "d3q3",
      level: 1,
      prompt: "Why can a combined cycle make more electricity from the same fuel than a simple cycle?",
      choices: [
        "The gas turbine runs without a compressor.",
        "A heat-recovery steam generator turns leftover exhaust heat into steam for a steam turbine.",
        "The steam turbine replaces the need for a generator.",
        "Combined cycle means two gas turbines on one shaft with no heat recovery.",
      ],
    },
    {
      id: "d3q4",
      level: 1,
      prompt: "How does EPA define combined heat and power?",
      choices: [
        "Any plant that sells power into ERCOT.",
        "A battery charged by solar panels.",
        "A system that produces electricity and useful thermal energy from the same fuel, at high efficiency.",
        "Two generators sharing one transformer.",
      ],
    },
    {
      id: "d3q5",
      level: 2,
      prompt: "What efficiency comparison does the EPA CHP page state?",
      choices: [
        "Every simple-cycle gas turbine is 80 percent efficient.",
        "CHP is less efficient than separate generation because it wastes heat on purpose.",
        "The page gives Viper Power's tested heat rate.",
        "CHP can exceed 80 percent, compared with about 50 percent for typical separate electricity plus an on-site boiler.",
      ],
    },
    {
      id: "d3q6",
      level: 2,
      prompt: "Which description matches Viper Power?",
      choices: [
        "A 7HA combined-cycle plant like the machine in the DTE video.",
        "Simple-cycle gas turbines, pipeline natural gas only. Not a combined cycle and not a coal plant.",
        "A Jenbacher engine supplying town heating, with the marketing savings from the INNIO story.",
        "Twelve reciprocating engines totaling 220 MW.",
      ],
    },
    {
      id: "d3q7",
      level: 2,
      prompt: "The DTE video shows a 7HA and mentions a weight of about 300 tons. What may you do with that figure?",
      choices: [
        "Use it as the Viper Power turbine weight in the outage plan.",
        "Use it as the GSU weight.",
        "Leave it on that utility's combined-cycle machine. Do not copy it onto a Viper Power 7B.",
        "Treat it as an ERCOT requirement.",
      ],
    },
    {
      id: "d3q8",
      level: 2,
      prompt: "What question does a project manager ask before comparing two megawatt numbers?",
      choices: [
        "Which relay is the 87?",
        "What is the operator's password?",
        "How many control rods are inserted?",
        "Net or gross, and at what ambient temperature?",
      ],
    },
    {
      id: "d3q9",
      level: 1,
      prompt: "In EIA's 2022 US utility-scale generation mix, how did combined-cycle generation compare with single-cycle combustion turbines?",
      choices: [
        "They were equal.",
        "Combined cycle was about 33.8 percent of generation. Single-cycle combustion turbines were about 3.6 percent.",
        "Single-cycle turbines were most of US generation.",
        "The page says both were under 1 percent.",
      ],
    },
    {
      id: "d3q10",
      level: 2,
      prompt: "EPA lists which pair as one common CHP configuration?",
      choices: [
        "A solar cell and a cooling tower only.",
        "A dam and a pulverizer.",
        "A combustion turbine or a reciprocating engine, with a heat-recovery unit.",
        "A step-up transformer and a battery only.",
      ],
    },
    {
      id: "d3q11",
      level: 2,
      prompt: "What is the right project question if a combined-cycle steam side is out of service?",
      choices: [
        "The gas turbine cannot run unless the steam turbine is online. That is true of every plant.",
        "Outages on the steam side do not affect megawatts.",
        "ERCOT will count the steam megawatts anyway.",
        "Can the gas turbine still run as a simple cycle, and how many megawatts does that leave? Ask it of that plant's design. Do not assume Viper Power has a steam side.",
      ],
    },
  ],
  sections: [
    {
      id: "intro",
      title: "Four plants, one fuel family",
      minutes: 4,
      level: 1,
      kind: "intro",
      blocks: [
        {
          type: "p",
          text: "Yesterday's plants boil water. Today's plants burn a fuel in air, or they burn it in an engine. The project question is always the same: what is the prime mover, what happens to the leftover heat, and which megawatts disappear if that heat-recovery equipment is out?",
        },
      ],
    },
    {
      id: "brayton",
      title: "Simple cycle: the Brayton path",
      minutes: 8,
      level: 1,
      kind: "core",
      blocks: [
        {
          type: "p",
          text: "A simple-cycle gas turbine follows the Brayton path. The compressor raises the pressure of a large mass of air. Fuel burns in that air in the combustor. The hot gas expands through the turbine. The turbine drives both the compressor and the generator. Exhaust leaves hot, out a stack. There is no steam bottoming cycle.",
        },
        {
          type: "p",
          text: "That leftover exhaust heat is why a simple-cycle machine uses more fuel per megawatt-hour than a combined cycle. It can still be the right machine when the hours that matter are few and the start has to be quick. Peakers live on that trade. Day 4 puts numbers on how few those hours are, nationally.",
        },
        {
          type: "callout",
          tone: "pm",
          title: "Level 2 — hot day, fewer megawatts",
          text: "Compressor inlet air that is hot is less dense, so less mass flows through the machine and output falls. That is why a summer megawatt is not an ISO megawatt. ISO is a reference condition (the industry reference is 59°F, sea level, 60 percent relative humidity). Ask for the basis. Viper Power's two documented bases are in the application section below. Do not invent a derate curve.",
        },
      ],
    },
    {
      id: "video-gt",
      title: "Visual — compressor, combustor, turbine, generator",
      minutes: 6,
      level: 1,
      kind: "visual",
      videoIds: ["V06", "V07"],
      blocks: [
        {
          type: "p",
          text: "Two short clips share this 6-minute section. GE Vernova is listed at 2:04 and walks compressor, combustion, turbine, and generator. It says the turbine spins at over 3,000 rpm. Treat that as marketing language, not a Viper Power setpoint. The clip also says gas turbines can fill in when renewable output is short. It does not show heat recovery.",
        },
        {
          type: "p",
          text: "DTE is listed at 3:36. The machine on screen is their 7HA, about 300 tons in the narration, at a combined-cycle plant. The part to keep is the heat-recovery steam generator: exhaust that would have gone up the stack makes steam, and a steam turbine makes more electricity with no extra fuel. Then a generator, a bus duct, a transformer, and a control room. None of the nameplate details transfer to Viper Power.",
        },
      ],
    },
    {
      id: "check-path",
      title: "Checkpoint — gas path and heat recovery",
      minutes: 4,
      level: 1,
      kind: "checkpoint",
      questionIds: ["d3c1", "d3c2"],
      blocks: [
        {
          type: "p",
          text: "Separate the simple-cycle path from the combined-cycle addition.",
        },
      ],
    },
    {
      id: "chp",
      title: "Combined heat and power, and engines",
      minutes: 8,
      level: 1,
      kind: "core",
      blocks: [
        {
          type: "p",
          text: "EPA's CHP page says combined heat and power produces electricity and thermal energy, and that the heat which would otherwise be wasted is used as process heat, steam, hot water, or chilled water. EPA states that CHP can achieve efficiencies of over 80 percent, compared with 50 percent for typical separate electricity generation plus an on-site boiler. The two configurations EPA lists are a combustion turbine or reciprocating engine with heat recovery, and a steam boiler with a steam turbine.",
        },
        {
          type: "p",
          text: "CHP needs a host that wants the heat all year. A peaker that runs a few hundred hours does not have that host. That is why Viper Power's simple-cycle stacks are not a CHP plant. The efficiency numbers above are EPA's comparison, not a Viper Power test.",
        },
        {
          type: "p",
          text: "EIA's generation page, with 2022 data, says natural-gas combined cycle supplied about 33.8 percent of US utility-scale net generation, and single-cycle combustion turbines about 3.6 percent. That is a share of energy produced, not a capacity factor and not an efficiency.",
        },
        {
          type: "callout",
          tone: "advanced",
          title: "Level 3 — EIA's own efficiency examples",
          text: "EIA's FAQ says efficiency in percent is 3,412 Btu per kWh divided by the heat rate in Btu per kWh. EIA's examples: 10,500 Btu/kWh is about 33 percent (3,412 / 10,500 = 0.325), and 7,500 Btu/kWh is about 45 percent (3,412 / 7,500 = 0.455). Those are EIA's examples, not Viper Power heat rates. This course does not have a Week 1 inventory quote of a Viper Power heat rate, so none is used.",
        },
      ],
    },
    {
      id: "video-chp",
      title: "Visual — heat used on purpose, and an engine plant",
      minutes: 6,
      level: 1,
      kind: "visual",
      videoIds: ["V08", "V09"],
      blocks: [
        {
          type: "p",
          text: "The INNIO clip is listed at 2:21. Budget 3 minutes. It is a children's story: a gas engine makes electricity, and heat that a car engine would throw away is used to warm buildings. Wind and sun are not always there, so the engine can start when they drop. Ignore the barrels-of-oil line and the car-count line. They are marketing for that story, and the retrieved captions garble the engine model. Do not put either number in a document.",
        },
        {
          type: "callout",
          tone: "flag",
          title: "Wärtsilä clip — embedded, not required",
          text: "The animation is on this page so you can see a reciprocating-engine plant. YouTube oEmbed confirmed the title and channel on 12 October 2026: a 220 MW plant with 12 engines. A spoken transcript could not be retrieved from this environment, so the clip is not required and no quiz fact depends on it. The 220 MW is that animation, not Viper Power. EPA already told you a reciprocating engine can be a CHP prime mover.",
        },
      ],
    },
    {
      id: "apply",
      title: "Viper Power is the simple-cycle row",
      minutes: 8,
      level: 2,
      kind: "application",
      blocks: [
        {
          type: "p",
          text: "Place Viper Power in the simple-cycle row: GE MS7001B machines, called 7B, 7E, and 7B/E in different documents (inventory discrepancy D12). Fuel is pipeline natural gas only (C01.1.1 and discrepancy D09). Controls in the library are a TTS system on an Allen-Bradley PLC-5, and the GE manuals are for the mechanical machine, not for the control system that is installed (D09). Combustion in the operator-training manual is described as LEC (S165). The course outline calls that a PSM retrofit rather than GE's own dry-low-NOx system. Confirm the vendor and the hardware with the site. D12 says the frame designation itself still needs OEM or PSM confirmation.",
        },
        {
          type: "p",
          text: "Discrepancy D11 is the capacity conversation. SOP 029: about 330 MW net at 95°F for the plant. The 2024 test: about 65 MW ISO per unit. A prior-owner figure of about 360 MW is also in the notes. Say the basis every time. Six times 65 is 390, which is not the same kind of number as 330 net on a 95°F day. Day 5 does that arithmetic with the caveats attached.",
        },
        {
          type: "callout",
          tone: "pm",
          title: "Talk like you have stood in the yard",
          text: "Viper Power is six heavy-duty frames in simple cycle, gas only. Documents disagree on the exact 7B versus 7E hardware, so say that out loud instead of polishing it. Always ask net or gross, and at what ambient temperature. A hot afternoon is when a peaker is worth the most and when the air is least helpful.",
        },
      ],
    },
    {
      id: "exercise",
      title: "Exercise — four-row comparison",
      minutes: 10,
      level: 2,
      kind: "exercise",
      blocks: [
        {
          type: "p",
          text: "Make a four-row table: simple cycle, combined cycle, CHP, reciprocating-engine plant. For each row write what the prime mover is, what happens to leftover heat, and what it is for. Use only the sources in this lesson. Leave start-time cells blank unless you have a source in front of you. This course does not give you a verified start-time table, so do not invent one. Mark the section complete when all four rows have a heat-fate sentence and Viper Power is written only in the simple-cycle row.",
        },
        {
          type: "ul",
          items: [
            "Simple cycle: exhaust heat leaves the stack. Used when the run hours are few.",
            "Combined cycle: an HRSG and a steam turbine turn that exhaust into more electricity.",
            "CHP: leftover heat serves a host. EPA's efficiency comparison is the one to cite.",
            "Engine plant: EPA lists a reciprocating engine with heat recovery as a CHP configuration. The Wärtsilä animation is an example of many engines at one site, and it is optional.",
          ],
        },
      ],
    },
    {
      id: "quiz",
      title: "Knowledge check",
      minutes: 12,
      level: 1,
      kind: "quiz",
      questionIds: ["d3q1", "d3q2", "d3q3", "d3q4", "d3q5", "d3q6", "d3q7", "d3q8", "d3q9", "d3q10", "d3q11"],
      blocks: [
        {
          type: "p",
          text: "Eleven questions. The DTE weight and the INNIO marketing lines are traps. Viper Power does not inherit them.",
        },
      ],
    },
  ],
};

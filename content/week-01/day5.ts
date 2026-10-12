import type { Lesson } from "@/lib/types";

export const day5: Lesson = {
  id: "w1d5",
  week: 1,
  day: 5,
  title: "Viper Power on one page, and the week in review",
  summary: "Dana's meeting asks how big the plant is and who calls ERCOT. This lesson is the page you can defend.",
  objectives: [
    "State the plant's unit count, fuel, cycle, and the three capacity bases without mixing them.",
    "Trace 13.8 kV through three step-up transformers to the 138 kV yard, and name the open confirmation items.",
    "Define the qualified scheduling entity and say who oversees the ERCOT market.",
    "Score the week's scenarios: power versus energy, the two cycles, heat recovery, peakers, and this plant.",
  ],
  exercises: [
    {
      id: "d5e1",
      prompt:
        "Two different approximates, not one nameplate. Six times the 65 MW standard-condition figure, compared with about 330 MW net at 95°F. Express the difference as a percent of the six-times-65 figure, to one decimal place. The result is not a measured derate.",
      unit: "percent",
      decimals: 1,
    },
  ],
  quizIds: ["d5q1", "d5q2", "d5q3", "d5q4", "d5q5", "d5q6", "d5q7", "d5q8", "d5q9", "d5q10", "d5q11", "d5q12"],
  sources: [
    {
      title: "Plant description used this week",
      detail:
        "Six combustion turbines, GE MS7001B, also called 7B, 7E, and 7B/E in different documents. Pipeline natural gas only. About 330 MW net at 95°F in the gas-turbine operating procedure. About 65 MW per unit at standard conditions on the 2024 test. A prior-owner sheet says about 360 MW. A generator nameplate photo records 13.8 kV. A switchyard voltage-transformer sheet records 138 kV. The electrical description says 138/13.8/13.8 kV three-winding step-up transformers, two generators each. The plant one-line is not in this course pack. The yard is the transmission service provider interface, and the notes include a 138 kV backfeed practice. Confirm who switches. Controls in the notes are a TTS system on an Allen-Bradley PLC-5. The GE manuals are the mechanical machine. Summer weatherization practice uses an internal 15 May date, stricter than the 1 June regulatory date. That procedure is a later week.",
    },
    {
      title: "ERCOT, How does ERCOT work?",
      detail: "In-lesson video. ERCOT dispatches generation, balances generation and load, and does not own the assets. The clip does not define a qualified scheduling entity.",
    },
    {
      title: "ERCOT Nodal Protocols, Section 2, Definitions, 1 August 2026",
      detail:
        "https://www.ercot.com/files/docs/2024/06/28/02-080126_Nodal.docx linked from https://www.ercot.com/mktrules/nprotocols/current and opened 12 October 2026. A Qualified Scheduling Entity is a market participant qualified by ERCOT in accordance with Section 16, Registration and Qualification of Market Participants, for communication with ERCOT for resource entities and load-serving entities and for settling payments and charges with ERCOT.",
    },
    {
      title: "ERCOT Nodal Protocols, Section 1.6.2, 1 August 2026",
      detail:
        "https://www.ercot.com/files/docs/2023/01/26/01-080126_Nodal.docx opened 12 October 2026. Energy may be transmitted and ancillary service may be provided on behalf of an eligible transmission service customer through the ERCOT system only through a Qualified Scheduling Entity.",
    },
    {
      title: "ERCOT QSE page and about page",
      detail:
        "https://www.ercot.com/services/rq/qse and https://www.ercot.com/about reviewed 12 October 2026. QSEs submit bids and offers, a current operating plan, and ancillary-service offers, and they settle with ERCOT. The about page: more than 27 million Texas customers, about 90 percent of state load, oversight by the Public Utility Commission of Texas and the Texas Legislature. It does not say ERCOT owns the plants.",
    },
    {
      title: "Reliability oversight, in one sentence",
      detail:
        "The delivery-to-consumers page cited on Monday says NERC writes mandatory reliability standards and FERC approves them. A 2014 protocol excerpt filed at the PUCT described the ERCOT system as under PUCT jurisdiction and not synchronously tied to the Eastern or Western interconnections. That excerpt is historical wording. The sentence for a meeting is the 2026 about page plus the reliability-standards fact. Specific transmission orders are lawyer work.",
    },
  ],
  questions: [
    {
      id: "d5c1",
      level: 2,
      prompt: "Dana asks which pair of figures you will put on the first slide, and what each one is.",
      choices: [
        { id: "d5c1a", text: "About 65 MW per unit at standard conditions, and about 330 MW net at 95°F. A prior-owner sheet says about 360 MW. They are different bases." },
        { id: "d5c1b", text: "59 MW and 1,062 MWh. Both are nameplate ratings from the same test." },
        { id: "d5c1c", text: "220 MW and 12 engines. Both describe this yard." },
        { id: "d5c1d", text: "13.8 kV and 60 Hz. Both are the plant's summer capacity." },
      ],
    },
    {
      id: "d5q1",
      level: 1,
      prompt: "The invoice from Monday is back. Priya still needs the units in one sentence.",
      choices: [
        { id: "d5q1a", text: "MW and MWh are both voltages, measured an hour apart." },
        { id: "d5q1b", text: "MW is the rate of power. MWh is that rate held over hours." },
        { id: "d5q1c", text: "MWh is the rate, and MW is the energy left at the end of the day." },
        { id: "d5q1d", text: "They differ only by the outdoor temperature." },
      ],
    },
    {
      id: "d5q2",
      level: 1,
      prompt: "Luis says the 138 kV lines can hold the plant's energy overnight. What is the grid fact?",
      choices: [
        { id: "d5q2a", text: "The lines store energy in proportion to their voltage." },
        { id: "d5q2b", text: "Storage in the wires is fine for a few hours, then frequency resets." },
        { id: "d5q2c", text: "The grid stores almost no electrical energy. An imbalance shows up immediately as frequency." },
        { id: "d5q2d", text: "The step-up transformer is the battery for the yard." },
      ],
    },
    {
      id: "d5q3",
      level: 1,
      prompt: "Someone in Dana's meeting calls the gas turbine a Rankine machine. Which correction is right?",
      choices: [
        { id: "d5q3a", text: "Both cycles boil water. The only difference is the fuel truck." },
        { id: "d5q3b", text: "Rankine is the gas turbine and Brayton is the condenser." },
        { id: "d5q3c", text: "Neither cycle rejects heat. Both convert all of the fuel into electricity." },
        { id: "d5q3d", text: "Brayton for the gas turbine: compress, burn, expand. Rankine for a steam plant: boil, expand, condense, pump." },
      ],
    },
    {
      id: "d5q4",
      level: 1,
      prompt: "The vendor from Wednesday is in the meeting. What does a heat-recovery steam generator add?",
      choices: [
        { id: "d5q4a", text: "A heat-recovery steam generator and a steam turbine, so exhaust heat becomes more megawatts. This plant's description does not include one." },
        { id: "d5q4b", text: "A second gas compressor that burns a second fuel." },
        { id: "d5q4c", text: "A cooling tower that replaces the generator." },
        { id: "d5q4d", text: "An inverter that stores the exhaust." },
      ],
    },
    {
      id: "d5q5",
      level: 1,
      prompt: "Priya asks what combined heat and power is, in one line.",
      choices: [
        { id: "d5q5a", text: "Two plants on one invoice, with the heat thrown away at both." },
        { id: "d5q5b", text: "Electricity plus useful heat or steam from one fuel, for a host that wants the heat." },
        { id: "d5q5c", text: "A peaker that runs only in winter so the stack stays cool." },
        { id: "d5q5d", text: "A battery charged from a condenser." },
      ],
    },
    {
      id: "d5q6",
      level: 2,
      prompt: "Why does a simple-cycle peaker's national capacity factor stay low even though the machine can run?",
      choices: [
        { id: "d5q6a", text: "Because the grid frequency forbids operation above a few hundred hours." },
        { id: "d5q6b", text: "Because a peaker has no generator." },
        { id: "d5q6c", text: "Because it costs more fuel per megawatt-hour, so it runs in the hours when that fuel is worth paying for." },
        { id: "d5q6d", text: "Because capacity factor is the generator voltage." },
      ],
    },
    {
      id: "d5q7",
      level: 2,
      prompt: "A battery is offered as a substitute for the next short peak. What can you say from this week?",
      choices: [
        { id: "d5q7a", text: "A battery is slower than a steam cycle, so it cannot cover a short peak." },
        { id: "d5q7b", text: "A battery's size in a British example is the size this plant must install." },
        { id: "d5q7c", text: "A battery replaces the scheduling entity, so the plant no longer needs one." },
        { id: "d5q7d", text: "A battery can move energy across hours and can move faster than a rotating machine. An empty battery cannot cover the next hour. Which product it may offer is a scheduling-entity question." },
      ],
    },
    {
      id: "d5q8",
      level: 1,
      prompt: "What voltages do you write on the one-page diagram?",
      choices: [
        { id: "d5q8a", text: "60 Hz at the generator and 50 Hz in the yard." },
        { id: "d5q8b", text: "13.8 kV at the generator and 138 kV in the switchyard." },
        { id: "d5q8c", text: "138 kV at the generator and 13.8 kV on the transmission side." },
        { id: "d5q8d", text: "The example voltages from the Monday film, because they match every plant." },
      ],
    },
    {
      id: "d5q9",
      level: 2,
      prompt: "How do you describe the machines and the transformers in one breath?",
      choices: [
        { id: "d5q9a", text: "Six GE MS7001B units on natural gas only. Documents also say 7B, 7E, and 7B/E, so the hardware is a confirmation item. Three step-up transformers, two generators each, so one transformer outage takes two units." },
        { id: "d5q9b", text: "Twelve engines and one shared stack, as in the optional animation." },
        { id: "d5q9c", text: "Six units, each with its own transformer, so a transformer outage trips one unit." },
        { id: "d5q9d", text: "Six steam boilers sharing one condenser." },
      ],
    },
    {
      id: "d5q10",
      level: 2,
      prompt: "Why can a standard-condition megawatt and a hot-day net megawatt both be honest?",
      choices: [
        { id: "d5q10a", text: "Because megawatts and megawatt-hours are the same unit." },
        { id: "d5q10b", text: "Because the generator voltage changes from 13.8 kV to 60 Hz on a hot day." },
        { id: "d5q10c", text: "Hot inlet air is less dense, so mass flow and output fall. Net also subtracts the plant's own use. About 65 MW per unit at standard conditions and about 330 MW net at 95°F are different bases." },
        { id: "d5q10d", text: "Physics requires the two figures to match, so one of them is a typo." },
      ],
    },
    {
      id: "d5q11",
      level: 2,
      prompt: "Who is on the far side of the 138 kV breakers, and what is still open?",
      choices: [
        { id: "d5q11a", text: "The scheduling entity owns the breakers and switches them alone." },
        { id: "d5q11b", text: "A condenser operator switches the yard from the cooling tower." },
        { id: "d5q11c", text: "The plant exports at 13.8 kV with no transformer and no neighbor." },
        { id: "d5q11d", text: "Plant documents call it a transmission service provider interface at 138 kV, with a backfeed practice. Confirm who performs the switching. The one-line is not in this course pack." },
      ],
    },
    {
      id: "d5q12",
      level: 1,
      prompt: "Dana asks who calls ERCOT. What is a Qualified Scheduling Entity?",
      choices: [
        { id: "d5q12a", text: "A market participant qualified under Protocol Section 16 to communicate with ERCOT for resource entities and load-serving entities and to settle payments and charges with ERCOT." },
        { id: "d5q12b", text: "The transmission owner who racks out a breaker." },
        { id: "d5q12c", text: "The generator's exciter." },
        { id: "d5q12d", text: "The regional entity that writes the reliability standards." },
      ],
    },
  ],
  sections: [
    {
      id: "intro",
      title: "Dana's meeting",
      minutes: 5,
      level: 1,
      kind: "intro",
      blocks: [
        {
          type: "p",
          text: "Dana's Monday meeting has two questions: how big is Viper Power, and who calls ERCOT when a unit is out? You have three capacity figures and a yard of shared transformers. The meeting needs one page.",
        },
        {
          type: "p",
          text: "Dana, Priya, and Luis are hypothetical people in this scenario, not site staff. The drone photo and the install photos are not in this course pack, so you will label a block diagram and list what the site still has to confirm. No owner name, no prior-site name, no permit number, and no drawing number goes on the page.",
        },
      ],
    },
    {
      id: "plant",
      title: "The page you can defend",
      minutes: 12,
      level: 1,
      kind: "core",
      blocks: [
        {
          type: "diagram",
          diagram: "viper",
        },
        {
          type: "ul",
          items: [
            "Six combustion turbines on pipeline natural gas only. The overview calls them GE MS7001B machines. Documents also say 7B, 7E, and 7B/E. Confirm the hardware before a parts list.",
            "Three capacity figures: about 330 MW net at 95°F in the operating procedure, about 360 MW on a prior-owner sheet, and about 65 MW per unit at standard conditions on the 2024 test.",
            "The mechanical manuals describe the machine. The controls in the notes are a TTS system on a PLC-5, and the fuel in those notes is gas only. Use the manuals for the hardware. The control screens in the old books are not the current system.",
            "A generator nameplate records 13.8 kV. A switchyard sheet records 138 kV. Three step-up transformers, each 138/13.8/13.8 kV, two generators on each. One transformer outage takes two units. The one-line itself is not in this pack.",
            "The yard is the transmission service provider interface, with a 138 kV backfeed practice. Confirm who switches.",
            "The plant is described as an ERCOT peaker whose market voice is a qualified scheduling entity, with a remote operations center. The definition of that entity is in the next section, from the protocols.",
          ],
        },
        {
          type: "terms",
          items: [
            { term: "13.8 kV", meaning: "Generator voltage on the nameplate photo." },
            { term: "138 kV", meaning: "Switchyard voltage. The transmission provider's side of the fence." },
            { term: "QSE", meaning: "Qualified Scheduling Entity. The market participant that speaks to ERCOT and settles." },
            { term: "TSP interface", meaning: "Where the plant hands the 138 kV side to the transmission service provider." },
          ],
        },
        {
          type: "callout",
          tone: "pm",
          title: "Know your basis",
          text: "About 65 MW per unit at standard conditions, about 330 MW net on a 95°F day, and about 360 MW on an older sheet. Say which one you are using. Six times 65 is a product of one of those approximates. It is not a fourth nameplate.",
        },
      ],
    },
    {
      id: "check-bases",
      title: "Checkpoint — which megawatt",
      minutes: 4,
      level: 2,
      kind: "checkpoint",
      questionIds: ["d5c1"],
      blocks: [
        { type: "p", text: "Quick check: commit to an answer before you read on." },
      ],
    },
    {
      id: "video-ercot",
      title: "Visual — the operator that does not own the plants",
      minutes: 4,
      level: 1,
      kind: "visual",
      videoIds: ["V14"],
      blocks: [
        {
          type: "p",
          text: "This 1-minute video is ERCOT describing its own job. While you watch, listen for what it controls and for the thing it says it does not own.",
        },
        {
          type: "ul",
          afterVideo: true,
          items: [
            "It dispatches generation and balances generation and load.",
            "It does not own the plants. The comparison in the clip is air traffic control.",
            "Homes are served by a distribution company, which is served by the transmission system it directs.",
            "The clip does not define the scheduling entity. The next section does.",
          ],
        },
      ],
    },
    {
      id: "market",
      title: "Who calls, and who oversees the market",
      minutes: 6,
      level: 2,
      kind: "application",
      blocks: [
        {
          type: "p",
          text: "A Qualified Scheduling Entity is the market participant qualified to speak to ERCOT for resource entities and load-serving entities and to settle the money. Energy moves through the ERCOT system only through that entity. In practice it submits bids and offers, a current operating plan, and ancillary-service offers. The plant does not make those calls on its own. The protocol wording and the date are in the sources.",
        },
        {
          type: "p",
          text: "ERCOT serves more than 27 million Texas customers, about 90 percent of the state's electric load. The Public Utility Commission of Texas and the Texas Legislature oversee it. Reliability standards still exist: NERC writes them and FERC approves them. The sentence for Dana's meeting is that the PUCT oversees the ERCOT market, the reliability standards still apply, and compliance gets the question before a project changes protection, voltage control, or cyber boundaries.",
        },
        {
          type: "callout",
          tone: "pm",
          title: "Level 2 — the outage sentence",
          text: "A peaker earns its year in a short list of hours. The national gas-turbine shape from yesterday is the reason shoulder months are the kinder window. The plant's summer weatherization practice starts on an internal 15 May date, earlier than the 1 June regulatory date. That procedure is a later week. For this meeting, summer is a poor default for an outage.",
        },
      ],
    },
    {
      id: "exercise",
      title: "Exercise — how far apart the two approximates are",
      minutes: 8,
      level: 2,
      kind: "exercise",
      exerciseId: "d5e1",
      blocks: [
        {
          type: "p",
          text: "Start from six times the 65 MW standard-condition figure. Compare that product with about 330 MW net at 95°F. Express the difference as a percent of the six-times-65 figure, to one decimal place. Then list what you would ask the site to confirm: the 7B versus 7E hardware, which capacity basis the commercial team uses, who switches the 138 kV side, whether the one-line matches the three-winding description, and whether the yard still matches the photos you do not have in this course.",
        },
      ],
    },
    {
      id: "review",
      title: "Week review — the meeting, said once",
      minutes: 10,
      level: 1,
      kind: "review",
      blocks: [
        {
          type: "ol",
          items: [
            "MW is power now. MWh is that power times hours.",
            "The grid stores almost no electricity. Imbalance moves the frequency at once.",
            "A gas turbine is Brayton. A steam plant is Rankine.",
            "Combined cycle adds a heat-recovery steam generator and a steam turbine.",
            "Combined heat and power is electricity plus useful heat from one fuel.",
            "A peaker's capacity factor is low because its fuel per megawatt-hour is high, so it runs when that trade is worth it.",
            "Batteries move energy across hours and can move faster than a spinning machine. Products are a scheduling-entity question.",
            "Generators at 13.8 kV. Yard at 138 kV. Three transformers, two units each.",
            "Hot air cuts mass flow. Net subtracts the plant's own use. The 65 MW and 330 MW figures are different bases.",
            "The 138 kV side is a transmission provider interface. Confirm who switches.",
            "The scheduling entity is the qualified market participant that speaks to ERCOT and settles.",
            "Baseload runs most hours, intermediate runs many, a peaker runs in the scarce hours. An inverter-based resource has no synchronous governor.",
          ],
        },
        {
          type: "p",
          text: "Redraw the block diagram without looking. If a box is missing, go back before you open the check.",
        },
      ],
    },
    {
      id: "quiz",
      title: "Knowledge check",
      minutes: 12,
      level: 1,
      kind: "quiz",
      blocks: [
        {
          type: "p",
          text: "Twelve questions, one more than the other days, because this check covers the week. You'll see why each answer is right or wrong when you submit.",
        },
      ],
    },
  ],
};

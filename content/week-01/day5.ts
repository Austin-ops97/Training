import type { Lesson } from "@/lib/types";

export const day5: Lesson = {
  id: "w1d5",
  week: 1,
  day: 5,
  title: "Viper Power on one page, and the week in review",
  summary: "Viper Power on one page: the machines, the voltages, the capacity bases, and who speaks to ERCOT.",
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
      prompt: "Which pair of figures belongs on the first slide, and what is each one?",
      choices: [
        { id: "d5c1a", text: "59 MW and 1,062 MWh, treated as two nameplate ratings from the same test." },
        { id: "d5c1b", text: "220 MW and twelve engines, treated as the machines standing in this yard today." },
        { id: "d5c1c", text: "About 65 MW per unit at standard conditions, and about 330 MW net at 95°F." },
        { id: "d5c1d", text: "13.8 kV and 60 Hz, treated as this plant's summer capacity figures." },
      ],
    },
    {
      id: "d5q1",
      level: 1,
      prompt: "What is the difference between MW and MWh?",
      choices: [
        { id: "d5q1a", text: "MW is the rate of power. MWh is that rate held over hours." },
        { id: "d5q1b", text: "MW and MWh are both voltages, taken an hour apart." },
        { id: "d5q1c", text: "MWh is the rate, and MW is the energy left at the end of the day." },
        { id: "d5q1d", text: "They differ only by the outdoor temperature at the compressor inlet." },
      ],
    },
    {
      id: "d5q2",
      level: 1,
      prompt: "Can the 138 kV lines hold the plant's energy overnight?",
      choices: [
        { id: "d5q2a", text: "The lines store electrical energy in proportion to their operating voltage." },
        { id: "d5q2b", text: "Wires are not bulk storage; the grid needs continuous energy balance." },
        { id: "d5q2c", text: "The wires hold a few hours of energy, and then the frequency resets itself." },
        { id: "d5q2d", text: "The step-up transformer is the battery for energy that leaves the yard." },
      ],
    },
    {
      id: "d5q3",
      level: 1,
      prompt: "A gas turbine is called a Rankine machine. Which correction is right?",
      choices: [
        { id: "d5q3a", text: "Both cycles boil water. The only difference is which fuel truck arrives." },
        { id: "d5q3b", text: "Rankine is the gas turbine, and Brayton is the condenser on the steam side." },
        { id: "d5q3c", text: "Neither cycle rejects heat. Both turn all of the fuel into electricity." },
        { id: "d5q3d", text: "Brayton for the gas turbine. Rankine for a steam plant, which this yard is not." },
      ],
    },
    {
      id: "d5q4",
      level: 1,
      prompt: "The vendor from Wednesday is in the meeting. What does a heat-recovery steam generator add?",
      choices: [
        { id: "d5q4a", text: "A second gas compressor that burns a separate stream of fuel for the extra power." },
        { id: "d5q4b", text: "Extra megawatts from exhaust heat, without a second fuel burn." },
        { id: "d5q4c", text: "A cooling tower installed in the yard in place of the electrical generator." },
        { id: "d5q4d", text: "An inverter that stores the exhaust gas and releases it at the next peak." },
      ],
    },
    {
      id: "d5q5",
      level: 1,
      prompt: "What is combined heat and power, in one line?",
      choices: [
        { id: "d5q5a", text: "Two plants billed on one invoice, with the leftover heat thrown away at both of them." },
        { id: "d5q5b", text: "A peaker that runs only in winter so the exhaust leaving the stack stays cool." },
        { id: "d5q5c", text: "Electricity plus useful heat or steam from one fuel, for a host that wants the heat." },
        { id: "d5q5d", text: "Power from one plant and steam from a separate boiler, with no shared use of fuel." },
      ],
    },
    {
      id: "d5q6",
      level: 2,
      prompt: "Why does a simple-cycle peaker's national capacity factor stay low even though the machine can run?",
      choices: [
        { id: "d5q6a", text: "It costs more fuel per megawatt-hour, so it runs when that fuel is worth paying for." },
        { id: "d5q6b", text: "The grid frequency forbids operation past a few hundred hours in a normal year." },
        { id: "d5q6c", text: "A peaker has no generator of its own, so it cannot stay synchronized for long." },
        { id: "d5q6d", text: "A standing rule caps a peaker at a few hundred hours, whatever the system will pay." },
      ],
    },
    {
      id: "d5q7",
      level: 2,
      prompt: "A battery is offered as a substitute for the next short peak. What can you say from this week?",
      choices: [
        { id: "d5q7a", text: "A battery is slower than a steam cycle, so it cannot cover a short evening peak on its own." },
        { id: "d5q7b", text: "The battery size in one British example is the size this plant is required to install." },
        { id: "d5q7c", text: "A battery replaces the scheduling entity, so this plant no longer needs a separate one." },
        { id: "d5q7d", text: "A battery can move faster than a rotating machine until its charge is gone." },
      ],
    },
    {
      id: "d5q8",
      level: 1,
      prompt: "What voltages do you write on the one-page diagram?",
      choices: [
        { id: "d5q8a", text: "60 Hz measured at the generator and 50 Hz measured out in the switchyard." },
        { id: "d5q8b", text: "138 kV at the generator and 13.8 kV on the transmission side of the yard." },
        { id: "d5q8c", text: "13.8 kV measured at the generator and 138 kV measured in the switchyard." },
        { id: "d5q8d", text: "The round example voltages from Monday's film, because they match every plant." },
      ],
    },
    {
      id: "d5q9",
      level: 2,
      prompt: "How do you describe the machines and the transformers in one breath?",
      choices: [
        { id: "d5q9a", text: "Twelve engines on one shared stack, as in the optional engine animation." },
        { id: "d5q9b", text: "Six GE MS7001B gas turbines. Three transformers, two generators each." },
        { id: "d5q9c", text: "Six turbines, each with its own transformer, so one transformer outage trips one unit." },
        { id: "d5q9d", text: "Six turbines feeding one heat-recovery boiler that stays in service with them." },
      ],
    },
    {
      id: "d5q10",
      level: 2,
      prompt: "Why can a standard-condition megawatt and a hot-day net megawatt both be honest?",
      choices: [
        { id: "d5q10a", text: "Megawatts and megawatt-hours are the same unit, so both labels fit either test." },
        { id: "d5q10b", text: "The standard-condition test already subtracts the hot-afternoon air effect." },
        { id: "d5q10c", text: "The two figures are required to match, so one of the sheets has a typo." },
        { id: "d5q10d", text: "Hot inlet air is less dense, so output falls, and net also subtracts plant use." },
      ],
    },
    {
      id: "d5q11",
      level: 2,
      prompt: "Who is on the far side of the 138 kV breakers, and what is still open?",
      choices: [
        { id: "d5q11a", text: "A transmission service provider interface, and who switches it is still unconfirmed." },
        { id: "d5q11b", text: "The scheduling entity owns those breakers and is the only party that operates them." },
        { id: "d5q11c", text: "The plant exports at generator voltage, with no transformer and no utility neighbor." },
        { id: "d5q11d", text: "The remote operations center opens the yard breakers without anyone on site." },
      ],
    },
    {
      id: "d5q12",
      level: 1,
      prompt: "Who calls ERCOT for the plant? What is a Qualified Scheduling Entity?",
      choices: [
        { id: "d5q12a", text: "The transmission service provider that owns the breakers and switches them in the 138 kV yard." },
        { id: "d5q12b", text: "A market participant qualified under Protocol Section 16 to speak for the plant and settle." },
        { id: "d5q12c", text: "ERCOT itself, the organization that dispatches generation and balances the region." },
        { id: "d5q12d", text: "The plant's remote operations center, placing the market calls without a scheduler." },
      ],
    },
  ],
  sections: [
    {
      id: "intro",
      title: "One page for the plant",
      minutes: 5,
      level: 1,
      kind: "intro",
      blocks: [
        {
          type: "p",
          text: "Two questions decide the page: how big is Viper Power, and who calls ERCOT when a unit is out? There are three capacity figures and a yard of shared transformers. The page has to carry both.",
        },
        {
          type: "p",
          text: "The drone photo and the install photos are not in this course pack, so you will label a block diagram and list what the site still has to confirm. No owner name, no prior-site name, no permit number, and no drawing number goes on the page.",
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
          text: "ERCOT serves more than 27 million Texas customers, about 90 percent of the state's electric load. The Public Utility Commission of Texas and the Texas Legislature oversee it. Reliability standards still exist: NERC writes them and FERC approves them. The sentence for the page is that the PUCT oversees the ERCOT market, the reliability standards still apply, and compliance gets the question before a project changes protection, voltage control, or cyber boundaries.",
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
            "Charge is conserved and quantised. Current is charge per time, in amperes. Potential difference is work per charge, in volts.",
            "Ohm's law is V = IR when conditions are steady. Series resistances add. Parallel branches share one voltage. Line heating is I²R, which is why voltage is stepped up.",
            "MW is power now. MWh is that power times hours. 1 kWh = 3.6×10⁶ J.",
            "Ordinary wires are not bulk energy storage. Rotating machines and connected storage contain energy, but continuous system balance is still needed.",
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
          text: "Twelve questions, because this check covers the week. You'll see why each answer is right or wrong when you submit.",
        },
      ],
    },
  ],
};

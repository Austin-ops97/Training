import type { Lesson } from "@/lib/types";

export const day3: Lesson = {
  id: "w1d3",
  week: 1,
  day: 3,
  title: "Gas turbines, combined cycle, and useful heat",
  summary: "A vendor priced a heat-recovery boiler for Viper Power. This lesson is how you tell a simple cycle from a plant that keeps the exhaust.",
  objectives: [
    "Name the Brayton path: compressor, combustor, turbine, and a hot stack.",
    "Explain what a heat-recovery steam generator adds, and which megawatts depend on it.",
    "Describe combined heat and power as electricity plus useful heat, with the efficiency comparison kept general.",
    "Place Viper Power in the simple-cycle row and say the capacity basis out loud.",
  ],
  exercises: [],
  quizIds: ["d3q1", "d3q2", "d3q3", "d3q4", "d3q5", "d3q6", "d3q7", "d3q8", "d3q9", "d3q10"],
  sources: [
    {
      title: "GE Vernova, How a gas turbine works",
      detail:
        "In-lesson video. Compressor, combustor, turbine, and generator. An overview of a product line, not a Viper Power unit. The 'over 3,000 rpm' line is not a plant setpoint.",
    },
    {
      title: "DTE Energy, How a Combined-Cycle, Natural-Gas Power Plant Works",
      detail:
        "In-lesson video. Heat-recovery steam generator and a second turbine. The machine on screen is a combined-cycle unit at another utility, about 300 tons in the narration. Those details do not transfer.",
    },
    {
      title: "INNIO, What is Combined Heat and Power?",
      detail:
        "In-lesson video. An engine can make electricity and useful heat. The savings and emissions lines are a marketing story about one town, not engineering data for this plant.",
    },
    {
      title: "Wärtsilä, 220 MW engine plant",
      detail:
        "Optional in-lesson animation. Title and channel confirmed by oEmbed on 12 October 2026. No spoken transcript was retrieved, so the clip is not required and no quiz fact depends on it. The title's 220 MW and 12 engines describe that animation, not Viper Power.",
    },
    {
      title: "U.S. EPA, combined heat and power",
      detail:
        "https://www.epa.gov/chp/what-chp reviewed 12 October 2026. Electricity plus useful thermal energy. CHP can exceed 80 percent, compared with about 50 percent for typical separate generation plus an on-site boiler. Configurations include a combustion turbine or reciprocating engine with heat recovery, and a steam boiler with a steam turbine.",
    },
    {
      title: "U.S. Energy Information Administration, generation shares and heat-rate examples",
      detail:
        "Generation page, 2022 data: natural-gas combined cycle about 33.8 percent of US utility-scale net generation, single-cycle combustion turbines about 3.6 percent. FAQ https://www.eia.gov/tools/faqs/faq.php?id=107&t=3 : efficiency in percent is 3,412 Btu per kWh divided by heat rate. The 10,500 and 7,500 Btu/kWh examples are theirs, not a Viper Power heat rate.",
    },
    {
      title: "Plant description used this week",
      detail:
        "Six GE MS7001B machines on pipeline natural gas only. Documents also say 7B, 7E, and 7B/E, so the hardware still needs confirmation. About 330 MW net at 95°F in the gas-turbine operating procedure. About 65 MW per unit at standard conditions on the 2024 test. A prior-owner sheet says about 360 MW. Controls in the library are a TTS system on an Allen-Bradley PLC-5. The GE books describe the mechanical machine. Operator training describes the combustion system as LEC; the course outline calls that a PSM retrofit. Confirm the vendor on site. This week does not quiz combustion-mode names.",
    },
  ],
  questions: [
    {
      id: "d3c1",
      level: 1,
      prompt: "Put a simple-cycle gas turbine's gas path in order.",
      choices: [
        { id: "d3c1a", text: "Compressor, combustor, turbine. The exhaust then leaves hot." },
        { id: "d3c1b", text: "Condenser, boiler, cooling tower. The air is compressed after that." },
        { id: "d3c1c", text: "Steam turbine, pump, condenser. The compressor is an optional extra." },
        { id: "d3c1d", text: "Inverter, battery, solar field. The combustor stores the leftover heat." },
      ],
    },
    {
      id: "d3c2",
      level: 1,
      prompt: "A combined-cycle plant makes extra megawatts from the gas-turbine exhaust. Where does that extra energy come from?",
      choices: [
        { id: "d3c2a", text: "A second gas compressor burns another fuel stream to make those extra megawatts." },
        { id: "d3c2b", text: "The stack stores the exhaust overnight and returns it as electricity next morning." },
        { id: "d3c2c", text: "Exhaust heat boils water in a recovery boiler, without burning more fuel." },
        { id: "d3c2d", text: "The steam turbine replaces the gas turbine, so the compressor comes off the train." },
      ],
    },
    {
      id: "d3q1",
      level: 1,
      prompt: "What cycle is a simple-cycle gas turbine running?",
      choices: [
        { id: "d3q1a", text: "Rankine, because the combustor boils a stream of water." },
        { id: "d3q1b", text: "Brayton: compress air, burn fuel in it, and expand the hot gas." },
        { id: "d3q1c", text: "A condenser cycle, because the stack turns the exhaust back into water." },
        { id: "d3q1d", text: "Combined heat and power, because every stack serves a steam host." },
      ],
    },
    {
      id: "d3q2",
      level: 1,
      prompt: "Which three sections are on the gas path of that machine?",
      choices: [
        { id: "d3q2a", text: "Boiler, condenser, and cooling tower." },
        { id: "d3q2b", text: "Dam, penstock, and wicket gate." },
        { id: "d3q2c", text: "Reactor, steam generator, and pressurizer." },
        { id: "d3q2d", text: "Compressor, combustor, and turbine." },
      ],
    },
    {
      id: "d3q3",
      level: 1,
      prompt: "The vendor calls the boiler on the exhaust a recovery unit. What is the ordinary name, and what does it feed?",
      choices: [
        { id: "d3q3a", text: "A step-up transformer, which raises exhaust pressure up to transmission voltage." },
        { id: "d3q3b", text: "A condenser, which turns the hot exhaust gas back into gas for the pipeline." },
        { id: "d3q3c", text: "A heat-recovery steam generator, which makes steam from exhaust headed for the stack." },
        { id: "d3q3d", text: "A governor, which holds grid frequency by cooling the gas before it leaves." },
      ],
    },
    {
      id: "d3q4",
      level: 1,
      prompt: "Priya asks what combined heat and power adds beyond electricity.",
      choices: [
        { id: "d3q4a", text: "Useful thermal energy: process heat, steam, hot water, or chilled water." },
        { id: "d3q4b", text: "A second generator voltage, with no use found for the leftover heat at all." },
        { id: "d3q4c", text: "A second interconnection, so the plant can sell into two grids at once." },
        { id: "d3q4d", text: "Storage of the exhaust as chemical energy inside a site battery." },
      ],
    },
    {
      id: "d3q5",
      level: 2,
      prompt: "How should you use the over-80-percent comparison in a memo?",
      choices: [
        { id: "d3q5a", text: "It is the heat rate measured on this plant's pipeline-gas turbines." },
        { id: "d3q5b", text: "It is the annual capacity factor of the national simple-cycle fleet." },
        { id: "d3q5c", text: "It is the capture limit the wind lesson gives for a turbine in open air." },
        { id: "d3q5d", text: "Combined heat can exceed 80 percent useful output, and that is not this plant." },
      ],
    },
    {
      id: "d3q6",
      level: 2,
      prompt: "Where does Viper Power sit in today's four rows?",
      choices: [
        { id: "d3q6a", text: "Combined cycle, because a row of six turbines implies a steam plant behind them." },
        { id: "d3q6b", text: "Simple-cycle gas turbines, with the exhaust leaving and no steam turbine." },
        { id: "d3q6c", text: "Combined heat and power, because a host sits just beyond the fence line." },
        { id: "d3q6d", text: "Reciprocating engines, matching the optional animation of an engine row." },
      ],
    },
    {
      id: "d3q7",
      level: 2,
      prompt: "The vendor's slide shows a 300-ton combined-cycle machine and a price for the same scope here. What is that slide good for?",
      choices: [
        { id: "d3q7a", text: "It is this plant's as-built weight, so a foundation calc can use 300 tons." },
        { id: "d3q7b", text: "It stands in for the heat-rate test this week does not have on file." },
        { id: "d3q7c", text: "It is the standard weight of every Frame 7, simple cycle or not." },
        { id: "d3q7d", text: "It shows someone else's machine, and that weight does not describe this plant." },
      ],
    },
    {
      id: "d3q8",
      level: 2,
      prompt: "Two people quote the plant as 330 MW and as 65 MW per unit. What do you ask before you pick one?",
      choices: [
        { id: "d3q8a", text: "Which figure is the generator voltage printed on the nameplate." },
        { id: "d3q8b", text: "Whether each quote is net or gross, and what outdoor condition it uses." },
        { id: "d3q8c", text: "Which figure was taken in megawatt-hours rather than in megawatts." },
        { id: "d3q8d", text: "Which figure is the grid frequency the unit synchronized to." },
      ],
    },
    {
      id: "d3q9",
      level: 2,
      prompt: "Priya mixes a generation share into a capacity-factor sentence. Which pair is the 2022 share of US utility-scale generation?",
      choices: [
        { id: "d3q9a", text: "Combined cycle about 33.8 percent, and single-cycle turbines about 3.6 percent." },
        { id: "d3q9b", text: "Nuclear at 91.0 percent and hydro at 35.3 percent, which are capacity factors." },
        { id: "d3q9c", text: "Simple-cycle turbines about 33.8 percent, and combined cycle about 3.6 percent." },
        { id: "d3q9d", text: "Both rows near 50 percent, matching the separate-boiler comparison." },
      ],
    },
    {
      id: "d3q10",
      level: 2,
      prompt: "A host site wants electricity and steam from one fuel, using engines. Which configuration matches?",
      choices: [
        { id: "d3q10a", text: "A solar array with a cooling tower and no heat host on the site." },
        { id: "d3q10b", text: "A dam paired with a coal pulverizer and a cooling tower on the same site." },
        { id: "d3q10c", text: "A reciprocating engine with heat recovery, which is not this peaker." },
        { id: "d3q10d", text: "A step-up transformer paired only with a battery on the same bus." },
      ],
    },
  ],
  sections: [
    {
      id: "intro",
      title: "The vendor drew a boiler on our exhaust",
      minutes: 5,
      level: 1,
      kind: "intro",
      blocks: [
        {
          type: "p",
          text: "A vendor's proposal treats Viper Power as a combined-cycle plant and prices a heat-recovery boiler. Priya asks if that scope belongs on this site. Dana wants the answer in one sentence before the call.",
        },
        {
          type: "p",
          text: "Today's problem is that proposal. The project question is always the same: what is the prime mover, what happens to the leftover heat, and which megawatts disappear if that heat-recovery equipment is out?",
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
          text: "A simple-cycle gas turbine compresses a large mass of air, burns fuel in that air, and expands the hot gas through a turbine. The turbine drives the compressor and the generator. Exhaust leaves hot, out a stack. There is no steam turbine on the back of it.",
        },
        {
          type: "diagram",
          diagram: "brayton",
        },
        {
          type: "p",
          text: "That leftover exhaust is why a simple-cycle machine uses more fuel per megawatt-hour than a combined cycle. It can still be the right machine when the hours that matter are few and the start has to be quick. Peakers live on that trade. Tomorrow puts national numbers on how few those hours are.",
        },
        {
          type: "callout",
          tone: "pm",
          title: "Know your basis",
          text: "Hot inlet air is less dense, so less mass flows and output falls. A summer megawatt is not the same figure as a standard-condition megawatt. The usual reference point is 59°F, sea level, and 60 percent relative humidity. Ask which one the speaker means. This lesson does not invent a derate curve.",
        },
        {
          type: "terms",
          items: [
            { term: "Brayton", meaning: "Compress, burn, expand. The gas-turbine cycle." },
            { term: "Simple cycle", meaning: "The exhaust leaves. No second turbine recovers it." },
            { term: "HRSG", meaning: "Heat-recovery steam generator. Exhaust heat makes steam for more electricity." },
            { term: "CHP", meaning: "Combined heat and power. Electricity and useful heat from one fuel." },
          ],
        },
      ],
    },
    {
      id: "video-gt",
      title: "Visual — the gas path, then the recovered heat",
      minutes: 6,
      level: 1,
      kind: "visual",
      videoIds: ["V06", "V07"],
      blocks: [
        {
          type: "p",
          text: "Two short clips share this section. In the first, watch the air move through compressor, combustor, and turbine. In the second, watch what a combined-cycle plant does with exhaust that a simple-cycle plant would throw away. The machine in the second clip is not this plant.",
        },
        {
          type: "ul",
          afterVideo: true,
          items: [
            "The gas turbine spins the compressor and the generator. The 'over 3,000 rpm' line is product language, not a setpoint here.",
            "A heat-recovery steam generator turns exhaust into steam, and a steam turbine makes more electricity without a second fuel stream for that steam.",
            "The combined-cycle machine on screen is about 300 tons, at another utility. Weight, frame, and nameplate stay there.",
          ],
        },
      ],
    },
    {
      id: "check-path",
      title: "Checkpoint — simple cycle or recovered heat",
      minutes: 4,
      level: 1,
      kind: "checkpoint",
      questionIds: ["d3c1", "d3c2"],
      blocks: [
        { type: "p", text: "Quick check: commit to an answer before you read on." },
      ],
    },
    {
      id: "chp",
      title: "Useful heat, and the engine row",
      minutes: 8,
      level: 1,
      kind: "core",
      blocks: [
        {
          type: "p",
          text: "Combined heat and power makes electricity and useful heat from one fuel: process heat, steam, hot water, or chilled water. A matched system can put more than 80 percent of the fuel to use. Making electricity in one plant and steam in a separate boiler is often nearer 50 percent. The two common arrangements are a combustion turbine or a reciprocating engine with heat recovery, and a steam boiler with a steam turbine.",
        },
        {
          type: "p",
          text: "That heat needs a host all year. A peaker that runs a few hundred hours does not have one. Viper Power's stacks are not a combined-heat plant. The 80 percent and 50 percent figures are a general comparison, not a test of this site.",
        },
        {
          type: "p",
          text: "In 2022, combined-cycle gas plants produced about 33.8 percent of US utility-scale electricity, and single-cycle combustion turbines about 3.6 percent. That is a share of the energy produced, not a capacity factor and not an efficiency.",
        },
        {
          type: "callout",
          tone: "advanced",
          title: "Level 3 — two efficiency examples that are not this plant",
          text: "Efficiency in percent is 3,412 Btu per kWh divided by the heat rate in Btu per kWh. A heat rate of 10,500 Btu/kWh is about 33 percent (3,412 / 10,500 = 0.325). A heat rate of 7,500 Btu/kWh is about 45 percent (3,412 / 7,500 = 0.455). Those are published examples. This week has no heat rate for Viper Power, so none is used.",
        },
      ],
    },
    {
      id: "video-chp",
      title: "Visual — heat used on purpose",
      minutes: 6,
      level: 1,
      kind: "visual",
      videoIds: ["V08", "V09"],
      blocks: [
        {
          type: "p",
          text: "The first clip is about 2 minutes. While you watch, notice the engine making electricity and the heat going to buildings instead of a radiator. The second clip is optional: an animation of many engines at a site that is not this one. No quiz fact depends on its narration.",
        },
        {
          type: "ul",
          afterVideo: true,
          items: [
            "An engine can be a combined-heat prime mover. The savings story in the clip is marketing for that town. Leave those counts out of a project note.",
            "The optional animation's title describes 220 MW and 12 engines. That is the animation, not Viper Power.",
          ],
        },
      ],
    },
    {
      id: "apply",
      title: "The reply to the vendor",
      minutes: 8,
      level: 2,
      kind: "application",
      blocks: [
        {
          type: "p",
          text: "Viper Power is the simple-cycle row: GE MS7001B machines, called 7B, 7E, and 7B/E in different documents, on pipeline natural gas only. The controls in the library are a TTS system on an Allen-Bradley PLC-5. The GE manuals describe the mechanical machine, not the control screens that are installed. Operator training describes the combustion system as LEC, and the course material calls that a PSM retrofit rather than the OEM's own low-NOx system. Confirm the vendor and the hardware with the site before a parts list. This week does not quiz combustion modes.",
        },
        {
          type: "p",
          text: "Three capacity approximates sit side by side. The operating procedure: about 330 MW net at 95°F for the plant. The 2024 test: about 65 MW per unit at standard conditions. A prior-owner sheet: about 360 MW. Six times 65 is 390, which is not the same kind of number as 330 net on a hot day. Friday does that subtraction with the labels attached.",
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
      title: "Exercise — four rows, no invented start times",
      minutes: 10,
      level: 2,
      kind: "exercise",
      blocks: [
        {
          type: "p",
          text: "Make a four-row table: simple cycle, combined cycle, combined heat and power, and a reciprocating-engine plant. For each row write the prime mover, what happens to leftover heat, and what the arrangement is for. Use only this lesson. This course does not give a verified start-time or efficiency column for those rows, so leave those cells blank. Mark the section complete when all four rows have a heat sentence and Viper Power appears only in the simple-cycle row.",
        },
        {
          type: "ul",
          items: [
            "Simple cycle: exhaust heat leaves the stack. Used when the important hours are few.",
            "Combined cycle: a heat-recovery steam generator and a steam turbine turn that exhaust into more electricity.",
            "Combined heat and power: leftover heat serves a host. The 80 percent comparison is the general one.",
            "Engine plant: an engine with heat recovery is one combined-heat configuration. The optional animation is many engines at someone else's site.",
          ],
        },
      ],
    },
    {
      id: "quiz",
      title: "Knowledge check",
      minutes: 11,
      level: 1,
      kind: "quiz",
      blocks: [
        { type: "p", text: "Ten questions. You'll see why each answer is right or wrong when you submit." },
      ],
    },
  ],
};

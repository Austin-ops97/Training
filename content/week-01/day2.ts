import type { Lesson } from "@/lib/types";

export const day2: Lesson = {
  id: "w1d2",
  week: 1,
  day: 2,
  title: "Steam plants: the Rankine cycle in coal and nuclear stations",
  summary: "What spins the shaft when the plant boils water, and where the heat is thrown away.",
  objectives: [
    "Name the Rankine cycle and sketch boiler or reactor, turbine, condenser, and pump.",
    "Explain that coal and a pressurized-water nuclear plant differ in the heat source, not in the need for a steam turbine and a generator.",
    "Say where heat enters the cycle and where heat is rejected, and why that rejection is not optional.",
    "Keep steam-plant equipment off the Viper Power scope. Viper Power is a simple-cycle gas plant.",
  ],
  exercises: [],
  quizIds: ["d2q1", "d2q2", "d2q3", "d2q4", "d2q5", "d2q6", "d2q7", "d2q8", "d2q9", "d2q10", "d2q11"],
  questions: [
    {
      id: "d2c1",
      level: 1,
      prompt: "In the Rankine loop, where does the heat that the cycle cannot turn into electricity leave?",
      choices: [
        "In the generator stator, as the main energy product.",
        "In the step-up transformer.",
        "In the condenser, into cooling water or a cooling tower.",
        "It does not leave. The cycle is 100 percent efficient.",
      ],
    },
    {
      id: "d2c2",
      level: 1,
      prompt: "On a pressurized-water nuclear plant, what replaces the coal fire?",
      choices: [
        "The generator burns uranium directly.",
        "The cooling tower is the heat source.",
        "Photovoltaic panels on the containment building.",
        "Heat from fission in the reactor. A separate circuit boils the turbine steam.",
      ],
    },
    {
      id: "d2q1",
      level: 1,
      prompt: "What thermodynamic cycle does a steam plant use?",
      choices: [
        "Brayton",
        "Rankine",
        "Otto",
        "A cycle with no heat rejection",
      ],
    },
    {
      id: "d2q2",
      level: 1,
      prompt: "Which sequence is the Rankine loop?",
      choices: [
        "Compressor, combustor, gas turbine, stack, with no boiler.",
        "Solar cell, inverter, battery, only.",
        "Heat in at the boiler or reactor, expand in the steam turbine, reject heat in the condenser, pump the liquid back.",
        "Condenser first, then the boiler, with no turbine.",
      ],
    },
    {
      id: "d2q3",
      level: 1,
      prompt: "What do a coal plant and a pressurized-water nuclear plant share?",
      choices: [
        "They both burn pulverized coal in the reactor vessel.",
        "Neither one uses a condenser.",
        "Both are simple-cycle gas turbines.",
        "A steam turbine driving a generator. The heat source is what changes.",
      ],
    },
    {
      id: "d2q4",
      level: 1,
      prompt: "What does the condenser do?",
      choices: [
        "It raises generator voltage to transmission voltage.",
        "It turns exhaust steam back into water and rejects heat the cycle did not convert.",
        "It pulverizes coal.",
        "It is optional. The steam can be vented and the water replaced for free with no consequence.",
      ],
    },
    {
      id: "d2q5",
      level: 1,
      prompt: "Why does the coal-plant video say you cannot put raw lake or city water straight into a high-pressure boiler?",
      choices: [
        "Water cannot be pumped.",
        "Boilers only run on steam from a river, never on treated water.",
        "Untreated water causes corrosion and deposits. It has to be filtered and deaerated before it is boiler feedwater.",
        "The PUCT bans deaerator vessels.",
      ],
    },
    {
      id: "d2q6",
      level: 2,
      prompt: "What is the project-manager point of a condenser or cooling-tower outage on a steam plant?",
      choices: [
        "Only the paint on the tower is affected.",
        "The gas-turbine combustor trips, because every plant has one.",
        "Frequency rises because less heat is rejected.",
        "The cycle stops rejecting heat, so the plant cannot keep making steam power. It is a production problem, not a cosmetic one.",
      ],
    },
    {
      id: "d2q7",
      level: 1,
      prompt: "What did EIA Table 6.07.B report as the US utility-scale nuclear capacity factor for annual 2025?",
      choices: [
        "14.1 percent, which is the gas-turbine figure from a different table.",
        "91.0 percent, and the table marks 2025 as preliminary.",
        "35.3 percent, which is the hydro figure from the same table.",
        "The table does not report nuclear.",
      ],
    },
    {
      id: "d2q8",
      level: 2,
      prompt: "How should you use that 91.0 percent figure?",
      choices: [
        "As Viper Power's capacity factor.",
        "As the efficiency of a Rankine cycle.",
        "As a national annual statistic for utility-scale nuclear, preliminary for 2025. It is not a Viper Power number and not an ERCOT-only number.",
        "As a setpoint the operator holds every hour.",
      ],
    },
    {
      id: "d2q9",
      level: 1,
      prompt: "The short steam-turbine video lists four steps. What is the last of the four?",
      choices: [
        "Step the voltage up to 138 kV.",
        "Start a reciprocating engine.",
        "Shed load at ERCOT.",
        "Cool the exhaust steam back to liquid so it can be pumped to the boiler again.",
      ],
    },
    {
      id: "d2q10",
      level: 2,
      prompt: "Which sentence is true of Viper Power?",
      choices: [
        "It has a coal boiler and a cooling tower as its prime mover.",
        "It is not a Rankine plant. The steam equipment in today's videos is industry context, not Viper Power scope.",
        "It is a pressurized-water reactor.",
        "SOP 029 describes it as a combined-cycle steam plant.",
      ],
    },
    {
      id: "d2q11",
      level: 3,
      prompt: "The nuclear video describes three water circuits on those Belgian pressurized-water units. What is the safe lesson to take, without memorizing their temperatures?",
      choices: [
        "All three circuits are the same water, boiled inside the reactor and sent to the cooling tower.",
        "The tertiary circuit is the fuel.",
        "Reactor cooling water and turbine steam are separate. Heat crosses a steam generator. A third circuit cools the condenser.",
        "Those temperatures and the 1.3 second rod time are universal setpoints for every plant, including gas turbines.",
      ],
    },
  ],
  sections: [
    {
      id: "intro",
      title: "Why a gas-plant PM still learns steam",
      minutes: 4,
      level: 1,
      kind: "intro",
      blocks: [
        {
          type: "p",
          text: "Most of the world's electricity still comes from a turbine. EIA's generation page, updated 31 October 2023 with data through 2022, says steam turbines accounted for about 42 percent of US generation that year, and combined-cycle plants about 34 percent. You will sit in reviews next to people who use Rankine words. You need the loop, not a boiler operator's license.",
        },
        {
          type: "p",
          text: "Viper Power does not boil water to make its megawatts. Hold that line. Today's plants are the comparison case.",
        },
      ],
    },
    {
      id: "rankine",
      title: "The Rankine loop",
      minutes: 10,
      level: 1,
      kind: "core",
      blocks: [
        {
          type: "p",
          text: "A Rankine cycle boils a liquid, expands the vapor in a turbine, condenses the vapor back to liquid, and pumps the liquid up to boiler pressure again. Heat goes in at the boiler or the reactor's steam generator. Heat comes out at the condenser. The difference, minus the pump work and the real losses, is the shaft power. The generator turns that shaft power into electricity.",
        },
        {
          type: "steps",
          title: "Sketch this before the videos",
          items: [
            "Heat in: boiler fire, or nuclear heat into a steam generator.",
            "Steam turbine: high-pressure steam pushes blades and spins the shaft.",
            "Generator: the shaft spins the field inside the stator.",
            "Condenser: leftover steam becomes water. Cooling water or a tower carries the rejected heat away.",
            "Pump: liquid water goes back to be heated again.",
          ],
        },
        {
          type: "p",
          text: "The condenser is not a courtesy. If you cannot reject heat, you cannot keep the cycle turning. A loss of vacuum, a plugged condenser, or a cooling-tower failure is a megawatt failure. That is the failure consequence a project manager should be able to say out loud.",
        },
        {
          type: "callout",
          tone: "advanced",
          title: "Level 3 — why the cycle cannot use all the heat",
          text: "Any heat engine that takes heat in at one temperature and rejects heat at a lower temperature has a ceiling set by those two temperatures. You do not need the formula this week. You do need the consequence: a large share of the fuel energy leaves at the condenser or the stack. Combined cycle and combined heat and power, tomorrow, exist because of that leftover heat.",
        },
      ],
    },
    {
      id: "video-coal",
      title: "Visual — coal plant systems",
      minutes: 8,
      level: 1,
      kind: "visual",
      videoIds: ["V03"],
      blocks: [
        {
          type: "p",
          text: "Listed length 7:10. Budget 8 minutes. The retrieved narration walks the fuel path (yard, pulverizer, burners) and the water path (makeup, deaerator, feed pump, economizer, water-tube boiler). The narrator says steam turbines need steam at very high pressure and that raw water would corrode a boiler, so it is treated first. He then says the 3D component models are a later video. This clip alone does not finish the condenser. The one-minute steam-turbine clip does.",
        },
        {
          type: "callout",
          tone: "note",
          title: "Do not memorize the boiler pressure",
          text: "The narrator says feedwater pressure is in excess of about 200 bar, around 3,000 psi, as a general remark about large water-tube boilers. That is not a Viper Power number, and it is not a number this course tests.",
        },
      ],
    },
    {
      id: "video-nuclear",
      title: "Visual — nuclear heat, same steam idea",
      minutes: 5,
      level: 1,
      kind: "visual",
      videoIds: ["V04"],
      blocks: [
        {
          type: "p",
          text: "Listed length 4:08. Budget 5 minutes. ENGIE's clip is about specific Belgian pressurized-water plants. The transferable lesson is the one the narrator states first: the plant works like a thermal plant, except fission, not a flame, makes the heat. On those units the reactor water stays liquid under pressure and gives its heat to a second circuit that becomes turbine steam. A third circuit cools the condenser, and a tower dumps heat to the air.",
        },
        {
          type: "callout",
          tone: "flag",
          title: "Those plants are not the template for every reactor",
          text: "Boiling-water reactors boil water in the reactor vessel itself. Do not leave this video thinking every nuclear unit has three circuits, or that the temperatures and the control-rod time in the narration are universal. None of them apply to Viper Power.",
        },
      ],
    },
    {
      id: "video-steam",
      title: "Visual — four steps, including the condenser",
      minutes: 2,
      level: 1,
      kind: "visual",
      videoIds: ["V05"],
      blocks: [
        {
          type: "p",
          text: "Listed length 1:07. Budget 2 minutes. Enerdynamics states the loop in one pass: burn a fuel, boil water, spin the turbine and generator, cool the exhaust steam back to liquid, and pump it to the boiler. Flue gas goes up a stack, and emissions equipment depends on the fuel. The retrieved text ends as the narrator starts a fuel list, which matches a one-minute clip.",
        },
      ],
    },
    {
      id: "check-loop",
      title: "Checkpoint — where the heat goes",
      minutes: 4,
      level: 1,
      kind: "checkpoint",
      questionIds: ["d2c1", "d2c2"],
      blocks: [
        {
          type: "p",
          text: "Two checks. Mark heat in and heat out on your sketch before you submit.",
        },
      ],
    },
    {
      id: "apply",
      title: "What a PM does with the loop",
      minutes: 8,
      level: 2,
      kind: "application",
      blocks: [
        {
          type: "p",
          text: "EIA Table 6.07.B, downloaded for this lesson from the Electric Power Monthly workbook, reports a 2025 annual nuclear capacity factor of 0.910. The sheet says values for 2025 and 2026 are preliminary. As a percent, that is 91.0 percent. The same sheet's 2025 hydro capacity factor is 0.353 (35.3 percent). These are national utility-scale figures, not ERCOT and not any one plant. The outline's 'about 90 percent or higher' for nuclear matches this preliminary year. Quote the table, the year, and the word preliminary.",
        },
        {
          type: "p",
          text: "Capacity factor is actual energy divided by the energy the plant could have made if it had run at its rated capacity for every hour in the period. A high nuclear figure means the fleet ran most of the hours. It does not mean the machine is more efficient than a gas turbine. Efficiency and capacity factor are different. Tomorrow and Day 4 separate them.",
        },
        {
          type: "callout",
          tone: "pm",
          title: "Level 2 — interfaces you will hear on a steam project",
          text: "Fuel or reactor heat, water chemistry, condenser cooling, and the generator are four different contracts that all have to work on the same day. A project that 'only' changes cooling or water treatment can take the megawatts away. Ask which circuit the work isolates, and what the plant can still generate while that circuit is out.",
        },
        {
          type: "callout",
          tone: "flag",
          title: "Viper Power boundary",
          text: "Inventory lesson C01.1.1 describes Viper Power as gas turbines on pipeline natural gas, about 330 MW net at 95°F in SOP 029. There is no Rankine boiler in that description. Do not import coal-yard, reactor, or cooling-tower scope into a Viper Power outage plan unless a current document adds it. None in the Week 1 set does.",
        },
      ],
    },
    {
      id: "exercise",
      title: "Exercise — sketch the loop",
      minutes: 8,
      level: 2,
      kind: "exercise",
      blocks: [
        {
          type: "p",
          text: "On paper, draw boiler or reactor, steam turbine, generator, condenser, and pump. Mark an arrow 'heat in' and an arrow 'heat thrown away.' Under the sketch, write one sentence on why the condenser exists, and one sentence that says this drawing is not the Viper Power cycle. There is no numeric grade. Mark the section complete when the sketch has both arrows.",
        },
      ],
    },
    {
      id: "quiz",
      title: "Knowledge check",
      minutes: 12,
      level: 1,
      kind: "quiz",
      questionIds: ["d2q1", "d2q2", "d2q3", "d2q4", "d2q5", "d2q6", "d2q7", "d2q8", "d2q9", "d2q10", "d2q11"],
      blocks: [
        {
          type: "p",
          text: "Eleven questions. The last one is Level 3. You can miss it and still understand the day. Submit to see explanations.",
        },
      ],
    },
  ],
};

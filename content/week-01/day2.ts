import type { Lesson } from "@/lib/types";

export const day2: Lesson = {
  id: "w1d2",
  week: 1,
  day: 2,
  title: "The steam cycle a gas-plant PM still has to read",
  summary: "How a Rankine plant boils water, makes power, and rejects heat, and why Viper Power has no condenser.",
  objectives: [
    "Sketch a Rankine loop and say where heat enters and where heat is thrown away.",
    "Separate the fuel fire in a coal plant from fission in a nuclear plant, and keep the steam turbine in both.",
    "Explain why a condenser or cooling failure is a megawatt failure.",
    "Keep national nuclear capacity factor distinct from efficiency, and keep both off the Viper Power sheet.",
  ],
  exercises: [],
  quizIds: ["d2q1", "d2q2", "d2q3", "d2q4", "d2q5", "d2q6", "d2q7", "d2q8", "d2q9", "d2q10"],
  sources: [
    {
      title: "U.S. Energy Information Administration, how electricity is generated",
      detail:
        "https://www.eia.gov/energyexplained/electricity/how-electricity-is-generated.php updated 31 October 2023, data through 2022. Steam turbines about 42 percent of US generation that year, combined cycle about 34 percent.",
    },
    {
      title: "saVRee, Coal-Fired Power Plants Explained",
      detail:
        "In-lesson video. Fuel path and water treatment. The narrator's remark about feedwater pressure near 3,000 psi is a general comment on large water-tube boilers, not a Viper Power number.",
    },
    {
      title: "ENGIE Belgium, How does a nuclear power plant work?",
      detail:
        "In-lesson video about specific Belgian pressurized-water units. Fission replaces the flame. Reactor water and turbine steam are separate on those units. Temperatures and the rod time belong to those units.",
    },
    {
      title: "Enerdynamics, The Steam Turbine",
      detail: "In-lesson video. Fuel heat, boiler steam, turbine and generator, then the condenser.",
    },
    {
      title: "U.S. Energy Information Administration, Electric Power Monthly Table 6.07.B",
      detail:
        "Workbook downloaded 12 October 2026. Annual 2025 nuclear capacity factor 0.910 (91.0 percent) and hydro 0.353 (35.3 percent). The sheet marks 2025 and 2026 preliminary. National utility-scale figures, not this plant and not an efficiency.",
    },
  ],
  questions: [
    {
      id: "d2c1",
      level: 1,
      prompt: "The boiler is healthy and the plant still cannot make power. Which failure fits a Rankine unit?",
      choices: [
        { id: "d2c1a", text: "The step-up transformer, because that winding is where the feedwater is boiled." },
        { id: "d2c1b", text: "The condenser. If it cannot reject heat, the cycle cannot keep turning." },
        { id: "d2c1c", text: "The gas compressor, because every Rankine plant starts by compressing pipeline gas." },
        { id: "d2c1d", text: "The inverter, because a steam plant connects as an inverter-based resource." },
      ],
    },
    {
      id: "d2c2",
      level: 1,
      prompt: "The nuclear clip is about specific pressurized-water units. What is the lesson that travels, and what stays on those units?",
      choices: [
        { id: "d2c2a", text: "Every reactor boils water in the vessel and sends that same water to the tower." },
        { id: "d2c2b", text: "The temperatures and the rod time in the clip are setpoints for a gas turbine too." },
        { id: "d2c2c", text: "A nuclear plant has no condenser, because fission feeds the grid from the vessel." },
        { id: "d2c2d", text: "Fission replaces the flame. On those units, reactor water and turbine steam stay apart." },
      ],
    },
    {
      id: "d2q1",
      level: 1,
      prompt: "What cycle is a coal plant or a nuclear steam plant running?",
      choices: [
        { id: "d2q1a", text: "Rankine: boil a liquid, expand the vapor, condense it, and pump it back." },
        { id: "d2q1b", text: "Brayton, because every turbine compresses air before it produces steam." },
        { id: "d2q1c", text: "A battery cycle, because the condenser stores the day's energy for later." },
        { id: "d2q1d", text: "Combined heat and power, because every condenser sells its steam to a neighbor." },
      ],
    },
    {
      id: "d2q2",
      level: 1,
      prompt: "Where does heat enter a Rankine cycle, and where does the leftover heat leave?",
      choices: [
        { id: "d2q2a", text: "Heat in at the generator, and heat out at the fuel pile beside the boiler." },
        { id: "d2q2b", text: "Heat in at the pump, and heat out when the boiler fires the returning water." },
        { id: "d2q2c", text: "Heat in at the boiler or the steam generator, and heat out at the condenser." },
        { id: "d2q2d", text: "Heat in at the condenser, and heat out through the turbine blades to the shaft." },
      ],
    },
    {
      id: "d2q3",
      level: 1,
      prompt: "A coal plant and a pressurized-water nuclear plant sit on the same drawing. What is shared, and what is not?",
      choices: [
        { id: "d2q3a", text: "Both burn coal in a boiler. The reactor only changes which cooling tower is used." },
        { id: "d2q3b", text: "Coal uses a gas turbine, and the nuclear unit uses a battery in place of a shaft." },
        { id: "d2q3c", text: "The nuclear unit skips the generator and feeds the grid straight from the vessel." },
        { id: "d2q3d", text: "Both end as a steam turbine driving a generator. The heat source is not the same." },
      ],
    },
    {
      id: "d2q4",
      level: 1,
      prompt: "What is the condenser's job?",
      choices: [
        { id: "d2q4a", text: "It burns the fuel a second time so the steam temperature can rise on the next pass." },
        { id: "d2q4b", text: "It turns exhaust steam back into water so the pump can send it around again." },
        { id: "d2q4c", text: "It steps the generator voltage up to the transmission voltage in the yard." },
        { id: "d2q4d", text: "It stores megawatt-hours overnight and releases them at the morning peak." },
      ],
    },
    {
      id: "d2q5",
      level: 2,
      prompt: "Why does a boiler plant treat the water before it becomes steam?",
      choices: [
        { id: "d2q5a", text: "Untreated water would move the grid frequency off the 60 Hz target." },
        { id: "d2q5b", text: "Treatment is the step that raises the plant's transmission voltage." },
        { id: "d2q5c", text: "Raw water leads to corrosion and deposits inside a high-pressure boiler." },
        { id: "d2q5d", text: "The treatment plant is the prime mover that spins the electrical generator." },
      ],
    },
    {
      id: "d2q6",
      level: 2,
      prompt: "A cooling tower is described as only a heat dump. What is the consequence on a steam plant?",
      choices: [
        { id: "d2q6a", text: "If the plant cannot reject heat, it cannot keep making steam power." },
        { id: "d2q6b", text: "Cooling can wait. The turbine keeps its megawatts with the condenser valved out." },
        { id: "d2q6c", text: "A cooling failure changes water chemistry only, and electrical output stays put." },
        { id: "d2q6d", text: "The tower is optional equipment, installed so the yard looks finished." },
      ],
    },
    {
      id: "d2q7",
      level: 2,
      prompt: "The 2025 national nuclear capacity factor is quoted as if it were an efficiency. What is it?",
      choices: [
        { id: "d2q7a", text: "91.0 percent is the efficiency of every steam turbine, including a gas peaker." },
        { id: "d2q7b", text: "91.0 percent, preliminary, is a national capacity factor, not this plant's efficiency." },
        { id: "d2q7c", text: "35.3 percent is the nuclear figure, and 91.0 percent is the hydro fleet." },
        { id: "d2q7d", text: "The figure is Viper Power's own tested efficiency on a 95°F summer afternoon." },
      ],
    },
    {
      id: "d2q8",
      level: 2,
      prompt: "The 2025 nuclear and hydro capacity factors in today's sources are marked preliminary. What does that word change?",
      choices: [
        { id: "d2q8a", text: "Preliminary means the figure is a performance guarantee you can put on this plant." },
        { id: "d2q8b", text: "Preliminary means the fleet ran at full rating and the table rounded down." },
        { id: "d2q8c", text: "A later workbook can revise a preliminary figure. It is still not an efficiency." },
        { id: "d2q8d", text: "Preliminary capacity factor and heat-rate efficiency are the same measurement." },
      ],
    },
    {
      id: "d2q9",
      level: 1,
      prompt: "Put the steam path in order. What is the last step before water returns to be heated?",
      choices: [
        { id: "d2q9a", text: "Cool the exhaust steam back into liquid water before the pump takes it." },
        { id: "d2q9b", text: "Send the steam out onto the transmission line and call that electrical energy." },
        { id: "d2q9c", text: "Burn the condensed water in the combustor with the pipeline gas." },
        { id: "d2q9d", text: "Invert the steam into direct current before it reaches the pump." },
      ],
    },
    {
      id: "d2q10",
      level: 2,
      prompt: "Boiler and cooling-tower scope is proposed for the Viper Power outage. What belongs in the reply?",
      choices: [
        { id: "d2q10a", text: "Approve it. Every gas turbine in simple cycle has a Rankine condenser." },
        { id: "d2q10b", text: "Approve the cooling tower and drop the boiler. The stack condenses the steam." },
        { id: "d2q10c", text: "Move the scope onto the heat-recovery boiler this plant uses after dark." },
        { id: "d2q10d", text: "Viper Power is not a Rankine plant, so that boiler scope does not belong." },
      ],
    },
  ],
  sections: [
    {
      id: "intro",
      title: "A boiler on a gas-turbine outage",
      minutes: 5,
      level: 1,
      kind: "intro",
      blocks: [
        {
          type: "p",
          text: "An outage plan can arrive with a cooling-tower repair and a boiler inspection attached to a gas-turbine plant. By the end of today you can say which plants need a condenser, and why Viper Power does not.",
        },
        {
          type: "p",
          text: "Today's problem is steam scope on a gas-turbine outage. Most of the country's electricity still comes from a turbine that boils water: steam plants were about 42 percent of US generation in 2022, and combined-cycle plants about 34 percent. You will sit next to people who use those words. You need the loop.",
        },
      ],
    },
    {
      id: "rankine",
      title: "The Rankine loop",
      minutes: 11,
      level: 1,
      kind: "core",
      blocks: [
        {
          type: "p",
          text: "A Rankine cycle boils a liquid, expands the vapor in a turbine, condenses the vapor back to liquid, and pumps the liquid up to boiler pressure again. Heat goes in at the boiler, or at a nuclear plant's steam generator. Heat comes out at the condenser. The difference, minus pump work and real losses, is shaft power. The generator turns that shaft power into electricity.",
        },
        {
          type: "diagram",
          diagram: "rankine",
        },
        {
          type: "steps",
          title: "The loop, in the order you will sketch it",
          items: [
            "Heat in: a boiler fire, or nuclear heat into a steam generator.",
            "Steam turbine: high-pressure steam pushes blades and spins the shaft.",
            "Generator: the shaft spins the field inside the stator.",
            "Condenser: leftover steam becomes water. Cooling water or a tower carries the rejected heat away.",
            "Pump: liquid water goes back to be heated again.",
          ],
        },
        {
          type: "callout",
          tone: "pm",
          title: "A cooling failure is a megawatt failure",
          text: "The condenser is not a courtesy. If you cannot reject heat, you cannot keep the cycle turning. A loss of vacuum, a plugged condenser, or a cooling-tower failure is a megawatt failure. That is the failure consequence a project manager should be able to say out loud.",
        },
        {
          type: "callout",
          tone: "advanced",
          title: "Level 3 — why the cycle cannot use all the heat",
          text: "Any heat engine that takes heat in at one temperature and rejects heat at a lower temperature has a ceiling set by those two temperatures. The formula can wait. The consequence is enough for this week: a large share of the fuel energy leaves at the condenser or the stack. Combined cycle and combined heat and power exist because of that leftover heat.",
        },
        {
          type: "terms",
          items: [
            { term: "Rankine", meaning: "Boil, expand, condense, pump. The steam cycle." },
            { term: "Condenser", meaning: "Turns exhaust steam back into water and rejects heat." },
            { term: "Prime mover", meaning: "The machine that spins the generator. Here, the steam turbine." },
            { term: "Capacity factor", meaning: "How much of the possible energy a fleet actually produced. Not the same as efficiency." },
          ],
        },
      ],
    },
    {
      id: "video-coal",
      title: "Visual — coal plant, fuel and water",
      minutes: 8,
      level: 1,
      kind: "visual",
      videoIds: ["V03"],
      blocks: [
        {
          type: "p",
          text: "This 7-minute video walks a coal plant. While you watch, separate the fuel path from the water path, and notice why the water is treated before it becomes steam.",
        },
        {
          type: "p",
          afterVideo: true,
          text: "You should have seen coal handled, crushed, and burned, and water cleaned, deaerated, and pumped into a boiler. Notice the pressure he quotes: about 3,000 psi. That is why boiler plants carry heavy, inspection-driven scope. You will not be tested on the number. You will be expected to know why a steam plant has more pressure-code work than a gas turbine. This clip stops short of the condenser. The short steam-turbine clip finishes that step.",
        },
      ],
    },
    {
      id: "video-nuclear",
      title: "Visual — fission in place of the fire",
      minutes: 5,
      level: 1,
      kind: "visual",
      videoIds: ["V04"],
      blocks: [
        {
          type: "p",
          text: "This 4-minute video is about specific pressurized-water units. While you watch, listen for what replaces the boiler fire, and for how many water circuits those units keep apart.",
        },
        {
          type: "p",
          afterVideo: true,
          text: "Fission makes the heat. On those units the reactor water stays liquid under pressure and gives its heat to a second circuit that becomes turbine steam. A third circuit cools the condenser. Some other reactors boil water in the vessel itself, so three circuits are not a universal drawing. The temperatures and the control-rod time belong to the units in the film. None of them are Viper Power figures.",
        },
      ],
    },
    {
      id: "video-steam",
      title: "Visual — four steps, including the condenser",
      minutes: 3,
      level: 1,
      kind: "visual",
      videoIds: ["V05"],
      blocks: [
        {
          type: "p",
          text: "This 1-minute video is the whole loop in one pass. While you watch, count four steps and stop on the one that cools the steam.",
        },
        {
          type: "ul",
          afterVideo: true,
          items: [
            "Heat the water with a fuel.",
            "Expand the steam through the turbine and spin the generator.",
            "Cool the exhaust steam back into water.",
            "Pump that water toward the boiler again. Flue gas leaves through a stack, and the cleanup equipment depends on the fuel.",
          ],
        },
      ],
    },
    {
      id: "check-loop",
      title: "Checkpoint — heat in, heat out",
      minutes: 4,
      level: 1,
      kind: "checkpoint",
      questionIds: ["d2c1", "d2c2"],
      blocks: [
        { type: "p", text: "Quick check: commit to an answer before you read on." },
      ],
    },
    {
      id: "apply",
      title: "What stays off this outage",
      minutes: 8,
      level: 2,
      kind: "application",
      blocks: [
        {
          type: "p",
          text: "The national 2025 nuclear capacity factor is 91.0 percent, and the hydro figure on the same sheet is 35.3 percent. Both are preliminary, so a later file can revise them. A high nuclear figure means that fleet ran most of the hours. It does not mean the machine turns more of its heat into electricity than a gas turbine does. Efficiency and capacity factor answer different questions. Tomorrow and Day 4 separate them.",
        },
        {
          type: "callout",
          tone: "pm",
          title: "Know your basis",
          text: "Fuel or reactor heat, water chemistry, condenser cooling, and the generator are four different contracts that have to work on the same day. A project that only changes cooling or water treatment can take the megawatts away. Ask which circuit the work isolates, and what the plant can still generate while that circuit is out.",
        },
        {
          type: "callout",
          tone: "flag",
          title: "Viper Power has no Rankine loop",
          text: "The plant description you will defend on Friday is gas turbines on pipeline natural gas, about 330 MW net at 95°F. There is no boiler in that description. Cooling-tower and boiler lines stay off this outage unless a current plant document adds them. The Week 1 set does not.",
        },
      ],
    },
    {
      id: "exercise",
      title: "Exercise — sketch the loop, then cross it off this plant",
      minutes: 8,
      level: 2,
      kind: "exercise",
      blocks: [
        {
          type: "p",
          text: "On paper, draw boiler or reactor, steam turbine, generator, condenser, and pump. Mark one arrow 'heat in' and one arrow 'heat thrown away.' Under the sketch, write why the condenser exists, and one sentence that this drawing is not the Viper Power cycle. There is no numeric grade. Mark the section complete when both arrows are on the page.",
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
        { type: "p", text: "Ten questions. You'll see why each answer is right or wrong when you submit." },
      ],
    },
  ],
};

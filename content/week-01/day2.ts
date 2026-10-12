import type { Lesson } from "@/lib/types";

export const day2: Lesson = {
  id: "w1d2",
  week: 1,
  day: 2,
  title: "The steam cycle a gas-plant PM still has to read",
  summary: "Luis put a boiler and a cooling tower on the outage. This lesson is how you tell a Rankine plant from Viper Power.",
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
        { id: "d2c1a", text: "The condenser. If it cannot reject heat, the cycle cannot keep turning." },
        { id: "d2c1b", text: "The step-up transformer, because that is where the water is boiled." },
        { id: "d2c1c", text: "The gas compressor, because every Rankine plant starts by compressing pipeline gas." },
        { id: "d2c1d", text: "The inverter, because a steam plant is an inverter-based resource." },
      ],
    },
    {
      id: "d2c2",
      level: 1,
      prompt: "The nuclear clip is about specific pressurized-water units. What is the lesson that travels, and what stays on those units?",
      choices: [
        { id: "d2c2a", text: "Every reactor boils water in the vessel and sends that same water through the cooling tower." },
        { id: "d2c2b", text: "Fission replaces the flame. On those units, reactor water and turbine steam stay in separate circuits." },
        { id: "d2c2c", text: "The temperatures and the 1.3 second rod time are setpoints for a gas turbine too." },
        { id: "d2c2d", text: "A nuclear plant has no condenser, because fission feeds the grid directly." },
      ],
    },
    {
      id: "d2q1",
      level: 1,
      prompt: "Dana asks what cycle a coal plant or a nuclear steam plant is running.",
      choices: [
        { id: "d2q1a", text: "Brayton, because every turbine compresses air before it makes steam." },
        { id: "d2q1b", text: "A battery cycle, because the condenser stores the day's energy." },
        { id: "d2q1c", text: "Rankine: boil a liquid, expand the vapor, condense it, and pump it back." },
        { id: "d2q1d", text: "Combined heat and power, because every condenser sells steam to a neighbor." },
      ],
    },
    {
      id: "d2q2",
      level: 1,
      prompt: "Where does heat enter a Rankine cycle, and where does the leftover heat leave?",
      choices: [
        { id: "d2q2a", text: "Heat in at the generator, heat out at the fuel pile." },
        { id: "d2q2b", text: "Heat in at the pump, heat out at the boiler." },
        { id: "d2q2c", text: "Heat in at the condenser, heat out at the turbine blades." },
        { id: "d2q2d", text: "Heat in at the boiler or the steam generator. Heat thrown away at the condenser." },
      ],
    },
    {
      id: "d2q3",
      level: 1,
      prompt: "A coal plant and a pressurized-water nuclear plant sit on the same drawing. What is shared, and what is not?",
      choices: [
        { id: "d2q3a", text: "Both end as a steam turbine driving a generator. Coal makes heat with a fire. Those nuclear units make heat with fission." },
        { id: "d2q3b", text: "Both burn coal in a boiler. The reactor only changes the cooling tower." },
        { id: "d2q3c", text: "Coal uses a gas turbine and the nuclear unit uses a battery." },
        { id: "d2q3d", text: "The nuclear unit skips the generator and feeds the grid from the reactor vessel." },
      ],
    },
    {
      id: "d2q4",
      level: 1,
      prompt: "What is the condenser's job?",
      choices: [
        { id: "d2q4a", text: "It burns the fuel a second time to raise steam temperature." },
        { id: "d2q4b", text: "It turns exhaust steam back into water so the cycle can be pumped around again." },
        { id: "d2q4c", text: "It steps generator voltage up to transmission voltage." },
        { id: "d2q4d", text: "It stores megawatt-hours overnight and releases them at the morning peak." },
      ],
    },
    {
      id: "d2q5",
      level: 2,
      prompt: "Why does a boiler plant treat the water before it becomes steam?",
      choices: [
        { id: "d2q5a", text: "Untreated water would change the grid frequency." },
        { id: "d2q5b", text: "Treatment is how the plant raises transmission voltage." },
        { id: "d2q5c", text: "Raw water leads to corrosion and deposits inside a high-pressure boiler." },
        { id: "d2q5d", text: "The treatment plant is the prime mover that spins the generator." },
      ],
    },
    {
      id: "d2q6",
      level: 2,
      prompt: "Luis wants the cooling tower in the outage because 'it is only a heat dump.' What is the project consequence on a steam plant?",
      choices: [
        { id: "d2q6a", text: "Cooling can wait. The turbine keeps its megawatts with the condenser isolated." },
        { id: "d2q6b", text: "A cooling failure only affects water chemistry, not electrical output." },
        { id: "d2q6c", text: "The tower is optional equipment installed for appearance." },
        { id: "d2q6d", text: "If the plant cannot reject heat, it cannot keep making steam power." },
      ],
    },
    {
      id: "d2q7",
      level: 2,
      prompt: "Priya quotes a national nuclear capacity factor for 2025 and asks if that is the efficiency to use on a Viper Power memo.",
      choices: [
        { id: "d2q7a", text: "91.0 percent, preliminary, is the national 2025 nuclear capacity factor. It is not an efficiency and it is not this plant." },
        { id: "d2q7b", text: "91.0 percent is the efficiency of every steam turbine, including a gas peaker." },
        { id: "d2q7c", text: "35.3 percent is the nuclear figure, and 91.0 percent is hydro." },
        { id: "d2q7d", text: "The figure is Viper Power's tested efficiency at 95°F." },
      ],
    },
    {
      id: "d2q8",
      level: 2,
      prompt: "The 2025 nuclear and hydro capacity factors in today's sources are marked preliminary. What does that word change?",
      choices: [
        { id: "d2q8a", text: "Preliminary means the figure is a Viper Power guarantee." },
        { id: "d2q8b", text: "A later workbook can revise a preliminary figure. It is still not this plant's efficiency." },
        { id: "d2q8c", text: "Preliminary means the plants ran at 100 percent and the table rounded down." },
        { id: "d2q8d", text: "Preliminary capacity factor and heat-rate efficiency are the same measurement." },
      ],
    },
    {
      id: "d2q9",
      level: 1,
      prompt: "Put the steam path in order. What is the last step before water returns to be heated?",
      choices: [
        { id: "d2q9a", text: "Send the steam out the transmission line." },
        { id: "d2q9b", text: "Burn the condensed water in the combustor." },
        { id: "d2q9c", text: "Cool the exhaust steam back into liquid water." },
        { id: "d2q9d", text: "Invert the steam into direct current." },
      ],
    },
    {
      id: "d2q10",
      level: 2,
      prompt: "Luis still wants boiler and cooling-tower scope on the Viper Power outage. What do you send back?",
      choices: [
        { id: "d2q10a", text: "Approve it. Every gas turbine has a Rankine condenser." },
        { id: "d2q10b", text: "Approve the cooling tower and drop the boiler. Simple-cycle plants condense steam in the stack." },
        { id: "d2q10c", text: "Move the scope to the heat-recovery boiler this plant uses at night." },
        { id: "d2q10d", text: "Viper Power is not a Rankine plant. The Week 1 description is gas turbines on pipeline gas, with no boiler in that description." },
      ],
    },
  ],
  sections: [
    {
      id: "intro",
      title: "Luis added a boiler to the outage",
      minutes: 5,
      level: 1,
      kind: "intro",
      blocks: [
        {
          type: "p",
          text: "Luis sends the outage plan with a cooling-tower repair and a boiler inspection. Dana asks whether Viper Power has either one. By the end of today you can say which plants need a condenser, and why this one does not.",
        },
        {
          type: "p",
          text: "Dana, Priya, and Luis are the same hypothetical people as yesterday, not site staff. Today's problem is steam scope on a gas-turbine outage. Most of the country's electricity still comes from a turbine that boils water: steam plants were about 42 percent of US generation in 2022, and combined-cycle plants about 34 percent. You will sit next to people who use those words. You need the loop.",
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
      title: "What you tell Luis",
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

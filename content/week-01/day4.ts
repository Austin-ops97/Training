import type { Lesson } from "@/lib/types";

export const day4: Lesson = {
  id: "w1d4",
  week: 1,
  day: 4,
  title: "Hydro, wind, solar, storage, and the peaker's year",
  summary: "What capacity factor measures, why a peaker's number is low, and how hydro, wind, solar, and batteries fit the day.",
  objectives: [
    "Separate hydro, wind, solar, and batteries by energy path and by what each cannot do.",
    "Define baseload, intermediate, peaker, dispatchable, and inverter-based resource.",
    "Compute a capacity factor and read the national gas-turbine and combined-cycle figures, including which July is which.",
    "Write a memo that keeps those national figures off the Viper Power name.",
  ],
  exercises: [
    {
      id: "d4e1",
      prompt:
        "Practice numbers, not a Viper Power record. A unit is rated 100 MW and produced 120,000 MWh in a 365-day year (8,760 hours). Capacity factor in percent, to one decimal place.",
      unit: "percent",
      decimals: 1,
    },
  ],
  quizIds: ["d4q1", "d4q2", "d4q3", "d4q4", "d4q5", "d4q6", "d4q7", "d4q8", "d4q9", "d4q10"],
  sources: [
    {
      title: "Student Energy, Hydropower 101",
      detail: "In-lesson video. Dams, run-of-river, pumped storage, and the habitat and failure consequences the narrator names. The Hoover Dam figure belongs to that dam.",
    },
    {
      title: "TED-Ed, How do wind turbines work?",
      detail: "In-lesson video. Blades, generator, yaw, intermittency, and the Betz limit stated as 59.3 percent. This course does not adopt the clip's cheapest-source line as a market fact.",
    },
    {
      title: "TED-Ed, How do solar panels work?",
      detail: "In-lesson video. Light frees electrons. No turbine. Efficiency percentages in the clip belong to the year it was made.",
    },
    {
      title: "Ecotricity, Grid Scale Battery Storage Explained",
      detail: "In-lesson video. Storage, and the claim that batteries can react faster than a rotating machine. The 10 MW and 24 MWh project is a British example, not an ERCOT project and not Viper Power.",
    },
    {
      title: "U.S. Energy Information Administration, Electric Power Monthly Table 6.07.A",
      detail:
        "Capacity Factors for Utility-Scale Generators Primarily Using Fossil Fuels, workbook downloaded 12 October 2026. The sheet says 2024 and earlier are final, and 2025 and 2026 are preliminary. Annual 2025: natural-gas combined cycle 0.584 (58.4 percent), gas turbines 0.141 (14.1 percent). July 2026: gas turbines 0.233 (23.3 percent), combined cycle 0.723 (72.3 percent). July 2025 gas turbines were 0.249 (24.9 percent). National figures, not ERCOT-only and not Viper Power.",
    },
    {
      title: "U.S. Energy Information Administration, generation and storage notes",
      detail:
        "Photovoltaic plants were about 3.3 percent of US utility-scale generation in 2022, on the generation page cited yesterday. Storage generation is counted as negative in EIA reports so charging energy is not counted twice.",
    },
  ],
  questions: [
    {
      id: "d4c1",
      level: 1,
      prompt: "Where is the turbine in a solar photovoltaic plant?",
      choices: [
        { id: "d4c1a", text: "The turbine sits inside the inverter and spins at 3,600 rpm all day." },
        { id: "d4c1b", text: "Solar uses the same boiler as a coal plant, without the pulverizer." },
        { id: "d4c1c", text: "The panels store a full day of steam and release it after sunset." },
        { id: "d4c1d", text: "A solar photovoltaic plant has no turbine, and output is zero at night." },
      ],
    },
    {
      id: "d4c2",
      level: 2,
      prompt: "A storage slide quotes 10 MW and 24 MWh from a British project. What may you use it for?",
      choices: [
        { id: "d4c2a", text: "As this plant's required battery, because every peaker is now expected to carry one." },
        { id: "d4c2b", text: "As a foreign example whose sizes are not an ERCOT rating and not this plant." },
        { id: "d4c2c", text: "As the plant heat rate, because megawatt-hours divided by hours equals efficiency." },
        { id: "d4c2d", text: "As the July capacity factor published for the national gas-turbine fleet." },
      ],
    },
    {
      id: "d4q1",
      level: 1,
      prompt: "What is the definition of capacity factor?",
      choices: [
        { id: "d4q1a", text: "Actual energy divided by rated output across every hour in the period." },
        { id: "d4q1b", text: "Fuel burned over the period, divided by boiler steam pressure." },
        { id: "d4q1c", text: "Nameplate voltage divided by the number of hours in the year." },
        { id: "d4q1d", text: "The scarce-hour energy price divided by the midday price on the same day." },
      ],
    },
    {
      id: "d4q2",
      level: 2,
      prompt: "Which pair is the preliminary 2025 annual national capacity factor?",
      choices: [
        { id: "d4q2a", text: "Gas turbines 58.4 percent. Combined cycle 14.1 percent." },
        { id: "d4q2b", text: "Both fleets at 23.3 percent, because the July row matches the year." },
        { id: "d4q2c", text: "Combined cycle 58.4 percent. Gas turbines 14.1 percent." },
        { id: "d4q2d", text: "Nuclear 14.1 percent. Hydro 58.4 percent." },
      ],
    },
    {
      id: "d4q3",
      level: 1,
      prompt: "Why is a simple-cycle gas turbine's national capacity factor low across the year?",
      choices: [
        { id: "d4q3a", text: "The machines are held to 14.1 percent of rated voltage by the transformer." },
        { id: "d4q3b", text: "It is dispatched when power is scarce, because it costs more fuel per megawatt-hour." },
        { id: "d4q3c", text: "A peaker has no generator, so it cannot synchronize for most of the year." },
        { id: "d4q3d", text: "Capacity factor and efficiency are one number, and a rule keeps that number low." },
      ],
    },
    {
      id: "d4q4",
      level: 2,
      prompt: "Which figure is the July 2026 national gas-turbine capacity factor?",
      choices: [
        { id: "d4q4a", text: "14.1 percent. That is the 2025 annual gas-turbine factor, not the July month." },
        { id: "d4q4b", text: "24.9 percent. That figure is July 2025, not July 2026." },
        { id: "d4q4c", text: "72.3 percent. That is the July 2026 combined-cycle factor, not the gas-turbine row." },
        { id: "d4q4d", text: "23.3 percent, preliminary. That is the July 2026 gas-turbine factor." },
      ],
    },
    {
      id: "d4q5",
      level: 2,
      prompt: "National capacity factors are written next to the Viper Power name. What do you change?",
      choices: [
        { id: "d4q5a", text: "Label them national and preliminary. They are not Viper Power's own factor." },
        { id: "d4q5b", text: "Nothing. A national fleet factor is the factor measured at this plant." },
        { id: "d4q5c", text: "Replace them with the British battery's 24 MWh, which is this plant's annual energy." },
        { id: "d4q5d", text: "Average the two Julys and call that average the plant's guarantee." },
      ],
    },
    {
      id: "d4q6",
      level: 1,
      prompt: "A night-time peak arrives and a solar photovoltaic contract is the resource offered to cover it. What can that contract deliver?",
      choices: [
        { id: "d4q6a", text: "Full output, because the cells store noon energy and release it after dark." },
        { id: "d4q6b", text: "Output from a small steam turbine mounted underneath the photovoltaic array." },
        { id: "d4q6c", text: "No nighttime output. Solar photovoltaic has no turbine and nothing to sell then." },
        { id: "d4q6d", text: "The same night megawatts as a dam, because both are called renewable." },
      ],
    },
    {
      id: "d4q7",
      level: 2,
      prompt: "The wind clip's capture limit is quoted as if it were a capacity factor. What is the limit?",
      choices: [
        { id: "d4q7a", text: "59.3 percent of the wind's kinetic energy, a capture limit rather than a capacity factor." },
        { id: "d4q7b", text: "14.1 percent, which is the annual gas-turbine capacity factor in the national table." },
        { id: "d4q7c", text: "100 percent, once the rotor is tall enough to clear the turbulence from nearby trees." },
        { id: "d4q7d", text: "3.3 percent, which is the 2022 solar share of utility-scale generation." },
      ],
    },
    {
      id: "d4q8",
      level: 2,
      prompt: "A battery and a gas turbine can both cover a short peak. What difference does the storage clip support?",
      choices: [
        { id: "d4q8a", text: "The battery can respond only after a steam cycle has been warmed up." },
        { id: "d4q8b", text: "The battery raises plant heat rate by storing steam in chemical form." },
        { id: "d4q8c", text: "A charged battery is not dispatchable, so the market cannot call on it." },
        { id: "d4q8d", text: "A battery can change output faster than a rotating machine until it is empty." },
      ],
    },
    {
      id: "d4q9",
      level: 2,
      prompt: "Your practice unit, not the plant, produced 120,000 MWh from a 100 MW rating over 8,760 hours. What capacity factor do you report?",
      choices: [
        { id: "d4q9a", text: "8.3 percent, because dividing the rating by the hours gives the factor." },
        { id: "d4q9b", text: "72.3 percent, which is the July combined-cycle figure in the national table." },
        { id: "d4q9c", text: "13.7 percent, from 120,000 MWh divided by a maximum of 876,000 MWh." },
        { id: "d4q9d", text: "120 percent, because the energy produced is numerically larger than the rating." },
      ],
    },
    {
      id: "d4q10",
      level: 2,
      prompt: "Which statement about these resource labels is right?",
      choices: [
        { id: "d4q10a", text: "A peaker runs most hours, baseload runs only in shortages, and wind is fully dispatchable." },
        { id: "d4q10b", text: "Solar and batteries with no synchronous shaft are inverter-based resources." },
        { id: "d4q10c", text: "Intermediate means the plant uses an inverter, and baseload means the fuel is coal." },
        { id: "d4q10d", text: "Dispatchable means a synchronous governor, which solar plants and batteries both have." },
      ],
    },
  ],
  sections: [
    {
      id: "intro",
      title: "A low capacity factor is not a retirement",
      minutes: 5,
      level: 1,
      kind: "intro",
      blocks: [
        {
          type: "p",
          text: "A low national capacity factor is sometimes read as a reason to retire a gas-turbine plant. The number and the plant's name can end up in the same sentence. The memo has to say what the number means before anyone treats it as this plant's record.",
        },
        {
          type: "p",
          text: "Wind, solar, hydro, and batteries change when a peaker is the resource the system still wants. Each one has its own energy path. Other companies' project sizes stay on their own slides.",
        },
      ],
    },
    {
      id: "resources",
      title: "Four resources, and the words that sort them",
      minutes: 10,
      level: 1,
      kind: "core",
      blocks: [
        { type: "diagram", diagram: "duty" },
        {
          type: "ul",
          items: [
            "Hydro: moving water spins a turbine and a generator. A dam stores water. Run-of-river follows the river. Pumped storage moves water uphill when power is plentiful and releases it later. A large dam changes habitat, blocks fish, can displace people, and can be deadly downstream if it fails.",
            "Wind: blades turn a generator. Output follows the wind. Capture tops out at 59.3 percent of the wind's kinetic energy, because some air has to keep flowing. That limit is not a capacity factor.",
            "Solar photovoltaic: no prime mover. A photon frees an electron. There is no output at night. Photovoltaic plants were about 3.3 percent of US utility-scale generation in 2022. Efficiency percentages in the solar film belong to the year it was made.",
            "Batteries: they store electrical energy in chemical form and can reverse. Charging is counted so the same energy is not reported twice as generation. A storage film says batteries can react faster than a rotating machine. The project in that film is a British 10 MW, 24 MWh example. Those sizes are not an ERCOT rating and not a Viper Power rating.",
          ],
        },
        {
          type: "p",
          text: "Three duty labels say how a plant fits the day. Baseload runs most hours. Intermediate runs a large share of hours, but not almost all of them. A peaker runs when the system is short, which is why its capacity factor is low. Dispatchable means an operator or the market can tell the resource when to run. Wind and solar follow the weather, so they are not dispatchable in that sense. A battery is dispatchable until it is empty. Solar and batteries make direct current and use an inverter to make grid alternating current. A resource that connects that way, with no synchronous shaft, is an inverter-based resource. It does not have the governor and exciter from Monday. How those controls support the grid is a later topic. This week only needs the name and the difference.",
        },
        {
          type: "terms",
          items: [
            { term: "Baseload", meaning: "Runs most hours." },
            { term: "Intermediate", meaning: "Runs many hours, not almost all of them." },
            { term: "Peaker", meaning: "Runs when the system is short. A low capacity factor is the usual shape." },
            { term: "Dispatchable", meaning: "The operator or the market can choose when it runs, until the stored energy is gone." },
            { term: "IBR", meaning: "Inverter-based resource. No synchronous shaft. An inverter makes the grid current." },
          ],
        },
      ],
    },
    {
      id: "video-water",
      title: "Visual — water and wind",
      minutes: 9,
      level: 1,
      kind: "visual",
      videoIds: ["V10", "V11"],
      blocks: [
        {
          type: "p",
          text: "Two clips, about 3 minutes and about 5 minutes. While you watch the hydro clip, separate a dam, a run-of-river plant, and pumped storage, and listen for what a dam failure does downstream. While you watch the wind clip, find the 59.3 percent limit and notice that output follows the wind.",
        },
        {
          type: "ul",
          afterVideo: true,
          items: [
            "A dam stores water. Run-of-river follows the river. Pumped storage shifts energy from one hour to another.",
            "A large dam changes habitat and can kill people downstream if it fails. The megawatt figure for Hoover Dam belongs to that dam.",
            "Wind turns a generator. Some of the wind has to keep moving, which is why capture tops out at 59.3 percent. Leave the cheapest-source line in the video.",
          ],
        },
      ],
    },
    {
      id: "check-resources",
      title: "Checkpoint — two projects that are not this plant",
      minutes: 4,
      level: 1,
      kind: "checkpoint",
      questionIds: ["d4c1", "d4c2"],
      blocks: [
        { type: "p", text: "Quick check: commit to an answer before you read on." },
      ],
    },
    {
      id: "video-quiet",
      title: "Visual — sun and batteries",
      minutes: 8,
      level: 1,
      kind: "visual",
      videoIds: ["V12", "V13"],
      blocks: [
        {
          type: "p",
          text: "Two shorter clips. In the solar clip, watch for light moving electrons, the missing turbine, and zero output at night. In the battery clip, watch for the claim that a battery can change output faster than a machine that has to spin up. The project size on screen is a British example.",
        },
        {
          type: "ul",
          afterVideo: true,
          items: [
            "Solar has no shaft and nothing to sell after sunset. The efficiency percentages in that clip stay in the year it was made.",
            "A battery stores energy chemically and can reverse. Faster than a rotating machine is the claim to keep.",
            "The 10 MW and 24 MWh sizes, and the remark about a football pitch, belong to that British project.",
          ],
        },
      ],
    },
    {
      id: "cf",
      title: "Capacity factor, with the year and the month separated",
      minutes: 8,
      level: 1,
      kind: "core",
      blocks: [
        {
          type: "formula",
          label: "Capacity factor",
          expression: "Capacity factor = energy produced (MWh) / (rated capacity (MW) × hours in the period)",
          note: "A non-leap year has 365 × 24 = 8,760 hours. Multiply the fraction by 100 if you want a percent.",
        },
        {
          type: "p",
          text: "National utility-scale fossil figures, downloaded 12 October 2026, and still preliminary for 2025 and 2026, so a later file can revise them. Annual 2025: natural-gas combined cycle 58.4 percent, gas turbines 14.1 percent. July 2026: gas turbines 23.3 percent, combined cycle 72.3 percent. The gas-turbine figure of 24.9 percent is July 2025, not July 2026. The gas-turbine row is the national simple-cycle-style fleet, not Viper Power and not ERCOT alone.",
        },
        {
          type: "p",
          text: "That fleet is low across the year and higher in a summer month. The machine costs more fuel per megawatt-hour, so it runs when the system is willing to pay for a less efficient unit. The factor is not low because the plant is forbidden to run.",
        },
        {
          type: "callout",
          tone: "advanced",
          title: "Level 3 — equivalent full-load hours of a national average",
          text: "The 2025 annual gas-turbine factor, 0.141 times 8,760 hours, is 1,235.16 hours. Combined cycle at 0.584 is 5,115.84 hours. Those are not a dispatch plan for this plant.",
        },
      ],
    },
    {
      id: "apply",
      title: "What belongs in the memo",
      minutes: 7,
      level: 2,
      kind: "application",
      blocks: [
        {
          type: "p",
          text: "Solar is high near midday and gone at night. A battery can charge in the abundant hours and discharge later, and it can move faster than a turbine that has to spin up. A simple-cycle turbine still covers hours that outlast the battery, or hours when the battery is empty. Which product a given battery or a given Viper Power unit may offer is a question for the plant's scheduling entity. Tomorrow defines that entity. This lesson does not assign the plant a product.",
        },
        {
          type: "callout",
          tone: "pm",
          title: "Level 2 — what you write in a project memo",
          text: "Write what you can support. The national gas-turbine capacity factor is low across the year and higher in summer. Storage moves energy from one hour to another and can move faster than a turbine. The plant's scheduling entity has to say which hours and which products this plant still clears. Shoulder-month outages follow from that shape of the year. A sentence that the peaker will be displaced is a prediction, and this lesson does not give you the plant's own factor or a price to hang it on.",
        },
        {
          type: "callout",
          tone: "note",
          title: "Know your basis",
          text: "This lesson has no ERCOT price and no Viper Power capacity factor. If a slide shows a price, ask for the date and the settlement point before it goes in the memo.",
        },
      ],
    },
    {
      id: "exercise",
      title: "Exercise — a practice capacity factor",
      minutes: 8,
      level: 2,
      kind: "exercise",
      exerciseId: "d4e1",
      blocks: [
        {
          type: "p",
          text: "The unit in the problem is a practice calculation, not a Viper Power record. Maximum energy is the rating times 8,760 hours. Divide the energy produced by that maximum, then convert to a percent with one decimal place. After the number grades, add three sentences in your notes: why a gas turbine's national capacity factor is low, how a battery competes for short hours, and why neither the national percent nor this practice percent is Viper Power's factor.",
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

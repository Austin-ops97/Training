import type { Lesson } from "@/lib/types";

export const day4: Lesson = {
  id: "w1d4",
  week: 1,
  day: 4,
  title: "Hydro, wind, solar, batteries, and the peaker's hours",
  summary: "The other prime movers, and why a simple-cycle plant can matter while it sits.",
  objectives: [
    "Describe hydro, wind, solar PV, and grid batteries at a project-manager level, including what each does with energy.",
    "Compute a capacity factor from a stated rating and a stated energy total, and label a hypothetical example as hypothetical.",
    "Read EIA Table 6.07.A for natural-gas combined cycle and gas turbines, and say what those national figures are not.",
    "Explain why a peaker's capacity factor is low, and how batteries compete for some of the same short-notice hours, without inventing an ERCOT price.",
  ],
  exercises: [
    {
      id: "d4e1",
      prompt:
        "Hypothetical unit, not Viper Power. Rating 100 MW. It generates 120,000 MWh in a non-leap year of 8,760 hours. What is the capacity factor in percent, to one decimal place?",
      unit: "percent",
      decimals: 1,
    },
  ],
  quizIds: ["d4q1", "d4q2", "d4q3", "d4q4", "d4q5", "d4q6", "d4q7", "d4q8", "d4q9", "d4q10", "d4q11"],
  questions: [
    {
      id: "d4c1",
      level: 1,
      prompt: "Which resource in today's videos has no turbine?",
      choices: [
        "A dam.",
        "A solar photovoltaic cell. Electrons move. No shaft does.",
        "A wind rotor.",
        "A gas turbine.",
      ],
    },
    {
      id: "d4c2",
      level: 2,
      prompt: "The Ecotricity clip describes a 10 MW battery in Britain. What may you do with that size?",
      choices: [
        "Enter it as Viper Power's battery obligation.",
        "Use it as the ISO rating of one 7B.",
        "Leave it as that developer's project. Do not use it as an ERCOT or Viper Power rating.",
        "Treat it as the EIA gas-turbine capacity factor.",
      ],
    },
    {
      id: "d4q1",
      level: 1,
      prompt: "What is capacity factor?",
      choices: [
        "The heat rate.",
        "The transmission voltage.",
        "The number of starts in a day.",
        "Actual energy divided by the energy the unit could have made by running at its rated capacity for every hour in the period.",
      ],
    },
    {
      id: "d4q2",
      level: 1,
      prompt: "EIA Table 6.07.A, annual 2025, preliminary: what capacity factors did it report for natural-gas combined cycle and for gas turbines?",
      choices: [
        "Both about 91 percent.",
        "Combined cycle 58.4 percent. Gas turbines 14.1 percent.",
        "Gas turbines 58.4 percent and combined cycle 14.1 percent.",
        "The table does not include natural gas.",
      ],
    },
    {
      id: "d4q3",
      level: 2,
      prompt: "Why is a simple-cycle gas turbine's capacity factor low?",
      choices: [
        "The laws of physics stop it from running more than a few hours a year.",
        "ERCOT forbids gas turbines from running in July.",
        "It burns more fuel per megawatt-hour than a combined cycle, so it is dispatched when power is scarce or high-priced, not around the clock.",
        "A low capacity factor means the machine is broken.",
      ],
    },
    {
      id: "d4q4",
      level: 2,
      prompt: "What did the same EIA workbook show for gas-turbine capacity factor in July 2026?",
      choices: [
        "91 percent.",
        "Zero. Gas turbines do not run in July.",
        "The sheet has no 2026 months.",
        "24.9 percent, preliminary, higher than the 2025 annual 14.1 percent. Summer is busier. It is still not a baseload figure.",
      ],
    },
    {
      id: "d4q5",
      level: 2,
      prompt: "What are those EIA capacity factors not?",
      choices: [
        "They are Viper Power's guaranteed contract quantity.",
        "They are not Viper Power's capacity factor and they are not an ERCOT-only statistic.",
        "They are heat rates.",
        "They are relay settings.",
      ],
    },
    {
      id: "d4q6",
      level: 1,
      prompt: "How does a solar photovoltaic plant make electricity?",
      choices: [
        "It boils water in a Rankine loop only.",
        "It is a gas turbine with a different fuel.",
        "Light frees electrons in a semiconductor cell. There is no turbine and no output at night.",
        "It stores grid frequency in the panel.",
      ],
    },
    {
      id: "d4q7",
      level: 1,
      prompt: "What limit does the wind video state for how much of the wind's energy a turbine can capture?",
      choices: [
        "100 percent, if the blades are large enough.",
        "15 to 20 percent, which is a solar-cell figure from a different video and a different year.",
        "The grid frequency, 60 Hz.",
        "Betz's limit, 59.3 percent. Some wind has to keep moving past the rotor.",
      ],
    },
    {
      id: "d4q8",
      level: 2,
      prompt: "What can a grid battery do that a simple-cycle turbine cannot match as quickly?",
      choices: [
        "Burn natural gas more efficiently than a combined cycle.",
        "Change output faster than a rotating machine, and shift energy from one hour to a later hour. Which ERCOT service it may sell is a question for the QSE.",
        "Replace the step-up transformer.",
        "Set the Rankine condenser vacuum.",
      ],
    },
    {
      id: "d4q9",
      level: 2,
      prompt: "Hypothetical, not Viper Power: 100 MW running to 120,000 MWh in 8,760 hours. What is the capacity factor?",
      choices: [
        "82.2 percent",
        "1.37 percent",
        "13.7 percent",
        "120 percent",
      ],
    },
    {
      id: "d4q10",
      level: 1,
      prompt: "How does the hydropower video distinguish dammed hydro from run-of-river?",
      choices: [
        "They are the same plant.",
        "Run-of-river uses a gas compressor.",
        "Only run-of-river can fail catastrophically. Dams cannot.",
        "A dam stores water and can release it when power is needed. Run-of-river takes the river's flow and varies with it.",
      ],
    },
    {
      id: "d4q11",
      level: 2,
      prompt: "A peaker posts a low annual capacity factor. What should a project manager conclude?",
      choices: [
        "The plant should be retired because capacity factor is the only measure of value.",
        "The valuable hours are few. Missing one of them matters more than the annual average. A low factor is not, by itself, a broken plant.",
        "The plant ran every hour of the year.",
        "Net and gross are the same number.",
      ],
    },
  ],
  sections: [
    {
      id: "intro",
      title: "The machines that change the peaker's day",
      minutes: 4,
      level: 1,
      kind: "intro",
      blocks: [
        {
          type: "p",
          text: "A simple-cycle plant sells scarcity. Wind, solar, hydro, and batteries change when scarcity shows up. You need each resource's energy path, its failure mode, and the habit of not copying another company's project size onto Viper Power.",
        },
      ],
    },
    {
      id: "resources",
      title: "Four resources, in one pass",
      minutes: 8,
      level: 1,
      kind: "core",
      blocks: [
        {
          type: "ul",
          items: [
            "Hydro: moving water spins a turbine and a generator. A dam stores water. Run-of-river follows the river. Pumped storage moves water uphill when power is cheap and releases it later.",
            "Wind: blades turn a generator. Output follows the wind. The video states Betz's limit: a turbine can capture at most 59.3 percent of the wind's kinetic energy, because some air must keep flowing.",
            "Solar PV: no prime mover. A photon frees an electron. EIA says photovoltaic plants were about 3.3 percent of US utility-scale generation in 2022. There is no output at night. The TED-Ed efficiency percentages are from that video's time. Do not quote them as current module ratings.",
            "Batteries: they store electrical energy in chemical form and can reverse. EIA counts storage generation as negative in its reports so the charging energy is not counted twice. The British video says batteries can react faster than a rotating machine.",
          ],
        },
        {
          type: "callout",
          tone: "note",
          title: "Consequences worth saying",
          text: "Student Energy says a large dam changes habitat, blocks fish, can displace people, and can kill people downstream if it fails. Wind and solar miss hours, so something else has to cover them. A battery that is empty cannot cover the next hour. A gas turbine that will not start cannot cover it either.",
        },
      ],
    },
    {
      id: "videos",
      title: "Visual — hydro, wind, solar, batteries",
      minutes: 17,
      level: 1,
      kind: "visual",
      videoIds: ["V10", "V11", "V12", "V13"],
      blocks: [
        {
          type: "p",
          text: "Four clips, listed 3:13, 5:03, 4:59, and 2:46. This section is 17 minutes so you can play them through. Watch for the energy path, not for the record-size claims.",
        },
        {
          type: "ul",
          items: [
            "Hydropower 101: dams, run-of-river, pumped storage, and the harm and failure modes above. The Hoover Dam megawatt figure is that dam's, not a formula.",
            "Wind: yaw, blade shape, height, intermittency, and the 59.3 percent Betz limit. Skip the line that calls wind the cheapest source. This course does not adopt it.",
            "Solar: n-type and p-type silicon, electrons as the only moving parts, no night production. Leave the 15 to 20 percent and 46 percent lines in the video's own year.",
            "Batteries: charge when there is extra renewable power, discharge when the system is short, faster than a machine that has to spin up. The 10 MW and 24 MWh project is Ecotricity's at a British site. The football-pitch remark is theirs. Neither is a design rule.",
          ],
        },
      ],
    },
    {
      id: "check-resources",
      title: "Checkpoint — do not mix the projects",
      minutes: 4,
      level: 1,
      kind: "checkpoint",
      questionIds: ["d4c1", "d4c2"],
      blocks: [
        {
          type: "p",
          text: "Two checks before the capacity-factor arithmetic.",
        },
      ],
    },
    {
      id: "cf",
      title: "Capacity factor, with the EIA table open",
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
          text: "EIA Table 6.07.A, Capacity Factors for Utility-Scale Generators Primarily Using Fossil Fuels, was downloaded from EIA's Electric Power Monthly workbook for this lesson. The sheet says 2024 and earlier years are final, and 2025 and 2026 are preliminary. Monthly rows in the file run through July 2026. Annual 2025: natural-gas combined cycle 0.584 (58.4 percent), gas turbines 0.141 (14.1 percent). July 2026, still preliminary: gas turbines 0.249 (24.9 percent), combined cycle 0.723 (72.3 percent).",
        },
        {
          type: "p",
          text: "The gas-turbine row is the national simple-cycle-style fleet, not Viper Power and not ERCOT alone. It is low across the year and higher in a summer month. That is the pattern behind 'a peaker's capacity factor is low.' The machine costs more fuel per megawatt-hour, so it runs when the system is willing to pay for a less efficient unit. It is not low because the plant is forbidden to run.",
        },
        {
          type: "callout",
          tone: "advanced",
          title: "Level 3 — worked national comparison, not a plant target",
          text: "2025 annual gas-turbine factor 0.141 times 8,760 hours is about 1,235 hours at full rating. Check: 0.141 × 8,760 = 1,235.16. Combined cycle at 0.584 is about 5,116 hours. Check: 0.584 × 8,760 = 5,115.84. These are equivalent full-load hours of a national average, not a dispatch plan.",
        },
      ],
    },
    {
      id: "apply",
      title: "How batteries take some of the peaker's hours",
      minutes: 7,
      level: 2,
      kind: "application",
      blocks: [
        {
          type: "p",
          text: "Solar output is high near midday and gone at night. The solar video says that in plain language. A battery can charge in the abundant hours and discharge later. The British storage video says it can do that faster than a rotating machine. A simple-cycle turbine still covers hours that are longer than the battery, or hours when the battery is empty. Which ERCOT ancillary-service product a given battery or a given Viper Power unit may offer is a Qualified Scheduling Entity question. Day 5 defines the QSE. This lesson does not assign Viper Power a service.",
        },
        {
          type: "callout",
          tone: "pm",
          title: "Level 2 — what you write in a project memo",
          text: "Do not write 'the peaker will be displaced' as a fact. Write: national gas-turbine capacity factor is low and higher in summer; storage can move energy across hours and can move faster than a turbine; the site's QSE has to say which hours and which products this plant still clears. Outages in spring and fall, rather than in the summer peak, follow from that shape of the year. The outline says it. The July versus annual EIA rows are the public evidence you can cite without a plant ledger.",
        },
        {
          type: "callout",
          tone: "flag",
          title: "No price in this lesson",
          text: "This day does not state an ERCOT price, a spark spread, or a Viper Power capacity factor. Those need a market print or a plant report. If a contractor's slide has a price with no date and no settlement point, ask for both.",
        },
      ],
    },
    {
      id: "exercise",
      title: "Exercise — a labeled hypothetical capacity factor",
      minutes: 8,
      level: 2,
      kind: "exercise",
      exerciseId: "d4e1",
      blocks: [
        {
          type: "p",
          text: "The unit is hypothetical. It is not Viper Power. Maximum energy is 100 MW times 8,760 hours. Divide 120,000 MWh by that maximum, then convert to a percent with one decimal place. After the number grades, write three sentences: why a gas turbine's national capacity factor is low, how a battery competes for short hours, and why neither the EIA percent nor this hypothetical percent is Viper Power's factor.",
        },
      ],
    },
    {
      id: "quiz",
      title: "Knowledge check",
      minutes: 10,
      level: 1,
      kind: "quiz",
      questionIds: ["d4q1", "d4q2", "d4q3", "d4q4", "d4q5", "d4q6", "d4q7", "d4q8", "d4q9", "d4q10", "d4q11"],
      blocks: [
        {
          type: "p",
          text: "Eleven questions. The capacity-factor arithmetic uses the hypothetical unit, not the plant.",
        },
      ],
    },
  ],
};

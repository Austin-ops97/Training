export type ModuleReference = {
  source: string;
  url?: string;
  use: string;
};

export type OperatorModule = {
  id: string;
  specNumber: number | null;
  title: string;
  specObjective: string;
  references: ModuleReference[];
};

export const operatorModules: OperatorModule[] = [
  {
    id: "0",
    specNumber: null,
    title: "First principles",
    specObjective:
      "Teach atoms, charge, magnetism, pressure, temperature, energy, fluid flow, and combustion before the equipment that depends on them.",
    references: [
      {
        source: "OpenStax Chemistry 2e",
        url: "https://openstax.org/books/chemistry-2e",
        use: "Atoms and electrons. Open the relevant section before quoting it in a lesson.",
      },
      {
        source: "OpenStax College Physics 2e",
        url: "https://openstax.org/books/college-physics-2e",
        use: "Charge, voltage, current, resistance, energy, magnetism, induction, temperature, and heat. Book home. Lesson drafts will cite the section actually opened.",
      },
    ],
  },
  {
    id: "1",
    specNumber: 1,
    title: "Introduction to power generation",
    specObjective: "Explain what a plant does, why peakers exist, and how electricity moves from the generator to the grid.",
    references: [
      {
        source: "U.S. Energy Information Administration, Electricity explained",
        url: "https://www.eia.gov/energyexplained/electricity/",
        use: "How electricity is generated and how it is delivered. Confirm the page text when the lesson is written.",
      },
    ],
  },
  {
    id: "11",
    specNumber: 11,
    title: "Industrial safety fundamentals",
    specObjective: "Recognize hazards and basic safety responsibilities. This module does not qualify anyone for hazardous work.",
    references: [
      {
        source: "OSHA, personal protective equipment",
        url: "https://www.osha.gov/personal-protective-equipment",
        use: "PPE as a site-specified control. Do not copy a rule number until the page is opened.",
      },
      {
        source: "OSHA, control of hazardous energy",
        url: "https://www.osha.gov/control-hazardous-energy",
        use: "Lockout as a concept. The course does not teach a person to apply a lock.",
      },
      {
        source: "OSHA, electrical",
        url: "https://www.osha.gov/electrical",
        use: "Electrical hazard recognition, including arc flash as a named hazard.",
      },
      {
        source: "OSHA, confined spaces",
        url: "https://www.osha.gov/confined-spaces",
        use: "Recognition that a confined space is a qualified task.",
      },
      {
        source: "OSHA, fall protection",
        url: "https://www.osha.gov/fall-protection",
        use: "Work at heights as a recognized hazard.",
      },
    ],
  },
  {
    id: "4",
    specNumber: 4,
    title: "Electrical fundamentals for operators",
    specObjective: "Understand the electrical terms used in operations.",
    references: [
      {
        source: "OpenStax College Physics 2e",
        url: "https://openstax.org/books/college-physics-2e",
        use: "Alternating current, induction, and the pole-speed relationship as physics.",
      },
      {
        source: "EIA, delivery to consumers",
        url: "https://www.eia.gov/energyexplained/electricity/delivery-to-consumers.php",
        use: "Why voltage is changed between generation and customers.",
      },
    ],
  },
  {
    id: "3",
    specNumber: 3,
    title: "How a gas turbine works",
    specObjective: "Describe how natural gas becomes electricity.",
    references: [
      {
        source: "EIA, how electricity is generated",
        url: "https://www.eia.gov/energyexplained/electricity/how-electricity-is-generated.php",
        use: "Simple-cycle and combined-cycle turbines as classes of plant.",
      },
      {
        source: "U.S. Department of Energy, How gas turbine power plants work",
        url: "https://www.energy.gov/hgeo/how-gas-turbine-power-plants-work",
        use: "Public explainer of the compressor, combustor, and turbine. Phase 2 may quote only a sentence it has opened. Temperatures, speeds, and ratios on that page are not copied into this course as limits or as plant facts.",
      },
    ],
  },
  {
    id: "2",
    specNumber: 2,
    title: "Understanding the facility",
    specObjective: "Identify the major equipment and its purpose.",
    references: [
      {
        source: "The plant's OEM equipment manual",
        use: "Authority for that machine. This outline does not cite a manual number, a drawing number, or a setpoint. Public explainers are listed on the gas-turbine module.",
      },
    ],
  },
  {
    id: "5",
    specNumber: 5,
    title: "Plant operating conditions",
    specObjective: "Identify the operating states and why they matter.",
    references: [
      {
        source: "NERC, Glossary of Terms",
        url: "https://www.nerc.com/glossary-of-terms",
        use: "Glossary terms for availability, if a definition is quoted, only after that glossary entry is opened. Plant procedures still govern the local word.",
      },
    ],
  },
  {
    id: "8",
    specNumber: 8,
    title: "Instrumentation and control",
    specObjective: "Understand how conditions are monitored and why instruments matter. No programming.",
    references: [
      {
        source: "OpenStax College Physics 2e",
        url: "https://openstax.org/books/college-physics-2e",
        use: "The measured quantities. A controls textbook is out of scope.",
      },
    ],
  },
  {
    id: "6",
    specNumber: 6,
    title: "Basic startup and shutdown concepts",
    specObjective: "Understand the general sequence. Real actions follow approved facility procedures and authorization.",
    references: [
      {
        source: "The plant's approved start and shutdown procedure",
        use: "Governs real action. This course teaches the purpose of each stage and does not copy a procedure.",
      },
    ],
  },
  {
    id: "10",
    specNumber: 10,
    title: "Power industry and energy markets",
    specObjective: "Understand why peakers run, who requests it, and how markets influence dispatch.",
    references: [
      {
        source: "FERC, electric power markets",
        url: "https://www.ferc.gov/electric",
        use: "What a wholesale market is. No trading strategy.",
      },
      {
        source: "ERCOT, about",
        url: "https://www.ercot.com/about",
        use: "Labeled example of one region. Not a universal rulebook.",
      },
      {
        source: "PJM",
        url: "https://www.pjm.com/",
        use: "Labeled example of a second region. Confirm any quoted sentence against the page.",
      },
      {
        source: "EIA, efficiency FAQ",
        url: "https://www.eia.gov/tools/faqs/faq.php?id=107&t=3",
        use: "Public heat-rate idea. Not a plant heat rate.",
      },
      {
        source: "NERC, Reliability Standards",
        url: "https://www.nerc.com/standards/reliability-standards",
        use: "Reliability as a standards idea. Do not cite a standard number until that standard is opened.",
      },
    ],
  },
  {
    id: "7",
    specNumber: 7,
    title: "Operator responsibilities",
    specObjective: "Understand daily duties.",
    references: [
      {
        source: "OSHA, emergency action and hazard communication topic pages",
        url: "https://www.osha.gov/",
        use: "Duties that touch emergencies stay at recognition and reporting.",
      },
    ],
  },
  {
    id: "9",
    specNumber: 9,
    title: "Common problems and abnormal conditions",
    specObjective: "Recognize the conditions and the importance of timely reporting. No troubleshooting or repair.",
    references: [
      {
        source: "The plant's alarm and trip documentation",
        use: "Names the real limits. This course does not copy an alarm list or a model-specific cause.",
      },
    ],
  },
  {
    id: "12",
    specNumber: 12,
    title: "Practical operator knowledge and terminology",
    specObjective: "Understand and take part in operations discussions.",
    references: [
      {
        source: "The sources of the earlier modules",
        url: "https://www.eia.gov/energyexplained/electricity/",
        use: "This module reinforces terms already tied to a source. It does not add a new technical claim.",
      },
    ],
  },
];

export const finalAssessment = {
  id: "final",
  title: "Final assessment",
  minutes: 60,
  questionCount: 30,
  domains: [
    { name: "Industry and markets", questions: 5 },
    { name: "Equipment and how a peaker works", questions: 8 },
    { name: "Operating states and the generic sequence", questions: 7 },
    { name: "Safety and the limits of this course", questions: 5 },
    { name: "Duties, abnormal conditions, and terminology", questions: 5 },
  ],
  note: "Blueprint only. The 30 items, the answer key, and the explanations are phase 2. The check does not qualify anyone.",
};

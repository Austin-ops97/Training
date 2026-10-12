export type Level = 1 | 2 | 3;

type BlockShape =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | {
      type: "callout";
      tone: "note" | "flag" | "pm" | "advanced";
      title: string;
      text: string;
    }
  | { type: "formula"; label: string; expression: string; note: string }
  | { type: "steps"; title: string; items: string[] }
  | { type: "diagram"; diagram: "grid" | "rankine" | "brayton" | "viper" | "duty" }
  | { type: "terms"; items: { term: string; meaning: string }[] };

export type Block = BlockShape & { afterVideo?: boolean };

export type SectionKind =
  | "intro"
  | "core"
  | "visual"
  | "application"
  | "exercise"
  | "checkpoint"
  | "review"
  | "quiz";

export type Section = {
  id: string;
  title: string;
  minutes: number;
  level: Level;
  kind: SectionKind;
  blocks: Block[];
  videoIds?: string[];
  questionIds?: string[];
  exerciseId?: string;
};

export type PublicChoice = {
  id: string;
  text: string;
};

export type PublicQuestion = {
  id: string;
  prompt: string;
  choices: PublicChoice[];
  level: Level;
};

export type SourceNote = {
  title: string;
  detail: string;
};

export type PublicExercise = {
  id: string;
  prompt: string;
  unit: string;
  /** Number of decimal places the grader expects the learner to enter. */
  decimals: number;
};

export type VideoSpec = {
  code: string;
  youtubeId: string;
  title: string;
  channel: string;
  /** Appendix A listed duration. Player metadata could not be re-measured from this environment. */
  listedDuration: string;
  startSeconds: number;
  /** Listed full-video end, in seconds, so the embed stops at the listed duration. */
  endSeconds: number;
  required: boolean;
  watchNote: string;
};

export type Lesson = {
  id: string;
  week: 1;
  day: 1 | 2 | 3 | 4 | 5;
  title: string;
  summary: string;
  objectives: string[];
  sections: Section[];
  questions: PublicQuestion[];
  quizIds: string[];
  exercises: PublicExercise[];
  /** Attribution sits here, not in the teaching paragraphs. */
  sources: SourceNote[];
};

export type AnswerItem = {
  /** Stable id of the correct choice. Grading does not use screen position. */
  correctChoiceId: string;
  explanation: string;
};

export type ExerciseAnswer = {
  expected: number;
  tolerance: number;
  explanation: string;
};

"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { Block, Lesson } from "@/lib/types";
import { videos } from "@/content/week-01/videos";
import { VideoEmbed } from "@/components/VideoEmbed";
import { LessonDiagram } from "@/components/Diagrams";
import { shuffleChoices } from "@/lib/choices";
import { countCompleted, emptyProgress, markSectionComplete, type ProgressState } from "@/lib/progress";
import { readProgress, writeProgress } from "@/components/WeekProgress";

type QuestionResult = {
  id: string;
  selected: string;
  correct: boolean;
  correctChoiceId: string;
  explanation: string;
};

type ExerciseResult = {
  id: string;
  submitted: number;
  correct: boolean;
  expected: number;
  explanation: string;
};

const levelClass = (level: 1 | 2 | 3) => (level === 1 ? "pill" : level === 2 ? "pill l2" : "pill l3");

export function LessonExperience({ lesson }: { lesson: Lesson }) {
  const [progress, setProgress] = useState<ProgressState>(emptyProgress());
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Record<string, QuestionResult>>({});
  const [exerciseValues, setExerciseValues] = useState<Record<string, string>>({});
  const [exerciseResults, setExerciseResults] = useState<Record<string, ExerciseResult>>({});
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setProgress(readProgress());
  }, []);

  const sectionIds = lesson.sections.map((section) => section.id);
  const completed = countCompleted(progress, lesson.id, sectionIds);
  const questions = useMemo(() => new Map(lesson.questions.map((question) => [question.id, question])), [lesson.questions]);

  function persist(next: ProgressState) {
    setProgress(next);
    writeProgress(next);
  }

  async function grade(payload: { questions?: Record<string, string>; exercise?: { id: string; value: number } }) {
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/quiz/grade", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lessonId: lesson.id, ...payload }),
      });
      if (!response.ok) throw new Error("The check could not be scored.");
      const data = (await response.json()) as {
        questions: { results: QuestionResult[]; correct: number; answered: number };
        exercise: ExerciseResult | null;
      };
      if (payload.questions) {
        const nextResults = { ...results };
        for (const item of data.questions.results) nextResults[item.id] = item;
        setResults(nextResults);
        const quizIds = new Set(lesson.quizIds);
        const submittedQuiz = Object.keys(payload.questions).filter((id) => quizIds.has(id));
        if (submittedQuiz.length === lesson.quizIds.length) {
          const quizResults = data.questions.results.filter((item) => quizIds.has(item.id));
          const correct = quizResults.filter((item) => item.correct).length;
          persist({
            ...progress,
            quizzes: {
              ...progress.quizzes,
              [lesson.id]: { correct, total: lesson.quizIds.length, completedAt: new Date().toISOString() },
            },
          });
        }
      }
      if (data.exercise) {
        setExerciseResults({ ...exerciseResults, [data.exercise.id]: data.exercise });
        persist({
          ...progress,
          exercises: { ...progress.exercises, [data.exercise.id]: data.exercise.correct },
        });
      }
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "The check could not be scored.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="wrap">
      <p className="kicker">
        <Link href="/week/1">Week 1</Link> · Day {lesson.day}
      </p>
      <h1>{lesson.title}</h1>
      <p className="lede">{lesson.summary}</p>
      <div className="progress-track" aria-hidden="true">
        <span style={{ width: `${(completed / sectionIds.length) * 100}%` }} />
      </div>
      <p className="meta">
        {completed} of {sectionIds.length} sections marked complete · {lesson.sections.reduce((sum, section) => sum + section.minutes, 0)} minutes scheduled
      </p>
      <div className="desktop-only">
        <h2>Objectives</h2>
        <ul>
          {lesson.objectives.map((objective) => (
            <li key={objective}>{objective}</li>
          ))}
        </ul>
      </div>
      <details className="lesson-fold phone-only">
        <summary>Objectives</summary>
        <ul>
          {lesson.objectives.map((objective) => (
            <li key={objective}>{objective}</li>
          ))}
        </ul>
      </details>
      <div className="lesson-layout">
        <nav className="rail desktop-only" aria-label="Lesson sections">
          {lesson.sections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              <span>{section.title}</span>
              <span className="mins">{section.minutes}m</span>
            </a>
          ))}
        </nav>
        <div>
          <details className="lesson-fold phone-only">
            <summary>Lesson outline</summary>
            <nav className="rail" aria-label="Lesson sections">
              {lesson.sections.map((section) => (
                <a key={section.id} href={`#${section.id}`}>
                  <span>{section.title}</span>
                  <span className="mins">{section.minutes}m</span>
                </a>
              ))}
            </nav>
          </details>
          {lesson.sections.map((section) => (
            <section className="section" id={section.id} key={section.id}>
              <header>
                <h2>{section.title}</h2>
                <span>
                  <span className={levelClass(section.level)}>Level {section.level}</span>{" "}
                  <span className="meta">{section.minutes} min</span>
                </span>
              </header>
              {section.blocks.filter((block) => !block.afterVideo).map((block, index) => (
                <BlockView key={`b-${index}`} block={block} />
              ))}
              {section.videoIds?.map((videoId) => {
                const video = videos[videoId];
                return video ? <VideoEmbed key={videoId} video={video} /> : null;
              })}
              {section.blocks.filter((block) => block.afterVideo).map((block, index) => (
                <BlockView key={`a-${index}`} block={block} />
              ))}
              {section.questionIds && section.kind !== "quiz" && (
                <QuestionList
                  ids={section.questionIds}
                  questions={questions}
                  answers={answers}
                  results={results}
                  onSelect={(id, value) => setAnswers({ ...answers, [id]: value })}
                />
              )}
              {section.kind === "checkpoint" && section.questionIds && (
                <button
                  type="button"
                  disabled={busy || section.questionIds.some((id) => answers[id] === undefined)}
                  onClick={() => {
                    const payload: Record<string, string> = {};
                    for (const id of section.questionIds ?? []) payload[id] = answers[id];
                    void grade({ questions: payload });
                  }}
                >
                  Check this section
                </button>
              )}
              {section.exerciseId && (
                <ExerciseBox
                  exercise={lesson.exercises.find((item) => item.id === section.exerciseId)!}
                  value={exerciseValues[section.exerciseId] ?? ""}
                  result={exerciseResults[section.exerciseId]}
                  busy={busy}
                  onChange={(value) => setExerciseValues({ ...exerciseValues, [section.exerciseId!]: value })}
                  onSubmit={() => {
                    const raw = Number(exerciseValues[section.exerciseId!]);
                    void grade({ exercise: { id: section.exerciseId!, value: raw } });
                  }}
                />
              )}
              {section.kind === "quiz" && (
                <>
                  <QuestionList
                    ids={lesson.quizIds}
                    questions={questions}
                    answers={answers}
                    results={results}
                    onSelect={(id, value) => setAnswers({ ...answers, [id]: value })}
                  />
                  <div className="row">
                    <button
                      type="button"
                      disabled={busy || lesson.quizIds.some((id) => answers[id] === undefined)}
                      onClick={() => {
                        const payload: Record<string, string> = {};
                        for (const id of lesson.quizIds) payload[id] = answers[id];
                        void grade({ questions: payload });
                      }}
                    >
                      Score knowledge check
                    </button>
                    {progress.quizzes[lesson.id] && (
                      <span className="score">
                        Last score {progress.quizzes[lesson.id].correct} / {progress.quizzes[lesson.id].total}
                      </span>
                    )}
                  </div>
                </>
              )}
              <div className="row" style={{ marginTop: "0.8rem" }}>
                <button
                  type="button"
                  className="secondary"
                  onClick={() => persist(markSectionComplete(progress, lesson.id, section.id))}
                >
                  {progress.completedSections.includes(`${lesson.id}:${section.id}`) ? "Section marked complete" : "Mark section complete"}
                </button>
              </div>
            </section>
          ))}
        </div>
      </div>
      {error && <p className="explain">{error}</p>}
      <details className="sources">
        <summary>Sources for this lesson</summary>
        <ul>
          {lesson.sources.map((source) => (
            <li key={source.title}>
              <strong>{source.title}.</strong> {source.detail}
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  if (block.type === "p") return <p>{block.text}</p>;
  if (block.type === "ul")
    return (
      <ul>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  if (block.type === "ol")
    return (
      <ol>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    );
  if (block.type === "steps")
    return (
      <div>
        <strong>{block.title}</strong>
        <ol className="steps">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </div>
    );
  if (block.type === "formula")
    return (
      <div className="formula">
        <strong>{block.label}</strong>
        {block.expression}
        <p className="meta">{block.note}</p>
      </div>
    );
  if (block.type === "diagram") return <LessonDiagram diagram={block.diagram} />;
  if (block.type === "terms")
    return (
      <dl className="terms">
        {block.items.map((item) => (
          <div key={item.term}>
            <dt>{item.term}</dt>
            <dd>{item.meaning}</dd>
          </div>
        ))}
      </dl>
    );
  return (
    <aside className={`callout ${block.tone}`}>
      <strong>{block.title}</strong>
      <p>{block.text}</p>
    </aside>
  );
}

function QuestionList({
  ids,
  questions,
  answers,
  results,
  onSelect,
}: {
  ids: string[];
  questions: Map<string, Lesson["questions"][number]>;
  answers: Record<string, string>;
  results: Record<string, QuestionResult>;
  onSelect: (id: string, value: string) => void;
}) {
  return (
    <div>
      {ids.map((id, index) => {
        const question = questions.get(id);
        if (!question) return null;
        return (
          <QuestionField
            key={id}
            index={index}
            question={question}
            answer={answers[id]}
            result={results[id]}
            onSelect={(value) => onSelect(id, value)}
          />
        );
      })}
    </div>
  );
}

function QuestionField({
  index,
  question,
  answer,
  result,
  onSelect,
}: {
  index: number;
  question: Lesson["questions"][number];
  answer?: string;
  result?: QuestionResult;
  onSelect: (value: string) => void;
}) {
  const [order, setOrder] = useState<string[] | null>(null);
  const choiceKey = question.choices.map((choice) => `${choice.id}:${choice.text}`).join("|");
  useEffect(() => {
    const seed = Math.floor(Math.random() * 0x7fffffff) || 1;
    setOrder(shuffleChoices(question.choices, seed).map((choice) => choice.id));
  }, [question.id, choiceKey, question.choices]);
  const shown = order
    ? order.map((id) => question.choices.find((choice) => choice.id === id)).filter((choice) => choice !== undefined)
    : question.choices;
  return (
    <fieldset style={{ border: 0, padding: 0, margin: "0.8rem 0" }}>
      <legend>
        <span className={levelClass(question.level)}>Level {question.level}</span> {index + 1}. {question.prompt}
      </legend>
      <div className="choices">
        {shown.map((choice) => {
          const className = !result
            ? ""
            : choice.id === result.correctChoiceId
              ? "good"
              : choice.id === result.selected
                ? "bad"
                : "";
          return (
            <label key={choice.id} className={className}>
              <input type="radio" name={question.id} checked={answer === choice.id} onChange={() => onSelect(choice.id)} />
              <span>{choice.text}</span>
            </label>
          );
        })}
      </div>
      {result && <p className="explain">{result.explanation}</p>}
    </fieldset>
  );
}

function ExerciseBox({
  exercise,
  value,
  result,
  busy,
  onChange,
  onSubmit,
}: {
  exercise: Lesson["exercises"][number];
  value: string;
  result?: ExerciseResult;
  busy: boolean;
  onChange: (value: string) => void;
  onSubmit: () => void;
}) {
  return (
    <div>
      <p>{exercise.prompt}</p>
      <div className="row">
        <label>
          Answer ({exercise.unit}){" "}
          <input
            type="number"
            step={exercise.decimals === 0 ? "1" : "0.1"}
            value={value}
            onChange={(event) => onChange(event.target.value)}
          />
        </label>
        <button type="button" disabled={busy || value.trim() === ""} onClick={onSubmit}>
          Check calculation
        </button>
      </div>
      {result && (
        <p className="explain">
          {result.correct ? "Correct." : `Not yet. The worked result is ${result.expected}.`} {result.explanation}
        </p>
      )}
    </div>
  );
}

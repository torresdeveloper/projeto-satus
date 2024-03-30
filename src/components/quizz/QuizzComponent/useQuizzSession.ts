"use client";

import { useComponentDidMount } from "@/hooks/useComponentDidMount";
import { getQuizzByName } from "@/lib/quizzes";
import {
  QuizzAnswer,
  QuizzQuestion,
  QuizzResultRow,
  QuizzesEnum,
} from "@/types/Quizzes";
import { useState } from "react";

export enum UseQuizzSessionStep {
  intro,
  question,
  result,
}

export const useQuizzSession = (
  quizzName: QuizzesEnum,
  autostart = true
): {
  step: UseQuizzSessionStep;
  quizzTitle: string;
  currentQuestion?: QuizzQuestion;
  answers: QuizzAnswer[];
  addAnswer: (answer: QuizzAnswer) => void;
  results: QuizzResultRow[] | undefined;
  restartQuizz: () => void;
  progressPercent: number;
} => {
  const quizz = getQuizzByName(quizzName);
  const [results, setResults] = useState<QuizzResultRow[] | undefined>(
    undefined
  );
  const [step, setStep] = useState<UseQuizzSessionStep>(
    UseQuizzSessionStep.intro
  );
  const [answers, setAnswers] = useState<QuizzAnswer[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<
    QuizzQuestion | undefined
  >(undefined);

  const startQuizz = () => {
    setStep(UseQuizzSessionStep.question);
    setCurrentQuestion(quizz.entrypointQuestion);
  };

  const restartQuizz = () => {
    setAnswers([]);
    setResults(undefined);
    startQuizz();
  };

  useComponentDidMount(() => {
    if (autostart) {
      startQuizz();
    }
  });

  const addAnswer = (answer: QuizzAnswer) => {
    setAnswers([...answers, answer]);
    const currentQuestionIndex = quizz.questions.indexOf(currentQuestion!);
    const nextQuestion = quizz.questions[currentQuestionIndex + 1];
    if (nextQuestion) {
      setCurrentQuestion(nextQuestion);
    } else {
      setStep(UseQuizzSessionStep.result);
      setResults(quizz.calculateScores(answers));
    }
  };

  return {
    step,
    quizzTitle: quizz.title,
    currentQuestion,
    answers,
    addAnswer,
    results,
    restartQuizz,
    progressPercent: Math.ceil((answers.length / quizz.questions.length) * 100),
  };
};

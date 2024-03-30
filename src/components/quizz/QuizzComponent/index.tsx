"use client";

import { twMerge } from "tailwind-merge";
import { UseQuizzSessionStep, useQuizzSession } from "./useQuizzSession";
import { QuizzesEnum } from "@/types/Quizzes";

export const QuizzComponent = ({ quizz }: { quizz: QuizzesEnum }) => {
  const {
    quizzTitle,
    addAnswer,
    answers,
    step,
    currentQuestion,
    results,
    restartQuizz,
    progressPercent,
  } = useQuizzSession(quizz, true);

  const restartQuizzWrapper = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    restartQuizz();
  };

  if (step === UseQuizzSessionStep.question && currentQuestion) {
    return (
      <QuizzWrapper progressPercent={progressPercent} quizzTitle={quizzTitle}>
        <h2 className="sm:text-2xl mb-6 sm:mb-12">{currentQuestion.text}</h2>

        <div className="flex gap-4">
          <div className="hidden sm:block flex-none w-[40%]">
            <div className="border-4 border-orange-50 dark:border-orange-900 rounded-lg">
              <img src={currentQuestion.imageSrc} alt="" className="w-full" />
            </div>
          </div>
          <div className="flex-1">
            {currentQuestion.answers.map((answer, index) => (
              <button
                key={answer.text}
                onClick={() => addAnswer(answer)}
                className="block w-full p-2 my-2 text-left border border-opacity-50 hover:bg-orange-200 dark:border-orange-600 dark:hover:bg-orange-900"
              >
                {answer.text}
              </button>
            ))}
          </div>
        </div>
      </QuizzWrapper>
    );
  }

  if (step === UseQuizzSessionStep.result) {
    const betterScore = results![0].score;

    return (
      <QuizzWrapper progressPercent={progressPercent} quizzTitle={quizzTitle}>
        <h2 className="text-sm mb-6 sm:text-2xl sm:mb-12">
          <span className="block text-sm opacity-40">Resultado</span>
          {quizzTitle}
        </h2>
        <div>
          {results!.slice(0, 5).map((result) => (
            <div
              key={result.text}
              className={twMerge(
                "flex flex-col sm:flex-row items-center sm:gap-4 py-2",
                result.score === betterScore
                  ? "text-orange-600 dark:text-yellow-500"
                  : "text-[#bbb] dark:text-gray-500"
              )}
            >
              <div className="flex-none">{result.text}</div>
              <div
                className={twMerge(
                  "flex-1 hidden sm:block border-t border-dashed h-0 opacity-70",
                  result.score === betterScore
                    ? "border-yellow-500"
                    : "border-gray-500"
                )}
              ></div>
              <div className="flex-none text-xs opacity-60 sm:text-base sm:opacity-100">
                {result.score} pontos
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-right prose">
          <a
            href="#"
            onClick={restartQuizzWrapper}
            className="text-xs font-normal"
          >
            Recomeçar
          </a>
        </div>
      </QuizzWrapper>
    );
  }
};

const QuizzWrapper = ({
  children,
  quizzTitle,
  progressPercent,
}: {
  children: JSX.Element[];
  quizzTitle: string;
  progressPercent: number;
}) => {
  return (
    <div className="relative border border-orange-400 p-4 sm:p-8 border-opacity-20">
      <div className="absolute top-0 left-0 w-full h-1 bg-orange-100 dark:bg-orange-950">
        <div
          className="h-full bg-orange-400 dark:bg-yellow-500"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>
      <h1 className="absolute -top-6 left-0 text-xs text-orange-400">
        {quizzTitle}
      </h1>
      {children}
    </div>
  );
};

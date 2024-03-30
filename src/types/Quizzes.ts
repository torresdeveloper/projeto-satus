import { SecondarySidebarItem } from "@/components/base/base.types";

export enum QuizzesEnum {
  EmQueAreaComecar = "/quizzes/em-que-area-comecar",
}

export function QuizzesTitle() {
  return "Quizzes";
}

export function QuizzesItems(current?: QuizzesEnum): SecondarySidebarItem[] {
  const items: SecondarySidebarItem[] = [
    {
      title: "Em que área começar?",
      href: QuizzesEnum.EmQueAreaComecar.toString(),
      // category: "Ranking",
    },
  ];
  const activeItem = items.find((item) => item.href === current);
  if (activeItem) {
    activeItem.active = true;
  }
  return items;
}

export interface QuizzResultRow {
  text: string;
  score: number;
}

export class Quizz {
  constructor(
    public title: string,
    public entrypoint: string,
    public questions: QuizzQuestion[]
  ) {
    this.title = title;
    this.entrypoint = entrypoint;
    this.questions = questions;
  }

  get entrypointQuestion() {
    return this.questions.find((question) => question.text === this.entrypoint);
  }

  calculateScores(answers: QuizzAnswer[]): QuizzResultRow[] {
    const score: Record<string, number> = {};
    answers.forEach((answer) => {
      Object.keys(answer.score).forEach((key) => {
        score[key] = (score[key] || 0) + answer.score[key];
      });
    });
    const scores = Object.entries(score).map(([text, score]) => ({
      text,
      score,
    }));
    scores.sort((a, b) => b.score - a.score);
    return scores;
  }
}

export class QuizzQuestion {
  constructor(
    public text: string,
    public answers: QuizzAnswer[],
    public imageSrc: string = ""
  ) {}
}

export class QuizzAnswer {
  constructor(public text: string, public score: Record<string, number>) {
    this.text = text;
    this.score = score;
  }
}

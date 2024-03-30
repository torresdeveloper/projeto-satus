import { Quizz, QuizzesEnum } from "@/types/Quizzes";
import { QuizzEmQueAreaComecar } from "./QuizzEmQueAreaComecar";

export function getQuizzByName(quizzName: QuizzesEnum): Quizz {
  switch (quizzName) {
    case QuizzesEnum.EmQueAreaComecar:
      return QuizzEmQueAreaComecar;
    default:
      throw new Error(`Quizz ${quizzName} not found`);
  }
}

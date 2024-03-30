import { Quizz, QuizzAnswer, QuizzQuestion } from "@/types/Quizzes";

const VoceJaSabeProgramar = new QuizzQuestion(
  "Você já sabe programar (nível básico pra cima)?",
  [
    new QuizzAnswer("Não", {
      "UI/UX": 1,
      "Gestão de Projetos": 1,
      "Gestão de Negócios": 1,
    }),
    new QuizzAnswer("Sim", {
      Mobile: 1,
      "Front-End": 1,
      "Back-End": 1,
      QA: 1,
    }),
  ],
  "https://www.springboard.com/blog/wp-content/uploads/2022/06/what-does-a-coder-do-2022-career-guide.jpg"
);

const GostaMaisDeProgramar = new QuizzQuestion(
  "O que você gosta mais de programar?",
  [
    new QuizzAnswer("Front-End", {
      "Front-End": 2,
      Mobile: 2,
      "UI/UX": 1,
    }),
    new QuizzAnswer("Back-End e APIs", {
      "Back-End": 1,
      "Gestão de Projetos": 1,
      "Gestão de Negócios": 1,
    }),
    new QuizzAnswer("Mobile", {
      Mobile: 2,
      "Front-End": 1,
    }),
    new QuizzAnswer("Não Gosto", {
      "Gestão de Projetos": 1,
      "Gestão de Negócios": 1,
      "UI/UX": 1,
    }),
  ],
  "https://media.licdn.com/dms/image/D5612AQFyuSOe0-LpFw/article-cover_image-shrink_600_2000/0/1655825955176?e=2147483647&v=beta&t=mvdK4UF5nh9cQy4Aw4YVDecaXGLKBi5WOtLn_28n1w8"
);

const GostaDeOrganizarTarefasEObjetivos = new QuizzQuestion(
  "Você gosta de organizar tarefas e objetivos?",
  [
    new QuizzAnswer("Sim", {
      "Gestão de Projetos": 2,
      "Gestão de Negócios": 1,
      "UI/UX": 1,
      Agilista: 1,
    }),
    new QuizzAnswer("Não", {
      Mobile: 1,
      "Front-End": 1,
      "Back-End": 1,
    }),
  ],
  "https://images.ctfassets.net/w6r2i5d8q73s/5E0WCHf2IwyPAYXvvJdlmt/4ee7d2c2eb4ce6401a15603a18c8a597/Kanban_Board_Beispiel.png"
);

export const QuizzEmQueAreaComecar = new Quizz(
  "Em que área começar?",
  VoceJaSabeProgramar.text,
  [VoceJaSabeProgramar, GostaMaisDeProgramar, GostaDeOrganizarTarefasEObjetivos]
);

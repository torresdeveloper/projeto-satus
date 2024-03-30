import { BasePage } from "@/components/base/BasePage";
import { PageTitle } from "@/components/base/PageTitle";
import { QuizzComponent } from "@/components/quizz/QuizzComponent";
import { QuizzesEnum, QuizzesItems, QuizzesTitle } from "@/types/Quizzes";

export default function Quizzes() {
  return (
    <BasePage
      menu="Quizzes"
      secondaryItems={QuizzesItems(QuizzesEnum.EmQueAreaComecar)}
      secondaryTitle={QuizzesTitle()}
    >
      {/* <PageTitle className="hidden sm:block" title="Em que área começar?" /> */}
      <QuizzComponent quizz={QuizzesEnum.EmQueAreaComecar} />
      <div className="prose"></div>
    </BasePage>
  );
}

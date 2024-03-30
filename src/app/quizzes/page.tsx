import { BasePage } from "@/components/base/BasePage";
import { PageTitle } from "@/components/base/PageTitle";
import { QuizzesItems, QuizzesTitle } from "@/types/Quizzes";

export default function Quizzes() {
  return (
    <BasePage
      menu="Quizzes"
      secondaryItems={QuizzesItems()}
      secondaryTitle={QuizzesTitle()}
    >
      <PageTitle title="Quizzes" />
      <div className="prose">
        <p>
          Descubra os próximos passos pra sua carreira de forma divertida e
          estratégica.
        </p>
      </div>
    </BasePage>
  );
}

import { BasePage } from "@/components/base/BasePage";
import { PageTitle } from "@/components/base/PageTitle";
import { QuizzComponent } from "@/components/quizz/QuizzComponent";
import { useServerPageProps } from "@/hooks/useServerPageProps";
import { QuizzesEnum, QuizzesItems, QuizzesTitle } from "@/types/Quizzes";

export default async function Quizzes() {
  const pageProps = await useServerPageProps();

  return (
    <BasePage
      menu="Quizzes"
      pageProps={pageProps}
      secondaryItems={QuizzesItems(QuizzesEnum.EmQueAreaComecar)}
      secondaryTitle={QuizzesTitle()}
    >
      {/* <PageTitle className="hidden sm:block" title="Em que área começar?" /> */}
      <QuizzComponent quizz={QuizzesEnum.EmQueAreaComecar} />
      <div className="prose"></div>
    </BasePage>
  );
}

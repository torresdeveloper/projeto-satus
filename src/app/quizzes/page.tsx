import { BasePage } from "@/components/base/BasePage";
import { PageTitle } from "@/components/base/PageTitle";
import { useServerPageProps } from "@/hooks/useServerPageProps";
import { QuizzesItems, QuizzesTitle } from "@/types/Quizzes";

export default async function Quizzes() {
  const pageProps = await useServerPageProps();

  return (
    <BasePage
      menu="Quizzes"
      pageProps={pageProps}
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

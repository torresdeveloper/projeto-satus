import { BasePage } from "@/components/base/BasePage";
import { PageTitle } from "@/components/base/PageTitle";
import { useServerPageProps } from "@/hooks/useServerPageProps";
import { FrontendItems, FrontendTitle } from "@/types/Frontend";

export default async function Frontend() {
  const pageProps = await useServerPageProps();

  return (
    <BasePage
      menu="Front-end"
      pageProps={pageProps}
      secondaryItems={FrontendItems()}
      secondaryTitle={FrontendTitle()}
    >
      <PageTitle title="Front-end" />
      <div className="prose">
        <p>Artigos para ajudar quem está começando no desenvolvimento web.</p>
      </div>
    </BasePage>
  );
}

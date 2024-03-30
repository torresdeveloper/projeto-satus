import { BasePage } from "@/components/base/BasePage";
import { PageTitle } from "@/components/base/PageTitle";
import { useServerPageProps } from "@/hooks/useServerPageProps";
import { BackendItems, BackendTitle } from "@/types/Backend";

export default async function Backend() {
  const pageProps = await useServerPageProps();

  return (
    <BasePage
      menu="Back-end"
      pageProps={pageProps}
      secondaryItems={BackendItems()}
      secondaryTitle={BackendTitle()}
    >
      <PageTitle title="Back-end" />
      <div className="prose">
        <p>
          Artigos para ajudar quem está começando no desenvolvimento de APIs.
        </p>
      </div>
    </BasePage>
  );
}

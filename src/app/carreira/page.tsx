import { BasePage } from "@/components/base/BasePage";
import { PageTitle } from "@/components/base/PageTitle";
import { useServerPageProps } from "@/hooks/useServerPageProps";
import { CarreiraItems, CarreiraTitle } from "@/types/Carreira";

export default async function Carreira() {
  const pageProps = await useServerPageProps();
  return (
    <BasePage
      menu="Carreira"
      pageProps={pageProps}
      secondaryItems={CarreiraItems()}
      secondaryTitle={CarreiraTitle()}
    >
      <PageTitle title="Carreira" />
      <div className="prose">
        <p>
          Dicas para quem está buscando o primeiro emprego ou conseguir um
          melhor.
        </p>
      </div>
    </BasePage>
  );
}

import { BasePage } from "@/components/base/BasePage";
import { PageTitle } from "@/components/base/PageTitle";
import { useServerPageProps } from "@/hooks/useServerPageProps";
import {
  CarreiraEnum,
  CarreiraItems,
  CarreiraPageTitle,
  CarreiraTitle,
} from "@/types/Carreira";

export default async function Carreira() {
  const pageProps = await useServerPageProps();

  return (
    <BasePage
      menu="Carreira"
      pageProps={pageProps}
      secondaryItems={CarreiraItems(
        CarreiraEnum.DicasParaEntrevistaProgramadores
      )}
      secondaryTitle={CarreiraTitle()}
    >
      <PageTitle
        title={CarreiraPageTitle(CarreiraEnum.DicasParaEntrevistaProgramadores)}
      />
      <div className="prose">
        <p>todo</p>
      </div>
    </BasePage>
  );
}

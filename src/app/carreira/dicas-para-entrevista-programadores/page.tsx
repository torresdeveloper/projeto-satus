import { BasePage } from "@/components/base/BasePage";
import { PageTitle } from "@/components/base/PageTitle";
import {
  CarreiraEnum,
  CarreiraItems,
  CarreiraPageTitle,
  CarreiraTitle,
} from "@/types/Carreira";

export default function Carreira() {
  return (
    <BasePage
      menu="Carreira"
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

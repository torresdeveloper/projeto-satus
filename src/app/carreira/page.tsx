import { BasePage } from "@/components/base/BasePage";
import { PageTitle } from "@/components/base/PageTitle";
import { CarreiraItems, CarreiraTitle } from "@/types/Carreira";

export default function Carreira() {
  return (
    <BasePage
      menu="Carreira"
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

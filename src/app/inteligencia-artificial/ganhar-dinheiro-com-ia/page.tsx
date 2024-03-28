import { BasePage } from "@/components/base/BasePage";
import { PageTitle } from "@/components/base/PageTitle";
import {
  InteligenciaArtificialEnum,
  InteligenciaArtificialItems,
  InteligenciaArtificialTitle,
} from "@/types/InteligenciaArtificial";

export default function InteligenciaArtificial() {
  return (
    <BasePage
      menu="Inteligência Artificial"
      secondaryItems={InteligenciaArtificialItems(
        InteligenciaArtificialEnum.GanharDinheiroComIA
      )}
      secondaryTitle={InteligenciaArtificialTitle()}
    >
      <PageTitle title="Como as pessoas estão ganhando dinheiro com Inteligência Artificial?" />
      <div className="prose">
        <p>Todo</p>
      </div>
    </BasePage>
  );
}

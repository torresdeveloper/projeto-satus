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
        InteligenciaArtificialEnum.InicioDeCarreira
      )}
      secondaryTitle={InteligenciaArtificialTitle()}
    >
      <PageTitle title="Como eu começo minha carreira com Inteligência Artificial?" />
      <div className="prose">
        <p>Todo</p>
      </div>
    </BasePage>
  );
}

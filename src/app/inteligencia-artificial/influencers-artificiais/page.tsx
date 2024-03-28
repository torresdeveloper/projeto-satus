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
        InteligenciaArtificialEnum.InfluencersArtificiais
      )}
      secondaryTitle={InteligenciaArtificialTitle()}
    >
      <PageTitle title="Influencers Artificiais" />
      <div className="prose">
        <p>Todo</p>
      </div>
    </BasePage>
  );
}

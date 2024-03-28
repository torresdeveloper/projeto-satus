import { BasePage } from "@/components/base/BasePage";
import { PageTitle } from "@/components/base/PageTitle";
import {
  InteligenciaArtificialItems,
  InteligenciaArtificialTitle,
} from "@/types/InteligenciaArtificial";

export default function InteligenciaArtificial() {
  return (
    <BasePage
      menu="Inteligência Artificial"
      secondaryItems={InteligenciaArtificialItems()}
      secondaryTitle={InteligenciaArtificialTitle()}
    >
      <PageTitle title="Desvendando os Mistérios da Inteligência Artificial" />
      <div className="prose">
        <p>
          Trabalhar com Inteligência Artificial já não é um sonho futurista, o
          mercado de trabalho já está repleto de oportunidades para quem deseja
          atuar nessa área.
        </p>

        <p>
          Se você sempre quis entender o que é inteligência artificial e como
          ela pode impactar sua vida, este é o lugar certo! Daremos dicas sobre
          como usar ChatGPT, geração de vídeos, mercado de trabalho, Data
          Science, Data Engineering em seu próprio benefício e obter uma
          vantagem exponencial na sua busca por oportunidades.
        </p>
      </div>
    </BasePage>
  );
}

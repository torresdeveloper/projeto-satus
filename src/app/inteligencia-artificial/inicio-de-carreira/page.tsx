import { BasePage } from "@/components/base/BasePage";
import { PageTitle } from "@/components/base/PageTitle";
import { useServerPageProps } from "@/hooks/useServerPageProps";
import {
  InteligenciaArtificialEnum,
  InteligenciaArtificialItems,
  InteligenciaArtificialTitle,
} from "@/types/InteligenciaArtificial";

export default async function InteligenciaArtificial() {
  const pageProps = await useServerPageProps();

  return (
    <BasePage
      menu="Inteligência Artificial"
      pageProps={pageProps}
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

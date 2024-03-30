import { BasePage } from "@/components/base/BasePage";
import { ItemPreviewRow } from "@/components/items/ItemPreviewRow";
import { useServerPageProps } from "@/hooks/useServerPageProps";
import { detalhesServicoPremium } from "@/lib/supabase/server";
import { ServicoPremiumStatus } from "../ServicoPremiumStatus";
import { MdxDoServicoPremium } from "./actions";

export default async function ServicosPremium({
  params,
}: {
  params: { id: string };
}) {
  const pageProps = await useServerPageProps();
  const servicoId = params.id;
  const servico = await detalhesServicoPremium(servicoId);
  const DetalhesDoServico = await MdxDoServicoPremium(servicoId);

  return (
    <BasePage menu="Serviços Premium" pageProps={pageProps}>
      <div className="prose mt-0">
        <div>
          <ItemPreviewRow
            key={servico.id}
            title={servico.titulo}
            imageSrc={servico.imagemSrc}
          >
            <span className="text-sm font-normal">{servico.texto}</span>
          </ItemPreviewRow>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <p className="text-4xl text-center text-orange-600 dark:text-yellow-500">
          R$ {servico.valorServico}
        </p>
        <ServicoPremiumStatus servico={servico} />
      </div>
      <div className="prose mt-8">
        {DetalhesDoServico && <DetalhesDoServico />}
      </div>
    </BasePage>
  );
}

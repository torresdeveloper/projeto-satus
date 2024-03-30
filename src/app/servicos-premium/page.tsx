import { BasePage } from "@/components/base/BasePage";
import { PageTitle } from "@/components/base/PageTitle";
import { ItemPreviewRow } from "@/components/items/ItemPreviewRow";
import { useServerPageProps } from "@/hooks/useServerPageProps";
import { listarServicosPremium } from "@/lib/supabase/server";
import Link from "next/link";
import { ServicoPremiumStatus } from "./ServicoPremiumStatus";

export default async function ServicosPremium() {
  const pageProps = await useServerPageProps();
  const servicos = await listarServicosPremium();

  return (
    <BasePage menu="Serviços Premium" pageProps={pageProps}>
      <PageTitle title="Serviços Premium" />
      <div className="prose">
        <p>
          Ganhe incentivos financeiros para fazer tarefas que vão ajudar você a
          melhorar seu portifólio e conseguir seu emprego dos sonhos.
        </p>

        <div className="md:mt-20">
          {servicos.map((servico) => {
            return (
              <div key={servico.id} className="mb-4 sm:mb-10">
                <ItemPreviewRow
                  title={servico.titulo}
                  imageSrc={servico.imagemSrc}
                >
                  <span className="text-sm font-normal">
                    {servico.descricao}
                  </span>
                  <br />
                  <ServicoPremiumStatus servico={servico} />
                  <Link href={`/servicos-premium/${servico.id}`}>
                    Ver detalhes do serviço
                  </Link>
                </ItemPreviewRow>
              </div>
            );
          })}
        </div>
      </div>
    </BasePage>
  );
}

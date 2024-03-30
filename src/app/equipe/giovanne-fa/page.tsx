import { BasePage } from "@/components/base/BasePage";
import { PageTitle } from "@/components/base/PageTitle";
import { ItemPreviewRow } from "@/components/items/ItemPreviewRow";
import { SocialLinkList } from "@/components/lists/SocialLinkList";
import { useServerPageProps } from "@/hooks/useServerPageProps";
import { EquipeEnum, EquipeItems, EquipeTitle } from "@/types/Equipe";
import Link from "next/link";

export default async function Equipe() {
  const pageProps = await useServerPageProps();

  return (
    <BasePage
      menu="Nossa Equipe"
      pageProps={pageProps}
      secondaryItems={EquipeItems(EquipeEnum.GiovanneFeitosaAfonso)}
      secondaryTitle={EquipeTitle()}
    >
      <PageTitle title="Giovanne F. Afonso" />
      <div className="prose">
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex-none w-72 max-w-full">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOS22Rl-Z-uSnWgWjMgbM5c2wlqVavuJ9OlxFyiXsNGKiBkQiOJm2vQ-tm0pY0a6FSi8fv_uAT05c62EzToI28kIFoBKjTNt9zeZ3G4RiiBI3sPgNxoIN9oOI_VHckYLMHwO0mB3w22ws/s1600/wallpaper-for-facebook-profile-photo.jpg"
              alt="Giovanne F. Afonso"
              className="w-full m-0"
            />
          </div>
          <div className="flex-1">
            <p>
              Desenvolvedor de Software experiente com 15+ anos de experiência.
              Atualmente trabalhando com Inteligência Artificial Generativa.
              Fundador do Projeto Satus.
            </p>
            <div className="flex justify-end">
              <SocialLinkList />
            </div>
          </div>
        </div>
      </div>
    </BasePage>
  );
}

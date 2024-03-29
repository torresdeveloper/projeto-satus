import { BasePage } from "@/components/base/BasePage";
import { PageTitle } from "@/components/base/PageTitle";
import { ItemPreviewRow } from "@/components/items/ItemPreviewRow";
import { EquipeItems, EquipeTitle } from "@/types/Equipe";
import Link from "next/link";

export default function Equipe() {
  return (
    <BasePage
      menu="Nossa Equipe"
      secondaryItems={EquipeItems()}
      secondaryTitle={EquipeTitle()}
    >
      <PageTitle title="Nossa Equipe" />
      <div className="prose">
        <p>
          As pessoas listadas aqui estão ativamente buscando e compartilhando
          conhecimentos na nossa comunidade de estudos focados na carreira da
          tecnologia. O Projeto Satus tem orgulho de fazer parte da história
          desses profissionais.
        </p>
        <h2>Liderança</h2>
        <ItemPreviewRow
          title="Giovanne F. Afonso"
          imageSrc="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOS22Rl-Z-uSnWgWjMgbM5c2wlqVavuJ9OlxFyiXsNGKiBkQiOJm2vQ-tm0pY0a6FSi8fv_uAT05c62EzToI28kIFoBKjTNt9zeZ3G4RiiBI3sPgNxoIN9oOI_VHckYLMHwO0mB3w22ws/s1600/wallpaper-for-facebook-profile-photo.jpg"
        >
          Trabalho com Desenvolvimento Full-Stack e Inteligência Artificial
          Generativa. Fundador do Projeto Satus.{" "}
          <Link href="/equipe/giovanne-fa">Ver Perfil</Link>
        </ItemPreviewRow>

        <h2>Full-Stack</h2>
        <ItemPreviewRow
          title="Matheus Torres"
          imageSrc="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOS22Rl-Z-uSnWgWjMgbM5c2wlqVavuJ9OlxFyiXsNGKiBkQiOJm2vQ-tm0pY0a6FSi8fv_uAT05c62EzToI28kIFoBKjTNt9zeZ3G4RiiBI3sPgNxoIN9oOI_VHckYLMHwO0mB3w22ws/s1600/wallpaper-for-facebook-profile-photo.jpg"
        >
          Deselvolvedor Full-Stack, focado em desenvolvimento de APIs e
          integração Frontend/Backend.{" "}
          <Link href="/equipe/matheus-torres">Ver Perfil</Link>
        </ItemPreviewRow>
      </div>
    </BasePage>
  );
}

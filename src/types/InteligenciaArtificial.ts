import { SecondarySidebarItem } from "@/components/base/base.types";

export enum InteligenciaArtificialEnum {
  FerramentasIAGratis = "/inteligencia-artificial/ferramentas-ia-gratis-mais-interessantes",
  InfluencersArtificiais = "/inteligencia-artificial/influencers-artificiais",
  GanharDinheiroComIA = "/inteligencia-artificial/ganhar-dinheiro-com-ia",
  InicioDeCarreira = "/inteligencia-artificial/inicio-de-carreira",
}

export function InteligenciaArtificialTitle() {
  return "Inteligência Artificial";
}

export function InteligenciaArtificialItems(
  current?: InteligenciaArtificialEnum
): SecondarySidebarItem[] {
  const items: SecondarySidebarItem[] = [
    {
      title: "Lista com as Ferramentas de IA Grátis mais interessantes",
      href: InteligenciaArtificialEnum.FerramentasIAGratis.toString(),
      date: "2024-03-28",
      // category: "Ranking",
    },
    // {
    //   title:
    //     "A nova era dos Influencers Artificiais. Conheça algumas sub-celebridades que não existem!",
    //   href: InteligenciaArtificialEnum.InfluencersArtificiais.toString(),
    //   date: "17 Mar 2024",
    //   // category: "Backend",
    // },
    // {
    //   title:
    //     "Como as pessoas estão ganhando dinheiro com Inteligência Artificial?",
    //   href: InteligenciaArtificialEnum.GanharDinheiroComIA.toString(),
    //   date: "17 Mar 2024",
    // },
    // {
    //   title: "Como eu começo minha carreira com Inteligência Artificial?",
    //   href: InteligenciaArtificialEnum.InicioDeCarreira.toString(),
    //   date: "17 Mar 2024",
    // },
  ];
  const activeItem = items.find((item) => item.href === current);
  if (activeItem) {
    activeItem.active = true;
  }
  return items;
}

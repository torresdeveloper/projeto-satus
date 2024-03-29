import { SecondarySidebarItem } from "@/components/base/base.types";

export enum FrontendEnum {
  IntroducaoAoFrontend = "/frontend/introducao-ao-frontend",
  MelhoresTecnologiasFrontend = "/frontend/melhores-tecnologias-frontend",
}

export function FrontendTitle() {
  return "Front-end";
}

export function FrontendItems(current?: FrontendEnum): SecondarySidebarItem[] {
  const items: SecondarySidebarItem[] = [
    {
      title: "Introdução ao Frontend",
      href: FrontendEnum.IntroducaoAoFrontend.toString(),
      date: "2024-03-28",
      // category: "Ranking",
    },
    {
      title: "Melhores Tecnologias Frontend",
      href: FrontendEnum.MelhoresTecnologiasFrontend.toString(),
      date: "17 Mar 2024",
      // category: "Backend",
    },
    // {
    //   title:
    //     "Como as pessoas estão ganhando dinheiro com Inteligência Artificial?",
    //   href: FrontendEnum.GanharDinheiroComIA.toString(),
    //   date: "17 Mar 2024",
    // },
    // {
    //   title: "Como eu começo minha carreira com Inteligência Artificial?",
    //   href: FrontendEnum.InicioDeCarreira.toString(),
    //   date: "17 Mar 2024",
    // },
  ];
  const activeItem = items.find((item) => item.href === current);
  if (activeItem) {
    activeItem.active = true;
  }
  return items;
}

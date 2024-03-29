import { SecondarySidebarItem } from "@/components/base/base.types";

export enum BackendEnum {
  IntroducaoAoBackend = "/backend/introducao-ao-backend",
}

export function BackendTitle() {
  return "Front-end";
}

export function BackendItems(current?: BackendEnum): SecondarySidebarItem[] {
  const items: SecondarySidebarItem[] = [
    {
      title: "Introdução ao Backend",
      href: BackendEnum.IntroducaoAoBackend.toString(),
      date: "2024-03-28",
      // category: "Ranking",
    },
    // {
    //   title:
    //     "Como as pessoas estão ganhando dinheiro com Inteligência Artificial?",
    //   href: BackendEnum.GanharDinheiroComIA.toString(),
    //   date: "17 Mar 2024",
    // },
    // {
    //   title: "Como eu começo minha carreira com Inteligência Artificial?",
    //   href: BackendEnum.InicioDeCarreira.toString(),
    //   date: "17 Mar 2024",
    // },
  ];
  const activeItem = items.find((item) => item.href === current);
  if (activeItem) {
    activeItem.active = true;
  }
  return items;
}

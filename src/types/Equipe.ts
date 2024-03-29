import { SecondarySidebarItem } from "@/components/base/base.types";

export enum EquipeEnum {
  GiovanneFeitosaAfonso = "/equipe/giovanne-fa",
  MatheusTorres = "/equipe/matheus-torres",
}

export function EquipeTitle() {
  return "Equipe";
}

export function EquipeItems(current?: EquipeEnum): SecondarySidebarItem[] {
  const items: SecondarySidebarItem[] = [
    {
      title: "Giovanne F. Afonso",
      href: EquipeEnum.GiovanneFeitosaAfonso.toString(),
      // category: "Ranking",
    },
    {
      title: "Matheus Torres",
      href: EquipeEnum.MatheusTorres.toString(),
      // category: "Equipe",
    },
    // {
    //   title:
    //     "Como as pessoas estão ganhando dinheiro com Inteligência Artificial?",
    //   href: EquipeEnum.GanharDinheiroComIA.toString(),
    //   date: "17 Mar 2024",
    // },
    // {
    //   title: "Como eu começo minha carreira com Inteligência Artificial?",
    //   href: EquipeEnum.InicioDeCarreira.toString(),
    //   date: "17 Mar 2024",
    // },
  ];
  const activeItem = items.find((item) => item.href === current);
  if (activeItem) {
    activeItem.active = true;
  }
  return items;
}

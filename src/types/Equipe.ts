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
  ];
  const activeItem = items.find((item) => item.href === current);
  if (activeItem) {
    activeItem.active = true;
  }
  return items;
}

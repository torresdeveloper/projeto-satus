import { SecondarySidebarItem } from "@/components/base/base.types";

export enum CarreiraEnum {
  DicasParaEntrevistaProgramadores = "/carreira/dicas-para-entrevista-programadores",
}

const items: SecondarySidebarItem[] = [
  {
    title: "Dicas para Entrevista - Programadores",
    href: CarreiraEnum.DicasParaEntrevistaProgramadores.toString(),
    date: "2024-03-30",
  },
  {
    title: "Dicas para LinkedIn",
    href: "/carreira/dicas-para-linkedin",
    date: "2024-03-30",
  },
  {
    title: "Dicas para Github",
    href: "/carreira/dicas-para-linkedin",
    date: "2024-03-30",
  },
  {
    title: "Dicas para Projeto Pessoal",
    href: "/carreira/dicas-para-projeto-pessoal",
    date: "2024-03-30",
  },
];

export function CarreiraTitle() {
  return "Carreira";
}

export function CarreiraPageTitle(current: CarreiraEnum): string | undefined {
  const item = items.find((item) => item.href === current);
  return item?.title;
}

export function CarreiraItems(current?: CarreiraEnum): SecondarySidebarItem[] {
  const itemsCopy = items.map((item) => ({ ...item }));
  const activeItem = itemsCopy.find((item) => item.href === current);
  if (activeItem) {
    activeItem.active = true;
  }
  return itemsCopy;
}

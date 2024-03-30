export interface DbServicoPremium {
  id: number;
  responsavelId: number;
  titulo: string;
  imagemSrc: string;
  descricao: string;
  texto: string;
  status: DbServicoPremiumStatus;
  valorServico: number;
  criadoEm: string;
  iniciadoEm?: string;
  concluidoEm?: string;
  canceladoEm?: string;
}

export enum DbServicoPremiumStatus {
  Criado = "Criado",
  EmProgresso = "Em Progresso",
  Concluido = "Concluido",
  Cancelado = "Cancelado",
}

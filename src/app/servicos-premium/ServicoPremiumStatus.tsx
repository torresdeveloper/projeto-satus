import {
  DbServicoPremium,
  DbServicoPremiumStatus,
} from "@/types/SupabaseDatabase";
import { twMerge } from "tailwind-merge";

export const ServicoPremiumStatus = ({
  servico,
}: {
  servico: DbServicoPremium;
}) => {
  return (
    <div
      className={twMerge(
        "my-4 px-8 py-0 rounded-lg",
        servico.status === DbServicoPremiumStatus.Criado
          ? "bg-green-700 text-white"
          : "bg-gray-800"
      )}
    >
      {parseStatus(servico.status)}
    </div>
  );
};

function parseStatus(status: DbServicoPremiumStatus) {
  switch (status) {
    case DbServicoPremiumStatus.Criado:
      return "Aberto para inscrições";
    case DbServicoPremiumStatus.EmProgresso:
      return "Em desenvolvimento";
    case DbServicoPremiumStatus.Concluido:
      return "Concluído";
    case DbServicoPremiumStatus.Cancelado:
      return "Cancelado";
    default:
      return String(status);
  }
}

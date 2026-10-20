import type { Metadata } from "next";
import EncerramentoView from "@/components/EncerramentoView";

export const metadata: Metadata = {
  title: "O seminário acabou… de começar — Impacto de Deus",
  description:
    "Conhecemos Jesus para caminhar com Ele. Uma mensagem de encerramento do Seminário de Vida no Espírito Santo do Impacto de Deus.",
};

export default function SeminarioPage() {
  return <EncerramentoView />;
}

"use client";

import { useEffect, useState } from "react";
import { Calendar, Download, ArrowUpRight } from "lucide-react";
import { useUI } from "@/components/ui/UIProvider";
import { nextEncontro, googleUrl, icsUri } from "@/lib/calendar";

export default function Agenda() {
  const { showToast } = useUI();
  const [recurGoogle, setRecurGoogle] = useState("");
  const [recurIcs, setRecurIcs] = useState("");

  useEffect(() => {
    const first = nextEncontro(new Date());
    setRecurGoogle(googleUrl(first, true));
    setRecurIcs(icsUri(first, true));
  }, []);

  return (
    <section
      id="agenda"
      className="relative overflow-hidden bg-preto text-grafite-100"
    >
      <div
        aria-hidden
        className="animate-glow pointer-events-none absolute right-[-6%] top-[-20%] h-[50vw] max-h-[520px] w-[50vw] max-w-[520px]"
        style={{
          background:
            "radial-gradient(circle,rgba(248,160,16,.2) 0%,rgba(248,160,16,0) 65%)",
          animationDuration: "16s",
        }}
      />
      <div className="relative mx-auto grid max-w-measure grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-center gap-[clamp(32px,5vw,64px)] px-[clamp(20px,5vw,48px)] py-[clamp(64px,10vw,110px)]">
        <div>
          <div className="mb-4 font-display text-xs font-semibold uppercase tracking-[.18em] text-amarelo-400">
            Adicione à sua agenda
          </div>
          <h2
            className="m-0 font-poster uppercase leading-[.92] text-branco"
            style={{ fontSize: "clamp(34px,6vw,72px)" }}
          >
            Um encontro marcado com Deus
          </h2>
          <p className="m-0 mt-[22px] max-w-[46ch] text-base leading-[1.6] text-grafite-200">
            Deixa o sábado guardado na sua rotina. Escolhe abaixo e os encontros
            entram direto no seu calendário.
          </p>
          <p className="m-0 mt-4 max-w-[46ch] text-[13px] leading-[1.5] text-grafite-400">
            Isso adiciona a programação habitual ao seu calendário pessoal.
            Alterações pontuais ainda não sincronizam automaticamente.
          </p>
        </div>

        <div className="flex flex-col gap-[14px]">
          <a
            href={recurGoogle || undefined}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-md border border-[rgba(255,255,255,.18)] bg-grafite-800 p-[18px_20px] text-branco transition-colors hover:border-amarelo-500 hover:bg-grafite-700"
          >
            <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-[12px] bg-branco">
              <Calendar size={22} strokeWidth={1.75} className="text-grafite-900" />
            </span>
            <span className="flex-1">
              <span className="block text-[15px] font-semibold">
                Adicionar ao Google Calendar
              </span>
              <span className="mt-0.5 block text-[13px] text-grafite-300">
                Repete todo sábado, 20h
              </span>
            </span>
            <ArrowUpRight size={18} strokeWidth={2} className="text-grafite-400" />
          </a>

          <a
            href={recurIcs || undefined}
            download="encontros-impacto-de-deus.ics"
            onClick={() => showToast("Arquivo .ics baixado 💛")}
            className="flex items-center gap-4 rounded-md border border-[rgba(255,255,255,.18)] bg-grafite-800 p-[18px_20px] text-branco transition-colors hover:border-amarelo-500 hover:bg-grafite-700"
          >
            <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-[12px] bg-amarelo-500">
              <Download size={22} strokeWidth={1.9} className="text-grafite-900" />
            </span>
            <span className="flex-1">
              <span className="block text-[15px] font-semibold">
                Baixar arquivo .ics
              </span>
              <span className="mt-0.5 block text-[13px] text-grafite-300">
                Apple Calendar, Outlook e compatíveis
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

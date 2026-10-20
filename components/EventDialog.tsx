"use client";

import { useEffect } from "react";
import { Clock, MapPin, CalendarPlus, Download, X } from "lucide-react";
import type { EncontroSelecionado } from "@/lib/calendar";

interface Props {
  dialog: EncontroSelecionado;
  onClose: () => void;
  onIcsDownload: () => void;
}

export default function EventDialog({ dialog, onClose, onIcsDownload }: Props) {
  // Fecha com Escape e trava o scroll do body enquanto aberto.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="animate-fade fixed inset-0 z-[60] flex items-center justify-center bg-[rgba(11,11,11,.72)] p-5 backdrop-blur-[3px]"
      role="dialog"
      aria-modal="true"
      aria-label={`${dialog.title}, ${dialog.date}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="animate-rise w-[min(440px,100%)] rounded-lg bg-branco p-6 shadow-lg sm:p-[34px]"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="mb-2 font-display text-[11px] font-semibold uppercase tracking-[.16em] text-amarelo-700">
              {dialog.date}
            </div>
            <h3 className="m-0 font-display text-2xl font-semibold text-grafite-900">
              {dialog.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full border border-grafite-200 bg-branco text-grafite-600 transition-colors hover:bg-amarelo-100"
          >
            <X size={18} strokeWidth={2} />
          </button>
        </div>

        <div className="mt-[18px] flex flex-col gap-[10px] text-sm text-grafite-600">
          <div className="flex items-center gap-[10px]">
            <Clock size={17} strokeWidth={2} className="text-amarelo-600" />
            20h às 21h30
          </div>
          <div className="flex items-center gap-[10px]">
            <MapPin size={17} strokeWidth={2} className="text-amarelo-600" />
            Santuário Santa Teresinha · 3º andar
          </div>
          <p className="m-0 mt-1.5 leading-relaxed text-grafite-500">
            Vem rezar, escutar a Palavra e viver a fé em comunidade. É de graça e
            aberto a todos.
          </p>
        </div>

        <div className="mt-[22px] flex flex-col gap-[10px]">
          <a
            href={dialog.google}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[46px] items-center justify-center gap-[10px] rounded-full bg-amarelo-500 font-display text-sm font-semibold uppercase tracking-[.06em] text-grafite-900 transition-colors hover:bg-amarelo-600"
          >
            <CalendarPlus size={18} strokeWidth={1.9} />
            Google Calendar
          </a>
          <a
            href={dialog.ics}
            download="encontro-impacto-de-deus.ics"
            onClick={onIcsDownload}
            className="inline-flex h-[46px] items-center justify-center gap-[10px] rounded-full border-2 border-grafite-600 bg-transparent font-display text-sm font-semibold uppercase tracking-[.06em] text-grafite-900 transition-colors hover:border-amarelo-500 hover:bg-amarelo-100"
          >
            <Download size={18} strokeWidth={1.9} />
            Baixar .ics
          </a>
        </div>
      </div>
    </div>
  );
}

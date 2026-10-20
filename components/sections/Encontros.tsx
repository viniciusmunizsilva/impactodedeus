import Image from "next/image";
import { Clock, MapPin, Navigation } from "lucide-react";
import Button from "@/components/Button";
import { ENCONTRO, MAPS_URL } from "@/lib/config";
import emblemWhite from "@/public/assets/logo-emblem-white-transparent.png";

export default function Encontros() {
  return (
    <section
      id="encontros"
      className="relative overflow-hidden bg-grafite-900 text-grafite-100"
    >
      <Image
        src={emblemWhite}
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-[-10%] left-[-8%] w-[40vw] max-w-[460px] opacity-[.04]"
      />

      <div className="relative mx-auto max-w-measure px-[clamp(20px,5vw,48px)] py-[clamp(64px,10vw,120px)]">
        <div className="max-w-[60ch]">
          <div className="mb-[18px] font-display text-xs font-semibold uppercase tracking-[.18em] text-amarelo-400">
            Nossos encontros
          </div>
          <h2
            className="m-0 font-poster uppercase leading-[.92] tracking-[-.01em] text-branco"
            style={{ fontSize: "clamp(34px,6vw,76px)" }}
          >
            Existe um lugar para você
          </h2>
          <p className="m-0 mt-[22px] text-[17px] leading-[1.65] text-grafite-200">
            Reserve um tempo para Deus. Vem rezar com a gente, escutar a Palavra
            e viver a fé em comunidade.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] items-stretch gap-6">
          {/* Card de horário */}
          <div className="flex min-h-[260px] flex-col justify-between rounded-lg bg-amarelo-500 p-[clamp(28px,4vw,44px)] text-grafite-900">
            <div className="font-display text-xs font-bold uppercase tracking-[.2em]">
              Toda semana, sem falta
            </div>
            <div>
              <div
                className="font-poster uppercase leading-[.86] tracking-[-.01em]"
                style={{ fontSize: "clamp(40px,7vw,78px)" }}
              >
                Todos os
                <br />
                sábados
              </div>
              <div className="mt-[14px] inline-flex items-center gap-[10px] rounded-full bg-grafite-900 px-[18px] py-2 font-display text-[22px] font-semibold tracking-[.04em] text-amarelo-500">
                <Clock size={18} strokeWidth={2.2} />
                às 20h
              </div>
            </div>
          </div>

          {/* Card de local + mapa */}
          <div className="flex min-h-[260px] flex-col overflow-hidden rounded-lg border border-[rgba(255,255,255,.18)] bg-grafite-800">
            <div
              className="relative flex min-h-[150px] flex-1 items-center justify-center"
              style={{
                background:
                  "repeating-linear-gradient(45deg,#2F2E2E,#2F2E2E 14px,#242323 14px,#242323 28px)",
              }}
              aria-hidden
            >
              <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-amarelo-500 shadow-[0_8px_24px_rgba(0,0,0,.4)]">
                <MapPin size={26} strokeWidth={2} className="text-grafite-900" />
              </span>
            </div>
            <div className="p-[22px]">
              <div className="mb-2 font-display text-[11px] font-semibold uppercase tracking-[.16em] text-amarelo-400">
                Onde acontece
              </div>
              <div className="text-[17px] font-semibold leading-[1.35] text-branco">
                {ENCONTRO.localNome}
              </div>
              <div className="mt-1 text-sm text-grafite-300">
                {ENCONTRO.localDetalhe}
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 font-display text-[13px] font-semibold uppercase tracking-[.06em] text-amarelo-400 transition-colors hover:text-amarelo-500"
              >
                Como chegar
                <Navigation size={15} strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Card primeira vez + agenda */}
          <div className="flex min-h-[260px] flex-col justify-between rounded-lg border border-[rgba(255,255,255,.18)] bg-grafite-800 p-7">
            <div>
              <div className="mb-3 font-display text-[11px] font-semibold uppercase tracking-[.16em] text-amarelo-400">
                Primeira vez?
              </div>
              <p className="m-0 text-[15px] leading-[1.6] text-grafite-200">
                É de graça e não precisa avisar. Chega um pouquinho antes das
                20h, pode vir com quem quiser — a gente te recebe na porta. 💛
              </p>
            </div>
            <div className="mt-[22px]">
              <Button href="#calendario" variant="primary" size="md" fullWidth>
                Ver o calendário
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

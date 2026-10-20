import Image from "next/image";
import { Clock } from "lucide-react";
import Button from "@/components/Button";
import heroPhoto from "@/public/assets/photo-encontro-grupo.png";
import emblemYellow from "@/public/assets/logo-emblem-yellow.png";

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative flex min-h-[min(92vh,760px)] items-end overflow-hidden"
    >
      {/* Foto full-bleed da comunidade */}
      <div className="absolute inset-0">
        <Image
          src={heroPhoto}
          alt="Momento de oração do grupo Impacto de Deus"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Scrim gradiente vertical */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg,rgba(11,11,11,.72) 0%,rgba(11,11,11,.45) 38%,rgba(11,11,11,.92) 100%)",
        }}
      />

      {/* Glow radial amarelo animado */}
      <div
        aria-hidden
        className="animate-glow pointer-events-none absolute left-1/2 top-[-10%] h-[70vw] max-h-[720px] w-[70vw] max-w-[720px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(circle,rgba(248,160,16,.28) 0%,rgba(248,160,16,0) 62%)",
        }}
      />

      {/* Emblema marca d'água */}
      <Image
        src={emblemYellow}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-[-6%] top-[8%] w-[46vw] max-w-[520px] opacity-[.06]"
      />

      <div className="relative mx-auto w-full max-w-measure px-[clamp(20px,5vw,48px)] pb-[clamp(56px,9vw,104px)]">
        <div className="animate-rise mb-[22px] flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[.22em] text-amarelo-400">
          <span className="inline-block h-px w-[30px] bg-amarelo-500" />
          Grupo de oração Impacto de Deus
        </div>

        <h1
          className="animate-rise m-0 max-w-[16ch] text-balance font-poster uppercase leading-[.9] tracking-[-.01em] text-branco"
          style={{ fontSize: "clamp(40px,8vw,112px)", animationDelay: ".08s" }}
        >
          Impactar os <span className="text-amarelo-500">corações</span> através
          do Evangelho
        </h1>

        <div
          className="animate-rise mt-9 flex flex-wrap gap-[14px]"
          style={{ animationDelay: ".24s" }}
        >
          <Button href="#sobre" variant="primary" size="lg">
            Conheça o Impacto
          </Button>
          <Button href="#encontros" variant="onDark" size="lg">
            Participe de um encontro
          </Button>
        </div>

        <div
          className="animate-rise mt-[34px] flex items-center gap-[10px] font-display text-[13px] uppercase tracking-[.08em] text-grafite-300"
          style={{ animationDelay: ".32s" }}
        >
          <Clock size={16} strokeWidth={2} className="text-amarelo-500" />
          Sábados · 20h · Santuário Santa Teresinha
        </div>
      </div>
    </section>
  );
}

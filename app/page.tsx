import Image from "next/image";
import emblem from "@/public/assets/logo-emblem-yellow-on-black.png";
import emblemWatermark from "@/public/assets/logo-emblem-yellow.png";

export default function Construcao() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-preto px-[clamp(20px,5vw,48px)] py-20 text-center">
      {/* Glow radial amarelo */}
      <div
        aria-hidden
        className="animate-glow pointer-events-none absolute left-1/2 top-[-6%] h-[90vw] max-h-[760px] w-[90vw] max-w-[760px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(circle,rgba(248,160,16,.2) 0%,rgba(248,160,16,0) 62%)",
        }}
      />

      {/* Emblema marca d'água */}
      <Image
        src={emblemWatermark}
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-[-14%] right-[-10%] w-[60vw] max-w-[560px] opacity-[.05]"
      />

      <div className="relative flex max-w-[22ch] flex-col items-center">
        <Image
          src={emblem}
          alt="Impacto de Deus"
          width={120}
          height={120}
          priority
          className="animate-rise h-[clamp(84px,14vw,120px)] w-[clamp(84px,14vw,120px)] object-contain"
        />

        <span
          className="animate-rise mt-7 font-display text-base font-bold uppercase tracking-[.14em] text-branco"
          style={{ animationDelay: ".06s" }}
        >
          Impacto de Deus
        </span>

        <h1
          className="animate-rise m-0 mt-9 font-poster uppercase leading-[.9] tracking-[-.01em] text-branco"
          style={{ fontSize: "clamp(40px,9vw,104px)", animationDelay: ".18s" }}
        >
          Site em <span className="text-amarelo-500">construção</span>
        </h1>

        <p
          className="animate-rise m-0 mt-7 text-base leading-[1.6] text-grafite-300"
          style={{ animationDelay: ".26s" }}
        >
          Estamos preparando este espaço com carinho. Volte em breve. 💛
        </p>
      </div>
    </main>
  );
}

import Image from "next/image";
import emblem from "@/public/assets/logo-emblem-yellow-on-black.png";

export default function Construcao() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-preto px-6 py-20 text-center">
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
        className="animate-rise m-0 mt-9 max-w-[16ch] font-poster uppercase leading-[.9] tracking-[-.01em] text-branco"
        style={{ fontSize: "clamp(40px,9vw,104px)", animationDelay: ".16s" }}
      >
        Site em <span className="text-amarelo-500">construção</span>
      </h1>

      <p
        className="animate-rise m-0 mt-7 max-w-[34ch] text-base leading-[1.6] text-grafite-300"
        style={{ animationDelay: ".24s" }}
      >
        Estamos preparando este espaço com carinho. Volte em breve. 💛
      </p>
    </main>
  );
}

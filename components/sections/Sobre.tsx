import Image from "next/image";
import sobreFoto from "@/public/assets/photo-encontro-grupo.png";
import emblemGraphite from "@/public/assets/logo-emblem-graphite.png";

export default function Sobre() {
  return (
    <section id="sobre" className="bg-papel text-grafite-800">
      <div className="mx-auto grid max-w-measure grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-[clamp(36px,6vw,72px)] px-[clamp(20px,5vw,48px)] py-[clamp(64px,10vw,120px)]">
        <div>
          <div className="mb-[18px] font-display text-xs font-semibold uppercase tracking-[.18em] text-amarelo-700">
            Sobre o Impacto de Deus
          </div>
          <h2
            className="m-0 text-balance font-display font-semibold leading-[1.04] tracking-[.003em] text-grafite-900"
            style={{ fontSize: "clamp(30px,4.6vw,52px)" }}
          >
            Uma comunidade reunida por Aquele que transforma vidas.
          </h2>
          <p className="m-0 mt-[26px] max-w-[56ch] text-[17px] leading-[1.65] text-grafite-600">
            O Impacto de Deus é um grupo de oração que busca viver e anunciar a
            presença de Jesus Cristo. Em comunidade, somos convidados a rezar,
            escutar a Palavra, crescer na fé e levar o Evangelho para a vida
            cotidiana.
          </p>
          <div className="mt-[34px] border-t border-grafite-200 pt-7">
            <p
              className="m-0 font-poster uppercase leading-none tracking-[-.01em] text-grafite-900"
              style={{ fontSize: "clamp(22px,3.2vw,34px)" }}
            >
              Impactar os corações
              <br />
              <span className="text-amarelo-600">através do Evangelho.</span>
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-lg">
            <Image
              src={sobreFoto}
              alt="A comunidade do Impacto de Deus reunida"
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, 560px"
              className="h-full w-full object-cover"
            />
          </div>
          <Image
            src={emblemGraphite}
            alt=""
            aria-hidden
            width={96}
            height={96}
            className="absolute -bottom-[26px] -left-[26px] h-24 w-24 rounded-full bg-papel object-contain p-[10px] shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

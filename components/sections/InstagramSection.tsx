import Image from "next/image";
import { Instagram } from "lucide-react";
import Button from "@/components/Button";
import { ENCONTRO } from "@/lib/config";
import instaFoto from "@/public/assets/photo-encontro-grupo.png";
import emblemYellow from "@/public/assets/logo-emblem-yellow.png";

const posts = [
  { id: "ig-1", filled: true },
  { id: "ig-2", filled: false },
  { id: "ig-3", filled: false },
  { id: "ig-4", filled: false },
];

export default function InstagramSection() {
  return (
    <section
      id="instagram"
      className="relative overflow-hidden bg-preto text-grafite-100"
    >
      <Image
        src={emblemYellow}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 w-[70vw] max-w-[680px] -translate-x-1/2 -translate-y-1/2 opacity-[.04]"
      />
      <div className="relative mx-auto max-w-measure px-[clamp(20px,5vw,48px)] py-[clamp(64px,10vw,120px)] text-center">
        <div className="mb-4 font-display text-xs font-semibold uppercase tracking-[.18em] text-amarelo-400">
          Instagram
        </div>
        <h2
          className="mx-auto m-0 max-w-[14ch] font-poster uppercase leading-[.92] text-branco"
          style={{ fontSize: "clamp(34px,6vw,76px)" }}
        >
          Continue perto. Caminhe conosco.
        </h2>
        <a
          href={ENCONTRO.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-[22px] inline-flex items-center gap-[10px] font-display text-base font-semibold tracking-[.04em] text-amarelo-400 transition-colors hover:text-amarelo-500"
        >
          <Instagram size={20} strokeWidth={1.75} />
          {ENCONTRO.instagramHandle}
        </a>

        <div className="mx-auto my-10 grid max-w-[760px] grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-3">
          {posts.map((p) => (
            <div
              key={p.id}
              className="aspect-square overflow-hidden rounded-md"
            >
              {p.filled ? (
                <Image
                  src={instaFoto}
                  alt="Publicação do Impacto de Deus no Instagram"
                  placeholder="blur"
                  sizes="190px"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-grafite-800 text-grafite-400">
                  <Instagram size={22} strokeWidth={1.5} className="opacity-50" />
                </div>
              )}
            </div>
          ))}
        </div>

        <Button href={ENCONTRO.instagram} variant="primary" size="lg" external>
          Visitar o Instagram
        </Button>
      </div>
    </section>
  );
}

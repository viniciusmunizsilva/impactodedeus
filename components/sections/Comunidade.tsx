import Image from "next/image";
import { ImageIcon } from "lucide-react";
import comunidadeFoto from "@/public/assets/photo-encontro-grupo.png";

interface Tile {
  id: string;
  ratio: string;
  label: string;
  /** só o primeiro tile tem foto real; os demais ficam como placeholder */
  filled?: boolean;
}

const tiles: Tile[] = [
  { id: "gal-1", ratio: "3/4", label: "Foto do encontro", filled: true },
  { id: "gal-2", ratio: "1/1", label: "Momento de oração" },
  { id: "gal-3", ratio: "4/5", label: "Louvor" },
  { id: "gal-4", ratio: "4/3", label: "Comunidade" },
  { id: "gal-5", ratio: "1/1", label: "Celebração" },
  { id: "gal-6", ratio: "3/4", label: "Amizade" },
];

export default function Comunidade() {
  return (
    <section id="comunidade" className="bg-grafite-900 text-grafite-100">
      <div className="mx-auto max-w-measure px-[clamp(20px,5vw,48px)] py-[clamp(64px,10vw,120px)]">
        <div className="mb-11 max-w-[52ch]">
          <div className="mb-4 font-display text-xs font-semibold uppercase tracking-[.18em] text-amarelo-400">
            Nossa comunidade
          </div>
          <h2
            className="m-0 font-poster uppercase leading-[.92] text-branco"
            style={{ fontSize: "clamp(32px,5.4vw,68px)" }}
          >
            A fé também se vive em comunidade
          </h2>
          <p className="m-0 mt-5 text-base leading-[1.6] text-grafite-200">
            Momentos de oração, celebração e amizade. As fotos abaixo serão
            preenchidas com registros reais do grupo.
          </p>
        </div>

        <div className="[column-gap:16px] [columns:260px]">
          {tiles.map((t) => (
            <div
              key={t.id}
              className="mb-4 overflow-hidden rounded-md [break-inside:avoid]"
              style={{ aspectRatio: t.ratio }}
            >
              {t.filled ? (
                <Image
                  src={comunidadeFoto}
                  alt="Registro da comunidade Impacto de Deus"
                  placeholder="blur"
                  sizes="(max-width: 640px) 100vw, 260px"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-grafite-800 text-grafite-400">
                  <ImageIcon size={26} strokeWidth={1.5} className="opacity-50" />
                  <span className="px-3 text-center font-display text-[11px] uppercase tracking-[.12em]">
                    {t.label}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

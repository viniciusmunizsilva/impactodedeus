import Image from "next/image";
import Link from "next/link";
import { Instagram, Navigation } from "lucide-react";
import { ENCONTRO, MAPS_URL } from "@/lib/config";
import emblem from "@/public/assets/logo-emblem-yellow-on-black.png";

const navLinks = [
  { href: "#sobre", label: "Sobre o Impacto" },
  { href: "#encontros", label: "Nossos encontros" },
  { href: "#calendario", label: "Calendário" },
  { href: "#comunidade", label: "Comunidade" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[rgba(255,255,255,.18)] bg-grafite-900 text-grafite-300">
      <div className="mx-auto max-w-measure px-[clamp(20px,5vw,48px)] py-[clamp(48px,7vw,80px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10">
          <div className="max-w-[34ch]">
            <div className="flex items-center gap-3">
              <Image
                src={emblem}
                alt="Impacto de Deus"
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
              />
              <span className="font-display text-base font-bold uppercase tracking-[.12em] text-branco">
                Impacto de Deus
              </span>
            </div>
            <p className="m-0 mt-[18px] text-sm leading-[1.6] text-grafite-300">
              Somos chamados a impactar os corações através do Evangelho. O
              encontro pode terminar — a caminhada com Jesus continua.
            </p>
          </div>

          <div>
            <div className="mb-4 font-display text-[11px] font-semibold uppercase tracking-[.16em] text-amarelo-400">
              Encontros
            </div>
            <div className="text-sm leading-[1.9] text-grafite-200">
              Todos os sábados, às 20h
              <br />
              {ENCONTRO.localNome}
              <br />
              {ENCONTRO.localDetalhe}
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-[7px] text-[13px] font-semibold text-amarelo-400 transition-colors hover:text-amarelo-500"
            >
              Como chegar
              <Navigation size={14} strokeWidth={2} />
            </a>
          </div>

          <div>
            <div className="mb-4 font-display text-[11px] font-semibold uppercase tracking-[.16em] text-amarelo-400">
              Navegar
            </div>
            <div className="flex flex-col gap-[9px] text-sm">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-grafite-200 transition-colors hover:text-amarelo-500"
                >
                  {l.label}
                </a>
              ))}
              <Link
                href="/seminario"
                className="text-grafite-200 transition-colors hover:text-amarelo-500"
              >
                O seminário acabou… de começar
              </Link>
            </div>
          </div>

          <div>
            <div className="mb-4 font-display text-[11px] font-semibold uppercase tracking-[.16em] text-amarelo-400">
              Siga
            </div>
            <a
              href={ENCONTRO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[10px] text-grafite-200 transition-colors hover:text-amarelo-500"
            >
              <Instagram size={20} strokeWidth={1.75} />
              {ENCONTRO.instagramHandle}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-between gap-3 border-t border-[rgba(255,255,255,.18)] pt-6 text-xs text-grafite-400">
          <span>© {year} Impacto de Deus · Grupo de oração católico</span>
          <span>Feito com fé e com 💛</span>
        </div>
      </div>
    </footer>
  );
}

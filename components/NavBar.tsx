import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import Button from "@/components/Button";
import { ENCONTRO } from "@/lib/config";
import emblem from "@/public/assets/logo-emblem-yellow-on-black.png";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#encontros", label: "Encontros" },
  { href: "#calendario", label: "Calendário" },
  { href: "#comunidade", label: "Comunidade" },
  { href: "#instagram", label: "Instagram" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(255,255,255,.18)] bg-[rgba(11,11,11,.72)] backdrop-blur-[14px]">
      <div className="mx-auto flex h-[68px] max-w-measure items-center gap-5 px-[clamp(16px,4vw,48px)]">
        <Link
          href="#topo"
          className="flex flex-none items-center gap-3"
          aria-label="Impacto de Deus — início"
        >
          <Image
            src={emblem}
            alt="Impacto de Deus"
            width={38}
            height={38}
            priority
            className="h-[38px] w-[38px] object-contain"
          />
          <span className="whitespace-nowrap font-display text-[15px] font-bold uppercase tracking-[.14em] text-branco">
            Impacto de Deus
          </span>
        </Link>

        <nav className="idd-scroll mx-auto flex max-w-full gap-[26px] overflow-x-auto px-1.5 py-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap font-display text-[13px] font-medium uppercase tracking-[.09em] text-grafite-300 transition-colors hover:text-amarelo-500"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-none items-center gap-[10px]">
          <a
            href={ENCONTRO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(255,255,255,.18)] text-branco transition-colors hover:bg-[rgba(255,255,255,.08)]"
          >
            <Instagram size={19} strokeWidth={1.75} />
          </a>
          <Button href="#encontros" variant="primary" size="sm">
            Participe
          </Button>
        </div>
      </div>
    </header>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Share2 } from "lucide-react";
import Button from "@/components/Button";
import Toast from "@/components/Toast";
import emblem from "@/public/assets/logo-emblem-yellow-on-black.png";
import emblemYellow from "@/public/assets/logo-emblem-yellow.png";

export default function EncerramentoView() {
  const [toast, setToast] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const showToast = (msg: string) => {
    setToast(msg);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), 3000);
  };

  const share = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const data = {
      title: "Impacto de Deus",
      text: "O seminário acabou… de começar.",
      url,
    };
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(data);
      } catch {
        /* usuário cancelou — sem ação */
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
      } catch {
        /* clipboard indisponível */
      }
      showToast("Link copiado 💛");
    }
  };

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-preto text-grafite-100">
      <div
        aria-hidden
        className="animate-glow pointer-events-none absolute left-1/2 top-[-8%] h-[90vw] max-h-[820px] w-[90vw] max-w-[820px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(circle,rgba(248,160,16,.22) 0%,rgba(248,160,16,0) 60%)",
          animationDuration: "16s",
        }}
      />
      <Image
        src={emblemYellow}
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-[-14%] right-[-10%] w-[60vw] max-w-[620px] opacity-[.05]"
      />

      <div className="relative mx-auto flex w-full max-w-measure items-center justify-between px-[clamp(20px,5vw,48px)] py-7">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={emblem}
            alt="Impacto de Deus"
            width={38}
            height={38}
            className="h-[38px] w-[38px] object-contain"
          />
          <span className="font-display text-sm font-bold uppercase tracking-[.14em] text-branco">
            Impacto de Deus
          </span>
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-[.08em] text-grafite-300 transition-colors hover:text-amarelo-500"
        >
          <ChevronLeft size={16} strokeWidth={2} />
          Ir para o site
        </Link>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-[clamp(20px,5vw,48px)] py-[clamp(40px,8vw,90px)] text-center">
        <div className="max-w-[20ch]">
          <div className="animate-rise mb-7 font-display text-xs font-semibold uppercase tracking-[.24em] text-amarelo-400">
            Seminário de Vida no Espírito Santo
          </div>
          <h1
            className="animate-rise m-0 font-poster uppercase leading-[.88] tracking-[-.01em] text-branco"
            style={{ fontSize: "clamp(46px,10vw,132px)", animationDelay: ".08s" }}
          >
            O seminário acabou…
            <br />
            <span className="text-amarelo-500">de começar</span>
          </h1>
          <p
            className="animate-rise m-0 mx-auto mt-[30px] font-display text-[clamp(18px,2.6vw,26px)] font-normal tracking-[.01em] text-grafite-200"
            style={{ animationDelay: ".16s" }}
          >
            Conhecemos Jesus para caminhar com Ele.
          </p>
          <p
            className="animate-rise m-0 mx-auto mt-[22px] max-w-[52ch] text-base leading-[1.7] text-grafite-300"
            style={{ animationDelay: ".24s" }}
          >
            Os encontros que vivemos não são um ponto final. São um convite para
            continuar buscando, escutando e vivendo a presença de Deus todos os
            dias.
          </p>
          <div
            className="animate-rise mt-10 flex flex-wrap justify-center gap-[14px]"
            style={{ animationDelay: ".32s" }}
          >
            <Button href="/" variant="primary" size="lg">
              Continue sua caminhada
            </Button>
            <Button href="/#encontros" variant="onDark" size="lg">
              Conheça nossos encontros
            </Button>
            <button
              type="button"
              onClick={share}
              className="inline-flex h-[52px] cursor-pointer items-center gap-[10px] rounded-full border-2 border-[rgba(255,255,255,.18)] bg-transparent px-7 font-display text-base font-semibold uppercase tracking-[.06em] text-branco transition-colors hover:border-amarelo-500 hover:text-amarelo-500"
            >
              <Share2 size={18} strokeWidth={1.9} />
              Compartilhe esta mensagem
            </button>
          </div>
        </div>
      </div>

      {toast && <Toast message={toast} />}
    </section>
  );
}

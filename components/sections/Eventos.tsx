import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";
import Button from "@/components/Button";
import { ENCONTRO, EVENTOS_ESPECIAIS } from "@/lib/config";
import { longDate } from "@/lib/calendar";
import emblemGraphite from "@/public/assets/logo-emblem-graphite.png";

export default function Eventos() {
  const eventos = EVENTOS_ESPECIAIS;

  return (
    <section id="eventos" className="bg-papel text-grafite-800">
      <div className="mx-auto max-w-measure px-[clamp(20px,5vw,48px)] py-[clamp(64px,10vw,120px)]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-[44ch]">
            <div className="mb-4 font-display text-xs font-semibold uppercase tracking-[.18em] text-amarelo-700">
              Eventos especiais
            </div>
            <h2
              className="m-0 font-display font-semibold leading-[1.06] text-grafite-900"
              style={{ fontSize: "clamp(28px,4.4vw,46px)" }}
            >
              Retiros, formações e celebrações
            </h2>
          </div>
        </div>

        {eventos.length === 0 ? (
          <div className="flex flex-col items-center gap-[18px] rounded-lg border-[1.5px] border-dashed border-grafite-200 bg-branco p-[clamp(36px,6vw,64px)] text-center">
            <Image
              src={emblemGraphite}
              alt=""
              aria-hidden
              width={72}
              height={72}
              className="h-[72px] w-[72px] object-contain opacity-[.85]"
            />
            <h3
              className="m-0 font-display font-semibold text-grafite-900"
              style={{ fontSize: "clamp(20px,3vw,28px)" }}
            >
              Nenhum evento especial por enquanto
            </h3>
            <p className="m-0 max-w-[52ch] text-base leading-[1.6] text-grafite-500">
              Quando tiver retiro, formação ou celebração especial, a
              programação aparece aqui. Enquanto isso, o convite continua: todo
              sábado, às 20h. Acompanha o Instagram pra não perder nada.
            </p>
            <Button href={ENCONTRO.instagram} variant="outline" size="md" external>
              Seguir no Instagram
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
            {eventos.map((ev) => (
              <article
                key={ev.id}
                className="flex flex-col overflow-hidden rounded-lg border border-grafite-200 bg-branco shadow-md"
              >
                {ev.imagem && (
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={ev.imagem}
                      alt={ev.nome}
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="m-0 font-display text-xl font-semibold text-grafite-900">
                    {ev.nome}
                  </h3>
                  <div className="mt-3 flex flex-col gap-1.5 text-sm text-grafite-600">
                    <span className="flex items-center gap-2">
                      <Calendar size={16} strokeWidth={1.75} className="text-amarelo-600" />
                      {longDate(new Date(ev.data + "T00:00:00"))}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock size={16} strokeWidth={1.75} className="text-amarelo-600" />
                      {ev.horario}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin size={16} strokeWidth={1.75} className="text-amarelo-600" />
                      {ev.local}
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-[15px] leading-[1.6] text-grafite-500">
                    {ev.descricao}
                  </p>
                  {ev.link && (
                    <div className="mt-5">
                      <Button href={ev.link} variant="primary" size="md" external>
                        Saiba mais
                      </Button>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useUI } from "@/components/ui/UIProvider";
import {
  WEEKDAYS_CURTOS,
  monthName,
  monthShort,
  longDate,
  nextEncontro,
  encontroDialog,
} from "@/lib/calendar";
import { ENCONTRO } from "@/lib/config";

interface Cell {
  key: string;
  day: number | null;
  date: Date | null;
  kind: "blank" | "past" | "future" | "today" | "satFuture" | "satPast";
  clickable: boolean;
  title: string;
}

export default function Calendario() {
  const { openEncontro } = useUI();
  const [today, setToday] = useState<Date | null>(null);
  const [calY, setCalY] = useState<number | null>(null);
  const [calM, setCalM] = useState<number | null>(null);

  // Datas só no cliente — evita divergência de hidratação com o relógio do servidor.
  useEffect(() => {
    const n = new Date();
    setToday(n);
    setCalY(n.getFullYear());
    setCalM(n.getMonth());
  }, []);

  const prevMonth = () => {
    if (calM === null || calY === null) return;
    let m = calM - 1;
    let y = calY;
    if (m < 0) {
      m = 11;
      y--;
    }
    setCalM(m);
    setCalY(y);
  };
  const nextMonth = () => {
    if (calM === null || calY === null) return;
    let m = calM + 1;
    let y = calY;
    if (m > 11) {
      m = 0;
      y++;
    }
    setCalM(m);
    setCalY(y);
  };

  const monthLabel =
    calY !== null && calM !== null ? `${monthName(calM)} ${calY}` : "";

  const cells = useMemo<Cell[]>(() => {
    if (today === null || calY === null || calM === null) return [];
    const midToday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );
    const out: Cell[] = [];
    const firstDow = new Date(calY, calM, 1).getDay();
    const daysIn = new Date(calY, calM + 1, 0).getDate();
    for (let i = 0; i < firstDow; i++) {
      out.push({
        key: "b" + i,
        day: null,
        date: null,
        kind: "blank",
        clickable: false,
        title: "",
      });
    }
    for (let dd = 1; dd <= daysIn; dd++) {
      const dt = new Date(calY, calM, dd);
      const sat = dt.getDay() === ENCONTRO.weekday;
      const past = dt < midToday;
      const isToday = dt.getTime() === midToday.getTime();
      let kind: Cell["kind"];
      if (sat && !past) kind = "satFuture";
      else if (sat && past) kind = "satPast";
      else if (isToday) kind = "today";
      else if (past) kind = "past";
      else kind = "future";
      out.push({
        key: "d" + dd,
        day: dd,
        date: dt,
        kind,
        clickable: sat && !past,
        title: sat ? (past ? "Encontro já realizado" : "Adicionar à agenda") : "",
      });
    }
    return out;
  }, [today, calY, calM]);

  const upcoming = useMemo(() => {
    if (today === null) return [];
    const first = nextEncontro(today);
    const list = [];
    for (let i = 0; i < 6; i++) {
      const d = new Date(first);
      d.setDate(d.getDate() + i * 7);
      list.push({
        key: d.toISOString(),
        date: d,
        dayNum: d.getDate(),
        monShort: monthShort(d.getMonth()),
        title: i === 0 ? "Próximo encontro" : "Encontro de sábado",
        sub: `${longDate(d)} · 20h`,
        first: i === 0,
      });
    }
    return list;
  }, [today]);

  function cellClass(kind: Cell["kind"]): string {
    const base =
      "flex aspect-square items-center justify-center rounded-[10px] font-body text-sm select-none";
    switch (kind) {
      case "blank":
        return "aspect-square";
      case "satFuture":
        return `${base} bg-amarelo-500 font-bold text-grafite-900 shadow-sm cursor-pointer transition-transform hover:scale-105`;
      case "satPast":
        return `${base} bg-amarelo-100 text-amarelo-700 opacity-70`;
      case "today":
        return `${base} text-grafite-800 shadow-[inset_0_0_0_2px_#1A1919]`;
      case "future":
        return `${base} text-grafite-800`;
      case "past":
      default:
        return `${base} text-grafite-300`;
    }
  }

  return (
    <section id="calendario" className="bg-papel text-grafite-800">
      <div className="mx-auto max-w-measure px-[clamp(20px,5vw,48px)] py-[clamp(64px,10vw,120px)]">
        <div className="mx-auto mb-12 max-w-[46ch] text-center">
          <div className="mb-4 font-display text-xs font-semibold uppercase tracking-[.18em] text-amarelo-700">
            Calendário
          </div>
          <h2
            className="m-0 font-display font-semibold leading-[1.06] text-grafite-900"
            style={{ fontSize: "clamp(28px,4.4vw,46px)" }}
          >
            Os próximos sábados com a gente
          </h2>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-[clamp(28px,4vw,48px)]">
          {/* Grade do mês */}
          <div className="rounded-lg border border-grafite-200 bg-branco p-[clamp(18px,3vw,28px)] shadow-md">
            <div className="mb-5 flex items-center justify-between">
              <div className="font-display text-xl font-semibold capitalize text-grafite-900">
                {monthLabel || " "}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={prevMonth}
                  aria-label="Mês anterior"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-grafite-200 bg-branco text-grafite-700 transition-colors hover:border-amarelo-500 hover:bg-amarelo-100"
                >
                  <ChevronLeft size={18} strokeWidth={2} />
                </button>
                <button
                  type="button"
                  onClick={nextMonth}
                  aria-label="Próximo mês"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-grafite-200 bg-branco text-grafite-700 transition-colors hover:border-amarelo-500 hover:bg-amarelo-100"
                >
                  <ChevronRight size={18} strokeWidth={2} />
                </button>
              </div>
            </div>

            <div className="mb-2 grid grid-cols-7 gap-1">
              {WEEKDAYS_CURTOS.map((wd) => (
                <div
                  key={wd}
                  className="py-1.5 text-center font-display text-[11px] font-semibold uppercase tracking-[.08em] text-grafite-400"
                >
                  {wd}
                </div>
              ))}
            </div>

            <div className="grid min-h-[260px] grid-cols-7 gap-1">
              {cells.map((c) =>
                c.kind === "blank" ? (
                  <div key={c.key} className="aspect-square" />
                ) : (
                  <div
                    key={c.key}
                    className={cellClass(c.kind)}
                    title={c.title}
                    role={c.clickable ? "button" : undefined}
                    tabIndex={c.clickable ? 0 : undefined}
                    onClick={
                      c.clickable && c.date
                        ? () => openEncontro(encontroDialog(c.date!))
                        : undefined
                    }
                    onKeyDown={
                      c.clickable && c.date
                        ? (e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              openEncontro(encontroDialog(c.date!));
                            }
                          }
                        : undefined
                    }
                  >
                    {c.day}
                  </div>
                ),
              )}
            </div>

            <div className="mt-5 flex flex-wrap gap-[18px] border-t border-grafite-200 pt-4 text-xs text-grafite-500">
              <span className="inline-flex items-center gap-[7px]">
                <span className="h-[14px] w-[14px] rounded-[5px] bg-amarelo-500" />
                Encontro (clique para adicionar)
              </span>
            </div>
          </div>

          {/* Lista de próximos encontros */}
          <div>
            <div className="mb-4 font-display text-[11px] font-semibold uppercase tracking-[.16em] text-grafite-400">
              Próximos encontros
            </div>
            <div className="flex flex-col gap-[10px]">
              {upcoming.map((ev) => (
                <button
                  key={ev.key}
                  type="button"
                  onClick={() => openEncontro(encontroDialog(ev.date))}
                  className="flex w-full cursor-pointer items-center gap-[14px] rounded-md border border-grafite-200 bg-branco p-[12px_14px] text-left font-body shadow-sm transition-colors hover:border-amarelo-500"
                >
                  <span
                    className={`flex min-w-[56px] flex-col items-center justify-center rounded-[12px] px-[10px] py-2 ${
                      ev.first
                        ? "bg-amarelo-500 text-grafite-900"
                        : "bg-grafite-900 text-amarelo-500"
                    }`}
                  >
                    <span className="font-poster text-[26px] leading-none">
                      {ev.dayNum}
                    </span>
                    <span className="font-display text-[10px] uppercase tracking-[.1em]">
                      {ev.monShort}
                    </span>
                  </span>
                  <span className="flex-1 text-left">
                    <span className="block text-[15px] font-semibold text-grafite-900">
                      {ev.title}
                    </span>
                    <span className="mt-0.5 block text-[13px] text-grafite-500">
                      {ev.sub}
                    </span>
                  </span>
                  <ChevronRight size={18} strokeWidth={2} className="text-grafite-400" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

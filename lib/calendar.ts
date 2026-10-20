/**
 * Helpers de data, geração de .ics e links do Google Calendar.
 * Reproduz o comportamento do protótipo (fuso America/Sao_Paulo,
 * recorrência semanal aos sábados). Nenhuma sincronização automática —
 * é um snapshot da programação habitual.
 */

import { ENCONTRO } from "./config";

const MESES = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const MESES_CURTOS = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

const DIAS_SEMANA = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

export const WEEKDAYS_CURTOS = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

const pad = (n: number) => String(n).padStart(2, "0");

export function monthName(m: number): string {
  return MESES[m];
}

export function monthShort(m: number): string {
  return MESES_CURTOS[m];
}

export function weekdayName(dow: number): string {
  return DIAS_SEMANA[dow];
}

/** "25 de outubro" */
export function longDate(d: Date): string {
  return `${d.getDate()} de ${monthName(d.getMonth()).toLowerCase()}`;
}

/** Próximo dia do encontro (sábado) a partir de `from`, inclusivo. */
export function nextEncontro(from: Date): Date {
  const d = new Date(from.getFullYear(), from.getMonth(), from.getDate());
  d.setDate(d.getDate() + ((ENCONTRO.weekday - d.getDay() + 7) % 7));
  return d;
}

/** Carimbo local no formato YYYYMMDDTHHMMSS (sem Z — usa TZID). */
function ymdT(d: Date, hh: number, mm: number): string {
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(hh)}${pad(mm)}00`;
}

/** Carimbo UTC YYYYMMDDTHHMMSSZ para o DTSTAMP. */
function utcStamp(): string {
  const n = new Date();
  return `${n.getUTCFullYear()}${pad(n.getUTCMonth() + 1)}${pad(n.getUTCDate())}T${pad(n.getUTCHours())}${pad(n.getUTCMinutes())}${pad(n.getUTCSeconds())}Z`;
}

function parseTime(t: string): [number, number] {
  const [h, m] = t.split(":").map(Number);
  return [h, m];
}

/** Gera um data-URI de .ics para o encontro na data `d`. */
export function icsUri(d: Date, recur: boolean): string {
  const [sh, sm] = parseTime(ENCONTRO.start);
  const [eh, em] = parseTime(ENCONTRO.end);
  const lines: string[] = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Impacto de Deus//Encontros//PT-BR",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:" +
      (recur ? "encontro-semanal" : "encontro-" + ymdT(d, sh, sm)) +
      "@impactodedeus",
    "DTSTAMP:" + utcStamp(),
    `DTSTART;TZID=${ENCONTRO.tz}:` + ymdT(d, sh, sm),
    `DTEND;TZID=${ENCONTRO.tz}:` + ymdT(d, eh, em),
  ];
  if (recur) lines.push("RRULE:FREQ=WEEKLY;BYDAY=SA");
  lines.push("SUMMARY:Encontro — Impacto de Deus");
  lines.push(`LOCATION:${ENCONTRO.localCompleto}`);
  lines.push(
    "DESCRIPTION:Todos os sábados, às 20h. Vem rezar, escutar a Palavra e viver a fé em comunidade.",
  );
  lines.push("END:VEVENT", "END:VCALENDAR");
  return "data:text/calendar;charset=utf-8," + encodeURIComponent(lines.join("\r\n"));
}

/** Gera a URL do Google Calendar para o encontro na data `d`. */
export function googleUrl(d: Date, recur: boolean): string {
  const [sh, sm] = parseTime(ENCONTRO.start);
  const [eh, em] = parseTime(ENCONTRO.end);
  let u = "https://calendar.google.com/calendar/render?action=TEMPLATE";
  u += "&text=" + encodeURIComponent("Encontro — Impacto de Deus");
  u += "&dates=" + ymdT(d, sh, sm) + "/" + ymdT(d, eh, em);
  u += "&ctz=" + encodeURIComponent(ENCONTRO.tz);
  u += "&location=" + encodeURIComponent(ENCONTRO.localCompleto);
  u +=
    "&details=" +
    encodeURIComponent("Todos os sábados, às 20h. Vem rezar com a gente.");
  if (recur) u += "&recur=" + encodeURIComponent("RRULE:FREQ=WEEKLY;BYDAY=SA");
  return u;
}

export interface EncontroSelecionado {
  title: string;
  date: string;
  google: string;
  ics: string;
}

/** Monta os dados do modal para um encontro numa data específica. */
export function encontroDialog(d: Date): EncontroSelecionado {
  return {
    title: "Encontro de sábado",
    date: `${weekdayName(d.getDay())}, ${longDate(d)}`,
    google: googleUrl(d, false),
    ics: icsUri(d, false),
  };
}

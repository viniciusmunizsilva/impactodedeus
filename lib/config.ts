/**
 * Configuração central dos dados do Impacto de Deus.
 *
 * Ponto único de verdade — pode ser substituído depois por uma API/CMS
 * sem mexer nos componentes. Os encontros são gerados a partir daqui
 * (próximo sábado + recorrência semanal, fuso America/Sao_Paulo).
 */

export interface Evento {
  /** Identificador estável (slug) */
  id: string;
  nome: string;
  /** Data ISO (ex.: "2026-11-15") */
  data: string;
  horario: string;
  local: string;
  descricao: string;
  /** Imagem/banner opcional (caminho em /public) */
  imagem?: string;
  /** Link de inscrição/detalhes opcional */
  link?: string;
}

export const ENCONTRO = {
  /** 0 = Domingo … 6 = Sábado */
  weekday: 6,
  start: "20:00",
  end: "21:30",
  tz: "America/Sao_Paulo",
  localNome: "Santuário Santa Teresinha",
  localDetalhe: "3º andar · Taboão da Serra – SP",
  localCompleto: "Santuário Santa Teresinha, 3º andar, Taboão da Serra - SP",
  instagram: "https://instagram.com/impactodedeus",
  instagramHandle: "@impactodedeus",
} as const;

/** URL de busca no Google Maps para "Como chegar". */
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Santuário Santa Teresinha Taboão da Serra SP");

/**
 * Eventos especiais (retiros, formações, celebrações).
 * Vazio por padrão → a seção mostra o estado vazio.
 */
export const EVENTOS_ESPECIAIS: Evento[] = [];

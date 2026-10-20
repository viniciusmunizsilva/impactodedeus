# Impacto de Deus — Site institucional

Site público do **Impacto de Deus**, grupo de oração católico que se reúne todos
os sábados às 20h no 3º andar do Santuário Santa Teresinha, Taboão da Serra – SP.

> Impactar os corações através do Evangelho.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router) + React 19
- TypeScript
- Tailwind CSS (tokens da marca mapeados no `tailwind.config.ts`)
- [lucide-react](https://lucide.dev/) para ícones
- `next/font` (Anton, Oswald, Montserrat) e `next/image`

## Páginas

- **`/`** — página inicial com as seções: hero, sobre, encontros, calendário,
  adicionar à agenda, comunidade, eventos especiais, Instagram e rodapé.
- **`/seminario`** — página de encerramento do Seminário de Vida no Espírito
  Santo ("O seminário acabou… de começar").

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:3000
```

Outros comandos:

```bash
npm run build    # build de produção
npm run start    # serve o build
npm run lint     # ESLint
```

## Onde mudar os dados

Toda a configuração fica centralizada em [`lib/config.ts`](lib/config.ts) —
é o ponto único para trocar depois por uma API/CMS:

- `ENCONTRO` — dia, horário, fuso, local e Instagram.
- `EVENTOS_ESPECIAIS` — lista de eventos especiais. Vazia por padrão → a seção
  "Eventos especiais" mostra o estado vazio. Preencha com objetos `Evento` para
  renderizar os cards.

As datas do calendário, os links do Google Calendar e os arquivos `.ics` são
gerados em [`lib/calendar.ts`](lib/calendar.ts) a partir dessa configuração
(próximo sábado + recorrência semanal, fuso `America/Sao_Paulo`). Não há
sincronização automática — é um snapshot da programação habitual.

## Imagens

Os assets da marca e a foto da comunidade ficam em `public/assets/`. As fotos
das galerias (comunidade e Instagram) usam placeholders até que os registros
reais do grupo sejam fornecidos — substitua os componentes em
`components/sections/Comunidade.tsx` e `InstagramSection.tsx` pelas fotos reais.

## Design system

A marca principal é **amarelo imperial (#F8A010) + grafite/preto**. Tipografia:
Anton (manchetes "grito"), Oswald (headings/labels condensados) e Montserrat
(corpo). Regra de cor: amarelo no preto ou grafite no amarelo — amarelo sobre
branco é evitado. As animações respeitam `prefers-reduced-motion`.

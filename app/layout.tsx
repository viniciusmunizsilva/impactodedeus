import type { Metadata, Viewport } from "next";
import { Anton, Oswald, Montserrat } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poster",
  display: "swap",
});

const oswald = Oswald({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Impacto de Deus — Grupo de oração católico",
  description:
    "Impactar os corações através do Evangelho. Grupo de oração Impacto de Deus — todos os sábados às 20h no Santuário Santa Teresinha, Taboão da Serra – SP.",
  openGraph: {
    title: "Impacto de Deus",
    description:
      "Grupo de oração católico. Todos os sábados, às 20h, no Santuário Santa Teresinha, Taboão da Serra – SP.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${anton.variable} ${oswald.variable} ${montserrat.variable}`}
    >
      <body className="bg-preto overflow-x-hidden">{children}</body>
    </html>
  );
}

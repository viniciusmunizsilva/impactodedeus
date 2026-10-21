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
  title: "Impacto de Deus — Em construção",
  description:
    "O site do grupo de oração Impacto de Deus está em construção. Volte em breve.",
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
      <body className="bg-preto">{children}</body>
    </html>
  );
}

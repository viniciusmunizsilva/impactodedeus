import type { Config } from "tailwindcss";

/**
 * Tokens do Impacto de Deus Design System mapeados para o Tailwind.
 * Marca: amarelo imperial (#F8A010) + grafite/preto. Sem terceira cor decorativa.
 * Regra: amarelo no preto ou grafite no amarelo; amarelo sobre branco é fraco.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amarelo: {
          100: "#FFF6E7",
          200: "#FDE6BF",
          300: "#FCD08A",
          400: "#FBB846",
          500: "#F8A010",
          600: "#DC8B0A",
          700: "#B87406",
          800: "#8F5A05",
          900: "#5E3B03",
          DEFAULT: "#F8A010",
        },
        grafite: {
          100: "#EDEBEA",
          200: "#D3D0CE",
          300: "#A9A5A5",
          400: "#7C7878",
          500: "#555252",
          600: "#3E3C3C",
          700: "#2F2E2E",
          800: "#242323",
          900: "#1A1919",
          DEFAULT: "#3E3C3C",
        },
        preto: "#0B0B0B",
        branco: "#FFFFFF",
        papel: "#FAF7F2",
      },
      fontFamily: {
        poster: ["var(--font-poster)", "Anton", "Impact", "sans-serif"],
        display: ["var(--font-display)", "Oswald", "sans-serif"],
        body: ["var(--font-body)", "Montserrat", "system-ui", "sans-serif"],
      },
      maxWidth: {
        measure: "1180px",
      },
      borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "20px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(11,11,11,.08), 0 1px 3px rgba(11,11,11,.06)",
        md: "0 4px 12px rgba(11,11,11,.08), 0 2px 4px rgba(11,11,11,.06)",
        lg: "0 18px 48px rgba(11,11,11,.18), 0 6px 16px rgba(11,11,11,.12)",
        accent: "0 10px 30px rgba(248,160,16,.35)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "idd-rise": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "idd-fade": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "idd-glow": {
          "0%": { opacity: ".5", transform: "translate(-8%,-6%) scale(1)" },
          "100%": { opacity: ".9", transform: "translate(6%,4%) scale(1.15)" },
        },
      },
      animation: {
        rise: "idd-rise .7s cubic-bezier(0.16,1,0.3,1) both",
        fade: "idd-fade .18s ease-out both",
        glow: "idd-glow 14s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        light: "#2E7AFF",
        default: "#1D63FF",
        dark: "#0043D9",
      },
      auxiliary: {
        green: "#35D9A8",
        yellow: "#FFD76F",
      },
      neutral: {
        gray01: "#F2F5FC",
        gray02: "#CBD6E2",
      },
      gray: {
        800: "#070514",
        700: "#0D0B1A",
        600: "#131020",
        500: "#1E1C2D",
        400: "#2A2739",
        300: "#353345",
        200: "#413E52",
        100: "#4C4A5E",
        50: "#757385",
      },
    },
    extend: {
      fontFamily: {
        mono: ["var(--font-archivo)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config

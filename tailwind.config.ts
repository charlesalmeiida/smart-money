import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      hero: "url('/svg/bg-hero.svg')",
    },
    boxShadow: {
      shape: "0px 30px 50px -10px rgba(76, 74, 94, 0.20)",
      card: "0px 20px 30px -10px rgba(76, 74, 94, 0.15)",
    },
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
        white: "#fff",
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
        border: "#1D1B38",
      },
    },
    extend: {
      fontFamily: {
        mono: ["var(--font-archivo)"],
        sans: ["var(--font-calibri)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      maxWidth: {
        grid: "77.5rem",
        button: "14.4375rem",
        card: "17.375rem",
      },
      padding: {
        about: "7.5rem",
      },
    },
  },
  plugins: [],
} satisfies Config

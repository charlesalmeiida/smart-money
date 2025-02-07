import { Archivo } from "next/font/google"

const archivo_font = Archivo({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
  variable: "--font-archivo",
})

export const archivo = archivo_font.variable

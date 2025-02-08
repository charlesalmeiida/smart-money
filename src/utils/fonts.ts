import { Archivo } from "next/font/google"
import localFont from "next/font/local"

const calibri_font = localFont({
  src: [
    {
      path: "../fonts/Calibri.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-calibri",
})

const archivo_font = Archivo({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
  variable: "--font-archivo",
})

export const archivo = archivo_font.variable
export const calibri = calibri_font.variable

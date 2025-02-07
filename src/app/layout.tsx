import "./globals.css"
import type { Metadata } from "next"
import { archivo } from "@/utils/fonts"

export const metadata: Metadata = {
  title: "SmartMoney | Tecnologia disruptiva",
  description: "Conta digital que não é só uma conta digital.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`${archivo} antialiased`}>{children}</body>
    </html>
  )
}

import "./globals.css"
import type { Metadata } from "next"
import { archivo, calibri } from "@/utils/fonts"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Provider } from "jotai"

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
      <body className={`${archivo} ${calibri} antialiased`}>
        <Provider>
          <Header />
          {children}
          {/* <Footer /> */}
        </Provider>
      </body>
    </html>
  )
}

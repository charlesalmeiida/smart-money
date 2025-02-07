import type { Metadata } from "next"

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
      <body className={`antialiased`}>{children}</body>
    </html>
  )
}

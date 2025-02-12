import { Header } from "@/components/layout/header"

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header isBlog />
      {children}
    </>
  )
}

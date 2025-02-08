import { Button } from "@/components/button"
import { Container } from "@/components/container"
import Image from "next/image"
import Link from "next/link"

const navLinks = [
  {
    page: "Quem somos",
    link: "/",
  },
  {
    page: "Soluções",
    link: "/",
  },
  {
    page: "Carreira",
    link: "/",
  },
  {
    page: "Contato",
    link: "/",
  },
  {
    page: "Suporte",
    link: "/",
  },
]

export function Header() {
  return (
    <header className="py-7">
      <Container className="flex-between items-center text-neutral-gray01">
        <Link href={"/"}>
          <Image
            src={"/svg/logo-smartmoney.svg"}
            alt={"Logo SmartMoney"}
            width={231}
            height={36}
          />
        </Link>
        <nav className="flex-center gap-16">
          <ul className="flex-center gap-10">
            {navLinks.map(({ page, link }) => (
              <li
                key={page}
                className="text-sm text-neutral-white transition-all hover:brightness-90"
              >
                <Link href={link}>{page}</Link>
              </li>
            ))}
          </ul>
          <Button>Cadastre-se</Button>
        </nav>
      </Container>
    </header>
  )
}

import { Container } from "@/components/container"
import { Newsletter } from "./newsletter"
import Image from "next/image"
import Link from "next/link"
import { Copyright } from "./copyright"

export const navLinks = [
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

const socialLinks = [
  {
    logo: "/svg/icon-twitter.svg",
    name: "Twitter",
  },
  {
    logo: "/svg/icon-linkedin.svg",
    name: "Linkedin",
  },
  {
    logo: "/svg/icon-instagram.svg",
    name: "Instagram",
  },
  {
    logo: "/svg/icon-facebook.svg",
    name: "Facebook",
  },
]

export function Footer() {
  return (
    <footer className="bg-footer bg-gray-800 bg-no-repeat bg-center bg-cover pt-36 pb-[50px]">
      <Container className="flex-between">
        <div className="space-y-6 flex-1">
          <Image
            src={"/svg/icon-mail.svg"}
            width={32}
            height={28}
            alt="Ícone de email"
          />
          <div className="space-y-2">
            <h6 className="text-neutral-white">
              Fique por dentro das novidades
            </h6>
            <p className="text-neutral-gray02 leading-6">
              Cadastre seu e-mail para receber conteúdo
            </p>
          </div>
          <Newsletter />
        </div>
        <div className="flex items-start gap-[164px]">
          <div>
            <ul className="space-y-6">
              {navLinks.map(({ page, link }) => (
                <li
                  key={page}
                  className="text-neutral-white hover:brightness-75 transition-all"
                >
                  <Link href={link}>{page}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="font-semibold text-neutral-white">
              Acompanha nas redes
            </span>
            <ul className="space-y-4 mt-4">
              {socialLinks.map(({ logo, name }) => (
                <li key={name}>
                  <Link
                    href={"/"}
                    className="flex-center gap-2 text-neutral-white hover:brightness-75 transition-all"
                  >
                    <Image src={logo} width={32} height={32} alt={name} />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
      <Copyright />
    </footer>
  )
}

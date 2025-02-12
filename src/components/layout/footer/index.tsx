import { Container } from "@/components/container"
import { Newsletter } from "./newsletter"
import Image from "next/image"
import Link from "next/link"
import { Copyright } from "./copyright"
import { navFooter } from "@/constants/nav-footer"
import { socialLinks } from "@/constants/social-links"

export function Footer() {
  return (
    <footer className="bg-footer bg-gray-800 bg-no-repeat bg-center bg-cover pt-16 lg:pt-section pb-8 lg:pb-[50px]">
      <Container className="flex flex-col gap-12 lg:gap-0 lg:flex-row justify-between">
        <div className="space-y-6 flex-1 text-center lg:text-left">
          <Image
            src={"/svg/icon-mail.svg"}
            width={32}
            height={28}
            alt="Ícone de email"
            className="mx-auto lg:mx-0"
          />
          <div className="space-y-2 max-w-52 mx-auto lg:mx-0 lg:max-w-full">
            <h6 className="text-neutral-white">
              Fique por dentro das novidades
            </h6>
            <p className="text-neutral-gray02 leading-6">
              Cadastre seu e-mail para receber conteúdo
            </p>
          </div>
          <Newsletter />
        </div>
        <div className="flex flex-col lg:flex-row items-start gap-14 lg:gap-[164px]">
          <div className="mx-auto lg:mx-0">
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-col gap-y-6 gap-x-16">
              {navFooter.map(({ page, link }) => (
                <li
                  key={page}
                  className="text-neutral-white hover:brightness-75 transition-all"
                >
                  <Link href={link}>{page}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-auto lg:mx-0">
            <span className="font-semibold text-center block mx-auto lg:mx-0 text-neutral-white">
              Acompanha nas redes
            </span>
            <ul className="lg:space-y-4 mt-4 flex lg:block gap-8 items-center justify-center">
              {socialLinks.map(({ logo, name }) => (
                <li key={name}>
                  <Link
                    href={"/"}
                    className="flex-center gap-2 hover:brightness-75 transition-all"
                  >
                    <Image src={logo} width={32} height={32} alt={name} />
                    <span className="hidden md:block text-neutral-white">
                      {name}
                    </span>
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

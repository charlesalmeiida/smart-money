"use client"

import { Button } from "@/components/button"
import { Container } from "@/components/container"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import Hamburger from "hamburger-react"

const navLinks = [
  {
    page: "Quem somos",
    link: "#quem-somos",
  },
  {
    page: "Soluções",
    link: "#solucoes",
  },
  {
    page: "Carreira",
    link: "#carreira",
  },
  {
    page: "Contato",
    link: "#contato",
  },
  {
    page: "Suporte",
    link: "#suporte",
  },
]

interface HeaderProps {
  isBlog?: boolean
}

export function Header({ isBlog = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 850)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const bgClass =
    isBlog === true
      ? "bg-gray-700"
      : isScrolled
      ? "sticky bg-neutral-white shadow-header slide"
      : "absolute"

  return (
    <header
      className={`${bgClass} w-full md:px-0 py-7 md:py-7 top-0 transition-all z-50`}
    >
      <Container className="flex-between items-center">
        <Link href={"/"}>
          <div className="w-40 h-6 md:w-[231px] md:h-[36px] relative">
            <Image
              src={`${
                isScrolled
                  ? "/svg/logo-smartmoney-black.svg"
                  : "/svg/logo-smartmoney.svg"
              }`}
              alt={"Logo SmartMoney"}
              fill
              className="object-contain"
            />
          </div>
        </Link>
        <div className="flex-center gap-8">
          <div className="lg:hidden">
            <Hamburger color={isScrolled ? "#070514" : "#fff"} size={20} />
          </div>
          <nav className="hidden md:flex items-center gap-16">
            <ul className="hidden lg:flex items-center gap-10">
              {navLinks.map(({ page, link }) => (
                <li
                  key={page}
                  className={`text-sm ${
                    isScrolled
                      ? "text-gray-800 hover:text-gray-200"
                      : "text-neutral-white hover:brightness-90"
                  } transition-all`}
                >
                  <Link href={link}>{page}</Link>
                </li>
              ))}
            </ul>
            <div className="hidden md:flex">
              <Button size="sm" color={isScrolled ? "primary" : "secondary"}>
                Cadastre-se
              </Button>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  )
}

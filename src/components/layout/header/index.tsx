"use client"

import { Button } from "@/components/button"
import { Container } from "@/components/container"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import Hamburger from "hamburger-react"
import { navLinks } from "@/constants/nav-links"
import { useAnimate } from "motion/react"

interface HeaderProps {
  isBlog?: boolean
}

export function Header({ isBlog = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scope, animate] = useAnimate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 850)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    animate(
      scope.current,
      { y: isScrolled ? [-50, 0] : 0, scale: isScrolled ? [0.9, 1] : 1 },
      { duration: 0.5, ease: "easeIn" }
    )
  })

  const bgClass =
    isBlog === true
      ? "bg-gray-700 py-7 md:py-7"
      : isScrolled
        ? "sticky bg-neutral-white shadow-header slide py-4"
        : "absolute py-7 md:py-7"

  return (
    <header
      ref={scope}
      className={`${bgClass} w-full md:px-0 top-0 transition-all z-50`}
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

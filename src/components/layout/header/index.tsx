"use client"

import { Button } from "@/components/button"
import { Container } from "@/components/container"
import Image from "next/image"
import Link from "next/link"
import { navLinks } from "../footer"
import { useEffect, useState } from "react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 850)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`${
        isScrolled ? "sticky bg-neutral-white shadow-header" : "absolute"
      } w-full top-0 transition-all z-50`}
    >
      <Container className="flex-between py-7 items-center">
        <Link href={"/"}>
          <Image
            src={`${
              isScrolled
                ? "/svg/logo-smartmoney-black.svg"
                : "/svg/logo-smartmoney.svg"
            }`}
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
          <Button size="sm" color={isScrolled ? "primary" : "secondary"}>
            Cadastre-se
          </Button>
        </nav>
      </Container>
    </header>
  )
}

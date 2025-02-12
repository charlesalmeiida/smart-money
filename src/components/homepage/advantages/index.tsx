"use client"

import { useState } from "react"
import { Button } from "@/components/button"
import { Container } from "@/components/container"
import { AdvantageBullet } from "./advantage-bullet"
import { ImageAdvantages } from "./image-advantages"
import Image from "next/image"

export function AdvantagesSection() {
  const [activeBullets, setActiveBullets] = useState([true, false, false])

  const handleAnimationEnd = (index: number) => {
    const newActiveBullets = [...activeBullets]
    newActiveBullets[index] = false

    if (index + 1 < newActiveBullets.length) {
      newActiveBullets[index + 1] = true
    } else {
      newActiveBullets[0] = true
    }

    setActiveBullets(newActiveBullets)
  }

  const handleBulletClick = (index: number) => {
    const newActiveBullets = activeBullets.map((_, i) => i === index)
    setActiveBullets(newActiveBullets)
  }

  return (
    <section
      id="solucoes"
      className="bg-vantagens py-16 lg:py-section bg-gray-800 bg-cover bg-center bg-no-repeat"
    >
      <Container>
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="space-y-12 lg:space-y-[78px]">
            <h4 className="text-neutral-white text-center lg:text-left max-w-72 mx-auto lg:mx-0 md:max-w-[501px] font-semibold">
              03 vantagens exclusivas da SmartMoney
            </h4>
            <div className="flex flex-col items-center lg:items-start lg:gap-6">
              {activeBullets.map((active, index) => (
                <AdvantageBullet
                  key={index}
                  $active={active}
                  onClick={() => handleBulletClick(index)}
                  onAnimationEnd={() => handleAnimationEnd(index)}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col mt-[50px] items-end gap-[70px]">
            <Button color="primary" size="md">
              Quero ser cliente
            </Button>
            <Image
              src={"/img/image-advantages-mobile.png"}
              width={346}
              height={318}
              alt="Imagem da seção de vantages"
              quality={100}
              className="sm:hidden w-full"
            />
            <div className="hidden sm:block mx-auto lg:mx-0">
              <ImageAdvantages />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

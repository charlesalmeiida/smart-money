"use client"

import Image from "next/image"
import { CardAnimate } from "./card-animate.styles"
import { motion } from "motion/react"

export function CardImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <CardAnimate className="bg-neutral-white absolute w-full bottom-0 lg:bottom-20 left-0 md:left-20 lg:-left-52 shadow-card rounded-md max-w-card py-6 pl-6 pr-[15px] space-y-4">
        <div className="flex-between items-start">
          <div>
            <h6 className="font-semibold text-gray-400">R$ 999,90</h6>
            <p className="text-lg text-gray-100 leading-7">Balançaço</p>
          </div>
          <Image
            src={"/svg/bar-chart.svg"}
            width={20}
            height={18}
            alt="Gráfico de barras"
          />
        </div>
        <div className="w-full h-[3px] bg-neutral-gray02 opacity-40"></div>
        <Image
          src={"/img/avatars.png"}
          width={125}
          height={35}
          alt="Imagem de avatars"
        />
      </CardAnimate>
    </motion.div>
  )
}

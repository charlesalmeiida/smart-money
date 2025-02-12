"use client"

import Image from "next/image"
import { TagTech } from "../tag-tech"
import { TechContainer } from "./advantage-bullet.styles"
import { motion } from "motion/react"

export function ImageAdvantages() {
  return (
    <div className="relative flex gap-7">
      <TechContainer className="absolute top-[330px] -left-8">
        <TagTech color="white" />
      </TechContainer>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Image
          src={"/img/image-woman-advantages.png"}
          width={282}
          height={402}
          alt="Imagem de mulher no celular"
          quality={100}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-36"
      >
        <Image
          src={"/img/image-advantages.png"}
          width={281}
          height={427}
          alt="Imagem processos"
          quality={100}
        />
      </motion.div>
      <div>
        <motion.div
          initial={{ opacity: 0, zoom: 0 }}
          whileInView={{ opacity: 1, zoom: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Image
            className="absolute bottom-20 left-[139px]"
            src={"/svg/arrow.svg"}
            width={149}
            height={55}
            alt="Seta"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, zoom: 0 }}
          whileInView={{ opacity: 1, zoom: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            className="absolute right-[132px] rotate-180 top-12"
            src={"/svg/arrow.svg"}
            width={149}
            height={55}
            alt="Seta"
          />
        </motion.div>
      </div>
    </div>
  )
}

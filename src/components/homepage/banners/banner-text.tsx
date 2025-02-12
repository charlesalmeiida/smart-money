"use client"

import { Button } from "@/components/button"
import Image from "next/image"
import { motion } from "motion/react"

interface BannerTextProps {
  type: "sale" | "support"
  title: string
  description: string
  button: "primary" | "outline"
}

export function BannerText({
  type,
  title,
  description,
  button,
}: BannerTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex-total-center space-y-8 flex-col max-w-banner mx-auto lg:mx-0"
    >
      <Image
        src={type === "sale" ? "/svg/icon-money.svg" : "/svg/icon-chat.svg"}
        width={64}
        height={64}
        alt="Ícone da seção banner"
      />
      <div>
        <h5 className="max-w-banner text-gray-800 font-semibold mb-2">
          {title}
        </h5>
        <p className="max-w-72 lg:max-w-full mx-auto lg:mx-0">{description}</p>
      </div>
      <Button color={button} size="md">
        {type === "sale" ? "Quero ser cliente" : "Fale conosco"}
      </Button>
    </motion.div>
  )
}

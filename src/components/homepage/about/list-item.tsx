"use client"

import Image from "next/image"
import { motion } from "motion/react"

interface ListItemProps {
  image: string
  title: string
  description: string
}

export function ListItem({ image, title, description }: ListItemProps) {
  return (
    <motion.div
      className="max-w-64"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Image src={image} width={64} height={64} className="mx-auto lg:mx-0" alt={`Ícone ${title}`} />
      <h6 className="mt-4 font-semibold text-gray-500">{title}</h6>
      <p className="text-gray-300 leading-6 mt-[6px]">{description}</p>
    </motion.div>
  )
}

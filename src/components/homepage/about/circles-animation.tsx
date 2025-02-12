"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { circles } from "@/constants/circles"

export function CirclesAnimation() {
  return (
    <div className="absolute bottom-20 right-7">
      <ul className="flex flex-col-reverse">
        <motion.li
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="-mb-4"
        >
          <Image
            src={circles[0].image}
            width={50}
            height={50}
            alt="Circulos animados"
          />
        </motion.li>
        <motion.li
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeIn" }}
          viewport={{ once: true }}
          className="-mb-4"
        >
          <Image
            src={circles[1].image}
            width={50}
            height={50}
            alt="Circulos animados"
          />
        </motion.li>
        <motion.li
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
          viewport={{ once: true }}
          className="-mb-4"
        >
          <Image
            src={circles[2].image}
            width={50}
            height={50}
            alt="Circulos animados"
          />
        </motion.li>
        <motion.li
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeIn" }}
          viewport={{ once: true }}
          className="-mb-4"
        >
          <Image
            src={circles[3].image}
            width={50}
            height={50}
            alt="Circulos animados"
          />
        </motion.li>
      </ul>
    </div>
  )
}

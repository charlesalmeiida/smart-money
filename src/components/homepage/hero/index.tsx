"use client"

import { Container } from "@/components/container"
import { TagTech } from "../tag-tech"
import { BigNumbers } from "./big-numbers"
import { FormHero } from "../form"
import { motion } from "motion/react"

export function HeroSection() {
  return (
    <main>
      <section className="pt-[136px] bg-hero relative bg-center bg-no-repeat bg-cover">
        <Container className="flex flex-col md:flex-row justify-between">
          <div className="space-y-14 mt-9 text-center lg:text-left">
            <div>
              <TagTech />
              <h3 className="text-neutral-white mt-6 font-semibold max-w-[656px]">
                Conta digital que não é só uma conta digital.
              </h3>
              <p className="text-neutral-white mt-3 text-lg">
                Pellentesque rutrum turpis non est turpis pretium morbi urna.
              </p>
            </div>
            <div className="w-8 h-[2px] bg-primary-default"></div>
            <div className="flex-center gap-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <BigNumbers value={120}>Projeto realizado 2021</BigNumbers>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <BigNumbers value={12}>Escritórios no Brasil</BigNumbers>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <BigNumbers value={15}>Faturamento 2021</BigNumbers>
              </motion.div>
            </div>
          </div>
          <FormHero />
        </Container>
      </section>
    </main>
  )
}

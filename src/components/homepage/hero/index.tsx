"use client"

import { Container } from "@/components/container"
import { TagTech } from "../tag-tech"
import { BigNumbers } from "./big-numbers"
import { FormHero } from "../form"
import { motion } from "motion/react"

interface HeroSectionProps {
  title: string
  subtitle: string
  titleForm: string
  buttonCTA: string
}

export function HeroSection({
  title,
  subtitle,
  titleForm,
  buttonCTA,
}: HeroSectionProps) {
  return (
    <main>
      <section className="pt-[136px] bg-mobile md:bg-hero relative bg-bottom bg-no-repeat bg-cover">
        <Container className="flex flex-col lg:flex-row gap-16 lg:gap-0 justify-between">
          <div className="space-y-14 mt-9 text-center lg:text-left">
            <div>
              <TagTech />
              <h3 className="text-neutral-white mx-auto lg:mx-0 mt-6 font-semibold max-w-heading">
                {title}
              </h3>
              <p className="text-neutral-white max-w-80 lg:max-w-full mx-auto lg:mx-0 text-base mt-3 lg:text-lg">
                {subtitle}
              </p>
            </div>
            <div className="w-8 h-[2px] mx-auto lg:mx-0 bg-primary-default"></div>
            <div className="flex flex-col lg:flex-row gap-16">
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
                <BigNumbers value={15} suffix="mi">
                  Faturamento 2021
                </BigNumbers>
              </motion.div>
            </div>
          </div>
          <FormHero buttonCTA={buttonCTA} titleForm={titleForm} />
        </Container>
      </section>
    </main>
  )
}

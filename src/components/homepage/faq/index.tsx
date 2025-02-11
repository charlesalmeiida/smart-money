"use client"

import { Container } from "@/components/container"
import { BulletsFaq } from "./bullets-faq"
import { ItemFaq } from "./item-faq"
import { useState } from "react"
import { motion } from "motion/react"

const questions = [
  {
    number: "01",
    question: "Quais recursos ainda posso acessar nas novas Páginas?",
  },
  {
    number: "02",
    question: "Como faço para abrir a minha nova Página?",
  },
  {
    number: "03",
    question: "Há algum conteúdo que não migrará com a minha Página?",
  },
  {
    number: "04",
    question: "Como as pessoas encontrarão a minha nova Página?",
  },
  {
    number: "05",
    question: "O que é o Feed? Como faço para configurá-lo?",
  },
]

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState<string | null>(null)

  const handleToggle = (number: string) => {
    setOpenFaq((prev) => (prev === number ? null : number))
  }

  return (
    <section className="py-section bg-neutral-gray01">
      <Container className="flex-between">
        <div>
          <div className="space-y-4 max-w-96">
            <span className="text-sm font-semibold text-gray-300">
              Tire suas dúvidas
            </span>
            <h4 className="text-gray-800 font-semibold">
              Perguntas mais frequentes
            </h4>
            <p className="text-xl text-gray-200">
              Separamos algumas perguntas e respostas que podem te ajudar na sua
              decisão
            </p>
          </div>
          <div className="mt-[60px] space-y-11">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <BulletsFaq
                icon="duvidas"
                title="Dúvidas?"
                description="Envie uma mensagem para nosso time"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <BulletsFaq
                icon="faça-parte"
                title="Faça parte"
                description="Cadastre-se para transformar sua empresa"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <BulletsFaq
                icon="chama-no-zap"
                title="Chama no zap"
                description="Fale com conosso comercial"
              />
            </motion.div>
          </div>
        </div>
        <div>
          <ul className="space-y-1">
            {questions.map(({ number, question }) => (
              <li key={number}>
                <ItemFaq
                  isOpen={openFaq === number}
                  onToggle={() => handleToggle(number)}
                  number={number}
                  question={question}
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

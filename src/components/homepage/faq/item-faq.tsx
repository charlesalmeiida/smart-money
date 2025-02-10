"use client"

import Image from "next/image"
import {
  Answer,
  ButtonFaq,
  ContainerQuestion,
  Question,
} from "./item-faq.styles"
import { useState } from "react"

interface ItemFaqProps {
  number: string
  question: string
}

export function ItemFaq({ number, question }: ItemFaqProps) {
  const [isFaqOpen, setFaqOpen] = useState(false)

  const handleFaq = () => {
    setFaqOpen(!isFaqOpen)
  }

  return (
    <ButtonFaq onClick={handleFaq}>
      <ContainerQuestion>
        <Question>
          <h6>{number}</h6>
          <p>{question}</p>
        </Question>
        <Image
          src={"/svg/icon-plus.svg"}
          width={16}
          height={16}
          alt="Ícone para abrir a resposta do FAQ"
        />
      </ContainerQuestion>
      {isFaqOpen && (
        <Answer>
          Turpis at malesuada orci ultricies ipsum amet sed cras. Enim ut urna
          feugiat ultrices semper quisque at. Viverra lectus ut a gravida
          aliquet cras est lectus ullamcorper. Elementum diam iaculis neque
          arcu, aliquet consectetur.
        </Answer>
      )}
    </ButtonFaq>
  )
}

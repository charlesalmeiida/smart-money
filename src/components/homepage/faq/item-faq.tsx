"use client"

import Image from "next/image"
import {
  Answer,
  ButtonFaq,
  ContainerQuestion,
  IconWrapper,
  Question,
} from "./item-faq.styles"

interface ItemFaqProps {
  number: string
  question: string
  isOpen: boolean
  onToggle: () => void
}

export function ItemFaq({ number, question, isOpen, onToggle }: ItemFaqProps) {
  return (
    <ButtonFaq onClick={onToggle}>
      <ContainerQuestion>
        <Question>
          <h6>{number}</h6>
          <p>{question}</p>
        </Question>
        <IconWrapper $isOpen={isOpen}>
          <Image
            src={isOpen ? "/svg/icon-close-faq.svg" : "/svg/icon-plus.svg"}
            width={16}
            height={16}
            alt="Ícone para abrir/fechar a resposta do FAQ"
          />
        </IconWrapper>
      </ContainerQuestion>
      {isOpen && (
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

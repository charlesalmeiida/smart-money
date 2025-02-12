import { Container } from "@/components/container"
import { BannerText } from "./banner-text"

export function BannersSection() {
  return (
    <section id="contato" className="py-16 lg:py-section">
      <Container className="flex flex-col gap-14 lg:gap-0 lg:flex-row justify-around text-center">
        <BannerText
          button="primary"
          description="Pellentesque urna commodo, elementum, est nullam."
          title="Faça parte do mercado digital financeiro!"
          type="sale"
        />
        <div className="w-[327px] mx-auto lg:mx-0 h-1 lg:h-[340px] lg:w-1 bg-neutral-gray02 opacity-30"></div>
        <BannerText
          button="outline"
          description="Pellentesque urna commodo, elementum, est nullam."
          title="Um time de suporte incrível para lhe atender"
          type="support"
        />
      </Container>
    </section>
  )
}

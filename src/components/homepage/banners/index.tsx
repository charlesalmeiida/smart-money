import { Container } from "@/components/container"
import { BannerText } from "./banner-text"

export function BannersSection() {
  return (
    <section className="py-section">
      <Container className="flex justify-around text-center">
        <BannerText
          button="primary"
          description="Pellentesque urna commodo, elementum, est nullam."
          title="Faça parte do mercado digital financeiro!"
          type="sale"
        />
        <div className="h-[340px] w-1 bg-neutral-gray02 opacity-30"></div>
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

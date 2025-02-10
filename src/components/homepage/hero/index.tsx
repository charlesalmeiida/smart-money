import { Container } from "@/components/container"
import { TagTech } from "../tag-tech"
import { BigNumbers } from "./big-numbers"
import { FormHero } from "../form"

export function HeroSection() {
  return (
    <main>
      <section className="pt-[136px] bg-hero relative bg-center bg-no-repeat bg-cover">
        <Container className="flex-between">
          <div className="space-y-14 mt-9">
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
              <BigNumbers number="120" text="Projeto realizado 2021" />
              <BigNumbers number="12" text="Escritórios no Brasil" />
              <BigNumbers number="15mi" text="Faturamento 2021" />
            </div>
          </div>
          <FormHero />
        </Container>
      </section>
    </main>
  )
}

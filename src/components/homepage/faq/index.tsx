import { Container } from "@/components/container"
import { BulletsFaq } from "./bullets-faq"

export function FaqSection() {
  return (
    <section className="py-section bg-neutral-gray01">
      <Container>
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
            <BulletsFaq
              icon="duvidas"
              title="Dúvidas?"
              description="Envie uma mensagem para nosso time"
            />
            <BulletsFaq
              icon="faça-parte"
              title="Faça parte"
              description="Cadastre-se para transformar sua empresa"
            />
            <BulletsFaq
              icon="chama-no-zap"
              title="Chama no zap"
              description="Fale com conosso comercial"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

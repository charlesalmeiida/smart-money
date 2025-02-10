import { Container } from "@/components/container"
import { BulletsFaq } from "./bullets-faq"
import { ItemFaq } from "./item-faq"

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
        <div>
          <ul className="space-y-1">
            {questions.map(({ number, question }) => (
              <li key={number}>
                <ItemFaq number={number} question={question} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

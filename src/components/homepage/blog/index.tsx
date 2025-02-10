import { Container } from "@/components/container"
import { CardBlog } from "./card-blog"

export function BlogSection() {
  return (
    <section className="py-section bg-neutral-gray01">
      <Container>
        <div className="space-y-3 max-w-[411px]">
          <span className="text-primary-default font-semibold">Nosso blog</span>
          <h4 className="font-semibold text-gray-700">
            Notícias do mundo da tecnologia
          </h4>
        </div>
        <div className="mt-14">
          <CardBlog />
        </div>
      </Container>
    </section>
  )
}

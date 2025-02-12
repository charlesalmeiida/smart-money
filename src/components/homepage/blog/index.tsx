import { Container } from "@/components/container"
import { SlidePosts } from "./slide-posts"

export function BlogSection() {
  return (
    <section className="py-16 lg:py-section bg-neutral-gray01">
      <Container>
        <div className="space-y-3 max-w-[411px] mx-auto lg:mx-0 ">
          <span className="text-primary-default hidden lg:block font-semibold">
            Nosso blog
          </span>
          <h4 className="font-semibold max-w-56 md:max-w-full mx-auto lg:mx-0 text-center lg:text-left text-gray-700">
            Notícias do mundo da tecnologia
          </h4>
        </div>
        <SlidePosts />
      </Container>
    </section>
  )
}

import { Container } from "@/components/container"
import { TagTech } from "@/components/homepage/tag-tech"

export default function Home() {
  return (
    <main>
      <section className="pt-10">
        <Container>
          <div>
            <TagTech />
            <h3 className="text-neutral-white mt-6 font-semibold max-w-[656px]">
              Conta digital que não é só uma conta digital.
            </h3>
          </div>
        </Container>
      </section>
    </main>
  )
}

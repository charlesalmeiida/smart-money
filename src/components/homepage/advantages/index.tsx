import { Button } from "@/components/button"
import { Container } from "@/components/container"
import { AdvantageBullet } from "./advantage-bullet"
import { ImageAdvantages } from "./image-advantages"

export function AdvantagesSection() {
  return (
    <section className="bg-vantagens py-section bg-gray-800 bg-cover bg-center bg-no-repeat">
      <Container>
        <div className="flex-between items-end">
          <h4 className="text-neutral-white max-w-[501px] font-semibold">
            03 vantagens exclusivas da SmartMoney
          </h4>
          <Button color="primary" size="md">
            Quero ser cliente
          </Button>
        </div>
        <div className="mt-[70px] flex-between">
          <div className="flex flex-col gap-6">
            <AdvantageBullet $active={true} />
            <AdvantageBullet $active={false} />
            <AdvantageBullet $active={false} />
          </div>
          <div>
            <ImageAdvantages />
          </div>
        </div>
      </Container>
    </section>
  )
}

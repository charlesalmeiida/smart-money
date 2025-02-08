import { Button } from "@/components/button"
import { Container } from "@/components/container"
import Image from "next/image"
import { CardImage } from "./card-image"

const bulletsAbout = [
  {
    text: "Sagittis sed cursus sed malesuada ultrices",
  },
  {
    text: "Lectus ac at massa ac tellus fringilla aenean",
  },
  {
    text: "Cras faucibus tristique volutpat accumsan",
  },
]

export function AboutSection() {
  return (
    <section className="bg-neutral-white relative -mt-10 py-about">
      <Container className="flex-between items-start">
        <div>
          <div className="space-y-12">
            <div className="space-y-10">
              <div className="space-y-2">
                <h4 className="max-w-[423px] font-semibold text-gray-800">
                  Conheça nossas solução customizadas
                </h4>
                <p className="max-w-[436px] text-gray-300 text-lg leading-7">
                  Suscipit pellentesque praesent auctor molestie massa nunc
                  vitae felis eget est ut gravida in maecenas. Tempus in in in
                  congue proin.
                </p>
              </div>
              <ul className="space-y-6">
                {bulletsAbout.map((bullet) => (
                  <li key={bullet.text} className="flex-center gap-4">
                    <Image
                      src={"/svg/icon-check.svg"}
                      alt="Ícone de check"
                      width={24}
                      height={24}
                    />
                    <span className="text-sabe leading-6 text-gray-200">
                      {bullet.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <Button size="md" color="primary">
              Quero ser cliente
            </Button>
          </div>
          <button className="flex-center gap-3 mt-8">
            <Image
              src={"/svg/icon-tel.svg"}
              width={13}
              height={20}
              alt="Ícone de celular"
            />
            <span className="text-gray-500">Fale conosco</span>
          </button>
        </div>
        <div className="relative">
          <Image
            src={"/img/image-woman-about.png"}
            alt="Imagem de mulher no celular na seção de sobre"
            width={488}
            height={640}
          />
          <CardImage />
        </div>
      </Container>
    </section>
  )
}

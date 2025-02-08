import { Button } from "@/components/button"
import { Container } from "@/components/container"
import Image from "next/image"
import { CardImage } from "./card-image"
import { CirclesAnimation } from "./circles-animation"
import { ListItem } from "./list-item"

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

const listItems = [
  {
    image: "/svg/icon-complexidade.svg",
    title: "Fim da complexidade",
    description:
      "Amet, leo turpis facilisi nam fusce nunc molestie. Orci, nibh auctor lacus eleifend tincidunt sceleris",
  },
  {
    image: "/svg/icon-burocracia.svg",
    title: "Sem burocracia",
    description:
      "Eu arcu arcu vitae ipsum sed. Purus volutpat laoreet sed nisi, imperdiet sit aliquam viverra.",
  },
  {
    image: "/svg/icon-digital.svg",
    title: "Tudo digital",
    description:
      "Dictum mi risus auctor donec et amet duis tincidunt gravida. Tellus amet, porttitor quis mauris",
  },
  {
    image: "/svg/icon-evolucao.svg",
    title: "Evolução constante",
    description:
      "Commodo egestas dolor, sapien nam posuere at. Ultrices dictum cras vel gravida gravida vehicula",
  },
]

export function AboutSection() {
  return (
    <section className="bg-neutral-white relative -mt-10 py-section">
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
                {bulletsAbout.map(({ text }) => (
                  <li key={text} className="flex-center gap-4">
                    <Image
                      src={"/svg/icon-check.svg"}
                      alt="Ícone de check"
                      width={24}
                      height={24}
                    />
                    <span className="text-sabe leading-6 text-gray-200">
                      {text}
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
          <CirclesAnimation />
        </div>
      </Container>
      <Container className="flex-between pt-section">
        {listItems.map(({ image, title, description }, index) => (
          <ListItem
            key={index}
            image={image}
            title={title}
            description={description}
          />
        ))}
      </Container>
    </section>
  )
}

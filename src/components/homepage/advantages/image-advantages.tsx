import Image from "next/image"
import { TagTech } from "../tag-tech"

export function ImageAdvantages() {
  return (
    <div className="relative flex gap-7">
      <div className="absolute top-[330px] -left-8">
        <TagTech color="white" />
      </div>
      <div>
        <Image
          src={"/img/image-woman-advantages.png"}
          width={282}
          height={402}
          alt="Imagem de mulher no celular"
          quality={100}
        />
      </div>
      <div className="mt-36">
        <Image
          src={"/img/image-advantages.png"}
          width={281}
          height={427}
          alt="Imagem processos"
          quality={100}
        />
      </div>
      <div>
        <Image
          className="absolute bottom-20 left-[139px]"
          src={"/svg/arrow.svg"}
          width={149}
          height={55}
          alt="Seta"
        />
        <Image
          className="absolute right-[132px] rotate-180 top-12"
          src={"/svg/arrow.svg"}
          width={149}
          height={55}
          alt="Seta"
        />
      </div>
    </div>
  )
}

import { Container } from "@/components/container"
import Image from "next/image"
import Link from "next/link"

export function Copyright() {
  return (
    <Container>
      <div className="w-full h-px bg-gray-400 mt-section"></div>
      <div className="flex-between items-center pt-[52px]">
        <div className="flex-center gap-20">
          <div>
            <Link href={"/"}>
              <Image
                src={"/svg/logo-smartmoney.svg"}
                width={237}
                height={37}
                alt={"Logo SmartMoney"}
              />
            </Link>
          </div>
          <span className="text-sm text-neutral-white">
            © 2022 SmartBusiness. Todos os direitos reservados
          </span>
        </div>
        <div className="flex-center gap-44">
          <button className="flex-center gap-3">
            <Image
              src={"/svg/icon-global.svg"}
              width={18}
              height={18}
              alt="Global"
            />
            <span className="text-sm text-neutral-gray02">Português</span>
            <Image
              src={"/svg/chevron-down.svg"}
              width={10}
              height={8}
              alt="Ícone de seta para baixo"
            />
          </button>
          <span className="text-sm text-neutral-white">
            Desenvolvido por{" "}
            <Link
              className="underline"
              target="blank"
              href="https://www.insany.design/pt-BR"
            >
              Insany Design
            </Link>
          </span>
        </div>
      </div>
    </Container>
  )
}

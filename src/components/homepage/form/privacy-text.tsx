import Image from "next/image"

export function PrivacyText() {
  return (
    <div className="space-y-7">
      <span className="max-w-[369px] block text-sm font-sans leading-[18px] text-gray-100">
        Ao enviar seus dados, você autoriza que o SmartMoney entre em contato e
        declara estar ciente da{" "}
        <a className="underline text-sm font-sans leading-[140%]" href="#">
          Política de Privacidade
        </a>
      </span>
      <div className="w-full h-[3px] bg-neutral-gray02 opacity-40"></div>
      <div className="flex-center gap-[14px]">
        <Image
          src={"/svg/icon-security.svg"}
          width={21}
          height={24}
          alt="Ícone de dados seguros"
        />
        <span className="font-sans text-sm text-gray-500">
          Seus dados estão seguros
        </span>
      </div>
    </div>
  )
}

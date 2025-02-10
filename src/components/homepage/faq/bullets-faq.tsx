import Image from "next/image"

interface BulletsFaqProps {
  title: string
  description: string
  icon: "duvidas" | "faça-parte" | "chama-no-zap"
}

export function BulletsFaq({ title, description, icon }: BulletsFaqProps) {
  const image =
    icon === "duvidas"
      ? "/svg/icon-message.svg"
      : icon === "faça-parte"
      ? "/svg/icon-empresa.svg"
      : "/svg/icon-zap.svg"

  return (
    <div className="flex-center gap-8">
      <Image
        src={image}
        width={33}
        height={32}
        alt="Ícone de enviar uma mensagem em caso de dúvidas"
      />
      <div className="space-y-1">
        <h6 className="text-lg font-semibold text-gray-700">{title}</h6>
        <p className="text-gray-200 text-sm">{description}</p>
      </div>
    </div>
  )
}

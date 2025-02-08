import Image from "next/image"

interface ListItemProps {
  image: string
  title: string
  description: string
}

export function ListItem({ image, title, description }: ListItemProps) {
  return (
    <div className="max-w-64">
      <Image
        src={image}
        width={64}
        height={64}
        alt="Ícone Fim da complexidade"
      />
      <h6 className="mt-4 font-semibold text-gray-500">{title}</h6>
      <p className="text-gray-300 leading-6 mt-[6px]">{description}</p>
    </div>
  )
}

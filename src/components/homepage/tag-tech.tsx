import Image from "next/image"

interface TagTechProps {
  color?: "white" | "transparent"
}

export function TagTech({ color }: TagTechProps) {
  const bg =
    color === "white"
      ? "border-none bg-neutral-white text-gray-200"
      : "border-gray-border text-neutral-white"

  return (
    <div
      className={`flex-center gap-2 pl-4 pr-5 py-[10px] rounded-full w-fit border-2 ${bg}`}
    >
      <Image
        src={"/svg/icon-star.svg"}
        alt="Ícone de uma estrela"
        width={16}
        height={16}
      />
      <span className={`text-sm font-sans leading-[18px] ${bg}`}>
        Tecnologia disruptiva
      </span>
    </div>
  )
}

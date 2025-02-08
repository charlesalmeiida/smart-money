import Image from "next/image"

export function TagTech() {
  return (
    <div className="flex-center gap-2 pl-4 pr-5 py-[10px] rounded-full w-fit border-2 border-gray-border">
      <Image
        src={"/svg/icon-star.svg"}
        alt="Ícone de uma estrela"
        width={16}
        height={16}
      />
      <span className="text-sm font-sans leading-[18px] text-neutral-white">
        Tecnologia disruptiva
      </span>
    </div>
  )
}

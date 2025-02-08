import Image from "next/image"

const circles = [
  {
    image: "/svg/circles/01.svg",
  },
  {
    image: "/svg/circles/02.svg",
  },
  {
    image: "/svg/circles/03.svg",
  },
  {
    image: "/svg/circles/04.svg",
  },
]

export function CirclesAnimation() {
  return (
    <div className="absolute bottom-20 right-7">
      <ul className="flex flex-col-reverse">
        {circles.map(({ image }, index) => (
          <li key={index} className="-mb-4">
            <Image src={image} width={50} height={50} alt="Circulos animados" />
          </li>
        ))}
      </ul>
    </div>
  )
}

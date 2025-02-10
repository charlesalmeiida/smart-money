import Image from "next/image"
import Link from "next/link"

export function CardBlog() {
  return (
    <Link href={""} className="space-y-6">
      <Image
        src={"/img/image-blog.png"}
        width={280}
        height={340}
        alt="Imagem do post do blog"
      />
      <div className="space-y-3 max-w-72">
        <div className="flex-center gap-4">
          <strong className="text-primary-default font-semibold">
            Business
          </strong>
          <span>Outubro 2021</span>
        </div>
        <p>Sollicitudin a sagittis, risus nisl, fermentum, tincidunt dolor</p>
      </div>
      <div className="flex-center gap-4">
        <Image
          src={"/img/avatar-blog.png"}
          width={48}
          height={48}
          quality={100}
          alt="Imagem do post do blog"
        />
        <div>
          <strong className="font-semibold text-gray-700">
            Savannah Nguyen
          </strong>
          <p className="text-sm text-gray-400">Autor</p>
        </div>
      </div>
    </Link>
  )
}

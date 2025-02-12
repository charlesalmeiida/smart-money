import Image from "next/image"
import Link from "next/link"

interface CardBlogProps {
  id: number
  title: string
  author: string
  date: string
  image: string
  slug: string
}

export function CardBlog({
  title,
  author,
  date,
  image,
  id,
  slug,
}: CardBlogProps) {
  return (
    <Link href={`/blog/${id}?=${slug}`} className="space-y-6">
      <div className="relative w-[280px] h-[340px]">
        <Image
          src={image}
          fill
          alt="Imagem do post do blog"
          className="object-cover"
        />
      </div>
      <div className="space-y-3 max-w-72">
        <div className="flex-center gap-4">
          <strong className="text-primary-default font-semibold">
            Business
          </strong>
          <span>{date}</span>
        </div>
        <p>{title}</p>
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
          <strong className="font-semibold text-gray-700">{author}</strong>
          <p className="text-sm text-gray-400">Autor</p>
        </div>
      </div>
    </Link>
  )
}

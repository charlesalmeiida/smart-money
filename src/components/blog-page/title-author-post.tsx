import { formatDate } from "@/utils/format-date"
import Image from "next/image"

interface TitleAndAuthorProps {
  title: string
  author: string
  date: string
}

export function TitleAndAuthor({ title, author, date }: TitleAndAuthorProps) {
  return (
    <>
      <h4 className="text-3xl lg:text-4xl text-gray-100 font-semibold mt-4">
        {title}
      </h4>
      <div className="flex-center gap-3 mt-6 lg:mt-10">
        <Image
          src={"/img/avatar-blog-page.png"}
          width={29}
          height={29}
          alt="Avatar"
        />
        <span className="text-gray-200">
          Por <strong className="font-medium">{author}</strong>
        </span>
        <div className="w-[6px] h-[6px] bg-primary-dark rounded-full"></div>
        <span className="text-gray-200">{formatDate(date)}</span>
      </div>
    </>
  )
}

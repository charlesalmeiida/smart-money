import Image from "next/image"
import Link from "next/link"

interface BreadcrumbProps {
  children: React.ReactNode
}

export function Breadcrumb({ children }: BreadcrumbProps) {
  return (
    <div className="flex-center justify-between lg:justify-start gap-4 lg:gap-[156px]">
      <Link
        href={"/"}
        className="flex-center gap-2 text-gray-200 text-sm text-opacity-60"
      >
        <Image
          src={"/svg/chevron-left.svg"}
          width={6}
          height={8}
          alt="Seta de voltar"
        />
        Voltar
      </Link>
      <div className="flex-center gap-2">
        <Link href={"/"}>
          <Image
            src={"/svg/icon-home.svg"}
            width={14}
            height={14}
            alt="Ícone da homepage"
          />
        </Link>
        <span className="text-sm text-gray-200">
          {" "}
          / artigos / <strong className="text-primary-dark">{children}</strong>
        </span>
      </div>
    </div>
  )
}

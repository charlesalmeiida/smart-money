import { tv } from "tailwind-variants"

const button = tv({
  base: "rounded-md font-semibold leading-5 transition-all",
  variants: {
    color: {
      primary: "bg-primary-default text-neutral-white hover:bg-primary-light",
      secondary:
        "bg-neutral-white text-gray-700 hover:bg-primary-default hover:text-neutral-white",
      outline:
        "bg-transparent border border-button border-primary-default text-primary-default hover:bg-primary-default hover:text-neutral-white",
    },
    size: {
      sm: "py-3 px-6 text-sm",
      md: "py-4 w-full max-w-[303px] mx-auto lg:mx-0 lg:max-w-button text-base",
      lg: "py-4 w-full text-base",
    },
  },
})

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  color: "primary" | "secondary" | "outline"
  size: "sm" | "lg" | "md"
}

export function Button({ children, color, size }: ButtonProps) {
  return (
    <button className={button({ color: color, size: size })}>{children}</button>
  )
}

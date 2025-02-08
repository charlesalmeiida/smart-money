import { tv } from "tailwind-variants"

const button = tv({
  base: "rounded-md text-sm font-semibold leading-5 transition-all",
  variants: {
    color: {
      primary: "bg-primary-default text-neutral-white",
      secondary:
        "bg-neutral-white text-gray-700 hover:bg-primary-default hover:text-neutral-white",
    },
    size: {
      sm: "py-3 px-6",
      lg: "py-4 w-full",
    },
  },
})

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  color: "primary" | "secondary"
  size: "sm" | "lg"
}

export function Button({ children, color, size }: ButtonProps) {
  return (
    <button className={button({ color: color, size: size })}>{children}</button>
  )
}

import { twMerge } from "tailwind-merge"

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={twMerge("w-full max-w-grid mx-auto px-3", className)}>
      {children}
    </div>
  )
}

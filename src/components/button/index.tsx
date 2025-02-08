interface ButtonProps {
  children: React.ReactNode
}

export function Button({ children }: ButtonProps) {
  return (
    <button className="bg-neutral-white py-3 px-6 rounded-md text-sm font-semibold leading-5 text-gray-700 transition-all hover:brightness-75">
      {children}
    </button>
  )
}

interface InputTextProps {
  type: "email" | "text" | "tel"
  placeholder: string
  name: string
}

export function InputText({ type, placeholder, name }: InputTextProps) {
  return (
    <input
      className="focus:outline-none focus:ring-primary-default focus:ring-2 focus:ring-opacity-20 caret-primary-default focus:text-gray-400 rounded-md bg-neutral-gray01 boder-n w-full py-4 pl-4 text-base leading-6 placeholder:text-gray-50"
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      required
    />
  )
}

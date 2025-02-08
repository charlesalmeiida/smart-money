interface InputRadioProps {
  children: React.ReactNode
  category: "person" | "business"
  checked?: boolean
  getCategory: (category: "person" | "business") => void
}

export function InputRadio({
  children,
  category,
  checked,
  getCategory,
}: InputRadioProps) {
  return (
    <div className="flex-center gap-2">
      <input
        onChange={() => getCategory(category)}
        className="appearance-none w-[18px] h-[18px] border-2 rounded-full border-gray-50 transition-all checked:border-neutral-white checked:bg-primary-default checked:ring-2 checked:ring-primary-default checked:outline-2 checked:outline-offset-0
        checked:border-[5px] checked:outline-primary-default peer cursor-pointer"
        type="radio"
        name="category"
        value={category}
        id={category}
        defaultChecked={checked}
      />
      <label
        className="text-base font-semibold leading-6 text-gray-100 peer-hover:cursor-pointer peer-checked:text-gray-700"
        htmlFor={category}
      >
        {children}
      </label>
    </div>
  )
}

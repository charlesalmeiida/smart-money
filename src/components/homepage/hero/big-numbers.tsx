interface BigNumbersProps {
  number: string
  text: string
}

export function BigNumbers({ number, text }: BigNumbersProps) {
  return (
    <div className="text-neutral-white space-y-[6px]">
      <h4 className="font-semibold">{number}</h4>
      <span className="font-sans block text-base leading-6">{text}</span>
    </div>
  )
}

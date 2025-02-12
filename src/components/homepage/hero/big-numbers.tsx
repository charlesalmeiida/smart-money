import { motion, useMotionValue, useTransform, animate } from "motion/react"
import React, { useEffect } from "react"

interface BigNumbersProps {
  children: React.ReactNode
  value: number
}

export function BigNumbers({ children, value }: BigNumbersProps) {
  const count = useMotionValue(0) // Valor inicial da contagem
  const rounded = useTransform(count, (latest) => Math.round(latest)) // Arredonda o valor

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 1,
      ease: "easeOut",
    })

    return controls.stop
  }, [value])

  return (
    <div className="text-neutral-white space-y-[6px]">
      <motion.h4 className="font-semibold">{rounded}</motion.h4>
      <motion.span className="font-sans block text-base leading-6">
        {children}
      </motion.span>
    </div>
  )
}

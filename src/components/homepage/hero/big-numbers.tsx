import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import React, { useEffect } from "react"

interface BigNumbersProps {
  children: React.ReactNode
  value: number
  suffix?: string
}

export function BigNumbers({ children, value, suffix = "" }: BigNumbersProps) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  const formattedValue = useTransform(rounded, (latest) => `${latest}${suffix}`)

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 1,
      ease: "easeOut",
    })

    return controls.stop
  }, [value])

  return (
    <div className="text-neutral-white space-y-[6px]">
      <motion.h4 className="font-semibold">{formattedValue}</motion.h4>
      <motion.span className="font-sans block text-base leading-6">
        {children}
      </motion.span>
    </div>
  )
}

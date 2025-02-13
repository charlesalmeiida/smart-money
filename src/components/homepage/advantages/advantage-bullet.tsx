"use client"

import { useEffect, useRef } from "react"
import { BulletContainer } from "./advantage-bullet.styles"

interface AdvantageBulletProps {
  $active: boolean
  onClick?: () => void
  onAnimationEnd?: () => void
  title: string
  subtitle: string
}

export function AdvantageBullet({
  $active,
  onClick,
  onAnimationEnd,
  title,
  subtitle,
}: AdvantageBulletProps) {
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const progressElement = progressRef.current

    const handleAnimationEnd = () => {
      if (onAnimationEnd) {
        onAnimationEnd()
      }
    }

    if ($active && progressElement) {
      progressElement.addEventListener("animationend", handleAnimationEnd)
    }

    return () => {
      if (progressElement) {
        progressElement.removeEventListener("animationend", handleAnimationEnd)
      }
    }
  }, [$active, onAnimationEnd])

  return (
    <BulletContainer $active={$active} onClick={onClick}>
      <h6>{title}</h6>
      <p>{subtitle}</p>

      <div className="loader">
        <div
          key={$active ? "active" : "inactive"} 
          ref={progressRef}
          className="progress"
        ></div>
      </div>
    </BulletContainer>
  )
}

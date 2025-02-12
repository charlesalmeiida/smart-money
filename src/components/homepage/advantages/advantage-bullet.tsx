"use client"

import { useEffect, useRef } from "react"
import { BulletContainer } from "./advantage-bullet.styles"

interface AdvantageBulletProps {
  $active: boolean
  onClick?: () => void
  onAnimationEnd?: () => void
}

export function AdvantageBullet({
  $active,
  onClick,
  onAnimationEnd,
}: AdvantageBulletProps) {
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const progressElement = progressRef.current

    const handleAnimationEnd = () => {
      if (onAnimationEnd) {
        onAnimationEnd() // Chama o callback quando a animação terminar
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
      <h6>Tecnologia de ponta</h6>
      <p>
        Nullam neque, rutrum et enim diam, ligula fringilla aliquet tincidunt
        ullamcorper elit
      </p>

      <div className="loader">
        <div
          key={$active ? "active" : "inactive"} // Reinicia a animação quando $active muda
          ref={progressRef}
          className="progress"
        ></div>
      </div>
    </BulletContainer>
  )
}

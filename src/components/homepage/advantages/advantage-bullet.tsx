"use client"

import { BulletContainer } from "./advantage-bullet.styles"

interface AdvantageBulletProps {
  $active: boolean
}

export function AdvantageBullet({ $active }: AdvantageBulletProps) {
  return (
    <BulletContainer $active={$active}>
      <h6>Tecnologia de ponta</h6>
      <p>
        Nullam neque, rutrum et enim diam, ligula fringilla aliquet tincidunt
        ullamcorper elit
      </p>

      <div className="loader">
        <div className="progress"></div>
      </div>
    </BulletContainer>
  )
}

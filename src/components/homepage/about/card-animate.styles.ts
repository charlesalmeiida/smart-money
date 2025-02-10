import styled from "styled-components"

export const CardAnimate = styled.div`
  animation: floating 6s ease-in-out infinite;

  @keyframes floating {
    0% {
      transform: translateY(0);
    }
    66% {
      transform: translateY(-15px);
    }
    100% {
      transform: translateY(0);
    }
  }
`

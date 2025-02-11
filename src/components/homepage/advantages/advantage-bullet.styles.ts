import styled from "styled-components"
import { theme } from "@/utils/tailwind-theme"

export const BulletContainer = styled.button<{ $active: boolean }>`
  background-color: ${(props) =>
    props.$active ? theme.colors.neutral.white : "transparent"};
  border-radius: 6px;
  padding: 33px 34px;
  width: 100%;
  max-width: 487px;
  text-align: left;

  h6 {
    color: ${(props) =>
      props.$active ? theme.colors.gray[500] : theme.colors.neutral.gray02};
    font-weight: 600;
    margin-bottom: 16px;
  }

  p {
    color: ${(props) =>
      props.$active ? theme.colors.gray[500] : theme.colors.neutral.gray02};
  }

  .loader {
    margin-top: 16px;
    width: 100%;
    height: 6px;
    background-color: #cbd6e2;
    border-radius: 6px;
    opacity: ${(props) => (props.$active ? 1 : 0)};
    .progress {
      width: 143px;
      height: 6px;
      background-color: ${theme.colors.primary.default};
      border-radius: 6px;
    }
  }
`

export const TechContainer = styled.div`
  animation: floating 6s ease-in-out infinite;

  @keyframes floating {
    0% {
      transform: translateY(0);
    }
    66% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0);
    }
  }
`

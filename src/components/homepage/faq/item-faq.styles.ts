import styled from "styled-components"
import { theme } from "@/utils/tailwind-theme"

export const IconWrapper = styled.div<{ $isOpen: boolean }>`
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`

export const ButtonFaq = styled.button`
  width: 43.5rem;
  border-radius: 6px;
  padding: 41px 32px;
  background-color: ${theme.colors.neutral.white};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${theme.colors.neutral.gray01};
  }
`

export const ContainerQuestion = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Question = styled.div`
  gap: 24px;
  display: flex;
  align-items: center;
  flex: 1;

  h6 {
    color: ${theme.colors.primary.default};
  }

  p {
    font-size: 20px;
    color: ${theme.colors.gray[200]};
    text-align: left;
    line-height: 150%;
    flex-shrink: 0;
  }
`

export const Answer = styled.p`
  color: ${theme.colors.gray[300]};
  line-height: 150%;
  margin-top: 16px;
  max-width: 536px;
  text-align: left;
  margin-left: 50px;
  animation: slideDown 0.6s ease;

  @keyframes slideDown {
    0% {
      transform: translateY(-50%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

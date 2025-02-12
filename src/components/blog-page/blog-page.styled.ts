import styled from "styled-components"
import { theme } from "@/utils/tailwind-theme"

export const QuoteContainer = styled.div`
  p {
    font-size: 18px;
    color: ${theme.colors.gray[200]};
  }
`

export const ContentContainer = styled.div`
  margin: 0 auto;
  margin-top: 44px;
  max-width: 800px;
  width: 100%;

  p:nth-child(2) {
    font-size: 28px;
    margin: 32px 0 16px;
  }

  p {
    font-size: 18px;
    color: ${theme.colors.gray[400]};
    line-height: 170%;
    margin: 12px 0 16px;
  }

  iframe {
    width: 100%;
    height: 496px;
  }
`

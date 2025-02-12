import styled from "styled-components"
import { theme } from "@/utils/tailwind-theme"

export const QuoteContainer = styled.div`
  p {
    font-size: 14px;
    color: ${theme.colors.gray[200]};

    @media (min-width: 1024px) {
      font-size: 18px;
    }
  }
`

export const ContentContainer = styled.div`
  margin: 0 auto;
  margin-top: 32px;
  max-width: 800px;
  width: 100%;

  @media (min-width: 1024px) {
    margin-top: 44px;
  }

  p:nth-child(2) {
    font-size: 24px;
    margin: 32px 0 16px;

    @media (min-width: 1024px) {
      font-size: 28px;
    }
  }

  p {
    font-size: 16px;
    color: ${theme.colors.gray[400]};
    line-height: 170%;
    margin: 12px 0 16px;

    @media (min-width: 1024px) {
      font-size: 18px;
    }
  }

  iframe {
    width: 100%;

    @media (min-width: 1024px) {
      height: 496px;
    }
  }
`

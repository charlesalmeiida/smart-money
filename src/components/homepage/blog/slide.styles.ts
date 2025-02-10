import styled from "styled-components"
import { theme } from "@/utils/tailwind-theme"

export const ContainerPagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 90px;
  gap: 14px;

  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background-color: ${theme.colors.primary.default};
    opacity: 100;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    background-color: transparent;
    border: ${theme.colors.primary.default} 1px solid;
  }
`

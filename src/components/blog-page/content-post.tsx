"use client"

import { ContentContainer } from "./blog-page.styled"

interface ContentPostProps {
  content: string
}

export function ContentPost({ content }: ContentPostProps) {
  return (
    <ContentContainer>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </ContentContainer>
  )
}

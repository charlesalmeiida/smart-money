"use client"

import { QuoteContainer } from "./blog-page.styled"

interface QuoteProps {
  quote: string
}

export function Quote({ quote }: QuoteProps) {
  return (
    <div className="py-7 px-10 bg-neutral-gray01 text-lg leading-8 max-w-[800px] w-full mx-auto mt-16">
      <QuoteContainer>
        <div dangerouslySetInnerHTML={{ __html: quote }} />
      </QuoteContainer>
    </div>
  )
}

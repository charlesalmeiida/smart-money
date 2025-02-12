import { HeroSection } from "@/components/homepage/hero"
import { AboutSection } from "@/components/homepage/about"
import { BannersSection } from "@/components/homepage/banners"
import { FaqSection } from "@/components/homepage/faq"
import { BlogSection } from "@/components/homepage/blog"
import { AdvantagesSection } from "@/components/homepage/advantages"

import { client } from "@/sanity/lib/client"

export default async function Home() {
  const query = `*[_type == "homepage"][0]{
    title,
    subtitle,
    form, 
    buttonCta
  }`
  const { title, subtitle, buttonCta, form } = await client.fetch(query)

  return (
    <>
      <HeroSection
        title={title}
        subtitle={subtitle}
        buttonCTA={buttonCta}
        titleForm={form}
      />
      <AboutSection />
      <BlogSection />
      <AdvantagesSection />
      <BannersSection />
      <FaqSection />
    </>
  )
}

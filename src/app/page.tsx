import { HeroSection } from "@/components/homepage/hero"
import { AboutSection } from "@/components/homepage/about"
import { BannersSection } from "@/components/homepage/banners"
import { FaqSection } from "@/components/homepage/faq"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <BannersSection />
      <FaqSection />
    </>
  )
}

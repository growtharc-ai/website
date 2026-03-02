import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { HowItWorks } from '@/components/sections/how-it-works'
import { Results } from '@/components/sections/results'
import { About } from '@/components/sections/about'
import { CTASection } from '@/components/sections/cta-section'
import { Contact } from '@/components/sections/contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <HowItWorks />
      <Results />
      <About />
      <CTASection />
      <Contact />
    </main>
  )
}

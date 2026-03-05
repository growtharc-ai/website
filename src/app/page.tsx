import dynamic from 'next/dynamic'
import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { AiAcross } from '@/components/sections/ai-across'
import { HowItWorks } from '@/components/sections/how-it-works'
import { Results } from '@/components/sections/results'
import { About } from '@/components/sections/about'
import { CTASection } from '@/components/sections/cta-section'

const Contact = dynamic(() =>
  import('@/components/sections/contact').then((m) => m.Contact)
)

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <AiAcross />
      <HowItWorks />
      <Results />
      <About />
      <CTASection />
      <Contact />
    </main>
  )
}

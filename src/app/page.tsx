import dynamic from 'next/dynamic'
import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { Footer } from '@/components/sections/footer'

const HowItWorks = dynamic(() => import('@/components/sections/how-it-works').then(m => ({ default: m.HowItWorks })))
const Results = dynamic(() => import('@/components/sections/results').then(m => ({ default: m.Results })))
const About = dynamic(() => import('@/components/sections/about').then(m => ({ default: m.About })))
const CTASection = dynamic(() => import('@/components/sections/cta-section').then(m => ({ default: m.CTASection })))
const Contact = dynamic(() => import('@/components/sections/contact').then(m => ({ default: m.Contact })))

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Results />
        <About />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

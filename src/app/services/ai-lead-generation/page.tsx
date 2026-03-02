import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { LeadGenHero } from '@/components/sections/lead-gen-hero'
import { LeadGenFeatures } from '@/components/sections/lead-gen-features'
import { LeadGenHowItWorks } from '@/components/sections/lead-gen-how-it-works'
import { LeadGenMetrics } from '@/components/sections/lead-gen-metrics'
import { LeadGenCTA } from '@/components/sections/lead-gen-cta'
import { Footer } from '@/components/sections/footer'

export const metadata: Metadata = {
  title: 'AI Lead Generation — Growth Arc',
  description:
    'Fill your pipeline with qualified opportunities using AI-powered prospecting, automated outreach, and intelligent lead scoring. Growth Arc delivers leads ready to buy.',
  openGraph: {
    title: 'AI Lead Generation — Growth Arc',
    description:
      'Fill your pipeline with qualified opportunities using AI-powered prospecting, automated outreach, and intelligent lead scoring.',
    url: 'https://growtharc.ai/services/ai-lead-generation',
    siteName: 'Growth Arc',
    images: [
      {
        url: '/og-image-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Growth Arc — AI Lead Generation',
      },
    ],
    locale: 'en_NZ',
    type: 'website',
  },
}

export default function AILeadGenerationPage() {
  return (
    <>
      <Navigation />
      <main>
        <LeadGenHero />
        <LeadGenFeatures />
        <LeadGenHowItWorks />
        <LeadGenMetrics />
        <LeadGenCTA />
      </main>
      <Footer />
    </>
  )
}

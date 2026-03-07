import type { Metadata } from 'next'
import { RoiCalculator } from '@/components/roi-calculator'

export const metadata: Metadata = {
  title: 'AI ROI Calculator — Growth Arc | See How Much AI Can Save Your Business',
  description:
    'Calculate your potential AI savings in 60 seconds. See how much time and money AI automation, chatbots, and CRM solutions could save your business.',
  openGraph: {
    title: 'AI ROI Calculator — Growth Arc | See How Much AI Can Save Your Business',
    description:
      'Calculate your potential AI savings in 60 seconds. See how much time and money AI automation, chatbots, and CRM solutions could save your business.',
    url: 'https://www.growtharc.ai/tools/roi-calculator',
    siteName: 'Growth Arc',
    images: [{ url: '/og-image-1200x630.png', width: 1200, height: 630 }],
    type: 'website',
  },
}

export default function RoiCalculatorPage() {
  return (
    <main className="min-h-screen pt-[72px]" style={{ background: '#07080E' }}>
      {/* Hero */}
      <section className="px-6 pt-16 pb-8 md:pt-24 md:pb-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-wider text-[var(--ga-green)] uppercase">
            Free Tool
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            AI{' '}
            <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
              ROI Calculator
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/50">
            See how much time and money AI could save your business. Answer a few
            questions and get an instant estimate.
          </p>
        </div>
      </section>

      <RoiCalculator />
    </main>
  )
}

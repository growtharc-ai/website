import type { Metadata } from 'next'
import { AiReadinessQuiz } from '@/components/ai-readiness-quiz'

export const metadata: Metadata = {
  title: 'AI Readiness Assessment — Growth Arc | How Ready Is Your Business for AI?',
  description:
    'Take our free 2-minute AI readiness quiz. Get a personalised score and recommendations for how AI can transform your business.',
  openGraph: {
    title: 'AI Readiness Assessment — Growth Arc | How Ready Is Your Business for AI?',
    description:
      'Take our free 2-minute AI readiness quiz. Get a personalised score and recommendations for how AI can transform your business.',
    url: 'https://www.growtharc.ai/tools/ai-readiness',
    siteName: 'Growth Arc',
    images: [{ url: '/og-image-1200x630.png', width: 1200, height: 630 }],
    type: 'website',
  },
}

export default function AiReadinessPage() {
  return (
    <main className="min-h-screen pt-[72px]" style={{ background: '#07080E' }}>
      {/* Hero */}
      <section className="px-6 pt-16 pb-8 md:pt-24 md:pb-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-wider text-[var(--ga-green)] uppercase">
            Free Assessment
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            AI{' '}
            <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
              Readiness Assessment
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/50">
            Is your business ready for AI? Take this 2-minute quiz and get a
            personalised readiness score with tailored recommendations.
          </p>
        </div>
      </section>

      <AiReadinessQuiz />
    </main>
  )
}

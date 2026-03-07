import type { Metadata } from 'next'
import { WebsiteAudit } from '@/components/website-audit'

export const metadata: Metadata = {
  title: 'AI Website Audit — Growth Arc | Free SEO & Performance Analysis',
  description:
    'Enter your URL and get an instant AI-powered audit of your website\'s SEO, performance, accessibility, and AI-readiness. Powered by Google PageSpeed Insights.',
  openGraph: {
    title: 'AI Website Audit — Growth Arc | Free SEO & Performance Analysis',
    description:
      'Enter your URL and get an instant AI-powered audit powered by Google PageSpeed Insights and AI analysis.',
    url: 'https://www.growtharc.ai/tools/website-audit',
    siteName: 'Growth Arc',
    images: [{ url: '/og-image-1200x630.png', width: 1200, height: 630 }],
    type: 'website',
  },
}

export default function WebsiteAuditPage() {
  return (
    <main className="min-h-screen pt-[72px]" style={{ background: '#07080E' }}>
      <section className="px-6 pt-16 pb-8 md:pt-24 md:pb-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-wider text-[var(--ga-green)] uppercase">
            Free Tool
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            AI{' '}
            <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
              Website Audit
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/50">
            Enter your URL and get an instant AI-powered audit of your
            website&apos;s SEO, performance, accessibility, and AI-readiness.
          </p>
        </div>
      </section>

      <WebsiteAudit />
    </main>
  )
}

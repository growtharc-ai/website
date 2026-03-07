import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock, User } from 'lucide-react'
import { FadeIn } from '@/components/motion/fade-in'

export const metadata: Metadata = {
  title:
    'HubSpot vs Salesforce vs Dynamics 365: Which CRM Fits Your Business? — Growth Arc',
  description:
    'We break down the three biggest CRM platforms by cost, complexity, and best fit.',
  openGraph: {
    title:
      'HubSpot vs Salesforce vs Dynamics 365: Which CRM Fits Your Business? — Growth Arc',
    description:
      'We break down the three biggest CRM platforms by cost, complexity, and best fit.',
    url: 'https://www.growtharc.ai/blog/crm-comparison',
    siteName: 'Growth Arc',
    images: [
      {
        url: '/og-image-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'HubSpot vs Salesforce vs Dynamics 365: Which CRM Fits Your Business?',
      },
    ],
    locale: 'en_NZ',
    type: 'article',
  },
}

export default function BlogPost() {
  return (
    <main>
      {/* Hero */}
      <section
        className="px-6 pt-32 pb-16 md:pt-40 md:pb-20"
        style={{ background: 'linear-gradient(160deg, #060710 0%, #0A0F20 100%)' }}
      >
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-white/40 transition-colors hover:text-white/70"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Blog
            </Link>

            <div className="mt-6 flex items-center gap-3">
              <span className="rounded-full bg-[var(--ga-green)]/10 px-3 py-1 text-xs font-semibold text-[var(--ga-green)]">
                CRM
              </span>
              <span className="flex items-center gap-1 text-xs text-white/30">
                <Clock className="h-3 w-3" />
                6 min read
              </span>
            </div>

            <h1 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              HubSpot vs Salesforce vs Dynamics 365: Which CRM Fits Your Business?
            </h1>

            <div className="mt-6 flex items-center gap-4 text-sm text-white/40">
              <span className="flex items-center gap-1.5">
                <User className="h-3.5 w-3.5" />
                Growth Arc Team
              </span>
              <span>March 2026</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Article body */}
      <section className="px-6 py-16 md:py-20" style={{ background: '#07080E' }}>
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="prose prose-invert max-w-none text-white/60 [&_p]:text-[16px] [&_p]:leading-relaxed">
              <p>
                Choosing the right CRM is one of the most impactful decisions a growing
                business can make. The right platform streamlines your sales pipeline,
                improves customer relationships, and gives you data-driven clarity on
                what&apos;s working.
              </p>
              <p>
                But with HubSpot, Salesforce, and Microsoft Dynamics 365 all competing for
                your attention, it&apos;s not always obvious which one is the best fit. Let&apos;s
                break it down.
              </p>
              <p className="mt-8 rounded-xl border border-white/5 bg-white/[0.02] p-6 text-center text-white/30 italic">
                Full article coming soon.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 md:py-20" style={{ background: '#0A0C14' }}>
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="text-2xl font-bold md:text-3xl">
              Need help choosing a CRM?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/50">
              We implement HubSpot, Salesforce, Dynamics 365, and custom CRMs. Book a free
              call and we&apos;ll recommend the right fit for your business.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                Book a Free Call
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-8 py-3.5 text-sm font-semibold text-white/70 transition-all hover:border-white/25 hover:text-white"
              >
                More Articles
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}

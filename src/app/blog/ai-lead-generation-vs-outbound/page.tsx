import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock, User } from 'lucide-react'
import { FadeIn } from '@/components/motion/fade-in'

export const metadata: Metadata = {
  title: 'Why AI Lead Generation Beats Traditional Outbound — Growth Arc',
  description:
    "AI agents don't sleep, don't forget to follow up, and learn from every interaction. Here's why that matters.",
  openGraph: {
    title: 'Why AI Lead Generation Beats Traditional Outbound — Growth Arc',
    description:
      "AI agents don't sleep, don't forget to follow up, and learn from every interaction. Here's why that matters.",
    url: 'https://growtharc.ai/blog/ai-lead-generation-vs-outbound',
    siteName: 'Growth Arc',
    images: [
      {
        url: '/og-image-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Why AI Lead Generation Beats Traditional Outbound',
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
                Marketing
              </span>
              <span className="flex items-center gap-1 text-xs text-white/30">
                <Clock className="h-3 w-3" />
                5 min read
              </span>
            </div>

            <h1 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Why AI Lead Generation Beats Traditional Outbound
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
                Traditional outbound relies on manual effort — cold calls, mass emails, and
                follow-up spreadsheets. It works, but it doesn&apos;t scale. And it burns out
                your sales team in the process.
              </p>
              <p>
                AI-powered lead generation flips the model. Intelligent agents prospect,
                qualify, and nurture leads around the clock — learning from every interaction
                and improving over time.
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
              Ready to automate your lead generation?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/50">
              Our AI agents find, qualify, and nurture leads while you focus on closing
              deals. Book a free call to see how.
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

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Sparkles,
  Brain,
  LineChart,
  Eye,
  Zap,
  Handshake,
  Lightbulb,
  Target,
  Shield,
  Layers,
  ArrowRight,
} from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { FadeIn } from '@/components/motion/fade-in'
import {
  StaggerContainer,
  StaggerItem,
} from '@/components/motion/stagger-children'
import { Footer } from '@/components/sections/footer'

export const metadata: Metadata = {
  title: 'About — Growth Arc',
  description:
    'Growth Arc is an AI-first marketing agency helping businesses grow with intelligent automation, data-driven strategy, and cutting-edge AI tools. Based in New Zealand, serving globally.',
  openGraph: {
    title: 'About — Growth Arc',
    description:
      'AI-first marketing agency helping businesses grow with intelligent automation and data-driven strategy.',
    url: 'https://growtharc.ai/about',
    siteName: 'Growth Arc',
    images: [
      {
        url: '/og-image-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Growth Arc — About Us',
      },
    ],
    locale: 'en_NZ',
    type: 'website',
  },
}

const values = [
  {
    number: '01',
    icon: Brain,
    title: 'AI-Native Thinking',
    description:
      'We don\'t retrofit AI onto old playbooks. Every strategy starts with what AI makes possible today.',
    tint: 'blue' as const,
  },
  {
    number: '02',
    icon: LineChart,
    title: 'Results Over Activity',
    description:
      'Vanity metrics don\'t pay the bills. We measure pipeline, revenue, and ROI — the numbers that matter.',
    tint: 'green' as const,
  },
  {
    number: '03',
    icon: Eye,
    title: 'Radical Transparency',
    description:
      'Real-time dashboards, honest reporting, and no hidden fees. You always know exactly where you stand.',
    tint: 'blue' as const,
  },
  {
    number: '04',
    icon: Zap,
    title: 'Speed & Agility',
    description:
      'Markets move fast. We deploy, test, and iterate in days — not quarters. Speed is a competitive advantage.',
    tint: 'green' as const,
  },
  {
    number: '05',
    icon: Handshake,
    title: 'Partnership, Not Vendor',
    description:
      'We embed in your team, learn your business, and share your goals. Your growth is our growth.',
    tint: 'blue' as const,
  },
  {
    number: '06',
    icon: Lightbulb,
    title: 'Continuous Innovation',
    description:
      'AI evolves weekly. We stay ahead of every breakthrough so your marketing never falls behind.',
    tint: 'green' as const,
  },
]

const differentiators = [
  {
    icon: Brain,
    title: 'AI-Native',
    description:
      'Every strategy, tool, and workflow is built AI-first from the ground up.',
  },
  {
    icon: LineChart,
    title: 'Data-Driven',
    description:
      'We track what matters — pipeline, revenue, and ROI — so you see the real picture.',
  },
  {
    icon: Shield,
    title: 'Transparent',
    description:
      'Real-time dashboards, clear reporting, and no lock-in contracts.',
  },
  {
    icon: Layers,
    title: 'Full-Stack',
    description:
      'From lead gen to close, SEO to ads — one integrated team replaces a dozen tools.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* ─── Hero ─── */}
        <section
          className="relative flex min-h-[60vh] items-center overflow-hidden px-6 pt-32 pb-20"
          style={{
            background: 'linear-gradient(160deg, #060710 0%, #0A0F20 100%)',
          }}
        >
          {/* Ambient glows */}
          <div className="pointer-events-none absolute top-0 left-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--ga-blue)]/10 blur-[120px]" />
          <div className="pointer-events-none absolute right-1/4 bottom-0 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-[var(--ga-green)]/8 blur-[100px]" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <FadeIn>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium tracking-wide text-white/60 uppercase">
                <Sparkles className="h-3.5 w-3.5 text-[var(--ga-green)]" />
                Our Story
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="mt-8 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl" style={{ lineHeight: 1.1, letterSpacing: '-1.5px' }}>
                Built for the{' '}
                <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
                  AI Era
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/50 md:text-xl">
                We started Growth Arc because we believe every business deserves
                marketing that&apos;s intelligent, measurable, and built to scale
                — powered by AI from day one.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] px-7 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
                >
                  Work With Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/#services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3 text-sm font-semibold text-white/70 transition-colors hover:bg-white/[0.08] hover:text-white"
                >
                  Our Services
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── Story ─── */}
        <section
          className="px-6 py-24 md:py-32"
          style={{
            background: 'linear-gradient(180deg, #0A0F20 0%, #07080E 100%)',
          }}
        >
          <div className="mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-2">
            {/* Left — text */}
            <FadeIn>
              <p className="text-sm font-semibold tracking-wider text-[var(--ga-green)] uppercase">
                Who We Are
              </p>
              <h2
                className="mt-3 text-3xl font-bold tracking-tight md:text-4xl"
                style={{ letterSpacing: '-0.5px' }}
              >
                Marketing, Reimagined with{' '}
                <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
                  AI
                </span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/50">
                Growth Arc was founded on a simple belief: every business
                deserves access to the same AI-powered marketing tools that drive
                the world&apos;s fastest-growing companies.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white/50">
                Based in New Zealand and serving clients globally, we combine
                deep marketing expertise with cutting-edge artificial
                intelligence to deliver strategies that don&apos;t just work —
                they scale.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white/50">
                From AI-powered lead generation to automated sales pipelines, we
                build the marketing infrastructure that turns growth from a goal
                into a system.
              </p>
            </FadeIn>

            {/* Right — decorative glass cards */}
            <FadeIn delay={0.15} direction="right">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm sm:col-span-2">
                  <p className="text-sm font-medium text-white/30 uppercase">
                    Founded
                  </p>
                  <p className="mt-1 text-3xl font-bold bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
                    2024
                  </p>
                  <p className="mt-1 text-sm text-white/40">
                    New Zealand — NextGen AI Marketing Ltd
                  </p>
                </div>
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm">
                  <p className="text-sm font-medium text-white/30 uppercase">
                    Reach
                  </p>
                  <p className="mt-1 text-3xl font-bold bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
                    Global
                  </p>
                  <p className="mt-1 text-sm text-white/40">
                    Clients across NZ, AU & beyond
                  </p>
                </div>
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm">
                  <p className="text-sm font-medium text-white/30 uppercase">
                    Approach
                  </p>
                  <p className="mt-1 text-3xl font-bold bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
                    AI-First
                  </p>
                  <p className="mt-1 text-sm text-white/40">
                    Every tool & strategy
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── Vision & Mission ─── */}
        <section className="px-6 py-24 md:py-32 bg-[#07080E]">
          <div className="mx-auto max-w-7xl">
            <FadeIn>
              <p className="text-center text-sm font-semibold tracking-wider text-[var(--ga-green)] uppercase">
                Vision &amp; Mission
              </p>
              <h2
                className="mx-auto mt-3 max-w-2xl text-center text-3xl font-bold tracking-tight md:text-4xl"
                style={{ letterSpacing: '-0.5px' }}
              >
                Where We&apos;re{' '}
                <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
                  Headed
                </span>
              </h2>
            </FadeIn>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              <FadeIn delay={0.1}>
                <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 md:p-10">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--ga-blue)] to-transparent" />
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--ga-blue)]/10">
                    <Eye className="h-6 w-6 text-[var(--ga-blue)]" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">Our Vision</h3>
                  <p className="mt-3 text-lg leading-relaxed text-white/50">
                    A world where every business — regardless of size or budget —
                    can grow with the power of AI marketing.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 md:p-10">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--ga-green)] to-transparent" />
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--ga-green)]/10">
                    <Target className="h-6 w-6 text-[var(--ga-green)]" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">Our Mission</h3>
                  <p className="mt-3 text-lg leading-relaxed text-white/50">
                    Make AI-powered marketing accessible, effective, and
                    transparent — so businesses can focus on what they do best
                    while their growth runs on autopilot.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ─── Values ─── */}
        <section
          className="px-6 py-24 md:py-32"
          style={{
            background: 'linear-gradient(180deg, #07080E 0%, #0A0D16 100%)',
          }}
        >
          <div className="mx-auto max-w-7xl">
            <FadeIn>
              <p className="text-center text-sm font-semibold tracking-wider text-[var(--ga-green)] uppercase">
                Our Values
              </p>
              <h2
                className="mx-auto mt-3 max-w-2xl text-center text-3xl font-bold tracking-tight md:text-4xl"
                style={{ letterSpacing: '-0.5px' }}
              >
                What{' '}
                <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
                  Drives Us
                </span>
              </h2>
            </FadeIn>

            <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <StaggerItem key={value.title}>
                  <div
                    className={`relative overflow-hidden rounded-2xl border border-white/5 p-7 ${
                      value.tint === 'blue'
                        ? 'bg-[var(--ga-blue)]/[0.03]'
                        : 'bg-[var(--ga-green)]/[0.03]'
                    }`}
                  >
                    {/* Watermark number */}
                    <span className="pointer-events-none absolute top-4 right-5 text-5xl font-bold text-white/[0.03] select-none">
                      {value.number}
                    </span>

                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                        value.tint === 'blue'
                          ? 'bg-[var(--ga-blue)]/10'
                          : 'bg-[var(--ga-green)]/10'
                      }`}
                    >
                      <value.icon
                        className={`h-5 w-5 ${
                          value.tint === 'blue'
                            ? 'text-[var(--ga-blue)]'
                            : 'text-[var(--ga-green)]'
                        }`}
                      />
                    </div>
                    <h3 className="mt-4 text-base font-semibold">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/40">
                      {value.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ─── Differentiators ─── */}
        <section className="px-6 py-24 md:py-32 bg-[#07080E]">
          <div className="mx-auto max-w-7xl">
            <FadeIn>
              <p className="text-center text-sm font-semibold tracking-wider text-[var(--ga-green)] uppercase">
                Why Growth Arc
              </p>
              <h2
                className="mx-auto mt-3 max-w-2xl text-center text-3xl font-bold tracking-tight md:text-4xl"
                style={{ letterSpacing: '-0.5px' }}
              >
                What Sets Us{' '}
                <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
                  Apart
                </span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mt-14 overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02]">
                <div className="grid divide-y divide-white/5 md:grid-cols-2 md:divide-y-0 md:divide-x">
                  {differentiators.map((item, i) => (
                    <div
                      key={item.title}
                      className={`p-8 md:p-10 ${
                        i >= 2 ? 'border-t border-white/5' : ''
                      }`}
                    >
                      <item.icon className="h-6 w-6 text-[var(--ga-blue)]" />
                      <h3 className="mt-4 text-lg font-semibold">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/40">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="px-6 py-24 md:py-32 bg-[#07080E]">
          <div className="mx-auto max-w-4xl">
            <FadeIn>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--ga-blue)]/20 to-[var(--ga-green)]/20 p-12 text-center md:p-16">
                {/* Gradient border glow */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/10" />
                <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-[var(--ga-blue)]/20 blur-[80px]" />

                <h2
                  className="relative text-3xl font-bold tracking-tight md:text-4xl"
                  style={{ letterSpacing: '-0.5px' }}
                >
                  Let&apos;s Build Something{' '}
                  <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
                    Together
                  </span>
                </h2>
                <p className="relative mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/50">
                  Ready to see what AI-powered marketing can do for your
                  business? Let&apos;s talk.
                </p>
                <div className="relative mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
                  >
                    Get Your Free Audit
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

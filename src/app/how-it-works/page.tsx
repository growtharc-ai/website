import type { Metadata } from 'next'
import {
  Sparkles,
  Search,
  Lightbulb,
  Wrench,
  Rocket,
  ArrowRight,
  Zap,
  BarChart3,
  RefreshCw,
  Eye,
  Clock,
  Users,
  TrendingUp,
  ShieldCheck,
} from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { FadeIn } from '@/components/motion/fade-in'
import {
  StaggerContainer,
  StaggerItem,
} from '@/components/motion/stagger-children'
import { Counter } from '@/components/motion/counter'
import { Footer } from '@/components/sections/footer'

export const metadata: Metadata = {
  title: 'How It Works — Growth Arc',
  description:
    'Our proven 4-step process takes you from audit to scale — powered by AI at every stage. Discover how Growth Arc drives measurable growth for your business.',
  openGraph: {
    title: 'How It Works — Growth Arc',
    description:
      'A proven 4-step AI-powered process: Audit, Strategy, Build, Scale. See how we drive measurable growth.',
    url: 'https://growtharc.ai/how-it-works',
    siteName: 'Growth Arc',
    images: [
      {
        url: '/og-image-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Growth Arc — How It Works',
      },
    ],
    locale: 'en_NZ',
    type: 'website',
  },
}

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Audit',
    description:
      'We start by understanding where you are. A deep dive into your current marketing, tech stack, and data reveals gaps, inefficiencies, and quick wins that set the foundation for everything that follows.',
    bullets: [
      'Full marketing & tech stack review',
      'Competitor and market analysis',
      'Quick-win opportunities identified',
    ],
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Strategy',
    description:
      'Armed with data, we build a custom AI-powered growth plan tailored to your goals, market, and budget. Every recommendation is backed by numbers, not guesswork.',
    bullets: [
      'Custom growth roadmap & KPIs',
      'Channel and audience prioritisation',
      'AI tool selection & integration plan',
    ],
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Build',
    description:
      'We roll up our sleeves and execute. Automations go live, campaigns launch, and your tools are connected into one seamless system that works around the clock.',
    bullets: [
      'Campaign creation & launch',
      'Automation & CRM setup',
      'Tracking, attribution & dashboards',
    ],
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Scale',
    description:
      'Growth doesn\'t stop at launch. We continuously optimise, expand into new channels, and compound your results with AI-driven iteration and testing.',
    bullets: [
      'Continuous A/B testing & optimisation',
      'New channel expansion',
      'Monthly reporting & strategy refinement',
    ],
  },
]

const differentiators = [
  {
    icon: Zap,
    title: 'AI at Every Stage',
    description:
      'From prospecting to reporting, AI handles the heavy lifting so your team can focus on closing deals and building relationships.',
    tint: 'blue' as const,
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Decisions',
    description:
      'Every move is backed by real data. We track, measure, and iterate so your budget goes where it generates the highest return.',
    tint: 'green' as const,
  },
  {
    icon: RefreshCw,
    title: 'Rapid Iteration',
    description:
      'We deploy, test, and refine in days — not quarters. Speed is a competitive advantage, and our process is built for it.',
    tint: 'blue' as const,
  },
  {
    icon: Eye,
    title: 'Full Transparency',
    description:
      'Real-time dashboards, honest reporting, and no hidden fees. You always know exactly what we\'re doing and why.',
    tint: 'green' as const,
  },
]

const metrics = [
  {
    icon: Clock,
    value: 24,
    suffix: 'hr',
    label: 'Response Time',
  },
  {
    icon: Users,
    value: 90,
    suffix: '%',
    label: 'Client Retention',
  },
  {
    icon: TrendingUp,
    value: 3,
    suffix: 'x',
    label: 'Average ROI',
  },
  {
    icon: ShieldCheck,
    value: 30,
    suffix: '-day',
    label: 'Time to First Results',
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* ─── Hero ─── */}
        <section
          className="relative flex min-h-[50vh] items-center overflow-hidden px-6 pt-32 pb-20"
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
                Our Process
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1
                className="mt-8 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
                style={{ lineHeight: 1.1, letterSpacing: '-1.5px' }}
              >
                From Audit to{' '}
                <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
                  Scale
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/50 md:text-xl">
                A proven four-step process that takes you from where you are to
                where you want to be — powered by AI at every stage.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] px-7 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/#services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3 text-sm font-semibold text-white/70 transition-colors hover:bg-white/[0.08] hover:text-white"
                >
                  Our Services
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── The 4 Steps (Expanded) ─── */}
        <section
          className="px-6 py-24 md:py-32"
          style={{
            background: 'linear-gradient(180deg, #0A0F20 0%, #07080E 100%)',
          }}
        >
          <div className="mx-auto max-w-7xl">
            <FadeIn>
              <p className="text-center text-sm font-semibold tracking-wider text-[var(--ga-green)] uppercase">
                The Process
              </p>
              <h2
                className="mx-auto mt-3 max-w-2xl text-center text-3xl font-bold tracking-tight md:text-4xl"
                style={{ letterSpacing: '-0.5px' }}
              >
                Four Steps to{' '}
                <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
                  Measurable Growth
                </span>
              </h2>
            </FadeIn>

            <div className="mt-16 space-y-12 md:space-y-20">
              {steps.map((step, i) => (
                <FadeIn key={step.number} delay={0.1}>
                  <div
                    className={`grid items-center gap-10 md:grid-cols-2 ${
                      i % 2 === 1 ? 'md:direction-rtl' : ''
                    }`}
                  >
                    {/* Text side */}
                    <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                      <p className="text-xs font-bold tracking-wider text-[var(--ga-green)]/60 uppercase">
                        Step {step.number}
                      </p>
                      <h3
                        className="mt-2 text-2xl font-bold tracking-tight md:text-3xl"
                        style={{ letterSpacing: '-0.5px' }}
                      >
                        {step.title}
                      </h3>
                      <p className="mt-4 text-lg leading-relaxed text-white/50">
                        {step.description}
                      </p>
                      <ul className="mt-6 space-y-3">
                        {step.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-center gap-3 text-sm text-white/60"
                          >
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--ga-green)]/10">
                              <ArrowRight className="h-3 w-3 text-[var(--ga-green)]" />
                            </span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Card side */}
                    <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                      <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-10 md:p-12">
                        {/* Top gradient line */}
                        <div
                          className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${
                            i % 2 === 0
                              ? 'via-[var(--ga-blue)]'
                              : 'via-[var(--ga-green)]'
                          } to-transparent`}
                        />
                        {/* Watermark number */}
                        <span className="pointer-events-none absolute right-6 bottom-4 text-8xl font-bold text-white/[0.02] select-none">
                          {step.number}
                        </span>
                        <div
                          className={`flex h-16 w-16 items-center justify-center rounded-2xl ${
                            i % 2 === 0
                              ? 'bg-[var(--ga-blue)]/10'
                              : 'bg-[var(--ga-green)]/10'
                          }`}
                        >
                          <step.icon
                            className={`h-8 w-8 ${
                              i % 2 === 0
                                ? 'text-[var(--ga-blue)]'
                                : 'text-[var(--ga-green)]'
                            }`}
                          />
                        </div>
                        <p className="mt-6 text-3xl font-bold">{step.title}</p>
                        <p className="mt-2 text-sm leading-relaxed text-white/40">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Why This Works ─── */}
        <section className="px-6 py-24 md:py-32 bg-[#07080E]">
          <div className="mx-auto max-w-7xl">
            <FadeIn>
              <p className="text-center text-sm font-semibold tracking-wider text-[var(--ga-green)] uppercase">
                Why It Works
              </p>
              <h2
                className="mx-auto mt-3 max-w-2xl text-center text-3xl font-bold tracking-tight md:text-4xl"
                style={{ letterSpacing: '-0.5px' }}
              >
                Built for{' '}
                <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
                  Results
                </span>
              </h2>
            </FadeIn>

            <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {differentiators.map((item) => (
                <StaggerItem key={item.title}>
                  <div
                    className={`relative overflow-hidden rounded-2xl border border-white/5 p-7 ${
                      item.tint === 'blue'
                        ? 'bg-[var(--ga-blue)]/[0.03]'
                        : 'bg-[var(--ga-green)]/[0.03]'
                    }`}
                  >
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                        item.tint === 'blue'
                          ? 'bg-[var(--ga-blue)]/10'
                          : 'bg-[var(--ga-green)]/10'
                      }`}
                    >
                      <item.icon
                        className={`h-5 w-5 ${
                          item.tint === 'blue'
                            ? 'text-[var(--ga-blue)]'
                            : 'text-[var(--ga-green)]'
                        }`}
                      />
                    </div>
                    <h3 className="mt-4 text-base font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/40">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ─── Results / Metrics ─── */}
        <section
          className="px-6 py-24 md:py-32"
          style={{
            background: 'linear-gradient(180deg, #07080E 0%, #0A0D16 100%)',
          }}
        >
          <div className="mx-auto max-w-7xl">
            <FadeIn>
              <p className="text-center text-sm font-semibold tracking-wider text-[var(--ga-green)] uppercase">
                The Numbers
              </p>
              <h2
                className="mx-auto mt-3 max-w-2xl text-center text-3xl font-bold tracking-tight md:text-4xl"
                style={{ letterSpacing: '-0.5px' }}
              >
                Results That{' '}
                <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
                  Speak
                </span>
              </h2>
            </FadeIn>

            <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((metric) => (
                <StaggerItem key={metric.label}>
                  <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--ga-blue)]/10">
                      <metric.icon className="h-6 w-6 text-[var(--ga-blue)]" />
                    </div>
                    <p className="mt-5 text-4xl font-bold bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
                      <Counter target={metric.value} suffix={metric.suffix} />
                    </p>
                    <p className="mt-2 text-sm font-medium text-white/40">
                      {metric.label}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
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
                  Ready to Start{' '}
                  <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
                    Growing?
                  </span>
                </h2>
                <p className="relative mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/50">
                  Let&apos;s walk through our process together and build a
                  strategy tailored to your business.
                </p>
                <div className="relative mt-8">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
                  >
                    Get Your Free Audit
                    <ArrowRight className="h-4 w-4" />
                  </a>
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

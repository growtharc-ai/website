import { Brain, LineChart, Shield, Layers } from 'lucide-react'
import { FadeIn } from '@/components/motion/fade-in'

const differentiators = [
  {
    icon: Brain,
    title: 'AI-Native',
    description:
      'We don\'t bolt AI onto old methods. Every strategy, tool, and workflow is built AI-first from the ground up.',
  },
  {
    icon: LineChart,
    title: 'Data-Driven',
    description:
      'No vanity metrics. We track what matters — pipeline, revenue, and ROI — so you always see the real picture.',
  },
  {
    icon: Shield,
    title: 'Transparent',
    description:
      'Real-time dashboards, clear reporting, and no lock-in contracts. You own your data and your results.',
  },
  {
    icon: Layers,
    title: 'Full-Stack',
    description:
      'From lead gen to close, SEO to ads, CRM to analytics — one integrated team replaces a dozen tools.',
  },
]

export function About() {
  return (
    <section
      id="about"
      className="px-6 py-24 md:py-32"
      style={{ background: 'linear-gradient(180deg, #07080E 0%, #0A0D16 100%)' }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Story */}
          <FadeIn>
            <p className="text-sm font-semibold tracking-wider text-[var(--ga-green)] uppercase">
              About Us
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Why{' '}
              <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
                Growth Arc
              </span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/50">
              Growth Arc was founded on a simple belief: every business deserves
              access to the same AI-powered marketing tools that drive the
              world&apos;s fastest-growing companies.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/50">
              Based in New Zealand and serving clients globally, we combine
              deep marketing expertise with cutting-edge AI to deliver
              strategies that don&apos;t just work — they scale.
            </p>
          </FadeIn>

          {/* Differentiators */}
          <div className="grid gap-6 sm:grid-cols-2">
            {differentiators.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
                  <item.icon className="h-6 w-6 text-[var(--ga-blue)]" />
                  <h3 className="mt-3 text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/40">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

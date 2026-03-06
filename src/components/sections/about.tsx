import { Brain, LineChart, Shield, Layers } from 'lucide-react'
import { FadeIn } from '@/components/motion/fade-in'

const differentiators = [
  {
    icon: Brain,
    title: 'AI-Native',
    description:
      'We don\'t bolt AI onto old methods. Every solution — from marketing campaigns to business automation — is built AI-first from the ground up.',
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
      'From marketing to operations, lead gen to automation — one integrated partner replaces a dozen tools and agencies.',
  },
]

export function About() {
  return (
    <section
      id="about"
      className="px-6 py-16 md:py-20"
      style={{ background: '#0C0E16' }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* Story */}
          <FadeIn>
            <p className="text-sm font-semibold tracking-wider text-[var(--ga-green)] uppercase">
              About Us
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              Why{' '}
              <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
                Growth Arc
              </span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/50">
              Growth Arc was founded on a simple belief: every business deserves
              access to the AI tools and automation that drive the
              world&apos;s fastest-growing companies.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/50">
              We&apos;re not a traditional agency. We&apos;re an AI solutions
              company — building intelligent systems that help businesses market
              smarter, operate leaner, and scale faster.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/50">
              Based in New Zealand and serving clients globally, we combine
              deep technical expertise with practical business thinking to
              deliver AI that doesn&apos;t just work — it compounds.
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

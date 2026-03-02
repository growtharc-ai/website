import { Target, Search, Mail, TrendingUp } from 'lucide-react'
import { FadeIn } from '@/components/motion/fade-in'

const steps = [
  {
    number: '01',
    icon: Target,
    title: 'Define ICP',
    description:
      'We work with you to define your ideal customer profile — industry, company size, job titles, pain points, and buying signals.',
  },
  {
    number: '02',
    icon: Search,
    title: 'AI Discovery',
    description:
      'Our AI scans multiple data sources to build a targeted prospect list that matches your ICP with high accuracy.',
  },
  {
    number: '03',
    icon: Mail,
    title: 'Automated Outreach',
    description:
      'Personalised multi-channel sequences engage prospects via email and LinkedIn with messaging that resonates.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Qualify & Convert',
    description:
      'AI scores every response and routes qualified leads to your team — ready for a conversation, not a cold pitch.',
  },
]

export function LeadGenHowItWorks() {
  return (
    <section
      className="px-6 py-24 md:py-32"
      style={{
        background: 'linear-gradient(180deg, #07080E 0%, #0A0D16 100%)',
      }}
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="text-sm font-semibold tracking-wider text-[var(--ga-green)] uppercase">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            From ICP to{' '}
            <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
              Booked Meetings
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/50">
            A four-step process that turns your ideal customer profile into a
            steady stream of qualified sales conversations.
          </p>
        </FadeIn>

        <div className="relative mt-16 grid gap-8 md:grid-cols-4">
          {/* Connecting line (desktop) */}
          <div className="pointer-events-none absolute top-10 right-12 left-12 hidden h-px bg-gradient-to-r from-[var(--ga-blue)]/20 via-[var(--ga-green)]/20 to-[var(--ga-blue)]/20 md:block" />

          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1}>
              <div className="relative text-center md:text-left">
                <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-white/5 bg-[#0D0F18] md:mx-0">
                  <step.icon className="h-8 w-8 text-[var(--ga-blue)]" />
                </div>
                <p className="mt-5 text-xs font-bold tracking-wider text-[var(--ga-green)]/60 uppercase">
                  Step {step.number}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/45">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

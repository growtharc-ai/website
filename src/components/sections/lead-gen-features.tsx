import { Brain, Filter, Mail, Search, BarChart3, Zap } from 'lucide-react'
import { FadeIn } from '@/components/motion/fade-in'
import {
  StaggerContainer,
  StaggerItem,
} from '@/components/motion/stagger-children'

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Prospecting',
    description:
      'Our AI scans thousands of data points to identify companies and decision-makers that match your ideal customer profile.',
    tint: 'blue' as const,
  },
  {
    icon: Filter,
    title: 'Lead Scoring',
    description:
      'Every lead is scored and ranked by intent, fit, and engagement so your team focuses on the highest-value opportunities.',
    tint: 'green' as const,
  },
  {
    icon: Mail,
    title: 'Automated Email Sequences',
    description:
      'Personalised, multi-step email campaigns that nurture prospects from cold outreach to booked meeting — on autopilot.',
    tint: 'blue' as const,
  },
  {
    icon: Search,
    title: 'LinkedIn Outreach',
    description:
      'AI-driven connection requests and messaging sequences that build relationships on the platform where B2B buyers live.',
    tint: 'green' as const,
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description:
      'Track open rates, reply rates, and pipeline value in real time. Know exactly which channels and messages drive results.',
    tint: 'blue' as const,
  },
  {
    icon: Zap,
    title: 'CRM Integration',
    description:
      'Qualified leads flow directly into your CRM with full context — no manual data entry, no missed follow-ups.',
    tint: 'green' as const,
  },
]

const tintStyles = {
  blue: {
    bg: 'bg-[var(--ga-blue)]/10',
    text: 'text-[var(--ga-blue)]',
  },
  green: {
    bg: 'bg-[var(--ga-green)]/10',
    text: 'text-[var(--ga-green)]',
  },
}

export function LeadGenFeatures() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="text-sm font-semibold tracking-wider text-[var(--ga-green)] uppercase">
            Capabilities
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
              Generate Leads
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/50">
            A full-stack lead generation engine — from prospecting and outreach
            to scoring and CRM handoff — powered by AI at every step.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${tintStyles[feature.tint].bg}`}
                >
                  <feature.icon
                    className={`h-6 w-6 ${tintStyles[feature.tint].text}`}
                  />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/45">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

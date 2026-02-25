import {
  Users,
  TrendingUp,
  Zap,
  CalendarCheck,
  Megaphone,
  BarChart3,
} from 'lucide-react'
import { FadeIn } from '@/components/motion/fade-in'
import {
  StaggerContainer,
  StaggerItem,
} from '@/components/motion/stagger-children'

const services = [
  {
    icon: Users,
    title: 'AI Lead Generation',
    description:
      'Intelligent prospecting and automated outreach with AI-powered lead scoring to fill your pipeline with qualified opportunities.',
  },
  {
    icon: TrendingUp,
    title: 'Traffic & SEO',
    description:
      'Data-driven content strategy and technical SEO that drives sustainable organic growth at scale.',
  },
  {
    icon: Zap,
    title: 'Sales Automation',
    description:
      'CRM setup, pipeline automation, and smart follow-up sequences that convert leads while you sleep.',
  },
  {
    icon: CalendarCheck,
    title: 'Smart Appointment Booking',
    description:
      'AI-powered scheduling with automated qualification and reminders to keep your calendar full.',
  },
  {
    icon: Megaphone,
    title: 'Ads Management',
    description:
      'Google, Meta, and LinkedIn campaigns with AI optimisation that maximises every dollar of ad spend.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description:
      'Real-time dashboards with clear attribution and ROI tracking so you always know what\'s working.',
  },
]

export function Services() {
  return (
    <section id="services" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="text-sm font-semibold tracking-wider text-[var(--ga-green)] uppercase">
            What We Do
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
              Grow
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/50">
            Six core services, one integrated strategy. We combine AI tools
            with proven marketing frameworks to drive measurable results.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--ga-blue)]/10">
                  <service.icon className="h-6 w-6 text-[var(--ga-blue)]" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/45">
                  {service.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

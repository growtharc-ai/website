import { Cog, Headset, Receipt, Users } from 'lucide-react'
import { FadeIn } from '@/components/motion/fade-in'

const useCases = [
  {
    icon: Cog,
    title: 'Operations & Workflow',
    description:
      'Automate repetitive tasks — from data entry to document processing — and free your team to focus on high-value work.',
  },
  {
    icon: Headset,
    title: 'Customer Service',
    description:
      'AI agents that handle enquiries, resolve issues, and escalate intelligently — available 24/7 without growing your headcount.',
  },
  {
    icon: Receipt,
    title: 'Finance & Admin',
    description:
      'Smart automation for invoicing, expense tracking, and reporting. Reduce errors and reclaim hours every week.',
  },
  {
    icon: Users,
    title: 'HR & People',
    description:
      'Streamline recruitment screening, onboarding workflows, and employee communications with AI-powered systems.',
  },
]

export function AiAcross() {
  return (
    <section
      className="relative overflow-hidden px-6 py-24 md:py-32"
      style={{ background: 'linear-gradient(180deg, #0A0D16 0%, #07080E 100%)' }}
    >
      {/* Ambient glow behind cards */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--ga-blue)]/[0.04] blur-[100px]" />
      <div className="relative mx-auto max-w-7xl">
        <FadeIn>
          <p className="text-sm font-semibold tracking-wider text-[var(--ga-green)] uppercase">
            Beyond Marketing
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            AI Across Your{' '}
            <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
              Business
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/50">
            Marketing is just the beginning. We build AI solutions that save
            time, reduce costs, and unlock growth across every part of your
            business.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--ga-green)]/20 hover:bg-white/[0.04] hover:shadow-md hover:shadow-[var(--ga-green)]/[0.06]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--ga-green)]/10 transition-colors duration-300 group-hover:bg-[var(--ga-green)]/15">
                  <item.icon className="h-6 w-6 text-[var(--ga-green)] transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/45">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

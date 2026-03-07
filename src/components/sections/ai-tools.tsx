import Link from 'next/link'
import {
  Calculator,
  ClipboardCheck,
  Search,
  MessageCircle,
  ArrowRight,
} from 'lucide-react'
import { FadeIn } from '@/components/motion/fade-in'
import {
  StaggerContainer,
  StaggerItem,
} from '@/components/motion/stagger-children'

const tools = [
  {
    icon: Calculator,
    title: 'AI ROI Calculator',
    description:
      'See how much time and money AI could save your business. Get a personalised estimate in 60 seconds.',
    button: 'Calculate My ROI',
    href: '/tools/roi-calculator',
    live: true,
  },
  {
    icon: ClipboardCheck,
    title: 'AI Readiness Assessment',
    description:
      'Find out how ready your business is for AI. Take a quick quiz and get tailored recommendations.',
    button: 'Take the Quiz',
    href: '/tools/ai-readiness',
    live: false,
  },
  {
    icon: Search,
    title: 'AI Website Audit',
    description:
      "Enter your URL and get an instant AI-powered audit of your website's SEO, performance, and AI-readiness.",
    button: 'Audit My Site',
    href: '/tools/website-audit',
    live: false,
  },
  {
    icon: MessageCircle,
    title: 'Ask Arc',
    description:
      'Chat with our AI assistant. Ask about our services, get recommendations, or explore how AI can help your business.',
    button: 'Chat with Arc',
    href: '#',
    live: true,
    openArc: true,
  },
]

export function AiTools() {
  return (
    <section
      id="tools"
      className="px-6 py-16 md:py-20"
      style={{ background: 'linear-gradient(180deg, #090B14 0%, #0A0D16 100%)' }}
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="text-sm font-semibold tracking-wider text-[var(--ga-green)] uppercase">
            Free AI Tools
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Try Our{' '}
            <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
              AI Tools
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/50">
            Try our AI-powered tools — see what&apos;s possible for your business
            in minutes.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => {
            const Card = (
              <div
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 ${
                  tool.live
                    ? 'border-white/5 bg-white/[0.02] hover:-translate-y-1 hover:border-[var(--ga-blue)]/25 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-[var(--ga-blue)]/[0.08]'
                    : 'border-white/[0.03] bg-white/[0.01] opacity-60'
                }`}
              >
                {/* Shimmer on hover for live tools */}
                {tool.live && (
                  <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent transition-none group-hover:animate-[shimmer_0.8s_ease_forwards]" />
                )}

                <div className="relative flex flex-1 flex-col">
                  {/* Tag */}
                  <div className="mb-4 flex items-center justify-between">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                        tool.live
                          ? 'bg-[var(--ga-blue)]/10'
                          : 'bg-white/5'
                      }`}
                    >
                      <tool.icon
                        className={`h-5 w-5 ${
                          tool.live
                            ? 'text-[var(--ga-blue)]'
                            : 'text-white/30'
                        }`}
                      />
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                        tool.live
                          ? 'bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] text-white'
                          : 'bg-white/5 text-white/30'
                      }`}
                    >
                      {tool.live ? 'Live Now' : 'Coming Soon'}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold">{tool.title}</h3>
                  <p className="mt-2 flex-1 text-[14px] leading-relaxed text-white/45">
                    {tool.description}
                  </p>

                  <div className="mt-5">
                    {tool.live ? (
                      <span className="flex items-center gap-1.5 text-sm font-medium text-[var(--ga-blue)] transition-all group-hover:translate-x-1">
                        {tool.button}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    ) : (
                      <span className="text-sm font-medium text-white/20">
                        {tool.button}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )

            return (
              <StaggerItem key={tool.title} className="h-full">
                {tool.live ? (
                  tool.openArc ? (
                    <a href="#" data-open-arc="" className="block h-full">
                      {Card}
                    </a>
                  ) : (
                    <Link href={tool.href} className="block h-full">
                      {Card}
                    </Link>
                  )
                ) : (
                  <div className="h-full cursor-default">{Card}</div>
                )}
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}

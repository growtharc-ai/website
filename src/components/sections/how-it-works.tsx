import { Search, Lightbulb, Wrench, Rocket } from 'lucide-react'
import { FadeIn } from '@/components/motion/fade-in'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discover',
    description:
      'We learn your business inside out — your goals, pain points, tech stack, and untapped opportunities.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Design',
    description:
      'We architect a custom AI solution tailored to your goals — whether that\'s a marketing engine, an automation workflow, or a purpose-built AI agent.',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Build',
    description:
      'We develop, integrate, and deploy your AI-powered systems — connecting seamlessly with your existing tools and processes.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Scale',
    description:
      'We optimise, expand, and compound your results with continuous AI-driven iteration. What works gets amplified. What doesn\'t gets fixed.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="px-6 py-24 md:py-32"
      style={{ background: '#050508' }}
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="text-sm font-semibold tracking-wider text-[var(--ga-green)] uppercase">
            Our Process
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            From Discovery to{' '}
            <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
              Scale
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/50">
            A proven four-step process that takes you from where you are to
            where you want to be — powered by AI at every stage.
          </p>
        </FadeIn>

        <div className="relative mt-16 grid gap-8 md:grid-cols-4">
          {/* Connecting line (desktop) */}
          <div className="pointer-events-none absolute top-10 right-12 left-12 hidden h-px bg-gradient-to-r from-[var(--ga-blue)]/20 via-[var(--ga-green)]/20 to-[var(--ga-blue)]/20 md:block" />

          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1}>
              <div className="relative text-center md:text-left">
                <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] shadow-lg shadow-black/20 backdrop-blur-sm md:mx-0">
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

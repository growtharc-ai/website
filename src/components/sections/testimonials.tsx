import { Star } from 'lucide-react'
import { FadeIn } from '@/components/motion/fade-in'
import {
  StaggerContainer,
  StaggerItem,
} from '@/components/motion/stagger-children'

const testimonials = [
  {
    quote:
      'Growth Arc transformed our lead generation. We went from 20 leads a month to over 200 — all qualified.',
    name: 'Sarah Chen',
    role: 'CEO, TechFlow Solutions',
  },
  {
    quote:
      'The AI chatbot they built handles 80% of our customer enquiries. Our team can finally focus on high-value work.',
    name: 'Marcus Webb',
    role: 'Operations Director, Apex Group',
  },
  {
    quote:
      'Their CRM implementation was seamless. HubSpot went from confusing to our most powerful tool in weeks.',
    name: 'Priya Sharma',
    role: 'Head of Sales, NovaBridge',
  },
]

// TODO: Replace with real testimonials

export function Testimonials() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="text-sm font-semibold tracking-wider text-[var(--ga-green)] uppercase">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            What Our Clients{' '}
            <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
              Say
            </span>
          </h2>
        </FadeIn>

        <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="mt-5 text-[15px] leading-relaxed text-white/60">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-white/5 pt-5">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="mt-0.5 text-xs text-white/40">{t.role}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

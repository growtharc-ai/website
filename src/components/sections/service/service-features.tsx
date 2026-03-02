import type { LucideIcon } from 'lucide-react'
import { FadeIn } from '@/components/motion/fade-in'
import {
  StaggerContainer,
  StaggerItem,
} from '@/components/motion/stagger-children'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  tint: 'blue' | 'green'
}

interface ServiceFeaturesProps {
  sectionLabel: string
  headlinePrefix: string
  gradientText: string
  description: string
  features: Feature[]
}

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

export function ServiceFeatures({
  sectionLabel,
  headlinePrefix,
  gradientText,
  description,
  features,
}: ServiceFeaturesProps) {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="text-sm font-semibold tracking-wider text-[var(--ga-green)] uppercase">
            {sectionLabel}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            {headlinePrefix}{' '}
            <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
              {gradientText}
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/50">{description}</p>
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

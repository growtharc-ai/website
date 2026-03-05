import type { Metadata } from 'next'
import {
  Code,
  Layout,
  Smartphone,
  ShoppingCart,
  Plug,
  Gauge,
  FileSearch,
  Layers,
  Rocket,
  Settings,
} from 'lucide-react'
import { ServiceHero } from '@/components/sections/service/service-hero'
import { ServiceFeatures } from '@/components/sections/service/service-features'
import { ServiceHowItWorks } from '@/components/sections/service/service-how-it-works'
import { ServiceMetrics } from '@/components/sections/service/service-metrics'
import { ServiceCTA } from '@/components/sections/service/service-cta'

export const metadata: Metadata = {
  title: 'Website & App Development — Growth Arc',
  description:
    'Custom websites, web apps, and mobile applications built with modern frameworks and AI-enhanced workflows. From landing pages to full-stack platforms — designed to convert, built to scale.',
  openGraph: {
    title: 'Website & App Development — Growth Arc',
    description:
      'Custom websites, web apps, and mobile applications built with modern frameworks and AI-enhanced workflows. Designed to convert, built to scale.',
    url: 'https://growtharc.ai/services/web-development',
    siteName: 'Growth Arc',
    images: [
      {
        url: '/og-image-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Growth Arc — Website & App Development',
      },
    ],
    locale: 'en_NZ',
    type: 'website',
  },
}

const features = [
  {
    icon: Layout,
    title: 'Marketing Websites & Landing Pages',
    description:
      'High-converting marketing sites and landing pages built with modern frameworks — optimised for speed, SEO, and conversion from day one.',
    tint: 'blue' as const,
  },
  {
    icon: Code,
    title: 'Web Applications & Client Portals',
    description:
      'Full-stack web applications, dashboards, and client portals with secure authentication, real-time data, and seamless user experiences.',
    tint: 'green' as const,
  },
  {
    icon: Smartphone,
    title: 'Mobile-Responsive Design',
    description:
      'Every build is mobile-first. Responsive layouts that look sharp and perform flawlessly across phones, tablets, and desktops.',
    tint: 'blue' as const,
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description:
      'Online stores built for growth — product catalogues, payment processing, inventory management, and checkout flows that reduce cart abandonment.',
    tint: 'green' as const,
  },
  {
    icon: Plug,
    title: 'API Development & Integrations',
    description:
      'Custom APIs and third-party integrations that connect your website to CRMs, payment gateways, marketing tools, and internal systems.',
    tint: 'blue' as const,
  },
  {
    icon: Gauge,
    title: 'Performance & SEO Optimisation',
    description:
      'Lighthouse 90+ scores out of the box. Server-side rendering, image optimisation, structured data, and Core Web Vitals baked into every build.',
    tint: 'green' as const,
  },
]

const steps = [
  {
    number: '01',
    icon: FileSearch,
    title: 'Discovery & Strategy',
    description:
      'We define your goals, target audience, and technical requirements — mapping out the site architecture, user flows, and conversion paths before writing a single line of code.',
  },
  {
    number: '02',
    icon: Layers,
    title: 'Design & Prototype',
    description:
      'High-fidelity designs and interactive prototypes that align with your brand. You review and approve every screen before development begins.',
  },
  {
    number: '03',
    icon: Code,
    title: 'Build & Integrate',
    description:
      'Clean, production-grade code using modern frameworks like Next.js and React. APIs, CMS, and third-party tools are connected and tested end to end.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch & Optimise',
    description:
      'Deployed to production with monitoring, analytics, and performance baselines in place. Post-launch, we iterate based on real user data and conversion metrics.',
  },
]

const metrics = [
  { value: 90, suffix: '+', label: 'Lighthouse Performance Score' },
  { value: 2, suffix: 'x', label: 'Faster Page Load vs Industry Avg' },
  { value: 40, suffix: '%', label: 'Higher Conversion Rates' },
  { value: 99.9, suffix: '%', label: 'Uptime Guarantee' },
]

const proofPoints = [
  'Modern tech stack — Next.js, React, TypeScript',
  'Mobile-first, SEO-optimised from day one',
  'Full ownership of your code and assets',
  'Ongoing support and iteration post-launch',
]

export default function WebDevelopmentPage() {
  return (
      <main>
        <ServiceHero
          icon={Code}
          label="Website & App Development"
          headline="Custom Digital Products"
          gradientText="Built to Convert"
          subheadline="Marketing websites, web applications, and e-commerce platforms built with modern frameworks and AI-enhanced workflows — designed for performance, optimised for growth."
          stats={[
            { value: 'Modern Stack', label: 'Next.js & React' },
            { value: 'Mobile-First', label: 'Responsive Design' },
            { value: 'SEO-Ready', label: 'From Day One' },
          ]}
        />
        <ServiceFeatures
          sectionLabel="Capabilities"
          headlinePrefix="Everything You Need to"
          gradientText="Build & Scale"
          description="From marketing sites and landing pages to full-stack applications and e-commerce — every build is fast, accessible, and engineered to drive results."
          features={features}
        />
        <ServiceHowItWorks
          headlinePrefix="From Concept to"
          gradientText="Live Product"
          description="A four-step process that turns your requirements into a production-ready digital product — on time, on brand, and built to perform."
          steps={steps}
        />
        <ServiceMetrics
          description="Our development projects deliver measurable performance gains — faster load times, higher conversions, and rock-solid reliability."
          metrics={metrics}
        />
        <ServiceCTA
          headline="Ready to Build Something That Converts?"
          description="Book a free consultation and we'll scope out your project — from technical requirements to timeline and budget."
          proofPoints={proofPoints}
        />
      </main>
  )
}

import type { Metadata } from 'next'
import {
  Database,
  GitBranch,
  Layers,
  Plug,
  Brain,
  ShieldCheck,
  ClipboardCheck,
  Wrench,
  Play,
  TrendingUp,
} from 'lucide-react'
import { ServiceHero } from '@/components/sections/service/service-hero'
import { ServiceFeatures } from '@/components/sections/service/service-features'
import { ServiceHowItWorks } from '@/components/sections/service/service-how-it-works'
import { ServiceMetrics } from '@/components/sections/service/service-metrics'
import { ServiceCTA } from '@/components/sections/service/service-cta'

export const metadata: Metadata = {
  title: 'Custom CRM Development — Growth Arc',
  description:
    'A CRM built from the ground up around your sales process. Custom pipelines, tailored workflows, and deep integrations — no compromises, no workarounds.',
  openGraph: {
    title: 'Custom CRM Development — Growth Arc',
    description:
      'A CRM built from the ground up around your sales process. Custom pipelines, tailored workflows, and deep integrations.',
    url: 'https://growtharc.ai/services/crm-custom',
    siteName: 'Growth Arc',
    images: [
      {
        url: '/og-image-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Growth Arc — Custom CRM Development',
      },
    ],
    locale: 'en_NZ',
    type: 'website',
  },
}

const features = [
  {
    icon: GitBranch,
    title: 'Custom Sales Pipelines',
    description:
      'Every deal stage, field, and workflow is built around your actual sales process — not a generic template you have to adapt to.',
    tint: 'blue' as const,
  },
  {
    icon: Brain,
    title: 'AI-Powered Lead Scoring',
    description:
      'Machine learning models trained on your historical data to score and prioritise leads by likelihood to close.',
    tint: 'green' as const,
  },
  {
    icon: Layers,
    title: 'Tailored Workflows',
    description:
      'Automated approval chains, task assignments, and stage transitions that mirror how your team actually operates.',
    tint: 'blue' as const,
  },
  {
    icon: Plug,
    title: 'Deep Integrations',
    description:
      'Seamless connections to your email, accounting, support, and marketing tools — so data flows without manual entry.',
    tint: 'green' as const,
  },
  {
    icon: TrendingUp,
    title: 'Pipeline Forecasting',
    description:
      'AI-driven revenue forecasting that gives leadership accurate projections based on real pipeline data and deal velocity.',
    tint: 'blue' as const,
  },
  {
    icon: ShieldCheck,
    title: 'Training & Onboarding',
    description:
      'Hands-on team training and documentation so your CRM is adopted — not abandoned. Ongoing support included.',
    tint: 'green' as const,
  },
]

const steps = [
  {
    number: '01',
    icon: ClipboardCheck,
    title: 'Process Discovery',
    description:
      'We map your entire sales process — deal stages, team roles, data flows, and pain points — to define exactly what your CRM needs to do.',
  },
  {
    number: '02',
    icon: Wrench,
    title: 'Architecture & Build',
    description:
      'We design the data model, build custom pipelines, and configure every workflow to match your process with zero compromises.',
  },
  {
    number: '03',
    icon: Play,
    title: 'Integration & Migration',
    description:
      'We connect your existing tools, migrate historical data, and validate everything end-to-end before go-live.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Launch & Optimise',
    description:
      'Your team goes live with full training. We monitor adoption, refine workflows, and add AI enhancements as your process evolves.',
  },
]

const metrics = [
  { value: 80, suffix: '%', label: 'Reduction in Manual Data Entry' },
  { value: 3, suffix: 'x', label: 'Faster Sales Cycle' },
  { value: 50, suffix: '%', label: 'Improvement in Forecast Accuracy' },
  { value: 95, suffix: '%', label: 'Team Adoption Rate' },
]

const proofPoints = [
  'Built to fit your process — not the other way around',
  'Full data migration from legacy systems',
  'Hands-on training and onboarding for your team',
  'Ongoing support and continuous optimisation',
]

export default function CRMCustomPage() {
  return (
      <main>
        <ServiceHero
          icon={Database}
          label="Custom CRM Development"
          headline="A CRM Built Around"
          gradientText="Your Sales Process"
          subheadline="No compromises, no workarounds. We design and build bespoke CRM systems that fit the way your team actually works — with AI baked in from day one."
          stats={[
            { value: 'Bespoke', label: 'Sales Pipelines' },
            { value: 'AI-Powered', label: 'Lead Scoring' },
            { value: 'End-to-End', label: 'Integration' },
          ]}
        />
        <ServiceFeatures
          sectionLabel="Capabilities"
          headlinePrefix="Everything You Need for a"
          gradientText="Custom CRM"
          description="From pipeline architecture and workflow automation to AI scoring and third-party integrations — a CRM that works exactly the way you need it to."
          features={features}
        />
        <ServiceHowItWorks
          headlinePrefix="From Discovery to"
          gradientText="Go-Live"
          description="A structured four-step process that turns your sales requirements into a fully operational, custom-built CRM."
          steps={steps}
        />
        <ServiceMetrics
          description="Custom CRM builds deliver measurable efficiency gains — less manual work, faster deals, and better forecasting."
          metrics={metrics}
        />
        <ServiceCTA
          headline="Ready for a CRM That Fits?"
          description="Book a free discovery call and we'll map your sales process to show you exactly what a custom CRM can do for your team."
          proofPoints={proofPoints}
        />
      </main>
  )
}

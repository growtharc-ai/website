import type { Metadata } from 'next'
import {
  Compass,
  ClipboardList,
  Lightbulb,
  Map,
  Calculator,
  Users,
  Search,
  Presentation,
  Wrench,
  TrendingUp,
} from 'lucide-react'
import { ServiceHero } from '@/components/sections/service/service-hero'
import { ServiceFeatures } from '@/components/sections/service/service-features'
import { ServiceHowItWorks } from '@/components/sections/service/service-how-it-works'
import { ServiceMetrics } from '@/components/sections/service/service-metrics'
import { ServiceCTA } from '@/components/sections/service/service-cta'

export const metadata: Metadata = {
  title: 'AI Strategy & Consulting — Growth Arc | AI Solutions That Grow Your Business',
  description:
    'Not sure where AI fits in your business? We audit your operations, identify high-impact opportunities, and build a clear roadmap to get you there — with ROI modelling and change management built in.',
  openGraph: {
    title: 'AI Strategy & Consulting — Growth Arc | AI Solutions That Grow Your Business',
    description:
      'We audit your operations, identify high-impact AI opportunities, and build a clear roadmap to get you there.',
    url: 'https://www.growtharc.ai/services/ai-consulting',
    siteName: 'Growth Arc',
    images: [
      {
        url: '/og-image-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Growth Arc — AI Strategy & Consulting',
      },
    ],
    locale: 'en_NZ',
    type: 'website',
  },
}

const features = [
  {
    icon: ClipboardList,
    title: 'AI Readiness Audit',
    description:
      'A thorough assessment of your current operations, tech stack, and data maturity — identifying exactly where you stand and what it takes to move forward with AI.',
    tint: 'blue' as const,
  },
  {
    icon: Lightbulb,
    title: 'Opportunity Identification',
    description:
      'We pinpoint the highest-impact areas where AI can save time, cut costs, or drive revenue — prioritised by effort, feasibility, and expected return.',
    tint: 'green' as const,
  },
  {
    icon: Map,
    title: 'Implementation Roadmap',
    description:
      'A phased, practical plan with clear milestones, timelines, and resource requirements — so you know exactly what to build, when, and in what order.',
    tint: 'blue' as const,
  },
  {
    icon: Calculator,
    title: 'ROI Modelling',
    description:
      'Financial projections for each AI initiative — cost to implement, expected savings, revenue uplift, and payback period — so every investment is justified.',
    tint: 'green' as const,
  },
  {
    icon: Users,
    title: 'Change Management',
    description:
      'AI only works if your team adopts it. We provide training plans, communication strategies, and rollout support to ensure smooth adoption across your organisation.',
    tint: 'blue' as const,
  },
  {
    icon: Wrench,
    title: 'Tool & Vendor Selection',
    description:
      'Cut through the noise. We evaluate AI tools, platforms, and vendors against your specific needs — recommending only what delivers real value for your business.',
    tint: 'green' as const,
  },
]

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery & Audit',
    description:
      'We immerse ourselves in your business — interviewing stakeholders, mapping processes, and assessing your data, tools, and team capabilities.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Opportunity Mapping',
    description:
      'We identify and score every AI opportunity across your operations — ranking each by impact, feasibility, and alignment with your business goals.',
  },
  {
    number: '03',
    icon: Presentation,
    title: 'Strategy & Roadmap',
    description:
      'You receive a detailed AI strategy document with prioritised initiatives, ROI projections, timelines, and a clear implementation roadmap.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Execute & Scale',
    description:
      'We stay with you through implementation — managing builds, tracking results against projections, and expanding your AI capabilities as you grow.',
  },
]

const metrics = [
  { value: 5, suffix: 'x', label: 'Average ROI on AI Projects' },
  { value: 40, suffix: '%', label: 'Faster Time to Implementation' },
  { value: 90, suffix: '%', label: 'Client Satisfaction Rate' },
  { value: 30, suffix: '+', label: 'AI Tools Evaluated' },
]

const proofPoints = [
  'Actionable strategy — not a generic slide deck',
  'ROI projections for every recommendation',
  'Vendor-neutral advice — we recommend what works',
  'Ongoing support through implementation',
]

export default function AIConsultingPage() {
  return (
      <main>
        <ServiceHero
          icon={Compass}
          label="AI Strategy & Consulting"
          headline="Know Exactly Where AI Fits"
          gradientText="In Your Business"
          subheadline="We audit your operations, identify the highest-impact AI opportunities, and build a practical roadmap to get you there — with ROI modelling so every decision is backed by numbers."
          stats={[
            { value: 'Data-Driven', label: 'AI Readiness Audit' },
            { value: 'Prioritised', label: 'Opportunity Roadmap' },
            { value: 'Measurable', label: 'ROI Projections' },
          ]}
        />
        <ServiceFeatures
          sectionLabel="Capabilities"
          headlinePrefix="Everything You Need to"
          gradientText="Adopt AI with Confidence"
          description="From readiness audits and opportunity mapping to implementation roadmaps and change management — a complete AI strategy built for your business."
          features={features}
        />
        <ServiceHowItWorks
          headlinePrefix="From Uncertainty to"
          gradientText="Clear Direction"
          description="A four-step process that turns AI confusion into a prioritised, funded, and actionable implementation plan."
          steps={steps}
        />
        <ServiceMetrics
          description="Our AI consulting engagements deliver clarity, speed, and measurable returns — not theoretical frameworks."
          metrics={metrics}
        />
        <ServiceCTA
          headline="Ready to Build Your AI Roadmap?"
          description="Book a free discovery call and we'll walk you through how an AI strategy engagement can accelerate your business."
          proofPoints={proofPoints}
        />
      </main>
  )
}

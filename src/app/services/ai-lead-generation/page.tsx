import type { Metadata } from 'next'
import {
  Radar,
  Brain,
  Filter,
  Mail,
  Search,
  BarChart3,
  Zap,
  Target,
  TrendingUp,
} from 'lucide-react'
import { ServiceHero } from '@/components/sections/service/service-hero'
import { ServiceFeatures } from '@/components/sections/service/service-features'
import { ServiceHowItWorks } from '@/components/sections/service/service-how-it-works'
import { ServiceMetrics } from '@/components/sections/service/service-metrics'
import { ServiceCTA } from '@/components/sections/service/service-cta'

export const metadata: Metadata = {
  title: 'AI Lead Generation — Growth Arc | AI Solutions That Grow Your Business',
  description:
    'Fill your pipeline with qualified opportunities using AI-powered prospecting, automated outreach, and intelligent lead scoring. Growth Arc delivers leads ready to buy.',
  openGraph: {
    title: 'AI Lead Generation — Growth Arc | AI Solutions That Grow Your Business',
    description:
      'Fill your pipeline with qualified opportunities using AI-powered prospecting, automated outreach, and intelligent lead scoring.',
    url: 'https://www.growtharc.ai/services/ai-lead-generation',
    siteName: 'Growth Arc',
    images: [
      {
        url: '/og-image-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Growth Arc — AI Lead Generation',
      },
    ],
    locale: 'en_NZ',
    type: 'website',
  },
}

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

const steps = [
  {
    number: '01',
    icon: Target,
    title: 'Define ICP',
    description:
      'We work with you to define your ideal customer profile — industry, company size, job titles, pain points, and buying signals.',
  },
  {
    number: '02',
    icon: Search,
    title: 'AI Discovery',
    description:
      'Our AI scans multiple data sources to build a targeted prospect list that matches your ICP with high accuracy.',
  },
  {
    number: '03',
    icon: Mail,
    title: 'Automated Outreach',
    description:
      'Personalised multi-channel sequences engage prospects via email and LinkedIn with messaging that resonates.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Qualify & Convert',
    description:
      'AI scores every response and routes qualified leads to your team — ready for a conversation, not a cold pitch.',
  },
]

const metrics = [
  { value: 3, suffix: 'x', label: 'More Qualified Leads' },
  { value: 68, suffix: '%', label: 'Average Open Rate' },
  { value: 40, suffix: '%', label: 'Reduction in CPL' },
  { value: 14, suffix: '', label: 'Days to First Booked Call' },
]

const proofPoints = [
  'No long-term contracts — month-to-month',
  'Leads delivered directly to your CRM',
  'Dedicated strategist for your account',
  'Full transparency on performance metrics',
]

export default function AILeadGenerationPage() {
  return (
      <main>
        <ServiceHero
          icon={Radar}
          label="AI Lead Generation"
          headline="Fill Your Pipeline with"
          gradientText="Qualified Opportunities"
          subheadline="Our AI identifies, engages, and qualifies your ideal prospects automatically — so your team only talks to leads ready to buy."
          stats={[
            { value: 'AI-Scored', label: 'Lead Qualification' },
            { value: 'Multi-Channel', label: 'Outreach Engine' },
            { value: 'Always-On', label: '24/7 Prospecting' },
          ]}
        />
        <ServiceFeatures
          sectionLabel="Capabilities"
          headlinePrefix="Everything You Need to"
          gradientText="Generate Leads"
          description="A full-stack lead generation engine — from prospecting and outreach to scoring and CRM handoff — powered by AI at every step."
          features={features}
        />
        <ServiceHowItWorks
          headlinePrefix="From ICP to"
          gradientText="Booked Meetings"
          description="A four-step process that turns your ideal customer profile into a steady stream of qualified sales conversations."
          steps={steps}
        />
        <ServiceMetrics
          description="Our AI-powered lead generation delivers results you can see in your pipeline — not vanity metrics."
          metrics={metrics}
        />
        <ServiceCTA
          headline="Ready to Fill Your Pipeline?"
          description="Book a free strategy call and we'll show you exactly how our AI lead generation engine can work for your business."
          proofPoints={proofPoints}
        />
      </main>
  )
}

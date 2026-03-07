import type { Metadata } from 'next'
import {
  Cloud,
  Layers,
  GitBranch,
  Shield,
  Puzzle,
  BarChart3,
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
  title: 'Salesforce Implementation — Growth Arc | AI Solutions That Grow Your Business',
  description:
    'Enterprise-grade Salesforce deployment, customisation, and integration. Built for complex sales teams that need power, flexibility, and AI-driven insights.',
  openGraph: {
    title: 'Salesforce Implementation — Growth Arc | AI Solutions That Grow Your Business',
    description:
      'Enterprise-grade Salesforce deployment, customisation, and integration. Built for complex sales teams that need power and flexibility.',
    url: 'https://www.growtharc.ai/services/crm-salesforce',
    siteName: 'Growth Arc',
    images: [
      {
        url: '/og-image-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Growth Arc — Salesforce Implementation',
      },
    ],
    locale: 'en_NZ',
    type: 'website',
  },
}

const features = [
  {
    icon: Layers,
    title: 'Custom Objects & Data Model',
    description:
      'Purpose-built objects, fields, and relationships that model your business exactly — not shoehorned into standard Salesforce defaults.',
    tint: 'blue' as const,
  },
  {
    icon: GitBranch,
    title: 'Advanced Workflow Automation',
    description:
      'Flows, process builders, and approval chains that automate complex business logic across Sales Cloud and Service Cloud.',
    tint: 'green' as const,
  },
  {
    icon: Puzzle,
    title: 'AppExchange Integrations',
    description:
      'We evaluate, install, and configure the right AppExchange packages and custom integrations for your tech stack.',
    tint: 'blue' as const,
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description:
      'Role hierarchies, sharing rules, field-level security, and audit trails configured for enterprise governance requirements.',
    tint: 'green' as const,
  },
  {
    icon: BarChart3,
    title: 'Reports & Dashboards',
    description:
      'Executive dashboards, pipeline reports, and Einstein Analytics that give every stakeholder the visibility they need.',
    tint: 'blue' as const,
  },
  {
    icon: TrendingUp,
    title: 'AI-Powered Forecasting',
    description:
      'Einstein lead scoring and opportunity insights that help your team focus on deals most likely to close.',
    tint: 'green' as const,
  },
]

const steps = [
  {
    number: '01',
    icon: ClipboardCheck,
    title: 'Requirements & Architecture',
    description:
      'We document your business processes, data model, and integration needs to design a Salesforce architecture that scales.',
  },
  {
    number: '02',
    icon: Wrench,
    title: 'Build & Configure',
    description:
      'Custom objects, automations, security model, and integrations are built in a sandbox environment with rigorous testing.',
  },
  {
    number: '03',
    icon: Play,
    title: 'Migration & Deployment',
    description:
      'Data is migrated, validated, and reconciled. The configured org is deployed to production with change management support.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Adoption & Evolution',
    description:
      'User training, admin enablement, and quarterly reviews ensure your Salesforce org evolves with your business.',
  },
]

const metrics = [
  { value: 40, suffix: '%', label: 'Increase in Rep Productivity' },
  { value: 2, suffix: 'x', label: 'Pipeline Visibility' },
  { value: 55, suffix: '%', label: 'Faster Report Generation' },
  { value: 35, suffix: '%', label: 'Improvement in Forecast Accuracy' },
]

const proofPoints = [
  'Sales Cloud, Service Cloud, and Einstein AI expertise',
  'Full data migration from legacy CRMs and spreadsheets',
  'Enterprise security and compliance configuration',
  'Ongoing admin support and quarterly optimisation',
]

export default function CRMSalesforcePage() {
  return (
      <main>
        <ServiceHero
          icon={Cloud}
          label="Salesforce Implementation"
          headline="Enterprise CRM with"
          gradientText="Power & Flexibility"
          subheadline="Enterprise-grade Salesforce deployment, customisation, and integration. Built for complex sales teams that need the full power of the platform."
          stats={[
            { value: 'Enterprise', label: 'Architecture' },
            { value: 'Einstein', label: 'AI Insights' },
            { value: 'Full-Stack', label: 'Cloud Setup' },
          ]}
        />
        <ServiceFeatures
          sectionLabel="Capabilities"
          headlinePrefix="Everything You Need to"
          gradientText="Master Salesforce"
          description="From custom data models and advanced automation to AppExchange integrations and AI-powered forecasting — Salesforce built for your scale."
          features={features}
        />
        <ServiceHowItWorks
          headlinePrefix="From Requirements to"
          gradientText="Production"
          description="A rigorous four-step process that delivers a Salesforce org built for performance, adoption, and long-term scalability."
          steps={steps}
        />
        <ServiceMetrics
          description="A properly implemented Salesforce org delivers measurable gains in productivity, visibility, and forecast accuracy."
          metrics={metrics}
        />
        <ServiceCTA
          headline="Ready to Get Salesforce Right?"
          description="Book a free strategy call and we'll assess your requirements to show you how a well-built Salesforce org can transform your sales operations."
          proofPoints={proofPoints}
        />
      </main>
  )
}

import type { Metadata } from 'next'
import {
  Grid3X3,
  Mail,
  Users,
  Plug,
  Brain,
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
  title: 'Microsoft Dynamics 365 — Growth Arc | AI Solutions That Grow Your Business',
  description:
    'Dynamics 365 setup and customisation for businesses in the Microsoft ecosystem. Seamless integration with Outlook, Teams, Azure, and the Power Platform.',
  openGraph: {
    title: 'Microsoft Dynamics 365 — Growth Arc | AI Solutions That Grow Your Business',
    description:
      'Dynamics 365 setup and customisation for businesses in the Microsoft ecosystem. Seamless integration with Outlook, Teams, and Azure.',
    url: 'https://www.growtharc.ai/services/crm-dynamics',
    siteName: 'Growth Arc',
    images: [
      {
        url: '/og-image-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Growth Arc — Microsoft Dynamics 365',
      },
    ],
    locale: 'en_NZ',
    type: 'website',
  },
}

const features = [
  {
    icon: Users,
    title: 'Dynamics 365 Sales',
    description:
      'Custom entities, business process flows, and opportunity management configured to match your sales methodology and team structure.',
    tint: 'blue' as const,
  },
  {
    icon: Mail,
    title: 'Outlook & Teams Integration',
    description:
      'Full bi-directional sync with Outlook and Teams — emails tracked, meetings logged, and conversations linked to CRM records automatically.',
    tint: 'green' as const,
  },
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description:
      'Dynamics 365 AI and Copilot for Sales deliver predictive lead scoring, relationship health tracking, and next-best-action recommendations.',
    tint: 'blue' as const,
  },
  {
    icon: Plug,
    title: 'Power Platform & Azure',
    description:
      'Power Automate workflows, Power BI dashboards, and Azure integrations that extend Dynamics 365 across your entire Microsoft ecosystem.',
    tint: 'green' as const,
  },
  {
    icon: BarChart3,
    title: 'Custom Reporting',
    description:
      'Power BI-connected dashboards and embedded analytics that give sales, marketing, and leadership real-time visibility into performance.',
    tint: 'blue' as const,
  },
  {
    icon: TrendingUp,
    title: 'Ongoing Optimisation',
    description:
      'Quarterly reviews, workflow refinement, and new feature rollouts so your Dynamics instance evolves as your business scales.',
    tint: 'green' as const,
  },
]

const steps = [
  {
    number: '01',
    icon: ClipboardCheck,
    title: 'Assessment & Roadmap',
    description:
      'We audit your Microsoft environment, map your business processes, and design a Dynamics 365 implementation roadmap aligned to your goals.',
  },
  {
    number: '02',
    icon: Wrench,
    title: 'Configure & Customise',
    description:
      'Entities, workflows, security roles, and Power Platform integrations are built and tested in a sandbox before touching production.',
  },
  {
    number: '03',
    icon: Play,
    title: 'Migrate & Go-Live',
    description:
      'Data is migrated from legacy systems, validated for accuracy, and deployed to production with user acceptance testing and training.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Adopt & Scale',
    description:
      'User training, admin enablement, and continuous improvement cycles ensure high adoption and long-term ROI from your investment.',
  },
]

const metrics = [
  { value: 45, suffix: '%', label: 'Faster Deal Progression' },
  { value: 2, suffix: 'x', label: 'User Adoption Rate' },
  { value: 50, suffix: '%', label: 'Less Context Switching' },
  { value: 35, suffix: '%', label: 'Improvement in Forecast Accuracy' },
]

const proofPoints = [
  'Deep expertise across the Microsoft ecosystem',
  'Full data migration from legacy CRMs or spreadsheets',
  'Power Platform and Azure integration included',
  'Ongoing support with quarterly optimisation reviews',
]

export default function CRMDynamicsPage() {
  return (
      <main>
        <ServiceHero
          icon={Grid3X3}
          label="Microsoft Dynamics 365"
          headline="CRM That Works with"
          gradientText="Your Microsoft Stack"
          subheadline="Dynamics 365 setup and customisation for businesses already in the Microsoft ecosystem. Seamless integration with Outlook, Teams, and Azure."
          stats={[
            { value: 'Native', label: 'Microsoft Integration' },
            { value: 'Copilot', label: 'AI Insights' },
            { value: 'Power Platform', label: 'Automation' },
          ]}
        />
        <ServiceFeatures
          sectionLabel="Capabilities"
          headlinePrefix="Everything You Need to"
          gradientText="Master Dynamics 365"
          description="From sales configuration and Outlook integration to Power Platform automation and AI insights — Dynamics 365 built for your Microsoft-first business."
          features={features}
        />
        <ServiceHowItWorks
          headlinePrefix="From Assessment to"
          gradientText="Adoption"
          description="A structured four-step process that gets your Dynamics 365 instance live, integrated, and driving results across your Microsoft ecosystem."
          steps={steps}
        />
        <ServiceMetrics
          description="A well-implemented Dynamics 365 instance delivers measurable gains in productivity, adoption, and pipeline accuracy."
          metrics={metrics}
        />
        <ServiceCTA
          headline="Ready to Unlock Dynamics 365?"
          description="Book a free assessment and we'll show you how Dynamics 365 can integrate with your existing Microsoft tools to transform your sales operations."
          proofPoints={proofPoints}
        />
      </main>
  )
}

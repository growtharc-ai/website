import type { Metadata } from 'next'
import {
  Workflow,
  GitBranch,
  Mail,
  RefreshCw,
  Bell,
  BarChart3,
  ClipboardCheck,
  Settings,
  Play,
  TrendingUp,
} from 'lucide-react'
import { ServiceHero } from '@/components/sections/service/service-hero'
import { ServiceFeatures } from '@/components/sections/service/service-features'
import { ServiceHowItWorks } from '@/components/sections/service/service-how-it-works'
import { ServiceMetrics } from '@/components/sections/service/service-metrics'
import { ServiceCTA } from '@/components/sections/service/service-cta'

export const metadata: Metadata = {
  title: 'Sales Automation — Growth Arc | AI Solutions That Grow Your Business',
  description:
    'Automate your sales pipeline with AI-powered CRM setup, follow-up sequences, and deal tracking. Growth Arc helps you close more deals with less manual work.',
  openGraph: {
    title: 'Sales Automation — Growth Arc | AI Solutions That Grow Your Business',
    description:
      'Automate your sales pipeline with AI-powered CRM setup, follow-up sequences, and deal tracking.',
    url: 'https://www.growtharc.ai/services/sales-automation',
    siteName: 'Growth Arc',
    images: [
      {
        url: '/og-image-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Growth Arc — Sales Automation',
      },
    ],
    locale: 'en_NZ',
    type: 'website',
  },
}

const features = [
  {
    icon: Settings,
    title: 'CRM Setup & Configuration',
    description:
      'We build and configure your CRM from scratch — custom pipelines, deal stages, and properties tailored to your sales process.',
    tint: 'blue' as const,
  },
  {
    icon: GitBranch,
    title: 'Pipeline Automation',
    description:
      'Automated workflows move deals through stages, assign tasks, and trigger actions based on prospect behaviour.',
    tint: 'green' as const,
  },
  {
    icon: Mail,
    title: 'Follow-Up Sequences',
    description:
      'Multi-step email and task sequences that ensure no lead falls through the cracks — timed and personalised automatically.',
    tint: 'blue' as const,
  },
  {
    icon: RefreshCw,
    title: 'Lead Routing',
    description:
      'AI-powered lead assignment routes the right prospects to the right reps based on territory, expertise, and capacity.',
    tint: 'green' as const,
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description:
      'Real-time alerts when prospects open emails, visit your site, or hit scoring thresholds — so reps strike while the iron is hot.',
    tint: 'blue' as const,
  },
  {
    icon: BarChart3,
    title: 'Sales Analytics',
    description:
      'Pipeline velocity, win rates, and rep performance dashboards that give you full visibility into your sales engine.',
    tint: 'green' as const,
  },
]

const steps = [
  {
    number: '01',
    icon: ClipboardCheck,
    title: 'Process Audit',
    description:
      'We map your current sales process to identify bottlenecks, manual tasks, and automation opportunities.',
  },
  {
    number: '02',
    icon: Settings,
    title: 'CRM Build',
    description:
      'We set up your CRM with custom pipelines, integrations, and data migration — ready for your team on day one.',
  },
  {
    number: '03',
    icon: Play,
    title: 'Automation Launch',
    description:
      'Workflows, sequences, and routing rules go live. Your team gets trained and starts selling smarter immediately.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Optimise & Scale',
    description:
      'We continuously refine automations based on performance data — improving conversion rates and pipeline velocity.',
  },
]

const metrics = [
  { value: 60, suffix: '%', label: 'Less Manual Data Entry' },
  { value: 35, suffix: '%', label: 'Faster Deal Cycles' },
  { value: 2, suffix: 'x', label: 'Follow-Up Consistency' },
  { value: 25, suffix: '%', label: 'Higher Win Rates' },
]

const proofPoints = [
  'Works with HubSpot, Salesforce, Pipedrive & more',
  'Full data migration and team onboarding included',
  'Custom workflows built for your exact sales process',
  'Ongoing optimisation and support',
]

export default function SalesAutomationPage() {
  return (
      <main>
        <ServiceHero
          icon={Workflow}
          label="Sales Automation"
          headline="Close More Deals with"
          gradientText="Intelligent Automation"
          subheadline="CRM setup, pipeline automation, and AI-powered follow-up sequences that convert leads while you focus on selling."
          stats={[
            { value: 'Custom', label: 'CRM Pipelines' },
            { value: 'Automated', label: 'Follow-Up Sequences' },
            { value: 'AI-Routed', label: 'Lead Assignment' },
          ]}
        />
        <ServiceFeatures
          sectionLabel="Capabilities"
          headlinePrefix="Everything You Need to"
          gradientText="Automate Sales"
          description="A complete sales automation stack — from CRM configuration and pipeline workflows to intelligent follow-ups and analytics."
          features={features}
        />
        <ServiceHowItWorks
          headlinePrefix="From Manual to"
          gradientText="Automated"
          description="A four-step process that transforms your sales operations from scattered spreadsheets to a scalable, automated machine."
          steps={steps}
        />
        <ServiceMetrics
          description="Our sales automation delivers efficiency gains you can measure in closed deals and saved hours."
          metrics={metrics}
        />
        <ServiceCTA
          headline="Ready to Automate Your Sales?"
          description="Book a free consultation and we'll audit your sales process to show you exactly where automation will have the biggest impact."
          proofPoints={proofPoints}
        />
      </main>
  )
}

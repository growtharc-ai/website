import type { Metadata } from 'next'
import {
  CircleDot,
  Settings,
  Mail,
  GitBranch,
  BarChart3,
  RefreshCw,
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
  title: 'HubSpot Implementation — Growth Arc | AI Solutions That Grow Your Business',
  description:
    'Full HubSpot setup, migration, and optimisation. CRM, Marketing Hub, Sales Hub, and Service Hub — configured for your business and ready to perform from day one.',
  openGraph: {
    title: 'HubSpot Implementation — Growth Arc | AI Solutions That Grow Your Business',
    description:
      'Full HubSpot setup, migration, and optimisation. CRM, Marketing Hub, Sales Hub, and Service Hub — configured for your business.',
    url: 'https://www.growtharc.ai/services/crm-hubspot',
    siteName: 'Growth Arc',
    images: [
      {
        url: '/og-image-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Growth Arc — HubSpot Implementation',
      },
    ],
    locale: 'en_NZ',
    type: 'website',
  },
}

const features = [
  {
    icon: Settings,
    title: 'CRM Configuration',
    description:
      'Custom properties, deal stages, and contact lifecycle stages configured to match your sales process — not HubSpot defaults.',
    tint: 'blue' as const,
  },
  {
    icon: Mail,
    title: 'Marketing Hub Setup',
    description:
      'Email templates, landing pages, forms, and nurture workflows built and tested so your marketing engine is live from day one.',
    tint: 'green' as const,
  },
  {
    icon: GitBranch,
    title: 'Sales Hub Automation',
    description:
      'Pipeline automation, sequences, meeting links, and deal-based workflows that keep your reps focused on closing.',
    tint: 'blue' as const,
  },
  {
    icon: RefreshCw,
    title: 'Data Migration',
    description:
      'Clean migration from Salesforce, Dynamics, Pipedrive, or spreadsheets — with full data validation and deduplication.',
    tint: 'green' as const,
  },
  {
    icon: BarChart3,
    title: 'Reporting & Dashboards',
    description:
      'Custom dashboards for sales, marketing, and leadership that surface the metrics that actually matter to your business.',
    tint: 'blue' as const,
  },
  {
    icon: TrendingUp,
    title: 'Ongoing Optimisation',
    description:
      'Monthly reviews, workflow refinement, and new feature rollouts — so your HubSpot instance keeps improving as you scale.',
    tint: 'green' as const,
  },
]

const steps = [
  {
    number: '01',
    icon: ClipboardCheck,
    title: 'Audit & Planning',
    description:
      'We review your current tools, data, and processes to design a HubSpot implementation plan tailored to your business goals.',
  },
  {
    number: '02',
    icon: Wrench,
    title: 'Configure & Build',
    description:
      'CRM properties, pipelines, automations, email templates, and integrations are built and tested in a staging environment.',
  },
  {
    number: '03',
    icon: Play,
    title: 'Migrate & Launch',
    description:
      'Data is migrated, validated, and deduplicated. Your team is trained and the system goes live with full support.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Optimise & Scale',
    description:
      'We continuously refine workflows, add AI-powered scoring, and roll out new Hub features as your needs evolve.',
  },
]

const metrics = [
  { value: 60, suffix: '%', label: 'Faster Sales Cycle' },
  { value: 3, suffix: 'x', label: 'Marketing-Qualified Leads' },
  { value: 45, suffix: '%', label: 'Higher Email Engagement' },
  { value: 30, suffix: '%', label: 'Increase in Win Rate' },
]

const proofPoints = [
  'Full CRM, Marketing, Sales & Service Hub setup',
  'Clean data migration from any legacy system',
  'Hands-on team training and onboarding',
  'Ongoing optimisation and monthly reviews',
]

export default function CRMHubSpotPage() {
  return (
      <main>
        <ServiceHero
          icon={CircleDot}
          label="HubSpot Implementation"
          headline="Get More from HubSpot with"
          gradientText="Expert Implementation"
          subheadline="Full HubSpot setup, migration, and optimisation — from CRM and Marketing Hub to Sales automation and reporting. We're hands-on from day one."
          stats={[
            { value: 'Full-Stack', label: 'Hub Configuration' },
            { value: 'Clean', label: 'Data Migration' },
            { value: 'AI-Enhanced', label: 'Workflows' },
          ]}
        />
        <ServiceFeatures
          sectionLabel="Capabilities"
          headlinePrefix="Everything You Need to"
          gradientText="Master HubSpot"
          description="From CRM configuration and marketing automation to sales pipelines and custom reporting — a complete HubSpot implementation built for results."
          features={features}
        />
        <ServiceHowItWorks
          headlinePrefix="From Setup to"
          gradientText="Scale"
          description="A proven four-step process that gets your HubSpot instance live, adopted, and delivering ROI fast."
          steps={steps}
        />
        <ServiceMetrics
          description="Properly implemented HubSpot delivers measurable results across marketing, sales, and customer service."
          metrics={metrics}
        />
        <ServiceCTA
          headline="Ready to Get HubSpot Right?"
          description="Book a free consultation and we'll audit your current setup or plan a fresh implementation tailored to your growth goals."
          proofPoints={proofPoints}
        />
      </main>
  )
}

import type { Metadata } from 'next'
import {
  ChartNoAxesCombined,
  BarChart3,
  PieChart,
  Eye,
  TrendingUp,
  Database,
  FileText,
  ClipboardCheck,
  Settings,
  Zap,
  Rocket,
} from 'lucide-react'
import { ServiceHero } from '@/components/sections/service/service-hero'
import { ServiceFeatures } from '@/components/sections/service/service-features'
import { ServiceHowItWorks } from '@/components/sections/service/service-how-it-works'
import { ServiceMetrics } from '@/components/sections/service/service-metrics'
import { ServiceCTA } from '@/components/sections/service/service-cta'

export const metadata: Metadata = {
  title: 'Analytics & Reporting — Growth Arc | AI Solutions That Grow Your Business',
  description:
    'Real-time dashboards with clear attribution and ROI tracking. Growth Arc gives you the data clarity to make confident marketing decisions.',
  openGraph: {
    title: 'Analytics & Reporting — Growth Arc | AI Solutions That Grow Your Business',
    description:
      'Real-time dashboards with clear attribution and ROI tracking so you always know what\'s working.',
    url: 'https://www.growtharc.ai/services/analytics-reporting',
    siteName: 'Growth Arc',
    images: [
      {
        url: '/og-image-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Growth Arc — Analytics & Reporting',
      },
    ],
    locale: 'en_NZ',
    type: 'website',
  },
}

const features = [
  {
    icon: PieChart,
    title: 'Custom Dashboards',
    description:
      'Real-time dashboards tailored to your KPIs — from marketing metrics to revenue attribution — accessible from any device.',
    tint: 'blue' as const,
  },
  {
    icon: TrendingUp,
    title: 'Multi-Touch Attribution',
    description:
      'See exactly which channels, campaigns, and touchpoints drive conversions — from first click to closed deal.',
    tint: 'green' as const,
  },
  {
    icon: Eye,
    title: 'ROI Tracking',
    description:
      'Connect marketing spend to revenue outcomes. Know your true cost per lead, cost per acquisition, and return on investment.',
    tint: 'blue' as const,
  },
  {
    icon: Database,
    title: 'Data Integration',
    description:
      'Unify data from your CRM, ad platforms, website analytics, and email tools into a single source of truth.',
    tint: 'green' as const,
  },
  {
    icon: BarChart3,
    title: 'Automated Reports',
    description:
      'Weekly and monthly reports delivered automatically — with AI-generated insights and actionable recommendations.',
    tint: 'blue' as const,
  },
  {
    icon: FileText,
    title: 'Goal Tracking',
    description:
      'Set marketing and revenue goals, track progress in real time, and get alerts when metrics trend off-target.',
    tint: 'green' as const,
  },
]

const steps = [
  {
    number: '01',
    icon: ClipboardCheck,
    title: 'Data Audit',
    description:
      'We audit your current tracking, data sources, and reporting gaps to build a complete picture of your analytics needs.',
  },
  {
    number: '02',
    icon: Settings,
    title: 'Setup & Integration',
    description:
      'We connect all your data sources, configure tracking, and build custom dashboards aligned to your business goals.',
  },
  {
    number: '03',
    icon: Zap,
    title: 'Automate & Launch',
    description:
      'Automated reporting, alerting, and attribution models go live — giving your team instant access to actionable insights.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Insights & Action',
    description:
      'We deliver ongoing strategic recommendations based on your data — turning numbers into growth decisions.',
  },
]

const metrics = [
  { value: 100, suffix: '%', label: 'Data Visibility' },
  { value: 5, suffix: 'x', label: 'Faster Reporting' },
  { value: 30, suffix: '%', label: 'Better Budget Allocation' },
  { value: 1, suffix: '', label: 'Single Source of Truth' },
]

const proofPoints = [
  'Connects to 50+ marketing and sales tools',
  'AI-generated insights and recommendations',
  'Custom dashboards for every stakeholder',
  'Real-time alerts when metrics shift',
]

export default function AnalyticsReportingPage() {
  return (
      <main>
        <ServiceHero
          icon={ChartNoAxesCombined}
          label="Analytics & Reporting"
          headline="Make Smarter Decisions with"
          gradientText="Clear Data"
          subheadline="Real-time dashboards with multi-touch attribution and ROI tracking — so you always know what's working and where to invest."
          stats={[
            { value: 'Real-Time', label: 'Custom Dashboards' },
            { value: 'Multi-Touch', label: 'Attribution Models' },
            { value: 'AI-Powered', label: 'Insights & Alerts' },
          ]}
        />
        <ServiceFeatures
          sectionLabel="Capabilities"
          headlinePrefix="Everything You Need to"
          gradientText="Understand Your Data"
          description="A complete analytics stack — from data integration and custom dashboards to multi-touch attribution and automated reporting."
          features={features}
        />
        <ServiceHowItWorks
          headlinePrefix="From Data Chaos to"
          gradientText="Crystal Clarity"
          description="A four-step process that transforms scattered data into a unified, actionable analytics platform."
          steps={steps}
        />
        <ServiceMetrics
          description="Our analytics and reporting solutions deliver clarity that drives better marketing decisions and higher ROI."
          metrics={metrics}
        />
        <ServiceCTA
          headline="Ready to See What's Working?"
          description="Book a free data audit and we'll show you exactly where your reporting gaps are — and how to fix them."
          proofPoints={proofPoints}
        />
      </main>
  )
}

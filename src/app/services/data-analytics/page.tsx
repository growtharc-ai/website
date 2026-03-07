import type { Metadata } from 'next'
import {
  BarChart3,
  Database,
  LineChart,
  PieChart,
  Plug,
  FileSpreadsheet,
  Search,
  Layers,
  Settings,
  Rocket,
} from 'lucide-react'
import { ServiceHero } from '@/components/sections/service/service-hero'
import { ServiceFeatures } from '@/components/sections/service/service-features'
import { ServiceHowItWorks } from '@/components/sections/service/service-how-it-works'
import { ServiceMetrics } from '@/components/sections/service/service-metrics'
import { ServiceCTA } from '@/components/sections/service/service-cta'

export const metadata: Metadata = {
  title: 'Data & Analytics / BI Dashboards — Growth Arc | AI Solutions That Grow Your Business',
  description:
    'Turn your business data into clear, actionable insights. We build custom dashboards and reporting systems that connect your tools, visualise KPIs, and surface the metrics that drive decisions.',
  openGraph: {
    title: 'Data & Analytics / BI Dashboards — Growth Arc | AI Solutions That Grow Your Business',
    description:
      'Custom dashboards and reporting systems that connect your tools, visualise KPIs, and surface the metrics that drive decisions.',
    url: 'https://www.growtharc.ai/services/data-analytics',
    siteName: 'Growth Arc',
    images: [
      {
        url: '/og-image-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Growth Arc — Data & Analytics / BI Dashboards',
      },
    ],
    locale: 'en_NZ',
    type: 'website',
  },
}

const features = [
  {
    icon: PieChart,
    title: 'Custom BI Dashboard Development',
    description:
      'Purpose-built dashboards tailored to your business — not generic templates. See the metrics that matter, presented the way your team actually uses them.',
    tint: 'blue' as const,
  },
  {
    icon: Database,
    title: 'Data Pipeline Setup & Integration',
    description:
      'Automated data pipelines that pull from your CRM, marketing platforms, financial systems, and internal tools into a single source of truth.',
    tint: 'green' as const,
  },
  {
    icon: LineChart,
    title: 'KPI Tracking & Automated Reporting',
    description:
      'Real-time KPI monitoring with automated reports delivered to your inbox — daily, weekly, or monthly. No more manual spreadsheet wrangling.',
    tint: 'blue' as const,
  },
  {
    icon: BarChart3,
    title: 'Data Visualisation & Storytelling',
    description:
      'Clear, intuitive visualisations that turn raw numbers into narratives. Charts, graphs, and dashboards designed to surface insights at a glance.',
    tint: 'green' as const,
  },
  {
    icon: Plug,
    title: 'CRM & Marketing Tool Integration',
    description:
      'Connect HubSpot, Salesforce, Google Analytics, Meta Ads, Xero, and more — unifying your data across sales, marketing, and finance.',
    tint: 'blue' as const,
  },
  {
    icon: FileSpreadsheet,
    title: 'Custom Reports & Data Exports',
    description:
      'Scheduled reports, custom data exports, and alerts that flag anomalies — keeping stakeholders informed without them having to dig through dashboards.',
    tint: 'green' as const,
  },
]

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Data Audit',
    description:
      'We audit your existing data sources, identify gaps, and map out what metrics and KPIs matter most to your business decisions.',
  },
  {
    number: '02',
    icon: Layers,
    title: 'Pipeline Architecture',
    description:
      'We design and build automated data pipelines that pull from all your systems — cleaning, transforming, and centralising your data.',
  },
  {
    number: '03',
    icon: Settings,
    title: 'Dashboard Build',
    description:
      'Custom dashboards are built to your specifications — interactive, real-time, and designed for the specific questions your team needs answered.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Deploy & Iterate',
    description:
      'Dashboards go live with automated reporting schedules. We refine visualisations, add new data sources, and expand coverage as your needs evolve.',
  },
]

const metrics = [
  { value: 10, suffix: 'x', label: 'Faster Reporting Cycles' },
  { value: 95, suffix: '%', label: 'Reduction in Manual Reporting' },
  { value: 100, suffix: '%', label: 'Data Source Consolidation' },
  { value: 24, suffix: '/7', label: 'Real-Time Data Access' },
]

const proofPoints = [
  'Custom-built for your specific KPIs and workflows',
  'Connects to CRMs, marketing tools, and financial systems',
  'Automated reports — no manual spreadsheet work',
  'Full ownership of your dashboards and data',
]

export default function DataAnalyticsPage() {
  return (
      <main>
        <ServiceHero
          icon={BarChart3}
          label="Data & Analytics / BI Dashboards"
          headline="Turn Your Data into"
          gradientText="Actionable Insights"
          subheadline="Custom dashboards, automated reporting, and unified data pipelines that connect your tools and surface the metrics that drive better business decisions."
          stats={[
            { value: 'Real-Time', label: 'KPI Dashboards' },
            { value: 'Automated', label: 'Reporting Pipelines' },
            { value: 'Unified', label: 'Data Sources' },
          ]}
        />
        <ServiceFeatures
          sectionLabel="Capabilities"
          headlinePrefix="Everything You Need to"
          gradientText="Master Your Data"
          description="From raw data to executive dashboards — we build the pipelines, visualisations, and automated reports that give your team clarity and confidence in every decision."
          features={features}
        />
        <ServiceHowItWorks
          headlinePrefix="From Scattered Data to"
          gradientText="Clear Decisions"
          description="A four-step process that turns fragmented data across multiple tools into a unified, real-time view of your business performance."
          steps={steps}
        />
        <ServiceMetrics
          description="Our data and analytics solutions eliminate manual reporting and put real-time insights in front of the people who need them."
          metrics={metrics}
        />
        <ServiceCTA
          headline="Ready to See Your Data Clearly?"
          description="Book a free data audit and we'll map out exactly how to unify your data sources and build dashboards your team will actually use."
          proofPoints={proofPoints}
        />
      </main>
  )
}

import type { Metadata } from 'next'
import {
  Megaphone,
  Target,
  PenTool,
  BarChart3,
  RefreshCw,
  DollarSign,
  ClipboardCheck,
  Layers,
  Rocket,
  TrendingUp,
} from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { ServiceHero } from '@/components/sections/service/service-hero'
import { ServiceFeatures } from '@/components/sections/service/service-features'
import { ServiceHowItWorks } from '@/components/sections/service/service-how-it-works'
import { ServiceMetrics } from '@/components/sections/service/service-metrics'
import { ServiceCTA } from '@/components/sections/service/service-cta'
import { Footer } from '@/components/sections/footer'

export const metadata: Metadata = {
  title: 'Ads Management — Growth Arc',
  description:
    'AI-optimised Google, Meta, and LinkedIn ad campaigns that maximise every dollar of ad spend. Growth Arc delivers leads, not impressions.',
  openGraph: {
    title: 'Ads Management — Growth Arc',
    description:
      'AI-optimised Google, Meta, and LinkedIn ad campaigns that maximise every dollar of ad spend.',
    url: 'https://growtharc.ai/services/ads-management',
    siteName: 'Growth Arc',
    images: [
      {
        url: '/og-image-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Growth Arc — Ads Management',
      },
    ],
    locale: 'en_NZ',
    type: 'website',
  },
}

const features = [
  {
    icon: Target,
    title: 'AI Audience Targeting',
    description:
      'Machine learning analyses your best customers to build lookalike audiences and identify high-intent segments across platforms.',
    tint: 'blue' as const,
  },
  {
    icon: PenTool,
    title: 'Creative & Copy',
    description:
      'AI-assisted ad creative and copy variations that are continuously tested and optimised for maximum click-through and conversion.',
    tint: 'green' as const,
  },
  {
    icon: RefreshCw,
    title: 'Automated Bid Management',
    description:
      'Real-time bid optimisation across Google, Meta, and LinkedIn ensures you get the best cost per acquisition — 24/7.',
    tint: 'blue' as const,
  },
  {
    icon: Layers,
    title: 'Cross-Platform Campaigns',
    description:
      'Coordinated campaigns across Google Ads, Meta (Facebook & Instagram), and LinkedIn — managed from a single strategy.',
    tint: 'green' as const,
  },
  {
    icon: DollarSign,
    title: 'Budget Optimisation',
    description:
      'AI dynamically shifts budget between platforms, campaigns, and audiences based on real-time performance data.',
    tint: 'blue' as const,
  },
  {
    icon: BarChart3,
    title: 'Attribution & Reporting',
    description:
      'Multi-touch attribution shows you exactly which ads drive revenue — not just clicks. Clear ROAS reporting you can act on.',
    tint: 'green' as const,
  },
]

const steps = [
  {
    number: '01',
    icon: ClipboardCheck,
    title: 'Strategy & Audit',
    description:
      'We audit your current ad accounts and build a data-driven strategy aligned with your growth goals and target audience.',
  },
  {
    number: '02',
    icon: Layers,
    title: 'Campaign Build',
    description:
      'We create campaigns with AI-optimised targeting, ad creative, landing pages, and conversion tracking across all platforms.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Launch & Test',
    description:
      'Campaigns go live with A/B testing baked in. AI continuously tests variations to find what converts best.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Optimise & Scale',
    description:
      'We scale winning campaigns, cut underperformers, and shift budget to maximise ROAS — with transparent weekly reporting.',
  },
]

const metrics = [
  { value: 40, suffix: '%', label: 'Lower Cost per Lead' },
  { value: 3, suffix: 'x', label: 'Return on Ad Spend' },
  { value: 50, suffix: '+', label: 'Ad Variations Tested Monthly' },
  { value: 25, suffix: '%', label: 'Higher Conversion Rates' },
]

const proofPoints = [
  'Google, Meta & LinkedIn certified team',
  'AI-powered bid and budget optimisation',
  'Transparent reporting with real ROAS tracking',
  'No long-term contracts — performance-based',
]

export default function AdsManagementPage() {
  return (
    <>
      <Navigation />
      <main>
        <ServiceHero
          icon={Megaphone}
          label="Ads Management"
          headline="Maximise Every Dollar with"
          gradientText="AI-Optimised Ads"
          subheadline="Google, Meta, and LinkedIn campaigns with AI optimisation that maximises your return on ad spend — not just impressions."
          stats={[
            { value: 'Multi-Platform', label: 'Campaign Management' },
            { value: 'AI-Optimised', label: 'Bid Management' },
            { value: 'Real-Time', label: 'Performance Tracking' },
          ]}
        />
        <ServiceFeatures
          sectionLabel="Capabilities"
          headlinePrefix="Everything You Need to"
          gradientText="Win at Paid Media"
          description="A complete ads management engine — from audience targeting and creative to bid optimisation and attribution — powered by AI."
          features={features}
        />
        <ServiceHowItWorks
          headlinePrefix="From Strategy to"
          gradientText="Scaled Growth"
          description="A four-step process that turns ad spend into predictable, measurable revenue growth across platforms."
          steps={steps}
        />
        <ServiceMetrics
          description="Our AI-optimised ad campaigns deliver real business results — measured in leads and revenue, not vanity metrics."
          metrics={metrics}
        />
        <ServiceCTA
          headline="Ready to Scale Your Ads?"
          description="Book a free ad account audit and we'll show you exactly where you're leaving money on the table."
          proofPoints={proofPoints}
        />
      </main>
      <Footer />
    </>
  )
}

import type { Metadata } from 'next'
import {
  Globe,
  Search,
  FileText,
  Link2,
  BarChart3,
  ClipboardCheck,
  Wrench,
  Pencil,
  Rocket,
} from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { ServiceHero } from '@/components/sections/service/service-hero'
import { ServiceFeatures } from '@/components/sections/service/service-features'
import { ServiceHowItWorks } from '@/components/sections/service/service-how-it-works'
import { ServiceMetrics } from '@/components/sections/service/service-metrics'
import { ServiceCTA } from '@/components/sections/service/service-cta'
import { Footer } from '@/components/sections/footer'

export const metadata: Metadata = {
  title: 'Traffic & SEO — Growth Arc',
  description:
    'Drive sustainable organic growth with AI-powered content strategy, technical SEO, and data-driven keyword targeting. Growth Arc scales your search visibility.',
  openGraph: {
    title: 'Traffic & SEO — Growth Arc',
    description:
      'Drive sustainable organic growth with AI-powered content strategy, technical SEO, and data-driven keyword targeting.',
    url: 'https://growtharc.ai/services/traffic-seo',
    siteName: 'Growth Arc',
    images: [
      {
        url: '/og-image-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Growth Arc — Traffic & SEO',
      },
    ],
    locale: 'en_NZ',
    type: 'website',
  },
}

const features = [
  {
    icon: Search,
    title: 'AI Keyword Research',
    description:
      'Our AI analyses search intent, competition, and opportunity to uncover the keywords that will drive the most qualified traffic.',
    tint: 'blue' as const,
  },
  {
    icon: FileText,
    title: 'Content Strategy',
    description:
      'Data-driven content calendars built around topic clusters, search demand, and your audience — not guesswork.',
    tint: 'green' as const,
  },
  {
    icon: Wrench,
    title: 'Technical SEO',
    description:
      'Site speed, Core Web Vitals, structured data, crawlability — we fix the foundations so search engines love your site.',
    tint: 'blue' as const,
  },
  {
    icon: Link2,
    title: 'Link Building',
    description:
      'Strategic outreach to earn high-authority backlinks that boost your domain rating and search rankings.',
    tint: 'green' as const,
  },
  {
    icon: Globe,
    title: 'Local & International SEO',
    description:
      'Whether you serve one city or fifty countries, we optimise your presence for the markets that matter most.',
    tint: 'blue' as const,
  },
  {
    icon: BarChart3,
    title: 'Rank Tracking & Reporting',
    description:
      'Real-time dashboards showing keyword positions, organic traffic, and revenue attribution — updated daily.',
    tint: 'green' as const,
  },
]

const steps = [
  {
    number: '01',
    icon: ClipboardCheck,
    title: 'SEO Audit',
    description:
      'We run a comprehensive technical and content audit to identify quick wins, gaps, and growth opportunities.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Keyword Mapping',
    description:
      'AI-powered keyword research maps high-intent terms to your pages, content gaps, and new topic clusters.',
  },
  {
    number: '03',
    icon: Pencil,
    title: 'Content & Optimisation',
    description:
      'We create and optimise content at scale — blog posts, landing pages, and on-page elements that rank.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Scale & Report',
    description:
      'Ongoing link building, technical improvements, and monthly reporting show clear ROI from organic growth.',
  },
]

const metrics = [
  { value: 150, suffix: '%', label: 'Average Traffic Increase' },
  { value: 45, suffix: '%', label: 'More Organic Leads' },
  { value: 3, suffix: 'x', label: 'Content Output' },
  { value: 90, suffix: '+', label: 'Lighthouse Score' },
]

const proofPoints = [
  'Full technical SEO audit included free',
  'AI-accelerated content production',
  'Transparent monthly performance reports',
  'No lock-in contracts — results speak for themselves',
]

export default function TrafficSEOPage() {
  return (
    <>
      <Navigation />
      <main>
        <ServiceHero
          icon={Globe}
          label="Traffic & SEO"
          headline="Dominate Search with"
          gradientText="AI-Powered SEO"
          subheadline="Data-driven content strategy and technical SEO that drives sustainable organic growth — so your best customers find you first."
          stats={[
            { value: 'AI-Driven', label: 'Content Strategy' },
            { value: 'Full-Stack', label: 'Technical SEO' },
            { value: 'Data-Led', label: 'Keyword Research' },
          ]}
        />
        <ServiceFeatures
          sectionLabel="Capabilities"
          headlinePrefix="Everything You Need to"
          gradientText="Rank & Grow"
          description="A complete SEO engine — from technical foundations and keyword research to content creation and link building — powered by AI."
          features={features}
        />
        <ServiceHowItWorks
          headlinePrefix="From Audit to"
          gradientText="Page One"
          description="A four-step process that transforms your search presence into a predictable source of qualified organic traffic."
          steps={steps}
        />
        <ServiceMetrics
          description="Our AI-powered SEO delivers measurable organic growth — not vanity rankings."
          metrics={metrics}
        />
        <ServiceCTA
          headline="Ready to Own Page One?"
          description="Book a free SEO audit and we'll show you exactly where your biggest organic growth opportunities are."
          proofPoints={proofPoints}
        />
      </main>
      <Footer />
    </>
  )
}

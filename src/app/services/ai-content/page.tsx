import type { Metadata } from 'next'
import {
  PenTool,
  FileText,
  Share2,
  Mail,
  ShoppingBag,
  Fingerprint,
  Search,
  ClipboardList,
  Sparkles,
  CheckCircle,
  BarChart3,
} from 'lucide-react'
import { ServiceHero } from '@/components/sections/service/service-hero'
import { ServiceFeatures } from '@/components/sections/service/service-features'
import { ServiceHowItWorks } from '@/components/sections/service/service-how-it-works'
import { ServiceMetrics } from '@/components/sections/service/service-metrics'
import { ServiceCTA } from '@/components/sections/service/service-cta'

export const metadata: Metadata = {
  title: 'AI Content Creation & Management — Growth Arc | AI Solutions That Grow Your Business',
  description:
    'AI-powered content at scale — blog posts, social media, email campaigns, product descriptions, and brand-consistent copy. Created faster, published smarter, optimised continuously.',
  openGraph: {
    title: 'AI Content Creation & Management — Growth Arc | AI Solutions That Grow Your Business',
    description:
      'AI-powered content at scale — blog posts, social media, email campaigns, and brand-consistent copy. Created faster, published smarter, optimised continuously.',
    url: 'https://www.growtharc.ai/services/ai-content',
    siteName: 'Growth Arc',
    images: [
      {
        url: '/og-image-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Growth Arc — AI Content Creation & Management',
      },
    ],
    locale: 'en_NZ',
    type: 'website',
  },
}

const features = [
  {
    icon: FileText,
    title: 'Blog & Article Creation',
    description:
      'AI-generated long-form content that ranks — research-backed blog posts, thought leadership articles, and landing page copy produced at 10x the speed of traditional writing.',
    tint: 'blue' as const,
  },
  {
    icon: Share2,
    title: 'Social Media Content',
    description:
      'Platform-optimised posts for LinkedIn, Instagram, X, and Facebook — complete with captions, hashtags, and scheduling. Consistent posting without the daily grind.',
    tint: 'green' as const,
  },
  {
    icon: Mail,
    title: 'Email Campaigns',
    description:
      'AI-crafted email sequences, newsletters, and drip campaigns that drive opens, clicks, and conversions — personalised at scale with dynamic subject lines and body copy.',
    tint: 'blue' as const,
  },
  {
    icon: ShoppingBag,
    title: 'Product Descriptions',
    description:
      'Compelling, conversion-focused product copy for e-commerce — hundreds of unique descriptions generated in hours, not weeks, with consistent tone and SEO built in.',
    tint: 'green' as const,
  },
  {
    icon: Fingerprint,
    title: 'Brand Voice Consistency',
    description:
      'Custom AI models trained on your brand guidelines, tone of voice, and style — ensuring every piece of content sounds unmistakably like your business, across every channel.',
    tint: 'blue' as const,
  },
  {
    icon: Search,
    title: 'SEO Content Optimisation',
    description:
      'Every piece of content is keyword-researched, structured for search intent, and optimised for rankings — with real-time scoring and improvement suggestions before publishing.',
    tint: 'green' as const,
  },
]

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Strategy',
    description:
      'We audit your existing content, define your brand voice, map your audience personas, and build a content calendar aligned with your business goals and SEO opportunities.',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'Create',
    description:
      'AI generates drafts across all your content channels — blog posts, social media, emails, and product copy — following your brand guidelines and targeting high-value keywords.',
  },
  {
    number: '03',
    icon: CheckCircle,
    title: 'Review & Refine',
    description:
      'Every piece goes through quality checks — fact verification, brand voice alignment, SEO scoring, and human review — before anything gets published under your name.',
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Publish & Optimise',
    description:
      'Content is scheduled and published across your channels. We track engagement, rankings, and conversions — then feed performance data back to continuously improve output.',
  },
]

const metrics = [
  { value: 10, suffix: 'x', label: 'Faster Content Production' },
  { value: 60, suffix: '%', label: 'Lower Content Costs' },
  { value: 45, suffix: '%', label: 'Higher Engagement Rates' },
  { value: 100, suffix: '+', label: 'Pieces Per Month' },
]

const proofPoints = [
  'Brand voice trained on your specific guidelines',
  'SEO-optimised content that ranks from day one',
  'Human review on every piece before publishing',
  'Multi-channel — blogs, social, email, and product copy',
  'Month-to-month — no lock-in contracts',
]

export default function AIContentPage() {
  return (
      <main>
        <ServiceHero
          icon={PenTool}
          label="AI Content Creation & Management"
          headline="Scale Your Content with"
          gradientText="AI-Powered Creation"
          subheadline="AI-powered content at scale — blog posts, social media, email campaigns, product descriptions, and brand-consistent copy. Created faster, published smarter, optimised continuously."
          stats={[
            { value: '10x Faster', label: 'Content Production' },
            { value: 'Multi-Channel', label: 'Blog, Social, Email' },
            { value: 'Brand-Trained', label: 'Your Voice, Every Time' },
          ]}
        />
        <ServiceFeatures
          sectionLabel="Capabilities"
          headlinePrefix="Everything You Need to"
          gradientText="Create Content at Scale"
          description="From long-form blog posts and social media to email campaigns and product descriptions — AI-powered content that sounds like your brand and performs in search."
          features={features}
        />
        <ServiceHowItWorks
          headlinePrefix="From Content Strategy to"
          gradientText="Continuous Optimisation"
          description="A four-step process that turns content from a bottleneck into a growth engine — producing more, publishing faster, and improving with every cycle."
          steps={steps}
        />
        <ServiceMetrics
          description="Our AI content engine delivers measurable results — more content, lower costs, and higher engagement across every channel."
          metrics={metrics}
        />
        <ServiceCTA
          headline="Ready to Scale Your Content?"
          description="Book a free content audit and we'll show you how AI can transform your content output — without sacrificing quality or brand consistency."
          proofPoints={proofPoints}
        />
      </main>
  )
}

import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { FadeIn } from '@/components/motion/fade-in'
import { StaggerContainer, StaggerItem } from '@/components/motion/stagger-children'

const posts = [
  {
    category: 'AI Strategy',
    categoryColor: 'text-[var(--ga-blue)]',
    categoryBg: 'bg-[var(--ga-blue)]/10',
    title: '5 Signs Your Business Is Ready for AI Automation',
    excerpt:
      "Not every business needs AI today. But these five signals mean you're leaving money on the table without it.",
    readTime: '4 min read',
    href: '/blog/signs-ready-for-ai',
  },
  {
    category: 'CRM',
    categoryColor: 'text-[var(--ga-green)]',
    categoryBg: 'bg-[var(--ga-green)]/10',
    title: 'HubSpot vs Salesforce vs Dynamics 365: Which CRM Fits Your Business?',
    excerpt:
      'We break down the three biggest CRM platforms by cost, complexity, and best fit.',
    readTime: '6 min read',
    href: '/blog/crm-comparison',
  },
  {
    category: 'Marketing',
    categoryColor: 'text-[var(--ga-green)]',
    categoryBg: 'bg-[var(--ga-green)]/10',
    title: 'Why AI Lead Generation Beats Traditional Outbound',
    excerpt:
      "AI agents don't sleep, don't forget to follow up, and learn from every interaction. Here's why that matters.",
    readTime: '5 min read',
    href: '/blog/ai-lead-generation-vs-outbound',
  },
]

export function Insights() {
  return (
    <section className="px-6 py-16 md:py-20" style={{ background: '#070910' }}>
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="text-sm font-semibold tracking-wider text-[var(--ga-green)] uppercase">
            Blog
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Latest{' '}
            <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
              Insights
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/50">
            Thoughts on AI, marketing, and building smarter businesses.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <StaggerItem key={post.href}>
              <Link href={post.href} className="group block h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:bg-white/[0.04]">
                  {/* Placeholder image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--ga-blue)]/20 to-[var(--ga-green)]/10" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,119,238,0.15),transparent_60%)]" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${post.categoryBg} ${post.categoryColor}`}
                      >
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-white/30">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold leading-snug transition-colors group-hover:text-white">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-[15px] leading-relaxed text-white/40">
                      {post.excerpt}
                    </p>
                    <p className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-medium text-[var(--ga-blue)] opacity-0 transition-all duration-300 group-hover:opacity-100">
                      Read more{' '}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </p>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition-colors hover:text-white"
          >
            View All Insights
            <ArrowRight className="h-4 w-4 transition-transform duration-300 hover:translate-x-0.5" />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { FadeIn } from '@/components/motion/fade-in'
import { StaggerContainer, StaggerItem } from '@/components/motion/stagger-children'
import { getPublishedPosts } from '@/data/blog-posts'
import { BlogHeroImage } from '@/components/blog-hero-image'

export const metadata: Metadata = {
  title: 'Blog — Growth Arc',
  description:
    'Insights on AI automation, CRM strategy, and smarter marketing. Practical advice from the Growth Arc team.',
  openGraph: {
    title: 'Blog — Growth Arc',
    description:
      'Insights on AI automation, CRM strategy, and smarter marketing. Practical advice from the Growth Arc team.',
    url: 'https://www.growtharc.ai/blog',
    siteName: 'Growth Arc',
    images: [
      {
        url: '/og-image-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Growth Arc Blog',
      },
    ],
    locale: 'en_NZ',
    type: 'website',
  },
}

export default function Blog() {
  const posts = getPublishedPosts()

  return (
    <main>
      {/* Hero */}
      <section
        className="px-6 pt-32 pb-16 md:pt-40 md:pb-20"
        style={{ background: 'linear-gradient(160deg, #060710 0%, #0A0F20 100%)' }}
      >
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="text-sm font-semibold tracking-wider text-[var(--ga-green)] uppercase">
              Blog
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Latest{' '}
              <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/50">
              Thoughts on AI, marketing, and building smarter businesses.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Posts grid */}
      <section className="px-6 py-16 md:py-24" style={{ background: '#07080E' }}>
        <div className="mx-auto max-w-7xl">
          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:bg-white/[0.04]">
                    {/* Hero image */}
                    <div className="relative aspect-video overflow-hidden">
                      <BlogHeroImage slug={post.slug} />
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
                      <h2 className="mt-4 text-xl font-semibold leading-snug transition-colors group-hover:text-white">
                        {post.title}
                      </h2>
                      <p className="mt-3 flex-1 line-clamp-2 text-[15px] leading-relaxed text-white/40">
                        {post.excerpt}
                      </p>
                      <p className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-medium text-[var(--ga-blue)] transition-all duration-300 group-hover:translate-x-1">
                        Read more{' '}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </p>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 md:py-20" style={{ background: '#0A0C14' }}>
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="text-2xl font-bold md:text-3xl">
              Want personalised advice?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/50">
              Take our free AI Readiness Assessment or book a strategy call to discuss
              how AI can help your business grow.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/tools/ai-readiness"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                AI Readiness Assessment
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-8 py-3.5 text-sm font-semibold text-white/70 transition-all hover:border-white/25 hover:text-white"
              >
                Book a Free Call
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}

import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { FadeIn } from '@/components/motion/fade-in'
import { StaggerContainer, StaggerItem } from '@/components/motion/stagger-children'
import { getPublishedPosts } from '@/data/blog-posts'
import { BlogHeroImage } from '@/components/blog-hero-image'

export function Insights() {
  const posts = getPublishedPosts().slice(0, 3)

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
                    <h3 className="mt-4 text-lg font-semibold leading-snug transition-colors group-hover:text-white">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 line-clamp-2 text-[15px] leading-relaxed text-white/40">
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

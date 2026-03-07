import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Clock, User, Linkedin, Share2, Check } from 'lucide-react'
import { FadeIn } from '@/components/motion/fade-in'
import { StaggerContainer, StaggerItem } from '@/components/motion/stagger-children'
import { getPostBySlug, getRelatedPosts, getPublishedPosts } from '@/data/blog-posts'
import { ShareButtons } from '@/components/share-buttons'
import { BlogHeroImage } from '@/components/blog-hero-image'

export async function generateStaticParams() {
  const posts = getPublishedPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: `${post.title} — Growth Arc`,
    description: post.metaDescription,
    openGraph: {
      title: `${post.title} — Growth Arc`,
      description: post.metaDescription,
      url: `https://www.growtharc.ai/blog/${post.slug}`,
      siteName: 'Growth Arc',
      images: [
        {
          url: '/og-image-1200x630.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'en_NZ',
      type: 'article',
      publishedTime: post.publishedAt,
    },
  }
}

function renderMarkdown(content: string) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let i = 0
  let tableRows: string[][] = []
  let inTable = false

  while (i < lines.length) {
    const line = lines[i]

    // Table detection
    if (line.startsWith('|') && line.endsWith('|')) {
      if (!inTable) {
        inTable = true
        tableRows = []
      }
      const cells = line
        .split('|')
        .slice(1, -1)
        .map((c) => c.trim())
      // Skip separator rows
      if (!cells.every((c) => /^[-:]+$/.test(c))) {
        tableRows.push(cells)
      }
      i++
      continue
    } else if (inTable) {
      // End of table
      inTable = false
      const headerRow = tableRows[0]
      const bodyRows = tableRows.slice(1)
      elements.push(
        <div key={`table-${i}`} className="my-8 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                {headerRow.map((cell, ci) => (
                  <th
                    key={ci}
                    className="border border-white/10 bg-white/[0.03] px-4 py-3 text-left font-semibold text-white/80"
                  >
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bodyRows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="border border-white/10 px-4 py-3 text-white/50"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }

    // Headings
    if (line.startsWith('## ')) {
      elements.push(
        <h2
          key={i}
          className="mt-10 mb-4 text-2xl font-bold text-white"
        >
          {renderInline(line.slice(3))}
        </h2>
      )
      i++
      continue
    }

    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="mt-8 mb-3 text-xl font-semibold text-white/90">
          {renderInline(line.slice(4))}
        </h3>
      )
      i++
      continue
    }

    // Numbered list
    if (/^\d+\.\s/.test(line)) {
      const listItems: string[] = []
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        listItems.push(lines[i].replace(/^\d+\.\s/, ''))
        i++
      }
      elements.push(
        <ol key={`ol-${i}`} className="my-4 list-decimal space-y-2 pl-6 text-white/60">
          {listItems.map((item, li) => (
            <li key={li}>{renderInline(item)}</li>
          ))}
        </ol>
      )
      continue
    }

    // Unordered list
    if (line.startsWith('- ')) {
      const listItems: string[] = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        listItems.push(lines[i].slice(2))
        i++
      }
      elements.push(
        <ul key={`ul-${i}`} className="my-4 list-disc space-y-2 pl-6 text-white/60">
          {listItems.map((item, li) => (
            <li key={li}>{renderInline(item)}</li>
          ))}
        </ul>
      )
      continue
    }

    // Empty line
    if (line.trim() === '') {
      i++
      continue
    }

    // Paragraph
    elements.push(
      <p key={i} className="my-4 text-[16px] leading-relaxed text-white/60">
        {renderInline(line)}
      </p>
    )
    i++
  }

  // Handle table at end of content
  if (inTable && tableRows.length > 0) {
    const headerRow = tableRows[0]
    const bodyRows = tableRows.slice(1)
    elements.push(
      <div key="table-end" className="my-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              {headerRow.map((cell, ci) => (
                <th
                  key={ci}
                  className="border border-white/10 bg-white/[0.03] px-4 py-3 text-left font-semibold text-white/80"
                >
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bodyRows.map((row, ri) => (
              <tr key={ri}>
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className="border border-white/10 px-4 py-3 text-white/50"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  return elements
}

function renderInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = []
  // Match **bold**, [text](url), `code`
  const regex = /(\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)|`([^`]+)`)/g
  let lastIndex = 0
  let match

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }

    if (match[2]) {
      // Bold
      parts.push(
        <strong key={match.index} className="font-semibold text-white/80">
          {match[2]}
        </strong>
      )
    } else if (match[3] && match[4]) {
      // Link
      parts.push(
        <Link
          key={match.index}
          href={match[4]}
          className="text-[var(--ga-blue)] underline decoration-[var(--ga-blue)]/30 underline-offset-2 transition-colors hover:text-[var(--ga-green)]"
        >
          {match[3]}
        </Link>
      )
    } else if (match[5]) {
      // Code
      parts.push(
        <code
          key={match.index}
          className="rounded bg-white/5 px-1.5 py-0.5 text-sm text-[var(--ga-green)]"
        >
          {match[5]}
        </code>
      )
    }

    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return parts
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post || post.status !== 'published') notFound()

  const related = getRelatedPosts(slug, 2)
  const articleUrl = `https://www.growtharc.ai/blog/${post.slug}`

  return (
    <main>
      {/* Hero */}
      <section
        className="px-6 pt-32 pb-16 md:pt-40 md:pb-20"
        style={{ background: 'linear-gradient(160deg, #060710 0%, #0A0F20 100%)' }}
      >
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-white/40 transition-colors hover:text-white/70"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Blog
            </Link>

            <div className="mt-6 flex items-center gap-3">
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

            <h1 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <div className="mt-6 flex items-center gap-4 text-sm text-white/40">
              <span className="flex items-center gap-1.5">
                <User className="h-3.5 w-3.5" />
                {post.author}
              </span>
              <span>{post.date}</span>
            </div>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/5 bg-white/[0.02] px-3 py-1 text-xs text-white/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Hero image */}
      <div className="relative mx-auto max-w-4xl px-6" style={{ marginTop: '-2rem' }}>
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/5">
          <BlogHeroImage slug={post.slug} animated />
        </div>
      </div>

      {/* Article body */}
      <section className="px-6 py-16 md:py-20" style={{ background: '#07080E' }}>
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <article>{renderMarkdown(post.content)}</article>
          </FadeIn>

          {/* Social share */}
          <div className="mt-12 border-t border-white/5 pt-8">
            <p className="mb-4 text-sm font-semibold text-white/40">Share this article</p>
            <ShareButtons title={post.title} url={articleUrl} />
          </div>
        </div>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="px-6 py-16 md:py-20" style={{ background: '#0A0C14' }}>
          <div className="mx-auto max-w-7xl">
            <FadeIn>
              <h2 className="text-2xl font-bold md:text-3xl">Related Articles</h2>
            </FadeIn>
            <StaggerContainer className="mt-8 grid gap-8 sm:grid-cols-2">
              {related.map((rp) => (
                <StaggerItem key={rp.slug}>
                  <Link href={`/blog/${rp.slug}`} className="group block h-full">
                    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:bg-white/[0.04]">
                      <div className="relative aspect-video overflow-hidden">
                        <BlogHeroImage slug={rp.slug} />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <div className="flex items-center gap-3">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${rp.categoryBg} ${rp.categoryColor}`}
                          >
                            {rp.category}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-white/30">
                            <Clock className="h-3 w-3" />
                            {rp.readTime}
                          </span>
                        </div>
                        <h3 className="mt-4 text-lg font-semibold leading-snug transition-colors group-hover:text-white">
                          {rp.title}
                        </h3>
                        <p className="mt-2 line-clamp-2 flex-1 text-[15px] leading-relaxed text-white/40">
                          {rp.excerpt}
                        </p>
                        <p className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-medium text-[var(--ga-blue)] transition-all duration-300 group-hover:translate-x-1">
                          Read more <ArrowRight className="h-3.5 w-3.5" />
                        </p>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-6 py-16 md:py-20" style={{ background: '#07080E' }}>
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="text-2xl font-bold md:text-3xl">
              Ready to explore AI for your business?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/50">
              Take our free AI Readiness Assessment to see where you stand, or book a strategy
              call to discuss the biggest opportunities.
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

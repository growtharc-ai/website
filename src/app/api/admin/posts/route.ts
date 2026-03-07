import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

async function checkAuth() {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')
  return !!session?.value
}

const POSTS_FILE = join(process.cwd(), 'src/data/blog-posts.ts')

function readPostsFile(): string {
  return readFileSync(POSTS_FILE, 'utf-8')
}

export async function GET() {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Parse posts from the TypeScript file
  const content = readPostsFile()

  // Extract post data using regex (simple approach for the TS data file)
  const postsMatch = content.match(/export const blogPosts: BlogPost\[\] = \[([\s\S]*?)\n\]/)
  if (!postsMatch) {
    return NextResponse.json({ posts: [] })
  }

  // Use dynamic import for the actual data
  try {
    const { blogPosts } = await import('@/data/blog-posts')
    return NextResponse.json({ posts: blogPosts })
  } catch {
    return NextResponse.json({ posts: [] })
  }
}

export async function POST(req: NextRequest) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const post = await req.json()

  // Validate required fields
  if (!post.slug || !post.title || !post.content) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // Read current file
  const fileContent = readPostsFile()

  // Build the new post entry
  const newPostEntry = `  {
    slug: ${JSON.stringify(post.slug)},
    title: ${JSON.stringify(post.title)},
    category: ${JSON.stringify(post.category || 'AI Strategy')},
    categoryColor: ${JSON.stringify(post.categoryColor || 'text-[var(--ga-blue)]')},
    categoryBg: ${JSON.stringify(post.categoryBg || 'bg-[var(--ga-blue)]/10')},
    metaDescription: ${JSON.stringify(post.metaDescription || post.excerpt || '')},
    excerpt: ${JSON.stringify(post.excerpt || '')},
    readTime: ${JSON.stringify(post.readTime || '5 min read')},
    author: ${JSON.stringify(post.author || 'Growth Arc Team')},
    date: ${JSON.stringify(post.date || new Date().toLocaleDateString('en-NZ', { month: 'long', year: 'numeric' }))},
    tags: ${JSON.stringify(post.tags || [])},
    status: ${JSON.stringify(post.status || 'draft')} as const,
    publishedAt: ${JSON.stringify(post.publishedAt || '')},
    heroImage: ${JSON.stringify(post.heroImage || '')},
    content: ${JSON.stringify(post.content)},
  }`

  // Insert before the closing bracket of the array
  const updatedContent = fileContent.replace(
    /\n\]\n\nexport function getPublishedPosts/,
    `,\n${newPostEntry},\n]\n\nexport function getPublishedPosts`
  )

  writeFileSync(POSTS_FILE, updatedContent, 'utf-8')

  return NextResponse.json({ success: true, slug: post.slug })
}

export async function PUT(req: NextRequest) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const post = await req.json()

  if (!post.slug) {
    return NextResponse.json({ error: 'Missing slug' }, { status: 400 })
  }

  // For updates, we need to rewrite the entire posts file
  // This is a simple approach — read all posts, find and replace, write back
  const { blogPosts } = await import('@/data/blog-posts')
  const index = blogPosts.findIndex((p) => p.slug === post.slug)

  if (index === -1) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 })
  }

  // Update the post
  blogPosts[index] = { ...blogPosts[index], ...post }

  // Rewrite the file
  rewritePostsFile(blogPosts)

  return NextResponse.json({ success: true })
}

export async function DELETE(req: NextRequest) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { slug } = await req.json()

  if (!slug) {
    return NextResponse.json({ error: 'Missing slug' }, { status: 400 })
  }

  const { blogPosts } = await import('@/data/blog-posts')
  const filtered = blogPosts.filter((p) => p.slug !== slug)

  if (filtered.length === blogPosts.length) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 })
  }

  rewritePostsFile(filtered)

  return NextResponse.json({ success: true })
}

function rewritePostsFile(posts: Array<Record<string, unknown>>) {
  const postsString = posts
    .map(
      (p) => `  {
    slug: ${JSON.stringify(p.slug)},
    title: ${JSON.stringify(p.title)},
    category: ${JSON.stringify(p.category)},
    categoryColor: ${JSON.stringify(p.categoryColor)},
    categoryBg: ${JSON.stringify(p.categoryBg)},
    metaDescription: ${JSON.stringify(p.metaDescription)},
    excerpt: ${JSON.stringify(p.excerpt)},
    readTime: ${JSON.stringify(p.readTime)},
    author: ${JSON.stringify(p.author)},
    date: ${JSON.stringify(p.date)},
    tags: ${JSON.stringify(p.tags)},
    status: ${JSON.stringify(p.status)} as const,
    publishedAt: ${JSON.stringify(p.publishedAt)},
    heroImage: ${JSON.stringify(p.heroImage || '')},
    content: ${JSON.stringify(p.content)},
  }`
    )
    .join(',\n')

  const fileContent = `export type BlogPost = {
  slug: string
  title: string
  category: string
  categoryColor: string
  categoryBg: string
  metaDescription: string
  excerpt: string
  readTime: string
  author: string
  date: string
  tags: string[]
  content: string // markdown
  status: 'published' | 'draft'
  publishedAt?: string
  heroImage?: string
}

export const blogPosts: BlogPost[] = [
${postsString},
]

export function getPublishedPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.status === 'published')
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getRelatedPosts(slug: string, limit = 2): BlogPost[] {
  const current = getPostBySlug(slug)
  if (!current) return []
  return blogPosts
    .filter((p) => p.slug !== slug && p.status === 'published')
    .slice(0, limit)
}
`

  writeFileSync(POSTS_FILE, fileContent, 'utf-8')
}

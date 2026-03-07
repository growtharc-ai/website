'use client'

import { useState, useEffect } from 'react'
import {
  LogOut,
  Plus,
  Pencil,
  Trash2,
  Eye,
  Sparkles,
  Lightbulb,
  Save,
  Send,
  ArrowLeft,
  Loader2,
  ImageIcon,
  RefreshCw,
} from 'lucide-react'

type BlogPost = {
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
  content: string
  status: 'published' | 'draft'
  publishedAt?: string
  heroImage?: string
}

type Suggestion = {
  topic: string
  category: string
}

const CATEGORIES = [
  { value: 'AI Strategy', color: 'text-[var(--ga-blue)]', bg: 'bg-[var(--ga-blue)]/10' },
  { value: 'CRM', color: 'text-[var(--ga-green)]', bg: 'bg-[var(--ga-green)]/10' },
  { value: 'Marketing', color: 'text-[var(--ga-green)]', bg: 'bg-[var(--ga-green)]/10' },
  { value: 'Automation', color: 'text-[var(--ga-blue)]', bg: 'bg-[var(--ga-blue)]/10' },
  { value: 'Development', color: 'text-[var(--ga-blue)]', bg: 'bg-[var(--ga-blue)]/10' },
]

export function BlogAdmin() {
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [view, setView] = useState<'list' | 'edit'>('list')
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [isNew, setIsNew] = useState(false)
  const [saving, setSaving] = useState(false)
  const [generating, setGenerating] = useState(false)
  const [suggestions, setSuggestions] = useState<Suggestion[]>([])
  const [loadingSuggestions, setLoadingSuggestions] = useState(false)
  const [generateTopic, setGenerateTopic] = useState('')
  const [generateInstructions, setGenerateInstructions] = useState('')
  const [generatingImage, setGeneratingImage] = useState(false)
  const [message, setMessage] = useState('')

  // Check auth on mount
  useEffect(() => {
    fetch('/api/admin/auth')
      .then((r) => {
        if (r.ok) {
          setAuthenticated(true)
          loadPosts()
        }
      })
      .catch(() => {})
  }, [])

  async function login() {
    setLoginError('')
    const res = await fetch('/api/admin/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
    if (res.ok) {
      setAuthenticated(true)
      loadPosts()
    } else {
      setLoginError('Invalid password')
    }
  }

  async function logout() {
    await fetch('/api/admin/auth', { method: 'DELETE' })
    setAuthenticated(false)
    setPosts([])
  }

  async function loadPosts() {
    const res = await fetch('/api/admin/posts')
    if (res.ok) {
      const data = await res.json()
      setPosts(data.posts || [])
    }
  }

  function newPost() {
    setEditingPost({
      slug: '',
      title: '',
      category: 'AI Strategy',
      categoryColor: 'text-[var(--ga-blue)]',
      categoryBg: 'bg-[var(--ga-blue)]/10',
      metaDescription: '',
      excerpt: '',
      readTime: '5 min read',
      author: 'Growth Arc Team',
      date: new Date().toLocaleDateString('en-NZ', { month: 'long', year: 'numeric' }),
      tags: [],
      content: '',
      status: 'draft',
      publishedAt: '',
    })
    setIsNew(true)
    setView('edit')
  }

  function editPost(post: BlogPost) {
    setEditingPost({ ...post })
    setIsNew(false)
    setView('edit')
  }

  async function savePost(publish = false) {
    if (!editingPost) return
    setSaving(true)
    setMessage('')

    const post = {
      ...editingPost,
      status: publish ? 'published' : editingPost.status,
      publishedAt: publish
        ? new Date().toISOString().split('T')[0]
        : editingPost.publishedAt,
    }

    // Set category colors
    const cat = CATEGORIES.find((c) => c.value === post.category)
    if (cat) {
      post.categoryColor = cat.color
      post.categoryBg = cat.bg
    }

    const method = isNew ? 'POST' : 'PUT'
    const res = await fetch('/api/admin/posts', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    })

    if (res.ok) {
      setMessage(publish ? 'Published!' : 'Saved!')
      await loadPosts()
      setView('list')
      setEditingPost(null)
    } else {
      const err = await res.json()
      setMessage(`Error: ${err.error}`)
    }
    setSaving(false)
  }

  async function deletePost(slug: string) {
    if (!confirm('Delete this post?')) return
    const res = await fetch('/api/admin/posts', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug }),
    })
    if (res.ok) {
      await loadPosts()
      setMessage('Deleted')
    }
  }

  async function generateImage(slug?: string, title?: string, category?: string) {
    const s = slug || editingPost?.slug
    const t = title || editingPost?.title
    const c = category || editingPost?.category
    if (!s || !t) return

    if (!confirm('Generate hero image? (~$0.04 per image)')) return

    setGeneratingImage(true)
    setMessage('')

    const res = await fetch('/api/admin/generate-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug: s, title: t, category: c }),
    })

    if (res.ok) {
      const { heroImage } = await res.json()
      if (editingPost) {
        setEditingPost({ ...editingPost, heroImage })
      }
      // If called from list view (not editing), save heroImage to post directly
      if (!editingPost || editingPost.slug !== s) {
        await fetch('/api/admin/posts', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ slug: s, heroImage }),
        })
        await loadPosts()
      }
      setMessage('Image generated!')
    } else {
      const err = await res.json()
      setMessage(`Image error: ${err.error}`)
    }
    setGeneratingImage(false)
  }

  async function generateArticle() {
    if (!generateTopic) return
    setGenerating(true)
    setMessage('')

    const res = await fetch('/api/admin/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic: generateTopic, instructions: generateInstructions }),
    })

    if (res.ok) {
      const article = await res.json()
      setEditingPost({
        ...article,
        status: 'draft',
      })
      setIsNew(true)
      setView('edit')
      setGenerateTopic('')
      setGenerateInstructions('')
    } else {
      setMessage('Generation failed. Check OpenAI API key.')
    }
    setGenerating(false)
  }

  async function loadSuggestions() {
    setLoadingSuggestions(true)
    const res = await fetch('/api/admin/suggest')
    if (res.ok) {
      const data = await res.json()
      setSuggestions(data.suggestions || data.topics || [])
    }
    setLoadingSuggestions(false)
  }

  function updateField(field: keyof BlogPost, value: string | string[]) {
    if (!editingPost) return
    setEditingPost({ ...editingPost, [field]: value })
  }

  function slugify(text: string) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
  }

  // Login screen
  if (!authenticated) {
    return (
      <main
        className="flex min-h-screen items-center justify-center px-6"
        style={{ background: 'linear-gradient(160deg, #060710 0%, #0A0F20 100%)' }}
      >
        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-bold">Blog Admin</h1>
          <p className="mt-2 text-sm text-white/40">Enter your admin password to continue.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              login()
            }}
            className="mt-6"
          >
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-[var(--ga-blue)]"
              autoFocus
            />
            {loginError && (
              <p className="mt-2 text-sm text-red-400">{loginError}</p>
            )}
            <button
              type="submit"
              className="mt-4 w-full rounded-lg bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] px-4 py-3 text-sm font-semibold text-white"
            >
              Sign In
            </button>
          </form>
        </div>
      </main>
    )
  }

  // Editor view
  if (view === 'edit' && editingPost) {
    return (
      <main
        className="min-h-screen px-6 pt-28 pb-16"
        style={{ background: 'linear-gradient(160deg, #060710 0%, #0A0F20 100%)' }}
      >
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                setView('list')
                setEditingPost(null)
              }}
              className="flex items-center gap-2 text-sm text-white/40 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
            <div className="flex gap-3">
              <button
                onClick={() => savePost(false)}
                disabled={saving}
                className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-white/60 hover:border-white/20 hover:text-white disabled:opacity-50"
              >
                {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                Save Draft
              </button>
              <button
                onClick={() => savePost(true)}
                disabled={saving}
                className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
              >
                {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                Publish
              </button>
            </div>
          </div>

          {message && (
            <p className="mt-4 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60">
              {message}
            </p>
          )}

          <div className="mt-6 space-y-4">
            {/* Title */}
            <div>
              <label className="text-xs font-semibold text-white/30 uppercase">Title</label>
              <input
                value={editingPost.title}
                onChange={(e) => {
                  updateField('title', e.target.value)
                  if (isNew) updateField('slug', slugify(e.target.value))
                }}
                className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-lg font-semibold text-white outline-none focus:border-[var(--ga-blue)]"
                placeholder="Article title"
              />
            </div>

            {/* Slug */}
            <div>
              <label className="text-xs font-semibold text-white/30 uppercase">Slug</label>
              <input
                value={editingPost.slug}
                onChange={(e) => updateField('slug', e.target.value)}
                className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 outline-none focus:border-[var(--ga-blue)]"
              />
            </div>

            {/* Category + Read Time */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-white/30 uppercase">Category</label>
                <select
                  value={editingPost.category}
                  onChange={(e) => updateField('category', e.target.value)}
                  className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white outline-none focus:border-[var(--ga-blue)]"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.value}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-white/30 uppercase">Read Time</label>
                <input
                  value={editingPost.readTime}
                  onChange={(e) => updateField('readTime', e.target.value)}
                  className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 outline-none focus:border-[var(--ga-blue)]"
                />
              </div>
            </div>

            {/* Meta Description */}
            <div>
              <label className="text-xs font-semibold text-white/30 uppercase">
                Meta Description{' '}
                <span className="text-white/20">
                  ({editingPost.metaDescription.length}/160)
                </span>
              </label>
              <textarea
                value={editingPost.metaDescription}
                onChange={(e) => updateField('metaDescription', e.target.value)}
                maxLength={160}
                rows={2}
                className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 outline-none focus:border-[var(--ga-blue)]"
              />
            </div>

            {/* Excerpt */}
            <div>
              <label className="text-xs font-semibold text-white/30 uppercase">Excerpt</label>
              <textarea
                value={editingPost.excerpt}
                onChange={(e) => updateField('excerpt', e.target.value)}
                rows={2}
                className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 outline-none focus:border-[var(--ga-blue)]"
              />
            </div>

            {/* Tags */}
            <div>
              <label className="text-xs font-semibold text-white/30 uppercase">
                Tags (comma separated)
              </label>
              <input
                value={editingPost.tags.join(', ')}
                onChange={(e) =>
                  updateField(
                    'tags',
                    e.target.value.split(',').map((t) => t.trim()).filter(Boolean)
                  )
                }
                className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 outline-none focus:border-[var(--ga-blue)]"
              />
            </div>

            {/* Date */}
            <div>
              <label className="text-xs font-semibold text-white/30 uppercase">Date</label>
              <input
                value={editingPost.date}
                onChange={(e) => updateField('date', e.target.value)}
                className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 outline-none focus:border-[var(--ga-blue)]"
              />
            </div>

            {/* Hero Image */}
            <div>
              <label className="text-xs font-semibold text-white/30 uppercase">Hero Image</label>
              {editingPost.heroImage ? (
                <div className="mt-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={editingPost.heroImage}
                    alt="Hero preview"
                    className="w-full rounded-lg border border-white/10"
                  />
                  <div className="mt-2 flex gap-2">
                    <button
                      onClick={() => generateImage()}
                      disabled={generatingImage}
                      className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-white/40 hover:text-white disabled:opacity-50"
                    >
                      {generatingImage ? <Loader2 className="h-3 w-3 animate-spin" /> : <RefreshCw className="h-3 w-3" />}
                      Regenerate (~$0.04)
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mt-2">
                  <button
                    onClick={() => generateImage()}
                    disabled={generatingImage || !editingPost.slug || !editingPost.title}
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/50 hover:border-white/20 hover:text-white disabled:opacity-50"
                  >
                    {generatingImage ? <Loader2 className="h-4 w-4 animate-spin" /> : <ImageIcon className="h-4 w-4" />}
                    {generatingImage ? 'Generating image...' : 'Generate Hero Image (~$0.04)'}
                  </button>
                  {(!editingPost.slug || !editingPost.title) && (
                    <p className="mt-1 text-xs text-white/20">Add a title first</p>
                  )}
                </div>
              )}
            </div>

            {/* Content */}
            <div>
              <label className="text-xs font-semibold text-white/30 uppercase">
                Content (Markdown)
              </label>
              <textarea
                value={editingPost.content}
                onChange={(e) => updateField('content', e.target.value)}
                rows={24}
                className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 font-mono text-sm leading-relaxed text-white/60 outline-none focus:border-[var(--ga-blue)]"
                placeholder="Write your article in markdown..."
              />
            </div>
          </div>
        </div>
      </main>
    )
  }

  // Post list view
  return (
    <main
      className="min-h-screen px-6 pt-28 pb-16"
      style={{ background: 'linear-gradient(160deg, #060710 0%, #0A0F20 100%)' }}
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Blog Admin</h1>
            <p className="mt-1 text-sm text-white/40">
              {posts.length} articles ({posts.filter((p) => p.status === 'published').length}{' '}
              published, {posts.filter((p) => p.status === 'draft').length} drafts)
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={newPost}
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] px-4 py-2 text-sm font-semibold text-white"
            >
              <Plus className="h-4 w-4" />
              New Article
            </button>
            <button
              onClick={logout}
              className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-white/40 hover:text-white"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>

        {message && (
          <p className="mt-4 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60">
            {message}
          </p>
        )}

        {/* AI Generation */}
        <div className="mt-8 rounded-2xl border border-white/5 bg-white/[0.02] p-6">
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <Sparkles className="h-5 w-5 text-[var(--ga-green)]" />
            AI Article Generator
          </h2>
          <div className="mt-4 space-y-3">
            <input
              value={generateTopic}
              onChange={(e) => setGenerateTopic(e.target.value)}
              placeholder="Enter a topic (e.g., 'How AI chatbots reduce customer service costs')"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-[var(--ga-blue)]"
            />
            <textarea
              value={generateInstructions}
              onChange={(e) => setGenerateInstructions(e.target.value)}
              placeholder="Additional instructions (optional)"
              rows={2}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 placeholder-white/20 outline-none focus:border-[var(--ga-blue)]"
            />
            <div className="flex gap-3">
              <button
                onClick={generateArticle}
                disabled={generating || !generateTopic}
                className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
              >
                {generating ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="h-4 w-4" />
                )}
                {generating ? 'Generating...' : 'Generate Article'}
              </button>
              <button
                onClick={loadSuggestions}
                disabled={loadingSuggestions}
                className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-white/40 hover:text-white disabled:opacity-50"
              >
                {loadingSuggestions ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Lightbulb className="h-4 w-4" />
                )}
                Suggest Topics
              </button>
            </div>
          </div>

          {suggestions.length > 0 && (
            <div className="mt-4 space-y-2">
              <p className="text-xs font-semibold text-white/30 uppercase">Suggestions</p>
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setGenerateTopic(s.topic)}
                  className="block w-full rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3 text-left text-sm text-white/50 transition-colors hover:border-white/10 hover:text-white"
                >
                  <span className="text-xs font-semibold text-[var(--ga-blue)]">
                    {s.category}
                  </span>
                  <p className="mt-1">{s.topic}</p>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Posts list */}
        <div className="mt-8 space-y-3">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4 transition-colors hover:border-white/10"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                      post.status === 'published'
                        ? 'bg-[var(--ga-green)]/10 text-[var(--ga-green)]'
                        : 'bg-white/5 text-white/30'
                    }`}
                  >
                    {post.status}
                  </span>
                  <span className="text-xs text-white/20">{post.category}</span>
                </div>
                <p className="mt-1 font-semibold">{post.title}</p>
                <p className="mt-0.5 text-xs text-white/30">
                  {post.date} · {post.readTime}
                </p>
              </div>
              <div className="flex gap-2">
                {post.status === 'published' && (
                  <a
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-white/10 p-2 text-white/30 hover:text-white"
                    title="View"
                  >
                    <Eye className="h-4 w-4" />
                  </a>
                )}
                <button
                  onClick={() => generateImage(post.slug, post.title, post.category)}
                  disabled={generatingImage}
                  className={`rounded-lg border border-white/10 p-2 transition-colors ${post.heroImage ? 'text-[var(--ga-green)]/50 hover:text-[var(--ga-green)]' : 'text-white/30 hover:text-white'} disabled:opacity-50`}
                  title={post.heroImage ? 'Regenerate image' : 'Generate image'}
                >
                  {generatingImage ? <Loader2 className="h-4 w-4 animate-spin" /> : <ImageIcon className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => editPost(post)}
                  className="rounded-lg border border-white/10 p-2 text-white/30 hover:text-white"
                  title="Edit"
                >
                  <Pencil className="h-4 w-4" />
                </button>
                <button
                  onClick={() => deletePost(post.slug)}
                  className="rounded-lg border border-white/10 p-2 text-white/30 hover:text-red-400"
                  title="Delete"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

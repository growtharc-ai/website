'use client'

import { useState } from 'react'
import { Linkedin, Check, Link2 } from 'lucide-react'

export function ShareButtons({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false)

  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  const xUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`

  return (
    <div className="flex gap-3">
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-white/50 transition-colors hover:border-white/20 hover:text-white"
      >
        <Linkedin className="h-4 w-4" />
        LinkedIn
      </a>
      <a
        href={xUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-white/50 transition-colors hover:border-white/20 hover:text-white"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        Post
      </a>
      <button
        onClick={() => {
          navigator.clipboard.writeText(url)
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        }}
        className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-white/50 transition-colors hover:border-white/20 hover:text-white"
      >
        {copied ? (
          <>
            <Check className="h-4 w-4 text-[var(--ga-green)]" />
            Copied
          </>
        ) : (
          <>
            <Link2 className="h-4 w-4" />
            Copy Link
          </>
        )}
      </button>
    </div>
  )
}

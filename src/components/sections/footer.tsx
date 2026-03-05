import Link from 'next/link'
import { Instagram, Twitter, Linkedin, Youtube, Github } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/growtharc.ai', label: 'Instagram' },
  { icon: Twitter, href: 'https://x.com/growtharc_ai', label: 'X' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/growtharc-ai', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://youtube.com/@GrowthArc-Ai', label: 'YouTube' },
  { icon: Github, href: 'https://github.com/growtharc-ai', label: 'GitHub' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050508] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo/02-logo-primary-dark.svg"
                alt="Growth Arc"
                width={150}
                height={36}
                loading="lazy"
              />
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/35">
              AI-powered solutions that scale. Helping businesses grow faster
              with intelligent automation, CRM, and data-driven strategy.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-sm font-semibold text-white/50">Navigation</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/35 transition-colors hover:text-white/70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-sm font-semibold text-white/50">Connect</p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/5 bg-white/[0.02] text-white/35 transition-colors hover:border-white/10 hover:text-white/60"
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-white/25 md:flex-row">
          <p>&copy; 2026 NextGen AI Marketing Ltd. Trading as Growth Arc.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white/50">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-white/50">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { useEffect, useRef, type ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

const transforms = {
  up: 'translateY(24px)',
  down: 'translateY(-24px)',
  left: 'translateX(24px)',
  right: 'translateX(-24px)',
  none: 'none',
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = 'up',
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Elements already in viewport on mount — don't animate, leave visible
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight + 80) return

    // Below-fold elements: hide, then reveal on scroll
    el.style.opacity = '0'
    el.style.transform = transforms[direction]
    el.style.transition =
      'opacity 0.6s cubic-bezier(0.21, 0.47, 0.32, 0.98), transform 0.6s cubic-bezier(0.21, 0.47, 0.32, 0.98)'

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1'
            el.style.transform = 'translate(0, 0)'
          }, delay * 1000)
          observer.unobserve(el)
        }
      },
      { rootMargin: '-80px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, direction])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

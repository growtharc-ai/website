'use client'

import { useEffect, useRef, type ReactNode } from 'react'

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const items = container.querySelectorAll<HTMLElement>('[data-stagger-item]')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((item, i) => {
            setTimeout(() => {
              item.style.opacity = '1'
              item.style.transform = 'translateY(0)'
            }, i * staggerDelay * 1000)
          })
          observer.unobserve(container)
        }
      },
      { rootMargin: '-60px' }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [staggerDelay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      data-stagger-item
      className={className}
      style={{
        opacity: 0,
        transform: 'translateY(24px)',
        transition:
          'opacity 0.5s cubic-bezier(0.21, 0.47, 0.32, 0.98), transform 0.5s cubic-bezier(0.21, 0.47, 0.32, 0.98)',
      }}
    >
      {children}
    </div>
  )
}

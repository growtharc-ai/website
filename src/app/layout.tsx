import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Growth Arc — AI-Powered Marketing That Scales',
  description:
    'Growth Arc helps businesses grow faster with AI-driven lead generation, SEO, sales automation, and marketing strategy. Based in New Zealand, serving globally.',
  openGraph: {
    title: 'Growth Arc — AI-Powered Marketing That Scales',
    description:
      'Growth Arc helps businesses grow faster with AI-driven lead generation, SEO, sales automation, and marketing strategy. Based in New Zealand, serving globally.',
    url: 'https://growtharc.ai',
    siteName: 'Growth Arc',
    images: [
      {
        url: '/og-image-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Growth Arc — AI-Powered Marketing That Scales',
      },
    ],
    locale: 'en_NZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Growth Arc — AI-Powered Marketing That Scales',
    description:
      'Growth Arc helps businesses grow faster with AI-driven lead generation, SEO, sales automation, and marketing strategy.',
    images: ['/og-image-1200x630.png'],
  },
  metadataBase: new URL('https://growtharc.ai'),
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={sora.variable}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}

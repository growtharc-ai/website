import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { Sora } from 'next/font/google'
import Script from 'next/script'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/sections/footer'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sora',
  display: 'optional',
})

export const metadata: Metadata = {
  title: 'Growth Arc — AI Solutions That Grow Your Business',
  description:
    'Growth Arc builds AI-powered marketing, CRM solutions, custom AI agents, and business automation that help companies grow faster. Based in NZ, serving globally.',
  openGraph: {
    title: 'Growth Arc — AI Solutions That Grow Your Business',
    description:
      'Growth Arc builds AI-powered marketing, CRM solutions, custom AI agents, and business automation that help companies grow faster. Based in NZ, serving globally.',
    url: 'https://growtharc.ai',
    siteName: 'Growth Arc',
    images: [
      {
        url: '/og-image-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Growth Arc — AI Solutions That Grow Your Business',
      },
    ],
    locale: 'en_NZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Growth Arc — AI Solutions That Grow Your Business',
    description:
      'Growth Arc builds AI-powered marketing, CRM solutions, custom AI agents, and business automation that help companies grow faster.',
    images: ['/og-image-1200x630.png'],
  },
  metadataBase: new URL('https://growtharc.ai'),
  icons: {
    icon: [
      { url: '/logo/08-icon-gradient-dark.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = await headers()
  const nonce = headersList.get('x-nonce') ?? ''

  return (
    <html lang="en" className={sora.variable}>
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://js-ap1.hs-scripts.com" />
        <link rel="dns-prefetch" href="https://challenges.cloudflare.com" />
      </head>
      <body className="font-sans">
        <Navigation />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y82ZN9TM4Z"
          strategy="lazyOnload"
          nonce={nonce}
        />
        <Script id="ga4-init" strategy="lazyOnload" nonce={nonce}>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y82ZN9TM4Z');
          `}
        </Script>
        <Script
          id="hs-script-loader"
          src="//js-ap1.hs-scripts.com/442455546.js"
          strategy="lazyOnload"
          nonce={nonce}
        />
        {children}
        <Footer />
      </body>
    </html>
  )
}

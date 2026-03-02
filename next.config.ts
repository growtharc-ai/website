import type { NextConfig } from 'next'

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://js-ap1.hs-scripts.com https://js-ap1.hs-analytics.net https://js-ap1.hs-banner.com https://js-ap1.hscollectedforms.net https://*.hubspot.com https://*.hsforms.com https://*.hs-banner.com https://*.hs-analytics.net https://*.hscollectedforms.net https://challenges.cloudflare.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https: https://*.hubspot.com https://*.hsforms.net",
      "connect-src 'self' https://www.google-analytics.com https://api.hubapi.com https://*.hubspot.com https://*.hubapi.com https://*.hs-analytics.net https://*.hscollectedforms.net https://challenges.cloudflare.com",
      "frame-src https://challenges.cloudflare.com https://*.hubspot.com",
    ].join('; '),
  },
]

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/logo/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/(.*\\.(?:png|jpg|jpeg|gif|webp|avif|ico|svg))',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400' },
        ],
      },
    ]
  },
}

export default nextConfig

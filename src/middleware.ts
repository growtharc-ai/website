import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')

  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://*.googletagmanager.com https://*.google-analytics.com https://*.google.com https://*.hs-scripts.com https://*.hs-analytics.net https://*.hs-banner.com https://*.hscollectedforms.net https://*.hubspot.com https://*.hsforms.com https://*.hsforms.net https://challenges.cloudflare.com`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self' data:",
    `connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.google.com https://*.doubleclick.net https://*.hubspot.com https://*.hubapi.com https://*.hs-analytics.net https://*.hscollectedforms.net https://*.hsforms.net https://challenges.cloudflare.com`,
    "frame-src https://challenges.cloudflare.com https://*.hubspot.com https://*.doubleclick.net",
  ].join('; ')

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-nonce', nonce)

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  })

  response.headers.set('Content-Security-Policy', csp)

  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon\\.ico|logo/|.*\\.(?:png|jpg|jpeg|gif|webp|avif|ico|svg)$).*)',
  ],
}

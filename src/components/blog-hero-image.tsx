/**
 * SVG hero images for blog posts — dark gradient backgrounds with subtle themed patterns.
 * Each image is 16:9 aspect ratio, rendered inline as pure SVG (no external assets).
 */

function AiAutomationPattern() {
  return (
    <svg
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="bg-ai" x1="0" y1="0" x2="800" y2="450" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#060710" />
          <stop offset="100%" stopColor="#0A1628" />
        </linearGradient>
        <radialGradient id="glow-ai" cx="65%" cy="35%" r="45%">
          <stop offset="0%" stopColor="#0077EE" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#0077EE" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="glow-ai-2" cx="30%" cy="70%" r="35%">
          <stop offset="0%" stopColor="#00C896" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#00C896" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="450" fill="url(#bg-ai)" />
      <rect width="800" height="450" fill="url(#glow-ai)" />
      <rect width="800" height="450" fill="url(#glow-ai-2)" />

      {/* Circuit pattern — abstract AI/automation nodes and connections */}
      <g stroke="#0077EE" strokeOpacity="0.12" strokeWidth="1" fill="none">
        {/* Horizontal lines */}
        <line x1="100" y1="120" x2="350" y2="120" />
        <line x1="400" y1="120" x2="700" y2="120" />
        <line x1="150" y1="225" x2="650" y2="225" />
        <line x1="200" y1="330" x2="600" y2="330" />
        {/* Vertical connections */}
        <line x1="350" y1="120" x2="350" y2="225" />
        <line x1="500" y1="120" x2="500" y2="330" />
        <line x1="250" y1="225" x2="250" y2="330" />
        {/* Diagonal */}
        <line x1="400" y1="120" x2="350" y2="225" />
        <line x1="500" y1="225" x2="600" y2="330" />
      </g>

      {/* Nodes */}
      <g fill="none">
        <circle cx="350" cy="120" r="6" stroke="#0077EE" strokeOpacity="0.25" strokeWidth="1.5" />
        <circle cx="350" cy="120" r="2.5" fill="#0077EE" fillOpacity="0.4" />
        <circle cx="500" cy="120" r="6" stroke="#0077EE" strokeOpacity="0.25" strokeWidth="1.5" />
        <circle cx="500" cy="120" r="2.5" fill="#0077EE" fillOpacity="0.4" />
        <circle cx="350" cy="225" r="8" stroke="#00C896" strokeOpacity="0.2" strokeWidth="1.5" />
        <circle cx="350" cy="225" r="3" fill="#00C896" fillOpacity="0.35" />
        <circle cx="500" cy="225" r="6" stroke="#0077EE" strokeOpacity="0.25" strokeWidth="1.5" />
        <circle cx="500" cy="225" r="2.5" fill="#0077EE" fillOpacity="0.4" />
        <circle cx="250" cy="225" r="5" stroke="#0077EE" strokeOpacity="0.2" strokeWidth="1" />
        <circle cx="250" cy="225" r="2" fill="#0077EE" fillOpacity="0.3" />
        <circle cx="250" cy="330" r="6" stroke="#0077EE" strokeOpacity="0.25" strokeWidth="1.5" />
        <circle cx="250" cy="330" r="2.5" fill="#0077EE" fillOpacity="0.4" />
        <circle cx="500" cy="330" r="7" stroke="#00C896" strokeOpacity="0.2" strokeWidth="1.5" />
        <circle cx="500" cy="330" r="3" fill="#00C896" fillOpacity="0.3" />
        <circle cx="600" cy="330" r="5" stroke="#0077EE" strokeOpacity="0.2" strokeWidth="1" />
        <circle cx="600" cy="330" r="2" fill="#0077EE" fillOpacity="0.3" />
      </g>

      {/* Abstract brain/chip icon in centre */}
      <g transform="translate(380, 190)" stroke="#0077EE" strokeOpacity="0.15" strokeWidth="1.2" fill="none">
        <rect x="0" y="0" width="40" height="40" rx="8" />
        <rect x="10" y="10" width="20" height="20" rx="3" />
        {/* Pins */}
        <line x1="15" y1="0" x2="15" y2="-8" />
        <line x1="25" y1="0" x2="25" y2="-8" />
        <line x1="15" y1="40" x2="15" y2="48" />
        <line x1="25" y1="40" x2="25" y2="48" />
        <line x1="0" y1="15" x2="-8" y2="15" />
        <line x1="0" y1="25" x2="-8" y2="25" />
        <line x1="40" y1="15" x2="48" y2="15" />
        <line x1="40" y1="25" x2="48" y2="25" />
      </g>

      {/* Subtle dot grid */}
      <g fill="#ffffff" fillOpacity="0.03">
        {Array.from({ length: 16 }).map((_, row) =>
          Array.from({ length: 20 }).map((_, col) => (
            <circle key={`${row}-${col}`} cx={40 + col * 40} cy={30 + row * 28} r="1" />
          ))
        )}
      </g>
    </svg>
  )
}

function CrmComparisonPattern() {
  return (
    <svg
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="bg-crm" x1="0" y1="0" x2="800" y2="450" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#060710" />
          <stop offset="100%" stopColor="#0A1A20" />
        </linearGradient>
        <radialGradient id="glow-crm" cx="50%" cy="40%" r="40%">
          <stop offset="0%" stopColor="#00C896" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#00C896" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="glow-crm-2" cx="70%" cy="60%" r="30%">
          <stop offset="0%" stopColor="#0077EE" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#0077EE" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="450" fill="url(#bg-crm)" />
      <rect width="800" height="450" fill="url(#glow-crm)" />
      <rect width="800" height="450" fill="url(#glow-crm-2)" />

      {/* Three CRM platform cards — abstracted */}
      <g>
        {/* Card 1 */}
        <rect x="120" y="130" width="160" height="190" rx="12" stroke="#00C896" strokeOpacity="0.12" strokeWidth="1" fill="#ffffff" fillOpacity="0.015" />
        <rect x="140" y="155" width="40" height="4" rx="2" fill="#00C896" fillOpacity="0.2" />
        <rect x="140" y="175" width="120" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.06" />
        <rect x="140" y="190" width="100" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.04" />
        <rect x="140" y="205" width="110" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.04" />
        <rect x="140" y="230" width="80" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.04" />
        <rect x="140" y="245" width="90" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.04" />
        <circle cx="160" cy="290" r="5" stroke="#00C896" strokeOpacity="0.2" strokeWidth="1" fill="#00C896" fillOpacity="0.1" />

        {/* Card 2 — centre, slightly elevated */}
        <rect x="320" y="115" width="160" height="210" rx="12" stroke="#0077EE" strokeOpacity="0.15" strokeWidth="1.5" fill="#ffffff" fillOpacity="0.02" />
        <rect x="340" y="140" width="50" height="4" rx="2" fill="#0077EE" fillOpacity="0.25" />
        <rect x="340" y="160" width="120" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.06" />
        <rect x="340" y="175" width="100" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.04" />
        <rect x="340" y="190" width="115" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.04" />
        <rect x="340" y="215" width="85" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.04" />
        <rect x="340" y="230" width="95" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.04" />
        <rect x="340" y="255" width="70" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.04" />
        <circle cx="360" cy="295" r="5" stroke="#0077EE" strokeOpacity="0.25" strokeWidth="1" fill="#0077EE" fillOpacity="0.15" />

        {/* Card 3 */}
        <rect x="520" y="130" width="160" height="190" rx="12" stroke="#0077EE" strokeOpacity="0.1" strokeWidth="1" fill="#ffffff" fillOpacity="0.015" />
        <rect x="540" y="155" width="45" height="4" rx="2" fill="#0077EE" fillOpacity="0.15" />
        <rect x="540" y="175" width="120" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.06" />
        <rect x="540" y="190" width="105" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.04" />
        <rect x="540" y="205" width="95" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.04" />
        <rect x="540" y="230" width="75" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.04" />
        <rect x="540" y="245" width="100" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.04" />
        <circle cx="560" cy="290" r="5" stroke="#0077EE" strokeOpacity="0.15" strokeWidth="1" fill="#0077EE" fillOpacity="0.08" />
      </g>

      {/* Connection lines between cards */}
      <g stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" strokeDasharray="4 4">
        <line x1="280" y1="225" x2="320" y2="220" />
        <line x1="480" y1="220" x2="520" y2="225" />
      </g>

      {/* Database icon — top centre */}
      <g transform="translate(385, 60)" stroke="#00C896" strokeOpacity="0.15" strokeWidth="1.2" fill="none">
        <ellipse cx="15" cy="4" rx="15" ry="4" />
        <path d="M0 4v20c0 2.2 6.7 4 15 4s15-1.8 15-4V4" />
        <ellipse cx="15" cy="14" rx="15" ry="4" />
      </g>

      {/* Dot grid */}
      <g fill="#ffffff" fillOpacity="0.02">
        {Array.from({ length: 16 }).map((_, row) =>
          Array.from({ length: 20 }).map((_, col) => (
            <circle key={`${row}-${col}`} cx={40 + col * 40} cy={30 + row * 28} r="1" />
          ))
        )}
      </g>
    </svg>
  )
}

function LeadGenPattern() {
  return (
    <svg
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="bg-lead" x1="0" y1="0" x2="800" y2="450" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#060710" />
          <stop offset="100%" stopColor="#0F0A1E" />
        </linearGradient>
        <radialGradient id="glow-lead" cx="45%" cy="30%" r="40%">
          <stop offset="0%" stopColor="#0077EE" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#0077EE" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="glow-lead-2" cx="60%" cy="65%" r="35%">
          <stop offset="0%" stopColor="#00C896" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#00C896" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="450" fill="url(#bg-lead)" />
      <rect width="800" height="450" fill="url(#glow-lead)" />
      <rect width="800" height="450" fill="url(#glow-lead-2)" />

      {/* Funnel shape — wide at top, narrow at bottom */}
      <g stroke="#0077EE" strokeOpacity="0.1" strokeWidth="1" fill="none">
        <path d="M250 80 L550 80 L480 225 L320 225 Z" />
        <path d="M320 225 L480 225 L440 350 L360 350 Z" />
      </g>
      <g fill="#0077EE" fillOpacity="0.03">
        <path d="M250 80 L550 80 L480 225 L320 225 Z" />
      </g>
      <g fill="#00C896" fillOpacity="0.03">
        <path d="M320 225 L480 225 L440 350 L360 350 Z" />
      </g>

      {/* Funnel divider line */}
      <line x1="320" y1="225" x2="480" y2="225" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="1" />

      {/* Email icons flowing into funnel */}
      <g stroke="#0077EE" strokeOpacity="0.15" strokeWidth="1" fill="none">
        {/* Email 1 */}
        <g transform="translate(160, 100)">
          <rect width="24" height="18" rx="3" />
          <polyline points="0,0 12,10 24,0" />
        </g>
        {/* Email 2 */}
        <g transform="translate(580, 90)">
          <rect width="24" height="18" rx="3" />
          <polyline points="0,0 12,10 24,0" />
        </g>
        {/* Email 3 */}
        <g transform="translate(130, 200)">
          <rect width="20" height="15" rx="2.5" />
          <polyline points="0,0 10,8 20,0" />
        </g>
        {/* Email 4 */}
        <g transform="translate(620, 180)">
          <rect width="20" height="15" rx="2.5" />
          <polyline points="0,0 10,8 20,0" />
        </g>
      </g>

      {/* Arrow paths — leads flowing into funnel */}
      <g stroke="#0077EE" strokeOpacity="0.08" strokeWidth="1" fill="none" strokeDasharray="3 3">
        <path d="M184 118 Q220 130 280 110" />
        <path d="M604 108 Q570 120 530 100" />
        <path d="M150 215 Q200 225 280 215" />
        <path d="M640 195 Q600 210 510 208" />
      </g>

      {/* Qualified leads — people icons at bottom */}
      <g transform="translate(370, 360)" fill="#00C896" fillOpacity="0.2">
        <circle cx="0" cy="0" r="4" />
        <path d="M-6 12 Q0 6 6 12" stroke="#00C896" strokeOpacity="0.2" strokeWidth="1" fill="none" />
      </g>
      <g transform="translate(400, 370)" fill="#00C896" fillOpacity="0.15">
        <circle cx="0" cy="0" r="4" />
        <path d="M-6 12 Q0 6 6 12" stroke="#00C896" strokeOpacity="0.15" strokeWidth="1" fill="none" />
      </g>
      <g transform="translate(430, 360)" fill="#00C896" fillOpacity="0.2">
        <circle cx="0" cy="0" r="4" />
        <path d="M-6 12 Q0 6 6 12" stroke="#00C896" strokeOpacity="0.2" strokeWidth="1" fill="none" />
      </g>

      {/* Stats bar — conversion indicator */}
      <g transform="translate(310, 395)">
        <rect width="180" height="4" rx="2" fill="#ffffff" fillOpacity="0.04" />
        <rect width="120" height="4" rx="2" fill="#00C896" fillOpacity="0.15" />
      </g>

      {/* Dot grid */}
      <g fill="#ffffff" fillOpacity="0.02">
        {Array.from({ length: 16 }).map((_, row) =>
          Array.from({ length: 20 }).map((_, col) => (
            <circle key={`${row}-${col}`} cx={40 + col * 40} cy={30 + row * 28} r="1" />
          ))
        )}
      </g>
    </svg>
  )
}

const heroImages: Record<string, () => React.ReactNode> = {
  'signs-ready-for-ai': AiAutomationPattern,
  'crm-comparison': CrmComparisonPattern,
  'ai-lead-generation-vs-outbound': LeadGenPattern,
}

export function BlogHeroImage({ slug }: { slug: string }) {
  const Component = heroImages[slug]

  if (!Component) {
    // Fallback — generic gradient for posts without a custom image
    return (
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--ga-blue)]/20 to-[var(--ga-green)]/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,119,238,0.15),transparent_60%)]" />
      </div>
    )
  }

  return (
    <div className="absolute inset-0">
      <Component />
    </div>
  )
}

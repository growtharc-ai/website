/**
 * Blog hero images — vibrant brand gradient backgrounds with white icon overlays.
 * 16:9 aspect ratio, rendered as inline SVG + CSS. No external assets.
 *
 * `animated` prop adds subtle CSS animation on article pages.
 * Cards (blog index, insights, related) use static versions.
 */

function AiAutomationPattern({ animated }: { animated?: boolean }) {
  return (
    <div className={`absolute inset-0 ${animated ? 'blog-hero-animated' : ''}`}>
      <svg
        viewBox="0 0 800 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="bg-ai" x1="0" y1="0" x2="800" y2="450" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0077EE" />
            <stop offset="50%" stopColor="#00A5A0" />
            <stop offset="100%" stopColor="#00C896" />
          </linearGradient>
          <radialGradient id="glow-ai-c" cx="50%" cy="45%" r="35%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glow-ai-tl" cx="15%" cy="15%" r="30%">
            <stop offset="0%" stopColor="#0055CC" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0055CC" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glow-ai-br" cx="85%" cy="85%" r="30%">
            <stop offset="0%" stopColor="#00E6A0" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#00E6A0" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Brand gradient background */}
        <rect width="800" height="450" fill="url(#bg-ai)" />
        <rect width="800" height="450" fill="url(#glow-ai-c)" />
        <rect width="800" height="450" fill="url(#glow-ai-tl)" />
        <rect width="800" height="450" fill="url(#glow-ai-br)" />

        {/* Neural network / circuit pattern */}
        <g stroke="#ffffff" strokeWidth="1" fill="none">
          {/* Main network lines */}
          <line x1="80" y1="100" x2="250" y2="160" strokeOpacity="0.12" />
          <line x1="250" y1="160" x2="400" y2="110" strokeOpacity="0.15" />
          <line x1="400" y1="110" x2="550" y2="170" strokeOpacity="0.12" />
          <line x1="550" y1="170" x2="720" y2="120" strokeOpacity="0.1" />
          <line x1="120" y1="225" x2="300" y2="225" strokeOpacity="0.1" />
          <line x1="300" y1="225" x2="400" y2="225" strokeOpacity="0.15" />
          <line x1="400" y1="225" x2="500" y2="225" strokeOpacity="0.15" />
          <line x1="500" y1="225" x2="680" y2="225" strokeOpacity="0.1" />
          <line x1="150" y1="330" x2="300" y2="290" strokeOpacity="0.1" />
          <line x1="300" y1="290" x2="400" y2="340" strokeOpacity="0.12" />
          <line x1="400" y1="340" x2="500" y2="290" strokeOpacity="0.12" />
          <line x1="500" y1="290" x2="650" y2="340" strokeOpacity="0.1" />
          {/* Cross connections */}
          <line x1="250" y1="160" x2="300" y2="225" strokeOpacity="0.08" />
          <line x1="400" y1="110" x2="400" y2="225" strokeOpacity="0.12" />
          <line x1="550" y1="170" x2="500" y2="225" strokeOpacity="0.08" />
          <line x1="300" y1="225" x2="300" y2="290" strokeOpacity="0.08" />
          <line x1="400" y1="225" x2="400" y2="340" strokeOpacity="0.1" />
          <line x1="500" y1="225" x2="500" y2="290" strokeOpacity="0.08" />
        </g>

        {/* Network nodes — small */}
        <g>
          {[
            [80, 100], [250, 160], [550, 170], [720, 120],
            [120, 225], [300, 225], [500, 225], [680, 225],
            [150, 330], [300, 290], [500, 290], [650, 340],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r="4" fill="#ffffff" fillOpacity="0.15" />
              <circle cx={cx} cy={cy} r="8" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="1" fill="none" />
            </g>
          ))}
        </g>

        {/* Central hub node */}
        <circle cx="400" cy="225" r="6" fill="#ffffff" fillOpacity="0.3" />
        <circle cx="400" cy="225" r="14" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="1.5" fill="none" />
        <circle cx="400" cy="225" r="24" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="1" fill="none" />
        {/* Central chip — top connection */}
        <circle cx="400" cy="110" r="5" fill="#ffffff" fillOpacity="0.25" />
        <circle cx="400" cy="110" r="12" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="1" fill="none" />
        {/* Central chip — bottom connection */}
        <circle cx="400" cy="340" r="5" fill="#ffffff" fillOpacity="0.2" />
        <circle cx="400" cy="340" r="12" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="1" fill="none" />

        {/* 5 floating icon circles — clock, chart, robot, email, cog */}
        {/* 1: Clock — top left */}
        <g transform="translate(180, 80)">
          <circle r="22" fill="#ffffff" fillOpacity="0.08" />
          <circle r="22" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="1" fill="none" />
          <circle r="8" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1.2" fill="none" />
          <line x1="0" y1="0" x2="0" y2="-5" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="1.2" />
          <line x1="0" y1="0" x2="3.5" y2="1" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1.2" />
        </g>

        {/* 2: Chart — top right */}
        <g transform="translate(620, 90)">
          <circle r="22" fill="#ffffff" fillOpacity="0.08" />
          <circle r="22" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="1" fill="none" />
          <rect x="-8" y="-2" width="4" height="10" rx="1" fill="#ffffff" fillOpacity="0.4" />
          <rect x="-2" y="-6" width="4" height="14" rx="1" fill="#ffffff" fillOpacity="0.5" />
          <rect x="4" y="-4" width="4" height="12" rx="1" fill="#ffffff" fillOpacity="0.35" />
        </g>

        {/* 3: Robot/AI — centre top */}
        <g transform="translate(400, 50)">
          <circle r="24" fill="#ffffff" fillOpacity="0.1" />
          <circle r="24" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1" fill="none" />
          <rect x="-7" y="-6" width="14" height="12" rx="3" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="1.2" fill="none" />
          <circle cx="-3" cy="-1" r="1.5" fill="#ffffff" fillOpacity="0.5" />
          <circle cx="3" cy="-1" r="1.5" fill="#ffffff" fillOpacity="0.5" />
          <line x1="0" y1="-6" x2="0" y2="-10" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1.2" />
          <circle cx="0" cy="-11" r="1.5" fill="#ffffff" fillOpacity="0.3" />
        </g>

        {/* 4: Email — bottom left */}
        <g transform="translate(200, 370)">
          <circle r="22" fill="#ffffff" fillOpacity="0.08" />
          <circle r="22" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="1" fill="none" />
          <rect x="-8" y="-5" width="16" height="11" rx="2" stroke="#ffffff" strokeOpacity="0.45" strokeWidth="1.2" fill="none" />
          <polyline points="-8,-5 0,2 8,-5" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.2" fill="none" />
        </g>

        {/* 5: Cog — bottom right */}
        <g transform="translate(600, 360)">
          <circle r="22" fill="#ffffff" fillOpacity="0.08" />
          <circle r="22" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="1" fill="none" />
          <circle r="4" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="1.2" fill="none" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const rad = (angle * Math.PI) / 180
            const x1 = Math.cos(rad) * 6
            const y1 = Math.sin(rad) * 6
            const x2 = Math.cos(rad) * 9
            const y2 = Math.sin(rad) * 9
            return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" />
          })}
        </g>

        {/* Light rays from centre */}
        <g stroke="#ffffff" strokeWidth="0.5" fill="none">
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => {
            const rad = (angle * Math.PI) / 180
            const x1 = 400 + Math.cos(rad) * 30
            const y1 = 225 + Math.sin(rad) * 30
            const x2 = 400 + Math.cos(rad) * 80
            const y2 = 225 + Math.sin(rad) * 80
            return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} strokeOpacity="0.04" />
          })}
        </g>

        {/* Subtle dot grid */}
        <g fill="#ffffff" fillOpacity="0.04">
          {Array.from({ length: 10 }).map((_, row) =>
            Array.from({ length: 16 }).map((_, col) => (
              <circle key={`${row}-${col}`} cx={50 + col * 48} cy={40 + row * 44} r="0.8" />
            ))
          )}
        </g>
      </svg>
    </div>
  )
}

function CrmComparisonPattern({ animated }: { animated?: boolean }) {
  return (
    <div className={`absolute inset-0 ${animated ? 'blog-hero-animated' : ''}`}>
      <svg
        viewBox="0 0 800 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="bg-crm" x1="0" y1="0" x2="800" y2="450" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0077EE" />
            <stop offset="50%" stopColor="#00A5A0" />
            <stop offset="100%" stopColor="#00C896" />
          </linearGradient>
          <radialGradient id="glow-crm-c" cx="50%" cy="50%" r="40%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glow-crm-bl" cx="10%" cy="90%" r="35%">
            <stop offset="0%" stopColor="#0055CC" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0055CC" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glow-crm-tr" cx="90%" cy="10%" r="35%">
            <stop offset="0%" stopColor="#00E6A0" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#00E6A0" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Brand gradient background */}
        <rect width="800" height="450" fill="url(#bg-crm)" />
        <rect width="800" height="450" fill="url(#glow-crm-c)" />
        <rect width="800" height="450" fill="url(#glow-crm-bl)" />
        <rect width="800" height="450" fill="url(#glow-crm-tr)" />

        {/* Card 1 — HubSpot (left) */}
        <g>
          <rect x="95" y="95" width="180" height="260" rx="14" fill="#ffffff" fillOpacity="0.06" />
          <rect x="95" y="95" width="180" height="260" rx="14" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="1" fill="none" />
          {/* Header bar */}
          <rect x="95" y="95" width="180" height="44" rx="14" fill="#ffffff" fillOpacity="0.04" />
          <rect x="115" y="108" width="8" height="8" rx="4" fill="#ffffff" fillOpacity="0.3" />
          <rect x="129" y="110" width="50" height="4" rx="2" fill="#ffffff" fillOpacity="0.2" />
          {/* Chart area */}
          <rect x="115" y="155" width="140" height="60" rx="6" fill="#ffffff" fillOpacity="0.03" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="0.5" />
          <polyline points="125,200 145,185 165,192 185,175 205,180 225,170 245,178" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          {/* Metric rows */}
          <rect x="115" y="230" width="100" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.1" />
          <rect x="225" y="230" width="30" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.2" />
          <rect x="115" y="248" width="80" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.08" />
          <rect x="225" y="248" width="30" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.15" />
          <rect x="115" y="266" width="90" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.08" />
          <rect x="225" y="266" width="30" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.15" />
          {/* Stars */}
          <g transform="translate(115, 295)">
            {[0, 1, 2, 3, 4].map((i) => (
              <circle key={i} cx={i * 14} cy="0" r="3" fill="#ffffff" fillOpacity={i < 5 ? 0.35 : 0.08} />
            ))}
          </g>
        </g>

        {/* Card 2 — Salesforce (centre, elevated) */}
        <g>
          <rect x="310" y="70" width="180" height="290" rx="14" fill="#ffffff" fillOpacity="0.08" />
          <rect x="310" y="70" width="180" height="290" rx="14" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1.5" fill="none" />
          {/* Header bar */}
          <rect x="310" y="70" width="180" height="44" rx="14" fill="#ffffff" fillOpacity="0.06" />
          <rect x="330" y="83" width="8" height="8" rx="4" fill="#ffffff" fillOpacity="0.4" />
          <rect x="344" y="85" width="55" height="4" rx="2" fill="#ffffff" fillOpacity="0.25" />
          {/* Chart area */}
          <rect x="330" y="130" width="140" height="70" rx="6" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="0.5" />
          <polyline points="340,185 360,165 380,172 400,150 420,158 440,142 460,148" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          {/* Metric rows */}
          <rect x="330" y="216" width="110" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.12" />
          <rect x="450" y="216" width="30" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.25" />
          <rect x="330" y="234" width="85" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.1" />
          <rect x="450" y="234" width="30" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.2" />
          <rect x="330" y="252" width="95" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.1" />
          <rect x="450" y="252" width="30" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.2" />
          <rect x="330" y="270" width="75" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.08" />
          <rect x="450" y="270" width="30" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.18" />
          {/* Stars */}
          <g transform="translate(330, 300)">
            {[0, 1, 2, 3, 4].map((i) => (
              <circle key={i} cx={i * 14} cy="0" r="3" fill="#ffffff" fillOpacity={i < 3 ? 0.35 : 0.1} />
            ))}
          </g>
          {/* Popular badge */}
          <rect x="365" y="60" width="60" height="18" rx="9" fill="#ffffff" fillOpacity="0.15" />
          <text x="395" y="73" textAnchor="middle" fontSize="8" fill="#ffffff" fillOpacity="0.6" fontFamily="sans-serif" fontWeight="600">POPULAR</text>
        </g>

        {/* Card 3 — Dynamics (right) */}
        <g>
          <rect x="525" y="95" width="180" height="260" rx="14" fill="#ffffff" fillOpacity="0.06" />
          <rect x="525" y="95" width="180" height="260" rx="14" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="1" fill="none" />
          {/* Header bar */}
          <rect x="525" y="95" width="180" height="44" rx="14" fill="#ffffff" fillOpacity="0.04" />
          <rect x="545" y="108" width="8" height="8" rx="4" fill="#ffffff" fillOpacity="0.3" />
          <rect x="559" y="110" width="55" height="4" rx="2" fill="#ffffff" fillOpacity="0.2" />
          {/* Chart area */}
          <rect x="545" y="155" width="140" height="60" rx="6" fill="#ffffff" fillOpacity="0.03" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="0.5" />
          <polyline points="555,200 575,190 595,195 615,182 635,188 655,180 675,185" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          {/* Metric rows */}
          <rect x="545" y="230" width="95" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.1" />
          <rect x="655" y="230" width="30" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.18" />
          <rect x="545" y="248" width="80" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.08" />
          <rect x="655" y="248" width="30" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.15" />
          <rect x="545" y="266" width="85" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.08" />
          <rect x="655" y="266" width="30" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.15" />
          {/* Stars */}
          <g transform="translate(545, 295)">
            {[0, 1, 2, 3, 4].map((i) => (
              <circle key={i} cx={i * 14} cy="0" r="3" fill="#ffffff" fillOpacity={i < 4 ? 0.35 : 0.1} />
            ))}
          </g>
        </g>

        {/* VS symbols between cards */}
        <g>
          <circle cx="288" cy="225" r="16" fill="#ffffff" fillOpacity="0.08" />
          <circle cx="288" cy="225" r="16" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="1" fill="none" />
          <text x="288" y="230" textAnchor="middle" fontSize="11" fill="#ffffff" fillOpacity="0.5" fontFamily="sans-serif" fontWeight="700">VS</text>

          <circle cx="512" cy="225" r="16" fill="#ffffff" fillOpacity="0.08" />
          <circle cx="512" cy="225" r="16" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="1" fill="none" />
          <text x="512" y="230" textAnchor="middle" fontSize="11" fill="#ffffff" fillOpacity="0.5" fontFamily="sans-serif" fontWeight="700">VS</text>
        </g>

        {/* Comparison arrows */}
        <g stroke="#ffffff" strokeOpacity="0.08" strokeWidth="1" fill="none" strokeDasharray="4 3">
          <line x1="275" y1="200" x2="275" y2="250" />
          <line x1="525" y1="200" x2="525" y2="250" />
        </g>

        {/* Dot grid */}
        <g fill="#ffffff" fillOpacity="0.03">
          {Array.from({ length: 10 }).map((_, row) =>
            Array.from({ length: 16 }).map((_, col) => (
              <circle key={`${row}-${col}`} cx={50 + col * 48} cy={40 + row * 44} r="0.8" />
            ))
          )}
        </g>
      </svg>
    </div>
  )
}

function LeadGenPattern({ animated }: { animated?: boolean }) {
  return (
    <div className={`absolute inset-0 ${animated ? 'blog-hero-animated' : ''}`}>
      <svg
        viewBox="0 0 800 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="bg-lead" x1="0" y1="0" x2="800" y2="450" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0077EE" />
            <stop offset="50%" stopColor="#00A5A0" />
            <stop offset="100%" stopColor="#00C896" />
          </linearGradient>
          <radialGradient id="glow-lead-c" cx="50%" cy="40%" r="35%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glow-lead-l" cx="15%" cy="50%" r="30%">
            <stop offset="0%" stopColor="#0055CC" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0055CC" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glow-lead-r" cx="85%" cy="50%" r="30%">
            <stop offset="0%" stopColor="#00E6A0" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#00E6A0" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Brand gradient background */}
        <rect width="800" height="450" fill="url(#bg-lead)" />
        <rect width="800" height="450" fill="url(#glow-lead-c)" />
        <rect width="800" height="450" fill="url(#glow-lead-l)" />
        <rect width="800" height="450" fill="url(#glow-lead-r)" />

        {/* Funnel — made of connected dots and lines */}
        {/* Left edge */}
        <g stroke="#ffffff" strokeWidth="1" fill="none">
          <line x1="220" y1="60" x2="330" y2="200" strokeOpacity="0.2" />
          <line x1="330" y1="200" x2="360" y2="350" strokeOpacity="0.2" />
          {/* Right edge */}
          <line x1="580" y1="60" x2="470" y2="200" strokeOpacity="0.2" />
          <line x1="470" y1="200" x2="440" y2="350" strokeOpacity="0.2" />
          {/* Top */}
          <line x1="220" y1="60" x2="580" y2="60" strokeOpacity="0.15" />
          {/* Middle */}
          <line x1="330" y1="200" x2="470" y2="200" strokeOpacity="0.15" />
          {/* Bottom */}
          <line x1="360" y1="350" x2="440" y2="350" strokeOpacity="0.2" />
        </g>

        {/* Funnel fill */}
        <path d="M220 60 L580 60 L470 200 L330 200 Z" fill="#ffffff" fillOpacity="0.04" />
        <path d="M330 200 L470 200 L440 350 L360 350 Z" fill="#ffffff" fillOpacity="0.06" />

        {/* Funnel edge dots */}
        {[
          [220, 60], [320, 60], [400, 60], [480, 60], [580, 60],
          [330, 200], [400, 200], [470, 200],
          [360, 350], [400, 350], [440, 350],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="3" fill="#ffffff" fillOpacity="0.25" />
            <circle cx={cx} cy={cy} r="7" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="0.8" fill="none" />
          </g>
        ))}

        {/* Internal cross-connections in funnel */}
        <g stroke="#ffffff" strokeOpacity="0.06" strokeWidth="0.8" strokeDasharray="3 3">
          <line x1="320" y1="60" x2="370" y2="200" />
          <line x1="480" y1="60" x2="430" y2="200" />
          <line x1="400" y1="60" x2="400" y2="200" />
          <line x1="370" y1="200" x2="385" y2="350" />
          <line x1="430" y1="200" x2="415" y2="350" />
        </g>

        {/* Email icons — flowing in from left */}
        {[
          { x: 60, y: 70, s: 1, o: 0.3 },
          { x: 95, y: 140, s: 0.9, o: 0.25 },
          { x: 70, y: 210, s: 0.85, o: 0.2 },
          { x: 105, y: 280, s: 0.8, o: 0.15 },
        ].map(({ x, y, s, o }, i) => (
          <g key={`el-${i}`} transform={`translate(${x}, ${y}) scale(${s})`}>
            <rect x="-12" y="-8" width="24" height="17" rx="3" stroke="#ffffff" strokeOpacity={o} strokeWidth="1.2" fill="#ffffff" fillOpacity={o * 0.15} />
            <polyline points="-12,-8 0,2 12,-8" stroke="#ffffff" strokeOpacity={o * 0.8} strokeWidth="1.2" fill="none" />
          </g>
        ))}

        {/* Message icons — flowing in from right */}
        {[
          { x: 740, y: 80, s: 1, o: 0.3 },
          { x: 710, y: 155, s: 0.9, o: 0.25 },
          { x: 730, y: 230, s: 0.85, o: 0.2 },
          { x: 700, y: 300, s: 0.8, o: 0.15 },
        ].map(({ x, y, s, o }, i) => (
          <g key={`mr-${i}`} transform={`translate(${x}, ${y}) scale(${s})`}>
            <rect x="-11" y="-8" width="22" height="15" rx="3" stroke="#ffffff" strokeOpacity={o} strokeWidth="1.2" fill="#ffffff" fillOpacity={o * 0.15} />
            <line x1="-6" y1="-2" x2="6" y2="-2" stroke="#ffffff" strokeOpacity={o * 0.6} strokeWidth="1" />
            <line x1="-6" y1="2" x2="3" y2="2" stroke="#ffffff" strokeOpacity={o * 0.4} strokeWidth="1" />
          </g>
        ))}

        {/* Flow arrows — left emails to funnel */}
        <g stroke="#ffffff" strokeOpacity="0.1" strokeWidth="1" fill="none" markerEnd="">
          <path d="M90 78 Q150 70 215 62" />
          <path d="M115 148 Q180 160 290 170" />
          <path d="M95 218 Q170 220 300 208" />
        </g>

        {/* Flow arrows — right messages to funnel */}
        <g stroke="#ffffff" strokeOpacity="0.1" strokeWidth="1" fill="none">
          <path d="M720 88 Q660 75 585 65" />
          <path d="M695 163 Q630 170 505 175" />
          <path d="M715 238 Q640 230 490 210" />
        </g>

        {/* Qualified leads — checkmarks emerging from bottom */}
        {[
          { x: 370, y: 395, o: 0.4 },
          { x: 400, y: 405, o: 0.5 },
          { x: 430, y: 395, o: 0.4 },
        ].map(({ x, y, o }, i) => (
          <g key={`check-${i}`} transform={`translate(${x}, ${y})`}>
            <circle r="14" fill="#ffffff" fillOpacity={o * 0.15} />
            <circle r="14" stroke="#ffffff" strokeOpacity={o * 0.3} strokeWidth="1" fill="none" />
            <polyline points="-5,0 -1,4 6,-4" stroke="#ffffff" strokeOpacity={o} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        ))}

        {/* Down arrow from funnel to checkmarks */}
        <g stroke="#ffffff" strokeOpacity="0.15" strokeWidth="1.5" fill="none" strokeLinecap="round">
          <line x1="400" y1="355" x2="400" y2="375" />
          <polyline points="395,371 400,377 405,371" />
        </g>

        {/* Movement lines — sense of flow */}
        <g stroke="#ffffff" strokeOpacity="0.05" strokeWidth="0.8">
          <line x1="150" y1="100" x2="230" y2="65" />
          <line x1="130" y1="170" x2="280" y2="150" />
          <line x1="660" y1="110" x2="570" y2="68" />
          <line x1="680" y1="190" x2="520" y2="165" />
        </g>

        {/* Dot grid */}
        <g fill="#ffffff" fillOpacity="0.03">
          {Array.from({ length: 10 }).map((_, row) =>
            Array.from({ length: 16 }).map((_, col) => (
              <circle key={`${row}-${col}`} cx={50 + col * 48} cy={40 + row * 44} r="0.8" />
            ))
          )}
        </g>
      </svg>
    </div>
  )
}

const heroImages: Record<string, (props: { animated?: boolean }) => React.ReactNode> = {
  'signs-ready-for-ai': AiAutomationPattern,
  'crm-comparison': CrmComparisonPattern,
  'ai-lead-generation-vs-outbound': LeadGenPattern,
}

export function BlogHeroImage({ slug, animated }: { slug: string; animated?: boolean }) {
  const Component = heroImages[slug]

  if (!Component) {
    // Fallback — brand gradient for posts without a custom image
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-[#0077EE] via-[#00A5A0] to-[#00C896]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_60%)]" />
      </div>
    )
  }

  return (
    <>
      {animated && (
        <style>{`
          @keyframes blog-hero-gradient {
            0%, 100% { filter: hue-rotate(0deg) brightness(1); }
            50% { filter: hue-rotate(8deg) brightness(1.05); }
          }
          .blog-hero-animated {
            animation: blog-hero-gradient 8s ease-in-out infinite;
          }
        `}</style>
      )}
      <Component animated={animated} />
    </>
  )
}

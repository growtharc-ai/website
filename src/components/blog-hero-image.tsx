/**
 * Blog hero images — dark premium style with brand gradient accents.
 * Vercel/Linear aesthetic: dark backgrounds, gradient glows, 3D depth.
 * 16:9 aspect ratio, inline SVG + CSS. No external assets.
 *
 * `animated` prop adds subtle CSS animation on article pages.
 */

function AiAutomationPattern({ animated }: { animated?: boolean }) {
  return (
    <div className={`absolute inset-0 ${animated ? 'blog-hero-ai' : ''}`}>
      <svg
        viewBox="0 0 800 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="ai-grad" x1="300" y1="120" x2="500" y2="330" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0077EE" />
            <stop offset="50%" stopColor="#00A5A0" />
            <stop offset="100%" stopColor="#00C896" />
          </linearGradient>
          <radialGradient id="ai-glow" cx="50%" cy="50%" r="25%">
            <stop offset="0%" stopColor="#0077EE" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#00A5A0" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#00C896" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="ai-sphere" cx="42%" cy="38%" r="50%">
            <stop offset="0%" stopColor="#1a2a4a" />
            <stop offset="60%" stopColor="#0d1220" />
            <stop offset="100%" stopColor="#0A0B10" />
          </radialGradient>
          <filter id="ai-blur">
            <feGaussianBlur stdDeviation="30" />
          </filter>
          <filter id="ai-blur-sm">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        {/* Dark background */}
        <rect width="800" height="450" fill="#0A0B10" />

        {/* Grid lines fading into darkness */}
        <g stroke="#ffffff" strokeWidth="0.5">
          {Array.from({ length: 17 }).map((_, i) => (
            <line key={`v${i}`} x1={50 * i} y1="0" x2={50 * i} y2="450" strokeOpacity={i > 4 && i < 12 ? 0.04 : 0.015} />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={50 * i} x2="800" y2={50 * i} strokeOpacity={i > 2 && i < 7 ? 0.04 : 0.015} />
          ))}
        </g>

        {/* Ambient gradient glow behind sphere */}
        <ellipse cx="400" cy="225" rx="200" ry="160" fill="url(#ai-glow)" filter="url(#ai-blur)" />

        {/* 3D sphere — layered circles for depth */}
        <circle cx="400" cy="225" r="85" fill="url(#ai-sphere)" />
        <circle cx="400" cy="225" r="85" stroke="url(#ai-grad)" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
        {/* Inner ring */}
        <circle cx="400" cy="225" r="60" stroke="url(#ai-grad)" strokeWidth="0.8" strokeOpacity="0.15" fill="none" />
        {/* Highlight arc — top-left reflection */}
        <path d="M340 185 A85 85 0 0 1 430 155" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.12" fill="none" strokeLinecap="round" />
        {/* Secondary reflection */}
        <path d="M350 195 A70 70 0 0 1 415 170" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.06" fill="none" strokeLinecap="round" />

        {/* Gradient glow on sphere edge — bottom right */}
        <path d="M455 270 A85 85 0 0 0 470 225" stroke="#00C896" strokeWidth="2" strokeOpacity="0.2" fill="none" strokeLinecap="round" filter="url(#ai-blur-sm)" />

        {/* Latitude/longitude lines on sphere */}
        <ellipse cx="400" cy="225" rx="85" ry="30" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.06" fill="none" />
        <ellipse cx="400" cy="225" rx="55" ry="85" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.05" fill="none" />
        <ellipse cx="400" cy="225" rx="85" ry="55" stroke="#ffffff" strokeWidth="0.4" strokeOpacity="0.04" fill="none" transform="rotate(15, 400, 225)" />

        {/* Orbiting ring */}
        <ellipse cx="400" cy="225" rx="120" ry="40" stroke="url(#ai-grad)" strokeWidth="0.8" strokeOpacity="0.12" fill="none" transform="rotate(-20, 400, 225)" />
        {/* Dot on orbit */}
        <circle cx="520" cy="210" r="3" fill="#0077EE" fillOpacity="0.6" />
        <circle cx="520" cy="210" r="6" fill="#0077EE" fillOpacity="0.15" />

        {/* Floating particles with gradient colour */}
        {[
          { cx: 150, cy: 80, r: 2, color: '#0077EE', o: 0.5 },
          { cx: 680, cy: 100, r: 1.5, color: '#00C896', o: 0.4 },
          { cx: 120, cy: 350, r: 1.8, color: '#00A5A0', o: 0.35 },
          { cx: 700, cy: 370, r: 2, color: '#0077EE', o: 0.3 },
          { cx: 250, cy: 150, r: 1.5, color: '#00C896', o: 0.4 },
          { cx: 560, cy: 130, r: 1.8, color: '#0077EE', o: 0.45 },
          { cx: 230, cy: 310, r: 1.5, color: '#00A5A0', o: 0.3 },
          { cx: 590, cy: 340, r: 2, color: '#00C896', o: 0.35 },
          { cx: 350, cy: 80, r: 1, color: '#0077EE', o: 0.3 },
          { cx: 480, cy: 380, r: 1.2, color: '#00C896', o: 0.3 },
          { cx: 100, cy: 200, r: 1, color: '#00A5A0', o: 0.25 },
          { cx: 720, cy: 230, r: 1.3, color: '#0077EE', o: 0.25 },
        ].map(({ cx, cy, r, color, o }, i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r={r} fill={color} fillOpacity={o} />
            <circle cx={cx} cy={cy} r={r * 3} fill={color} fillOpacity={o * 0.15} />
          </g>
        ))}

        {/* Thin connecting lines from particles toward sphere */}
        <g stroke="#ffffff" strokeWidth="0.3" strokeOpacity="0.04">
          <line x1="250" y1="150" x2="330" y2="195" />
          <line x1="560" y1="130" x2="470" y2="190" />
          <line x1="230" y1="310" x2="340" y2="260" />
          <line x1="590" y1="340" x2="470" y2="270" />
        </g>
      </svg>
    </div>
  )
}

function CrmComparisonPattern({ animated }: { animated?: boolean }) {
  return (
    <div className={`absolute inset-0 ${animated ? 'blog-hero-crm' : ''}`}>
      <svg
        viewBox="0 0 800 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="crm-grad-1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0077EE" />
            <stop offset="100%" stopColor="#0066CC" />
          </linearGradient>
          <linearGradient id="crm-grad-2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00A5A0" />
            <stop offset="100%" stopColor="#008888" />
          </linearGradient>
          <linearGradient id="crm-grad-3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00C896" />
            <stop offset="100%" stopColor="#00AA7E" />
          </linearGradient>
          <linearGradient id="crm-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0077EE" />
            <stop offset="50%" stopColor="#00A5A0" />
            <stop offset="100%" stopColor="#00C896" />
          </linearGradient>
          <filter id="crm-glow-1">
            <feGaussianBlur stdDeviation="20" />
          </filter>
          <filter id="crm-glow-2">
            <feGaussianBlur stdDeviation="25" />
          </filter>
          <filter id="crm-glow-3">
            <feGaussianBlur stdDeviation="20" />
          </filter>
        </defs>

        {/* Dark background */}
        <rect width="800" height="450" fill="#0A0B10" />

        {/* Subtle grid */}
        <g stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.02">
          {Array.from({ length: 17 }).map((_, i) => (
            <line key={`v${i}`} x1={50 * i} y1="0" x2={50 * i} y2="450" />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={50 * i} x2="800" y2={50 * i} />
          ))}
        </g>

        {/* Glow behind each shape */}
        <ellipse cx="200" cy="225" rx="80" ry="80" fill="#0077EE" fillOpacity="0.15" filter="url(#crm-glow-1)" />
        <ellipse cx="400" cy="210" rx="90" ry="90" fill="#00A5A0" fillOpacity="0.12" filter="url(#crm-glow-2)" />
        <ellipse cx="600" cy="225" rx="80" ry="80" fill="#00C896" fillOpacity="0.15" filter="url(#crm-glow-3)" />

        {/* Connecting lines between shapes */}
        <line x1="260" y1="215" x2="340" y2="205" stroke="url(#crm-line)" strokeWidth="1" strokeOpacity="0.15" />
        <line x1="460" y1="205" x2="540" y2="215" stroke="url(#crm-line)" strokeWidth="1" strokeOpacity="0.15" />
        {/* Dashed secondary connections */}
        <line x1="260" y1="235" x2="340" y2="230" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.06" strokeDasharray="4 4" />
        <line x1="460" y1="230" x2="540" y2="235" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.06" strokeDasharray="4 4" />
        {/* Bottom arc connection */}
        <path d="M230 280 Q400 340 570 280" stroke="url(#crm-line)" strokeWidth="0.8" strokeOpacity="0.08" fill="none" />

        {/* Shape 1 — Rounded cube (HubSpot) — blue tint */}
        <g transform="translate(200, 220)">
          {/* Shadow */}
          <rect x="-42" y="-35" width="84" height="75" rx="16" fill="#0077EE" fillOpacity="0.08" transform="translate(3, 5)" />
          {/* Face */}
          <rect x="-42" y="-38" width="84" height="75" rx="16" fill="#0e1525" />
          <rect x="-42" y="-38" width="84" height="75" rx="16" stroke="#0077EE" strokeWidth="1" strokeOpacity="0.35" fill="none" />
          {/* Top highlight */}
          <rect x="-38" y="-34" width="76" height="3" rx="1.5" fill="#0077EE" fillOpacity="0.12" />
          {/* Inner glow */}
          <rect x="-30" y="-20" width="60" height="40" rx="8" fill="#0077EE" fillOpacity="0.04" />
          {/* Icon — circle dot */}
          <circle cx="0" cy="0" r="12" stroke="#0077EE" strokeWidth="1.2" strokeOpacity="0.4" fill="none" />
          <circle cx="0" cy="0" r="4" fill="#0077EE" fillOpacity="0.5" />
        </g>

        {/* Shape 2 — Octagonal prism (Salesforce) — teal tint, slightly elevated */}
        <g transform="translate(400, 205)">
          {/* Shadow */}
          <rect x="-48" y="-40" width="96" height="85" rx="18" fill="#00A5A0" fillOpacity="0.08" transform="translate(3, 6)" />
          {/* Face */}
          <rect x="-48" y="-44" width="96" height="85" rx="18" fill="#0e1828" />
          <rect x="-48" y="-44" width="96" height="85" rx="18" stroke="#00A5A0" strokeWidth="1.2" strokeOpacity="0.35" fill="none" />
          {/* Top highlight */}
          <rect x="-44" y="-40" width="88" height="3" rx="1.5" fill="#00A5A0" fillOpacity="0.12" />
          {/* Inner glow */}
          <rect x="-34" y="-24" width="68" height="46" rx="10" fill="#00A5A0" fillOpacity="0.04" />
          {/* Icon — cloud */}
          <path d="M-12 4 Q-12-8 0-8 Q4-16 14-8 Q20-8 20 0 Q24 0 24 6 Q24 10 20 10 L-8 10 Q-14 10 -14 6 Q-14 2 -12 4 Z" stroke="#00A5A0" strokeWidth="1.2" strokeOpacity="0.4" fill="none" />
        </g>

        {/* Shape 3 — Diamond/rhombus (Dynamics) — green tint */}
        <g transform="translate(600, 220)">
          {/* Shadow */}
          <rect x="-42" y="-35" width="84" height="75" rx="16" fill="#00C896" fillOpacity="0.08" transform="translate(3, 5)" />
          {/* Face */}
          <rect x="-42" y="-38" width="84" height="75" rx="16" fill="#0e1a20" />
          <rect x="-42" y="-38" width="84" height="75" rx="16" stroke="#00C896" strokeWidth="1" strokeOpacity="0.35" fill="none" />
          {/* Top highlight */}
          <rect x="-38" y="-34" width="76" height="3" rx="1.5" fill="#00C896" fillOpacity="0.12" />
          {/* Inner glow */}
          <rect x="-30" y="-20" width="60" height="40" rx="8" fill="#00C896" fillOpacity="0.04" />
          {/* Icon — grid */}
          <rect x="-10" y="-10" width="8" height="8" rx="1.5" stroke="#00C896" strokeWidth="1" strokeOpacity="0.4" fill="none" />
          <rect x="2" y="-10" width="8" height="8" rx="1.5" stroke="#00C896" strokeWidth="1" strokeOpacity="0.4" fill="none" />
          <rect x="-10" y="2" width="8" height="8" rx="1.5" stroke="#00C896" strokeWidth="1" strokeOpacity="0.4" fill="none" />
          <rect x="2" y="2" width="8" height="8" rx="1.5" stroke="#00C896" strokeWidth="1" strokeOpacity="0.4" fill="none" />
        </g>

        {/* Small glowing dots between shapes */}
        {[
          { cx: 300, cy: 210, color: '#0088DD' },
          { cx: 500, cy: 210, color: '#00B898' },
          { cx: 300, cy: 240, color: '#0077EE' },
          { cx: 500, cy: 240, color: '#00C896' },
        ].map(({ cx, cy, color }, i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="1.5" fill={color} fillOpacity="0.5" />
            <circle cx={cx} cy={cy} r="4" fill={color} fillOpacity="0.1" />
          </g>
        ))}

        {/* Floating particles */}
        {[
          { cx: 100, cy: 80, r: 1.5, color: '#0077EE', o: 0.35 },
          { cx: 700, cy: 90, r: 1.2, color: '#00C896', o: 0.3 },
          { cx: 80, cy: 380, r: 1.3, color: '#00A5A0', o: 0.25 },
          { cx: 720, cy: 370, r: 1.5, color: '#0077EE', o: 0.25 },
          { cx: 400, cy: 60, r: 1, color: '#00A5A0', o: 0.3 },
          { cx: 400, cy: 400, r: 1, color: '#00A5A0', o: 0.2 },
          { cx: 150, cy: 160, r: 1, color: '#0077EE', o: 0.2 },
          { cx: 650, cy: 160, r: 1, color: '#00C896', o: 0.2 },
        ].map(({ cx, cy, r, color, o }, i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r={r} fill={color} fillOpacity={o} />
            <circle cx={cx} cy={cy} r={r * 3} fill={color} fillOpacity={o * 0.12} />
          </g>
        ))}
      </svg>
    </div>
  )
}

function LeadGenPattern({ animated }: { animated?: boolean }) {
  return (
    <div className={`absolute inset-0 ${animated ? 'blog-hero-lead' : ''}`}>
      <svg
        viewBox="0 0 800 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="lead-grad" x1="0" y1="225" x2="800" y2="225" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0077EE" />
            <stop offset="50%" stopColor="#00A5A0" />
            <stop offset="100%" stopColor="#00C896" />
          </linearGradient>
          <linearGradient id="lead-fade" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0077EE" stopOpacity="0.06" />
            <stop offset="50%" stopColor="#00A5A0" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#00C896" stopOpacity="0.06" />
          </linearGradient>
          <filter id="lead-glow">
            <feGaussianBlur stdDeviation="15" />
          </filter>
          <filter id="lead-glow-lg">
            <feGaussianBlur stdDeviation="30" />
          </filter>
        </defs>

        {/* Dark background */}
        <rect width="800" height="450" fill="#0A0B10" />

        {/* Subtle grid */}
        <g stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.02">
          {Array.from({ length: 17 }).map((_, i) => (
            <line key={`v${i}`} x1={50 * i} y1="0" x2={50 * i} y2="450" />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={50 * i} x2="800" y2={50 * i} />
          ))}
        </g>

        {/* Ambient glow along flow path */}
        <ellipse cx="550" cy="225" rx="200" ry="100" fill="#00A5A0" fillOpacity="0.08" filter="url(#lead-glow-lg)" />
        <ellipse cx="200" cy="225" rx="150" ry="120" fill="#0077EE" fillOpacity="0.05" filter="url(#lead-glow-lg)" />

        {/* Scattered/chaotic lines on the left — converging right */}
        {/* Layer 1 — main flow curves */}
        <g stroke="url(#lead-grad)" strokeWidth="1.5" strokeLinecap="round" fill="none">
          <path d="M40 60 Q150 120 280 180 Q400 210 550 215 Q650 218 720 220" strokeOpacity="0.25" />
          <path d="M60 130 Q160 100 260 160 Q380 210 520 220 Q620 225 700 225" strokeOpacity="0.2" />
          <path d="M30 200 Q120 250 250 230 Q400 220 540 222 Q640 224 710 225" strokeOpacity="0.3" />
          <path d="M50 290 Q180 320 300 270 Q420 230 560 228 Q660 226 720 225" strokeOpacity="0.2" />
          <path d="M70 370 Q200 340 320 300 Q430 250 570 232 Q660 228 730 228" strokeOpacity="0.15" />
          <path d="M20 410 Q140 380 280 330 Q420 270 580 240 Q680 233 740 232" strokeOpacity="0.1" />
        </g>

        {/* Layer 2 — thinner secondary lines */}
        <g stroke="url(#lead-grad)" strokeWidth="0.8" strokeLinecap="round" fill="none">
          <path d="M80 30 Q200 80 300 150 Q400 200 550 210 Q670 216 740 218" strokeOpacity="0.12" />
          <path d="M40 160 Q130 180 240 200 Q370 215 530 220 Q640 222 720 223" strokeOpacity="0.15" />
          <path d="M60 340 Q160 300 280 260 Q400 235 560 228 Q660 225 730 225" strokeOpacity="0.12" />
          <path d="M30 420 Q180 400 320 340 Q460 270 600 240 Q700 232 760 230" strokeOpacity="0.08" />
        </g>

        {/* Glow at convergence point (right side) */}
        <ellipse cx="680" cy="225" rx="40" ry="25" fill="#00C896" fillOpacity="0.12" filter="url(#lead-glow)" />
        <ellipse cx="680" cy="225" rx="15" ry="10" fill="#00C896" fillOpacity="0.2" />

        {/* Convergence funnel shape (subtle, right side) */}
        <path d="M580 170 L720 210 L720 240 L580 280 Z" fill="url(#lead-fade)" />
        <path d="M580 170 L720 210" stroke="#00C896" strokeWidth="0.8" strokeOpacity="0.1" />
        <path d="M580 280 L720 240" stroke="#00C896" strokeWidth="0.8" strokeOpacity="0.1" />

        {/* Flow dots along curves — scattered left, concentrated right */}
        {/* Left — scattered */}
        {[
          { cx: 80, cy: 70, color: '#0077EE', o: 0.4, r: 2.5 },
          { cx: 100, cy: 150, color: '#0077EE', o: 0.35, r: 2 },
          { cx: 60, cy: 230, color: '#0077EE', o: 0.3, r: 2.5 },
          { cx: 90, cy: 310, color: '#0077EE', o: 0.3, r: 2 },
          { cx: 110, cy: 390, color: '#0077EE', o: 0.25, r: 2 },
          { cx: 180, cy: 100, color: '#0088DD', o: 0.3, r: 1.8 },
          { cx: 200, cy: 260, color: '#0088DD', o: 0.25, r: 1.8 },
          { cx: 170, cy: 350, color: '#0088DD', o: 0.2, r: 1.8 },
        ].map(({ cx, cy, color, o, r }, i) => (
          <g key={`l${i}`}>
            <circle cx={cx} cy={cy} r={r} fill={color} fillOpacity={o} />
            <circle cx={cx} cy={cy} r={r * 3} fill={color} fillOpacity={o * 0.15} />
          </g>
        ))}
        {/* Middle — transitioning */}
        {[
          { cx: 340, cy: 180, color: '#00A5A0', o: 0.3, r: 2 },
          { cx: 380, cy: 215, color: '#00A5A0', o: 0.35, r: 2 },
          { cx: 360, cy: 250, color: '#00A5A0', o: 0.3, r: 2 },
          { cx: 420, cy: 230, color: '#00A5A0', o: 0.3, r: 1.5 },
        ].map(({ cx, cy, color, o, r }, i) => (
          <g key={`m${i}`}>
            <circle cx={cx} cy={cy} r={r} fill={color} fillOpacity={o} />
            <circle cx={cx} cy={cy} r={r * 3} fill={color} fillOpacity={o * 0.12} />
          </g>
        ))}
        {/* Right — concentrated */}
        {[
          { cx: 620, cy: 215, color: '#00C896', o: 0.5, r: 2.5 },
          { cx: 650, cy: 222, color: '#00C896', o: 0.55, r: 2.5 },
          { cx: 680, cy: 225, color: '#00C896', o: 0.6, r: 3 },
          { cx: 710, cy: 224, color: '#00C896', o: 0.5, r: 2.5 },
          { cx: 640, cy: 230, color: '#00C896', o: 0.45, r: 2 },
          { cx: 670, cy: 218, color: '#00C896', o: 0.5, r: 2 },
          { cx: 700, cy: 228, color: '#00C896', o: 0.45, r: 2 },
        ].map(({ cx, cy, color, o, r }, i) => (
          <g key={`r${i}`}>
            <circle cx={cx} cy={cy} r={r} fill={color} fillOpacity={o} />
            <circle cx={cx} cy={cy} r={r * 2.5} fill={color} fillOpacity={o * 0.15} />
          </g>
        ))}

        {/* Arrow at convergence — direction indicator */}
        <g transform="translate(740, 225)">
          <polyline points="-6,-6 0,0 -6,6" stroke="#00C896" strokeWidth="2" strokeOpacity="0.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <polyline points="0,-6 6,0 0,6" stroke="#00C896" strokeWidth="1.5" strokeOpacity="0.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>

        {/* Floating ambient particles */}
        {[
          { cx: 400, cy: 60, r: 1, color: '#00A5A0', o: 0.2 },
          { cx: 400, cy: 400, r: 1, color: '#00A5A0', o: 0.15 },
          { cx: 300, cy: 40, r: 0.8, color: '#0077EE', o: 0.15 },
          { cx: 500, cy: 420, r: 0.8, color: '#00C896', o: 0.15 },
        ].map(({ cx, cy, r, color, o }, i) => (
          <circle key={`p${i}`} cx={cx} cy={cy} r={r} fill={color} fillOpacity={o} />
        ))}
      </svg>
    </div>
  )
}

const heroImages: Record<string, (props: { animated?: boolean }) => React.ReactNode> = {
  'signs-ready-for-ai': AiAutomationPattern,
  'crm-comparison': CrmComparisonPattern,
  'ai-lead-generation-vs-outbound': LeadGenPattern,
}

export function BlogHeroImage({ slug, animated, heroImage }: { slug: string; animated?: boolean; heroImage?: string }) {
  // Use DALL-E generated image if available
  if (heroImage) {
    return (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        src={heroImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading={animated ? 'eager' : 'lazy'}
      />
    )
  }

  const Component = heroImages[slug]

  if (!Component) {
    return (
      <div className="absolute inset-0" style={{ background: '#0A0B10' }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,119,238,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,200,150,0.05),transparent_50%)]" />
      </div>
    )
  }

  return (
    <>
      {animated && (
        <style>{`
          @keyframes hero-glow-pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.85; }
          }
          @keyframes hero-float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }
          .blog-hero-ai {
            animation: hero-glow-pulse 6s ease-in-out infinite;
          }
          .blog-hero-crm {
            animation: hero-glow-pulse 7s ease-in-out infinite;
          }
          .blog-hero-lead {
            animation: hero-float 8s ease-in-out infinite;
          }
        `}</style>
      )}
      <Component animated={animated} />
    </>
  )
}

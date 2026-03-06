const partners = [
  'HubSpot',
  'Salesforce',
  'Microsoft',
  'Cloudflare',
  'OpenAI',
  'Anthropic',
  'Vercel',
  'Google Cloud',
]

export function TechPartners() {
  return (
    <section className="overflow-hidden border-t border-white/[0.03] bg-[#0D0E14] px-6 py-10">
      <p className="mb-6 text-center text-[11px] font-semibold tracking-[0.2em] text-white/25 uppercase">
        Our Technology Partners
      </p>
      <div
        className="partner-ticker relative mx-auto max-w-5xl"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div className="flex w-max animate-[scroll_30s_linear_infinite]">
          {[...partners, ...partners].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex h-10 shrink-0 items-center px-10 text-lg font-semibold tracking-tight text-white opacity-30 grayscale transition-all duration-300 hover:opacity-80 hover:grayscale-0"
              style={{
                color:
                  i % partners.length === 0
                    ? '#FF7A59' // HubSpot orange
                    : i % partners.length === 1
                      ? '#00A1E0' // Salesforce blue
                      : i % partners.length === 2
                        ? '#00A4EF' // Microsoft blue
                        : i % partners.length === 3
                          ? '#F6821F' // Cloudflare orange
                          : i % partners.length === 4
                            ? '#FFFFFF' // OpenAI white
                            : i % partners.length === 5
                              ? '#D4A27F' // Anthropic tan
                              : i % partners.length === 6
                                ? '#FFFFFF' // Vercel white
                                : '#4285F4', // Google blue
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

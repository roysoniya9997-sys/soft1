const deals = [
  {
    id: 'opera-gx-gamer',
    title: 'Opera GX Gamer Pack',
    subtitle: 'Ultimate Gaming Browser Bundle',
    description: 'Get Opera GX with exclusive GX Corner access, premium RGB themes, game deal alerts, and Twitch stream integration — all pre-configured for instant gaming.',
    regularValue: '$49.99/yr',
    yourPrice: 'FREE',
    badge: '🔥 HOT',
    badgeColor: '#FF1B51',
    icon: '🎮',
    features: ['RAM & CPU Limiter', 'GX Corner Deals', 'Twitch Integration', 'RGB Sync', 'Custom GX Sound Pack', 'Ad & Tracker Blocker'],
    ctaText: 'Get Gamer Pack Free',
    ctaColor: '#FF1B51',
    highlight: true,
    tag: 'MOST POPULAR DEAL',
  },
  {
    id: 'opera-one-ai',
    title: 'Opera One AI Suite',
    subtitle: 'Full AI-Powered Browser',
    description: 'Opera One complete with Aria AI chatbot, Tab Islands productivity system, and unlimited free VPN. The browser that works smarter so you can, too.',
    regularValue: '$39.99/yr',
    yourPrice: 'FREE',
    badge: '🤖 AI PICK',
    badgeColor: '#00D8FF',
    icon: '🌐',
    features: ['Aria AI Assistant', 'Tab Islands', 'Free Unlimited VPN', 'Modular Sidebar', 'AI Prompts Library', 'News & Weather Feeds'],
    ctaText: 'Claim Opera One Free',
    ctaColor: '#00D8FF',
    highlight: false,
    tag: "EDITOR'S CHOICE",
  },
  {
    id: 'avast-shield',
    title: 'Avast Shield Bundle',
    subtitle: 'Complete Security Suite',
    description: "Avast Free Antivirus with full 6-layer defense, ransomware shield, Wi-Fi inspector, and phishing protection. 435M users can't be wrong.",
    regularValue: '$59.99/yr',
    yourPrice: 'FREE',
    badge: '🛡️ SECURED',
    badgeColor: '#10B981',
    icon: '🛡️',
    features: ['Real-Time Protection', 'Ransomware Shield', 'Wi-Fi Security Scanner', 'Browser Cleanup Tool', 'Password Manager', 'Malware Removal'],
    ctaText: 'Download Protection Free',
    ctaColor: '#10B981',
    highlight: false,
    tag: 'TOP RATED 2026',
  },
  {
    id: 'pc-optimizer',
    title: 'PC Optimizer Pro Pack',
    subtitle: 'Speed + Clean + Boost',
    description: 'CCleaner + Razer Cortex + Driver Booster all-in-one. Clean junk, boost FPS, update drivers, and reclaim GBs of wasted storage.',
    regularValue: '$79.99/yr',
    yourPrice: 'FREE',
    badge: '⚡ BUNDLE',
    badgeColor: '#F59E0B',
    icon: '⚡',
    features: ['Registry Cleaner', 'Startup Optimizer', 'Game FPS Booster', 'Driver Updater', '1-Click Clean', 'Boot Time Reducer'],
    ctaText: 'Get Optimizer Bundle Free',
    ctaColor: '#F59E0B',
    highlight: false,
    tag: 'PERFORMANCE PACK',
  },
]

export default function BestDeals() {
  return (
    <div style={{ padding: '48px 24px', maxWidth: '1280px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <div className="badge-red" style={{ display: 'inline-block', padding: '4px 14px', borderRadius: '999px', fontSize: '11px', fontFamily: "'Exo 2', sans-serif", fontWeight: 700, letterSpacing: '0.1em', marginBottom: '16px' }}>
          🔥 BEST DEALS 2026
        </div>
        <h1 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 900, fontSize: 'clamp(28px, 4vw, 52px)', color: '#E2E8F0', marginBottom: '16px' }}>
          Premium Software <span style={{ color: '#FF1B51' }}>Completely Free</span>
        </h1>
        <p style={{ fontSize: '18px', color: '#94A3B8', maxWidth: '560px', margin: '0 auto' }}>
          Software valued at $50–$80/year. Yours at zero cost through official developer promotions.
        </p>
      </div>

      {/* Countdown Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(255, 27, 81, 0.1), rgba(255, 27, 81, 0.03))',
          border: '1px solid rgba(255, 27, 81, 0.3)',
          borderRadius: '12px',
          padding: '20px 32px',
          marginBottom: '48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '24px' }}>⏰</span>
          <div>
            <div style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, color: '#FF1B51', fontSize: '14px' }}>LIMITED-TIME OFFERS — 2026</div>
            <div style={{ fontSize: '13px', color: '#94A3B8' }}>All downloads are 100% free. No credit card required.</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          {[['4', 'DAYS'], ['12', 'HRS'], ['47', 'MIN'], ['03', 'SEC']].map(([num, unit]) => (
            <div key={unit} style={{ textAlign: 'center', background: 'rgba(0,0,0,0.3)', padding: '8px 14px', borderRadius: '8px', border: '1px solid rgba(255,27,81,0.2)' }}>
              <div style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800, fontSize: '22px', color: '#FF1B51' }}>{num}</div>
              <div style={{ fontSize: '10px', color: '#64748B', letterSpacing: '0.1em' }}>{unit}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Deals Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
        {deals.map((deal) => (
          <div
            key={deal.id}
            className="card-hover"
            style={{
              background: deal.highlight
                ? 'linear-gradient(145deg, #1E293B, #1a2235)'
                : '#1E293B',
              border: deal.highlight
                ? `2px solid ${deal.ctaColor}40`
                : '1px solid rgba(255,255,255,0.06)',
              borderRadius: '16px',
              padding: '32px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Accent top bar */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: `linear-gradient(90deg, ${deal.ctaColor}, ${deal.ctaColor}66)` }} />

            {/* Tag */}
            <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
              <span style={{
                padding: '3px 10px',
                background: `${deal.ctaColor}1A`,
                border: `1px solid ${deal.ctaColor}40`,
                color: deal.ctaColor,
                fontSize: '10px',
                fontFamily: "'Exo 2', sans-serif",
                fontWeight: 700,
                letterSpacing: '0.08em',
                borderRadius: '4px',
              }}>
                {deal.tag}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', marginTop: '8px' }}>
              <span style={{ fontSize: '40px' }}>{deal.icon}</span>
              <div>
                <h3 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800, fontSize: '20px', color: '#E2E8F0', margin: 0 }}>{deal.title}</h3>
                <p style={{ fontSize: '12px', color: '#64748B', margin: 0 }}>{deal.subtitle}</p>
              </div>
            </div>

            <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: '1.6', marginBottom: '20px' }}>{deal.description}</p>

            {/* Pricing */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px', padding: '12px 16px', background: 'rgba(0,0,0,0.3)', borderRadius: '8px' }}>
              <div>
                <div style={{ fontSize: '11px', color: '#64748B', marginBottom: '2px' }}>Normal Value</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '16px', color: '#475569', textDecoration: 'line-through' }}>{deal.regularValue}</div>
              </div>
              <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)' }} />
              <div>
                <div style={{ fontSize: '11px', color: '#64748B', marginBottom: '2px' }}>Your Price Today</div>
                <div style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 900, fontSize: '28px', color: deal.ctaColor }}>{deal.yourPrice}</div>
              </div>
            </div>

            {/* Features */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginBottom: '24px' }}>
              {deal.features.map((f) => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#94A3B8' }}>
                  <span style={{ color: deal.ctaColor, fontSize: '10px', flexShrink: 0 }}>✔</span> {f}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <button
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '8px',
                border: 'none',
                fontSize: '15px',
                cursor: 'pointer',
                background: `linear-gradient(135deg, ${deal.ctaColor}, ${deal.ctaColor}CC)`,
                color: deal.ctaColor === '#00D8FF' || deal.ctaColor === '#F59E0B' ? '#0F172A' : '#FFFFFF',
                fontFamily: "'Exo 2', sans-serif",
                fontWeight: 700,
                letterSpacing: '0.04em',
                marginBottom: '8px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 6px 20px ${deal.ctaColor}44` }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = 'none'; (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none' }}
            >
              🎁 {deal.ctaText}
            </button>
            <button
              className="btn-outline"
              style={{ width: '100%', padding: '11px', borderRadius: '8px', border: `1px solid ${deal.ctaColor}33`, background: 'transparent', color: deal.ctaColor, fontSize: '13px', cursor: 'pointer', fontFamily: "'Exo 2', sans-serif", fontWeight: 600 }}
            >
              ⬇ Claim Free Download
            </button>
          </div>
        ))}
      </div>

      {/* Trust row */}
      <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '48px', padding: '24px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
        {[
          { icon: '✅', text: '100% Official Downloads' },
          { icon: '🔒', text: 'No Credit Card Needed' },
          { icon: '🚫', text: 'Zero Hidden Costs' },
          { icon: '⚡', text: 'Instant Download' },
        ].map((t) => (
          <div key={t.text} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#94A3B8' }}>
            <span>{t.icon}</span> {t.text}
          </div>
        ))}
      </div>
    </div>
  )
}

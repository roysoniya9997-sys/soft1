type Page = 'home' | 'browsers' | 'security' | 'utilities' | 'deals' | 'blog' | 'about' | 'contact'

interface HomeProps {
  onNavigate: (page: Page) => void
}

const featuredSoftware = [
  {
    name: 'Opera GX',
    tagline: 'Gaming Browser',
    description: 'Built for gamers with RAM/CPU limiters, Twitch integration, and RGB sync. Never let your browser hog resources mid-game.',
    badge: 'MOST POPULAR',
    badgeColor: '#FF1B51',
    icon: '🎮',
    features: ['RAM & CPU Limiter', 'Twitch Integration', 'RGB Lighting Sync', 'GX Sounds'],
    accentColor: '#FF1B51',
  },
  {
    name: 'Opera One',
    tagline: 'AI-Powered Browser',
    description: 'Next-gen browser with Aria AI assistant, Tab Islands, and a built-in free VPN. Redefine how you browse the web.',
    badge: 'EDITOR\'S CHOICE',
    badgeColor: '#00D8FF',
    icon: '🌐',
    features: ['Aria AI Assistant', 'Tab Islands', 'Free Built-in VPN', 'Modular Design'],
    accentColor: '#00D8FF',
  },
  {
    name: 'Avast Free Antivirus',
    tagline: 'Real-Time Protection',
    description: '6-layer real-time defense against viruses, ransomware, and cyber threats. Trusted by 435 million users worldwide.',
    badge: 'TOP RATED',
    badgeColor: '#10B981',
    icon: '🛡️',
    features: ['Real-Time Shield', 'Ransomware Guard', 'Wi-Fi Inspector', 'Light on RAM'],
    accentColor: '#10B981',
  },
]

const categoryShortcuts = [
  { icon: '🌐', label: 'Browsers', page: 'browsers' as Page, color: '#00D8FF' },
  { icon: '🛡️', label: 'Security', page: 'security' as Page, color: '#FF1B51' },
  { icon: '⚡', label: 'Utilities', page: 'utilities' as Page, color: '#10B981' },
  { icon: '🔥', label: 'Best Deals', page: 'deals' as Page, color: '#F59E0B' },
  { icon: '📝', label: 'Blog', page: 'blog' as Page, color: '#8B5CF6' },
]

const trustBadges = [
  { icon: '✅', text: '100% Official Sources', sub: 'Direct from developers' },
  { icon: '🔒', text: 'Malware-Free Verified', sub: 'Every installer scanned' },
  { icon: '⚡', text: 'Fast & Free Downloads', sub: 'No hidden costs ever' },
  { icon: '🌍', text: '435M+ Users Trust Us', sub: 'Worldwide community' },
]

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div>
      {/* Hero */}
      <section
        className="cyber-grid scanlines"
        style={{
          position: 'relative',
          padding: '80px 24px 60px',
          overflow: 'hidden',
        }}
      >
        {/* Background glow orbs */}
        <div style={{
          position: 'absolute', top: '-100px', left: '10%', width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(0, 216, 255, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: '50px', right: '5%', width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(255, 27, 81, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
            <span className="badge-green" style={{ padding: '6px 16px', borderRadius: '999px', fontFamily: "'Exo 2', sans-serif", fontWeight: 700, fontSize: '12px', letterSpacing: '0.1em' }}>
              ✅ 100% OFFICIAL & FREE INSTALLERS
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-glow-blue"
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(32px, 5vw, 64px)',
              lineHeight: '1.1',
              color: '#E2E8F0',
              marginBottom: '24px',
              maxWidth: '900px',
              margin: '0 auto 24px',
            }}
          >
            Upgrade Your PC:{' '}
            <span style={{ color: '#00D8FF' }}>Faster Browsing</span>,{' '}
            <span style={{ color: '#FF1B51' }}>Peak Gaming</span>,{' '}
            &{' '}
            <span style={{ color: '#10B981' }}>Total Security</span>
          </h1>

          <p style={{ fontSize: '18px', color: '#94A3B8', maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.7' }}>
            Download the world's most trusted PC software — 100% free, 100% official, directly from developers.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '60px' }}>
            <button
              className="btn-primary"
              onClick={() => onNavigate('browsers')}
              style={{ padding: '14px 32px', borderRadius: '8px', border: 'none', fontSize: '16px', cursor: 'pointer' }}
            >
              🌐 Browse Software
            </button>
            <button
              className="btn-red"
              onClick={() => onNavigate('deals')}
              style={{ padding: '14px 32px', borderRadius: '8px', border: 'none', fontSize: '16px', cursor: 'pointer' }}
            >
              🔥 Today's Best Deals
            </button>
          </div>

          {/* Category shortcuts */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {categoryShortcuts.map((cat) => (
              <button
                key={cat.page}
                onClick={() => onNavigate(cat.page)}
                className="card-hover"
                style={{
                  padding: '10px 20px',
                  background: 'rgba(255,255,255,0.03)',
                  border: `1px solid rgba(255,255,255,0.1)`,
                  borderRadius: '8px',
                  color: '#94A3B8',
                  fontFamily: "'Exo 2', sans-serif",
                  fontWeight: 600,
                  fontSize: '13px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span>{cat.icon}</span> {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section style={{ background: 'rgba(0, 216, 255, 0.03)', borderTop: '1px solid rgba(0, 216, 255, 0.1)', borderBottom: '1px solid rgba(0, 216, 255, 0.1)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          {trustBadges.map((badge) => (
            <div key={badge.text} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px' }}>
              <span style={{ fontSize: '24px' }}>{badge.icon}</span>
              <div>
                <div style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, fontSize: '13px', color: '#E2E8F0' }}>{badge.text}</div>
                <div style={{ fontSize: '12px', color: '#64748B' }}>{badge.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Featured Grid */}
      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="badge-blue" style={{ display: 'inline-block', padding: '4px 14px', borderRadius: '999px', fontSize: '11px', fontFamily: "'Exo 2', sans-serif", fontWeight: 700, letterSpacing: '0.1em', marginBottom: '16px' }}>
              FEATURED SOFTWARE
            </div>
            <h2 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800, fontSize: 'clamp(24px, 3vw, 40px)', color: '#E2E8F0', marginBottom: '12px' }}>
              Top-Rated Free Software for 2026
            </h2>
            <p style={{ color: '#64748B', fontSize: '16px' }}>Hand-picked, verified, and trusted by millions worldwide</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {featuredSoftware.map((sw) => (
              <div
                key={sw.name}
                className="card-hover"
                style={{
                  background: '#1E293B',
                  border: `1px solid rgba(255,255,255,0.08)`,
                  borderRadius: '12px',
                  padding: '28px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Top accent line */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${sw.accentColor}, transparent)` }} />

                {/* Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <span
                    style={{
                      padding: '4px 10px',
                      borderRadius: '4px',
                      background: `${sw.badgeColor}1A`,
                      border: `1px solid ${sw.badgeColor}40`,
                      color: sw.badgeColor,
                      fontSize: '10px',
                      fontFamily: "'Exo 2', sans-serif",
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                    }}
                  >
                    {sw.badge}
                  </span>
                  <span style={{ fontSize: '32px' }}>{sw.icon}</span>
                </div>

                <h3 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800, fontSize: '22px', color: '#E2E8F0', marginBottom: '4px' }}>
                  {sw.name}
                </h3>
                <p style={{ fontSize: '12px', color: sw.accentColor, fontFamily: "'JetBrains Mono', monospace", marginBottom: '12px', letterSpacing: '0.05em' }}>
                  {sw.tagline}
                </p>
                <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: '1.6', marginBottom: '20px' }}>
                  {sw.description}
                </p>

                {/* Features */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                  {sw.features.map((feat) => (
                    <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#CBD5E1' }}>
                      <span style={{ color: sw.accentColor, fontSize: '10px' }}>▶</span> {feat}
                    </div>
                  ))}
                </div>

                <button
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '14px',
                    cursor: 'pointer',
                    background: `linear-gradient(135deg, ${sw.accentColor}, ${sw.accentColor}CC)`,
                    color: sw.accentColor === '#00D8FF' ? '#0F172A' : '#FFFFFF',
                  }}
                >
                  ⬇ Download Free — {sw.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section style={{ padding: '40px 24px', background: 'rgba(255,255,255,0.02)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '24px', textAlign: 'center' }}>
          {[
            { num: '435M+', label: 'Total Downloads', color: '#00D8FF' },
            { num: '6', label: 'Security Layers', color: '#10B981' },
            { num: '100%', label: 'Free Software', color: '#F59E0B' },
            { num: '0', label: 'Malware Incidents', color: '#FF1B51' },
            { num: '24/7', label: 'Threat Monitoring', color: '#8B5CF6' },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 900, fontSize: '36px', color: stat.color, marginBottom: '4px' }}>{stat.num}</div>
              <div style={{ fontSize: '12px', color: '#64748B', letterSpacing: '0.05em' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* More Categories */}
      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800, fontSize: '28px', color: '#E2E8F0', marginBottom: '32px', textAlign: 'center' }}>
            Explore by Category
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {[
              { icon: '🌐', title: 'Browsers', desc: 'Fastest, smartest browsers with AI & VPN built-in', color: '#00D8FF', page: 'browsers' as Page },
              { icon: '🛡️', title: 'Security & Antivirus', desc: 'Real-time protection from viruses & ransomware', color: '#FF1B51', page: 'security' as Page },
              { icon: '⚡', title: 'PC Utilities', desc: 'Cleaners, boosters, and performance optimizers', color: '#10B981', page: 'utilities' as Page },
              { icon: '🔥', title: 'VPN & Privacy', desc: 'Hide your IP and browse anonymously worldwide', color: '#F59E0B', page: 'utilities' as Page },
            ].map((cat) => (
              <button
                key={cat.title}
                onClick={() => onNavigate(cat.page)}
                className="card-hover"
                style={{
                  background: '#1E293B',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '12px',
                  padding: '24px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  display: 'block',
                  width: '100%',
                }}
              >
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{cat.icon}</div>
                <h3 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, fontSize: '16px', color: cat.color, marginBottom: '8px' }}>{cat.title}</h3>
                <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.5', margin: 0 }}>{cat.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

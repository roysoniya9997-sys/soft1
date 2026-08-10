interface BrowsersProps {
  onDownload?: () => void
}

const comparisonData = [
  { feature: 'Built-in VPN', operaOne: true, operaGX: false },
  { feature: 'Aria AI Assistant', operaOne: true, operaGX: false },
  { feature: 'Tab Islands', operaOne: true, operaGX: false },
  { feature: 'Modular Sidebar', operaOne: true, operaGX: true },
  { feature: 'RAM Limiter', operaOne: false, operaGX: true },
  { feature: 'CPU Limiter', operaOne: false, operaGX: true },
  { feature: 'Twitch Integration', operaOne: false, operaGX: true },
  { feature: 'RGB Lighting Sync', operaOne: false, operaGX: true },
  { feature: 'GX Corner (Game Deals)', operaOne: false, operaGX: true },
  { feature: 'Ad Blocker', operaOne: true, operaGX: true },
  { feature: 'Free Messenger', operaOne: true, operaGX: true },
  { feature: 'Chromium Engine', operaOne: true, operaGX: true },
]

export default function Browsers({}: BrowsersProps) {
  return (
    <div style={{ padding: '48px 24px', maxWidth: '1280px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <div className="badge-blue" style={{ display: 'inline-block', padding: '4px 14px', borderRadius: '999px', fontSize: '11px', fontFamily: "'Exo 2', sans-serif", fontWeight: 700, letterSpacing: '0.1em', marginBottom: '16px' }}>
          BROWSERS 2026
        </div>
        <h1 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 900, fontSize: 'clamp(28px, 4vw, 52px)', color: '#E2E8F0', marginBottom: '16px' }}>
          Opera One vs Opera GX
        </h1>
        <p style={{ fontSize: '18px', color: '#94A3B8', maxWidth: '560px', margin: '0 auto' }}>
          Two powerhouse browsers. One for power users, one for gamers. Find your perfect match.
        </p>
      </div>

      {/* Side-by-side hero cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '56px' }}>
        {/* Opera One */}
        <div
          className="card-hover"
          style={{
            background: '#1E293B',
            border: '1px solid rgba(0, 216, 255, 0.2)',
            borderRadius: '16px',
            padding: '36px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #00D8FF, #0099CC)' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
            <div>
              <span className="badge-blue" style={{ padding: '3px 10px', borderRadius: '4px', fontSize: '10px', fontFamily: "'Exo 2', sans-serif", fontWeight: 700, letterSpacing: '0.1em', display: 'inline-block', marginBottom: '12px' }}>
                EDITOR'S CHOICE
              </span>
              <h2 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800, fontSize: '32px', color: '#00D8FF', margin: 0 }}>Opera One</h2>
              <p style={{ color: '#64748B', fontSize: '14px', marginTop: '4px' }}>AI-Powered Browser for Power Users</p>
            </div>
            <span style={{ fontSize: '48px' }}>🌐</span>
          </div>

          <p style={{ fontSize: '15px', color: '#CBD5E1', lineHeight: '1.7', marginBottom: '24px' }}>
            The future of browsing is here. Opera One brings Aria AI directly into your browser sidebar, Tab Islands for smarter organization, and a completely free built-in VPN to protect your privacy — no extensions needed.
          </p>

          {/* Key Features */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '28px' }}>
            {[
              { icon: '🤖', title: 'Aria AI', desc: 'ChatGPT-level AI in your sidebar' },
              { icon: '🏝️', title: 'Tab Islands', desc: 'Group tabs into visual clusters' },
              { icon: '🔒', title: 'Free VPN', desc: 'Unlimited, no account required' },
              { icon: '🧩', title: 'Modular UI', desc: 'Rearrange everything your way' },
            ].map((feat) => (
              <div key={feat.title} style={{ background: 'rgba(0, 216, 255, 0.05)', border: '1px solid rgba(0, 216, 255, 0.1)', borderRadius: '8px', padding: '12px' }}>
                <div style={{ fontSize: '20px', marginBottom: '6px' }}>{feat.icon}</div>
                <div style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, fontSize: '13px', color: '#00D8FF', marginBottom: '4px' }}>{feat.title}</div>
                <div style={{ fontSize: '11px', color: '#64748B' }}>{feat.desc}</div>
              </div>
            ))}
          </div>

          <button
            className="btn-primary pulse-glow"
            style={{ width: '100%', padding: '14px', borderRadius: '8px', border: 'none', fontSize: '15px', cursor: 'pointer' }}
          >
            ⬇ Download Opera One — Free
          </button>
          <p style={{ fontSize: '11px', color: '#475569', textAlign: 'center', marginTop: '8px' }}>Windows 10/11 • macOS • Linux</p>
        </div>

        {/* Opera GX */}
        <div
          className="card-hover"
          style={{
            background: '#1E293B',
            border: '1px solid rgba(255, 27, 81, 0.2)',
            borderRadius: '16px',
            padding: '36px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #FF1B51, #CC1441)' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
            <div>
              <span className="badge-red" style={{ padding: '3px 10px', borderRadius: '4px', fontSize: '10px', fontFamily: "'Exo 2', sans-serif", fontWeight: 700, letterSpacing: '0.1em', display: 'inline-block', marginBottom: '12px' }}>
                MOST POPULAR
              </span>
              <h2 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800, fontSize: '32px', color: '#FF1B51', margin: 0 }}>Opera GX</h2>
              <p style={{ color: '#64748B', fontSize: '14px', marginTop: '4px' }}>The World's Only Gaming Browser</p>
            </div>
            <span style={{ fontSize: '48px' }}>🎮</span>
          </div>

          <p style={{ fontSize: '15px', color: '#CBD5E1', lineHeight: '1.7', marginBottom: '24px' }}>
            Opera GX was engineered for gamers who refuse to let their browser steal resources mid-raid. Control exactly how much RAM and CPU the browser uses, while staying connected to Twitch, Discord, and your game deals.
          </p>

          {/* Key Features */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '28px' }}>
            {[
              { icon: '💾', title: 'RAM Limiter', desc: 'Set hard cap on memory usage' },
              { icon: '⚙️', title: 'CPU Limiter', desc: 'Prioritize your games always' },
              { icon: '📺', title: 'Twitch Sidebar', desc: 'Watch streams without switching' },
              { icon: '💡', title: 'RGB Sync', desc: 'Matches your Razer/Corsair setup' },
            ].map((feat) => (
              <div key={feat.title} style={{ background: 'rgba(255, 27, 81, 0.05)', border: '1px solid rgba(255, 27, 81, 0.1)', borderRadius: '8px', padding: '12px' }}>
                <div style={{ fontSize: '20px', marginBottom: '6px' }}>{feat.icon}</div>
                <div style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, fontSize: '13px', color: '#FF1B51', marginBottom: '4px' }}>{feat.title}</div>
                <div style={{ fontSize: '11px', color: '#64748B' }}>{feat.desc}</div>
              </div>
            ))}
          </div>

          <button
            className="btn-red pulse-glow"
            style={{ width: '100%', padding: '14px', borderRadius: '8px', border: 'none', fontSize: '15px', cursor: 'pointer' }}
          >
            ⬇ Download Opera GX — Free
          </button>
          <p style={{ fontSize: '11px', color: '#475569', textAlign: 'center', marginTop: '8px' }}>Windows 10/11 • macOS</p>
        </div>
      </div>

      {/* Comparison Table */}
      <div style={{ background: '#1E293B', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', overflow: 'hidden', marginBottom: '48px' }}>
        <div style={{ padding: '24px 32px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <h2 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800, fontSize: '22px', color: '#E2E8F0', margin: 0 }}>
            Full Feature Comparison
          </h2>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'rgba(0,0,0,0.2)' }}>
                <th style={{ padding: '16px 32px', textAlign: 'left', fontFamily: "'Exo 2', sans-serif", fontSize: '12px', color: '#64748B', letterSpacing: '0.08em', fontWeight: 700 }}>FEATURE</th>
                <th style={{ padding: '16px 24px', textAlign: 'center', fontFamily: "'Exo 2', sans-serif", fontSize: '14px', color: '#00D8FF', fontWeight: 800 }}>Opera One</th>
                <th style={{ padding: '16px 24px', textAlign: 'center', fontFamily: "'Exo 2', sans-serif", fontSize: '14px', color: '#FF1B51', fontWeight: 800 }}>Opera GX</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr key={row.feature} style={{ borderTop: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'transparent' : 'rgba(0,0,0,0.1)' }}>
                  <td style={{ padding: '14px 32px', fontSize: '14px', color: '#CBD5E1' }}>{row.feature}</td>
                  <td style={{ padding: '14px 24px', textAlign: 'center' }}>
                    {row.operaOne
                      ? <span style={{ color: '#10B981', fontSize: '18px' }}>✓</span>
                      : <span style={{ color: '#334155', fontSize: '18px' }}>—</span>
                    }
                  </td>
                  <td style={{ padding: '14px 24px', textAlign: 'center' }}>
                    {row.operaGX
                      ? <span style={{ color: '#10B981', fontSize: '18px' }}>✓</span>
                      : <span style={{ color: '#334155', fontSize: '18px' }}>—</span>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Final CTA row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <button
          className="btn-primary"
          style={{ padding: '16px', borderRadius: '10px', border: 'none', fontSize: '16px', cursor: 'pointer' }}
        >
          ⬇ Get Opera One — Free AI Browser
        </button>
        <button
          className="btn-red"
          style={{ padding: '16px', borderRadius: '10px', border: 'none', fontSize: '16px', cursor: 'pointer' }}
        >
          ⬇ Get Opera GX — Free Gaming Browser
        </button>
      </div>
    </div>
  )
}

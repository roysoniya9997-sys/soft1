const defenseLayers = [
  { num: '01', title: 'Real-Time File Shield', desc: 'Scans every file the moment it touches your system — before it can execute.', icon: '🔍' },
  { num: '02', title: 'Ransomware Shield', desc: 'Detects and blocks encryption attacks before they lock your files.', icon: '🔐' },
  { num: '03', title: 'Web Shield', desc: 'Blocks malicious websites, phishing pages, and drive-by downloads in real time.', icon: '🌐' },
  { num: '04', title: 'Email Shield', desc: 'Scans incoming email attachments for threats before Outlook or Gmail opens them.', icon: '📧' },
  { num: '05', title: 'Behavior Shield', desc: 'Monitors running programs for suspicious behavior patterns — stops zero-days.', icon: '👁️' },
  { num: '06', title: 'Network Inspector', desc: 'Scans your Wi-Fi network for vulnerabilities and unauthorized devices.', icon: '📡' },
]

const securityTools = [
  {
    name: 'Avast Free Antivirus',
    tagline: 'Complete Device Protection',
    description: 'Trusted by 435 million users. Full virus, ransomware, and spyware protection at zero cost.',
    badge: '#10B981',
    badgeLabel: 'TOP RATED',
    icon: '🛡️',
    rating: '4.9/5',
    size: '8.7 MB',
  },
  {
    name: 'Malwarebytes Free',
    tagline: 'Malware & PUP Remover',
    description: 'Removes existing infections that antivirus misses. Deep scan clears rootkits, adware, and trojans.',
    badge: '#00D8FF',
    badgeLabel: 'RECOMMENDED',
    icon: '🔦',
    rating: '4.8/5',
    size: '3.2 MB',
  },
  {
    name: 'Windows Defender Booster',
    tagline: 'Defender Enhancement Pack',
    description: 'Supercharges Windows built-in Defender with improved heuristics and faster scan performance.',
    badge: '#F59E0B',
    badgeLabel: 'LIGHTWEIGHT',
    icon: '🪟',
    rating: '4.6/5',
    size: '2.1 MB',
  },
  {
    name: 'Opera VPN Shield',
    tagline: 'Privacy VPN Layer',
    description: 'Unlimited free VPN built into Opera browser. Encrypts traffic and hides your IP with one click.',
    badge: '#8B5CF6',
    badgeLabel: 'FREE VPN',
    icon: '🔒',
    rating: '4.7/5',
    size: 'Built-in',
  },
]

export default function Security() {
  return (
    <div style={{ padding: '48px 24px', maxWidth: '1280px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <div className="badge-red" style={{ display: 'inline-block', padding: '4px 14px', borderRadius: '999px', fontSize: '11px', fontFamily: "'Exo 2', sans-serif", fontWeight: 700, letterSpacing: '0.1em', marginBottom: '16px' }}>
          SECURITY & ANTIVIRUS
        </div>
        <h1 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 900, fontSize: 'clamp(28px, 4vw, 52px)', color: '#E2E8F0', marginBottom: '16px' }}>
          Total Cyber Protection — <span style={{ color: '#10B981' }}>100% Free</span>
        </h1>
        <p style={{ fontSize: '18px', color: '#94A3B8', maxWidth: '560px', margin: '0 auto' }}>
          Modern threats demand modern defenses. Our curated security tools protect every attack vector.
        </p>
      </div>

      {/* Avast Hero */}
      <div
        className="cyber-grid"
        style={{
          background: '#1E293B',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          borderRadius: '20px',
          padding: '48px',
          marginBottom: '56px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #10B981, #059669)' }} />
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <span style={{ fontSize: '56px' }}>🛡️</span>
              <div>
                <h2 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 900, fontSize: '36px', color: '#10B981', margin: 0 }}>Avast Free</h2>
                <p style={{ color: '#64748B', fontSize: '14px', margin: 0, fontFamily: "'JetBrains Mono', monospace" }}>Antivirus & Security Suite</p>
              </div>
            </div>
            <p style={{ fontSize: '16px', color: '#CBD5E1', lineHeight: '1.7', marginBottom: '24px' }}>
              Avast Free Antivirus delivers enterprise-grade protection without the enterprise price tag. With a 6-layer active defense system, it blocks 99.7% of all known threats before they reach your system — while running at under 2% CPU usage.
            </p>
            <div style={{ display: 'flex', gap: '24px', marginBottom: '32px' }}>
              {[{ label: 'Detection Rate', val: '99.7%' }, { label: 'Users Protected', val: '435M' }, { label: 'Threat DB', val: '700M+' }].map((s) => (
                <div key={s.label}>
                  <div style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800, fontSize: '24px', color: '#10B981' }}>{s.val}</div>
                  <div style={{ fontSize: '11px', color: '#64748B' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <button
              className="btn-green pulse-glow"
              style={{ padding: '14px 32px', borderRadius: '8px', border: 'none', fontSize: '16px', cursor: 'pointer' }}
            >
              ⬇ Download Protection — Free
            </button>
          </div>

          {/* Low RAM footprint visual */}
          <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '12px', padding: '24px' }}>
            <div style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, fontSize: '13px', color: '#64748B', letterSpacing: '0.1em', marginBottom: '20px' }}>
              RESOURCE USAGE MONITOR
            </div>
            {[
              { label: 'CPU Usage', val: 1.8, max: 100, color: '#10B981' },
              { label: 'RAM Usage', val: 52, max: 512, color: '#00D8FF', unit: 'MB' },
              { label: 'Disk Impact', val: 0.3, max: 100, color: '#8B5CF6' },
            ].map((bar) => (
              <div key={bar.label} style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '13px', color: '#94A3B8' }}>{bar.label}</span>
                  <span style={{ fontSize: '13px', color: bar.color, fontFamily: "'JetBrains Mono', monospace" }}>
                    {bar.val}{bar.unit || '%'}
                  </span>
                </div>
                <div style={{ height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${(bar.val / bar.max) * 100}%`, background: bar.color, borderRadius: '3px', boxShadow: `0 0 8px ${bar.color}` }} />
                </div>
              </div>
            ))}
            <div style={{ marginTop: '20px', padding: '12px', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.15)', borderRadius: '8px' }}>
              <div style={{ fontSize: '12px', color: '#10B981', fontFamily: "'JetBrains Mono', monospace" }}>
                ✔ Ultra-low RAM footprint confirmed
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6-Layer Defense */}
      <div style={{ marginBottom: '56px' }}>
        <h2 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800, fontSize: '28px', color: '#E2E8F0', marginBottom: '8px', textAlign: 'center' }}>
          6-Layer Real-Time Defense System
        </h2>
        <p style={{ color: '#64748B', textAlign: 'center', marginBottom: '36px', fontSize: '15px' }}>Every threat vector covered. Every attack blocked before execution.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {defenseLayers.map((layer) => (
            <div
              key={layer.num}
              className="card-hover"
              style={{
                background: '#1E293B',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '12px',
                padding: '24px',
                display: 'flex',
                gap: '16px',
              }}
            >
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#10B981', marginBottom: '4px', letterSpacing: '0.1em' }}>
                  LAYER {layer.num}
                </div>
                <div style={{ fontSize: '28px', marginBottom: '0' }}>{layer.icon}</div>
              </div>
              <div>
                <h3 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, fontSize: '15px', color: '#E2E8F0', marginBottom: '8px' }}>{layer.title}</h3>
                <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6', margin: 0 }}>{layer.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security Tools Grid */}
      <h2 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800, fontSize: '28px', color: '#E2E8F0', marginBottom: '32px', textAlign: 'center' }}>
        More Security Tools
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        {securityTools.map((tool) => (
          <div
            key={tool.name}
            className="card-hover"
            style={{
              background: '#1E293B',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '12px',
              padding: '24px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <span style={{ fontSize: '36px' }}>{tool.icon}</span>
              <span style={{
                padding: '3px 8px',
                borderRadius: '4px',
                background: `${tool.badge}1A`,
                border: `1px solid ${tool.badge}33`,
                color: tool.badge,
                fontSize: '10px',
                fontFamily: "'Exo 2', sans-serif",
                fontWeight: 700,
                letterSpacing: '0.08em',
              }}>
                {tool.badgeLabel}
              </span>
            </div>
            <h3 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, fontSize: '16px', color: '#E2E8F0', marginBottom: '4px' }}>{tool.name}</h3>
            <p style={{ fontSize: '11px', color: tool.badge, fontFamily: "'JetBrains Mono', monospace", marginBottom: '10px' }}>{tool.tagline}</p>
            <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6', marginBottom: '16px' }}>{tool.description}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span style={{ fontSize: '12px', color: '#F59E0B' }}>★ {tool.rating}</span>
              <span style={{ fontSize: '12px', color: '#64748B', fontFamily: "'JetBrains Mono', monospace" }}>{tool.size}</span>
            </div>
            <button
              className="btn-green"
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: 'none', fontSize: '13px', cursor: 'pointer' }}
            >
              ⬇ Download Protection
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

const utilityTools = [
  {
    category: 'PC CLEANER',
    name: 'CCleaner Free',
    description: 'Removes junk files, temp data, and broken registry entries. Reclaim gigabytes in minutes.',
    icon: '🧹',
    color: '#00D8FF',
    benefits: ['Remove 5–20GB junk files', 'Fix registry errors', 'Clear browser cache', 'Startup optimizer'],
    badge: 'MOST USED',
  },
  {
    category: 'SYSTEM BOOSTER',
    name: 'Razer Cortex Free',
    description: "Game-mode optimizer that kills background apps and boosts FPS by reallocating system resources.",
    icon: '🚀',
    color: '#10B981',
    benefits: ['Boost FPS by 10–30%', 'Game mode boost', 'RAM defrag', 'Auto-optimize on launch'],
    badge: 'GAMER PICK',
  },
  {
    category: 'VPN PRIVACY',
    name: 'ProtonVPN Free',
    description: 'Swiss-based, no-logs VPN with unlimited data on free plan. Hides your IP across 3 countries.',
    icon: '🔒',
    color: '#8B5CF6',
    benefits: ['Unlimited free data', 'No activity logs', '3 free server locations', 'Open-source audited'],
    badge: 'NO LOGS',
  },
  {
    category: 'DRIVER UPDATER',
    name: 'Driver Booster Free',
    description: 'Scans and updates all outdated drivers with one click. Prevents crashes and improves hardware performance.',
    icon: '⚙️',
    color: '#F59E0B',
    benefits: ['1-click driver updates', '9M+ driver database', 'Restore point backup', 'Game component updates'],
    badge: 'ESSENTIAL',
  },
  {
    category: 'FILE MANAGER',
    name: 'Everything Search',
    description: 'Instantly find any file on your PC. Searches 1 million files in under 1 second using NTFS indexing.',
    icon: '🔍',
    color: '#EC4899',
    benefits: ['Search in <1 second', 'Regex support', 'Network drive search', '0.3 MB footprint'],
    badge: 'LIGHTNING FAST',
  },
  {
    category: 'STARTUP MANAGER',
    name: 'Autoruns for Windows',
    description: 'Microsoft Sysinternals tool showing every program that runs on startup. Disable anything safely.',
    icon: '⏱️',
    color: '#FF1B51',
    benefits: ['See all autorun entries', 'Disable/enable safely', 'Code signature check', 'Virus Total integration'],
    badge: 'MICROSOFT TOOL',
  },
]

const performanceBenefits = [
  { icon: '⬆️', text: 'Boot speed improved by up to 60%' },
  { icon: '💾', text: 'Recover 5–20 GB of disk space' },
  { icon: '🎮', text: 'FPS boost of 10–30% in games' },
  { icon: '🔋', text: 'Reduce background CPU usage' },
  { icon: '🌐', text: 'Encrypt traffic with free VPN' },
  { icon: '🔄', text: 'Fix 500+ registry errors on average' },
]

export default function Utilities() {
  return (
    <div style={{ padding: '48px 24px', maxWidth: '1280px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <div className="badge-green" style={{ display: 'inline-block', padding: '4px 14px', borderRadius: '999px', fontSize: '11px', fontFamily: "'Exo 2', sans-serif", fontWeight: 700, letterSpacing: '0.1em', marginBottom: '16px' }}>
          UTILITIES & TOOLS
        </div>
        <h1 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 900, fontSize: 'clamp(28px, 4vw, 52px)', color: '#E2E8F0', marginBottom: '16px' }}>
          Supercharge Your <span style={{ color: '#10B981' }}>PC Performance</span>
        </h1>
        <p style={{ fontSize: '18px', color: '#94A3B8', maxWidth: '560px', margin: '0 auto' }}>
          Cleaners, boosters, VPNs, and essential tools — all free, all verified.
        </p>
      </div>

      {/* Performance Benefits Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(0, 216, 255, 0.05))',
          border: '1px solid rgba(16, 185, 129, 0.2)',
          borderRadius: '16px',
          padding: '32px',
          marginBottom: '56px',
        }}
      >
        <h2 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800, fontSize: '20px', color: '#10B981', textAlign: 'center', marginBottom: '28px' }}>
          What These Tools Will Do For Your PC
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          {performanceBenefits.map((b) => (
            <div key={b.text} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
              <span style={{ fontSize: '20px' }}>{b.icon}</span>
              <span style={{ fontSize: '13px', color: '#CBD5E1', lineHeight: '1.5' }}>{b.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tools Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
        {utilityTools.map((tool) => (
          <div
            key={tool.name}
            className="card-hover"
            style={{
              background: '#1E293B',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '14px',
              padding: '28px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${tool.color}, transparent)` }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: tool.color, letterSpacing: '0.1em', marginBottom: '8px' }}>
                  {tool.category}
                </div>
                <span style={{ fontSize: '36px' }}>{tool.icon}</span>
              </div>
              <span style={{
                padding: '4px 8px',
                borderRadius: '4px',
                background: `${tool.color}1A`,
                border: `1px solid ${tool.color}33`,
                color: tool.color,
                fontSize: '10px',
                fontFamily: "'Exo 2', sans-serif",
                fontWeight: 700,
                letterSpacing: '0.08em',
              }}>
                {tool.badge}
              </span>
            </div>

            <h3 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800, fontSize: '20px', color: '#E2E8F0', marginBottom: '10px' }}>{tool.name}</h3>
            <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: '1.6', marginBottom: '20px' }}>{tool.description}</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
              {tool.benefits.map((b) => (
                <div key={b} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#CBD5E1' }}>
                  <span style={{ color: tool.color, fontSize: '10px', flexShrink: 0 }}>◆</span>
                  {b}
                </div>
              ))}
            </div>

            <button
              style={{
                width: '100%',
                padding: '11px',
                borderRadius: '7px',
                border: 'none',
                fontSize: '14px',
                cursor: 'pointer',
                background: `linear-gradient(135deg, ${tool.color}, ${tool.color}BB)`,
                color: tool.color === '#00D8FF' ? '#0F172A' : '#FFFFFF',
                fontFamily: "'Exo 2', sans-serif",
                fontWeight: 700,
                letterSpacing: '0.04em',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 0 20px ${tool.color}44`; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none'; (e.currentTarget as HTMLButtonElement).style.transform = 'none' }}
            >
              ⬇ Download Free
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

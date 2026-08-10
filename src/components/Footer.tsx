type Page = 'home' | 'browsers' | 'security' | 'utilities' | 'deals' | 'blog' | 'about' | 'contact'

interface FooterProps {
  onNavigate: (page: Page) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer
      style={{
        background: '#0A1120',
        borderTop: '1px solid rgba(0, 216, 255, 0.1)',
        paddingTop: '48px',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Main footer grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '48px' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  background: 'linear-gradient(135deg, #00D8FF, #0099CC)',
                  borderRadius: '7px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" fill="#0F172A"/>
                  <path d="M12 3L14.5 8H19.5L15.5 11.5L17 17L12 13.5L7 17L8.5 11.5L4.5 8H9.5L12 3Z" fill="white"/>
                </svg>
              </div>
              <span style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800, fontSize: '18px', color: '#E2E8F0' }}>
                Affi<span style={{ color: '#00D8FF' }}>Market</span>
              </span>
            </div>
            <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.7', marginBottom: '16px' }}>
              Your go-to affiliate marketplace for 100% official, malware-free software. Every installer is verified directly from the developer source.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              {['🔒', '✅', '⚡'].map((icon, i) => (
                <span
                  key={i}
                  style={{
                    padding: '6px 10px',
                    background: 'rgba(0, 216, 255, 0.05)',
                    border: '1px solid rgba(0, 216, 255, 0.15)',
                    borderRadius: '6px',
                    fontSize: '14px',
                  }}
                >{icon}</span>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, fontSize: '13px', color: '#00D8FF', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Software
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {([['Browsers', 'browsers'], ['Security & Antivirus', 'security'], ['Utilities & Tools', 'utilities'], ['Best Deals', 'deals']] as [string, Page][]).map(([label, page]) => (
                <button
                  key={page}
                  onClick={() => onNavigate(page)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#64748B',
                    fontSize: '13px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: 0,
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#00D8FF')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#64748B')}
                >
                  → {label}
                </button>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, fontSize: '13px', color: '#00D8FF', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Company
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {([['Blog', 'blog'], ['About Us', 'about'], ['Contact', 'contact']] as [string, Page][]).map(([label, page]) => (
                <button
                  key={page}
                  onClick={() => onNavigate(page)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#64748B',
                    fontSize: '13px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: 0,
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#00D8FF')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#64748B')}
                >
                  → {label}
                </button>
              ))}
            </div>
          </div>

          {/* Trust */}
          <div>
            <h4 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, fontSize: '13px', color: '#10B981', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Trust & Safety
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Official Sources Only', 'Malware-Free Verified', 'No Bundleware', 'Direct Dev Links'].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748B', fontSize: '13px' }}>
                  <span style={{ color: '#10B981', fontSize: '10px' }}>✔</span> {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div
          style={{
            background: 'rgba(255, 27, 81, 0.05)',
            border: '1px solid rgba(255, 27, 81, 0.2)',
            borderRadius: '8px',
            padding: '16px 20px',
            marginBottom: '24px',
          }}
        >
          <p style={{ fontSize: '12px', color: '#94A3B8', lineHeight: '1.6', margin: 0 }}>
            <span style={{ color: '#FF1B51', fontFamily: "'Exo 2', sans-serif", fontWeight: 700 }}>⚠ AFFILIATE DISCLOSURE: </span>
            AffiMarket participates in affiliate marketing programs. Some download links on this site may be affiliate links, meaning we may earn a commission at no additional cost to you when you install software through our links. We only promote software from official, verified developer sources. All installers are 100% free and malware-free. Our editorial opinions are not influenced by affiliate relationships.
          </p>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.05)',
            padding: '20px 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p style={{ fontSize: '12px', color: '#475569', margin: 0 }}>
            © 2026 TechVault Hub. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((item) => (
              <span key={item} style={{ fontSize: '12px', color: '#475569', cursor: 'pointer' }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#00D8FF')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#475569')}
              >{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

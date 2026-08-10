import { useState } from 'react'

type Page = 'home' | 'browsers' | 'security' | 'utilities' | 'deals' | 'blog' | 'about' | 'contact'

interface HeaderProps {
  currentPage: Page
  onNavigate: (page: Page) => void
}

const navItems: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'Browsers', page: 'browsers' },
  { label: 'Security', page: 'security' },
  { label: 'Utilities', page: 'utilities' },
  { label: 'Best Deals', page: 'deals' },
  { label: 'Blog', page: 'blog' },
  { label: 'About', page: 'about' },
  { label: 'Contact', page: 'contact' },
]

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(0, 216, 255, 0.15)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                background: 'linear-gradient(135deg, #00D8FF, #0099CC)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 15px rgba(0, 216, 255, 0.4)',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="9" fill="#0F172A"/>
                <path d="M8 12L11 15L16 9" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 3L14.5 8H19.5L15.5 11.5L17 17L12 13.5L7 17L8.5 11.5L4.5 8H9.5L12 3Z" fill="white"/>
              </svg>
            </div>
            <span style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800, fontSize: '20px', color: '#E2E8F0', letterSpacing: '0.02em' }}>
              Affi<span style={{ color: '#00D8FF' }}>Market</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', gap: '4px', alignItems: 'center' }} className="hidden-mobile">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '6px',
                  background: currentPage === item.page ? 'rgba(0, 216, 255, 0.1)' : 'transparent',
                  border: currentPage === item.page ? '1px solid rgba(0, 216, 255, 0.3)' : '1px solid transparent',
                  color: currentPage === item.page ? '#00D8FF' : '#94A3B8',
                  fontFamily: "'Exo 2', sans-serif",
                  fontWeight: 600,
                  fontSize: '13px',
                  letterSpacing: '0.03em',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  if (currentPage !== item.page) {
                    (e.target as HTMLButtonElement).style.color = '#E2E8F0'
                    ;(e.target as HTMLButtonElement).style.background = 'rgba(255,255,255,0.04)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPage !== item.page) {
                    (e.target as HTMLButtonElement).style.color = '#94A3B8'
                    ;(e.target as HTMLButtonElement).style.background = 'transparent'
                  }
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <button
            onClick={() => onNavigate('deals')}
            className="btn-red"
            style={{
              padding: '8px 18px',
              borderRadius: '6px',
              border: 'none',
              fontSize: '13px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span>🔥</span> Best Deals
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div style={{ paddingBottom: '16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => { onNavigate(item.page); setMobileOpen(false) }}
                style={{
                  padding: '10px 14px',
                  borderRadius: '6px',
                  background: currentPage === item.page ? 'rgba(0, 216, 255, 0.1)' : 'transparent',
                  border: 'none',
                  color: currentPage === item.page ? '#00D8FF' : '#94A3B8',
                  fontFamily: "'Exo 2', sans-serif",
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}

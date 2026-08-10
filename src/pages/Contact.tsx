import { useState } from 'react'

const faqs = [
  {
    q: 'Are all downloads on AffiMarket 100% free?',
    a: 'Yes. Every software we list has a legitimate free tier. We only promote free versions — we never link to paid trials disguised as free software.',
  },
  {
    q: 'Do you bundle adware or toolbars with your downloads?',
    a: 'Never. AffiMarket links directly to official developer websites or authorized download portals. We do not host or modify any installer files.',
  },
  {
    q: 'How do you verify software safety?',
    a: 'Every installer is checked via VirusTotal (70+ antivirus engines), sourced from official developer sites only, and manually installed by our team. We re-verify monthly.',
  },
  {
    q: 'Why do some download links earn you affiliate commissions?',
    a: "Some software companies run affiliate programs where we earn a small commission when you complete a free install through our link. This costs you nothing — the software remains 100% free. Our editorial judgement is not influenced by affiliate relationships.",
  },
  {
    q: 'How do I report a broken or suspicious download link?',
    a: "Use the contact form on this page and select 'Broken/Suspicious Link' as the subject. We investigate all reports within 24 hours and remove links if any concerns are confirmed.",
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div style={{ padding: '48px 24px', maxWidth: '1280px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <div className="badge-blue" style={{ display: 'inline-block', padding: '4px 14px', borderRadius: '999px', fontSize: '11px', fontFamily: "'Exo 2', sans-serif", fontWeight: 700, letterSpacing: '0.1em', marginBottom: '16px' }}>
          CONTACT US
        </div>
        <h1 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 900, fontSize: 'clamp(28px, 4vw, 52px)', color: '#E2E8F0', marginBottom: '16px' }}>
          We're Here to <span style={{ color: '#00D8FF' }}>Help</span>
        </h1>
        <p style={{ fontSize: '18px', color: '#94A3B8', maxWidth: '500px', margin: '0 auto' }}>
          Questions, feedback, or a broken link to report? Our editorial team responds within 24 hours.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '56px' }}>
        {/* Contact Form */}
        <div
          style={{
            background: '#1E293B',
            border: '1px solid rgba(0, 216, 255, 0.15)',
            borderRadius: '16px',
            padding: '40px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #00D8FF, #8B5CF6)' }} />

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ fontSize: '64px', marginBottom: '24px' }}>✅</div>
              <h3 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800, fontSize: '24px', color: '#10B981', marginBottom: '12px' }}>Message Sent!</h3>
              <p style={{ color: '#94A3B8', lineHeight: '1.7' }}>
                Thanks for reaching out, {form.name}. We'll get back to you at {form.email} within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-outline"
                style={{ padding: '10px 24px', borderRadius: '8px', border: '1px solid rgba(0, 216, 255, 0.3)', background: 'transparent', color: '#00D8FF', fontSize: '14px', cursor: 'pointer', marginTop: '24px', fontFamily: "'Exo 2', sans-serif", fontWeight: 600 }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              <h2 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800, fontSize: '24px', color: '#E2E8F0', marginBottom: '28px' }}>
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: "'Exo 2', sans-serif", fontWeight: 600, fontSize: '12px', color: '#64748B', letterSpacing: '0.08em', marginBottom: '8px' }}>
                      NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: 'rgba(0,0,0,0.3)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px',
                        color: '#E2E8F0',
                        fontSize: '14px',
                        fontFamily: "'Inter', sans-serif",
                        outline: 'none',
                        boxSizing: 'border-box',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(0, 216, 255, 0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: "'Exo 2', sans-serif", fontWeight: 600, fontSize: '12px', color: '#64748B', letterSpacing: '0.08em', marginBottom: '8px' }}>
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: 'rgba(0,0,0,0.3)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px',
                        color: '#E2E8F0',
                        fontSize: '14px',
                        fontFamily: "'Inter', sans-serif",
                        outline: 'none',
                        boxSizing: 'border-box',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(0, 216, 255, 0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: "'Exo 2', sans-serif", fontWeight: 600, fontSize: '12px', color: '#64748B', letterSpacing: '0.08em', marginBottom: '8px' }}>
                    SUBJECT *
                  </label>
                  <select
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: 'rgba(0,0,0,0.3)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      color: form.subject ? '#E2E8F0' : '#475569',
                      fontSize: '14px',
                      fontFamily: "'Inter', sans-serif",
                      outline: 'none',
                      cursor: 'pointer',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'rgba(0, 216, 255, 0.5)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                  >
                    <option value="">Select a subject...</option>
                    <option value="general">General Question</option>
                    <option value="broken-link">Broken / Suspicious Link</option>
                    <option value="software-request">Software Suggestion</option>
                    <option value="affiliate">Affiliate / Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: "'Exo 2', sans-serif", fontWeight: 600, fontSize: '12px', color: '#64748B', letterSpacing: '0.08em', marginBottom: '8px' }}>
                    MESSAGE *
                  </label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us how we can help..."
                    rows={5}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: 'rgba(0,0,0,0.3)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      color: '#E2E8F0',
                      fontSize: '14px',
                      fontFamily: "'Inter', sans-serif",
                      outline: 'none',
                      resize: 'vertical',
                      boxSizing: 'border-box',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'rgba(0, 216, 255, 0.5)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ padding: '14px', borderRadius: '8px', border: 'none', fontSize: '15px', cursor: 'pointer' }}
                >
                  Send Message →
                </button>
              </form>
            </>
          )}
        </div>

        {/* Info + Contact Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              background: '#1E293B',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '16px',
              padding: '32px',
            }}
          >
            <h3 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800, fontSize: '20px', color: '#E2E8F0', marginBottom: '24px' }}>
              Support Info
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { icon: '📧', label: 'Editorial Inquiries', val: 'editorial@affimarket.com', color: '#00D8FF' },
                { icon: '🔒', label: 'Security Reports', val: 'security@affimarket.com', color: '#FF1B51' },
                { icon: '🤝', label: 'Partnerships', val: 'partners@affimarket.com', color: '#10B981' },
                { icon: '⏱️', label: 'Response Time', val: 'Within 24 hours', color: '#F59E0B' },
              ].map((info) => (
                <div key={info.label} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span style={{ fontSize: '20px', flexShrink: 0 }}>{info.icon}</span>
                  <div>
                    <div style={{ fontSize: '11px', color: '#64748B', marginBottom: '2px' }}>{info.label}</div>
                    <div style={{ fontSize: '14px', color: info.color, fontFamily: "'JetBrains Mono', monospace" }}>{info.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: 'rgba(16, 185, 129, 0.05)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              borderRadius: '12px',
              padding: '24px',
            }}
          >
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '20px', flexShrink: 0 }}>✅</span>
              <div>
                <div style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, fontSize: '14px', color: '#10B981', marginBottom: '8px' }}>
                  Report a Suspicious Link
                </div>
                <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: '1.6', margin: 0 }}>
                  If you encounter a download link on our site that installs unexpected software or behaves suspiciously, please report it immediately. We investigate all reports within 24 hours and take immediate action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h2 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800, fontSize: '28px', color: '#E2E8F0', marginBottom: '32px', textAlign: 'center' }}>
          Frequently Asked Questions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '800px', margin: '0 auto' }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: '#1E293B',
                border: openFaq === i ? '1px solid rgba(0, 216, 255, 0.3)' : '1px solid rgba(255,255,255,0.06)',
                borderRadius: '10px',
                overflow: 'hidden',
                transition: 'border-color 0.2s',
              }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: '100%',
                  padding: '18px 24px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '16px',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 600, fontSize: '15px', color: openFaq === i ? '#00D8FF' : '#E2E8F0' }}>
                  {faq.q}
                </span>
                <span style={{ color: '#64748B', fontSize: '18px', flexShrink: 0, transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
              </button>
              {openFaq === i && (
                <div style={{ padding: '0 24px 20px', fontSize: '14px', color: '#94A3B8', lineHeight: '1.7' }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

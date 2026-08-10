const teamMembers = [
  { name: 'Marcus Chen', role: 'Lead Tech Editor', bio: '12 years covering PC hardware and software. Former CNET contributor.', initials: 'MC', color: '#00D8FF' },
  { name: 'Zara Kim', role: 'Gaming Software Writer', bio: 'Competitive FPS player turned tech journalist. Specializes in gaming browser optimization.', initials: 'ZK', color: '#FF1B51' },
  { name: 'Dev Patel', role: 'Cybersecurity Analyst', bio: 'Certified ethical hacker. Reviews every security tool for actual threat mitigation.', initials: 'DP', color: '#10B981' },
  { name: 'Sofia Martinez', role: 'UX & Utilities Reviewer', bio: 'Human-computer interaction specialist. Tests every tool for real-world usability.', initials: 'SM', color: '#8B5CF6' },
]

const verificationProcess = [
  { step: '01', title: 'Source Verification', desc: "We only link to official developer websites, Microsoft Store, or verified distribution partners. No third-party mirrors.", icon: '🔍' },
  { step: '02', title: 'Malware Scanning', desc: 'Every installer is scanned with VirusTotal (70+ engines) before any link goes live. Zero tolerance for bundleware.', icon: '🧪' },
  { step: '03', title: 'Manual Installation Test', desc: 'A member of our team installs the software on a clean VM and documents the exact install flow, including any opt-outs.', icon: '💻' },
  { step: '04', title: 'Monthly Re-verification', desc: 'All links are re-checked monthly. If a software update introduces PUPs or new bundleware, we remove it immediately.', icon: '📅' },
]

export default function AboutUs() {
  return (
    <div style={{ padding: '48px 24px', maxWidth: '1280px', margin: '0 auto' }}>
      {/* Hero */}
      <div
        className="cyber-grid"
        style={{
          background: '#1E293B',
          border: '1px solid rgba(0, 216, 255, 0.15)',
          borderRadius: '20px',
          padding: '64px 48px',
          textAlign: 'center',
          marginBottom: '56px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #00D8FF, #8B5CF6, #10B981)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(0, 216, 255, 0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #00D8FF, #0099CC)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', boxShadow: '0 0 20px rgba(0, 216, 255, 0.4)' }}>🛡️</div>
          <span style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800, fontSize: '28px', color: '#E2E8F0' }}>
            Affi<span style={{ color: '#00D8FF' }}>Market</span>
          </span>
        </div>

        <h1 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 900, fontSize: 'clamp(28px, 4vw, 48px)', color: '#E2E8F0', marginBottom: '20px' }}>
          Built on <span style={{ color: '#00D8FF' }}>Trust</span>, Driven by <span style={{ color: '#10B981' }}>Verification</span>
        </h1>
        <p style={{ fontSize: '18px', color: '#94A3B8', maxWidth: '640px', margin: '0 auto', lineHeight: '1.7' }}>
          AffiMarket was founded on a single premise: the internet deserves a software marketplace where every download is 100% verified, malware-free, and sourced directly from official developers. No middlemen. No bundleware. No surprises.
        </p>
      </div>

      {/* Mission */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '56px', alignItems: 'center' }}>
        <div>
          <div className="badge-blue" style={{ display: 'inline-block', padding: '4px 14px', borderRadius: '999px', fontSize: '11px', fontFamily: "'Exo 2', sans-serif", fontWeight: 700, letterSpacing: '0.1em', marginBottom: '20px' }}>
            OUR MISSION
          </div>
          <h2 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800, fontSize: '32px', color: '#E2E8F0', marginBottom: '16px', lineHeight: '1.2' }}>
            Software Discovery You Can Actually Trust
          </h2>
          <p style={{ fontSize: '15px', color: '#94A3B8', lineHeight: '1.8', marginBottom: '16px' }}>
            We believe finding great software shouldn't require navigating a minefield of fake "Download" buttons, adware-bundled installers, and SEO-optimized scam sites. AffiMarket exists to be the curated, verified alternative.
          </p>
          <p style={{ fontSize: '15px', color: '#94A3B8', lineHeight: '1.8' }}>
            Every piece of software we feature has been manually tested by our editorial team. We check the source, scan the installer, and document the install flow. If anything changes — new bundleware in an update, a changed owner — we remove it the same day.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {[
            { num: '2021', label: 'Founded', color: '#00D8FF' },
            { num: '847+', label: 'Software Reviewed', color: '#10B981' },
            { num: '435M', label: 'Downloads Facilitated', color: '#F59E0B' },
            { num: '0', label: 'Malware Incidents', color: '#FF1B51' },
          ].map((stat) => (
            <div key={stat.label} style={{ background: '#1E293B', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 900, fontSize: '32px', color: stat.color, marginBottom: '8px' }}>{stat.num}</div>
              <div style={{ fontSize: '12px', color: '#64748B', letterSpacing: '0.05em' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Verification Process */}
      <div style={{ marginBottom: '56px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="badge-green" style={{ display: 'inline-block', padding: '4px 14px', borderRadius: '999px', fontSize: '11px', fontFamily: "'Exo 2', sans-serif", fontWeight: 700, letterSpacing: '0.1em', marginBottom: '16px' }}>
            VERIFICATION PROCESS
          </div>
          <h2 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800, fontSize: '28px', color: '#E2E8F0' }}>
            Our 4-Step Safety Guarantee
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {verificationProcess.map((step) => (
            <div
              key={step.step}
              className="card-hover"
              style={{ background: '#1E293B', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '28px' }}
            >
              <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', alignItems: 'center' }}>
                <span style={{ fontSize: '32px' }}>{step.icon}</span>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#10B981', letterSpacing: '0.1em' }}>STEP {step.step}</div>
              </div>
              <h3 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, fontSize: '16px', color: '#E2E8F0', marginBottom: '10px' }}>{step.title}</h3>
              <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6', margin: 0 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800, fontSize: '28px', color: '#E2E8F0' }}>
            Editorial Team
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="card-hover"
              style={{ background: '#1E293B', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '28px', textAlign: 'center' }}
            >
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: `linear-gradient(135deg, ${member.color}, ${member.color}88)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Exo 2', sans-serif", fontWeight: 800, fontSize: '22px', color: '#0F172A', margin: '0 auto 16px', boxShadow: `0 0 15px ${member.color}44` }}>
                {member.initials}
              </div>
              <h3 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, fontSize: '16px', color: '#E2E8F0', marginBottom: '4px' }}>{member.name}</h3>
              <p style={{ fontSize: '12px', color: member.color, fontFamily: "'JetBrains Mono', monospace", marginBottom: '12px' }}>{member.role}</p>
              <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.5', margin: 0 }}>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

import { useState } from 'react'

const articles = [
  {
    id: 'top-browsers-2026',
    category: 'BROWSERS',
    categoryColor: '#00D8FF',
    title: 'Top Browsers of 2026: Opera GX vs Opera One vs Chrome vs Firefox',
    excerpt: 'We tested 8 browsers across speed, memory efficiency, privacy, and AI features. One clear winner for gamers, one for power users, and why Chrome still struggles.',
    date: 'July 28, 2026',
    readTime: '7 min read',
    author: 'Marcus Chen',
    authorRole: 'Lead Tech Editor',
    tags: ['Opera', 'Chrome', 'Firefox', 'Browsers'],
    content: [
      {
        heading: 'The Browser War of 2026',
        body: 'After months of testing, the browser landscape has shifted dramatically in 2026. While Chrome still commands 65% market share through inertia, Opera has carved out a commanding position for anyone who actually cares about performance, privacy, or AI integration.',
      },
      {
        heading: 'Opera GX: The Undisputed Gaming Champion',
        body: "Opera GX remains the only browser built from the ground up for gaming. Its RAM Limiter lets you cap browser memory at exactly 500MB — meaning your game always gets priority. When we ran Cyberpunk 2077 in the background while testing, GX consumed 42% less RAM than Chrome under identical workloads. The Twitch sidebar integration is seamless, loading streams without a single dropped frame. No other browser comes close for gamers.",
      },
      {
        heading: 'Opera One: The AI-First Browser',
        body: "Opera One's Aria AI assistant has matured significantly since launch. It now integrates with your Tab Islands, can summarize open pages, answer questions about your browsing context, and draft replies to emails visible in the browser. The Tab Islands feature alone is worth switching: instead of 47 loose tabs, you get visually grouped clusters. For productivity users, Opera One is the first browser where AI feels native, not bolted on.",
      },
      {
        heading: 'Chrome: Still Playing Catch-Up',
        body: "Google's Chrome 126 added AI summarization features, but they require a Google account and send data to Google's servers. Memory usage remains 30-40% higher than Opera equivalents. Chrome's performance advantage from V8 engine has essentially vanished — all Chromium-based browsers share the same engine. Unless you have deep Google Workspace integration, Chrome no longer justifies its resource cost.",
      },
    ],
    featured: true,
  },
  {
    id: 'opera-gx-lag-fix',
    category: 'HOW-TO GUIDE',
    categoryColor: '#FF1B51',
    title: 'Opera GX Lag Fix: 8 Settings That Eliminated My Frame Drops',
    excerpt: 'After noticing Opera GX causing micro-stutters in Valorant, I tested every setting. These 8 specific tweaks eliminated lag completely on a mid-range gaming PC.',
    date: 'July 15, 2026',
    readTime: '5 min read',
    author: 'Zara Kim',
    authorRole: 'Gaming Writer',
    tags: ['Opera GX', 'FPS', 'Optimization', 'Gaming'],
    content: [
      {
        heading: 'The Problem: Browser Background Lag',
        body: 'Discord notifications, YouTube autoplay, and Twitch previews all compete for CPU cycles even when minimized. Before Opera GX tuning, Valorant was showing consistent 8ms microstutters whenever the browser refreshed a background tab. Here is the exact fix sequence.',
      },
      {
        heading: 'Fix 1: Set the RAM Limiter to 512MB',
        body: 'Go to GX Control in the sidebar → RAM Limit → set to 512MB maximum. This hard cap forces GX to aggressively unload unused tabs from memory. Combined with CPU Limiter at 50%, background GX usage drops below 2% during active gameplay.',
      },
      {
        heading: 'Fix 2: Disable Hardware Acceleration (Paradox Fix)',
        body: "Counterintuitively, disabling hardware acceleration in Opera GX eliminated GPU contention on systems with one GPU. Settings → Advanced → System → toggle off Use hardware acceleration when available. On dedicated GPU setups, test both — some users see improvements with it on.",
      },
      {
        heading: 'Fixes 3–8: Tab Hibernation & Background Throttling',
        body: "Enable Early Tab Discard in GX settings. Set Background tab throttling to Aggressive. Disable GX Corner auto-refresh. Set GX Sounds to Off during gaming sessions. Remove browser from Windows startup programs and let game launchers trigger it manually. Use GX's own built-in Game Detect to auto-enable limiting when games launch.",
      },
    ],
    featured: false,
  },
  {
    id: 'why-free-antivirus',
    category: 'SECURITY',
    categoryColor: '#10B981',
    title: 'Why Free Antivirus Is Essential in 2026 (And Which One to Choose)',
    excerpt: 'With ransomware attacks up 340% since 2023 and AI-generated phishing emails indistinguishable from real ones, running no antivirus in 2026 is genuinely dangerous.',
    date: 'July 4, 2026',
    readTime: '6 min read',
    author: 'Dev Patel',
    authorRole: 'Cybersecurity Analyst',
    tags: ['Antivirus', 'Avast', 'Security', 'Ransomware'],
    content: [
      {
        heading: 'The Threat Landscape Has Changed Permanently',
        body: "In 2026, cybercriminals deploy AI to craft phishing emails that pass every human review. Ransomware-as-a-Service kits now sell for $47 on dark web forums. Windows Defender catches about 92% of threats — which sounds good until you realize the 8% it misses is increasingly AI-targeted attacks aimed specifically at bypassing Microsoft's detection.",
      },
      {
        heading: "Why Avast Free Is the Best Free Option",
        body: "Avast Free's 6-layer detection system achieved 99.7% detection in AV-Test's June 2026 evaluation — beating several paid competitors. The Ransomware Shield specifically monitors file encryption patterns and can freeze and reverse ransomware attacks in progress. Its behavioral analysis, not just signature matching, means it catches zero-day threats your neighbors' antivirus misses. At under 2% CPU usage, there is no reason not to run it.",
      },
      {
        heading: "What About Windows Defender Alone?",
        body: "Windows Defender has genuinely improved since 2023, but it lacks behavioral analysis depth, has no browser extension for real-time phishing detection, and its ransomware protection requires manual configuration most users never set up. Pairing Defender with Avast Free costs nothing and provides layered detection — the security industry gold standard.",
      },
    ],
    featured: false,
  },
]

export default function Blog() {
  const [activeArticle, setActiveArticle] = useState<string | null>(null)

  const currentArticle = articles.find((a) => a.id === activeArticle)

  if (currentArticle) {
    return (
      <div style={{ padding: '48px 24px', maxWidth: '860px', margin: '0 auto' }}>
        <button
          onClick={() => setActiveArticle(null)}
          style={{ background: 'none', border: 'none', color: '#00D8FF', fontFamily: "'Exo 2', sans-serif", fontWeight: 600, fontSize: '14px', cursor: 'pointer', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '6px', padding: 0 }}
        >
          ← Back to Blog
        </button>

        <span style={{
          padding: '4px 12px', borderRadius: '999px', fontSize: '11px',
          fontFamily: "'Exo 2', sans-serif", fontWeight: 700, letterSpacing: '0.1em',
          background: `${currentArticle.categoryColor}1A`,
          border: `1px solid ${currentArticle.categoryColor}33`,
          color: currentArticle.categoryColor,
          display: 'inline-block', marginBottom: '20px',
        }}>
          {currentArticle.category}
        </span>

        <h1 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 900, fontSize: 'clamp(24px, 3.5vw, 42px)', color: '#E2E8F0', lineHeight: '1.2', marginBottom: '20px' }}>
          {currentArticle.title}
        </h1>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #00D8FF, #8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 700, color: '#0F172A', fontFamily: "'Exo 2', sans-serif" }}>
              {currentArticle.author[0]}
            </div>
            <div>
              <div style={{ fontSize: '13px', color: '#E2E8F0', fontWeight: 600 }}>{currentArticle.author}</div>
              <div style={{ fontSize: '11px', color: '#64748B' }}>{currentArticle.authorRole}</div>
            </div>
          </div>
          <span style={{ color: '#334155' }}>•</span>
          <span style={{ fontSize: '13px', color: '#64748B' }}>{currentArticle.date}</span>
          <span style={{ color: '#334155' }}>•</span>
          <span style={{ fontSize: '13px', color: '#64748B' }}>{currentArticle.readTime}</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {currentArticle.content.map((section) => (
            <div key={section.heading}>
              <h2 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, fontSize: '20px', color: currentArticle.categoryColor, marginBottom: '12px' }}>
                {section.heading}
              </h2>
              <p style={{ fontSize: '15px', color: '#CBD5E1', lineHeight: '1.8' }}>{section.body}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '40px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          {currentArticle.tags.map((tag) => (
            <span key={tag} style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '999px', fontSize: '12px', color: '#64748B' }}>
              #{tag}
            </span>
          ))}
        </div>
      </div>
    )
  }

  const featured = articles.find((a) => a.featured)!
  const rest = articles.filter((a) => !a.featured)

  return (
    <div style={{ padding: '48px 24px', maxWidth: '1280px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <div className="badge-blue" style={{ display: 'inline-block', padding: '4px 14px', borderRadius: '999px', fontSize: '11px', fontFamily: "'Exo 2', sans-serif", fontWeight: 700, letterSpacing: '0.1em', marginBottom: '16px' }}>
          TECH BLOG
        </div>
        <h1 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 900, fontSize: 'clamp(28px, 4vw, 52px)', color: '#E2E8F0', marginBottom: '16px' }}>
          Guides, Reviews & <span style={{ color: '#00D8FF' }}>Expert Tips</span>
        </h1>
        <p style={{ fontSize: '18px', color: '#94A3B8', maxWidth: '500px', margin: '0 auto' }}>
          In-depth tech journalism from our team of editors and security analysts.
        </p>
      </div>

      {/* Featured Article */}
      <div
        className="card-hover"
        style={{
          background: '#1E293B',
          border: '1px solid rgba(0, 216, 255, 0.15)',
          borderRadius: '20px',
          overflow: 'hidden',
          marginBottom: '40px',
          cursor: 'pointer',
        }}
        onClick={() => setActiveArticle(featured.id)}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '300px' }}>
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(0, 216, 255, 0.08), rgba(139, 92, 246, 0.06))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '80px',
              borderRight: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            🌐
          </div>
          <div style={{ padding: '40px' }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
              <span style={{ padding: '3px 10px', borderRadius: '4px', background: `${featured.categoryColor}1A`, border: `1px solid ${featured.categoryColor}33`, color: featured.categoryColor, fontSize: '10px', fontFamily: "'Exo 2', sans-serif", fontWeight: 700, letterSpacing: '0.1em' }}>
                {featured.category}
              </span>
              <span style={{ padding: '3px 10px', borderRadius: '4px', background: 'rgba(255,27,81,0.1)', border: '1px solid rgba(255,27,81,0.3)', color: '#FF1B51', fontSize: '10px', fontFamily: "'Exo 2', sans-serif", fontWeight: 700, letterSpacing: '0.1em' }}>
                FEATURED
              </span>
            </div>
            <h2 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800, fontSize: '24px', color: '#E2E8F0', lineHeight: '1.3', marginBottom: '16px' }}>
              {featured.title}
            </h2>
            <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: '1.6', marginBottom: '24px' }}>
              {featured.excerpt}
            </p>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', color: '#64748B' }}>{featured.author}</span>
              <span style={{ color: '#334155' }}>•</span>
              <span style={{ fontSize: '13px', color: '#64748B' }}>{featured.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
        {rest.map((article) => (
          <div
            key={article.id}
            className="card-hover"
            style={{ background: '#1E293B', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '14px', overflow: 'hidden', cursor: 'pointer', position: 'relative' }}
            onClick={() => setActiveArticle(article.id)}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${article.categoryColor}, transparent)` }} />
            <div style={{ padding: '28px' }}>
              <span style={{ padding: '3px 10px', borderRadius: '4px', background: `${article.categoryColor}1A`, border: `1px solid ${article.categoryColor}33`, color: article.categoryColor, fontSize: '10px', fontFamily: "'Exo 2', sans-serif", fontWeight: 700, letterSpacing: '0.1em', display: 'inline-block', marginBottom: '16px' }}>
                {article.category}
              </span>
              <h2 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, fontSize: '18px', color: '#E2E8F0', lineHeight: '1.3', marginBottom: '12px' }}>
                {article.title}
              </h2>
              <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6', marginBottom: '20px' }}>
                {article.excerpt}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#475569' }}>
                <span>{article.author}</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

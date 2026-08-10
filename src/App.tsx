import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Browsers from './pages/Browsers'
import Security from './pages/Security'
import Utilities from './pages/Utilities'
import BestDeals from './pages/BestDeals'
import Blog from './pages/Blog'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'

type Page = 'home' | 'browsers' | 'security' | 'utilities' | 'deals' | 'blog' | 'about' | 'contact'

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')

  const handleNavigate = (page: Page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const titles: Record<Page, string> = {
      home: 'AffiMarket — Free PC Software Downloads',
      browsers: 'Browsers — Opera GX & Opera One | AffiMarket',
      security: 'Security & Antivirus — Avast Free | AffiMarket',
      utilities: 'Utilities & PC Tools | AffiMarket',
      deals: 'Best Free Software Deals 2026 | AffiMarket',
      blog: 'Tech Blog & Guides | AffiMarket',
      about: 'About Us | AffiMarket',
      contact: 'Contact Us | AffiMarket',
    }
    document.title = titles[currentPage]
  }, [currentPage])

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={handleNavigate} />
      case 'browsers': return <Browsers />
      case 'security': return <Security />
      case 'utilities': return <Utilities />
      case 'deals': return <BestDeals />
      case 'blog': return <Blog />
      case 'about': return <AboutUs />
      case 'contact': return <Contact />
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0F172A', display: 'flex', flexDirection: 'column' }}>
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main style={{ flex: 1 }}>
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  )
}

'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [colorMode, setColorMode] = useState('dark')

  useEffect(() => {
    const savedMode = localStorage.getItem('mvsk-color-mode') || 'dark'
    setColorMode(savedMode)
    document.body.className = savedMode === 'light' ? 'light-mode' : ''
  }, [])

  const toggleColorMode = () => {
    const newMode = colorMode === 'dark' ? 'light' : 'dark'
    setColorMode(newMode)
    localStorage.setItem('mvsk-color-mode', newMode)
    document.body.className = newMode === 'light' ? 'light-mode' : ''
  }

  const searchPages = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Teams', url: '/teams' },
    { title: 'Schedule', url: '/schedule' },
    { title: 'News', url: '/news' },
    { title: 'Partners', url: '/partners' },
  ]

  const filteredPages = searchPages.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <header className="bg-mvsk-gray border-b border-mvsk-blue/20 animate-slide-down sticky top-0 z-50 backdrop-blur-sm bg-mvsk-gray/95">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-2xl font-bold text-mvsk-blue group-hover:scale-110 transition-transform duration-300">MVSK</div>
            <div className="text-sm text-gray-400 group-hover:text-mvsk-blue transition-colors">Esports</div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="hover:text-mvsk-blue transition-colors">
              Home
            </Link>
            <Link href="/about" className="relative hover:text-mvsk-blue transition-all group">
              <span>About</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mvsk-blue group-hover:w-full transition-all"></span>
            </Link>
            <Link href="/teams" className="hover:text-mvsk-blue hover:translate-y-[-2px] transition-all inline-block">
              Teams
            </Link>
            <Link href="/schedule" className="px-3 py-1 rounded hover:bg-mvsk-blue/10 hover:text-mvsk-blue transition-all">
              Schedule
            </Link>
            <Link href="/news" className="relative group hover:text-mvsk-blue transition-colors">
              <span className="relative z-10">News</span>
              <span className="absolute inset-0 bg-mvsk-blue/10 scale-0 group-hover:scale-100 transition-transform rounded"></span>
            </Link>
            <Link href="/partners" className="hover:text-mvsk-blue hover:tracking-wider transition-all">
              Partners
            </Link>
            
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 hover:text-mvsk-blue transition-colors"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <button
              onClick={toggleColorMode}
              className="p-2 hover:text-mvsk-blue transition-colors"
              aria-label="Toggle theme"
            >
              {colorMode === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-mvsk-blue transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 animate-slide-down">
            <Link href="/" className="block py-2 px-4 rounded hover:text-mvsk-blue hover:bg-mvsk-blue/10 transition-all">
              Home
            </Link>
            <Link href="/about" className="block py-2 px-4 rounded hover:text-mvsk-blue hover:bg-mvsk-blue/10 transition-all">
              About
            </Link>
            <Link href="/teams" className="block py-2 px-4 rounded hover:text-mvsk-blue hover:bg-mvsk-blue/10 transition-all">
              Teams
            </Link>
            <Link href="/schedule" className="block py-2 px-4 rounded hover:text-mvsk-blue hover:bg-mvsk-blue/10 transition-all">
              Schedule
            </Link>
            <Link href="/news" className="block py-2 px-4 rounded hover:text-mvsk-blue hover:bg-mvsk-blue/10 transition-all">
              News
            </Link>
            <Link href="/partners" className="block py-2 px-4 rounded hover:text-mvsk-blue hover:bg-mvsk-blue/10 transition-all">
              Partners
            </Link>
            <button
              onClick={toggleColorMode}
              className="block w-full text-left py-2 px-4 rounded hover:text-mvsk-blue hover:bg-mvsk-blue/10 transition-all"
            >
              {colorMode === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>
        )}
      </nav>

      {/* Search Overlay */}
      {showSearch && (
        <div className="search-gaming-overlay" onClick={() => setShowSearch(false)}>
          <div className="search-gaming-panel" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center border-b border-mvsk-blue/30 p-5">
              <svg className="w-6 h-6 text-mvsk-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search MVSK..."
                className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 text-lg"
                autoFocus
              />
              <button onClick={() => setShowSearch(false)} className="ml-4 text-gray-400 hover:text-mvsk-blue">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="max-h-96 overflow-y-auto p-3">
              {filteredPages.map((page, i) => (
                <Link
                  key={i}
                  href={page.url}
                  onClick={() => { setShowSearch(false); setSearchTerm(''); }}
                  className="flex items-center justify-between p-4 rounded-lg hover:bg-mvsk-blue/20 transition-all border border-transparent hover:border-mvsk-blue/50"
                >
                  <span className="font-semibold">{page.title}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

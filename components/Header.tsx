'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-mvsk-gray border-b border-mvsk-blue/20 animate-slide-down sticky top-0 z-50 backdrop-blur-sm bg-mvsk-gray/95">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-2xl font-bold text-mvsk-blue group-hover:scale-110 transition-transform duration-300">MVSK</div>
            <div className="text-sm text-gray-400 group-hover:text-mvsk-blue transition-colors">Esports</div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
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
          </div>
        )}
      </nav>
    </header>
  )
}

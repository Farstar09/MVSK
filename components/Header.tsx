'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-mvsk-gray border-b border-mvsk-blue/20">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-mvsk-blue">MVSK</div>
            <div className="text-sm text-gray-400">Esports</div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-mvsk-blue transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-mvsk-blue transition-colors">
              About
            </Link>
            <Link href="/teams" className="hover:text-mvsk-blue transition-colors">
              Teams
            </Link>
            <Link href="/schedule" className="hover:text-mvsk-blue transition-colors">
              Schedule
            </Link>
            <Link href="/news" className="hover:text-mvsk-blue transition-colors">
              News
            </Link>
            <Link href="/partners" className="hover:text-mvsk-blue transition-colors">
              Partners
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link href="/" className="block py-2 hover:text-mvsk-blue transition-colors">
              Home
            </Link>
            <Link href="/about" className="block py-2 hover:text-mvsk-blue transition-colors">
              About
            </Link>
            <Link href="/teams" className="block py-2 hover:text-mvsk-blue transition-colors">
              Teams
            </Link>
            <Link href="/schedule" className="block py-2 hover:text-mvsk-blue transition-colors">
              Schedule
            </Link>
            <Link href="/news" className="block py-2 hover:text-mvsk-blue transition-colors">
              News
            </Link>
            <Link href="/partners" className="block py-2 hover:text-mvsk-blue transition-colors">
              Partners
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

'use client'

import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [loadingComplete, setLoadingComplete] = useState(false)
  const [progressWidth, setProgressWidth] = useState(0)
  const [showProgress, setShowProgress] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingComplete(true)
    }, 1800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    setShowProgress(true)
    setProgressWidth(0)
    
    const steps = [20, 45, 70, 95, 100]
    let currentStep = 0
    
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setProgressWidth(steps[currentStep])
        currentStep++
      } else {
        clearInterval(interval)
        setTimeout(() => setShowProgress(false), 300)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [pathname])

  return (
    <html lang="en">
      <body className="font-sans">
        {!loadingComplete && (
          <div className={`esports-loading-screen ${loadingComplete ? 'fade-exit' : ''}`}>
            <div className="loading-hexagon">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-mvsk-blue">
                M
              </div>
            </div>
          </div>
        )}
        
        {showProgress && (
          <div className="nav-progress-bar" style={{ width: `${progressWidth}%` }} />
        )}
        
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

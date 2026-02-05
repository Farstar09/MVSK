'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [typedText, setTypedText] = useState('')
  const fullText = 'MVSK Hearts'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.substring(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 150)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setShowBackToTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const testimonials = [
    { name: 'Gaming Fan', quote: 'MVSK Hearts are incredible to watch. Their teamwork is unmatched!', role: 'Community Member' },
    { name: 'Esports Analyst', quote: 'One of the most promising teams in the competitive scene right now.', role: 'Professional Analyst' },
    { name: 'Tournament Organizer', quote: 'Always a pleasure to have MVSK at our events. True professionals.', role: 'Event Coordinator' },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div>
      {/* Hero Section with Parallax */}
      <section className="relative py-20 px-4 overflow-hidden" style={{ minHeight: '600px' }}>
        <div className="hex-particle-field">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="hex-particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
        <div 
          className="absolute inset-0 bg-gradient-to-r from-mvsk-blue/10 to-transparent"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-mvsk-blue animate-slide-in-left">
              MVSK
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-slide-in-left delay-100">
              Dominating Valorant as <span className="text-mvsk-blue esports-typing-text inline-block">{typedText}</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 animate-slide-in-left delay-200">
              Watch us compete, catch the streams, and join the Discord
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-in-left delay-300">
              <Link 
                href="/teams" 
                className="px-8 py-3 bg-mvsk-blue hover:bg-blue-600 rounded-lg font-semibold action-btn-energy transition-all hover:scale-105"
              >
                Meet the Team
              </Link>
              <Link 
                href="/schedule" 
                className="px-8 py-3 border-2 border-mvsk-blue hover:bg-mvsk-blue/10 rounded-lg font-semibold transition-all hover:scale-105"
              >
                View Schedule
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="py-16 px-4 bg-mvsk-gray/50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8 animate-fade-in">
            <h2 className="text-3xl font-bold">Latest News</h2>
            <Link href="/news" className="text-mvsk-blue hover:underline transition-colors">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sample news items */}
            <div className="competition-card relative bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-6 hover:border-mvsk-blue transition-all animate-slide-up delay-100">
              <div className="text-sm text-gray-400 mb-2">January 15, 2026</div>
              <h3 className="text-xl font-bold mb-3">We Won Regionals!</h3>
              <p className="text-gray-400 mb-4">
                First place in the regional tournament. The team played out of their minds.
              </p>
              <Link href="/news" className="text-mvsk-blue hover:underline inline-flex items-center">
                Read More <span className="ml-1">→</span>
              </Link>
            </div>
            <div className="competition-card relative bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-6 hover:bg-mvsk-blue/5 transition-all animate-slide-up delay-200">
              <div className="text-sm text-gray-400 mb-2">January 10, 2026</div>
              <h3 className="text-xl font-bold mb-3">New Player Joins</h3>
              <p className="text-gray-400 mb-4">
                Welcome to the newest member of MVSK Hearts. Let's get it.
              </p>
              <Link href="/news" className="text-mvsk-blue hover:underline inline-flex items-center">
                Read More <span className="ml-1">→</span>
              </Link>
            </div>
            <div className="competition-card relative bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-6 transition-all animate-slide-up delay-300">
              <div className="text-sm text-gray-400 mb-2">January 5, 2026</div>
              <h3 className="text-xl font-bold mb-3">2026 Season Starts</h3>
              <p className="text-gray-400 mb-4">
                New year, new season. Check the schedule for upcoming matches.
              </p>
              <Link href="/news" className="text-mvsk-blue hover:underline inline-flex items-center">
                Read More <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Matches */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8 animate-fade-in">
            <h2 className="text-3xl font-bold">Upcoming Matches</h2>
            <Link href="/schedule" className="text-mvsk-blue hover:underline transition-colors">
              Full Schedule →
            </Link>
          </div>
          <div className="space-y-4">
            <div className="upcoming-match bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between transition-all animate-slide-in-left delay-100">
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <div className="text-center">
                  <div className="text-2xl font-bold">FEB</div>
                  <div className="text-3xl font-bold text-mvsk-blue">08</div>
                </div>
                <div>
                  <div className="text-xl font-bold">MVSK Hearts vs Team Phoenix</div>
                  <div className="text-gray-400">VCT Regional Qualifier - Round 1</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="stream-live-indicator relative w-3 h-3 bg-red-500 rounded-full"></span>
                <div className="text-gray-400 font-semibold">19:00 EST</div>
              </div>
            </div>
            <div className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between hover:bg-mvsk-blue/5 transition-all animate-slide-in-left delay-200">
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <div className="text-center">
                  <div className="text-2xl font-bold">FEB</div>
                  <div className="text-3xl font-bold text-mvsk-blue">15</div>
                </div>
                <div>
                  <div className="text-xl font-bold">MVSK Hearts vs Sentinel Squad</div>
                  <div className="text-gray-400">VCT Regional Qualifier - Round 2</div>
                </div>
              </div>
              <div className="text-gray-400 font-semibold">20:00 EST</div>
            </div>
          </div>
        </div>
      </section>

      {/* Discord & Streams */}
      <section className="py-16 px-4 bg-mvsk-gray/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Discord Widget */}
            <div className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-8 hover:border-mvsk-blue transition-colors animate-slide-up delay-100">
              <h2 className="text-3xl font-bold mb-6">Join the Discord</h2>
              <p className="text-gray-400 mb-6">
                Hang out with fans, get updates, and chat with us
              </p>
              {/* TODO: Replace YOUR_SERVER_ID with your actual Discord server ID */}
              <iframe 
                src="https://discord.com/widget?id=YOUR_SERVER_ID&theme=dark" 
                width="100%" 
                height="300" 
                className="rounded-lg border-0"
                style={{ background: 'transparent' }}
              ></iframe>
              <a 
                href="https://discord.gg/mvsk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-mvsk-blue hover:bg-blue-600 rounded-lg font-semibold transition-colors"
              >
                Join Server
              </a>
            </div>

            {/* Live Streams */}
            <div className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-8 hover:bg-mvsk-blue/5 transition-colors animate-slide-up delay-200">
              <h2 className="text-3xl font-bold mb-6">Watch Live</h2>
              <p className="text-gray-400 mb-6">
                Catch our matches and VODs
              </p>
              <div className="space-y-4">
                <a 
                  href="https://twitch.tv/mvsk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-mvsk-dark rounded-lg hover:bg-mvsk-dark/50 transition-colors group"
                >
                  <svg className="w-10 h-10 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                  </svg>
                  <div>
                    <div className="font-bold">Twitch</div>
                    <div className="text-sm text-gray-400">Live matches</div>
                  </div>
                </a>
                <a 
                  href="https://youtube.com/@mvsk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-mvsk-dark rounded-lg hover:bg-mvsk-dark/50 transition-colors group"
                >
                  <svg className="w-10 h-10 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <div>
                    <div className="font-bold">YouTube</div>
                    <div className="text-sm text-gray-400">Highlights & VODs</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Testimonials Carousel */}
      <section className="py-16 px-4 bg-mvsk-gray/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">What Fans Are Saying</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="featured-carousel-track"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, idx) => (
                  <div key={idx} className="featured-carousel-slide px-4">
                    <div className="testimonial-gamer-card">
                      <p className="text-lg text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-bold text-mvsk-blue">{testimonial.name}</div>
                          <div className="text-sm text-gray-400">{testimonial.role}</div>
                        </div>
                        <div className="text-4xl text-mvsk-blue/20">★★★★★</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center items-center gap-4 mt-8">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-mvsk-blue/20 hover:bg-mvsk-blue transition-all flex items-center justify-center"
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`carousel-dot ${idx === currentTestimonial ? 'active-dot' : ''}`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-mvsk-blue/20 hover:bg-mvsk-blue transition-all flex items-center justify-center"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Big CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-2xl p-12 md:p-16 text-center cta-gradient">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Support MVSK Hearts?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Join our growing community of fans and never miss a match. Get exclusive updates and behind-the-scenes content.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://discord.gg/mvsk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 bg-white text-mvsk-blue rounded-lg font-bold text-lg hover:scale-110 transition-all action-btn-energy shadow-lg"
                >
                  Join Discord Now
                </a>
                <Link
                  href="/teams"
                  className="px-10 py-4 bg-mvsk-dark/50 backdrop-blur rounded-lg font-bold text-lg border-2 border-white hover:scale-110 transition-all shadow-lg"
                >
                  Meet The Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-16 px-4 bg-mvsk-gray/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {['Partner 1', 'Partner 2', 'Partner 3', 'Partner 4'].map((partner, idx) => (
              <div 
                key={idx}
                className="roster-member-card w-40 h-24 bg-mvsk-gray border border-mvsk-blue/20 rounded-lg flex items-center justify-center text-gray-400 transition-all"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {partner}
              </div>
            ))}
          </div>
          <div className="text-center mt-8 animate-fade-in delay-500">
            <Link href="/partners" className="text-mvsk-blue hover:underline transition-colors inline-flex items-center gap-2">
              View All Partners <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-mvsk-gray border-2 border-mvsk-blue/30 rounded-xl p-8 text-center bracket-highlight">
            <h3 className="text-2xl font-bold mb-4">Never Miss a Match</h3>
            <p className="text-gray-400 mb-6">Subscribe for match alerts, roster updates, and exclusive MVSK content</p>
            <form className="flex flex-col md:flex-row gap-3" onSubmit={(e) => { e.preventDefault(); alert('Thanks for subscribing!'); }}>
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="flex-1 form-gaming-field"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-mvsk-blue hover:bg-blue-600 rounded-lg font-semibold action-btn-energy transition-all hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="jump-top-esports"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  )
}

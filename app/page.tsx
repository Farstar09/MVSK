import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-mvsk-blue/10 to-transparent animate-pulse-slow"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-mvsk-blue animate-slide-in-left">
              MVSK
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-slide-in-left delay-100">
              Dominating Valorant as <span className="text-mvsk-blue">MVSK Hearts</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 animate-slide-in-left delay-200">
              Watch us compete, catch the streams, and join the Discord
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-in-left delay-300">
              <Link 
                href="/teams" 
                className="px-8 py-3 bg-mvsk-blue hover:bg-blue-600 rounded-lg font-semibold transition-colors"
              >
                Meet the Team
              </Link>
              <Link 
                href="/schedule" 
                className="px-8 py-3 border border-mvsk-blue hover:bg-mvsk-blue/10 rounded-lg font-semibold transition-all"
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
            <div className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-6 hover:border-mvsk-blue transition-colors animate-slide-up delay-100">
              <div className="text-sm text-gray-400 mb-2">January 15, 2026</div>
              <h3 className="text-xl font-bold mb-3">We Won Regionals!</h3>
              <p className="text-gray-400 mb-4">
                First place in the regional tournament. The team played out of their minds.
              </p>
              <Link href="/news" className="text-mvsk-blue hover:underline">
                Read More →
              </Link>
            </div>
            <div className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-6 hover:bg-mvsk-blue/5 transition-colors animate-slide-up delay-200">
              <div className="text-sm text-gray-400 mb-2">January 10, 2026</div>
              <h3 className="text-xl font-bold mb-3">New Player Joins</h3>
              <p className="text-gray-400 mb-4">
                Welcome to the newest member of MVSK Hearts. Let's get it.
              </p>
              <Link href="/news" className="text-mvsk-blue hover:underline">
                Read More →
              </Link>
            </div>
            <div className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-6 hover:translate-y-[-4px] transition-transform animate-slide-up delay-300">
              <div className="text-sm text-gray-400 mb-2">January 5, 2026</div>
              <h3 className="text-xl font-bold mb-3">2026 Season Starts</h3>
              <p className="text-gray-400 mb-4">
                New year, new season. Check the schedule for upcoming matches.
              </p>
              <Link href="/news" className="text-mvsk-blue hover:underline">
                Read More →
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
            <div className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between hover:border-mvsk-blue transition-colors animate-slide-in-left delay-100">
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
              <div className="text-gray-400 font-semibold">19:00 EST</div>
            </div>
            <div className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between hover:bg-mvsk-blue/5 transition-colors animate-slide-in-left delay-200">
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
                  className="flex items-center space-x-4 p-4 bg-mvsk-dark rounded-lg hover:border hover:border-mvsk-blue/20 transition-all group"
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

      {/* Sponsors */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in">Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {/* Placeholder sponsors */}
            <div className="w-40 h-24 bg-mvsk-gray border border-mvsk-blue/20 rounded-lg flex items-center justify-center text-gray-400 hover:border-mvsk-blue transition-colors animate-slide-up delay-100">
              Partner 1
            </div>
            <div className="w-40 h-24 bg-mvsk-gray border border-mvsk-blue/20 rounded-lg flex items-center justify-center text-gray-400 hover:bg-mvsk-blue/5 transition-colors animate-slide-up delay-200">
              Partner 2
            </div>
            <div className="w-40 h-24 bg-mvsk-gray border border-mvsk-blue/20 rounded-lg flex items-center justify-center text-gray-400 hover:translate-y-[-4px] transition-transform animate-slide-up delay-300">
              Partner 3
            </div>
            <div className="w-40 h-24 bg-mvsk-gray border border-mvsk-blue/20 rounded-lg flex items-center justify-center text-gray-400 hover:border-mvsk-blue transition-all animate-slide-up delay-400">
              Partner 4
            </div>
          </div>
          <div className="text-center mt-8 animate-fade-in delay-500">
            <Link href="/partners" className="text-mvsk-blue hover:underline transition-colors">
              View All Partners →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

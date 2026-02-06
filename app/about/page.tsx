export default function About() {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Hero */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 animate-slide-down">
            About <span className="text-mvsk-blue">MVSK Esports</span>
          </h1>
          <p className="text-xl text-gray-400 animate-slide-down delay-100">
            We're just here to play Valorant and have a good time
          </p>
        </div>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-8 hover:border-mvsk-blue transition-all animate-slide-in-left">
              <h2 className="text-2xl font-bold mb-4 text-mvsk-blue">What We're About</h2>
              <p className="text-gray-400">
                MVSK started as a group of friends who wanted to compete in Valorant. 
                We're focused on grinding ranked, improving together, and making 
                some noise in tournaments. Nothing fancy - just dedicated players 
                trying to get better every day.
              </p>
            </div>
            <div className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-8 hover:border-mvsk-blue transition-colors animate-slide-in-right">
              <h2 className="text-2xl font-bold mb-4 text-mvsk-blue">Where We're Going</h2>
              <p className="text-gray-400">
                Our goal? Win as many matches as possible and see how far we can 
                take this. We're competing in regional tournaments now, and who 
                knows - maybe we'll make it to the big leagues someday. One round 
                at a time.
              </p>
            </div>
          </div>
        </section>

        {/* Achievements Timeline */}
        <section>
          <h2 className="text-3xl font-bold mb-8 animate-fade-in">The Story So Far</h2>
          <div className="space-y-6">
            <div className="relative pl-8 border-l-2 border-mvsk-blue animate-slide-in-left delay-100">
              <div className="absolute left-0 top-0 w-4 h-4 bg-mvsk-blue rounded-full -translate-x-[9px] animate-pulse"></div>
              <div className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-6 hover:border-mvsk-blue transition-colors">
                <div className="text-sm text-mvsk-blue font-semibold mb-2">2026</div>
                <h3 className="text-xl font-bold mb-2">Right Now</h3>
                <p className="text-gray-400">
                  Competing in VCT Regional Qualifiers. The grind continues.
                </p>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-mvsk-blue animate-slide-in-left delay-200">
              <div className="absolute left-0 top-0 w-4 h-4 bg-mvsk-blue rounded-full -translate-x-[9px]"></div>
              <div className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-6 hover:bg-mvsk-blue/5 transition-colors">
                <div className="text-sm text-mvsk-blue font-semibold mb-2">January 2026</div>
                <h3 className="text-xl font-bold mb-2">First Big Win</h3>
                <p className="text-gray-400">
                  Won our first regional tournament. Felt pretty good not gonna lie.
                </p>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-mvsk-blue animate-slide-in-left delay-300">
              <div className="absolute left-0 top-0 w-4 h-4 bg-mvsk-blue rounded-full -translate-x-[9px]"></div>
              <div className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-6 hover:border-mvsk-blue/50 transition-all">
                <div className="text-sm text-mvsk-blue font-semibold mb-2">2025</div>
                <h3 className="text-xl font-bold mb-2">Team Assembled</h3>
                <p className="text-gray-400">
                  Got the squad together. Five players ready to lock in.
                </p>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-mvsk-blue animate-slide-in-left delay-400">
              <div className="absolute left-0 top-0 w-4 h-4 bg-mvsk-blue rounded-full -translate-x-[9px]"></div>
              <div className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-6 hover:translate-x-1 transition-transform">
                <div className="text-sm text-mvsk-blue font-semibold mb-2">2025</div>
                <h3 className="text-xl font-bold mb-2">Started MVSK</h3>
                <p className="text-gray-400">
                  Decided to make this official and see where it goes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="mt-16" id="leadership">
          <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in">Leadership</h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            {/* Owners */}
            <div className="bg-mvsk-gray border-2 border-mvsk-blue rounded-lg p-6 text-center hover:bg-mvsk-blue/5 transition-colors animate-slide-up delay-100">
              <div className="text-sm text-mvsk-blue font-semibold mb-2">OWNER</div>
              <h3 className="text-2xl font-bold mb-2">Owner 1</h3>
              <p className="text-gray-400 text-sm">
                TBD
              </p>
            </div>
            <div className="bg-mvsk-gray border-2 border-mvsk-blue rounded-lg p-6 text-center hover:bg-mvsk-blue/5 transition-colors animate-slide-up delay-200">
              <div className="text-sm text-mvsk-blue font-semibold mb-2">OWNER</div>
              <h3 className="text-2xl font-bold mb-2">Owner 2</h3>
              <p className="text-gray-400 text-sm">
                TBD
              </p>
            </div>
            <div className="bg-mvsk-gray border-2 border-mvsk-blue rounded-lg p-6 text-center hover:bg-mvsk-blue/5 transition-colors animate-slide-up delay-300">
              <div className="text-sm text-mvsk-blue font-semibold mb-2">OWNER</div>
              <h3 className="text-2xl font-bold mb-2">Owner 3</h3>
              <p className="text-gray-400 text-sm">
                TBD
              </p>
            </div>
            {/* Executive Manager */}
            <div className="bg-mvsk-gray border border-mvsk-blue/60 rounded-lg p-6 text-center hover:border-mvsk-blue transition-all animate-slide-up delay-400">
              <div className="text-sm text-mvsk-blue/80 font-semibold mb-2">EXECUTIVE MANAGER</div>
              <h3 className="text-xl font-bold mb-2">Executive Manager</h3>
              <p className="text-gray-400 text-sm">
                TBD
              </p>
            </div>
            {/* TBD Spots */}
            <div className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-6 text-center hover:translate-y-[-4px] transition-transform animate-slide-up delay-500">
              <div className="text-sm text-gray-500 font-semibold mb-2">POSITION</div>
              <h3 className="text-xl font-bold mb-2 text-gray-500">TBD</h3>
              <p className="text-gray-400 text-sm">
                Coming Soon
              </p>
            </div>
            <div className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-6 text-center hover:translate-y-[-4px] transition-transform animate-slide-up delay-600">
              <div className="text-sm text-gray-500 font-semibold mb-2">POSITION</div>
              <h3 className="text-xl font-bold mb-2 text-gray-500">TBD</h3>
              <p className="text-gray-400 text-sm">
                Coming Soon
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

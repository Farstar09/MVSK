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
            Dedicated to excellence in competitive gaming
          </p>
        </div>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-8 hover:border-mvsk-blue transition-all hover:shadow-lg hover:shadow-mvsk-blue/20 hover:scale-105 animate-slide-in-left">
              <h2 className="text-2xl font-bold mb-4 text-mvsk-blue">Our Mission</h2>
              <p className="text-gray-400">
                To build a world-class esports organization that fosters talent, 
                promotes competitive excellence, and creates a positive community 
                for players and fans alike. We strive to set new standards in 
                Valorant esports through dedication, teamwork, and innovation.
              </p>
            </div>
            <div className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-8 hover:border-mvsk-blue transition-all hover:shadow-lg hover:shadow-mvsk-blue/20 hover:scale-105 animate-slide-in-right">
              <h2 className="text-2xl font-bold mb-4 text-mvsk-blue">Our Vision</h2>
              <p className="text-gray-400">
                To become a leading force in the global esports scene, recognized 
                for our competitive achievements, professional standards, and 
                contribution to the gaming community. We aim to inspire the next 
                generation of esports athletes.
              </p>
            </div>
          </div>
        </section>

        {/* Achievements Timeline */}
        <section>
          <h2 className="text-3xl font-bold mb-8 animate-fade-in">Our Journey</h2>
          <div className="space-y-6">
            <div className="relative pl-8 border-l-2 border-mvsk-blue animate-slide-in-left delay-100">
              <div className="absolute left-0 top-0 w-4 h-4 bg-mvsk-blue rounded-full -translate-x-[9px] animate-pulse"></div>
              <div className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-6 hover:border-mvsk-blue transition-all hover:shadow-lg hover:shadow-mvsk-blue/20 hover:scale-105">
                <div className="text-sm text-mvsk-blue font-semibold mb-2">2026</div>
                <h3 className="text-xl font-bold mb-2">Current Season</h3>
                <p className="text-gray-400">
                  MVSK Hearts competing in VCT Regional Qualifiers, aiming for international 
                  championship qualification.
                </p>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-mvsk-blue animate-slide-in-left delay-200">
              <div className="absolute left-0 top-0 w-4 h-4 bg-mvsk-blue rounded-full -translate-x-[9px]"></div>
              <div className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-6 hover:border-mvsk-blue transition-all hover:shadow-lg hover:shadow-mvsk-blue/20 hover:scale-105">
                <div className="text-sm text-mvsk-blue font-semibold mb-2">January 2026</div>
                <h3 className="text-xl font-bold mb-2">Regional Championship Victory</h3>
                <p className="text-gray-400">
                  MVSK Hearts secured first place in the regional tournament, 
                  demonstrating exceptional teamwork and strategy.
                </p>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-mvsk-blue animate-slide-in-left delay-300">
              <div className="absolute left-0 top-0 w-4 h-4 bg-mvsk-blue rounded-full -translate-x-[9px]"></div>
              <div className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-6 hover:border-mvsk-blue transition-all hover:shadow-lg hover:shadow-mvsk-blue/20 hover:scale-105">
                <div className="text-sm text-mvsk-blue font-semibold mb-2">2025</div>
                <h3 className="text-xl font-bold mb-2">Team Formation</h3>
                <p className="text-gray-400">
                  MVSK Hearts Valorant team officially formed with talented players 
                  from across the region.
                </p>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-mvsk-blue animate-slide-in-left delay-400">
              <div className="absolute left-0 top-0 w-4 h-4 bg-mvsk-blue rounded-full -translate-x-[9px]"></div>
              <div className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-6 hover:border-mvsk-blue transition-all hover:shadow-lg hover:shadow-mvsk-blue/20 hover:scale-105">
                <div className="text-sm text-mvsk-blue font-semibold mb-2">2025</div>
                <h3 className="text-xl font-bold mb-2">Organization Founded</h3>
                <p className="text-gray-400">
                  MVSK Esports was established with the vision of creating a premier 
                  esports organization focused on Valorant competitive gaming.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-6 text-center hover:border-mvsk-blue transition-all hover:shadow-lg hover:shadow-mvsk-blue/20 hover:scale-105 animate-slide-up delay-100">
              <div className="text-4xl mb-4 animate-float">🎯</div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-400 text-sm">
                We strive for the highest standards in everything we do
              </p>
            </div>
            <div className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-6 text-center hover:border-mvsk-blue transition-all hover:shadow-lg hover:shadow-mvsk-blue/20 hover:scale-105 animate-slide-up delay-200">
              <div className="text-4xl mb-4 animate-float delay-100">🤝</div>
              <h3 className="text-xl font-bold mb-3">Teamwork</h3>
              <p className="text-gray-400 text-sm">
                Success comes from collaboration and mutual support
              </p>
            </div>
            <div className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-6 text-center hover:border-mvsk-blue transition-all hover:shadow-lg hover:shadow-mvsk-blue/20 hover:scale-105 animate-slide-up delay-300">
              <div className="text-4xl mb-4 animate-float delay-200">💪</div>
              <h3 className="text-xl font-bold mb-3">Dedication</h3>
              <p className="text-gray-400 text-sm">
                Committed to continuous improvement and growth
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

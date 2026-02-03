export default function Partners() {
  const partners = [
    {
      name: "Gaming Gear Co",
      category: "Hardware Partner",
      description: "Providing top-tier gaming peripherals to our team",
      website: "https://example.com",
    },
    {
      name: "Energy Drinks Plus",
      category: "Beverage Partner",
      description: "Fueling our players during intense training and matches",
      website: "https://example.com",
    },
    {
      name: "StreamTech",
      category: "Technology Partner",
      description: "Professional streaming and broadcasting solutions",
      website: "https://example.com",
    },
    {
      name: "Esports Arena",
      category: "Venue Partner",
      description: "Premium training facilities and tournament venues",
      website: "https://example.com",
    },
    {
      name: "Game Analytics Pro",
      category: "Analytics Partner",
      description: "Advanced performance tracking and analysis tools",
      website: "https://example.com",
    },
    {
      name: "Apparel Brand",
      category: "Clothing Partner",
      description: "Official team jerseys and merchandise",
      website: "https://example.com",
    },
  ]

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Our <span className="text-mvsk-blue">Partners</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're proud to collaborate with industry-leading brands that share our 
            commitment to excellence and innovation in esports
          </p>
        </div>

        {/* Partner Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-8 hover:border-mvsk-blue transition-all hover:transform hover:scale-105"
              >
                {/* Logo Placeholder */}
                <div className="w-full h-32 bg-gradient-to-br from-mvsk-blue/20 to-mvsk-dark rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-2xl font-bold text-mvsk-blue opacity-50">
                    {partner.name}
                  </div>
                </div>

                {/* Partner Info */}
                <div className="mb-4">
                  <span className="text-xs font-semibold text-mvsk-blue px-3 py-1 bg-mvsk-blue/10 rounded-full">
                    {partner.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{partner.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{partner.description}</p>
                
                <a 
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mvsk-blue hover:underline font-semibold inline-flex items-center text-sm"
                >
                  Visit Website
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Partnership Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">📢</div>
              <h3 className="text-xl font-bold mb-3">Brand Exposure</h3>
              <p className="text-gray-400 text-sm">
                Reach thousands of engaged esports fans through our platforms and events
              </p>
            </div>
            <div className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Community Engagement</h3>
              <p className="text-gray-400 text-sm">
                Connect with our passionate community through exclusive content and activations
              </p>
            </div>
            <div className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Targeted Marketing</h3>
              <p className="text-gray-400 text-sm">
                Access to a dedicated demographic of gaming and esports enthusiasts
              </p>
            </div>
          </div>
        </section>

        {/* Become a Partner CTA */}
        <section>
          <div className="bg-gradient-to-r from-mvsk-blue/20 to-transparent border border-mvsk-blue rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Interested in partnering with MVSK Esports? Join us in our journey to 
              competitive excellence and connect with our growing community.
            </p>
            <a 
              href="https://discord.gg/mvsk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-mvsk-blue hover:bg-blue-600 rounded-lg font-semibold transition-colors"
            >
              Contact Us on Discord
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

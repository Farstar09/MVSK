export default function Teams() {
  const players = [
    {
      name: "Player One",
      role: "Duelist",
      twitter: "https://twitter.com/player1",
      twitch: "https://twitch.tv/player1",
    },
    {
      name: "Player Two",
      role: "Controller",
      twitter: "https://twitter.com/player2",
      twitch: "https://twitch.tv/player2",
    },
    {
      name: "Player Three",
      role: "Sentinel",
      twitter: "https://twitter.com/player3",
      twitch: "https://twitch.tv/player3",
    },
    {
      name: "Player Four",
      role: "Initiator",
      twitter: "https://twitter.com/player4",
      twitch: "https://twitch.tv/player4",
    },
    {
      name: "Player Five",
      role: "Flex",
      twitter: "https://twitter.com/player5",
      twitch: "https://twitch.tv/player5",
    },
  ]

  const getDelayClass = (index: number) => {
    const delays = ['', 'delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-500']
    return delays[index] || ''
  }

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        {/* Hero */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 animate-slide-down">
            <span className="text-mvsk-blue">MVSK Hearts</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-slide-down delay-100">
            The squad that runs it
          </p>
        </div>

        {/* Team Info */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-8 hover:border-mvsk-blue transition-colors animate-slide-up">
            <h2 className="text-2xl font-bold mb-4">About the Team</h2>
            <p className="text-gray-400 mb-4">
              Five players who clicked from day one. We've been grinding together, 
              learning each other's playstyles, and putting in the hours. Everyone brings 
              something different to the table, and that's what makes it work.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-mvsk-blue">5</div>
                <div className="text-sm text-gray-400">Players</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-mvsk-blue">10+</div>
                <div className="text-sm text-gray-400">Tournaments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-mvsk-blue">#1</div>
                <div className="text-sm text-gray-400">Regional</div>
              </div>
            </div>
          </div>
        </div>

        {/* Player Cards */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in">The Roster</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {players.map((player, index) => {
              // Assign hover effects based on role for consistency
              const roleHoverEffect = 
                player.role === 'Duelist' || player.role === 'Initiator' ? 'hover:translate-y-[-4px]' : 
                player.role === 'Controller' || player.role === 'Sentinel' ? 'hover:scale-105' : 
                'hover:bg-mvsk-blue/5';
              
              return (
              <div 
                key={index}
                className={`bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-6 hover:border-mvsk-blue transition-all animate-slide-up ${getDelayClass(index)} group ${roleHoverEffect}`}
              >
                {/* Player Avatar Placeholder */}
                <div className="w-full aspect-square bg-gradient-to-br from-mvsk-blue/20 to-mvsk-dark rounded-lg mb-4 flex items-center justify-center overflow-hidden relative group-hover:from-mvsk-blue/30 transition-colors">
                  <div className="text-6xl font-bold text-mvsk-blue opacity-20 group-hover:opacity-30 transition-opacity">
                    {player.name.charAt(0)}
                  </div>
                </div>

                {/* Player Info */}
                <h3 className="text-2xl font-bold mb-2 group-hover:text-mvsk-blue transition-colors">{player.name}</h3>
                <div className="text-mvsk-blue font-semibold mb-4">{player.role}</div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  <a 
                    href={player.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-mvsk-blue transition-all hover:scale-125"
                    aria-label="Twitter"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a 
                    href={player.twitch}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-mvsk-blue transition-all hover:scale-125"
                    aria-label="Twitch"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                    </svg>
                  </a>
                </div>
              )
            })}
          </div>
        </div>

        {/* Staff Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in">Behind the Scenes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-6 hover:border-mvsk-blue transition-colors animate-slide-in-left">
              <h3 className="text-xl font-bold mb-2">Head Coach</h3>
              <div className="text-mvsk-blue font-semibold mb-2">Calls the shots</div>
              <p className="text-gray-400 text-sm">
                Keeps us focused and helps us level up our strats
              </p>
            </div>
            <div className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-6 hover:bg-mvsk-blue/5 transition-colors animate-slide-in-right">
              <h3 className="text-xl font-bold mb-2">Analyst</h3>
              <div className="text-mvsk-blue font-semibold mb-2">Does the homework</div>
              <p className="text-gray-400 text-sm">
                Breaks down opponents so we know what we're up against
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

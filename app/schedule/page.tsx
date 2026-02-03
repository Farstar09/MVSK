export default function Schedule() {
  const matches = [
    {
      date: "FEB 08",
      year: "2026",
      opponent: "Team Phoenix",
      tournament: "VCT Regional Qualifier - Round 1",
      time: "19:00 EST",
      result: null,
    },
    {
      date: "FEB 15",
      year: "2026",
      opponent: "Sentinel Squad",
      tournament: "VCT Regional Qualifier - Round 2",
      time: "20:00 EST",
      result: null,
    },
    {
      date: "FEB 22",
      year: "2026",
      opponent: "Elite Gaming",
      tournament: "VCT Regional Qualifier - Semifinals",
      time: "18:00 EST",
      result: null,
    },
    {
      date: "JAN 15",
      year: "2026",
      opponent: "Thunder Esports",
      tournament: "Regional Championship - Final",
      time: "20:00 EST",
      result: "W 2-0",
    },
    {
      date: "JAN 12",
      year: "2026",
      opponent: "Vanguard Gaming",
      tournament: "Regional Championship - Semifinals",
      time: "19:00 EST",
      result: "W 2-1",
    },
    {
      date: "JAN 08",
      year: "2026",
      opponent: "Apex Legends",
      tournament: "Regional Championship - Round 1",
      time: "18:30 EST",
      result: "W 2-0",
    },
    {
      date: "DEC 20",
      year: "2025",
      opponent: "Cyber Warriors",
      tournament: "Winter Invitational - Final",
      time: "21:00 EST",
      result: "L 1-2",
    },
  ]

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Match <span className="text-mvsk-blue">Schedule</span>
          </h1>
          <p className="text-xl text-gray-400">
            Follow MVSK Hearts throughout the competitive season
          </p>
        </div>

        {/* Upcoming Matches */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="text-mvsk-blue mr-3">●</span> Upcoming Matches
          </h2>
          <div className="space-y-4">
            {matches
              .filter(match => !match.result)
              .map((match, index) => (
                <div 
                  key={index}
                  className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-6 hover:border-mvsk-blue transition-colors"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-start md:items-center gap-6 flex-1">
                      {/* Date */}
                      <div className="text-center min-w-[80px]">
                        <div className="text-sm text-gray-400">{match.year}</div>
                        <div className="text-2xl font-bold text-mvsk-blue">{match.date}</div>
                      </div>

                      {/* Match Info */}
                      <div className="flex-1">
                        <div className="text-xl font-bold mb-1">
                          MVSK Hearts <span className="text-gray-400">vs</span> {match.opponent}
                        </div>
                        <div className="text-gray-400 text-sm">{match.tournament}</div>
                      </div>
                    </div>

                    {/* Time */}
                    <div className="text-right">
                      <div className="text-lg font-semibold text-mvsk-blue">{match.time}</div>
                      <div className="text-sm text-gray-400">Upcoming</div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Past Results */}
        <section>
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="text-gray-400 mr-3">●</span> Recent Results
          </h2>
          <div className="space-y-4">
            {matches
              .filter(match => match.result)
              .map((match, index) => (
                <div 
                  key={index}
                  className="bg-mvsk-gray border border-gray-700 rounded-lg p-6 opacity-75 hover:opacity-100 transition-opacity"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-start md:items-center gap-6 flex-1">
                      {/* Date */}
                      <div className="text-center min-w-[80px]">
                        <div className="text-sm text-gray-400">{match.year}</div>
                        <div className="text-2xl font-bold text-gray-400">{match.date}</div>
                      </div>

                      {/* Match Info */}
                      <div className="flex-1">
                        <div className="text-xl font-bold mb-1">
                          MVSK Hearts <span className="text-gray-400">vs</span> {match.opponent}
                        </div>
                        <div className="text-gray-400 text-sm">{match.tournament}</div>
                      </div>
                    </div>

                    {/* Result */}
                    <div className="text-right">
                      <div className={`text-lg font-semibold ${
                        match.result?.startsWith('W') ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {match.result}
                      </div>
                      <div className="text-sm text-gray-400">{match.time}</div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Stats Summary */}
        <section className="mt-16">
          <div className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Season Statistics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-mvsk-blue">3</div>
                <div className="text-sm text-gray-400 mt-1">Wins</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">1</div>
                <div className="text-sm text-gray-400 mt-1">Losses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-mvsk-blue">75%</div>
                <div className="text-sm text-gray-400 mt-1">Win Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-mvsk-blue">7</div>
                <div className="text-sm text-gray-400 mt-1">Total Matches</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default function Star() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-16 px-4">
      <div className="container mx-auto max-w-2xl text-center">
        <div className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-8 animate-slide-down">
            <span className="text-purple-500">I coded it</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            This website was built and coded with passion.
          </p>
          <a 
            href="https://builtbystar.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-purple-500/20"
          >
            Visit Built By Star
          </a>
        </div>
      </div>
    </div>
  )
}

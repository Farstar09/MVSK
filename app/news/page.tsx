import Link from 'next/link'

export default function News() {
  const newsArticles = [
    {
      date: "TBD",
      title: "TBD",
      excerpt: "TBD",
      category: "TBD",
      slug: "tbd-1",
    },
    {
      date: "TBD",
      title: "TBD",
      excerpt: "TBD",
      category: "TBD",
      slug: "tbd-2",
    },
    {
      date: "TBD",
      title: "TBD",
      excerpt: "TBD",
      category: "TBD",
      slug: "tbd-3",
    },
    {
      date: "TBD",
      title: "TBD",
      excerpt: "TBD",
      category: "TBD",
      slug: "tbd-4",
    },
    {
      date: "TBD",
      title: "TBD",
      excerpt: "TBD",
      category: "TBD",
      slug: "tbd-5",
    },
    {
      date: "TBD",
      title: "TBD",
      excerpt: "TBD",
      category: "TBD",
      slug: "tbd-6",
    },
  ]

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Latest <span className="text-mvsk-blue">News</span>
          </h1>
          <p className="text-xl text-gray-400">
            Stay updated with MVSK Hearts and all things MVSK Esports
          </p>
        </div>

        {/* Featured Article */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-mvsk-blue/20 to-transparent border border-mvsk-blue rounded-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-mvsk-blue rounded-full text-xs font-semibold">
                FEATURED
              </span>
              <span className="text-sm text-gray-400">{newsArticles[0].date}</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">{newsArticles[0].title}</h2>
            <p className="text-gray-300 text-lg mb-6">{newsArticles[0].excerpt}</p>
            <Link 
              href={`/news/${newsArticles[0].slug}`}
              className="inline-block px-6 py-3 bg-mvsk-blue hover:bg-blue-600 rounded-lg font-semibold transition-colors"
            >
              Read Full Story
            </Link>
          </div>
        </section>

        {/* News Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsArticles.slice(1).map((article, index) => (
              <article 
                key={index}
                className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-6 hover:border-mvsk-blue transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-mvsk-blue">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400">{article.date}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{article.title}</h3>
                <p className="text-gray-400 mb-4">{article.excerpt}</p>
                <Link 
                  href={`/news/${article.slug}`}
                  className="text-mvsk-blue hover:underline font-semibold inline-flex items-center"
                >
                  Read More 
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mt-16">
          <div className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-400 mb-6">
              Join our Discord community to get instant notifications about news, matches, and updates!
            </p>
            <a 
              href="https://discord.gg/mvsk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-mvsk-blue hover:bg-blue-600 rounded-lg font-semibold transition-colors"
            >
              Join Discord
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

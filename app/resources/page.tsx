import Link from 'next/link'

export default function Resources() {
  const resourceSections = [
    {
      title: 'Media Kit',
      description: 'Logos, brand assets, and media resources',
      items: [
        { name: 'Official Logo Pack', link: '#', type: 'Download' },
        { name: 'Brand Guidelines', link: '#', type: 'PDF' },
        { name: 'Team Photos', link: '#', type: 'Gallery' },
      ]
    },
    {
      title: 'Press & Media',
      description: 'Press releases and media contact information',
      items: [
        { name: 'Latest Press Releases', link: '#', type: 'Link' },
        { name: 'Media Contact', link: '#', type: 'Email' },
        { name: 'Interview Requests', link: '#', type: 'Form' },
      ]
    },
    {
      title: 'Community Resources',
      description: 'Tools and resources for fans and community members',
      items: [
        { name: 'Discord Server', link: 'https://discord.gg/mvsk', type: 'Link' },
        { name: 'Fan Art Submissions', link: '#', type: 'Form' },
        { name: 'Community Guidelines', link: '#', type: 'PDF' },
      ]
    },
    {
      title: 'Legal & Policies',
      description: 'Terms, policies, and legal information',
      items: [
        { name: 'Privacy Policy', link: '#', type: 'Link' },
        { name: 'Terms of Service', link: '#', type: 'Link' },
        { name: 'Cookie Policy', link: '#', type: 'Link' },
      ]
    },
  ]

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Hero */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 animate-slide-down">
            <span className="text-mvsk-blue">Resources</span>
          </h1>
          <p className="text-xl text-gray-400 animate-slide-down delay-100">
            Everything you need to know about MVSK Esports
          </p>
        </div>

        {/* Resource Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resourceSections.map((section, idx) => (
            <div 
              key={idx}
              className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-8 hover:border-mvsk-blue transition-all animate-slide-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <h2 className="text-2xl font-bold mb-3 text-mvsk-blue">{section.title}</h2>
              <p className="text-gray-400 mb-6">{section.description}</p>
              <ul className="space-y-3">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <a 
                      href={item.link}
                      className="flex items-center justify-between p-3 bg-mvsk-dark rounded hover:bg-mvsk-blue/10 transition-colors group"
                    >
                      <span className="font-semibold group-hover:text-mvsk-blue transition-colors">
                        {item.name}
                      </span>
                      <span className="text-xs px-2 py-1 bg-mvsk-blue/20 rounded text-mvsk-blue">
                        {item.type}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="bg-mvsk-gray border border-mvsk-blue/20 rounded-lg p-8 animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">Need Something Else?</h2>
            <p className="text-gray-400 mb-6">
              Can&apos;t find what you&apos;re looking for? Reach out to us directly.
            </p>
            <a 
              href="#"
              className="inline-block px-8 py-3 bg-mvsk-blue hover:bg-blue-600 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

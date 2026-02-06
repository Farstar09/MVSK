import Link from 'next/link'

export default function Privacy() {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 animate-slide-down">
            <span className="text-mvsk-blue">Privacy Policy</span>
          </h1>
          <p className="text-gray-400">Last updated: February 2026</p>
        </div>

        <div className="space-y-8 text-gray-300 animate-slide-up">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p className="mb-3">
              We may collect the following types of information when you use our website:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Information you provide voluntarily, such as your email address when subscribing to updates</li>
              <li>Usage data, such as pages visited and time spent on the website</li>
              <li>Device information, such as browser type and operating system</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p className="mb-3">
              We use collected information to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide and improve our website and services</li>
              <li>Send match alerts and team updates to subscribers</li>
              <li>Analyze website usage to enhance user experience</li>
              <li>Communicate important announcements about MVSK Esports</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties.
              We may share information only when required by law or to protect the rights and safety
              of MVSK Esports and its community members.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Cookies and Tracking</h2>
            <p>
              Our website may use cookies and similar technologies to enhance your browsing experience.
              These may include preferences such as theme settings. You can control cookie settings
              through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Services</h2>
            <p>
              Our website may contain links to third-party services such as Discord, Twitch, YouTube,
              and Twitter/X. These services have their own privacy policies, and we encourage you to
              review them. We are not responsible for the privacy practices of third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Data Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information.
              However, no method of transmission over the internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights</h2>
            <p className="mb-3">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access the personal information we hold about you</li>
              <li>Request correction or deletion of your personal information</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Request a copy of your data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page
              with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Contact</h2>
            <p>
              If you have any questions about this Privacy Policy, you can reach us through our{' '}
              <a
                href="https://discord.gg/mvsk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mvsk-blue hover:underline"
              >
                Discord server
              </a>.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-mvsk-blue/20">
          <Link href="/terms" className="text-mvsk-blue hover:underline transition-colors">
            View Terms of Service →
          </Link>
        </div>
      </div>
    </div>
  )
}

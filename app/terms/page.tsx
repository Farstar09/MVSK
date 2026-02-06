import Link from 'next/link'

export default function Terms() {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 animate-slide-down">
            <span className="text-mvsk-blue">Terms of Service</span>
          </h1>
          <p className="text-gray-400">Last updated: February 2026</p>
        </div>

        <div className="space-y-8 text-gray-300 animate-slide-up">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the MVSK Esports website, you agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Use of the Website</h2>
            <p className="mb-3">
              You may use this website for lawful purposes only. You agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Use the website in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any part of the website</li>
              <li>Use the website to transmit harmful or malicious content</li>
              <li>Interfere with the proper functioning of the website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is the property of
              MVSK Esports and is protected by copyright and intellectual property laws. You may not reproduce,
              distribute, or create derivative works without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Community Guidelines</h2>
            <p className="mb-3">
              When interacting with MVSK Esports community platforms (including Discord and social media), you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Treat all community members with respect</li>
              <li>Refrain from harassment, hate speech, or discriminatory behavior</li>
              <li>Not share or distribute inappropriate content</li>
              <li>Follow the specific rules of each platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Disclaimer of Warranties</h2>
            <p>
              This website is provided &quot;as is&quot; without warranties of any kind, either express or implied.
              MVSK Esports does not guarantee the accuracy, completeness, or reliability of any content on this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
            <p>
              MVSK Esports shall not be liable for any damages arising from the use or inability to use this website,
              including but not limited to direct, indirect, incidental, or consequential damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon
              posting to this website. Your continued use of the website after changes are posted constitutes
              acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Contact</h2>
            <p>
              If you have any questions about these Terms of Service, you can reach us through our{' '}
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
          <Link href="/privacy" className="text-mvsk-blue hover:underline transition-colors">
            View Privacy Policy →
          </Link>
        </div>
      </div>
    </div>
  )
}

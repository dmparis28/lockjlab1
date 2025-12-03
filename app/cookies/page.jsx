// Filename: app/cookies/page.jsx
import Link from 'next/link';
import PageHero from '../components/PageHero';

export const metadata = {
  title: 'Cookie Policy | Lock J Lab',
  description: 'Learn about how Lock J Lab uses cookies and similar technologies.',
};

export default function CookiesPage() {
  return (
    <div className="bg-[#0B0F19] min-h-screen">
      <PageHero
        tag="Legal"
        icon="Settings"
        title="Cookie"
        titleHighlight="Policy"
        description="Last updated: December 2024"
        size="sm"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            
            <div className="bg-[#111827] rounded-xl p-8 border border-white/10 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
              <p className="text-gray-400">
                Cookies are small text files that are placed on your device when you visit a website. They help websites remember your preferences and understand how you interact with the site.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">How We Use Cookies</h3>
                <p className="text-gray-400 mb-4">We use cookies for the following purposes:</p>
                
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-medium mb-2">Essential Cookies</h4>
                    <p className="text-gray-400 text-sm">
                      Required for the website to function properly. These cannot be disabled.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-medium mb-2">Analytics Cookies</h4>
                    <p className="text-gray-400 text-sm">
                      Help us understand how visitors interact with our website, allowing us to improve user experience.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-medium mb-2">Functional Cookies</h4>
                    <p className="text-gray-400 text-sm">
                      Remember your preferences and personalize your experience on our website.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-medium mb-2">Marketing Cookies</h4>
                    <p className="text-gray-400 text-sm">
                      Used to track visitors across websites to display relevant advertisements.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Third-Party Cookies</h3>
                <p className="text-gray-400 mb-4">We may use third-party services that set their own cookies:</p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li><strong className="text-white">Google Analytics:</strong> For website analytics and performance tracking</li>
                  <li><strong className="text-white">HubSpot:</strong> For marketing automation and CRM</li>
                  <li><strong className="text-white">LinkedIn:</strong> For social sharing and advertising</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Managing Cookies</h3>
                <p className="text-gray-400 mb-4">
                  You can control and manage cookies in several ways:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li><strong className="text-white">Browser Settings:</strong> Most browsers allow you to block or delete cookies through their settings.</li>
                  <li><strong className="text-white">Our Cookie Banner:</strong> When you first visit our site, you can choose which cookies to accept.</li>
                  <li><strong className="text-white">Opt-Out Links:</strong> Use opt-out mechanisms provided by third-party services.</li>
                </ul>
                <p className="text-gray-400 mt-4">
                  Note: Disabling certain cookies may affect the functionality of our website.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Cookie Retention</h3>
                <p className="text-gray-400">
                  Session cookies are deleted when you close your browser. Persistent cookies remain on your device for a set period or until you delete them. Our persistent cookies typically expire within 1-2 years.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Updates to This Policy</h3>
                <p className="text-gray-400">
                  We may update this Cookie Policy from time to time. We encourage you to review this page periodically for the latest information on our cookie practices.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
                <p className="text-gray-400">
                  If you have questions about our use of cookies, please contact us at{' '}
                  <a href="mailto:privacy@appguru.com" className="text-sky-400 hover:text-sky-300">privacy@appguru.com</a>.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-gray-500 text-sm">
                See also: <Link href="/privacy" className="text-sky-400 hover:text-sky-300">Privacy Policy</Link> | <Link href="/terms" className="text-sky-400 hover:text-sky-300">Terms of Service</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

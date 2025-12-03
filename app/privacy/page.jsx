// Filename: app/privacy/page.jsx
import Link from 'next/link';
import PageHero from '../components/PageHero';

export const metadata = {
  title: 'Privacy Policy | Lock J Lab',
  description: 'Learn how Lock J Lab collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#0B0F19] min-h-screen">
      <PageHero
        tag="Legal"
        icon="ShieldCheck"
        title="Privacy"
        titleHighlight="Policy"
        description="Last updated: December 2024"
        size="sm"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            
            <div className="bg-[#111827] rounded-xl p-8 border border-white/10 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
              <p className="text-gray-400">
                Lock J Lab (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h3>
                <p className="text-gray-400 mb-4">We may collect information about you in a variety of ways:</p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li><strong className="text-white">Personal Data:</strong> Name, email address, phone number, company name, and other contact information you provide.</li>
                  <li><strong className="text-white">Project Information:</strong> Details about your project requirements, budget, and timeline.</li>
                  <li><strong className="text-white">Usage Data:</strong> Information about how you use our website, including pages visited and time spent.</li>
                  <li><strong className="text-white">Device Data:</strong> Information about your device, browser type, and IP address.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">2. How We Use Your Information</h3>
                <p className="text-gray-400 mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you project proposals and related communications</li>
                  <li>Improve our website and services</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">3. Information Sharing</h3>
                <p className="text-gray-400">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">4. Data Security</h3>
                <p className="text-gray-400">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">5. Your Rights</h3>
                <p className="text-gray-400 mb-4">You have the right to:</p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Lodge a complaint with a supervisory authority</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">6. Contact Us</h3>
                <p className="text-gray-400">
                  If you have questions about this Privacy Policy or our data practices, please contact us at{' '}
                  <a href="mailto:privacy@appguru.com" className="text-sky-400 hover:text-sky-300">privacy@appguru.com</a>.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-gray-500 text-sm">
                See also: <Link href="/terms" className="text-sky-400 hover:text-sky-300">Terms of Service</Link> | <Link href="/cookies" className="text-sky-400 hover:text-sky-300">Cookie Policy</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

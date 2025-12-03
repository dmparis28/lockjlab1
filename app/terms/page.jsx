// Filename: app/terms/page.jsx
import Link from 'next/link';
import PageHero from '../components/PageHero';

export const metadata = {
  title: 'Terms of Service | Lock J Lab',
  description: 'Terms and conditions for using Lock J Lab services.',
};

export default function TermsPage() {
  return (
    <div className="bg-[#0B0F19] min-h-screen">
      <PageHero
        tag="Legal"
        icon="FileCode"
        title="Terms of"
        titleHighlight="Service"
        description="Last updated: December 2024"
        size="sm"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            
            <div className="bg-[#111827] rounded-xl p-8 border border-white/10 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
              <p className="text-gray-400">
                By accessing or using Lock J Lab&apos;s services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">1. Services</h3>
                <p className="text-gray-400">
                  Lock J Lab provides digital product development services including but not limited to product strategy, UI/UX design, web development, mobile app development, and related consulting services. The specific scope of services will be outlined in individual project agreements.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">2. Project Agreements</h3>
                <p className="text-gray-400">
                  All projects are governed by a separate Statement of Work (SOW) or project agreement that specifies scope, timeline, deliverables, and pricing. These Terms of Service apply in addition to any project-specific agreements.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">3. Intellectual Property</h3>
                <p className="text-gray-400 mb-4">
                  Upon full payment, clients receive ownership of deliverables as specified in the project agreement. Lock J Lab retains the right to:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Use general knowledge and skills gained during the project</li>
                  <li>Showcase work in our portfolio (with client permission)</li>
                  <li>Retain ownership of pre-existing tools, frameworks, and methodologies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">4. Payment Terms</h3>
                <p className="text-gray-400">
                  Payment terms are specified in individual project agreements. Generally, we require an initial deposit before work begins, with remaining payments due upon milestone completion or as otherwise agreed.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">5. Confidentiality</h3>
                <p className="text-gray-400">
                  We maintain strict confidentiality regarding client information, project details, and proprietary data. We will not disclose confidential information to third parties without explicit consent, except as required by law.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">6. Limitation of Liability</h3>
                <p className="text-gray-400">
                  Lock J Lab shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid for the specific services giving rise to the claim.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">7. Termination</h3>
                <p className="text-gray-400">
                  Either party may terminate a project agreement with written notice as specified in the project agreement. Upon termination, the client is responsible for payment for work completed up to the termination date.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">8. Governing Law</h3>
                <p className="text-gray-400">
                  These Terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">9. Changes to Terms</h3>
                <p className="text-gray-400">
                  We reserve the right to modify these terms at any time. We will notify clients of significant changes via email or through our website.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">10. Contact</h3>
                <p className="text-gray-400">
                  For questions about these Terms, please contact us at{' '}
                  <a href="mailto:legal@appguru.com" className="text-sky-400 hover:text-sky-300">legal@appguru.com</a>.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-gray-500 text-sm">
                See also: <Link href="/privacy" className="text-sky-400 hover:text-sky-300">Privacy Policy</Link> | <Link href="/cookies" className="text-sky-400 hover:text-sky-300">Cookie Policy</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

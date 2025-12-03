// Filename: app/components/Footer.jsx
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Icon from './Icon';

const footerLinks = {
  services: [
    { name: 'Product Strategy', href: '/services/strategy' },
    { name: 'UI/UX Design', href: '/services/design' },
    { name: 'Software Development', href: '/services/development' },
    { name: 'All Services', href: '/services' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Process', href: '/process' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Case Studies', href: '/work' },
    { name: 'Blog & Guides', href: '/resources' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Customer Portal', href: '/portal' },
  ],
};

const socialLinks = [
  { name: 'LinkedIn', icon: 'Linkedin', href: 'https://linkedin.com' },
  { name: 'Twitter', icon: 'Twitter', href: 'https://twitter.com' },
  { name: 'Instagram', icon: 'Instagram', href: 'https://instagram.com' },
  { name: 'GitHub', icon: 'Github', href: 'https://github.com' },
];

// Pages that have their own custom CTA - hide the footer CTA on these
const pagesWithCustomCTA = [
  '/services/strategy',
  '/services/design', 
  '/services/development',
  '/services',
  '/work/coinflow',
  '/work/medibook',
  '/work/ids-staffing',
  '/work/ids-express',
  '/work',
  '/process',
  '/pricing',
  '/contact',
];

export default function Footer({ hideCTA = false }) {
  const pathname = usePathname();
  
  // Don't render footer on admin or portal pages
  if (pathname.startsWith('/admin') || pathname.startsWith('/portal')) {
    return null;
  }
  
  // Check if current page has its own CTA
  const pageHasCustomCTA = pagesWithCustomCTA.some(path => pathname === path);
  const shouldHideCTA = hideCTA || pageHasCustomCTA;

  return (
    <footer className="bg-[#0B0F19] border-t border-white/10">
      {/* CTA Section - Only show if page doesn't have custom CTA */}
      {!shouldHideCTA && (
        <div className="border-b border-white/10">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Build Something Great?
                </h2>
                <p className="text-gray-400 text-lg">
                  {"Let's discuss your project and create something amazing together."}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-sky-500/25 border border-sky-500/50"
                >
                  Start Your Project
                  <Icon name="ArrowRight" className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/work"
                  className="bg-white/5 hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-lg border border-white/10 transition-all flex items-center justify-center"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Footer */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
                <Icon name="Zap" className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Lock J Lab</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              We build digital products that drive results. From strategy to launch, we are your partner for success.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Lock J Lab. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-500 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Filename: app/components/Footer.jsx
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Icon from './Icon';
import { useTheme } from '../context/ThemeContext';

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
  const { activeTheme } = useTheme();
  const isLight = activeTheme === 'cleanBespoke';
  
  if (pathname.startsWith('/admin') || pathname.startsWith('/portal')) {
    return null;
  }
  
  const pageHasCustomCTA = pagesWithCustomCTA.some(path => pathname === path);
  const shouldHideCTA = hideCTA || pageHasCustomCTA;

  return (
    <footer 
      style={{ 
        backgroundColor: isLight ? '#1a1a2e' : 'var(--footer-bg)', 
        borderTop: '1px solid var(--border)' 
      }}
    >
      {/* CTA Section */}
      {!shouldHideCTA && (
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h2 
                  className="text-3xl md:text-4xl font-bold mb-4 text-white"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Ready to Build Something Great?
                </h2>
                <p className="text-lg text-gray-400">
                  {"Let's discuss your project and create something amazing together."}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group font-semibold py-3 px-8 transition-all flex items-center justify-center text-white"
                  style={{ 
                    background: `linear-gradient(135deg, var(--gradient-from), var(--gradient-to))`,
                    borderRadius: isLight ? 'var(--radius-full)' : 'var(--radius-md)',
                    boxShadow: 'var(--shadow-glow)'
                  }}
                >
                  Start Your Project
                  <Icon name="ArrowRight" className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/work"
                  className="font-semibold py-3 px-8 transition-all flex items-center justify-center text-white"
                  style={{ 
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderRadius: isLight ? 'var(--radius-full)' : 'var(--radius-md)',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}
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
              <div 
                className="w-10 h-10 flex items-center justify-center"
                style={{ 
                  background: `linear-gradient(135deg, var(--gradient-from), var(--gradient-to))`,
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <Icon name="Zap" className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                Lock J Lab
              </span>
            </Link>
            <p className="mb-6 max-w-sm text-gray-400">
              We build digital products that drive results. From strategy to launch, we are your partner for success.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 transition-all text-gray-500 hover:text-white"
                  style={{ 
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    borderRadius: 'var(--radius-md)'
                  }}
                >
                  <Icon name={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
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
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 Lock J Lab. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-500 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

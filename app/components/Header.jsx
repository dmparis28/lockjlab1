// Filename: app/components/Header.jsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { workData, servicesData, clientsData, resourcesData, aboutData } from '../data/navdata.js';
import SidebarMegaMenu from './SideBarMegaMenu';
import Icon from './Icon';

const Header = () => {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const getInitialSubMenu = (menu) => {
      let data;
      switch (menu) {
        case 'work': data = workData; break;
        case 'services': data = servicesData; break;
        case 'clients': data = clientsData; break;
        case 'resources': data = resourcesData; break;
        case 'about': data = aboutData; break;
        default: data = null;
      }
      return data?.sidebar?.[0]?.id || null;
    };
    setActiveSubMenu(getInitialSubMenu(activeMenu));
  }, [activeMenu]);

  // Don't render header on admin or portal pages (must be AFTER all hooks)
  if (pathname.startsWith('/admin') || pathname.startsWith('/portal')) {
    return null;
  }

  const handleMouseEnter = (menu) => setActiveMenu(menu);
  const handleMouseLeave = () => setActiveMenu(null);
  const handleSubMenuEnter = (subMenuId) => setActiveSubMenu(subMenuId);

  const getCurrentMenuData = () => {
    switch (activeMenu) {
      case 'work': return workData;
      case 'services': return servicesData;
      case 'clients': return clientsData;
      case 'resources': return resourcesData;
      case 'about': return aboutData;
      default: return null;
    }
  };

  const menuLinks = {
    work: '/work',
    services: '/services',
    clients: '/services',
    resources: '/resources',
    about: '/about',
  };

  const currentData = getCurrentMenuData();

  const navItems = [
    { key: 'work', label: 'Work' },
    { key: 'services', label: 'Services' },
    { key: 'resources', label: 'Resources' },
    { key: 'about', label: 'About' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0B0F19]/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
              <Icon name="Zap" className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Lock J Lab</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.key}
                onMouseEnter={() => handleMouseEnter(item.key)}
                className="relative"
              >
                <Link
                  href={menuLinks[item.key]}
                  className={`relative px-5 py-2 text-base font-medium transition-colors ${
                    activeMenu === item.key ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {item.label}
                    <Icon name="ChevronDown" className={`w-4 h-4 transition-transform ${activeMenu === item.key ? 'rotate-180' : ''}`} />
                  </span>
                  {/* Active indicator */}
                  <div className={`absolute bottom-0 left-5 right-5 h-0.5 bg-sky-500 transition-transform origin-left ${activeMenu === item.key ? 'scale-x-100' : 'scale-x-0'}`} />
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/pricing"
              className="text-gray-300 hover:text-white text-base font-medium transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl hover:shadow-sky-500/25 border border-sky-500/50 text-base hover:scale-[1.02] active:scale-[0.98]"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} className="w-6 h-6" />
          </button>
        </nav>
      </div>

      {/* Mega Menu Container */}
      <div 
        className={`absolute left-0 w-full bg-[#111827]/98 backdrop-blur-xl border-t border-white/10 shadow-2xl transition-all duration-200 ${
          activeMenu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.03) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          {currentData && activeSubMenu && (
            <SidebarMegaMenu 
              data={currentData} 
              activeSubMenu={activeSubMenu} 
              onSubMenuEnter={handleSubMenuEnter}
              menuType={activeMenu}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-[#111827] border-t border-white/10 overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="container mx-auto px-4 py-6">
          {/* Main Nav Links */}
          <div className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={menuLinks[item.key]}
                className="block text-white font-medium py-3 border-b border-white/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* Secondary Links */}
          <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
            <Link
              href="/process"
              className="block text-gray-400 hover:text-white text-sm py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Process
            </Link>
            <Link
              href="/pricing"
              className="block text-gray-400 hover:text-white text-sm py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/careers"
              className="block text-gray-400 hover:text-white text-sm py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
            </Link>
          </div>
          
          {/* CTA */}
          <div className="mt-6">
            <Link
              href="/contact"
              className="block w-full text-center bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

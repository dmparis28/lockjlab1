// Filename: app/components/Header.jsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { workData, servicesData, clientsData, resourcesData, aboutData } from '../data/navdata.js';
import SidebarMegaMenu from './SideBarMegaMenu';
import Icon from './Icon';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const pathname = usePathname();
  const { activeTheme } = useTheme();
  const isLight = activeTheme === 'cleanBespoke';
  
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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

  // Don't render header on admin or portal pages
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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ 
        backgroundColor: scrolled || activeMenu 
          ? (isLight ? 'rgba(255,255,255,0.98)' : 'rgba(11,15,25,0.98)')
          : (isLight ? 'rgba(255,255,255,0.95)' : 'rgba(11,15,25,0.95)'),
        boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
        backdropFilter: 'blur(12px)',
        borderBottom: isLight ? '1px solid var(--border)' : 'none'
      }}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div 
              className="w-10 h-10 flex items-center justify-center shadow-lg transition-transform group-hover:scale-105"
              style={{ 
                background: `linear-gradient(135deg, var(--gradient-from), var(--gradient-to))`,
                borderRadius: 'var(--radius-md)'
              }}
            >
              <Icon name="Zap" className="w-6 h-6 text-white" />
            </div>
            <span 
              className="text-xl font-bold" 
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              Lock J Lab
            </span>
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
                  className="relative px-5 py-2 text-base font-medium transition-all"
                  style={{ color: activeMenu === item.key ? 'var(--text-primary)' : 'var(--text-secondary)' }}
                >
                  <span className="flex items-center gap-1.5 hover:text-[var(--text-primary)]">
                    {item.label}
                    <Icon 
                      name="ChevronDown" 
                      className={`w-4 h-4 transition-transform ${activeMenu === item.key ? 'rotate-180' : ''}`} 
                    />
                  </span>
                  {/* Active indicator */}
                  <div 
                    className={`absolute bottom-0 left-5 right-5 h-0.5 transition-transform origin-left ${activeMenu === item.key ? 'scale-x-100' : 'scale-x-0'}`}
                    style={{ backgroundColor: 'var(--accent)' }}
                  />
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/pricing"
              className="text-base font-medium transition-all hover:text-[var(--text-primary)]"
              style={{ color: 'var(--text-secondary)' }}
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="font-semibold py-2.5 px-6 text-white text-base transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{ 
                background: `linear-gradient(135deg, var(--gradient-from), var(--gradient-to))`,
                borderRadius: isLight ? 'var(--radius-full)' : 'var(--radius-md)',
                boxShadow: 'var(--shadow-glow)'
              }}
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 transition-all"
            style={{ color: 'var(--text-primary)' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} className="w-6 h-6" />
          </button>
        </nav>
      </div>

      {/* Mega Menu Container */}
      <div 
        className={`absolute left-0 w-full shadow-2xl transition-all duration-200 ${
          activeMenu ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
        }`}
        style={{ 
          backgroundColor: isLight ? '#ffffff' : 'var(--bg-secondary)',
          borderTop: '1px solid var(--border)',
          borderBottom: isLight ? '1px solid var(--border)' : 'none'
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
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ 
          backgroundColor: isLight ? '#ffffff' : 'var(--bg-secondary)',
          borderTop: '1px solid var(--border)'
        }}
      >
        <div className="container mx-auto px-4 py-6">
          {/* Main Nav Links */}
          <div className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={menuLinks[item.key]}
                className="block font-medium py-3"
                style={{ color: 'var(--text-primary)', borderBottom: '1px solid var(--border)' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* Secondary Links */}
          <div className="mt-6 pt-6 space-y-3" style={{ borderTop: '1px solid var(--border)' }}>
            {['/process', '/pricing', '/careers'].map((href) => (
              <Link
                key={href}
                href={href}
                className="block text-sm py-2 hover:text-[var(--text-primary)]"
                style={{ color: 'var(--text-secondary)' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {href === '/process' ? 'Our Process' : href === '/pricing' ? 'Pricing' : 'Careers'}
              </Link>
            ))}
          </div>
          
          {/* CTA */}
          <div className="mt-6">
            <Link
              href="/contact"
              className="block w-full text-center text-white font-semibold py-3 px-6"
              style={{ 
                background: `linear-gradient(135deg, var(--gradient-from), var(--gradient-to))`,
                borderRadius: isLight ? 'var(--radius-full)' : 'var(--radius-md)',
                boxShadow: 'var(--shadow-lg)'
              }}
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

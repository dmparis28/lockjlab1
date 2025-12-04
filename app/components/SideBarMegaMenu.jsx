// Filename: app/components/SideBarMegaMenu.jsx
'use client';

import React from 'react';
import Icon from './Icon';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';

// Grid layout for content items with icons
const GridContent = ({ content, menuType, activeSubMenu, isLight }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {content.map((item) => (
      <Link
        key={item.title}
        href={item.href || '#'}
        className="flex items-start gap-4 p-4 rounded-xl transition-all group"
        style={{ 
          backgroundColor: 'transparent',
          border: isLight ? '1px solid transparent' : 'none'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = isLight ? 'var(--bg-secondary)' : 'var(--accent-muted)';
          if (isLight) e.currentTarget.style.borderColor = 'var(--border)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          if (isLight) e.currentTarget.style.borderColor = 'transparent';
        }}
      >
        <div 
          className="p-3 rounded-xl flex-shrink-0"
          style={{ 
            backgroundColor: 'var(--accent-muted)', 
            border: isLight ? 'none' : '1px solid var(--accent)' 
          }}
        >
          <Icon name={item.icon} className="w-5 h-5" style={{ color: 'var(--accent)' }} />
        </div>
        <div>
          <h4 
            className="font-semibold text-sm transition-all"
            style={{ color: 'var(--text-primary)' }}
          >
            {item.title}
          </h4>
          <p className="text-sm mt-1 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {item.description}
          </p>
        </div>
      </Link>
    ))}
  </div>
);

// List layout for content items with images
const ListContent = ({ content, menuType, isLight }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {content.map((item) => (
      <Link
        key={item.title}
        href={item.href || '#'}
        className="group block rounded-xl overflow-hidden transition-all"
        style={{ 
          backgroundColor: isLight ? 'var(--bg-secondary)' : 'var(--bg-tertiary)',
          border: '1px solid var(--border)'
        }}
      >
        {item.image && (
          <div className="aspect-video overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-4">
          <h4 
            className="font-semibold text-sm transition-all line-clamp-1"
            style={{ color: 'var(--text-primary)' }}
          >
            {item.title}
          </h4>
          <p className="text-sm mt-1 line-clamp-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {item.description}
          </p>
        </div>
      </Link>
    ))}
  </div>
);

// Featured callout card
const FeaturedCard = ({ featured, menuType, isLight }) => {
  if (!featured) return null;
  
  return (
    <div 
      className="mt-6 p-5 rounded-xl"
      style={{ 
        background: isLight 
          ? 'var(--bg-secondary)'
          : `linear-gradient(135deg, var(--accent-muted), var(--bg-secondary))`,
        border: '1px solid var(--border)'
      }}
    >
      <div className="flex items-start gap-4">
        <div 
          className="p-3 rounded-xl flex-shrink-0"
          style={{ background: `linear-gradient(135deg, var(--gradient-from), var(--gradient-to))` }}
        >
          <Icon name={featured.icon || "Sparkles"} className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
            {featured.title}
          </h4>
          <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
            {featured.description}
          </p>
          {featured.href && (
            <Link
              href={featured.href}
              className="inline-flex items-center gap-2 mt-3 text-sm font-medium transition-all"
              style={{ color: 'var(--accent)' }}
            >
              {featured.linkText || 'Learn more'}
              <Icon name="ArrowRight" className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default function SidebarMegaMenu({ data, activeSubMenu, onSubMenuEnter, menuType }) {
  const { activeTheme } = useTheme();
  const isLight = activeTheme === 'cleanBespoke';
  
  if (!data) return null;

  // Get the active sidebar item for display info
  const activeSidebarItem = data.sidebar?.find(s => s.id === activeSubMenu);
  
  // Get the actual content for this submenu from the content object
  const activeContentItems = data.content?.[activeSubMenu] || [];
  
  // Get the layout type from the top-level data
  const layoutType = data.layout || 'grid';
  
  // Get callout if exists
  const callout = data.callouts?.[activeSubMenu];

  return (
    <div className="flex gap-8">
      {/* Sidebar Categories */}
      <div className="w-52 flex-shrink-0">
        <div className="space-y-1">
          {data.sidebar?.map((category) => {
            const isActive = activeSubMenu === category.id;
            return (
              <button
                key={category.id}
                onMouseEnter={() => onSubMenuEnter(category.id)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all"
                style={{ 
                  backgroundColor: isActive 
                    ? (isLight ? 'var(--bg-secondary)' : 'var(--accent-muted)') 
                    : 'transparent',
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  border: isActive && isLight ? '1px solid var(--border)' : '1px solid transparent'
                }}
              >
                <Icon 
                  name={category.icon} 
                  className="w-5 h-5"
                  style={{ color: isActive ? 'var(--accent)' : 'var(--text-muted)' }}
                />
                <span className="font-medium text-sm" style={{ color: 'inherit' }}>{category.name || category.label}</span>
                <Icon 
                  name="ChevronRight" 
                  className="w-4 h-4 ml-auto transition-transform"
                  style={{ 
                    color: isActive ? 'var(--accent)' : 'var(--text-muted)',
                    transform: isActive ? 'translateX(2px)' : 'none'
                  }}
                />
              </button>
            );
          })}
        </div>
        
        {/* Footer Link */}
        {data.footer && (
          <div className="mt-6 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
            <p className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>{data.footer.text}</p>
            <Link
              href={data.footer.href || '#'}
              className="inline-flex items-center gap-2 text-sm font-medium transition-all"
              style={{ color: 'var(--accent)' }}
            >
              {data.footer.linkText}
              <Icon name="ArrowRight" className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="flex-1 min-w-0">
        {activeSidebarItem && (
          <>
            {/* Section Header */}
            <div className="mb-5">
              <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
                {activeSidebarItem.name || activeSidebarItem.label}
              </h3>
              {activeSidebarItem.description && (
                <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                  {activeSidebarItem.description}
                </p>
              )}
            </div>

            {/* Content Grid/List */}
            {activeContentItems.length > 0 && (
              layoutType === 'list' ? (
                <ListContent content={activeContentItems} menuType={menuType} isLight={isLight} />
              ) : (
                <GridContent content={activeContentItems} menuType={menuType} activeSubMenu={activeSubMenu} isLight={isLight} />
              )
            )}

            {/* Callout Card */}
            {callout && (
              <div 
                className="mt-6 p-5 rounded-xl"
                style={{ 
                  background: isLight 
                    ? 'var(--bg-secondary)'
                    : `linear-gradient(135deg, var(--accent-muted), var(--bg-secondary))`,
                  border: '1px solid var(--border)'
                }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="p-3 rounded-xl flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, var(--gradient-from), var(--gradient-to))` }}
                  >
                    <Icon name="Sparkles" className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    {callout.tag && (
                      <span className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--accent)' }}>
                        {callout.tag}
                      </span>
                    )}
                    <h4 className="font-semibold mt-1" style={{ color: 'var(--text-primary)' }}>
                      {callout.title}
                    </h4>
                    <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                      {callout.description}
                    </p>
                    {callout.link && (
                      <Link
                        href={callout.link}
                        className="inline-flex items-center gap-2 mt-3 text-sm font-medium transition-all"
                        style={{ color: 'var(--accent)' }}
                      >
                        {callout.linkText || 'Learn more'}
                        <Icon name="ArrowRight" className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

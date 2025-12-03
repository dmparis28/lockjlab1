// Filename: app/components/SideBarMegaMenu.jsx
'use client';

import React from 'react';
import Icon from './Icon';
import Link from 'next/link';

// Grid layout for content items with icons
const GridContent = ({ content, menuType, activeSubMenu }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {content.map((item) => (
      <Link
        key={item.title}
        href={item.href || '#'}
        className="flex items-start gap-4 p-5 rounded-xl hover:bg-white/5 transition-colors group"
      >
        <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20">
          <Icon name={item.icon} className="w-6 h-6 text-sky-400" />
        </div>
        <div>
          <h4 className="text-white font-semibold text-base group-hover:text-sky-400 transition-colors">
            {item.title}
          </h4>
          <p className="text-sm text-gray-400 mt-1.5 leading-relaxed">{item.description}</p>
        </div>
      </Link>
    ))}
  </div>
);

// List layout for content items with images
const ListContent = ({ content, menuType }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
    {content.map((item) => (
      <Link
        key={item.title}
        href={item.href || '#'}
        className="group block rounded-xl overflow-hidden bg-white/5 hover:bg-white/10 transition-colors"
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
        <div className="p-5">
          <h4 className="text-white font-semibold text-base group-hover:text-sky-400 transition-colors line-clamp-1">
            {item.title}
          </h4>
          <p className="text-sm text-gray-400 mt-1.5 line-clamp-2 leading-relaxed">{item.description}</p>
        </div>
      </Link>
    ))}
  </div>
);

// Featured callout card
const FeaturedCallout = ({ callout }) => (
  <div className="mt-8 p-5 rounded-xl bg-gradient-to-br from-sky-600/20 to-blue-800/20 border border-sky-500/30">
    <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
      {callout.tag}
    </span>
    <h4 className="text-white font-semibold text-base mt-2">{callout.title}</h4>
    <p className="text-sm text-gray-400 mt-1.5 leading-relaxed">{callout.description}</p>
    <Link
      href={callout.link}
      className="mt-4 inline-flex items-center text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors group"
    >
      {callout.linkText}
      <Icon name="ArrowRight" className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
    </Link>
  </div>
);

const SidebarMegaMenu = ({ data, activeSubMenu, onSubMenuEnter, menuType }) => {
  const currentContent = data.content?.[activeSubMenu] || [];
  const currentCallout = data.callouts?.[activeSubMenu];

  return (
    <div className="flex flex-col">
      <div className="flex gap-10">
        {/* Left Sidebar */}
        <aside className="w-72 flex-shrink-0">
          <nav className="space-y-1">
            {data.sidebar?.map((item) => {
              const isActive = activeSubMenu === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href || '#'}
                  onMouseEnter={() => onSubMenuEnter(item.id)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl cursor-pointer transition-all relative overflow-hidden ${
                    isActive ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {/* Active indicator line */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-sky-500 transition-all origin-top ${
                    isActive ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-50'
                  }`} />
                  
                  <Icon name={item.icon} className={`w-5 h-5 transition-colors ${isActive ? 'text-sky-400' : ''}`} />
                  <span className="text-base font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Featured Callout if available */}
          {currentCallout && <FeaturedCallout callout={currentCallout} />}
        </aside>

        {/* Right Content Area */}
        <main className="flex-1">
          {currentContent.length === 0 ? (
            <p className="text-gray-500 italic pt-3">No content available for this section.</p>
          ) : (
            <>
              {data.layout === 'grid' && <GridContent content={currentContent} menuType={menuType} activeSubMenu={activeSubMenu} />}
              {data.layout === 'list' && <ListContent content={currentContent} menuType={menuType} />}
            </>
          )}
        </main>
      </div>

      {/* Optional Footer Section */}
      {data.footer && currentContent.length > 0 && (
        <div className="mt-10 pt-6 border-t border-white/10 flex justify-between items-center">
          <p className="text-sm text-gray-500">{data.footer.text}</p>
          <Link href={data.footer.href || '#'} className="text-sm font-semibold text-sky-500 hover:text-sky-400 transition-colors group flex items-center">
            {data.footer.linkText}
            <Icon name="ArrowRight" className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default SidebarMegaMenu;

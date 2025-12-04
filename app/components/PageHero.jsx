// Filename: app/components/PageHero.jsx
'use client';

import Icon from './Icon';
import { useTheme } from '../context/ThemeContext';

export default function PageHero({ 
  tag, 
  title, 
  titleHighlight, 
  description, 
  icon,
  centered = true,
  size = 'md' // sm, md, lg
}) {
  const { activeTheme } = useTheme();
  const isLight = activeTheme === 'cleanBespoke';

  const sizeClasses = {
    sm: 'py-16 md:py-20',
    md: 'py-20 md:py-28',
    lg: 'py-24 md:py-36',
  };

  const titleSizes = {
    sm: 'text-3xl md:text-4xl',
    md: 'text-4xl md:text-5xl',
    lg: 'text-4xl md:text-5xl lg:text-6xl',
  };

  return (
    <section 
      className={`relative ${sizeClasses[size]} overflow-hidden`}
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: isLight 
            ? `radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)`
            : `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Background glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
        style={{ background: `radial-gradient(circle, color-mix(in srgb, var(--gradient-from) 15%, transparent), transparent)` }}
      />
      
      <div className={`container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 ${centered ? 'text-center' : ''}`}>
        {/* Tag */}
        {tag && (
          <div 
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-6 animate-fade-in-up"
            style={{ 
              backgroundColor: 'var(--accent-muted)',
              border: isLight ? 'none' : '1px solid var(--accent)'
            }}
          >
            {icon && <Icon name={icon} className="w-4 h-4" style={{ color: 'var(--accent)' }} />}
            <span className="text-sm font-medium" style={{ color: 'var(--accent)' }}>{tag}</span>
          </div>
        )}

        {/* Title */}
        <h1 
          className={`${titleSizes[size]} font-extrabold leading-tight mb-6 animate-fade-in-up animation-delay-100`}
          style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
        >
          {title}{' '}
          {titleHighlight && (
            <span 
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: `linear-gradient(135deg, var(--gradient-from), var(--gradient-to))` }}
            >
              {titleHighlight}
            </span>
          )}
        </h1>

        {/* Description */}
        {description && (
          <p 
            className={`text-lg md:text-xl animate-fade-in-up animation-delay-200 ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}
            style={{ color: 'var(--text-secondary)' }}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

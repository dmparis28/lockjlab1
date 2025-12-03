// Filename: app/components/PageHero.jsx
import Icon from './Icon';

export default function PageHero({ 
  tag, 
  title, 
  titleHighlight, 
  description, 
  icon,
  centered = true,
  size = 'md' // sm, md, lg
}) {
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
    <section className={`relative bg-[#0B0F19] ${sizeClasses[size]} overflow-hidden`}>
      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/10 rounded-full blur-[120px]" />
      
      <div className={`container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 ${centered ? 'text-center' : ''}`}>
        {/* Tag */}
        {tag && (
          <div className={`inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-2 mb-6 animate-fade-in-up ${centered ? '' : ''}`}>
            {icon && <Icon name={icon} className="w-4 h-4 text-sky-400" />}
            <span className="text-sky-400 text-sm font-medium">{tag}</span>
          </div>
        )}

        {/* Title */}
        <h1 className={`${titleSizes[size]} font-extrabold text-white leading-tight mb-6 animate-fade-in-up animation-delay-100`}>
          {title}{' '}
          {titleHighlight && (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
              {titleHighlight}
            </span>
          )}
        </h1>

        {/* Description */}
        {description && (
          <p className={`text-lg md:text-xl text-gray-400 animate-fade-in-up animation-delay-200 ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

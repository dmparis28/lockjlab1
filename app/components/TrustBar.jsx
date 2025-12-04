// Filename: app/components/TrustBar.jsx
'use client';
import Icon from './Icon';
import AnimateOnScroll from './AnimateOnScroll';
import { useTheme } from '../context/ThemeContext';

const stats = [
  { value: '50+', label: 'Products Launched' },
  { value: '$100M+', label: 'Client Revenue Generated' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '10M+', label: 'Users Supported' },
];

const clientLogos = [
  { name: 'Coinflow', initial: 'C', gradient: 'from-blue-500 to-purple-600' },
  { name: 'MediBook', initial: 'M', gradient: 'from-blue-400 to-blue-600' },
  { name: 'IDS Staffing', initial: 'IDS', gradient: 'from-red-500 to-red-700' },
  { name: 'IDS Express', initial: 'E', gradient: 'from-cyan-400 to-cyan-600' },
];

export default function TrustBar() {
  const { activeTheme } = useTheme();
  const isLight = activeTheme === 'cleanBespoke';

  return (
    <section 
      className="py-12 md:py-16"
      style={{ 
        backgroundColor: isLight ? 'var(--bg-secondary)' : 'var(--bg-primary)', 
        borderTop: '1px solid var(--border)', 
        borderBottom: '1px solid var(--border)' 
      }}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-10">
          {stats.map((stat, index) => (
            <AnimateOnScroll key={stat.label} animation="fadeUp" delay={index * 0.1}>
              <div className="text-center">
                <div 
                  className="text-2xl md:text-3xl font-bold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Client Logos */}
        <AnimateOnScroll animation="fade" delay={0.4}>
          <div className="text-center">
            <p className="text-sm uppercase tracking-wider mb-6" style={{ color: 'var(--text-muted)' }}>
              Trusted by innovative companies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {clientLogos.map((client, index) => (
                <div 
                  key={client.name} 
                  className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${client.gradient} flex items-center justify-center`}>
                    <span className="text-white font-bold text-xs">{client.initial}</span>
                  </div>
                  <span className="font-medium" style={{ color: 'var(--text-secondary)' }}>{client.name}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

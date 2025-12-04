// Filename: app/components/ServicesOverview.jsx
import Link from 'next/link';
import Icon from './Icon';

const services = [
  {
    title: 'Product Strategy',
    description: 'We define clear visions, analyze markets, and create roadmaps that align business goals with user needs.',
    icon: 'Rocket',
    color: 'from-purple-600/20 to-purple-800/10',
    accent: 'text-purple-400',
    border: 'border-purple-500/30',
    href: '/services/strategy',
  },
  {
    title: 'UI/UX Design',
    description: 'Our design team crafts intuitive, engaging interfaces that drive user satisfaction and business results.',
    icon: 'Palette',
    color: 'from-sky-600/20 to-sky-800/10',
    accent: 'text-[var(--accent)]',
    border: 'border-sky-500/30',
    href: '/services/design',
  },
  {
    title: 'Software Development',
    description: 'We build robust, scalable applications using modern technology stacks that grow with your business.',
    icon: 'Code',
    color: 'from-teal-600/20 to-teal-800/10',
    accent: 'text-teal-400',
    border: 'border-teal-500/30',
    href: '/services/development',
  },
];

export default function ServicesOverview() {
  return (
    <section className="bg-[var(--bg-primary)] py-20 md:py-32 relative overflow-hidden">
      {/* Background glow - optimized gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-sky-500/10 to-transparent" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">What We Do</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mt-4 mb-6">
            End-to-End Product Services
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            From initial concept to market launch, we provide the expertise you need at every stage of the product lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className={`group block h-full p-8 rounded-2xl bg-gradient-to-br ${service.color} border ${service.border} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex p-4 rounded-xl bg-black/20 border ${service.border} mb-6`}>
                <Icon name={service.icon} className={`w-8 h-8 ${service.accent}`} />
              </div>
              
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4 group-hover:text-[var(--accent)] transition-all">
                {service.title}
              </h3>
              
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className={`flex items-center ${service.accent} font-medium`}>
                <span>Learn More</span>
                <Icon name="ArrowRight" className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center text-[var(--accent)] hover:text-sky-300 font-medium transition-all group"
          >
            View All Services
            <Icon name="ArrowRight" className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Filename: app/services/page.jsx
import Link from 'next/link';
import PageHero from '../components/PageHero';
import Icon from '../components/Icon';

export const metadata = {
  title: 'Our Services | Lock J Lab',
  description: 'Explore Lock J Lab\'s full range of digital product services - from strategy and design to development and launch.',
};

const services = [
  {
    id: 'strategy',
    name: 'Product Strategy',
    icon: 'Rocket',
    description: 'We define a clear product vision, analyze the market, and create a roadmap that aligns business goals with user needs.',
    color: 'from-purple-600/20 to-purple-800/10',
    accent: 'text-purple-400',
    border: 'border-purple-500/30',
    href: '/services/strategy',
    features: [
      'Product Launch Strategy',
      'Competitor Analysis',
      'Product Ideation & Roadmapping',
      'User Experience Research',
    ],
  },
  {
    id: 'design',
    name: 'UI/UX Design',
    icon: 'Palette',
    description: 'Our design team crafts intuitive, engaging, and aesthetically pleasing interfaces that users love.',
    color: 'from-sky-600/20 to-sky-800/10',
    accent: 'text-sky-400',
    border: 'border-sky-500/30',
    href: '/services/design',
    features: [
      'UI/UX Design',
      'Interactive Prototyping',
      'Brand & Visual Identity',
      'Design Systems',
    ],
  },
  {
    id: 'development',
    name: 'Software Development',
    icon: 'Code',
    description: 'We build robust, scalable, and maintainable applications using modern technology stacks.',
    color: 'from-teal-600/20 to-teal-800/10',
    accent: 'text-teal-400',
    border: 'border-teal-500/30',
    href: '/services/development',
    features: [
      'Web Application Development',
      'Mobile App Development',
      'API & Backend Development',
      'Cloud Infrastructure',
    ],
  },
];

const industries = [
  { name: 'Startups', icon: 'Rocket', description: 'MVP development, pitch decks, and growth engineering.' },
  { name: 'Enterprise', icon: 'Building2', description: 'Digital transformation and custom software solutions.' },
  { name: 'Healthcare', icon: 'Heart', description: 'HIPAA-compliant apps and patient engagement platforms.' },
  { name: 'Fintech', icon: 'DollarSign', description: 'Secure payment systems and financial dashboards.' },
  { name: 'E-commerce', icon: 'ShoppingCart', description: 'Scalable storefronts and inventory management.' },
  { name: 'Nonprofits', icon: 'Users', description: 'Accessible design and donation platforms.' },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#0B0F19] min-h-screen">
      <PageHero
        tag="What We Do"
        icon="Layers"
        title="End-to-End Digital"
        titleHighlight="Product Services"
        description="From initial concept to scalable deployment, we provide the expertise needed at every stage of the product lifecycle."
        size="lg"
      />

      {/* Main Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className={`group p-8 rounded-2xl border backdrop-blur-sm bg-gradient-to-br ${service.color} ${service.border} shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-xl bg-black/20 border ${service.border}`}>
                    <Icon name={service.icon} className={`w-8 h-8 ${service.accent}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white ml-5">{service.name}</h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-400">
                      <Icon name="CheckCircle" className={`w-5 h-5 mr-3 ${service.accent}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className={`font-semibold ${service.accent} flex items-center group-hover:gap-2 transition-all`}>
                  Learn More
                  <Icon name="ArrowRight" className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We bring deep expertise across diverse sectors, tailoring our approach to your unique industry challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-sky-500/30 transition-colors group"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-sky-500/10 border border-sky-500/20">
                    <Icon name={industry.icon} className="w-6 h-6 text-sky-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white ml-4">{industry.name}</h3>
                </div>
                <p className="text-gray-400">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            {"Let's discuss how we can help bring your vision to life with our comprehensive suite of services."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 flex items-center shadow-lg hover:shadow-xl hover:shadow-sky-500/30 group border border-sky-500/50"
            >
              Book a Consultation
              <Icon name="ArrowRight" className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/process"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg border border-white/20 transition duration-300"
            >
              View Our Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

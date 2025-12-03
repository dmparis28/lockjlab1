// Filename: app/services/strategy/page.jsx
import Link from 'next/link';
import PageHero from '../../components/PageHero';
import Icon from '../../components/Icon';

export const metadata = {
  title: 'Product Strategy Services | Lock J Lab',
  description: 'Strategic product consulting to define your vision, analyze markets, and create actionable roadmaps for success.',
};

const offerings = [
  {
    icon: 'Compass',
    title: 'Product Launch Strategy',
    description: 'We help you launch at the intersection of business goals and user needs. Our launch strategies are data-driven and designed to maximize market impact.',
    features: ['Go-to-market planning', 'Launch timeline development', 'Success metrics definition', 'Risk assessment'],
  },
  {
    icon: 'Target',
    title: 'Competitor Analysis',
    description: 'Boost your market positioning by understanding the competitive landscape. We identify opportunities and threats to inform your product decisions.',
    features: ['Market landscape mapping', 'Feature comparison matrices', 'Pricing analysis', 'Differentiation strategy'],
  },
  {
    icon: 'Lightbulb',
    title: 'Product Ideation & Roadmapping',
    description: 'Turn raw ideas into a prioritized, actionable plan. We facilitate ideation sessions and create roadmaps that balance vision with feasibility.',
    features: ['Ideation workshops', 'Feature prioritization', 'Quarterly roadmaps', 'Stakeholder alignment'],
  },
  {
    icon: 'Users',
    title: 'User Experience Research',
    description: 'Ground your product decisions in real user insights. Our research methods uncover user needs, pain points, and opportunities.',
    features: ['User interviews', 'Survey design & analysis', 'Usability testing', 'Persona development'],
  },
];

const process = [
  { step: '01', title: 'Discovery', description: 'We immerse ourselves in your business, market, and users to understand the full context.' },
  { step: '02', title: 'Analysis', description: 'We synthesize research into actionable insights and identify key opportunities.' },
  { step: '03', title: 'Strategy', description: 'We develop a comprehensive strategy with clear goals, priorities, and success metrics.' },
  { step: '04', title: 'Roadmap', description: 'We create a detailed roadmap that translates strategy into executable phases.' },
];

export default function StrategyPage() {
  return (
    <div className="bg-[#0B0F19] min-h-screen">
      <PageHero
        tag="Product Strategy"
        icon="Rocket"
        title="Strategic Vision,"
        titleHighlight="Actionable Roadmaps"
        description="We define clear product visions, analyze markets, and create roadmaps that align business goals with user needs."
        size="lg"
      />

      {/* Offerings Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {offerings.map((offering) => (
              <div
                key={offering.title}
                className="p-8 rounded-2xl bg-[#111827] border border-white/10 hover:border-purple-500/30 transition-colors"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                    <Icon name={offering.icon} className="w-7 h-7 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white ml-4">{offering.title}</h3>
                </div>
                <p className="text-gray-400 mb-6">{offering.description}</p>
                <ul className="grid grid-cols-2 gap-3">
                  {offering.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-300">
                      <Icon name="CheckCircle" className="w-4 h-4 mr-2 text-purple-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Strategy Process</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A proven framework for developing product strategies that drive results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-bold text-purple-500/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-full h-0.5 bg-gradient-to-r from-purple-500/30 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Define Your Product Strategy?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            {"Let's work together to create a roadmap that drives your product to success."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 flex items-center shadow-lg hover:shadow-xl hover:shadow-purple-500/30 group border border-purple-500/50"
            >
              Start Your Strategy
              <Icon name="ArrowRight" className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg border border-white/20 transition duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

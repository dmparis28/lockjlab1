// Filename: app/services/design/page.jsx
import Link from 'next/link';
import PageHero from '../../components/PageHero';
import Icon from '../../components/Icon';

export const metadata = {
  title: 'UI/UX Design Services | Lock J Lab',
  description: 'Beautiful and functional interfaces crafted by expert designers. From prototypes to design systems.',
};

const offerings = [
  {
    icon: 'Palette',
    title: 'UI/UX Design',
    description: 'We create beautiful, intuitive interfaces that delight users and drive engagement. Our designs balance aesthetics with usability.',
    features: ['Mobile app design', 'Web application design', 'Dashboard design', 'Responsive layouts'],
  },
  {
    icon: 'Layers',
    title: 'Interactive Prototyping',
    description: 'Validate ideas before development with clickable, high-fidelity prototypes. Test with real users and iterate quickly.',
    features: ['Clickable prototypes', 'User flow mapping', 'Interaction design', 'Animation specs'],
  },
  {
    icon: 'Star',
    title: 'Brand & Visual Identity',
    description: 'Create a memorable brand that resonates with your audience. From logos to complete visual systems.',
    features: ['Logo design', 'Color palettes', 'Typography systems', 'Brand guidelines'],
  },
  {
    icon: 'Settings',
    title: 'Design Systems',
    description: 'Scalable, consistent design languages that grow with your product. Ensure coherence across all touchpoints.',
    features: ['Component libraries', 'Style guides', 'Documentation', 'Design tokens'],
  },
];

const tools = [
  'Figma', 'Sketch', 'Adobe XD', 'Principle', 'Framer', 'InVision', 'Zeplin', 'Abstract'
];

export default function DesignPage() {
  return (
    <div className="bg-[#0B0F19] min-h-screen">
      <PageHero
        tag="UI/UX Design"
        icon="Palette"
        title="Interfaces That"
        titleHighlight="Inspire & Convert"
        description="Our design team crafts intuitive, engaging experiences that users love and businesses rely on."
        size="lg"
      />

      {/* Offerings Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {offerings.map((offering) => (
              <div
                key={offering.title}
                className="p-8 rounded-2xl bg-[#111827] border border-white/10 hover:border-sky-500/30 transition-colors"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20">
                    <Icon name={offering.icon} className="w-7 h-7 text-sky-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white ml-4">{offering.title}</h3>
                </div>
                <p className="text-gray-400 mb-6">{offering.description}</p>
                <ul className="grid grid-cols-2 gap-3">
                  {offering.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-300">
                      <Icon name="CheckCircle" className="w-4 h-4 mr-2 text-sky-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Design Philosophy</h2>
              <p className="text-gray-400 text-lg mb-8">
                {"Great design isn't just about aesthetics—it's about solving real problems for real people. We believe in design that is:"}
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/20 mr-4 mt-1">
                    <Icon name="Users" className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">User-Centered</h3>
                    <p className="text-gray-400">Every decision is grounded in user research and validated through testing.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/20 mr-4 mt-1">
                    <Icon name="Repeat" className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Iterative</h3>
                    <p className="text-gray-400">We refine continuously, using feedback loops to perfect every detail.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/20 mr-4 mt-1">
                    <Icon name="Zap" className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Impactful</h3>
                    <p className="text-gray-400">Design that drives measurable business outcomes and user satisfaction.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#111827] rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-6">Tools We Use</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span key={tool} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Elevate Your Product Design?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            {"Let's create interfaces that your users will love."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 flex items-center shadow-lg hover:shadow-xl hover:shadow-sky-500/30 group border border-sky-500/50"
            >
              Start Your Design Project
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

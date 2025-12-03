// Filename: app/pricing/page.jsx
import Link from 'next/link';
import PageHero from '../components/PageHero';
import Icon from '../components/Icon';

export const metadata = {
  title: 'Pricing & Engagement Models | Lock J Lab',
  description: 'Flexible pricing and engagement models tailored to your project needs. From fixed-price projects to dedicated teams.',
};

const engagementModels = [
  {
    name: 'Fixed Price',
    description: 'Best for well-defined projects with clear scope and deliverables.',
    icon: 'Target',
    color: 'from-purple-600/20 to-purple-800/10',
    accent: 'text-purple-400',
    border: 'border-purple-500/30',
    features: [
      'Defined scope and timeline',
      'Predictable budget',
      'Milestone-based payments',
      'Ideal for MVPs and launches',
    ],
    bestFor: 'MVPs, redesigns, specific features',
  },
  {
    name: 'Time & Materials',
    description: 'Best for evolving projects that require flexibility and iteration.',
    icon: 'Clock',
    color: 'from-sky-600/20 to-sky-800/10',
    accent: 'text-sky-400',
    border: 'border-sky-500/30',
    popular: true,
    features: [
      'Flexible scope',
      'Pay for actual work done',
      'Weekly or bi-weekly billing',
      'Adapt as you learn',
    ],
    bestFor: 'Ongoing development, complex projects',
  },
  {
    name: 'Dedicated Team',
    description: 'Best for long-term partnerships requiring a committed team.',
    icon: 'Users',
    color: 'from-teal-600/20 to-teal-800/10',
    accent: 'text-teal-400',
    border: 'border-teal-500/30',
    features: [
      'Full-time dedicated resources',
      'Deep product knowledge',
      'Monthly retainer',
      'Scalable team size',
    ],
    bestFor: 'Product companies, enterprises',
  },
];

const projectTypes = [
  {
    name: 'MVP Development',
    timeline: '3-6 months',
    startingAt: '$50,000',
    includes: ['Product strategy', 'UI/UX design', 'Development', 'Launch support'],
  },
  {
    name: 'Product Redesign',
    timeline: '2-4 months',
    startingAt: '$35,000',
    includes: ['UX audit', 'New design system', 'Implementation', 'User testing'],
  },
  {
    name: 'Mobile App',
    timeline: '4-8 months',
    startingAt: '$75,000',
    includes: ['iOS & Android', 'Backend API', 'App store launch', 'Analytics setup'],
  },
  {
    name: 'Enterprise Solution',
    timeline: '6-12 months',
    startingAt: '$150,000',
    includes: ['Custom architecture', 'Integrations', 'Security audit', 'Training'],
  },
];

const faqs = [
  {
    question: 'How do you determine project pricing?',
    answer: 'We assess project complexity, timeline, team requirements, and technical challenges. After a discovery session, we provide a detailed proposal with transparent pricing.',
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes, we typically structure payments around project milestones. For larger projects, we can discuss monthly payment arrangements.',
  },
  {
    question: 'What if the project scope changes?',
    answer: 'We use a change request process to evaluate scope changes. For Time & Materials engagements, changes are naturally accommodated. For Fixed Price, we provide updated estimates.',
  },
  {
    question: 'Do you offer maintenance after launch?',
    answer: 'Yes, we offer various post-launch support packages ranging from basic monitoring to full managed services. These are typically structured as monthly retainers.',
  },
];

export default function PricingPage() {
  return (
    <div className="bg-[#0B0F19] min-h-screen">
      <PageHero
        tag="Pricing"
        icon="DollarSign"
        title="Transparent Pricing,"
        titleHighlight="Flexible Engagement"
        description="We offer multiple engagement models to fit your project needs, timeline, and budget. No hidden fees, no surprises."
        size="lg"
      />

      {/* Engagement Models */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {engagementModels.map((model) => (
              <div
                key={model.name}
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${model.color} border ${model.border} ${model.popular ? 'ring-2 ring-sky-500' : ''}`}
              >
                {model.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-sky-500 text-white text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-black/20 border ${model.border}`}>
                    <Icon name={model.icon} className={`w-7 h-7 ${model.accent}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white ml-4">{model.name}</h3>
                </div>
                <p className="text-gray-400 mb-6">{model.description}</p>
                <ul className="space-y-3 mb-6">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <Icon name="CheckCircle" className={`w-5 h-5 mr-3 ${model.accent}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-400">
                    <span className="font-medium text-white">Best for:</span> {model.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Typical Project Investment
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Every project is unique, but here are typical ranges based on our experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectTypes.map((project) => (
              <div
                key={project.name}
                className="p-6 rounded-xl bg-[#111827] border border-white/10 hover:border-sky-500/30 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-sky-400">{project.startingAt}</span>
                  <span className="text-gray-400 text-sm block">starting at</span>
                </div>
                <div className="text-sm text-gray-400 mb-4">
                  Timeline: {project.timeline}
                </div>
                <ul className="space-y-2">
                  {project.includes.map((item) => (
                    <li key={item} className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8 text-sm">
            * Prices are estimates and vary based on specific requirements. Contact us for a custom quote.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Pricing FAQs</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-6 rounded-xl bg-[#111827] border border-white/10"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get a Custom Quote
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            {"Every project is unique. Let's discuss your specific needs and create a tailored proposal."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 flex items-center shadow-lg hover:shadow-xl hover:shadow-sky-500/30 group border border-sky-500/50"
            >
              Request a Quote
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

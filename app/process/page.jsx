// Filename: app/process/page.jsx
import PageHero from '../components/PageHero';
import Icon from '../components/Icon';
import Link from 'next/link';

export const metadata = {
  title: 'Our Process | Lock J Lab',
  description: 'Discover how Lock J Lab transforms ideas into successful digital products through our proven process.',
};

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We start by deeply understanding your business, users, and goals. Through workshops, research, and analysis, we define a clear product vision and roadmap.',
    icon: 'Compass',
    color: 'from-purple-600/20 to-purple-800/10',
    accent: 'text-purple-400',
    border: 'border-purple-500/30',
    deliverables: ['Stakeholder Interviews', 'User Research', 'Competitive Analysis', 'Product Roadmap'],
  },
  {
    number: '02',
    title: 'Design & Prototype',
    description: 'Our design team creates intuitive, beautiful interfaces. We iterate through wireframes, mockups, and interactive prototypes to validate ideas before development.',
    icon: 'Palette',
    color: 'from-sky-600/20 to-sky-800/10',
    accent: 'text-sky-400',
    border: 'border-sky-500/30',
    deliverables: ['Wireframes', 'UI/UX Design', 'Interactive Prototypes', 'Design System'],
  },
  {
    number: '03',
    title: 'Development & Testing',
    description: 'We build robust, scalable applications using modern technologies. Agile sprints, code reviews, and continuous testing ensure quality at every step.',
    icon: 'Code',
    color: 'from-teal-600/20 to-teal-800/10',
    accent: 'text-teal-400',
    border: 'border-teal-500/30',
    deliverables: ['Frontend Development', 'Backend & APIs', 'QA Testing', 'Performance Optimization'],
  },
  {
    number: '04',
    title: 'Launch & Scale',
    description: 'We deploy your product and monitor its performance. Post-launch support ensures smooth operations while we help you scale and iterate based on real user data.',
    icon: 'Rocket',
    color: 'from-orange-600/20 to-orange-800/10',
    accent: 'text-orange-400',
    border: 'border-orange-500/30',
    deliverables: ['Deployment', 'Analytics Setup', 'Performance Monitoring', 'Ongoing Support'],
  },
];

const principles = [
  {
    icon: 'Users',
    title: 'User-Centered',
    description: 'Every decision is grounded in real user needs and validated through research.',
  },
  {
    icon: 'Repeat',
    title: 'Iterative',
    description: 'We build, test, learn, and improve in continuous cycles.',
  },
  {
    icon: 'MessageSquare',
    title: 'Collaborative',
    description: 'You\'re a partner, not just a client. We work together at every stage.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Transparent',
    description: 'Clear communication, honest timelines, and no surprises.',
  },
];

export default function ProcessPage() {
  return (
    <div className="bg-[#0B0F19] min-h-screen">
      <PageHero
        tag="How We Work"
        icon="Repeat"
        title="A Proven Process for"
        titleHighlight="Digital Success"
        description="From initial concept to market launch, our structured approach ensures your product is built right — on time and on budget."
        size="lg"
      />

      {/* Process Steps */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div 
                key={step.number}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`text-6xl font-bold ${step.accent} opacity-30`}>{step.number}</span>
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${step.color} border ${step.border}`}>
                      <Icon name={step.icon} className={`w-6 h-6 ${step.accent}`} />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400 text-lg mb-6">{step.description}</p>
                  
                  {/* Deliverables */}
                  <div className="flex flex-wrap gap-2">
                    {step.deliverables.map((item) => (
                      <span 
                        key={item}
                        className={`px-3 py-1 rounded-full text-sm bg-white/5 border ${step.border} ${step.accent}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className={`aspect-video rounded-2xl bg-gradient-to-br ${step.color} border ${step.border} flex items-center justify-center`}>
                    <Icon name={step.icon} className={`w-24 h-24 ${step.accent} opacity-50`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Guiding Principles</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The values that drive every project we take on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle) => (
              <div 
                key={principle.title}
                className="p-6 rounded-xl bg-[#111827] border border-white/10 hover:border-sky-500/30 transition-colors"
              >
                <div className="p-3 rounded-lg bg-sky-500/10 border border-sky-500/20 w-fit mb-4">
                  <Icon name={principle.icon} className="w-6 h-6 text-sky-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{principle.title}</h3>
                <p className="text-gray-400">{principle.description}</p>
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
            Let's discuss how our process can help bring your vision to life.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl hover:shadow-sky-500/30 group border border-sky-500/50"
          >
            Book a Consultation
            <Icon name="ArrowRight" className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}

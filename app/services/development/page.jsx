// Filename: app/services/development/page.jsx
import Link from 'next/link';
import PageHero from '../../components/PageHero';
import Icon from '../../components/Icon';

export const metadata = {
  title: 'Software Development Services | Lock J Lab',
  description: 'Robust, scalable applications built with modern technology stacks. From MVPs to enterprise systems.',
};

const offerings = [
  {
    icon: 'Monitor',
    title: 'Web Application Development',
    description: 'Robust, scalable web apps using modern frameworks. We build everything from simple marketing sites to complex SaaS platforms.',
    features: ['React & Next.js', 'Vue.js applications', 'Progressive Web Apps', 'Custom CMS solutions'],
  },
  {
    icon: 'Smartphone',
    title: 'Mobile App Development',
    description: 'Native and cross-platform apps for iOS and Android. Optimized for performance and user experience.',
    features: ['React Native', 'Swift & SwiftUI', 'Kotlin', 'Flutter'],
  },
  {
    icon: 'Database',
    title: 'API & Backend Development',
    description: 'Secure, efficient, and scalable backend systems. RESTful APIs, GraphQL, and microservices architecture.',
    features: ['Node.js & Express', 'Python & Django', 'GraphQL APIs', 'Microservices'],
  },
  {
    icon: 'Cloud',
    title: 'Cloud Infrastructure',
    description: 'Deploy and scale on AWS, GCP, or Azure. We design infrastructure that grows with your business.',
    features: ['AWS architecture', 'Kubernetes', 'CI/CD pipelines', 'DevOps automation'],
  },
];

const techStack = {
  frontend: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
  backend: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB'],
  mobile: ['React Native', 'Swift', 'Kotlin', 'Flutter'],
  cloud: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes'],
};

export default function DevelopmentPage() {
  return (
    <div className="bg-[#0B0F19] min-h-screen">
      <PageHero
        tag="Software Development"
        icon="Code"
        title="Engineering Excellence,"
        titleHighlight="Scalable Solutions"
        description="We build robust, maintainable applications using modern technology stacks that scale with your business."
        size="lg"
      />

      {/* Offerings Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {offerings.map((offering) => (
              <div
                key={offering.title}
                className="p-8 rounded-2xl bg-[#111827] border border-white/10 hover:border-teal-500/30 transition-colors"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20">
                    <Icon name={offering.icon} className="w-7 h-7 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white ml-4">{offering.title}</h3>
                </div>
                <p className="text-gray-400 mb-6">{offering.description}</p>
                <ul className="grid grid-cols-2 gap-3">
                  {offering.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-300">
                      <Icon name="CheckCircle" className="w-4 h-4 mr-2 text-teal-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Technology Stack</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We choose the right tools for each project, staying current with industry best practices.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(techStack).map(([category, technologies]) => (
              <div key={category} className="bg-[#111827] rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4 capitalize">{category}</h3>
                <div className="space-y-2">
                  {technologies.map((tech) => (
                    <div key={tech} className="flex items-center text-gray-400">
                      <div className="w-2 h-2 rounded-full bg-teal-400 mr-3" />
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Practices */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-gradient-to-br from-teal-600/10 to-transparent border border-teal-500/20">
              <Icon name="ShieldCheck" className="w-10 h-10 text-teal-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Security First</h3>
              <p className="text-gray-400">
                Security is built into every layer of our applications. We follow OWASP guidelines and conduct regular security audits.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-gradient-to-br from-teal-600/10 to-transparent border border-teal-500/20">
              <Icon name="Gauge" className="w-10 h-10 text-teal-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Performance Optimized</h3>
              <p className="text-gray-400">
                We optimize for speed and efficiency. Our applications are built to handle scale while maintaining fast load times.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-gradient-to-br from-teal-600/10 to-transparent border border-teal-500/20">
              <Icon name="Code" className="w-10 h-10 text-teal-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Clean Code</h3>
              <p className="text-gray-400">
                Maintainable, well-documented code that your team can work with. We follow industry standards and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Something Great?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            {"Let's discuss your project and find the right technology solution for your needs."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 flex items-center shadow-lg hover:shadow-xl hover:shadow-teal-500/30 group border border-teal-500/50"
            >
              Start Your Project
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

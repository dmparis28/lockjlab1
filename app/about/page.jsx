// Filename: app/about/page.jsx
import PageHero from '../components/PageHero';
import Icon from '../components/Icon';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | Lock J Lab',
  description: 'Learn about Lock J Lab - a digital product agency helping startups and enterprises build impactful products.',
};

const stats = [
  { value: '10+', label: 'Years in Business' },
  { value: '200+', label: 'Projects Delivered' },
  { value: '50+', label: 'Team Members' },
  { value: '98%', label: 'Client Satisfaction' },
];

const values = [
  {
    icon: 'Target',
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards in everything we create.',
  },
  {
    icon: 'Users',
    title: 'Collaboration',
    description: 'We believe the best work happens when we partner closely with our clients.',
  },
  {
    icon: 'Lightbulb',
    title: 'Innovation',
    description: 'We stay ahead of the curve, embracing new technologies and approaches.',
  },
  {
    icon: 'Heart',
    title: 'Impact',
    description: 'We measure success by the real-world difference our products make.',
  },
];

const locations = [
  {
    city: 'New York',
    role: 'Headquarters',
    address: '123 Tech Avenue, NY 10001',
    icon: 'Building2',
  },
  {
    city: 'San Francisco',
    role: 'West Coast Office',
    address: '456 Innovation Drive, CA 94105',
    icon: 'MapPin',
  },
  {
    city: 'London',
    role: 'European Office',
    address: '789 Digital Lane, EC1A 1BB',
    icon: 'Globe',
  },
];

const faqs = [
  {
    question: 'How long does it take to build an MVP?',
    answer: 'Typically, an MVP takes 3-6 months depending on complexity and scope. We work with you to define the minimum feature set that validates your concept while delivering real value to users.',
  },
  {
    question: 'What is your typical team structure?',
    answer: 'We assign a dedicated team including a Project Manager, UX/UI Designer, Tech Lead, and 2-4 Developers. Team size scales based on project needs.',
  },
  {
    question: 'Do you offer post-launch support?',
    answer: 'Yes, we offer various support and maintenance packages ranging from basic bug fixes to full-service ongoing development and optimization.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'We specialize in modern tech stacks including React, Next.js, Node.js, Python, Swift, Kotlin, and cloud platforms like AWS and GCP.',
  },
  {
    question: 'How do you handle project communication?',
    answer: 'We use a combination of Slack for daily communication, weekly video calls for sprint reviews, and project management tools like Jira or Linear for transparency.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#0B0F19] min-h-screen">
      <PageHero
        tag="About Lock J Lab"
        icon="Building2"
        title="Building Digital Products"
        titleHighlight="That Matter"
        description="For over a decade, we've partnered with startups, nonprofits, and enterprises to create products that drive real results."
        size="lg"
      />

      {/* Stats Section */}
      <section className="py-16 border-b border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-400 text-lg">
                <p>
                  Lock J Lab was founded with a simple mission: help ambitious teams build products that make a difference. What started as a small design studio has grown into a full-service digital product agency.
                </p>
                <p>
                  Today, we bring together strategists, designers, and engineers who share a passion for solving complex problems. We've helped launch over 200 products, from early-stage MVPs to enterprise platforms serving millions.
                </p>
                <p>
                  Our approach combines deep technical expertise with a relentless focus on user experience. We don't just build software — we create products that people love to use.
                </p>
              </div>
            </div>
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-sky-600/20 to-blue-800/10 border border-sky-500/30 flex items-center justify-center">
              <Icon name="Building2" className="w-32 h-32 text-sky-400 opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div 
                key={value.title}
                className="p-6 rounded-xl bg-[#111827] border border-white/10 hover:border-sky-500/30 transition-colors text-center"
              >
                <div className="p-4 rounded-lg bg-sky-500/10 border border-sky-500/20 w-fit mx-auto mb-4">
                  <Icon name={value.icon} className="w-8 h-8 text-sky-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Locations</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              With offices across the globe, we're ready to partner with you wherever you are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location) => (
              <div 
                key={location.city}
                className="p-6 rounded-xl bg-[#111827] border border-white/10 hover:border-sky-500/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/20">
                    <Icon name={location.icon} className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{location.city}</h3>
                    <p className="text-sm text-sky-400">{location.role}</p>
                  </div>
                </div>
                <p className="text-gray-400">{location.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 text-lg">
              Have questions? We've got answers.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div 
                key={faq.question}
                className="p-6 rounded-xl bg-[#111827] border border-white/10"
              >
                <h3 className="text-lg font-semibold text-white mb-3 flex items-start gap-3">
                  <Icon name="HelpCircle" className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-gray-400 pl-8">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Still have questions?</p>
            <Link 
              href="/contact"
              className="inline-flex items-center text-sky-400 hover:text-sky-300 font-semibold transition-colors group"
            >
              Talk to our team
              <Icon name="ArrowRight" className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Filename: app/services/strategy/page.jsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import PageHero from '../../components/PageHero';
import Icon from '../../components/Icon';

export default function StrategyPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const offerings = [
    {
      icon: 'Compass',
      title: 'Product Discovery & Vision',
      description: 'We help you define what to build and why. Through workshops and research, we uncover your true product-market fit.',
      deliverables: ['Product vision document', 'User persona profiles', 'Problem-solution fit analysis', 'Success metrics framework'],
      timeline: '1-2 weeks',
    },
    {
      icon: 'Target',
      title: 'Market & Competitor Analysis',
      description: 'Understand your competitive landscape deeply. We analyze what works, what doesn\'t, and where your opportunity lies.',
      deliverables: ['Competitive landscape report', 'Feature comparison matrix', 'Market opportunity assessment', 'Differentiation strategy'],
      timeline: '1-2 weeks',
    },
    {
      icon: 'Lightbulb',
      title: 'Product Roadmapping',
      description: 'Turn vision into an actionable plan. We prioritize features, define milestones, and create a realistic timeline.',
      deliverables: ['Prioritized feature backlog', 'Quarterly roadmap', 'MVP definition', 'Resource & budget estimates'],
      timeline: '1-2 weeks',
    },
    {
      icon: 'Users',
      title: 'User Research & Validation',
      description: 'Ground your decisions in real user insights. We conduct research that reveals what your users actually need.',
      deliverables: ['User interview findings', 'Usability test reports', 'Customer journey maps', 'Actionable recommendations'],
      timeline: '2-3 weeks',
    },
  ];

  const packages = [
    {
      name: 'Discovery Sprint',
      description: 'Perfect for validating a new idea or pivoting an existing product.',
      price: '$5,000 - $10,000',
      duration: '2 weeks',
      includes: [
        'Stakeholder interviews',
        'Market research',
        'User persona development',
        'Problem validation',
        'High-level roadmap',
        '1 strategy presentation',
      ],
      ideal: 'Early-stage startups, new product ideas',
      popular: false,
    },
    {
      name: 'Full Strategy Package',
      description: 'Comprehensive strategy work for products ready to scale or launch.',
      price: '$15,000 - $25,000',
      duration: '4-6 weeks',
      includes: [
        'Everything in Discovery Sprint',
        'Deep competitor analysis',
        'User research (10+ interviews)',
        'Detailed product roadmap',
        'Technical feasibility assessment',
        'Go-to-market strategy',
        'Stakeholder alignment sessions',
        '30 days of follow-up support',
      ],
      ideal: 'Funded startups, enterprise innovation teams',
      popular: true,
    },
    {
      name: 'Ongoing Advisory',
      description: 'Continuous strategic guidance as your product evolves.',
      price: '$3,000 - $5,000/mo',
      duration: 'Monthly retainer',
      includes: [
        'Weekly strategy calls',
        'Roadmap refinement',
        'Market monitoring',
        'User feedback analysis',
        'Quarterly business reviews',
        'On-demand consultations',
      ],
      ideal: 'Growing companies, product teams',
      popular: false,
    },
  ];

  const process = [
    { 
      step: '01', 
      title: 'Kickoff Call', 
      description: 'We start with a free 30-minute call to understand your goals, challenges, and timeline.',
      duration: '30 min',
    },
    { 
      step: '02', 
      title: 'Discovery Deep-Dive', 
      description: 'Stakeholder interviews, market research, and user analysis to build a complete picture.',
      duration: '3-5 days',
    },
    { 
      step: '03', 
      title: 'Strategy Workshop', 
      description: 'Collaborative session to align on vision, prioritize opportunities, and define success.',
      duration: '2-4 hours',
    },
    { 
      step: '04', 
      title: 'Deliverables & Roadmap', 
      description: 'We present actionable strategy documents and a clear roadmap for next steps.',
      duration: '2-3 days',
    },
  ];

  const faqs = [
    {
      question: 'Do I need strategy work before design and development?',
      answer: 'Not always, but it significantly reduces risk. Strategy work helps validate your idea, prioritize the right features, and avoid costly pivots later. If you\'re confident in your direction, you can skip directly to design. We\'ll help you assess during our initial call.',
    },
    {
      question: 'What if I already have a product and need to pivot?',
      answer: 'Strategy work is especially valuable for pivots. We\'ll analyze what\'s working, what\'s not, and identify the clearest path forward. Many of our clients come to us after launching something that didn\'t gain traction.',
    },
    {
      question: 'How is this different from hiring a consultant?',
      answer: 'Unlike traditional consultants, we\'re practitioners. Our strategy work is designed to flow directly into design and development. We don\'t just advise—we can execute. This means our recommendations are grounded in what\'s actually buildable.',
    },
    {
      question: 'What happens after strategy is complete?',
      answer: 'You\'ll have a clear roadmap and all the documentation needed to move forward. Many clients continue with us into design and development, but you\'re free to take our work to any team. We design our deliverables to be actionable by anyone.',
    },
    {
      question: 'How involved do I need to be?',
      answer: 'We need your input, but we respect your time. Expect 3-5 hours of your involvement per week during active strategy work. This includes interviews, workshops, and review sessions. We do the heavy lifting.',
    },
    {
      question: 'Can you work with our existing team?',
      answer: 'Absolutely. We often collaborate with in-house product managers, designers, and engineers. Our role is to augment your team\'s capabilities, not replace them. We can also train your team on our frameworks.',
    },
  ];

  const caseStudySnippet = {
    company: 'MediBook',
    challenge: 'Needed to validate telehealth market opportunity before committing $500K+ in development',
    solution: 'Conducted 3-week discovery sprint with 25 user interviews and competitive analysis',
    result: 'Identified underserved patient segment, refined value prop, launched MVP in 60% less time than planned',
    quote: 'The strategy work saved us from building the wrong thing. What we learned in 3 weeks would have taken us 6 months and $200K to figure out on our own.',
    author: 'Dr. Sarah Chen',
    role: 'Founder, MediBook',
  };

  const comparisonData = [
    { feature: 'Time to clarity', diy: '3-6 months', lockj: '2-4 weeks', other: '4-8 weeks' },
    { feature: 'User research included', diy: 'Rarely', lockj: 'Always', other: 'Sometimes' },
    { feature: 'Actionable deliverables', diy: 'Variable', lockj: 'Guaranteed', other: 'Varies' },
    { feature: 'Flows into development', diy: 'Gap exists', lockj: 'Seamless', other: 'Handoff required' },
    { feature: 'Cost', diy: '$0 + your time', lockj: '$5K-$25K', other: '$20K-$100K' },
    { feature: 'Risk of wrong direction', diy: 'High', lockj: 'Low', other: 'Medium' },
  ];

  return (
    <div className="bg-[#0B0F19] min-h-screen">
      <PageHero
        tag="Product Strategy"
        icon="Rocket"
        title="Know What to Build"
        titleHighlight="Before You Build It"
        description="Avoid the #1 startup killer: building something nobody wants. Our strategy work validates your idea, defines your roadmap, and sets you up for success."
        size="lg"
      />

      {/* Trust Indicators */}
      <section className="py-8 border-b border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            <div>
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-sm text-gray-400">Products Launched</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">$100M+</div>
              <div className="text-sm text-gray-400">Client Revenue Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">92%</div>
              <div className="text-sm text-gray-400">Strategy-to-Launch Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">2 weeks</div>
              <div className="text-sm text-gray-400">Avg Time to Clarity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Expensive Mistake Most Teams Make
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            42% of startups fail because they build something nobody wants. Not because of bad code. Not because of poor design. Because they skipped strategy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
              <Icon name="XCircle" className="w-8 h-8 text-red-400 mx-auto mb-3" />
              <div className="text-white font-semibold mb-2">Months of Wasted Work</div>
              <p className="text-gray-400 text-sm">Building features users don&apos;t need</p>
            </div>
            <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
              <Icon name="XCircle" className="w-8 h-8 text-red-400 mx-auto mb-3" />
              <div className="text-white font-semibold mb-2">$50K-$200K Burned</div>
              <p className="text-gray-400 text-sm">Development costs with no market fit</p>
            </div>
            <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
              <Icon name="XCircle" className="w-8 h-8 text-red-400 mx-auto mb-3" />
              <div className="text-white font-semibold mb-2">Missed Market Window</div>
              <p className="text-gray-400 text-sm">Competitors launch while you pivot</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What You Get</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Every engagement includes clear deliverables you can act on immediately.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {offerings.map((offering) => (
              <div
                key={offering.title}
                className="p-8 rounded-2xl bg-[#111827] border border-white/10 hover:border-purple-500/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                      <Icon name={offering.icon} className="w-7 h-7 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white ml-4">{offering.title}</h3>
                  </div>
                  <span className="text-sm text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
                    {offering.timeline}
                  </span>
                </div>
                <p className="text-gray-400 mb-6">{offering.description}</p>
                <div className="space-y-2">
                  <div className="text-sm text-gray-500 uppercase tracking-wider mb-3">Deliverables</div>
                  {offering.deliverables.map((item) => (
                    <div key={item} className="flex items-center text-sm text-gray-300">
                      <Icon name="CheckCircle" className="w-4 h-4 mr-3 text-purple-400 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A streamlined process designed to get you answers fast.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-bold text-purple-500/20 mb-4">{item.step}</div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">{item.duration}</span>
                </div>
                <p className="text-gray-400">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-full h-0.5 bg-gradient-to-r from-purple-500/30 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Investment Options</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose the depth of strategy work that fits your needs and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`p-8 rounded-2xl border transition-all ${
                  pkg.popular 
                    ? 'bg-gradient-to-b from-purple-600/20 to-[#111827] border-purple-500/50 ring-1 ring-purple-500/20' 
                    : 'bg-[#111827] border-white/10 hover:border-purple-500/30'
                }`}
              >
                {pkg.popular && (
                  <div className="text-sm font-semibold text-purple-400 mb-4 flex items-center">
                    <Icon name="Star" className="w-4 h-4 mr-1 fill-purple-400" />
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">{pkg.price}</span>
                  <span className="text-gray-400 text-sm ml-2">/ {pkg.duration}</span>
                </div>
                <div className="text-sm text-purple-400 bg-purple-500/10 px-3 py-2 rounded-lg mb-6 inline-block">
                  Best for: {pkg.ideal}
                </div>
                <div className="space-y-3 mb-8">
                  {pkg.includes.map((item) => (
                    <div key={item} className="flex items-start text-sm text-gray-300">
                      <Icon name="Check" className="w-4 h-4 mr-3 text-purple-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:shadow-lg hover:shadow-purple-500/30'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Work With Us?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              See how we compare to doing it yourself or hiring a traditional consulting firm.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Consideration</th>
                  <th className="text-center py-4 px-4 text-gray-400 font-medium">DIY</th>
                  <th className="text-center py-4 px-4 text-purple-400 font-medium bg-purple-500/10 rounded-t-lg">Lock J Lab</th>
                  <th className="text-center py-4 px-4 text-gray-400 font-medium">Big Consultancies</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={row.feature} className={index < comparisonData.length - 1 ? 'border-b border-white/5' : ''}>
                    <td className="py-4 px-4 text-white font-medium">{row.feature}</td>
                    <td className="text-center py-4 px-4 text-gray-400">{row.diy}</td>
                    <td className="text-center py-4 px-4 text-white bg-purple-500/5">{row.lockj}</td>
                    <td className="text-center py-4 px-4 text-gray-400">{row.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Case Study Snippet */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-600/20 to-[#111827] rounded-2xl p-8 md:p-12 border border-purple-500/30">
            <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold mb-6">
              <Icon name="Trophy" className="w-5 h-5" />
              SUCCESS STORY
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">{caseStudySnippet.company}</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">Challenge</div>
                    <p className="text-gray-300">{caseStudySnippet.challenge}</p>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">What We Did</div>
                    <p className="text-gray-300">{caseStudySnippet.solution}</p>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">Result</div>
                    <p className="text-gray-300">{caseStudySnippet.result}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <Icon name="Quote" className="w-10 h-10 text-purple-400 mb-4" />
                <blockquote className="text-xl text-white italic mb-6">
                  &quot;{caseStudySnippet.quote}&quot;
                </blockquote>
                <div>
                  <div className="text-white font-semibold">{caseStudySnippet.author}</div>
                  <div className="text-gray-400 text-sm">{caseStudySnippet.role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Common Questions</h2>
            <p className="text-gray-400 text-lg">
              Everything you need to know about our strategy services.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <Icon 
                    name={openFaq === index ? 'ChevronUp' : 'ChevronDown'} 
                    className="w-5 h-5 text-gray-400 flex-shrink-0" 
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Guarantees</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-[#111827] border border-white/10">
              <div className="w-16 h-16 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">On-Time Delivery</h3>
              <p className="text-gray-400 text-sm">We hit our deadlines. If we&apos;re late, you get 20% off.</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-[#111827] border border-white/10">
              <div className="w-16 h-16 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <Icon name="ThumbsUp" className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Satisfaction Promise</h3>
              <p className="text-gray-400 text-sm">Not happy after week 1? Full refund, no questions.</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-[#111827] border border-white/10">
              <div className="w-16 h-16 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <Icon name="FileText" className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Actionable Deliverables</h3>
              <p className="text-gray-400 text-sm">Everything we produce is ready to use immediately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Clarity on Your Product?
          </h2>
          <p className="text-gray-400 text-lg mb-4">
            Book a free 30-minute strategy call. We&apos;ll discuss your goals and help you determine the right next step.
          </p>
          <p className="text-purple-400 text-sm mb-10">
            No sales pitch. No pressure. Just honest advice.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold py-4 px-10 rounded-lg transition duration-300 flex items-center shadow-lg hover:shadow-xl hover:shadow-purple-500/30 group border border-purple-500/50"
            >
              Book Free Strategy Call
              <Icon name="ArrowRight" className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/work"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-4 px-10 rounded-lg border border-white/20 transition duration-300"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

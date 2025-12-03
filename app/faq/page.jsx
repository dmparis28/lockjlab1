// Filename: app/faq/page.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import PageHero from '../components/PageHero';
import Icon from '../components/Icon';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqCategories = [
    {
      title: 'General',
      icon: 'Info',
      faqs: [
        {
          question: 'What services does Lock J Lab offer?',
          answer: 'We offer end-to-end digital product services including Product Strategy, UI/UX Design, and Software Development. This covers everything from initial concept and market research to design, development, and launch support.'
        },
        {
          question: 'What industries do you work with?',
          answer: 'We work with a wide range of industries including startups, enterprise companies, healthcare, fintech, e-commerce, and nonprofits. Our diverse experience allows us to bring cross-industry insights to every project.'
        },
        {
          question: 'Where is Lock J Lab located?',
          answer: 'Our headquarters is in New York, with additional offices in San Francisco and London. We also work with a global remote team, allowing us to serve clients worldwide across different time zones.'
        },
        {
          question: 'How do I get started with Lock J Lab?',
          answer: 'Simply reach out through our contact page or book a call. We will schedule an initial discovery session to understand your project needs, goals, and timeline. From there, we will provide a tailored proposal.'
        },
      ]
    },
    {
      title: 'Project Process',
      icon: 'Repeat',
      faqs: [
        {
          question: 'How long does it take to build an MVP?',
          answer: 'Typically, an MVP takes 3-6 months depending on complexity and scope. Simple MVPs can be completed in 8-12 weeks, while more complex products may take 4-6 months. We will provide a detailed timeline during our proposal phase.'
        },
        {
          question: 'What is your development process?',
          answer: 'We follow an agile methodology with 2-week sprints. Our process includes Discovery & Strategy, Design, Development, Testing, and Launch phases. Throughout the project, you will have regular check-ins and access to our project management tools.'
        },
        {
          question: 'What is your typical team structure?',
          answer: 'For most projects, we assign a dedicated team including a Project Manager, UX/UI Designer, Tech Lead, and 2-4 Developers. The exact team composition depends on your project requirements and can scale as needed.'
        },
        {
          question: 'How do you handle project communication?',
          answer: 'We use a combination of Slack for daily communication, weekly video calls for progress updates, and project management tools like Linear or Jira for task tracking. You will have full visibility into the development process.'
        },
      ]
    },
    {
      title: 'Pricing & Engagement',
      icon: 'DollarSign',
      faqs: [
        {
          question: 'What are your pricing models?',
          answer: 'We offer three engagement models: Fixed Price for well-defined projects, Time & Materials for flexible scope, and Dedicated Team for ongoing development. Each model has its benefits depending on your project needs and budget.'
        },
        {
          question: 'What is the typical investment for a project?',
          answer: 'Project investments vary based on scope. MVP development typically starts at $50k+, product redesigns at $35k+, mobile apps at $75k+, and enterprise solutions at $150k+. We provide detailed quotes after understanding your requirements.'
        },
        {
          question: 'Do you require upfront payment?',
          answer: 'Yes, we typically require a deposit before work begins (usually 25-30% of the project cost). Remaining payments are structured around milestone deliverables to ensure alignment throughout the project.'
        },
        {
          question: 'Do you offer post-launch support?',
          answer: 'Yes, we offer various support and maintenance packages after launch. This includes bug fixes, performance monitoring, feature updates, and ongoing development. We can tailor a support plan to your needs.'
        },
      ]
    },
    {
      title: 'Technology',
      icon: 'Code',
      faqs: [
        {
          question: 'What technologies do you specialize in?',
          answer: 'Our tech stack includes React, Next.js, Vue.js, and TypeScript for frontend; Node.js, Python, and Go for backend; React Native, Swift, and Kotlin for mobile; and AWS, Google Cloud, and Azure for infrastructure.'
        },
        {
          question: 'Can you work with our existing codebase?',
          answer: 'Absolutely. We regularly work with existing codebases and can help modernize legacy systems, add new features, or refactor for better performance. We will conduct a code review first to assess the current state.'
        },
        {
          question: 'Do you build native or cross-platform mobile apps?',
          answer: 'We build both. For maximum performance and platform-specific features, we develop native apps in Swift (iOS) and Kotlin (Android). For faster time-to-market and budget efficiency, we use React Native or Flutter for cross-platform development.'
        },
        {
          question: 'How do you ensure code quality?',
          answer: 'We maintain high code quality through code reviews, automated testing, CI/CD pipelines, and adherence to coding standards. All code is documented and follows best practices for maintainability and scalability.'
        },
      ]
    },
  ];

  let globalIndex = 0;

  return (
    <div className="bg-[#0B0F19] min-h-screen">
      <PageHero
        tag="FAQ"
        icon="HelpCircle"
        title="Frequently Asked"
        titleHighlight="Questions"
        description="Find answers to common questions about our services, process, and how we work with clients."
        size="lg"
      />

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, catIndex) => (
            <div key={category.title} className={catIndex > 0 ? 'mt-16' : ''}>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/20">
                  <Icon name={category.icon} className="w-5 h-5 text-sky-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">{category.title}</h2>
              </div>

              {/* FAQ Items */}
              <div className="space-y-4">
                {category.faqs.map((faq) => {
                  const currentIndex = globalIndex++;
                  const isOpen = openIndex === currentIndex;
                  
                  return (
                    <div
                      key={currentIndex}
                      className="border border-white/10 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(currentIndex)}
                        className="w-full flex items-center justify-between p-6 text-left bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <span className="text-white font-medium pr-8">{faq.question}</span>
                        <Icon 
                          name="ChevronDown" 
                          className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} 
                        />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                        <div className="p-6 pt-0 bg-white/5">
                          <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mx-auto mb-6">
            <Icon name="MessageSquare" className="w-8 h-8 text-sky-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            {"Can't find the answer you're looking for? Our team is happy to help with any questions about your project."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 flex items-center shadow-lg hover:shadow-xl hover:shadow-sky-500/30 group border border-sky-500/50"
            >
              Contact Us
              <Icon name="ArrowRight" className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/pricing"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg border border-white/20 transition duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

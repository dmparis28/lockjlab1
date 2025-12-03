// Filename: app/contact/page.jsx
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import Icon from '../components/Icon';

export const metadata = {
  title: 'Contact Us | Lock J Lab',
  description: 'Get in touch with Lock J Lab. Book a consultation to discuss your digital product needs.',
};

const contactInfo = [
  {
    icon: 'Mail',
    title: 'Email',
    content: 'hello@lockjlab.com',
    href: 'mailto:hello@lockjlab.com',
  },
  {
    icon: 'Phone',
    title: 'Phone',
    content: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: 'MapPin',
    title: 'Headquarters',
    content: '123 Tech Avenue, New York, NY 10001',
    href: '#',
  },
  {
    icon: 'Clock',
    title: 'Business Hours',
    content: 'Mon - Fri: 9:00 AM - 6:00 PM EST',
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="bg-[#0B0F19] min-h-screen">
      <PageHero
        tag="Get in Touch"
        icon="MessageSquare"
        title="Let's Build Something"
        titleHighlight="Amazing Together"
        description="Ready to transform your vision into reality? Fill out the form below and our team will get back to you within 24 hours."
        size="md"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-sky-500/10 border border-sky-500/20">
                      <Icon name={item.icon} className="w-5 h-5 text-sky-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">{item.title}</h3>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          className="text-gray-400 hover:text-sky-400 transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-400">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="text-white font-medium mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {['Linkedin', 'Twitter', 'Instagram', 'Github'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-sky-500/50 transition-all"
                    >
                      <Icon name={social} className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm variant="full" showBudget={true} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

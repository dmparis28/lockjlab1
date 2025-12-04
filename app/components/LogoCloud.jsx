// Filename: app/components/LogoCloud.jsx
'use client';
import Icon from './Icon';

const reviews = [
  {
    name: 'Michael R.',
    rating: 5,
    text: 'Lock J Lab transformed our vision into reality. Their team delivered a stunning app that exceeded our expectations.',
    date: '2 weeks ago',
  },
  {
    name: 'Sarah T.',
    rating: 5,
    text: 'Professional, responsive, and incredibly talented. They built our entire platform from scratch in record time.',
    date: '1 month ago',
  },
  {
    name: 'David K.',
    rating: 5,
    text: 'Best development agency we\'ve worked with. Clear communication and exceptional quality throughout.',
    date: '1 month ago',
  },
  {
    name: 'Jennifer L.',
    rating: 5,
    text: 'From design to deployment, Lock J Lab handled everything flawlessly. Highly recommend!',
    date: '2 months ago',
  },
];

export default function LogoCloud() {
  return (
    <section className="bg-[var(--bg-primary)] py-16 border-y border-white/5">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Google Reviews Header */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-[var(--text-primary)] font-semibold text-lg">Google Reviews</span>
          </div>
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map(i => (
              <Icon key={i} name="Star" className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
            <span className="text-[var(--text-primary)] font-bold ml-2">5.0</span>
            <span className="text-[var(--text-secondary)] text-sm ml-1">({reviews.length} reviews)</span>
          </div>
        </div>
        
        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[var(--bg-secondary)] rounded-xl p-5 border border-white/5 hover:border-[var(--border)] transition-all animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-[var(--text-primary)] font-semibold">
                  {review.name[0]}
                </div>
                <div>
                  <div className="text-[var(--text-primary)] font-medium text-sm">{review.name}</div>
                  <div className="text-[var(--text-muted)] text-xs">{review.date}</div>
                </div>
              </div>
              <div className="flex gap-0.5 mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <Icon key={i} name="Star" className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-8">
          <a 
            href="https://share.google/LcvdAgFW4Ydl0g06H" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-[var(--accent)] hover:text-sky-300 text-sm font-medium transition-all"
          >
            View all reviews on Google
            <Icon name="ArrowRight" className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

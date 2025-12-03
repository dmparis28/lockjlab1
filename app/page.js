// Filename: app/page.js
import Hero from './components/Hero';
import LogoCloud from './components/LogoCloud';
import ServicesOverview from './components/ServicesOverview';
import CaseStudies from './components/CaseStudies';
import Portfolio from './components/Portfolio';
import InteractiveProjectPoster from './components/InteractiveProjectPoster';

export default function Home() {
  return (
    <div className="bg-[#0B0F19] text-white min-h-screen">
      <main>
        <Hero />
        <LogoCloud />
        <ServicesOverview />
        <CaseStudies />
        <Portfolio />
        <InteractiveProjectPoster />
      </main>
    </div>
  );
}

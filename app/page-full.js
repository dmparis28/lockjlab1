// Filename: app/page.js
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ProblemSolution from './components/ProblemSolution';
import HowItWorks from './components/HowItWorks';
import CaseStudies from './components/CaseStudies';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import IsThisForYou from './components/IsThisForYou';
import Guarantees from './components/Guarantees';
import FinalCTA from './components/FinalCTA';

export default function Home() {
  return (
    <div className="bg-[#0B0F19] text-white min-h-screen">
      <main>
        {/* Hook: Capture attention */}
        <Hero />
        
        {/* Trust: Build credibility immediately */}
        <TrustBar />
        
        {/* Problem/Solution: Agitate pain points & show solution */}
        <ProblemSolution />
        
        {/* Process: Make it tangible */}
        <HowItWorks />
        
        {/* Proof: Featured work showcase */}
        <CaseStudies />
        
        {/* Differentiation: Why choose us */}
        <WhyChooseUs />
        
        {/* Testimonials: Social proof */}
        <Testimonials />
        
        {/* Qualify: Help visitors self-select */}
        <IsThisForYou />
        
        {/* Risk Reversal: Remove fear */}
        <Guarantees />
        
        {/* Final CTA: Close the deal */}
        <FinalCTA />
      </main>
    </div>
  );
}

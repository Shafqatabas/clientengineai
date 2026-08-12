import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import FeatureTabs from '../components/FeatureTabs';
import AgentWorkflow from '../components/AgentWorkflow';
import PlaygroundSection from '@/components/PlaygroundSection';
import FounderSection from '../components/FounderSection';
import PricingSection from '../components/PricingSection';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import CtaBanner from '../components/CtaBanner';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080511] text-white selection:bg-purple-500 selection:text-black">
      <Navbar />
      <Hero />
      <SocialProof />

      <div id="features">
        <FeatureTabs />
      </div>

      <div id="how-it-works">
        <AgentWorkflow />
      </div>

      {/* Playground Section: Yahan par yeh demo section best lagay ga */}
      <PlaygroundSection />

      <div id="features">
        <FeatureTabs />
      </div>

      <FounderSection />

      <div id="pricing">
        <PricingSection />
      </div>

      <Testimonials />

      <div id="contact">
        <ContactSection />
      </div>

      <CtaBanner />
      <Footer />
    </main>
  );
}
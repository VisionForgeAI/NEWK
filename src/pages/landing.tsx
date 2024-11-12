import LandingHero from '@/components/sections/landing-hero';
import ValueProposition from '@/components/sections/value-proposition';
import AutomationShowcase from '@/components/sections/automation-showcase';
import LeadForm from '@/components/lead-form';
import Testimonials from '@/components/sections/testimonials';
import Footer from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';

const LandingPage = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="visionforge-theme">
      <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
        <main>
          <LandingHero />
          <ValueProposition />
          <AutomationShowcase />
          <Testimonials />
          <LeadForm />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default LandingPage;
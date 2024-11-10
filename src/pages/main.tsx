import Navbar from '@/components/navbar';
import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import CaseStudies from '@/components/sections/case-studies';
import Team from '@/components/sections/team';
import Testimonials from '@/components/sections/testimonials';
import Contact from '@/components/sections/contact';
import Footer from '@/components/footer';

const MainPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;
import { motion } from 'framer-motion';
import LandingHero from '@/components/sections/landing-hero';
import Features from '@/components/sections/features';
import Solutions from '@/components/sections/solutions';
import Integrations from '@/components/sections/integrations';
import CaseStudies from '@/components/sections/case-studies';
import Testimonials from '@/components/sections/testimonials';
import Process from '@/components/sections/process';
import Contact from '@/components/sections/contact';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <LandingHero />
      <Features />
      <Solutions />
      <Process />
      <Integrations />
      <CaseStudies />
      <Testimonials />
      <Contact />
    </motion.div>
  );
};

export default Home;
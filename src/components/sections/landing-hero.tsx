import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Bot, ArrowRight, Zap, Shield, Brain } from 'lucide-react';
import { motion } from 'framer-motion';
import { ContactForm } from '@/components/contact-form';

const LandingHero = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(17,17,17,0),rgba(17,17,17,0.9))]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center px-4 py-2 mb-8 bg-primary/10 backdrop-blur-sm rounded-full"
          >
            <Bot className="w-5 h-5 mr-2 text-primary" />
            <span className="text-sm font-medium">AI Solutions for All</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Empower Your Business with{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/50">
              VisionForge AI
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8"
          >
            From startups to enterprises, our AI solutions adapt to your needs.
            Automate tasks, enhance decisions, and accelerate growth - no matter your size.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button 
              size="lg" 
              className="group text-lg"
              onClick={() => setShowDemoForm(true)}
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              View Pricing
            </Button>
          </motion.div>

          {/* Feature Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 bg-secondary/50 backdrop-blur-sm p-4 rounded-lg">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Smart AI</div>
                <div className="text-sm text-muted-foreground">Adapts to your needs</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-secondary/50 backdrop-blur-sm p-4 rounded-lg">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Quick Setup</div>
                <div className="text-sm text-muted-foreground">Ready in minutes</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-secondary/50 backdrop-blur-sm p-4 rounded-lg">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Secure & Private</div>
                <div className="text-sm text-muted-foreground">Your data is safe</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </motion.div>

      {/* Demo Form Dialog */}
      <ContactForm 
        type="demo"
        open={showDemoForm}
        onOpenChange={setShowDemoForm}
      />
    </section>
  );
};

export default LandingHero;
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: 'Healthcare Automation',
    category: 'Healthcare',
    image: 'https://plus.unsplash.com/premium_photo-1661342488366-56a26535a6c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'AI chatbots streamline patient scheduling and support, cutting administrative tasks.',
  },
  {
    title: 'Manufacturing Process Automation',
    category: 'Manufacturing',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'AI optimizes inventory and scheduling, minimizing downtime and improving efficiency.',
  },
  {
    title: 'Financial Services Automation',
    category: 'Finance',
    image: 'https://plus.unsplash.com/premium_photo-1682023587356-86065925727a?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'AI-driven chatbots and workflows enhance customer service and reduce costs.',
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-accent/5">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore how we've helped businesses transform their operations with
            cutting-edge AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/10 backdrop-blur-sm rounded-full text-sm font-medium">
                    {study.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                <p className="text-muted-foreground mb-4">{study.description}</p>
                <a href="/work" className="inline-block">
                  <Button 
                    variant="ghost" 
                    className="group/btn"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
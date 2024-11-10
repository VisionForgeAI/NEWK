import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: 'AI-Driven Supply Chain Optimization',
    category: 'Logistics',
    image: 'https://images.unsplash.com/photo-1566661097872-e95d19f7a288?auto=format&fit=crop&q=80&w=800',
    description: 'Revolutionized supply chain efficiency with predictive AI models.',
  },
  {
    title: 'Smart Manufacturing Process',
    category: 'Manufacturing',
    image: 'https://images.unsplash.com/photo-1565962096823-3d2c8bf4b28c?auto=format&fit=crop&q=80&w=800',
    description: 'Automated quality control using computer vision and deep learning.',
  },
  {
    title: 'Financial Risk Assessment',
    category: 'Finance',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800',
    description: 'AI-powered risk analysis for investment decision-making.',
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
                <Button variant="ghost" className="group/btn">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
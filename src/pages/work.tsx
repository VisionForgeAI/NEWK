import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CaseStudy = ({ 
  title, 
  category, 
  description, 
  image, 
  results 
}: { 
  title: string;
  category: string;
  description: string;
  image: string;
  results: string[];
}) => (
  <Card className="overflow-hidden group">
    <div className="aspect-video relative overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 bg-primary/10 backdrop-blur-sm rounded-full text-sm font-medium">
          {category}
        </span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="space-y-2 mb-6">
        {results.map((result, index) => (
          <div key={index} className="flex items-center text-sm">
            <ArrowRight className="w-4 h-4 text-primary mr-2" />
            {result}
          </div>
        ))}
      </div>
      <Button variant="outline" className="group/btn">
        View Case Study
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
      </Button>
    </div>
  </Card>
);

const Work = () => {
  const caseStudies = [
    {
      title: 'AI-Powered Supply Chain Optimization',
      category: 'Logistics',
      description: 'Revolutionized supply chain efficiency with predictive AI models.',
      image: 'https://images.unsplash.com/photo-1566661097872-e95d19f7a288?auto=format&fit=crop&q=80&w=800',
      results: [
        '40% reduction in delivery times',
        '60% improvement in inventory accuracy',
        '$2M annual cost savings'
      ]
    },
    {
      title: 'Smart Manufacturing Process',
      category: 'Manufacturing',
      description: 'Automated quality control using computer vision and deep learning.',
      image: 'https://images.unsplash.com/photo-1565962096823-3d2c8bf4b28c?auto=format&fit=crop&q=80&w=800',
      results: [
        '99.9% defect detection rate',
        '75% reduction in manual inspection',
        '30% increase in production speed'
      ]
    },
    {
      title: 'Financial Risk Assessment',
      category: 'Finance',
      description: 'AI-powered risk analysis for investment decision-making.',
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800',
      results: [
        '85% accuracy in risk prediction',
        '50% faster decision making',
        '25% increase in portfolio performance'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Our <span className="text-primary">Work</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore how we've helped businesses transform their operations with
            our AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudy key={index} {...study} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
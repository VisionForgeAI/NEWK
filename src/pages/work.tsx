import { Card } from '@/components/ui/card';
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
      {/* <Button variant="outline" className="group/btn">
        View Case Study
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
      </Button> */}
    </div>
  </Card>
);

const Work = () => {
  const caseStudies = [
    {
      title: 'Healthcare Automation',
      category: 'Healthcare',
      description: 'Streamlined patient interactions with AI chatbots for scheduling and support, reducing administrative load and improving patient satisfaction.',
      image: 'https://plus.unsplash.com/premium_photo-1661342488366-56a26535a6c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      results: [
        '30% reduction in administrative load on staff',
        'Increased patient satisfaction',
        'Shortened response times for patient inquiries'
      ]
    },
    
    {
      title: 'Manufacturing Process Automation',
      category: 'Manufacturing',
      description: 'Improved production efficiency and minimized downtime by implementing AI-powered inventory and scheduling systems.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      results: [
        '20% reduction in production downtime',
        'Optimized inventory management',
        'Improved overall production efficiency'
      ]
    },
    
    {
      title: 'Financial Services Automation',
      category: 'Finance',
      description: 'Enhanced customer service and reduced operational costs with AI-driven chatbots and automated workflows.',
      image: 'https://plus.unsplash.com/premium_photo-1682023587356-86065925727a?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      results: [
        'Improved response times for customer inquiries',
        'Increased customer satisfaction',
        'Reduced operational costs by automating repetitive tasks'
      ]
    },
    
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
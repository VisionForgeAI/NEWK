import { Card } from '@/components/ui/card';
import { Bot, Zap, Code, LineChart, CheckCircle } from 'lucide-react';

const ProcessStep = ({ 
  number, 
  title, 
  description, 
  icon: Icon 
}: { 
  number: string; 
  title: string; 
  description: string;
  icon: any;
}) => (
  <div className="relative">
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <div className="text-sm font-mono text-primary mb-2">{number}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  </div>
);

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We begin with a thorough discussion of your business needs and objectives.',
      icon: Bot
    },
    {
      number: '02',
      title: 'Analysis & Planning',
      description: 'Our team analyzes your requirements and develops a comprehensive implementation plan.',
      icon: LineChart
    },
    {
      number: '03',
      title: 'Development',
      description: 'We build your custom AI solution using cutting-edge technologies and best practices.',
      icon: Code
    },
    {
      number: '04',
      title: 'Testing & Optimization',
      description: 'Rigorous testing ensures your solution performs optimally and meets all requirements.',
      icon: Zap
    },
    {
      number: '05',
      title: 'Deployment & Support',
      description: 'We deploy your solution and provide ongoing support and maintenance.',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Our <span className="text-primary">Process</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A streamlined approach to delivering exceptional AI solutions for your business.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <ProcessStep key={index} {...step} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
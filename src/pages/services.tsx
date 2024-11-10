import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, Zap, LineChart, Cpu, Network, Shield } from 'lucide-react';

const ServiceCard = ({ title, description, icon: Icon, features }: {
  title: string;
  description: string;
  icon: any;
  features: string[];
}) => (
  <Card className="p-8 bg-secondary/50 backdrop-blur border-primary/10 hover:border-primary/20 transition-all duration-300">
    <div className="p-3 bg-primary/10 rounded-lg w-fit mb-6">
      <Icon className="h-8 w-8 text-primary" />
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-muted-foreground mb-6">{description}</p>
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
          {feature}
        </li>
      ))}
    </ul>
  </Card>
);

const Services = () => {
  const services = [
    {
      title: 'Workflow Automation',
      description: 'Streamline your business processes with intelligent automation solutions.',
      icon: Zap,
      features: [
        'Custom workflow design',
        'Integration with existing tools',
        'Real-time monitoring',
        'Automated reporting'
      ]
    },
    {
      title: 'AI Development',
      description: 'Custom AI solutions tailored to your specific business needs.',
      icon: Bot,
      features: [
        'Machine learning models',
        'Natural language processing',
        'Computer vision systems',
        'Predictive analytics'
      ]
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights.',
      icon: LineChart,
      features: [
        'Data visualization',
        'Business intelligence',
        'Performance metrics',
        'Trend analysis'
      ]
    },
    {
      title: 'Edge Computing',
      description: 'Optimize performance with edge computing solutions.',
      icon: Cpu,
      features: [
        'Real-time processing',
        'Reduced latency',
        'Distributed computing',
        'IoT integration'
      ]
    },
    {
      title: 'Neural Networks',
      description: 'Advanced neural network solutions for complex problems.',
      icon: Network,
      features: [
        'Deep learning',
        'Pattern recognition',
        'Automated decision making',
        'Scalable architecture'
      ]
    },
    {
      title: 'Security & Compliance',
      description: 'Ensure your AI systems are secure and compliant.',
      icon: Shield,
      features: [
        'Data encryption',
        'Access control',
        'Audit trails',
        'Regulatory compliance'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI and automation solutions to transform your business
            operations and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="text-lg">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
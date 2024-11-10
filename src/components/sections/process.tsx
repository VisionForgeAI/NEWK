import { Card } from '@/components/ui/card';
import { Bot, Zap, Code, LineChart, CheckCircle } from 'lucide-react';

const ProcessCard = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <Card className="p-6 bg-secondary/50 backdrop-blur border-primary/10 hover:border-primary/20 transition-colors">
    <div className="text-primary/80 text-lg font-mono mb-4">{number}</div>
    <h3 className="text-2xl font-semibold mb-3">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </Card>
);

const Process = () => {
  const steps = [
    {
      number: '01. Subscribe',
      title: 'Choose Your Plan',
      description: 'Choose your preferred plan to start and cancel or pause at anytime you like. So you\'re as flexible as your business\' needs.'
    },
    {
      number: '02. Request',
      title: 'Define Your Needs',
      description: 'Start requesting the workflow-automations and AI applications you need, your developers are right there to transform your ideas into reality.'
    },
    {
      number: '03. Build',
      title: 'Development Begins',
      description: 'Our developers swiftly begin building your custom solutions, prioritising speed without compromising on quality.'
    },
    {
      number: '04. Test & Optimise',
      title: 'Refine & Perfect',
      description: 'You either approve or request revisions - we\'re dedicated to refining our builds until you\'re fully satisfied.'
    },
    {
      number: '05. Scale',
      title: 'Become a Leader',
      description: 'Continue requesting as many workflow-automations and AI-applications as you wish, and transform your organisation into a worldwide industry leader.'
    }
  ];

  return (
    <section id="process" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold mb-16">
          Our <span className="text-primary">process</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <ProcessCard key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
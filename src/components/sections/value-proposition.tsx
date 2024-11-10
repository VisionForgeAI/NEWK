import { Card } from '@/components/ui/card';
import {
  Zap,
  Timer,
  TrendingUp,
  DollarSign,
  Bot,
  Shield,
} from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Automate tasks in milliseconds, not hours.',
  },
  {
    icon: Timer,
    title: '24/7 Operation',
    description: 'Non-stop automation that never sleeps.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Growth',
    description: 'Expand operations without expanding overhead.',
  },
  {
    icon: DollarSign,
    title: 'Cost Efficient',
    description: 'Reduce operational costs by up to 90%.',
  },
  {
    icon: Bot,
    title: 'Smart Learning',
    description: 'AI that adapts to your business needs.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security for your automations.',
  },
];

const ValueProposition = () => {
  return (
    <section className="py-24 bg-accent/5">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Our Crazy Automations?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of business automation with our cutting-edge AI
            solutions that transform how work gets done.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card/50 backdrop-blur"
            >
              <div className="mb-4 p-2 inline-block bg-primary/10 rounded-lg">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight } from 'lucide-react';

const automations = [
  {
    title: 'Smart Document Processing',
    description: 'Automatically extract, categorize, and process documents with 99.9% accuracy.',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800',
    metrics: ['90% time saved', '100k+ docs processed', '99.9% accuracy'],
  },
  {
    title: 'Intelligent Customer Service',
    description: 'AI-powered responses that handle customer inquiries 24/7 with human-like interaction.',
    image: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=800',
    metrics: ['5s average response', '95% satisfaction', '75% cost reduction'],
  },
  {
    title: 'Predictive Maintenance',
    description: 'Prevent equipment failures before they happen with AI-driven predictions.',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=800',
    metrics: ['40% downtime reduction', '60% cost savings', '85% accuracy'],
  },
];

const AutomationShowcase = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Crazy Automations in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how our AI-powered automations are revolutionizing business
            operations across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {automations.map((automation, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={automation.image}
                  alt={automation.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    variant="outline"
                    className="gap-2"
                  >
                    <Play className="w-4 h-4" />
                    Watch Demo
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{automation.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {automation.description}
                </p>
                <div className="space-y-2">
                  {automation.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-primary"
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationShowcase;
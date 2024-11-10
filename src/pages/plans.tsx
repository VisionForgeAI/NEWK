import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const PlanFeature = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center space-x-2">
    <Check className="h-4 w-4 text-primary" />
    <span className="text-muted-foreground">{children}</span>
  </div>
);

const Plans = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$99',
      description: 'Perfect for small businesses starting with AI',
      features: [
        '5 Workflow Automations',
        'Basic AI Integration',
        'Email Support',
        '1 Team Member',
      ],
    },
    {
      name: 'Pro',
      price: '$299',
      description: 'Ideal for growing companies',
      features: [
        'Unlimited Automations',
        'Advanced AI Models',
        'Priority Support',
        '5 Team Members',
        'Custom Integrations',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with specific needs',
      features: [
        'Custom Solutions',
        'Dedicated Support',
        'SLA Agreement',
        'Unlimited Team Members',
        'Custom AI Training',
        'On-premise Options',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Simple, transparent <span className="text-primary">pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our
            core features with different levels of processing power and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "p-8 backdrop-blur border-primary/10",
                plan.popular ? "border-primary" : ""
              )}
            >
              {plan.popular && (
                <div className="text-primary text-sm font-medium mb-2">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== 'Custom' && <span>/month</span>}
              </div>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              <div className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <PlanFeature key={feature}>{feature}</PlanFeature>
                ))}
              </div>
              <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
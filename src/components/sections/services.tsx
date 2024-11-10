import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Bot, LineChart, Workflow } from 'lucide-react';

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon,
  tools 
}: { 
  title: string; 
  description: string;
  icon: any;
  tools?: { name: string; icon: string; }[];
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <Card className="relative p-8 bg-secondary/50 backdrop-blur border-primary/10 hover:border-primary/20 transition-all duration-300 group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transition-all duration-500 group-hover:bg-primary/10" />
      
      <div className="relative">
        <div className="mb-6 p-3 bg-primary/10 rounded-xl w-fit">
          <Icon className="w-8 h-8 text-primary" />
        </div>

        {tools && (
          <div className="space-y-4 mb-6">
            {tools.map((tool, index) => (
              <div key={index} className="flex items-center justify-between group/tool">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary/80 p-1.5">
                    <img 
                      src={`/icons/${tool.icon}`} 
                      alt={tool.name} 
                      className="w-full h-full" 
                    />
                  </div>
                  <span className="text-muted-foreground group-hover/tool:text-primary transition-colors">
                    {tool.name}
                  </span>
                </div>
                <div className="w-6 h-6 flex items-center justify-center opacity-40 group-hover/tool:opacity-100 transition-opacity">⋮</div>
              </div>
            ))}
          </div>
        )}

        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      title: 'Workflow automations',
      description: 'We automate your workflows by connecting your favourite applications. Boosting efficiency and enhancing productivity.',
      icon: Workflow,
      tools: [
        { name: 'Framer', icon: 'framer.svg' },
        { name: 'Airtable', icon: 'airtable.svg' },
        { name: 'OpenAI', icon: 'openai.svg' }
      ]
    },
    {
      title: 'Chatbot development',
      description: 'We develop advanced chatbots that are reactive, understand nuances, and are capable of solving extremely complicated queries.',
      icon: Bot
    },
    {
      title: 'Business consulting',
      description: 'Using our expertise, we delve deep into your organisation and consult you on how AI-driven automations could enhance your operations.',
      icon: LineChart
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-nebula opacity-20" />
      <div className="absolute w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -top-1/4 -right-1/4" />
      <div className="absolute w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -bottom-1/4 -left-1/4" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-primary">services</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
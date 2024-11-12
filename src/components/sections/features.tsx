import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { 
  Brain, 
  Cpu, 
  LineChart, 
  Shield, 
  Zap,
  Bot,
  RefreshCcw,
  Cloud,
  Database
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Advanced AI Models',
    description: 'Cutting-edge algorithms designed to solve complex business challenges'
  },
  // {
  //   icon: Cpu,
  //   title: 'Edge Computing',
  //   description: 'Process data closer to the source for faster response times'
  // },
  {
    icon: RefreshCcw,
    title: ' Adaptive Intelligence',
    description: 'Dynamic systems that adapt to your data, enabling smarter analysis and responsive actions.'
  },
  {
    icon: LineChart,
    title: 'Predictive Analytics',
    description: 'Forecast trends and make data-driven decisions'
  },
  // {
  //   icon: Shield,
  //   title: 'Enterprise Security',
  //   description: 'Bank-grade protection for your sensitive data'
  // },
  {
    icon: Zap,
    title: 'Real-time Processing',
    description: 'Instant data analysis and response capabilities'
  },
  {
    icon: Bot,
    title: 'Automated Workflows',
    description: 'Streamline operations with intelligent automation'
  },
  // {
  //   icon: Cloud,
  //   title: 'Cloud Integration',
  //   description: 'Seamless integration with major cloud providers'
  // },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Efficient handling of large-scale datasets'
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-secondary/5">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powered by Advanced Technology
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive suite of AI features enables enterprises to stay ahead
            in the digital transformation race.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card/50 backdrop-blur">
                <div className="mb-4 p-2 inline-block bg-primary/10 rounded-lg">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
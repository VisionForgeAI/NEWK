import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const integrations = [
  {
    name: 'Hubspot',
    logo: 'https://www.svgrepo.com/show/331433/hubspot.svg',
    description: 'Enhanced CRM capabilities with AI-powered insights'
  },
  {
    name: 'Twilio',
    logo: 'https://www.svgrepo.com/show/354472/twilio-icon.svg',
    description: 'Intelligent Communication Solutions'
  },
  {
    name: 'Slack',
    logo: 'https://www.svgrepo.com/show/448248/slack.svg',
    description: 'Optimized Team Collaboration'
  },
  {
    name: 'Monday',
    logo: 'https://www.svgrepo.com/show/354088/monday-icon.svg',
    description: 'Efficient Project Management'
  },
  {
    name: 'Google Workspace',
    logo: 'https://www.svgrepo.com/show/382723/google.svg',
    description: 'Enterprise Data & Application Sync'
  },
  {
    name: 'Zendesk',
    logo: 'https://www.svgrepo.com/show/331269/zendesk.svg',
    description: 'AI-Enhanced Customer Support'
  }
];

const Integrations = () => {
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
            Enterprise Integrations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seamlessly integrate with your existing enterprise software ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur flex items-center space-x-4">
                <img
                  src={integration.logo}
                  alt={integration.name}
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="font-semibold mb-1">{integration.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {integration.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
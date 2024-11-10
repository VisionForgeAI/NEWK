import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const integrations = [
  {
    name: 'Salesforce',
    logo: 'https://www.svgrepo.com/show/303235/salesforce-2-logo.svg',
    description: 'Enhanced CRM capabilities with AI-powered insights'
  },
  {
    name: 'SAP',
    logo: 'https://www.svgrepo.com/show/303264/sap-logo.svg',
    description: 'Intelligent ERP solutions for enterprise management'
  },
  {
    name: 'Microsoft Azure',
    logo: 'https://www.svgrepo.com/show/303372/azure-1-logo.svg',
    description: 'Seamless cloud integration and scalability'
  },
  {
    name: 'AWS',
    logo: 'https://www.svgrepo.com/show/303709/amazon-aws-logo.svg',
    description: 'Robust cloud infrastructure and services'
  },
  {
    name: 'Oracle',
    logo: 'https://www.svgrepo.com/show/303303/oracle-6-logo.svg',
    description: 'Enterprise database and application integration'
  },
  {
    name: 'Google Cloud',
    logo: 'https://www.svgrepo.com/show/303380/google-cloud-1-logo.svg',
    description: 'Advanced cloud AI and machine learning capabilities'
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
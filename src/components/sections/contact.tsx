import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

const Contact = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business with AI? Get in touch with our team of
            experts today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Card className="p-8">
            <Button 
              onClick={() => setShowContactForm(true)}
              className="w-full mb-6"
            >
              Send us a message
            </Button>

            <div className="space-y-8">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-primary mr-4 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-muted-foreground">
                    contact@visionforge.ai
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-primary mr-4 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-primary mr-4 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-muted-foreground">
                    123 Innovation Drive
                    <br />
                    Silicon Valley, CA 94025
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="space-y-8">
            <Card className="p-8 bg-primary/5 border-primary/10">
              <h3 className="text-2xl font-semibold mb-4">Office Hours</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">Weekdays</h4>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM PST
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Weekends</h4>
                  <p className="text-muted-foreground">
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-secondary/50">
              <h3 className="text-2xl font-semibold mb-4">Quick Response</h3>
              <p className="text-muted-foreground">
                We aim to respond to all inquiries within 24 hours during business hours.
                For urgent matters, please call us directly.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact Form Dialog */}
      <ContactForm 
        type="contact"
        open={showContactForm}
        onOpenChange={setShowContactForm}
      />
    </section>
  );
};

export default Contact;
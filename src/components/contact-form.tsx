import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { sendWebhook } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface ContactFormProps {
  type: 'demo' | 'contact';
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactForm({ type, open, onOpenChange }: ContactFormProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      message: formData.get('message'),
      employees: formData.get('employees'), // Adding number of employees
      servicesInterested: formData.get('servicesInterested'), // Adding services interested
      type: type,
      source: window.location.pathname
    };

    try {
      const success = await sendWebhook(data);

      if (!success) throw new Error('Failed to submit');

      toast({
        title: 'Success! 🎉',
        description: type === 'demo' 
          ? "We've received your request! We'll be in touch within 24 hours."
          : "Message received! We'll get back to you within 24 hours.",
      });

      onOpenChange(false);
    } catch (error) {
      toast({
        title: 'Oops! Something went wrong',
        description: 'Please try again or contact us directly.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {type === 'demo' ? 'Schedule a Demo' : 'Get in Touch'}
          </DialogTitle>
          <DialogDescription>
            {type === 'demo'
              ? "Experience the power of AI firsthand. No commitment required."
              : "Questions? Ideas? We're here to help! Drop us a message below."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Input
                id="name"
                name="name"
                placeholder="Your Name"
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                required
                disabled={loading}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Input
              id="company"
              name="company"
              placeholder="Company Name (Optional)"
              disabled={loading}
            />
          </div>

          {/* Number of Employees Field */}
          <div className="space-y-2">
  <select
    id="employees"
    name="employees"
    disabled={loading}
    required
    className="w-full border border-gray-800 rounded-md p-2 bg-black text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
  >
    <option value="" disabled selected hidden>Number of Employees</option>
    <option value="1-10">1-10 employees</option>
    <option value="11-50">11-50 employees</option>
    <option value="51-200">51-200 employees</option>
    <option value="201-500">201-500 employees</option>
    <option value="501+">501+ employees</option>
  </select>
</div>


          {/* Services Interested In Field */}
          <div className="space-y-2">
          <select
  id="servicesInterested"
  name="servicesInterested"
  disabled={loading}
  required
  className="w-full border border-gray-800 rounded-md p-2 bg-black text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
>
  <option value="" disabled selected hidden>
    Services Interested In
  </option>
  <option value="Workflow Automation">Workflow Automation</option>
  <option value="Intelligent Automation Solutions">Smart Assistant Development</option>
  <option value="Business Consulting">Business Consulting</option>
</select>

          </div>

          <div className="space-y-2">
            <Textarea
              id="message"
              name="message"
              placeholder={type === 'demo' 
                ? "Tell us about your needs and what you'd like to achieve"
                : "How can we help you today?"}
              className="min-h-[100px]"
              required
              disabled={loading}
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Sending...' : type === 'demo' ? 'Schedule' : 'Send Message'}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            By submitting this form, you agree to our{' '}
            <a href="/terms" className="underline hover:text-primary">
              Terms
            </a>{' '}
            and{' '}
            <a href="/privacy" className="underline hover:text-primary">
              Privacy Policy
            </a>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}

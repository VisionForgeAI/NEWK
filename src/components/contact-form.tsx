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
            {type === 'demo' ? 'Start Your Free Trial' : 'Get in Touch'}
          </DialogTitle>
          <DialogDescription>
            {type === 'demo'
              ? "Experience the power of AI firsthand. No credit card required."
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
            {loading ? 'Sending...' : type === 'demo' ? 'Start Free Trial' : 'Send Message'}
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
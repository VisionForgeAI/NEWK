import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { sendWebhook } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const LeadForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      company: formData.get('company'),
      size: formData.get('size'),
      newsletter: formData.get('newsletter') === 'on',
      type: 'assessment',
      source: window.location.pathname
    };

    try {
      const success = await sendWebhook(data);

      if (!success) throw new Error('Failed to submit');

      toast({
        title: 'Success! 🎉',
        description: "Your free assessment request has been received. We'll reach out within 24 hours!",
      });

      e.currentTarget.reset();
    } catch (error) {
      toast({
        title: 'Submission Failed',
        description: 'Please try again or contact us directly.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-accent/5">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Get Your Free AI Assessment
              </h2>
              <p className="text-lg text-muted-foreground">
                Discover how AI can transform your business. Limited time offer: 
                Get a free consultation worth $500!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input name="firstName" placeholder="First Name" required disabled={loading} />
                </div>
                <div>
                  <Input name="lastName" placeholder="Last Name" required disabled={loading} />
                </div>
              </div>

              <div>
                <Input 
                  type="email" 
                  name="email" 
                  placeholder="Work Email" 
                  required 
                  disabled={loading}
                />
              </div>

              <div>
                <Input 
                  name="company" 
                  placeholder="Company Name" 
                  required 
                  disabled={loading}
                />
              </div>

              <div>
                <Select name="size" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Company Size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10 employees</SelectItem>
                    <SelectItem value="11-50">11-50 employees</SelectItem>
                    <SelectItem value="51-200">51-200 employees</SelectItem>
                    <SelectItem value="201-500">201-500 employees</SelectItem>
                    <SelectItem value="501+">501+ employees</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="newsletter" name="newsletter" />
                <label
                  htmlFor="newsletter"
                  className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Keep me updated about AI innovations and tips (optional)
                </label>
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? 'Submitting...' : 'Get Free Assessment'}
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
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
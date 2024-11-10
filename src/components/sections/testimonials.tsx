import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      "VisionForge's AI solutions transformed our supply chain efficiency by 40%. Their expertise and innovative approach exceeded our expectations.",
    author: 'Jennifer Lee',
    position: 'COO',
    company: 'Global Logistics Inc.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
  },
  {
    quote:
      'The predictive analytics platform they built has become integral to our decision-making process. Outstanding results and professional team.',
    author: 'Marcus Chen',
    position: 'CTO',
    company: 'TechVision Corp',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
  },
  {
    quote:
      'Working with VisionForge has been transformative. Their AI security solutions have strengthened our infrastructure significantly.',
    author: 'Sarah Williams',
    position: 'Head of IT',
    company: 'SecureNet Solutions',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-accent/5">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our clients about how VisionForge AI has transformed their
            businesses through innovative AI solutions.
          </p>
        </div>

        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="p-8 md:p-12">
                  <Quote className="w-12 h-12 text-primary/20 mb-6" />
                  <blockquote className="text-xl md:text-2xl font-medium mb-8">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.position} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
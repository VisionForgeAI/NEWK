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
      "VisionForge’s automation solutions streamlined our QHSE processes, reducing our administrative workload significantly. Their expertise allowed us to focus on delivering value while maintaining top compliance standards. With VisionForge, we’re now operating more efficiently than ever.",
    author: 'David Ukeje',
    position: 'COO',
    company: 'Qesh Standard Limited',
  },
  {
    quote:
      "VisionForge AI Automations has transformed our project efficiency, enabling us to complete builds faster and within budget. Their solutions make scheduling and inventory tracking seamless, saving us time and resources. VisionForge is essential to our project success.",
    author: 'Prince Ademuyiwa',
    position: 'CEO',
    company: 'Sky Express',
  },

  // {
  //   quote:
  //     'Working with VisionForge has been transformative. Their AI security solutions have strengthened our infrastructure significantly.',
  //   author: 'Sarah Williams',
  //   position: 'Head of IT',
  //   company: 'SecureNet Solutions',
  // },
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
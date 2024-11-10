import { Card } from '@/components/ui/card';
import {
  Linkedin,
  Twitter,
  Mail,
} from 'lucide-react';

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief AI Officer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    bio: 'PhD in Machine Learning with 15+ years of experience in AI development.',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Innovation',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    bio: 'Pioneer in implementing AI solutions across Fortune 500 companies.',
  },
  {
    name: 'Emily Thompson',
    role: 'Lead Data Scientist',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
    bio: 'Expert in predictive modeling and large-scale data analysis.',
  },
  {
    name: 'David Park',
    role: 'AI Research Director',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=400',
    bio: 'Leading research in neural networks and deep learning applications.',
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet our team of AI experts, researchers, and innovators dedicated to
            transforming businesses through artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
                    <a href="#" className="p-2 bg-background/20 backdrop-blur-sm rounded-full hover:bg-background/40 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 bg-background/20 backdrop-blur-sm rounded-full hover:bg-background/40 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 bg-background/20 backdrop-blur-sm rounded-full hover:bg-background/40 transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary/80 text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
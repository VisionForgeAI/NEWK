import { Card } from '@/components/ui/card';
import { Github, Twitter, Linkedin } from 'lucide-react';

const TeamMember = ({ 
  name, 
  role, 
  image, 
  bio,
  social 
}: { 
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
}) => (
  <Card className="overflow-hidden group">
    <div className="aspect-square relative overflow-hidden">
      <img
        src={image}
        alt={name}
        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
          {social.github && (
            <a href={social.github} className="p-2 bg-background/20 backdrop-blur-sm rounded-full hover:bg-background/40 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          )}
          {social.twitter && (
            <a href={social.twitter} className="p-2 bg-background/20 backdrop-blur-sm rounded-full hover:bg-background/40 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          )}
          {social.linkedin && (
            <a href={social.linkedin} className="p-2 bg-background/20 backdrop-blur-sm rounded-full hover:bg-background/40 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-primary mb-3">{role}</p>
      <p className="text-muted-foreground text-sm">{bio}</p>
    </div>
  </Card>
);

const Team = () => {
  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
      bio: 'PhD in Machine Learning with 15+ years of experience in AI development.',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Innovation',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
      bio: 'Pioneer in implementing AI solutions across Fortune 500 companies.',
      social: {
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Emily Thompson',
      role: 'Lead Data Scientist',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
      bio: 'Expert in predictive modeling and large-scale data analysis.',
      social: {
        github: '#',
        linkedin: '#'
      }
    },
    {
      name: 'David Park',
      role: 'AI Research Director',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=400',
      bio: 'Leading research in neural networks and deep learning applications.',
      social: {
        twitter: '#',
        github: '#',
        linkedin: '#'
      }
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Our <span className="text-primary">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet our team of AI experts, researchers, and innovators dedicated to
            transforming businesses through artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
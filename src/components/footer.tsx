import { Link } from 'react-router-dom';
import { Bot, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-primary/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Bot className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">VisionForge</span>
            </Link>
            <p className="text-muted-foreground">
              Transforming businesses through innovative AI solutions and cutting-edge automation.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/visionforge-ai" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/visionforge_ai" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/visionforge-ai" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/process" className="text-muted-foreground hover:text-primary">
                  Process
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-muted-foreground hover:text-primary">
                  Work
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                contact@visionforge.ai
              </li>
              <li className="text-muted-foreground">
                +1 (555) 123-4567
              </li>
              <li className="text-muted-foreground">
                123 AI Valley, San Francisco, CA 94105
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/10 mt-12 pt-8 text-center text-muted-foreground">
          <p>© 2024 VisionForge AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Link } from 'react-router-dom';
import { Bot,  Linkedin, ArrowUp } from 'lucide-react';

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
              <a href="https://www.linkedin.com/company/visionforge-ai-automations/?viewAsMember=true" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
              {/* Link to the top of the home page */}
              <a href="#top" className="text-muted-foreground hover:text-primary">
                <ArrowUp className="h-5 w-5" />
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
                dina@visionforgeai.com.ng
              </li>
              <li className="text-muted-foreground">
                +234 8089-455951
              </li>
              <li className="text-muted-foreground">
                Block 3 Pearly Gate Lekki, Lagos, Nigeria
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

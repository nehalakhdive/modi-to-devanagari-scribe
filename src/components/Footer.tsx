import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Mail, Book, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              ModiScript Translation
            </h3>
            <p className="text-muted-foreground mb-4">
              Preserving Marathi literary heritage through intelligent script translation technology.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Modi Script Guide</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Devanagari Reference</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Historical Documents</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Research Papers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Contribute</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Feedback</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-primary" /> for preserving cultural heritage
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 ModiScript Translation. Open source project.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
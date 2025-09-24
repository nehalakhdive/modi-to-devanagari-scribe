import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              ModiScript
            </h1>
            <span className="text-muted-foreground">→</span>
            <span className="text-accent font-semibold">देवनागरी</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#translator" className="text-foreground hover:text-primary transition-colors">
              Translator
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About Scripts
            </a>
            <a href="#history" className="text-foreground hover:text-primary transition-colors">
              History
            </a>
          </nav>

          <Button variant="hero" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
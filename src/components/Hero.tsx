import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-scripts.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-background/10"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-primary">Modi Script</span>
              <br />
              <span className="text-foreground">to</span>
              <br />
              <span className="text-accent">देवनागरी</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Bridging centuries of Marathi literary heritage through intelligent script translation. 
              Transform historical Modi manuscripts into readable Devanagari text.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Start Translating
              </Button>
              <Button variant="scholar" size="lg" className="text-lg px-8 py-4">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 shadow-glow">
              <img 
                src={heroImage} 
                alt="Modi script transitioning to Devanagari script on ancient manuscript"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Historical Modi manuscript with modern Devanagari translation
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Scroll, Archive, Lightbulb } from "lucide-react";

const HistorySection = () => {
  const timelineEvents = [
    {
      period: "13th Century",
      title: "Origins of Modi Script",
      description: "Modi script emerges as a cursive variant of Devanagari, optimized for administrative use in the Yadava kingdom.",
      icon: Scroll
    },
    {
      period: "17th-18th Century",
      title: "Maratha Empire Era",
      description: "Modi becomes the official script of Maratha administration. Extensive use in royal correspondence and record-keeping.",
      icon: Archive
    },
    {
      period: "19th Century",
      title: "British Colonial Period",
      description: "Gradual decline as British administration favors English and standardized Devanagari. Many Modi documents archived.",
      icon: Clock
    },
    {
      period: "Present Day",
      title: "Digital Revival",
      description: "Modern technology enables digitization and translation of historical Modi manuscripts for research and preservation.",
      icon: Lightbulb
    }
  ];

  return (
    <section id="history" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Historical Journey</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trace the evolution from Modi script to modern Devanagari and understand 
            the importance of preserving this linguistic heritage through technology.
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {timelineEvents.map((event, index) => {
            const IconComponent = event.icon;
            return (
              <Card key={index} className="bg-card/80 backdrop-blur-sm border border-border/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-primary"></div>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <CardDescription className="text-primary font-semibold">
                        {event.period}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Card className="bg-gradient-hero/10 border border-primary/20 p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Why Translation Matters</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Thousands of historical documents in Modi script contain invaluable information about 
              Marathi culture, administration, literature, and daily life. By making these texts 
              accessible through Devanagari translation, we preserve knowledge for future generations 
              and enable new research possibilities.
            </p>
            <Button variant="hero" size="lg">
              Explore Digital Archives
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
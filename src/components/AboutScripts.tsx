import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar, MapPin, Users } from "lucide-react";

const AboutScripts = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Understanding the Scripts</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the rich history and characteristics of both Modi and Devanagari scripts, 
            and understand why translation between them is so important for preserving cultural heritage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-gradient-primary/5 border border-primary/20 shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                  म
                </span>
                Modi Script (मोदी)
              </CardTitle>
              <CardDescription className="text-base">
                The historical script of Maharashtra and Karnataka
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm">13th-20th Century</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm">Maharashtra</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm">Administrative</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="text-sm">Literary</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold">Key Characteristics:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Cursive writing style with connected characters</li>
                  <li>• Optimized for quick writing with pen and ink</li>
                  <li>• Used extensively in Maratha administration</li>
                  <li>• Contains thousands of historical documents</li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Historical</Badge>
                <Badge variant="secondary">Cursive</Badge>
                <Badge variant="secondary">Administrative</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-secondary/5 border border-accent/20 shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <span className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-sm font-bold">
                  दे
                </span>
                Devanagari Script (देवनागरी)
              </CardTitle>
              <CardDescription className="text-base">
                The modern standard script for Hindi, Sanskrit, and Marathi
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-accent" />
                  <span className="text-sm">7th Century-Present</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-sm">Pan-Indian</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-accent" />
                  <span className="text-sm">900M+ Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-accent" />
                  <span className="text-sm">Modern Standard</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold">Key Characteristics:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Clear block letters with horizontal top line</li>
                  <li>• Standardized character forms</li>
                  <li>• Used in modern Indian languages</li>
                  <li>• Digital-friendly and widely supported</li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Modern</Badge>
                <Badge variant="secondary">Standard</Badge>
                <Badge variant="secondary">Digital</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutScripts;
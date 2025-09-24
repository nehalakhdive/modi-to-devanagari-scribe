import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Copy, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TranslatorDemo = () => {
  const [modiText, setModiText] = useState("");
  const [devanagariText, setDevanagariText] = useState("");
  const { toast } = useToast();

  const handleTranslate = () => {
    // Demo functionality - in real app this would call an API
    if (modiText.trim()) {
      setDevanagariText("यह एक उदाहरण अनुवाद है। वास्तविक मोदी लिपि का अनुवाद यहाँ दिखाया जाएगा।");
      toast({
        title: "Translation Complete",
        description: "Modi script has been translated to Devanagari.",
      });
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(devanagariText);
    toast({
      title: "Copied!",
      description: "Devanagari text copied to clipboard.",
    });
  };

  return (
    <section id="translator" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Interactive Translator</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the power of Modi to Devanagari translation. Upload images or type Modi text to see instant results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="bg-card/80 backdrop-blur-sm border border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="w-3 h-3 bg-primary rounded-full"></span>
                Modi Script Input
              </CardTitle>
              <CardDescription>
                Type or paste Modi script text, or upload an image
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Enter Modi script text here..."
                value={modiText}
                onChange={(e) => setModiText(e.target.value)}
                className="min-h-32 font-mono bg-background/50"
              />
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Upload className="w-4 h-4" />
                  Upload Image
                </Button>
                <Button 
                  variant="hero" 
                  size="sm" 
                  onClick={handleTranslate}
                  disabled={!modiText.trim()}
                  className="flex items-center gap-2"
                >
                  Translate
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="w-3 h-3 bg-accent rounded-full"></span>
                Devanagari Output
              </CardTitle>
              <CardDescription>
                Translated text in Devanagari script
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Devanagari translation will appear here..."
                value={devanagariText}
                readOnly
                className="min-h-32 bg-secondary/30 font-mono text-lg"
              />
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleCopy}
                  disabled={!devanagariText}
                  className="flex items-center gap-2"
                >
                  <Copy className="w-4 h-4" />
                  Copy Text
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TranslatorDemo;
import Hero from "@/components/Hero";
import TranslatorDemo from "@/components/TranslatorDemo";
import AboutScripts from "@/components/AboutScripts";
import HistorySection from "@/components/HistorySection";

const Index = () => {
  return (
    <div className="pt-20">
      <Hero />
      <TranslatorDemo />
      <AboutScripts />
      <HistorySection />
    </div>
  );
};

export default Index;

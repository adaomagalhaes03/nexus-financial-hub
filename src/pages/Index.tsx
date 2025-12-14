import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Consultancies } from "@/components/sections/Consultancies";
import { Plans } from "@/components/sections/Plans";
import { Team } from "@/components/sections/Team";
import { Stats } from "@/components/sections/Stats";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Consultancies />
        <Stats />
        <Plans />
        <Team />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

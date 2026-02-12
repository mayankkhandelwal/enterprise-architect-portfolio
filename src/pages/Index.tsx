import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatISolve from "@/components/WhatISolve";
import FeaturedProjects from "@/components/FeaturedProjects";
import ArchitectureApproach from "@/components/ArchitectureApproach";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <WhatISolve />
      <FeaturedProjects />
      <ArchitectureApproach />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

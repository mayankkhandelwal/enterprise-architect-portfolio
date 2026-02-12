import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground font-mono mb-8">
            <span className="w-2 h-2 rounded-full bg-metric animate-pulse" />
            Available for consulting
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6 fade-up fade-up-delay-1">
          Enterprise Data
          <br />
          <span className="text-gradient glow-text">Platform Architect</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 fade-up fade-up-delay-2 leading-relaxed">
          I design and build <span className="text-foreground font-medium">scalable data platforms</span> that 
          transform how enterprises collect, process, and leverage their data assets.
        </p>

        <p className="text-sm text-muted-foreground font-mono mb-10 fade-up fade-up-delay-3">
          15+ years · Fortune 500 · Petabyte-scale systems
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-up fade-up-delay-4">
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-border bg-secondary/30 text-foreground font-medium hover:bg-secondary/60 transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
        <ArrowDown className="w-5 h-5" />
      </div>
    </section>
  );
};

export default Hero;

import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative max-w-3xl mx-auto text-center">
        <p className="text-sm font-mono text-primary mb-3 tracking-wider uppercase">Connect</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Let's Build Something</h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
          Whether you're modernizing a legacy platform or building from scratch — I'd love to hear about your data challenges.
        </p>

        <a
          href="mailto:hello@dataarchitect.dev"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 mb-10"
        >
          <Mail className="w-4 h-4" />
          hello@dataarchitect.dev
        </a>

        <div className="flex items-center justify-center gap-6 text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-primary transition-colors" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

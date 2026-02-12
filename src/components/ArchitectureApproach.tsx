const steps = [
  {
    number: "01",
    title: "Discover & Assess",
    description: "Deep-dive into existing data landscape, pain points, and business objectives. Map data flows, identify bottlenecks, and define success metrics.",
  },
  {
    number: "02",
    title: "Design & Blueprint",
    description: "Craft a target-state architecture with phased migration roadmap. Technology selection, cost modeling, and governance framework design.",
  },
  {
    number: "03",
    title: "Build & Iterate",
    description: "Implement in agile sprints with continuous validation. Infrastructure-as-code, CI/CD pipelines, and automated testing from day one.",
  },
  {
    number: "04",
    title: "Operationalize & Scale",
    description: "Production hardening, observability setup, team enablement, and runbooks. Built to scale with the business, not against it.",
  },
];

const ArchitectureApproach = () => {
  return (
    <section id="approach" className="py-24 px-6 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-mono text-primary mb-3 tracking-wider uppercase">Process</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Architecture Approach</h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            A battle-tested methodology refined over 50+ enterprise engagements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300"
            >
              <span className="text-5xl font-bold font-mono text-primary/15 absolute top-4 right-4">
                {step.number}
              </span>
              <div className="relative">
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureApproach;

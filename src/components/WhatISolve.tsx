import { Database, Zap, Shield, LineChart } from "lucide-react";

const problems = [
  {
    icon: Database,
    title: "Data Silos",
    description: "Fragmented data across dozens of systems blocking unified analytics and decision-making.",
  },
  {
    icon: Zap,
    title: "Scalability Bottlenecks",
    description: "Legacy architectures that crumble under growing data volumes and real-time requirements.",
  },
  {
    icon: Shield,
    title: "Governance Gaps",
    description: "Missing data quality, lineage tracking, and compliance controls that expose the business to risk.",
  },
  {
    icon: LineChart,
    title: "Slow Time-to-Insight",
    description: "Weeks-long ETL cycles and manual processes that delay critical business intelligence.",
  },
];

const WhatISolve = () => {
  return (
    <section id="solve" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-mono text-primary mb-3 tracking-wider uppercase">The Problem</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">What I Solve</h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Enterprise data challenges that keep CTOs up at night — and the architectural solutions that fix them for good.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className={`group relative p-6 rounded-xl border border-border bg-card hover:bg-secondary/40 transition-all duration-300 glow-border fade-up fade-up-delay-${i + 1}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  <p.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatISolve;

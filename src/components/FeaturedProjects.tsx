import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Global Retail Data Lakehouse",
    client: "Fortune 100 Retailer",
    description: "Unified 12 regional data warehouses into a single Lakehouse architecture on Databricks + Delta Lake, enabling cross-market analytics.",
    metrics: [
      { value: "4.2PB", label: "Data Unified" },
      { value: "73%", label: "Cost Reduction" },
      { value: "12→1", label: "Platforms Consolidated" },
    ],
    tags: ["Databricks", "Delta Lake", "Terraform", "Kafka"],
  },
  {
    title: "Real-Time Fraud Detection Pipeline",
    client: "Top 10 US Bank",
    description: "Designed a streaming architecture processing 2M+ events/sec with sub-200ms latency for real-time fraud scoring.",
    metrics: [
      { value: "2M+", label: "Events/Second" },
      { value: "<200ms", label: "P99 Latency" },
      { value: "40%", label: "Fraud Caught ↑" },
    ],
    tags: ["Apache Flink", "Kafka", "Kubernetes", "Python"],
  },
  {
    title: "Enterprise Data Mesh Implementation",
    client: "Global Pharma Company",
    description: "Led the organizational and technical transformation to a data mesh architecture across 8 business domains.",
    metrics: [
      { value: "8", label: "Domains Onboarded" },
      { value: "60%", label: "Faster Delivery" },
      { value: "200+", label: "Data Products" },
    ],
    tags: ["Snowflake", "dbt", "Airflow", "DataHub"],
  },
];

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-mono text-primary mb-3 tracking-wider uppercase">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Enterprise-scale data platform initiatives with measurable business impact.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all duration-300 glow-border"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <p className="text-xs font-mono text-primary mb-2">{project.client}</p>
                    <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors flex items-center gap-2">
                      {project.title}
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 max-w-2xl leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-2xl md:text-3xl font-bold font-mono text-metric">
                        {m.value}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1 font-mono uppercase tracking-wider">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

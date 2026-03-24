import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Enterprise Analytics Platform — Caterpillar USA",
    client: "Caterpillar USA · Service Distribution & Digital (SD&D)",
    description: "Owned end-to-end analytics platform architecture supporting 5 business programs (PEP, DEP, MSEP, REP, SEP). Designed SnapLogic pipelines from MySQL, MS SQL Server, Snowflake cross-region (East-1→East-2), and flat files into a unified Snowflake platform. Built Snowflake database from scratch with multi-layered view architecture as the semantic layer for all BI workloads.",
    metrics: [
      { value: "35%", label: "Cost Reduction" },
      { value: "400+", label: "Users Governed" },
      { value: "5", label: "Programs Unified" },
    ],
    tags: ["Snowflake", "SnapLogic", "Power BI", "Databricks", "PySpark"],
  },
  {
    title: "Dynamic RLS & Power BI App — Dealer Analytics",
    client: "Caterpillar USA · SD&D",
    description: "Designed dynamic Row-Level Security (RLS) using GSI Data Lake views and CWS ID-based group access. Built and published a Power BI App with role-secured workspaces for 256 internal CAT users and 183 external dealer partners — zero dataset duplication, fully compliant with least-privilege principles.",
    metrics: [
      { value: "256", label: "Internal Users" },
      { value: "183", label: "Dealer Partners" },
      { value: "0", label: "Dataset Duplications" },
    ],
    tags: ["Power BI", "Row-Level Security", "Snowflake", "GSI Data Lake"],
  },
  {
    title: "Enterprise Data Warehouse — Marathon Insurance",
    client: "Marathon Insurance · Jamaica",
    description: "Architected centralized enterprise data warehouse consolidating multi-source operational systems (Epic SQL, Vision SQL, Freshdesk) using Azure Data Factory and Snowflake. Implemented enterprise-wide RLS governance supporting 500+ users across insurance operations.",
    metrics: [
      { value: "500+", label: "Users Supported" },
      { value: "95%", label: "Access Incidents ↓" },
      { value: "20%", label: "Report Latency ↓" },
    ],
    tags: ["Snowflake", "Azure Data Factory", "Power BI", "RLS"],
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

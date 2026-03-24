const categories = [
  {
    name: "Data Engineering",
    items: ["SnapLogic", "PySpark", "Delta Lake", "Medallion Architecture", "Auto Loader"],
  },
  {
    name: "Storage & Compute",
    items: ["Snowflake", "Databricks", "Microsoft Fabric", "Azure"],
  },
  {
    name: "Business Intelligence",
    items: ["Power BI", "DAX", "Power Query (M)", "Tableau", "Power BI Embedded"],
  },
  {
    name: "Source Systems",
    items: ["MySQL", "MS SQL Server", "Flat Files (CSV/Excel)", "Snowflake Cross-Region"],
  },
  {
    name: "Governance & Security",
    items: ["Row-Level Security (RLS)", "Unity Catalog", "GSI Data Lake", "OLS", "Azure AD"],
  },
  {
    name: "Delivery",
    items: ["Azure DevOps", "CI/CD", "Agile/Scrum", "Git", "Star Schema"],
  },
];

const TechStack = () => {
  return (
    <section id="stack" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-mono text-primary mb-3 tracking-wider uppercase">Tools</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Technical Stack</h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Enterprise-grade expertise across the modern data platform ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="p-6 rounded-xl border border-border bg-card"
            >
              <h3 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-md bg-secondary text-secondary-foreground hover:bg-surface-hover transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

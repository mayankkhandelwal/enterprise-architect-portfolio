const categories = [
  {
    name: "Data Processing",
    items: ["Apache Spark", "Apache Flink", "dbt", "Apache Beam"],
  },
  {
    name: "Storage & Compute",
    items: ["Snowflake", "Databricks", "BigQuery", "Redshift"],
  },
  {
    name: "Streaming",
    items: ["Apache Kafka", "Confluent", "Kinesis", "Pulsar"],
  },
  {
    name: "Orchestration",
    items: ["Airflow", "Dagster", "Prefect", "Step Functions"],
  },
  {
    name: "Infrastructure",
    items: ["Terraform", "Kubernetes", "Docker", "AWS/GCP/Azure"],
  },
  {
    name: "Governance",
    items: ["DataHub", "Unity Catalog", "Apache Atlas", "Great Expectations"],
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
            Platform-agnostic expertise across the modern data ecosystem.
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

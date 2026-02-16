import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

interface SkillGroup {
  category: string;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    items: ["Python", "SQL", "R", "TypeScript", "Java", "Bash"],
  },
  {
    category: "Data & ML Techniques",
    items: [
      "Supervised & Unsupervised Learning",
      "Deep Learning (CNNs, RNNs, Transformers)",
      "NLP & Text Mining",
      "Time Series Forecasting",
      "Feature Engineering",
      "A/B Testing & Experimentation",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "BigQuery", "Snowflake", "Elasticsearch"],
  },
  {
    category: "Tools & Platforms",
    items: [
      "Docker",
      "Git",
      "Apache Kafka",
      "Apache Airflow",
      "AWS (S3, SageMaker, Lambda)",
      "MLflow",
      "dbt",
    ],
  },
  {
    category: "Visualisation & BI",
    items: ["Matplotlib", "Seaborn", "Plotly", "D3.js", "Tableau", "Looker", "Streamlit"],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "Scikit-learn",
      "PyTorch",
      "TensorFlow",
      "Hugging Face",
      "Pandas",
      "PySpark",
      "FastAPI",
      "Flask",
    ],
  },
];

const Skills = () => (
  <div className="pt-24 section-padding">
    <div className="container mx-auto max-w-4xl">
      <SectionHeading
        title="Skills"
        subtitle="Tools, technologies, and techniques I work with regularly."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass-card rounded-xl p-6"
          >
            <h3 className="font-semibold text-foreground mb-4">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-sm rounded-lg bg-primary/8 text-foreground/80 font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Skills;

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const About = () => (
  <div className="pt-24 section-padding">
    <div className="container mx-auto max-w-3xl">
      <SectionHeading
        title="About Me"
        subtitle="Context on who I am and how I approach problems."
      />

      <div className="space-y-6 text-foreground/90 leading-relaxed">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          I'm a graduate-level Data Scientist currently completing my MSc in Data Science,
          with a strong foundation in statistics, machine learning, and software engineering.
          My work focuses on building practical, end-to-end data solutions — from raw data
          ingestion to deployed, production-ready models.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          I'm drawn to problems where data can directly reduce uncertainty and improve decisions:
          demand forecasting, anomaly detection, recommendation systems, and NLP. I enjoy
          the full lifecycle — understanding the business context, engineering features that
          matter, selecting appropriate methods, and communicating results clearly.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          I care about building things that work reliably at scale, not just in notebooks.
          That means writing clean code, designing reproducible pipelines, and thinking
          carefully about trade-offs between accuracy, latency, interpretability, and
          maintenance cost.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card rounded-xl p-6 mt-8"
        >
          <h3 className="font-semibold text-foreground mb-3">Core Interests</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Machine Learning",
              "NLP",
              "Time Series",
              "Data Engineering",
              "MLOps",
              "Statistical Modelling",
              "Causal Inference",
              "Data Visualisation",
            ].map((interest) => (
              <span
                key={interest}
                className="px-3 py-1.5 text-sm rounded-lg bg-primary/10 text-primary font-medium"
              >
                {interest}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

export default About;

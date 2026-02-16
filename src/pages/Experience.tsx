import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Briefcase, GraduationCap } from "lucide-react";

interface ExperienceItem {
  type: "work" | "education";
  title: string;
  org: string;
  period: string;
  bullets: string[];
}

const experiences: ExperienceItem[] = [
  {
    type: "work",
    title: "Software Engineering Trainee, Data Analytics & Systems",
    org: "Mphasis",
    period: "Dec 2024 – May 2025",
    bullets: [
      "Maintained and extended Python analytics modules used for automated reporting, alerts, and decision support across enterprise teams",
      "Designed and optimised SQL Server databases, improving query performance and supporting reliable day-to-day operations",
      "Built statistical baselines and ML models (including XGBoost) to analyse trends, anomalies, and risk signals across 500k+ records",
      "Automated pipeline validation checks that improved data consistency and reduced reporting turnaround time by 70%",
    ],
  },
  {
    type: "work",
    title: "Python Development Intern, Data Science",
    org: "IG Drones",
    period: "Jul 2024 – Oct 2024",
    bullets: [
      "Built and maintained Python pipelines for large-scale video and sensor data used in real-time monitoring workflows",
      "Created automated data labelling and feature extraction steps, increasing modelling throughput by 33%",
      "Ran statistical performance analysis and optimisation, reducing operational inefficiencies by 38%",
      "Containerised end-to-end pipelines to improve reproducibility and deployment reliability",
    ],
  },
  {
    type: "education",
    title: "MSc Data Science",
    org: "University of Southampton, UK",
    period: "Expected Sep 2026",
    bullets: [
      "Coursework includes machine learning, data mining, statistical methods, and applied data engineering",
      "Focused on building end-to-end projects with clear evaluation and communication",
    ],
  },
  {
    type: "education",
    title: "BSc Computer Science & Mathematics",
    org: "St. Joseph’s University, India",
    period: "Jun 2021 – Jun 2024",
    bullets: ["Graduated with First-class standing (GPA: 3.8/4.0)"],
  },
];

const icon = (type: ExperienceItem["type"]) =>
  type === "work" ? <Briefcase className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />;

const Experience = () => (
  <div className="pt-24 section-padding">
    <div className="container mx-auto max-w-3xl">
      <SectionHeading title="Experience" subtitle="What I&apos;ve worked on, and what I&apos;ve learned along the way." />

      <div className="mt-10 space-y-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={`${exp.org}-${exp.title}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.06 }}
            className="glass-card rounded-xl p-6"
          >
            <div className="flex items-start gap-3">
              <div className="mt-1 text-primary">{icon(exp.type)}</div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{exp.org}</p>

                <ul className="mt-4 space-y-2 list-disc pl-5 text-muted-foreground">
                  {exp.bullets.map((b) => (
                    <li key={b} className="leading-relaxed">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Experience;

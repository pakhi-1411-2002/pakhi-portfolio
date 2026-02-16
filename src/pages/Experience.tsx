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
    title: "Data Science Intern",
    org: "TechCorp Analytics",
    period: "Jun 2025 – Sep 2025",
    bullets: [
      "Built a customer churn prediction pipeline achieving 92% accuracy, enabling proactive retention strategies",
      "Designed and deployed a real-time dashboard monitoring KPIs across 12 product lines",
      "Collaborated with product and engineering teams to integrate ML models into existing data infrastructure",
    ],
  },
  {
    type: "work",
    title: "Research Assistant — NLP Lab",
    org: "University of Southampton",
    period: "Jan 2025 – May 2025",
    bullets: [
      "Fine-tuned multilingual transformer models for sentiment classification across 5 languages",
      "Published internal report on transfer learning strategies for low-resource language tasks",
      "Processed and cleaned 1.2M+ text records using custom preprocessing pipelines",
    ],
  },
  {
    type: "education",
    title: "MSc Data Science",
    org: "University of Southampton",
    period: "Sep 2024 – Sep 2025",
    bullets: [
      "Modules: Machine Learning, Deep Learning, NLP, Statistical Methods, Big Data Processing",
      "Dissertation: Hybrid recommendation systems with cold-start handling",
    ],
  },
  {
    type: "education",
    title: "BSc Computer Science",
    org: "University of Leeds",
    period: "Sep 2021 – Jun 2024",
    bullets: [
      "First Class Honours",
      "Final year project: Real-time anomaly detection in streaming data",
      "Relevant modules: Databases, Algorithms, Probability & Statistics, Software Engineering",
    ],
  },
];

const Experience = () => (
  <div className="pt-24 section-padding">
    <div className="container mx-auto max-w-3xl">
      <SectionHeading
        title="Experience"
        subtitle="Professional and academic experience shaping my data science practice."
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-5 top-2 bottom-2 w-px bg-border hidden md:block" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative md:pl-14"
            >
              {/* Icon */}
              <div className="hidden md:flex absolute left-0 top-1 w-10 h-10 rounded-full bg-primary/10 items-center justify-center">
                {exp.type === "work" ? (
                  <Briefcase className="w-4 h-4 text-primary" />
                ) : (
                  <GraduationCap className="w-4 h-4 text-primary" />
                )}
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-sm text-primary font-medium">{exp.org}</p>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Experience;

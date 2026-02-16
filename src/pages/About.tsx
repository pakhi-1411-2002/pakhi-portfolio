import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Github, Linkedin } from "lucide-react";

const About = () => (
  <div className="pt-24 section-padding">
    <div className="container mx-auto max-w-3xl">
      <SectionHeading title="About Me" subtitle="A quick snapshot of who I am and how I work." />

      <div className="space-y-6 text-foreground/90 leading-relaxed">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          I&apos;m Pakhi Tyagi, an MSc Data Science student at the University of Southampton with a background in Computer Science
          and Mathematics.
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          I enjoy work that turns messy data into something people can actually use, reliable pipelines, clear analysis, and models
          that help teams make decisions with less guesswork. In industry roles, I&apos;ve maintained Python analytics modules,
          optimised SQL Server workflows, and added automated validation that improved data quality and reduced reporting turnaround
          time.
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          Right now I&apos;m focused on building end-to-end, recruiter-friendly projects that show how I think, build, and communicate
          results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="pt-2 flex flex-wrap gap-3"
        >
          <a
            href="https://linkedin.com/in/pakhi-tyagi-0ba27b230"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/pakhi-1411-2002"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </motion.div>
      </div>
    </div>
  </div>
);

export default About;

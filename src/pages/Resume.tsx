import { Download } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const Resume = () => (
  <div className="pt-24 section-padding">
    <div className="container mx-auto max-w-3xl text-center">
      <SectionHeading title="Resume" subtitle="Download my CV for a complete overview." />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card rounded-xl p-10"
      >
        <p className="text-muted-foreground mb-6">
          My CV includes full details of my education, experience, projects, and technical
          skills in an ATS-friendly format.
        </p>
        <a
          href="/cv.pdf"
          download
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
        >
          <Download className="w-5 h-5" />
          Download CV (PDF)
        </a>
      </motion.div>
    </div>
  </div>
);

export default Resume;

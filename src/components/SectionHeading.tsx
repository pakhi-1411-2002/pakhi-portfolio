import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className="mb-12"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
    {subtitle && (
      <p className="mt-3 text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
    )}
    <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
  </motion.div>
);

export default SectionHeading;

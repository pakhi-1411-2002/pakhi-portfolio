import { Link } from "react-router-dom";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 hero-gradient opacity-80" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary-foreground/70 text-sm font-medium tracking-widest uppercase mb-4">
              MSc Data Science · Seeking Opportunities
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight max-w-4xl mx-auto">
              Turning Complex Data
              <br />
              Into Clear Decisions
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Data Scientist building end-to-end pipelines, predictive models, and analytics
              solutions that drive measurable business impact.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90 transition-colors"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* Quick stats */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { value: "6+", label: "Projects Completed" },
              { value: "92%", label: "Best Model Accuracy" },
              { value: "5", label: "Languages (NLP)" },
              { value: "£2.1M", label: "Estimated Savings" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects CTA */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Featured Work
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              End-to-end data science projects demonstrating real-world problem solving,
              from data pipelines to deployed models.
            </p>
            <Link
              to="/projects"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              Explore All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

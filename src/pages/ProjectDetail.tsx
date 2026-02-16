import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="pt-24 section-padding text-center">
        <p className="text-muted-foreground">Project not found.</p>
        <Link to="/projects" className="text-primary underline mt-4 inline-block">
          Back to Projects
        </Link>
      </div>
    );
  }

  const sections = [
    { title: "Problem", content: project.problem },
    { title: "Dataset", content: project.dataset },
    { title: "Approach", content: project.approach },
    { title: "Trade-offs & Constraints", content: project.tradeoffs },
    { title: "Results & Impact", content: project.results },
    { title: "Future Improvements", content: project.improvements },
  ];

  return (
    <div className="pt-24 section-padding">
      <div className="container mx-auto max-w-3xl">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          All Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {project.featured && (
            <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold rounded-full bg-accent/20 text-accent-foreground">
              Featured Project
            </span>
          )}
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">{project.title}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{project.shortDescription}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </motion.div>

        
        {/* Project images */}
        {project.images && project.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-10 space-y-4"
          >
            <h3 className="text-lg font-semibold text-foreground">Project visuals</h3>
            <div className="grid gap-4">
              {project.images.map((src, idx) => (
                <div key={`${src}-${idx}`} className="glass-card rounded-xl overflow-hidden">
                  <img
                    src={src}
                    alt={`${project.title} visual ${idx + 1}`}
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}
{/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-10 glass-card rounded-xl p-6"
        >
          <h3 className="font-semibold text-foreground mb-3">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span key={t} className="px-3 py-1 text-sm rounded-lg bg-primary/10 text-primary font-medium">
                {t}
              </span>
            ))}
          </div>
          <h3 className="font-semibold text-foreground mt-5 mb-3">Methods</h3>
          <div className="flex flex-wrap gap-2">
            {project.methods.map((m) => (
              <span key={m} className="px-3 py-1 text-sm rounded-lg bg-muted text-muted-foreground font-medium">
                {m}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Content sections */}
        <div className="mt-10 space-y-8">
          {sections.map((sec, i) => (
            <motion.div
              key={sec.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.05 }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">{sec.title}</h3>
              <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {sec.content}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

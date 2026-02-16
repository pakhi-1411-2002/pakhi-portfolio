import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Link
      to={`/projects/${project.id}`}
      className="group block glass-card rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      {/* Color bar */}
      <div className={`h-1.5 ${project.featured ? "bg-accent" : "bg-primary"}`} />

      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            {project.featured && (
              <span className="inline-block mb-2 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-accent/20 text-accent-foreground">
                Featured
              </span>
            )}
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {project.shortDescription}
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mt-1 flex-shrink-0" />
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs font-medium rounded-md bg-primary/10 text-primary"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-muted text-muted-foreground">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </Link>
  </motion.div>
);

export default ProjectCard;

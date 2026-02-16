import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => (
  <div className="pt-24 section-padding">
    <div className="container mx-auto max-w-5xl">
      <SectionHeading
        title="Projects"
        subtitle="End-to-end data science work — from problem framing to deployed solutions."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </div>
  </div>
);

export default Projects;

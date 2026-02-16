import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
  const featured = projects[0];

  return (
    <div className="pt-24 section-padding">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading title="Projects" subtitle="Selected work, with full write-ups and links." />

        <div className="grid md:grid-cols-2 gap-6">
          {featured && <ProjectCard project={featured} index={0} />}

          {/*
            To show more projects again, replace the block above with:
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          */}
        </div>
      </div>
    </div>
  );
};

export default Projects;

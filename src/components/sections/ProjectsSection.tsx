
import ProjectCard from '@/components/ProjectCard';
import { PROJECTS_DATA } from '@/lib/constants';
import { LuLightbulb } from "react-icons/lu";
const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl flex items-center justify-center gap-3">
            <LuLightbulb className="h-10 w-10 text-primary" />
            My Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Here are some of the projects I&apos;ve worked on.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

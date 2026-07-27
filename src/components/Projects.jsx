import projects from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
   return (
      <section id="projects" className="mb-16">
         <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-medium tracking-tight">Selected Projects</h2>

            <a
               href="https://github.com/sakibulislam75?tab=repositories"
               target="_blank"
               rel="noreferrer"
               className="flex items-center gap-1 text-[13px] text-base-content/60 transition-colors hover:text-base-content"
            >
               View all →
            </a>
         </div>

         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projects.map((project) => (
               <ProjectCard key={project.slug} {...project} />
            ))}
         </div>
      </section>
   );
}

import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft, FiArrowUpRight, FiCheckCircle, FiGithub } from 'react-icons/fi';
import projects from '../data/projects';

export default function ProjectDetails() {
   const { slug } = useParams();
   const project = projects.find((item) => item.slug === slug);

   if (!project) {
      return (
         <div className="py-24 text-center">
            <h1 className="text-4xl font-bold">Project Not Found</h1>
            <Link to="/" className="mt-6 inline-flex items-center gap-2 text-base hover:underline">
               <FiArrowLeft />
               Back to Home
            </Link>
         </div>
      );
   }

   return (
      <section className="py-14">
         {/* Back */}
         <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-base-content/60 transition-colors hover:text-base-content"
         >
            <FiArrowLeft />
            Back to Projects
         </Link>

         {/* Hero */}
         <div>
            <p className="mb-2 text-xs uppercase tracking-widest text-base-content/50">
               {project.category}
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{project.title}</h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-base-content/70">
               {project.description}
            </p>
         </div>

         {/* Project Image */}
         <div className="mt-10 aspect-video overflow-hidden rounded-2xl border border-base-300 shadow-lg">
            <img
               src={project.image}
               alt={project.title}
               className="w-full h-full object-cover transition duration-500 hover:scale-[1.01] hover:opacity-90"
            />
         </div>

         {/* Action Buttons */}
         <div className="mt-6 flex flex-wrap gap-3">
            <a
               href={project.live}
               target="_blank"
               rel="noreferrer"
               className="inline-flex items-center gap-2 rounded-md bg-base-content px-5 py-2.5 text-sm font-medium text-base-100 transition hover:shadow-lg hover:-translate-y-0.5"
            >
               Live Demo <FiArrowUpRight />
            </a>
            <a
               href={project.github}
               target="_blank"
               rel="noreferrer"
               className="inline-flex items-center gap-2 rounded-md bg-base-content px-5 py-2.5 text-sm font-medium text-base-100 transition hover:shadow-lg hover:-translate-y-0.5"
            >
               <FiGithub /> Source Code <FiArrowUpRight />
            </a>
         </div>

         {/* Divider */}
         <div className="my-14 border-t border-base-300" />

         {/* Tech Stack */}
         <div>
            <h2 className="text-2xl font-semibold tracking-tight">Tech Stack</h2>
            <div className="mt-6 flex flex-wrap gap-3">
               {project.tech.map((tech) => (
                  <span
                     key={tech}
                     className="rounded-full bg-base-200 px-3 py-1 text-xs font-medium transition hover:bg-base-content hover:text-base-100"
                  >
                     {tech}
                  </span>
               ))}
            </div>
         </div>

         {/* Divider */}
         <div className="my-14 border-t border-base-300" />

         {/* Key Features */}
         <div>
            <h2 className="text-2xl font-semibold tracking-tight">Key Features</h2>
            <div className="mt-6 grid gap-4">
               {project.features.map((feature) => (
                  <div
                     key={feature}
                     className="flex items-start gap-4 rounded-xl border border-base-300 bg-base-200 p-5 transition-all duration-300 hover:border-base-content/30 hover:shadow-md hover:-translate-y-0.5"
                  >
                     <FiCheckCircle className="mt-1 shrink-0 text-lg text-green-500" />
                     <p className="leading-relaxed text-base-content/75">{feature}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}

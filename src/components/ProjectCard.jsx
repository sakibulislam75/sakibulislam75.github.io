import { Link } from 'react-router-dom';
import { FaLaptopCode } from 'react-icons/fa';

export default function ProjectCard({ slug, title, description, image }) {
   return (
      <div className="overflow-hidden rounded-xl border border-base-300 bg-base-200 transition-all duration-300 hover:border-base-content/30">
         {/* Thumbnail */}
         <div className="aspect-video overflow-hidden border-b border-base-300 bg-base-300/60">
            {image ? (
               <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
               />
            ) : (
               <div className="flex h-full items-center justify-center">
                  <div className="rounded-[10px] bg-base-300 p-3 opacity-40">
                     <FaLaptopCode size={32} />
                  </div>
               </div>
            )}
         </div>

         {/* Content */}
         <div className="px-4 pt-3.5 pb-4">
            <Link
               to={`/projects/${slug}`}
               className="inline-block text-lg font-bold tracking-tight transition-colors hover:underline "
            >
               {title}
            </Link>
            <p className="mt-1 text-[14px] leading-normal text-base-content/60 ">{description}</p>
         </div>
      </div>
   );
}

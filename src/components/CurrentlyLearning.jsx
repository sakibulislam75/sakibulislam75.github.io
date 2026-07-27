import { FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';

export default function CurrentlyLearning() {
   return (
      <section className="px-4 py-9 mb-1 text-white">
         {/* Section Title */}
         <h2 className="mb-6 text-2xl font-medium tracking-tight">Currently Learning</h2>

         {/* Full Width Clickable Card */}
         <a
            href="https://github.com/sakibulislam75/simple-crud-client"
            target="_blank"
            rel="noreferrer"
            className="w-full cursor-pointer rounded-xl border border-base-300 px-5 py-4 transition-colors hover:border-base-content/30 sm:flex-row sm:items-center mb-9 block"
         >
            {/* Header with Status */}
            <div className="flex items-center justify-between mb-2">
               <h3 className="text-xl font-semibold">Learning Backend Development</h3>
               <span className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 text-sm text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  In Progress
               </span>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
               I am currently learning Node.js, Express.js and MongoDB to build scalable backend
               systems.
            </p>

            {/* Tech Icons */}
            <div className="mt-3 flex gap-5 text-2xl">
               <FaNodeJs className="text-green-500" title="Node.js" />
               <SiExpress className="text-gray-300" title="Express.js" />
               <SiMongodb className="text-green-400" title="MongoDB" />
            </div>
         </a>
      </section>
   );
}

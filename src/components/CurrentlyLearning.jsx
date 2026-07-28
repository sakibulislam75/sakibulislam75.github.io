import { FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';

export default function CurrentlyLearning() {
   return (
      <section className="px-4 py-9 text-white">
         <h2 className="mb-6 text-2xl font-medium tracking-tight">Currently Learning</h2>

         <a
            href="https://github.com/sakibulislam75/simple-crud-client"
            target="_blank"
            rel="noreferrer"
            className="block rounded-xl border border-base-300 p-5 transition-all duration-300 hover:border-base-content/30 hover:bg-base-200/20"
         >
            {/* Header */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
               <h3 className="max-w-xl text-xl font-semibold leading-snug">Backend Development</h3>

               <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 sm:text-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  In Progress
               </span>
            </div>

            {/* Description */}
            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400">
               I am currently learning <strong>Node.js</strong>, <strong>Express.js</strong>, and{' '}
               <strong>MongoDB</strong> to build scalable backend systems.
            </p>

            {/* Tech Stack */}
            <div className="mt-5 flex items-center gap-5 text-2xl">
               <FaNodeJs
                  className="text-green-500 transition-transform hover:scale-110"
                  title="Node.js"
               />
               <SiExpress
                  className="text-gray-300 transition-transform hover:scale-110"
                  title="Express.js"
               />
               <SiMongodb
                  className="text-green-400 transition-transform hover:scale-110"
                  title="MongoDB"
               />
            </div>
         </a>
      </section>
   );
}

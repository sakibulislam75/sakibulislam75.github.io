'use client';

import { useRef } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

function MagneticButton({ href, children }) {
   const buttonRef = useRef(null);

   const handleMouseMove = (e) => {
      const button = buttonRef.current;
      if (!button) return;

      const rect = button.getBoundingClientRect();

      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      button.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
   };

   const handleMouseLeave = () => {
      if (!buttonRef.current) return;

      buttonRef.current.style.transform = 'translate(0px,0px)';
   };

   return (
      <a
         ref={buttonRef}
         href={href}
         target={href.startsWith('http') ? '_blank' : undefined}
         rel={href.startsWith('http') ? 'noreferrer' : undefined}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
         className="group inline-flex items-center gap-1.5 rounded-full border border-base-300 bg-base-200 px-2 py-2 text-sm font-bold text-base-content transition-transform duration-200 ease-out"
      >
         {children}

         <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
   );
}

export default function Connect() {
   return (
      <section id="connect" className="mb-16">
         <h2 className="mb-4 text-2xl font-medium tracking-tight">Connect</h2>

         <p className="mb-6 text-[17px] leading-relaxed text-base-content/70">
            Feel free to contact me at{' '}
            <a
               href="mailto:sakibulislam1623@gmail.com"
               className="font-medium text-base-content underline decoration-1 underline-offset-2"
            >
               sakibulislam1623@gmail.com
            </a>
         </p>

         <div className="flex flex-wrap gap-3">
            <MagneticButton href="https://github.com/sakibulislam75">GitHub</MagneticButton>

            <MagneticButton href="https://www.linkedin.com/in/sakibul-islam75">
               LinkedIn
            </MagneticButton>

            <MagneticButton href="mailto:sakibulislam1623@gmail.com">Email</MagneticButton>
         </div>
      </section>
   );
}

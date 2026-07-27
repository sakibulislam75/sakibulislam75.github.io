'use client';

import { useRef } from 'react';
import { FiDownload } from 'react-icons/fi';

export default function ResumeCard() {
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
      const button = buttonRef.current;
      if (!button) return;

      button.style.transform = 'translate(0px, 0px)';
   };

   return (
      <div className="mt-20 flex flex-col justify-between gap-3.5 rounded-xl border border-base-300  px-5 py-4 transition-colors hover:border-base-content/30 sm:flex-row sm:items-center">
         <div>
            <h3 className="text-xl font-bold">Resume</h3>
            <p className="text-[15px] text-base-content/60">View the full details</p>
         </div>

         <a
            ref={buttonRef}
            href="/Sakibul Islam's Resume.pdf"
            download="Sakibul_Islam_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="btn btn-sm self-start rounded-full border-none bg-base-content text-base-100 transition-transform duration-200 ease-out sm:self-auto hover:bg-base-content hover:text-base-100"
         >
            <FiDownload className="text-xl" />
            Download
         </a>
      </div>
   );
}

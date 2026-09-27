import useTypingEffect from '../hooks/useTypingEffect';
import ResumeCard from './ResumeCard';

const ROLE_TEXT = 'Frontend & MERN Stack Developer | React & Next.js Specialist';

export default function Hero() {
   const typed = useTypingEffect(ROLE_TEXT);

   return (
      <div className="mb-16 ">
         <h1 className="text-[22px] md:text-2xl font-semibold tracking-tight mb-1.5 animate-fadeIn">
            Sakibul Islam
         </h1>
         <p className="text-[15px] min-h-6 mb-5 animate-fadeIn-slow">
            {typed}
            <span className="inline animate-blink ml-px">|</span>
         </p>
         <p className="text-[15px] pt-5 text-base-content/60 leading-relaxed max-w-[320px] md:max-w-[550px] text-justify animate-fadeIn-slower">
            Frontend & MERN Stack Developer skilled in React, Next.js, Node.js, Express.js and
            MongoDB. Building real-world projects to strengthen full-stack expertise.
         </p>

         <ResumeCard />
      </div>
   );
}

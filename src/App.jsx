import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Connect from './components/Connect';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';
import CurrentlyLearning from './components/CurrentlyLearning';

function Home() {
   return (
      <>
         <Hero />
         <CurrentlyLearning />

         <section id="projects" className="scroll-mt-8">
            <Projects />
         </section>

         <section id="skills" className="scroll-mt-8">
            <Skills />
         </section>

         <section id="connect" className="scroll-mt-8">
            <Connect />
         </section>
      </>
   );
}

export default function App() {
   const location = useLocation();

   useEffect(() => {
      if (!location.hash) {
         return;
      }

      const sectionId = decodeURIComponent(location.hash.slice(1));

      // Wait until the new route has rendered
      const frameId = requestAnimationFrame(() => {
         const section = document.getElementById(sectionId);

         if (section) {
            section.scrollIntoView({
               behavior: 'smooth',
               block: 'start',
            });
         }
      });

      return () => cancelAnimationFrame(frameId);
   }, [location.pathname, location.hash]);

   return (
      <div className="min-h-screen bg-base-100 text-base-content text-[15px]">
         <div className="mx-auto max-w-[680px] px-4 sm:px-7 md:px-8 md:max-w-[700px] xl:max-w-[760px]">
            <Navbar />

            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/projects/:slug" element={<ProjectDetails />} />
            </Routes>

            <Footer />
         </div>
      </div>
   );
}

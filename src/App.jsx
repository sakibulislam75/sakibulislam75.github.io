import { Routes, Route } from 'react-router-dom';

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
         <Projects />
         <Skills />
         <Connect />
      </>
   );
}

export default function App() {
   return (
      <div className="min-h-screen bg-base-100 text-base-content text-[15px]">
         <div className="mx-auto max-w-[680px] px-4 sm:px-7 md:px-8 lg:max-w-[700px] xl:max-w-[760px]">
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

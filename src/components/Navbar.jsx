import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const links = [
   { href: '/#projects', label: 'Projects' },
   { href: '/#skills', label: 'Skills' },
   { href: '/#connect', label: 'Connect' },
];

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <nav className="mb-12 border-b border-base-300 py-5 md:mb-16">
         <div className="flex items-center justify-between">
            <Link
               to="/"
               className="text-sm font-medium tracking-tight"
               onClick={() => setIsOpen(false)}
            >
               Sakibul Islam
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1.5 md:flex">
               {links.map(({ href, label }) => (
                  <Link
                     key={href}
                     to={href}
                     className="rounded-full border border-transparent px-3 py-1.5 text-[13px] text-base-content/60 transition-colors hover:border-base-300 hover:text-base-content"
                  >
                     {label}
                  </Link>
               ))}
            </div>

            {/* Mobile Menu Button */}
            <button
               type="button"
               onClick={() => setIsOpen((prev) => !prev)}
               aria-label={isOpen ? 'Close menu' : 'Open menu'}
               aria-expanded={isOpen}
               className="rounded-lg border border-base-300 p-2 transition hover:bg-base-200 md:hidden"
            >
               {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
         </div>

         {/* Mobile Navigation */}
         {isOpen && (
            <div className="mt-4 flex flex-col gap-2 md:hidden">
               {links.map(({ href, label }) => (
                  <Link
                     key={href}
                     to={href}
                     onClick={() => setIsOpen(false)}
                     className="rounded-lg px-3 py-2 text-sm text-base-content/70 transition-colors hover:bg-base-200 hover:text-base-content"
                  >
                     {label}
                  </Link>
               ))}
            </div>
         )}
      </nav>
   );
}

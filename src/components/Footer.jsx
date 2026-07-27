import { FaRegMoon, FaDesktop } from 'react-icons/fa';
import { MdOutlineWbSunny } from 'react-icons/md';
import useTheme from '../hooks/useTheme';

export default function Footer() {
   const [mode, setMode] = useTheme();

   const buttons = [
      { key: 'light', title: 'Light', icon: <MdOutlineWbSunny size={14} /> },
      { key: 'dark', title: 'Dark', icon: <FaRegMoon size={14} /> },
      { key: 'system', title: 'System', icon: <FaDesktop size={14} /> },
   ];

   return (
      <footer className="border-t border-base-300 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
         {/* Copyright / Tagline */}
         <div className="relative h-5 min-w-[220px] text-[13px] text-base-content/60">
            <span className="absolute animate-flip-front">© 2025 Sakibul Islam.</span>
            <span className="absolute animate-flip-back">
               Built with <span className="inline-block animate-heartbeat">❤️</span> and passion
            </span>
         </div>

         {/* Theme Switcher */}
         <div className="flex items-center gap-1 bg-base-200 border border-base-300 rounded-full p-1">
            {buttons.map(({ key, title, icon }) => (
               <button
                  key={key}
                  title={title}
                  onClick={() => setMode(key)}
                  className={`p-1.5 rounded-full transition-colors ${
                     mode === key
                        ? 'bg-base-300 text-base-content'
                        : 'text-base-content/60 hover:bg-base-300/60'
                  }`}
               >
                  {icon}
               </button>
            ))}
         </div>
      </footer>
   );
}

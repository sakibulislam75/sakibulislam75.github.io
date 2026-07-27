import {
   FaJs,
   FaHtml5,
   FaCss3Alt,
   FaPython,
   FaReact,
   FaNodeJs,
   FaGitAlt,
   FaGithub,
   FaCode,
} from 'react-icons/fa';

import {
   SiC,
   SiExpress,
   SiMongodb,
   SiTailwindcss,
   SiDaisyui,
   SiNextdotjs,
   SiVercel,
} from 'react-icons/si';

import { RiClaudeLine } from 'react-icons/ri';
import { RiShieldKeyholeLine, RiLayoutGridFill } from 'react-icons/ri';

const iconClass = 'text-base-content';

const skillGroups = [
   {
      label: 'Languages',
      items: [
         { name: 'JavaScript', icon: <FaJs size={14} className={iconClass} /> },
         { name: 'HTML5', icon: <FaHtml5 size={14} className={iconClass} /> },
         { name: 'CSS3', icon: <FaCss3Alt size={14} className={iconClass} /> },
         { name: 'C', icon: <SiC size={14} className={iconClass} /> },
         { name: 'Python', icon: <FaPython size={14} className={iconClass} /> },
      ],
   },

   {
      label: 'Frontend',
      items: [
         { name: 'React', icon: <FaReact size={14} className={iconClass} /> },
         { name: 'Next.js', icon: <SiNextdotjs size={14} className={iconClass} /> },
         { name: 'Tailwind CSS', icon: <SiTailwindcss size={14} className={iconClass} /> },
         { name: 'DaisyUI', icon: <SiDaisyui size={14} className={iconClass} /> },
         { name: 'HeroUI', icon: <RiLayoutGridFill size={14} className={iconClass} /> },
      ],
   },

   {
      label: 'Backend',
      items: [
         { name: 'Node.js', icon: <FaNodeJs size={14} className={iconClass} /> },
         { name: 'Express.js', icon: <SiExpress size={14} className={iconClass} /> },
         {
            name: 'Better Auth',
            icon: <RiShieldKeyholeLine size={14} className={iconClass} />,
         },
      ],
   },

   {
      label: 'Database',
      items: [{ name: 'MongoDB', icon: <SiMongodb size={14} className={iconClass} /> }],
   },

   {
      label: 'Tools',
      items: [
         { name: 'Git', icon: <FaGitAlt size={14} className={iconClass} /> },
         { name: 'GitHub', icon: <FaGithub size={14} className={iconClass} /> },
         { name: 'VS Code', icon: <FaCode size={14} className={iconClass} /> },
         { name: 'Vercel', icon: <SiVercel size={14} className={iconClass} /> },
         { name: 'Claude Code', icon: <RiClaudeLine size={14} className={iconClass} /> },
         { name: 'OpenAI Codex', icon: <FaCode size={14} className={iconClass} /> },
      ],
   },
];

export default skillGroups;

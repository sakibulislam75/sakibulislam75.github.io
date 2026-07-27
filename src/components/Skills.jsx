import skillGroups from '../data/skills.jsx';
import SkillPill from './SkillPill';

export default function Skills() {
   return (
      <section id="skills" className="mb-16">
         <h2 className="mb-8 text-2xl font-bold tracking-tight">Skills</h2>

         {skillGroups.map((group) => (
            <div key={group.label} className="mb-8">
               <h3 className="mb-4 text-xl font-bold tracking-tight">{group.label}</h3>

               <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                     <SkillPill key={item.name} {...item} />
                  ))}
               </div>
            </div>
         ))}
      </section>
   );
}

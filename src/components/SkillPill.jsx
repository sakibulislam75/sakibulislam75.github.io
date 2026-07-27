export default function SkillPill({ name, icon, learning }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 bg-base-300/60 border rounded-full px-3 py-1.5 text-[13px] transition-colors hover:border-base-content/30 ${
        learning ? "border-dashed border-base-content/30 opacity-85" : "border-base-300"
      }`}
    >
      {icon}
      {name}
      {learning && (
        <span className="text-[10px] text-base-content/40 bg-base-300 rounded-lg px-1.5">Learning</span>
      )}
    </span>
  );
}

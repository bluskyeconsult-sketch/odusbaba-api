export function SkillCard({
  skill,
  canContact,
}: {
  skill: any;
  canContact: boolean;
}) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5 hover:shadow-xl transition">
      <h3 className="text-lg font-semibold text-emerald-400">
        {skill.skill_name}
      </h3>

      <p className="text-sm text-slate-300 mt-2">
        {skill.description}
      </p>

      <div className="flex justify-between items-center mt-4 text-sm">
        <span>⭐ {skill.rating.toFixed(1)}</span>
        <span>{skill.completed_jobs} jobs</span>
      </div>

      <button
        disabled={!canContact}
        className={`mt-4 w-full rounded-xl py-2 text-sm font-medium
        ${
          canContact
            ? "bg-emerald-500 text-black"
            : "bg-slate-700 text-slate-400 cursor-not-allowed"
        }`}
      >
        {canContact ? "Contact / Hire" : "Upgrade to Contact"}
      </button>
    </div>
  );
}

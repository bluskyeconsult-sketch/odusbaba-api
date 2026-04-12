export default function WorkforceGrid({
  skills,
  viewerCapabilities,
}: {
  skills: any[];
  viewerCapabilities: any;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="border rounded-xl p-5 shadow-sm hover:shadow-md transition"
        >
          <h3 className="text-xl font-semibold">
            {skill.skill_name}
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            {skill.category}
          </p>

          <div className="mt-3 text-sm">
            Trust Score: {skill.trust_score ?? 0}/100
          </div>

          <div className="mt-2 text-xs text-slate-400">
            Rating: {skill.admin_rating ?? "Pending"}
          </div>

          {/* GATED CONTACT */}
          {viewerCapabilities.canContactWorkforce ? (
            <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg">
              Contact
            </button>
          ) : (
            <p className="mt-4 text-xs text-slate-400">
              Upgrade to contact this professional
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

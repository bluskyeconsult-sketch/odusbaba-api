export default function SkillCard({ skill, user }) {
  const canContact = user.capabilities?.includes(
    "contact_workforce"
  );

  return (
    <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold text-lg">
        {skill.skill_name}
      </h3>

      <p className="text-sm text-muted-foreground">
        {skill.category}
      </p>

      <div className="mt-2">
        ⭐ {skill.rating.toFixed(1)} ·{" "}
        {skill.completed_jobs} jobs
      </div>

      <div className="mt-4 space-y-2">
        <button className="btn-secondary w-full">
          View profile
        </button>

        {canContact ? (
          <button className="btn-primary w-full">
            Contact / Hire
          </button>
        ) : (
          <button
            disabled
            className="btn-disabled w-full"
          >
            Upgrade to contact
          </button>
        )}
      </div>
    </div>
  );
}

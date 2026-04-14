export default function JobCard({
  job,
  canApply,
}: {
  job: any;
  canApply?: boolean;
}) {
  return (
    <div className="border rounded-xl p-6 bg-white/5">
      <h3 className="text-lg font-semibold">{job.title}</h3>

      <p className="text-sm text-slate-400">
        {job.company} • {job.location}
      </p>

      <p className="mt-3 text-sm">
        {job.description}
      </p>

      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm">
          {job.salary_range || "Salary not disclosed"}
        </span>

        {canApply ? (
          <button className="px-4 py-2 bg-blue-600 text-white rounded">
            Apply
          </button>
        ) : (
          <span className="text-xs text-slate-400">
            Upgrade required
          </span>
        )}
      </div>
    </div>
  );
}

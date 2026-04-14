export default function JobCard({
  job,
  canApply,
}: {
  job: any;
  canApply?: boolean;
}) {
  return (
    <div className="border rounded-xl p-6">
      <h3 className="font-bold text-lg">{job.title}</h3>

      <p className="text-sm text-gray-400">
        {job.company} • {job.location}
      </p>

      <p className="mt-3 text-sm">
        {job.description}
      </p>

      <div className="mt-4 flex justify-between">
        <span>{job.salary_range || "Not disclosed"}</span>

        {canApply ? (
          <button className="px-4 py-2 bg-blue-600 text-white rounded">
            Apply
          </button>
        ) : (
          <span className="text-xs text-gray-400">
            Upgrade required
          </span>
        )}
      </div>
    </div>
  );
}

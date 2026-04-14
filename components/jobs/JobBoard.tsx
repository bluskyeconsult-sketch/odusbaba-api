// components/jobs/JobBoard.tsx
"use client";

type Job = {
  id: string;
  title: string;
  company?: string;
  location?: string;
};

export default function JobBoard({
  jobs,
  viewerCapabilities,
}: {
  jobs: Job[];
  viewerCapabilities: {
    canApply: boolean;
    canSaveJobs: boolean;
    canContactEmployer: boolean;
  };
}) {
  if (!jobs || jobs.length === 0) {
    return <p className="text-gray-500">No jobs available.</p>;
  }

  return (
    <div className="grid gap-4 mt-6">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="border rounded-lg p-4 shadow-sm"
        >
          <h3 className="text-lg font-semibold">
            {job.title}
          </h3>

          {job.company && (
            <p className="text-sm text-gray-600">
              {job.company}
            </p>
          )}

          {job.location && (
            <p className="text-sm text-gray-500">
              {job.location}
            </p>
          )}

          {!viewerCapabilities.canApply && (
            <p className="text-xs text-gray-400 mt-2">
              Sign in to apply
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

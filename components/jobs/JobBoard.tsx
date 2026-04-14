import JobCard from "./JobCard";
import JobFilters from "./JobFilters";

export default function JobBoard({
  jobs,
  viewerCapabilities,
}: {
  jobs: any[];
  viewerCapabilities: {
    canApplyJobs?: boolean;
    canPostJobs?: boolean;
  };
}) {
  return (
    <>
      <JobFilters />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {jobs.map(job => (
          <JobCard
            key={job.id}
            job={job}
            canApply={viewerCapabilities.canApplyJobs}
          />
        ))}
      </div>
    </>
  );
}

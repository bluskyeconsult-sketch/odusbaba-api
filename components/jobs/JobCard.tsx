export function JobCard({ job }: { job: any }) {
  return (
    <div className="border border-white/10 rounded p-4">
      <h3 className="font-semibold">{job.title}</h3>
      <p className="text-sm text-slate-400">{job.company}</p>
    </div>
  );
}

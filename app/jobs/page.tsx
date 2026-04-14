export const dynamic = "force-dynamic";
export const revalidate = 0;

import JobBoard from "@/components/jobs/JobBoard";
import { fetchPublicJobs } from "@/lib/jobs/fetchPublicJobs";

export default async function JobsPage() {
  const jobs = await fetchPublicJobs();

  // ✅ STATIC-SAFE, NO AUTH, NO ENV, NO CONTEXT
  const viewerCapabilities = {
    canApply: false,
    canSaveJobs: false,
    canContactEmployer: false,
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-4">
        Job Board
      </h1>

      <p className="text-slate-400 mb-8">
        Browse verified job opportunities across industries.
      </p>

      <JobBoard
        jobs={jobs}
        viewerCapabilities={viewerCapabilities}
      />
    </section>
  );
}

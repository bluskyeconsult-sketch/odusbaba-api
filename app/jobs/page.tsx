import JobBoard from "@/components/jobs/JobBoard";
import { fetchPublicJobs } from "@/lib/jobs/fetchPublicJobs";
import { resolveViewerCapabilities } from "@/lib/odusbaba/capabilities";

export default async function JobsPage() {
  const jobs = await fetchPublicJobs();

  // TEMP: safe default until auth context is wired
  const viewerCapabilities = resolveViewerCapabilities("public");

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

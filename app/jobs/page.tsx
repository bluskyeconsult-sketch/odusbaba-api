import JobBoard from "@/components/jobs/JobBoard";
import { fetchPublicJobs } from "@/lib/jobs/fetchPublicJobs";
import { resolveViewerCapabilities } from "@/lib/odusbaba/capabilities";

// ✅ THIS IS THE KEY LINE
export const dynamic = "force-dynamic";

export default async function JobsPage() {
  let jobs = [];

  try {
    jobs = await fetchPublicJobs();
  } catch (e) {
    // Fail-safe: never crash build or page
    console.error("Failed to fetch jobs", e);
  }

  // Public-safe default
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

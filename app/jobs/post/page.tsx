import JobPostForm from "@/components/jobs/JobPostForm";
import { resolveViewerCapabilities } from "@/lib/odusbaba/capabilities";

export default function JobPostPage() {
  const capabilities = resolveViewerCapabilities("public");

  const canPost = capabilities?.canPostJobs ?? false;

  return (
    <section className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">
        Post a Job
      </h1>

      {canPost ? (
        <JobPostForm canPost={true} />
      ) : (
        <div className="border p-6 rounded bg-white/5">
          <p className="text-sm text-slate-400">
            Upgrade to employer tier to post jobs.
          </p>
        </div>
      )}
    </section>
  );
}

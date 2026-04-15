import JobPostForm from "@/components/jobs/JobPostForm";
import { resolveViewerCapabilities } from "@/lib/odusbaba/capabilities";

export default async function JobPostPage() {
  // SAFE DEFAULT — replace later with real user context
  const capabilities = resolveViewerCapabilities("public");

  return (
    <section className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">
        Post a Job
      </h1>

      <JobPostForm canPost={capabilities.can

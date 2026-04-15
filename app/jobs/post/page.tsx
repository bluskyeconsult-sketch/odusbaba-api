import JobPostForm from "@/components/jobs/JobPostForm";
import { getUserContext } from "@/lib/odusbaba/context";

export default async function JobPostPage() {
  const user = await getUserContext();

  if (!user.capabilities.includes("job:post")) {
    return (
      <div className="max-w-3xl mx-auto p-10 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Upgrade Required
        </h2>
        <p className="text-slate-500">
          Your current plan does not allow job posting.
        </p>
      </div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        Post a Job
      </h1>
      <JobPostForm user={user} />
    </section>
  );
}

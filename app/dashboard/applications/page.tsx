import { getUserApplications } from "@/lib/jobs/getUserApplications";

export default async function ApplicationsPage() {
  const applications = await getUserApplications();

  return (
    <section className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">
        My Job Applications
      </h1>

      <div className="space-y-4">
        {applications.map((app) => (
          <div
            key={app.id}
            className="p-4 border rounded"
          >
            <p className="font-medium">
              Job ID: {app.job_id}
            </p>
            <p className="text-slate-400 text-sm">
              Status: {app.status}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

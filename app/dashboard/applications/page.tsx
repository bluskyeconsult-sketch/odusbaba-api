import { getUserApplications } from "@/lib/jobs/getUserApplications";

export default async function ApplicationsPage() {
  // TEMP user until auth is wired
  const userId = "placeholder-user-id";

  const applications = await getUserApplications(userId);

  return (
    <section className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">My Applications</h1>

      {applications.length === 0 ? (
        <p className="text-slate-400">No applications yet.</p>
      ) : (
        <ul className="space-y-4">
          {applications.map((app) => (
            <li
              key={app.id}
              className="border border-white/10 rounded p-4"
            >
              <p className="text-sm text-slate-300">
                Status: {app.status}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

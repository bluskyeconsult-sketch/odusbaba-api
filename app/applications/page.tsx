import { getUserContext } from "@/lib/odusbaba/context";
import { fetchUserApplications } from "@/lib/jobs/fetchUserApplications";

export default async function ApplicationsPage() {
  const user = await getUserContext();
  const applications = await fetchUserApplications(user.id);

  return (
    <section className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        My Job Applications
      </h1>

      <ul className="space-y-4">
        {applications.map((app: any) => (
          <li key={app.id} className="border p-4 rounded">
            <h3 className="font-semibold">{app.job_title}</h3>
            <p className="text-sm text-slate-500">
              Status: {app.status}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

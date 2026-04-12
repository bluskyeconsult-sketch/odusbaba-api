import { getAccess } from "@/lib/odusbaba/access";

export default function AdminDashboard() {
  const mockAdminUser = {
    role: "admin",
    stripe_plan_id: "business",
  };

  const access = getAccess(mockAdminUser);

  if (access.tier !== "business") {
    return <div>Access Denied</div>;
  }

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        ODUSBABA Admin Control Center
      </h1>

      {/* SYSTEM STATUS */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card title="Skill Pipeline" value="Active" />
        <Card title="Job Intelligence" value="Monitoring" />
        <Card title="VA System" value="Running" />
      </div>
    </section>
  );
}

function Card({ title, value }: any) {
  return (
    <div className="border rounded-xl p-4 shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
}

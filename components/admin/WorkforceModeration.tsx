"use client";

export default function WorkforceModeration({ skills }: any) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {skills.map((skill: any) => (
        <div key={skill.id} className="border p-4 rounded-xl">
          <h3 className="font-semibold">{skill.skill_name}</h3>
          <p>Status: {skill.status}</p>

          <div className="flex gap-2 mt-3">
            <button className="bg-green-600 text-white px-3 py-1 rounded">
              Approve
            </button>
            <button className="bg-red-600 text-white px-3 py-1 rounded">
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

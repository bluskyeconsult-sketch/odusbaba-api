"use client";

import { useMemo, useState } from "react";

type Skill = {
  id: string;
  skill_name: string;
  category?: string;
  trust_score?: number;
  admin_rating?: number;
};

type Props = {
  initialSkills: Skill[];
  viewerCapabilities: {
    canContactWorkforce: boolean;
  };
};

export default function WorkforceMarketplace({
  initialSkills,
  viewerCapabilities,
}: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    return initialSkills.filter((s) => {
      const matchesSearch =
        s.skill_name.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "all" || s.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [initialSkills, search, category]);

  const categories = useMemo(() => {
    const set = new Set(initialSkills.map((s) => s.category).filter(Boolean));
    return ["all", ...Array.from(set) as string[]];
  }, [initialSkills]);

  return (
    <div className="space-y-6">

      {/* SEARCH + FILTER BAR */}
      <div className="flex flex-col md:flex-row gap-4 md:items-center">
        <input
          className="w-full md:w-1/2 border rounded-lg px-4 py-2"
          placeholder="Search skills (e.g. design, plumbing, coding...)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border rounded-lg px-4 py-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((skill) => (
          <div
            key={skill.id}
            className="border rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold">
              {skill.skill_name}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Category: {skill.category || "general"}
            </p>

            {/* TRUST SCORE */}
            <div className="mt-3">
              <p className="text-sm">
                Trust Score:{" "}
                <span className="font-bold">
                  {skill.trust_score ?? 0}/100
                </span>
              </p>

              <div className="w-full bg-gray-200 h-2 rounded mt-1">
                <div
                  className="bg-green-500 h-2 rounded"
                  style={{ width: `${skill.trust_score ?? 0}%` }}
                />
              </div>
            </div>

            {/* ACTION BUTTON */}
            <button
              className={`mt-4 w-full py-2 rounded-lg text-white ${
                viewerCapabilities.canContactWorkforce
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!viewerCapabilities.canContactWorkforce}
            >
              {viewerCapabilities.canContactWorkforce
                ? "Contact / Hire"
                : "Unlock to Contact"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

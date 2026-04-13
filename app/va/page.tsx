"use client";

import { useState } from "react";

export default function VAPage() {
  const [intent, setIntent] = useState("cv");

  return (
    <section className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        Hire ODUSBABA Assistant
      </h1>

      <select
        className="border p-2 rounded w-full"
        onChange={(e) => setIntent(e.target.value)}
      >
        <option value="cv">CV Rewrite</option>
        <option value="apply">Job Application</option>
        <option value="letter">HR Letter</option>
      </select>

      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        Submit Request
      </button>
    </section>
  );
}

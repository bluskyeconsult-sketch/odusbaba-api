"use client";

import { useState } from "react";

export default function JobPostForm({
  canPost,
}: {
  canPost?: boolean;
}) {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");

  if (!canPost) {
    return (
      <div className="p-6 border rounded bg-slate-900 text-slate-300">
        Upgrade your plan to post jobs.
      </div>
    );
  }

  return (
    <form className="space-y-4">
      <input
        placeholder="Job title"
        className="w-full p-3 rounded bg-black/10"
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Company"
        className="w-full p-3 rounded bg-black/10"
        onChange={(e) => setCompany(e.target.value)}
      />

      <input
        placeholder="Location"
        className="w-full p-3 rounded bg-black/10"
        onChange={(e) => setLocation(e.target.value)}
      />

      <button className="px-4 py-2 bg-blue-600 text-white rounded">
        Submit Job
      </button>
    </form>
  );
}

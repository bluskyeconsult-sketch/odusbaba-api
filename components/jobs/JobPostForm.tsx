"use client";

import { useState } from "react";

export default function JobPostForm({ user }: { user: any }) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.target);

    await fetch("/api/jobs/create", {
      method: "POST",
      body: JSON.stringify({
        title: form.get("title"),
        description: form.get("description"),
        salary: form.get("salary"),
        location: form.get("location"),
      }),
    });

    setLoading(false);
    alert("Job submitted for review");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="title" placeholder="Job title" required className="input" />
      <textarea name="description" placeholder="Job description" required className="input" />
      <input name="salary" placeholder="Salary range" className="input" />
      <input name="location" placeholder="Location" className="input" />
      <button disabled={loading} className="btn-primary">
        {loading ? "Submitting..." : "Submit Job"}
      </button>
    </form>
  );
}

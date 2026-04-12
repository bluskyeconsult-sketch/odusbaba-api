"use client";

export default function WorkforceFilters() {
  return (
    <div className="flex gap-3 mb-6">
      <input
        placeholder="Search skills..."
        className="border p-2 rounded-lg w-full"
      />

      <select className="border p-2 rounded-lg">
        <option>All Categories</option>
        <option>Tech</option>
        <option>Design</option>
        <option>Finance</option>
        <option>HR</option>
      </select>
    </div>
  );
}

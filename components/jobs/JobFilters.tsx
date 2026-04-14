export default function JobFilters() {
  return (
    <div className="flex gap-4 mb-4">
      <input
        placeholder="Search jobs"
        className="border p-2 rounded"
      />

      <input
        placeholder="Location"
        className="border p-2 rounded"
      />
    </div>
  );
}

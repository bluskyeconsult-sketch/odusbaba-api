export default function JobPostForm({ canPost }: { canPost: boolean }) {
  if (!canPost) {
    return (
      <div className="border p-6 rounded bg-white/5">
        <p className="text-sm text-slate-400">
          Upgrade to employer tier to post jobs.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-4">
      <input placeholder="Job title" className="w-full p-3 rounded bg-black/20" />
      <input placeholder="Company name" className="w-full p-3 rounded bg-black/20" />
      <input placeholder="Location" className="w-full p-3 rounded bg-black/20" />
      <textarea placeholder="Job description" className="w-full p-3 rounded bg-black/20" />

      <button className="px-4 py-2 bg-blue-600 rounded text-white">
        Submit Job
      </button>
    </form>
  );
}

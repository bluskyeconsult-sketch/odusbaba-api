export function SkillFilters({
  onChange,
}: {
  onChange: (filters: any) => void;
}) {
  return (
    <div className="flex gap-4 mb-6">
      <input
        placeholder="Search skills..."
        className="rounded-lg bg-slate-800 p-2 text-sm"
        onChange={(e) =>
          onChange({ search: e.target.value })
        }
      />

      <select
        className="rounded-lg bg-slate-800 p-2 text-sm"
        onChange={(e) =>
          onChange({ category: e.target.value })
        }
      >
        <option value="">All Categories</option>
        <option value="Tech">Tech</option>
        <option value="Business">Business</option>
        <option value="Trades">Trades</option>
        <option value="Creative">Creative</option>
      </select>

      <select
        className="rounded-lg bg-slate-800 p-2 text-sm"
        onChange={(e) =>
          onChange({ minRating: Number(e.target.value) })
        }
      >
        <option value="0">Any Rating</option>
        <option value="4">4⭐+</option>
        <option value="4.5">4.5⭐+</option>
      </select>
    </div>
  );
}

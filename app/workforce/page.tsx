import { fetchApprovedWorkforceSkills } from "@/lib/odusbaba/workforce-query";
import WorkforceGrid from "@/components/workforce/WorkforceGrid";
import WorkforceFilters from "@/components/workforce/WorkforceFilters";
import { resolveViewerCapabilities } from "@/lib/odusbaba/viewer";

export default async function WorkforcePage() {
  const skills = await fetchApprovedWorkforceSkills();
  const viewer = await resolveViewerCapabilities("public");

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">
          Workforce Marketplace
        </h1>
        <p className="text-slate-500 mt-2">
          Discover verified talent across industries
        </p>
      </header>

      <WorkforceFilters />

      <WorkforceGrid
        skills={skills}
        viewerCapabilities={viewer}
      />
    </section>
  );
}

import { fetchApprovedWorkforceSkills } from "@/lib/odusbaba/workforce-query";
import { SkillCard } from "@/components/workforce/SkillCard";
import { SkillFilters } from "@/components/workforce/SkillFilters";
import { resolveViewerCapabilities } from "@/lib/odusbaba/viewer";

export default async function WorkforceMarketplacePage() {
  // TEMP SAFE DEFAULT (public viewer)
  const tier = "public";

  const capabilities = resolveViewerCapabilities(tier);

  const skills = await fetchApprovedWorkforceSkills();

  return (
    <section className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">
        Workforce Market
      </h1>

      <p className="text-slate-400 mb-6">
        Browse verified skills across industries.
        Hire with confidence.
      </p>

      <SkillFilters onChange={() => {}} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skill: any) => (
          <SkillCard
            key={skill.id}
            skill={skill}
            canContact={capabilities.canContactWorkforce}
          />
        ))}
      </div>
    </section>
  );
}

import { fetchApprovedWorkforceSkills } from "@/lib/odusbaba/workforce-query";
import { SkillCard } from "@/components/workforce/SkillCard";
import { SkillFilters } from "@/components/workforce/SkillFilters";
import { getUserContext } from "@/lib/odusbaba/context";

export default async function WorkforceMarketplacePage() {
  const user = await getUserContext();

  const skills = await fetchApprovedWorkforceSkills(
    user.supabase
  );

  const canContact =
    user.capabilities?.includes("workforce:contact");

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
            canContact={canContact}
          />
        ))}
      </div>
    </section>
  );
}

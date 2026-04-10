import { getUserContext } from "@/lib/odusbaba/context";
import SkillCard from "./SkillCard";
import SkillFilters from "./SkillFilters";

export default async function WorkforceMarketplace() {
  const user = await getUserContext();

  const skills = await fetchSkills(); // read-only public query

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">
        Workforce Market
      </h1>

      <p className="text-muted-foreground">
        Explore verified skills across industries.
      </p>

      <SkillFilters />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            skill={skill}
            user={user}
          />
        ))}
      </div>
    </div>
  );
}

import { WorkforceProfile } from "./types";
import { Capability } from "./capability";

export function presentWorkforceProfile(
  profile: WorkforceProfile,
  capability: Capability
) {
  return {
    userId: profile.userId,
    skills: profile.skills
      .filter(skill => skill.isPublic)
      .map(skill => ({
        id: skill.id,
        name: skill.name,
        category: skill.category,
        level: skill.level,
        rating: skill.rating,
        jobsCompleted: skill.jobsCompleted,
        country: skill.country,

        // GATED FIELDS
        canContact: capability.canContactWorkforce,
        canHire: capability.canHireWorkforce,
      })),
  };
}

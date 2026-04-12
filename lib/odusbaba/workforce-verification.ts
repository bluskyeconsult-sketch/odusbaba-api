import { aiReviewSkill } from "./workforce-ai";

export async function verifySkill(skill: any) {
  const ai = await aiReviewSkill(skill);

  const trustScore =
    Math.round((ai.ai_score + (skill.admin_rating || 0)) / 2);

  return {
    status:
      trustScore > 75
        ? "approved"
        : trustScore > 50
        ? "review"
        : "rejected",

    trustScore,
    ai,
  };
}

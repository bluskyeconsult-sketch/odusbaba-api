export async function aiReviewSkill(skill: {
  skill_name: string;
  description?: string;
}) {
  // Placeholder AI structure (no external API yet)
  const score =
    skill.skill_name.length > 5 ? 70 : 40;

  return {
    ai_score: score,
    reasoning:
      "Preliminary heuristic evaluation (replace with OpenAI later)",
    flags: skill.skill_name.length < 3 ? ["too_generic"] : [],
  };
}

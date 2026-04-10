export async function aiVerifySkill(input: {
  skill: string;
  description: string;
  evidence?: string;
}) {
  // Placeholder – NO external API yet
  // You can plug OpenAI later

  const score =
    input.description.length > 100 ? 0.8 : 0.4;

  return {
    score,
    feedback:
      score > 0.7
        ? "Skill description is detailed and credible"
        : "Insufficient detail provided",
    recommended:
      score > 0.7 ? "approve" : "review",
  };
}

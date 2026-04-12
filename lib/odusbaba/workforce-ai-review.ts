export type AIReviewResult = {
  confidence: number; // 0 - 1
  summary: string;
  flags: string[];
  recommendedAction: "approve" | "review" | "reject";
};

export async function reviewWorkforceSkillWithAI(input: {
  skill_name: string;
  description: string;
  evidence?: string[];
}): Promise<AIReviewResult> {
  // SAFE PLACEHOLDER (no OpenAI integration yet)
  // We add OpenAI in next phase safely

  const text = `${input.skill_name} ${input.description}`.toLowerCase();

  const flags: string[] = [];

  if (text.includes("expert")) flags.push("self_declared_expert");
  if (text.length < 20) flags.push("insufficient_detail");

  const confidence =
    flags.length === 0 ? 0.7 : flags.length === 1 ? 0.5 : 0.3;

  return {
    confidence,
    summary: "AI preliminary analysis completed.",
    flags,
    recommendedAction:
      confidence > 0.6 ? "review" : "reject",
  };
}

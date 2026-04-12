import { reviewWorkforceSkillWithAI } from "./workforce-ai-review";

export async function processAISkillReview({
  skill,
  supabase,
}: {
  skill: {
    id: string;
    skill_name: string;
    description: string;
  };
  supabase: any;
}) {
  const ai = await reviewWorkforceSkillWithAI(skill);

  const nextStatus =
    ai.recommendedAction === "reject"
      ? "rejected"
      : "ai_reviewed";

  const { error } = await supabase
    .from("workforce_skills")
    .update({
      ai_review: ai,
      status: nextStatus,
      trust_score: Math.round(ai.confidence * 100),
    })
    .eq("id", skill.id);

  if (error) throw error;

  return {
    success: true,
    ai,
    status: nextStatus,
  };
}

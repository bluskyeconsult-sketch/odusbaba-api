import { aiVerifySkill } from "./workforce-ai";

export async function submitWorkforceSkill({
  user,
  input,
  supabase,
}: {
  user: any;
  input: {
    skill: string;
    category: string;
    description: string;
  };
  supabase: any;
}) {
  if (user.role === "public") {
    throw new Error("LOGIN_REQUIRED");
  }

  const ai = await aiVerifySkill({
    skill: input.skill,
    description: input.description,
  });

  const { error } = await supabase
    .from("workforce_skills")
    .insert({
      user_id: user.id,
      skill_name: input.skill,
      category: input.category,
      description: input.description,
      ai_score: ai.score,
      ai_feedback: ai.feedback,
      approved: false,
      approval_source: null,
      rating: 0,
      completed_jobs: 0,
    });

  if (error) throw error;

  return {
    status: "submitted",
    ai_recommendation: ai.recommended,
  };
}

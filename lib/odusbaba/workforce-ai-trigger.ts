import { processAISkillReview } from "./workforce-ai-pipeline";

export async function triggerAIReview(skill: any, supabase: any) {
  if (skill.status !== "submitted") {
    return { skipped: true };
  }

  return processAISkillReview({
    skill,
    supabase,
  });
}

import { getSupabaseClient } from "@/lib/supabase/client";

export async function applyToJob(jobId: string, userId: string) {
  const supabase = getSupabaseClient();

  const { error } = await supabase
    .from("job_applications")
    .insert({
      job_id: jobId,
      user_id: userId,
      status: "applied",
    });

  if (error) throw error;

  return { success: true };
}

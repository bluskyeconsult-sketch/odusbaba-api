import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function fetchUserApplications(userId: string) {
  const supabase = createServerSupabaseClient();

  const { data, error } = await supabase
    .from("job_applications")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data || [];
}

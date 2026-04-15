import { createClient } from "@/lib/supabase/server";

export async function getUserApplications(userId: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("job_applications")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch applications", error);
    return [];
  }

  return data ?? [];
}

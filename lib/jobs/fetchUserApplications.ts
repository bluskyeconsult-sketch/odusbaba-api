import { createClient } from "@/lib/supabase/server";

export async function fetchUserApplications(userId: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("job_applications")
    .select("*")
    .eq("user_id", userId);

  if (error) {
    console.error(error);
    return [];
  }

  return data ?? [];
}

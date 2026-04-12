import { createServerSupabase } from "@/lib/supabase/server";

export async function fetchApprovedWorkforceSkills() {
  const supabase = createServerSupabase();

  const { data, error } = await supabase
    .from("workforce_skills")
    .select("*")
    .eq("status", "approved")
    .order("trust_score", { ascending: false });

  if (error) {
    console.error("WORKFORCE_FETCH_ERROR", error);
    return [];
  }

  return data ?? [];
}

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

export async function fetchApprovedWorkforceSkills() {
  const { data, error } = await supabase
    .from("workforce_skills")
    .select("*")
    .eq("status", "approved")
    .order("trust_score", { ascending: false });

  if (error) {
    console.error("Supabase error:", error);
    return [];
  }

  return data || [];
}

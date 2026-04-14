import { createClient } from "@supabase/supabase-js";

export async function fetchPublicJobs() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // ✅ DO NOT crash build
  if (!url || !anonKey) {
    console.warn("Supabase env missing — returning empty job list");
    return [];
  }

  const supabase = createClient(url, anonKey);

  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("status", "approved")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch public jobs:", error.message);
    return [];
  }

  return data ?? [];
}

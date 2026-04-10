export async function fetchApprovedWorkforceSkills(
  supabase: any,
  filters?: {
    category?: string;
    minRating?: number;
    search?: string;
  }
) {
  let query = supabase
    .from("workforce_skills")
    .select(
      `
      id,
      skill_name,
      category,
      description,
      rating,
      completed_jobs,
      user_id
    `
    )
    .eq("approved", true);

  if (filters?.category) {
    query = query.eq("category", filters.category);
  }

  if (filters?.minRating) {
    query = query.gte("rating", filters.minRating);
  }

  if (filters?.search) {
    query = query.ilike("skill_name", `%${filters.search}%`);
  }

  const { data, error } = await query.order("rating", {
    ascending: false,
  });

  if (error) throw error;
  return data;
}

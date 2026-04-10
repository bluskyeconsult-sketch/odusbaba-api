export async function recordJobCompletion({
  skillId,
  rating,
  supabase,
}: {
  skillId: string;
  rating: number;
  supabase: any;
}) {
  const { data } = await supabase
    .from("workforce_skills")
    .select("rating, completed_jobs")
    .eq("id", skillId)
    .single();

  const newJobs = data.completed_jobs + 1;
  const newRating =
    (data.rating * data.completed_jobs + rating) /
    newJobs;

  await supabase
    .from("workforce_skills")
    .update({
      rating: newRating,
      completed_jobs: newJobs,
    })
    .eq("id", skillId);
}

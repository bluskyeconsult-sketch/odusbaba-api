export async function finalizeWorkforceSkill({
  aiResult,
  adminResult,
  supabase,
}: {
  aiResult: any;
  adminResult: any;
  supabase: any;
}) {
  // AI already ran
  // Admin overrides AI if needed

  const finalTrust =
    Math.round(
      (aiResult.confidence * 50) +
        (adminResult.trust_score * 0.5)
    );

  const { error } = await supabase
    .from("workforce_skills")
    .update({
      status: adminResult.status,
      trust_score: finalTrust,
      admin_rating: adminResult.rating,
      admin_notes: adminResult.notes,
      finalized_at: new Date().toISOString(),
    })
    .eq("id", adminResult.skill.id);

  if (error) throw error;

  return {
    success: true,
    finalTrust,
  };
}

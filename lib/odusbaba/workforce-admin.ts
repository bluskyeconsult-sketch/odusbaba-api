export async function adminApproveSkill({
  supabase,
  skillId,
  admin,
}: {
  supabase: any;
  skillId: string;
  admin: any;
}) {
  if (admin?.role !== "admin") {
    throw new Error("UNAUTHORISED_ADMIN");
  }

  const { error } = await supabase
    .from("workforce_skills")
    .update({
      status: "approved",
      updated_at: new Date().toISOString(),
    })
    .eq("id", skillId);

  if (error) throw error;

  return { success: true };
}

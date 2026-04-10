import { assertAdmin } from "./admin-guard";

export async function approveWorkforceSkill({
  admin,
  skillId,
  supabase,
}: {
  admin: any;
  skillId: string;
  supabase: any;
}) {
  assertAdmin(admin);

  const { error } = await supabase
    .from("workforce_skills")
    .update({
      approved: true,
      approved_at: new Date().toISOString(),
    })
    .eq("id", skillId);

  if (error) throw error;

  return { success: true };
}

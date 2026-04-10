import { assertAdmin } from "./admin-guard";

export async function verifyWorkforceSkill({
  admin,
  skillId,
  approve,
  supabase,
}: {
  admin: any;
  skillId: string;
  approve: boolean;
  supabase: any;
}) {
  assertAdmin(admin);

  const { error } = await supabase
    .from("workforce_skills")
    .update({
      approved: approve,
      approval_source: "admin",
      approved_at: approve ? new Date().toISOString() : null,
    })
    .eq("id", skillId);

  if (error) throw error;

  return { success: true };
}

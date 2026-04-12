import { assertAdmin } from "./admin-guard";
import { assertValidStatusTransition } from "./workforce-status-enforcer";

export async function approveWorkforceSkill({
  admin,
  skill,
  supabase,
}: {
  admin: any;
  skill: {
    id: string;
    status: string;
  };
  supabase: any;
}) {
  assertAdmin(admin);

  assertValidStatusTransition({
    current: skill.status as any,
    next: "approved",
  });

  const { error } = await supabase
    .from("workforce_skills")
    .update({
      status: "approved",
      approved_at: new Date().toISOString(),
    })
    .eq("id", skill.id);

  if (error) throw error;

  return { success: true };
}

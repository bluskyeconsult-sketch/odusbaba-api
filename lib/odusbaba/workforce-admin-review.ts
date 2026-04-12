import { assertAdmin } from "@/lib/odusbaba/admin-guard";
import { canTransitionStatus } from "./workforce-status-machine";

export type AdminReviewInput = {
  admin: any;
  skill: {
    id: string;
    status: string;
  };
  decision: "approve" | "reject";
  trust_score: number; // 0 - 100
  rating: number; // 1 - 5
  notes?: string;
};

export async function adminReviewWorkforceSkill({
  admin,
  skill,
  decision,
  trust_score,
  rating,
  notes,
  supabase,
}: AdminReviewInput & { supabase: any }) {
  assertAdmin(admin);

  const nextStatus =
    decision === "approve" ? "approved" : "rejected";

  if (
    !canTransitionStatus(
      skill.status as any,
      nextStatus as any
    )
  ) {
    throw new Error(
      `INVALID_ADMIN_TRANSITION: ${skill.status} → ${nextStatus}`
    );
  }

  const { error } = await supabase
    .from("workforce_skills")
    .update({
      status: nextStatus,
      trust_score,
      admin_rating: rating,
      admin_notes: notes,
      reviewed_at: new Date().toISOString(),
    })
    .eq("id", skill.id);

  if (error) throw error;

  return {
    success: true,
    status: nextStatus,
  };
}

import { WorkforceSkillStatus } from "./workforce-status";

const STATUS_TRANSITIONS: Record<
  WorkforceSkillStatus,
  WorkforceSkillStatus[]
> = {
  submitted: ["ai_reviewed", "rejected"],
  ai_reviewed: ["admin_reviewed", "rejected"],
  admin_reviewed: ["approved", "rejected"],
  approved: [],
  rejected: [],
};

export function canTransitionStatus(
  from: WorkforceSkillStatus,
  to: WorkforceSkillStatus
): boolean {
  return STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

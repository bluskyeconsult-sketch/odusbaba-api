import { canTransitionStatus } from "./workforce-status-machine";
import { WorkforceSkillStatus } from "./workforce-status";

export function assertValidStatusTransition({
  current,
  next,
}: {
  current: WorkforceSkillStatus;
  next: WorkforceSkillStatus;
}) {
  if (!canTransitionStatus(current, next)) {
    throw new Error(
      `INVALID_STATUS_TRANSITION: ${current} → ${next}`
    );
  }
}

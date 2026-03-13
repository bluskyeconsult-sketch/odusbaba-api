import { BOOM_VALUE_CAPABILITIES, PlanTier } from "./capabilities";

export function hasCapability(
  plan: PlanTier,
  capability: string
): boolean {
  const caps = BOOM_VALUE_CAPABILITIES[plan] || [];
  return (
    caps.includes(capability) ||
    caps.includes("all_" + capability)
  );
}

// lib/odusbaba/rules.ts

export const GOVERNANCE_MODE = "observe"; // observe | block

export function evaluateAccess({
  capability,
  intent,
}: {
  capability: any;
  intent?: any;
}) {
  // Observe only – never block yet
  return {
    allowed: true,
    mode: GOVERNANCE_MODE,
    notes: "No enforcement active",
  };
}

// lib/odusbaba/gate.ts

export type GateResult =
  | { allowed: true }
  | { allowed: false; reason: string; upgradeRequired: boolean };

export function softGate(
  capability: any,
  requirement: { tier?: string; feature?: string }
): GateResult {
  if (!requirement.tier) return { allowed: true };

  if (capability.tier === requirement.tier || capability.tier === "admin") {
    return { allowed: true };
  }

  return {
    allowed: false,
    reason: "Upgrade required to access this feature",
    upgradeRequired: true,
  };
}

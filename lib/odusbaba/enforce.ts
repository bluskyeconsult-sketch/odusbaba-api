// lib/odusbaba/enforce.ts

export function enforceHard(
  capability: any,
  requirement: { tier: string }
) {
  if (capability.tier !== requirement.tier) {
    throw new Error("FORBIDDEN");
  }
}

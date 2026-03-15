// lib/odusbaba/rules.ts
import { UserContext } from "./types";

/**
 * applyRules
 * Phase 2.2: Controlled enforcement (observe, do not block)
 */
export function applyRules(context: UserContext) {
  const role = context.user.role;

  return {
    enforcementMode: "observe", // 🔒 critical: NOT "block"
    permissions: {
      canUseAI: role !== "public",
      canAccessJobs: true,
      canAccessHRTools: role !== "public",
      adminOnly: role === "admin",
    },
    limits: context.capability.limits,
  };
}

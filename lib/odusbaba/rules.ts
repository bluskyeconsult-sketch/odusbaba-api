import { UserContext } from "./types";

export function applyRules(context: UserContext) {
  const { role } = context.user;

  const rules = {
    canUseAI: role !== "public",
    maxAiCalls: context.capability.limits.aiCalls,
    adminOnly: role === "admin",
  };

  // Phase 2.2 = observe, not block
  return {
    allowed: true,
    rules,
  };
}

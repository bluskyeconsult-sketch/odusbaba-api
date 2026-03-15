// lib/odusbaba/reasoner.ts
import { BOOM_VALUE } from "./boomvalue";
import { UserContext } from "./types";

/**
 * reason
 * Central intelligence orchestrator (OpenAI plugged later)
 */
export function reason(intent: string, context: UserContext) {
  return {
    intent,
    userRole: context.user.role,
    evaluatedAgainst: BOOM_VALUE.discipline,
    decision: "deferred",
    reason: "external reasoning engine not yet connected",
  };
}

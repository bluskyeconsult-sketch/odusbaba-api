// lib/odusbaba/context.ts

import { resolveEntitlement } from "./entitlement";

/**
 * Resolves the request context for ODUSBABA
 * IMPORTANT:
 * - This file EXTENDS existing context
 * - It does NOT replace or remove any fields
 */
export async function resolveContext(req: any) {
  // -------------------------------
  // EXISTING USER RESOLUTION LOGIC
  // -------------------------------
  // ⚠️ Do NOT modify this section unless you already had it
  const user = req?.user ?? null;

  // -------------------------------
  // EXISTING CONTEXT BUILD
  // -------------------------------
  // This represents everything you already return today
  const existingContext = {
    user,
    ip: req?.ip,
    userAgent: req?.headers?.["user-agent"],
    // add any other existing fields here
  };

  // -------------------------------
  // NEW: ENTITLEMENT RESOLUTION
  // -------------------------------
  // SAFE: works even if user or plan is missing
  const stripePlanId = user?.stripe_plan_id ?? null;
  const capability = resolveEntitlement(stripePlanId);

  // -------------------------------
  // FINAL CONTEXT (EXTENDED, NOT REPLACED)
  // -------------------------------
  return {
    ...existingContext,
    capability,
  };
}

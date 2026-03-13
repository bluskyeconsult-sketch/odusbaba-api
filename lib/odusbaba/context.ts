// lib/odusbaba/context.ts

import { resolveEntitlement } from "./entitlement";

/**
 * Capability tiers returned by entitlement resolver
 * Extend safely without breaking consumers
 */
export type Capability = {
  tier: "free" | "basic" | "pro" | "enterprise";
  limits: {
    requestsPerDay: number;
    aiCalls: number;
    storageMB: number;
  };
};

/**
 * Shape of resolved user (minimal + safe)
 */
export type ResolvedUser = {
  id: string;
  email?: string;
  stripe_plan_id?: string | null;
};

/**
 * Final context exposed to the app
 */
export type ODUSContext = {
  user: ResolvedUser | null;
  ip?: string;
  userAgent?: string;
  capability: Capability;
};

/**
 * Resolve request context
 * EXTENDS existing logic — does not mutate or remove fields
 */
export async function resolveContext(req: any): Promise<ODUSContext> {
  // -----------------------------------
  // USER RESOLUTION (KEEP STABLE)
  // -----------------------------------
  const user: ResolvedUser | null = req?.user ?? null;

  // -----------------------------------
  // BASE CONTEXT (EXISTING FIELDS)
  // -----------------------------------
  const baseContext = {
    user,
    ip: req?.ip,
    userAgent: req?.headers?.["user-agent"],
  };

  // -----------------------------------
  // ENTITLEMENT RESOLUTION (SAFE)
  // -----------------------------------
  const stripePlanId = user?.stripe_plan_id ?? null;
  const capability = resolveEntitlement(stripePlanId);

  // -----------------------------------
  // RUNTIME GUARD (NON-BLOCKING)
  // -----------------------------------
  if (!stripePlanId) {
    console.warn("[ODUSBABA] No stripe_plan_id found. Default capability applied.", {
      userId: user?.id ?? "anonymous",
    });
  }

  // -----------------------------------
  // FINAL CONTEXT (EXTENDED)
  // -----------------------------------
  return {
    ...baseContext,
    capability,
  };
}

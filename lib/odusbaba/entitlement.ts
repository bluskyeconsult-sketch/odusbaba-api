// lib/odusbaba/entitlement.ts

import type { Capability } from "./context";

/**
 * Centralised entitlement mapping
 * ONE source of truth
 */
const PLAN_MAP: Record<string, Capability> = {
  free: {
    tier: "free",
    limits: { requestsPerDay: 50, aiCalls: 10, storageMB: 100 },
  },
  basic: {
    tier: "basic",
    limits: { requestsPerDay: 500, aiCalls: 100, storageMB: 500 },
  },
  pro: {
    tier: "pro",
    limits: { requestsPerDay: 5000, aiCalls: 1000, storageMB: 5000 },
  },
  enterprise: {
    tier: "enterprise",
    limits: { requestsPerDay: 50000, aiCalls: 10000, storageMB: 50000 },
  },
};

/**
 * Resolve entitlement from Stripe plan ID
 * NEVER throws, NEVER returns undefined
 */
export function resolveEntitlement(
  stripePlanId: string | null
): Capability {
  if (!stripePlanId) {
    return PLAN_MAP.free;
  }

  return PLAN_MAP[stripePlanId] ?? PLAN_MAP.free;
}

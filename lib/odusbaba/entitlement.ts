import { CAPABILITY_PROFILES } from "./capabilities";

export function resolveEntitlement(stripePlanId?: string) {
  if (!stripePlanId) {
    return CAPABILITY_PROFILES.free;
  }

  switch (stripePlanId) {
    case process.env.STRIPE_PRO_PLAN_ID:
      return CAPABILITY_PROFILES.pro;

    case process.env.STRIPE_BUSINESS_PLAN_ID:
      return CAPABILITY_PROFILES.business;

    default:
      return CAPABILITY_PROFILES.free;
  }
}

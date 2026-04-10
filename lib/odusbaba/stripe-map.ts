// Stripe plan → internal tier mapping
// READ-ONLY | SAFE | NO STRIPE API

export type InternalTier =
  | "public"
  | "free"
  | "pro"
  | "business"
  | "admin";

export function resolveTierFromStripe(
  stripePlanId: string | null
): InternalTier {
  if (!stripePlanId) return "public";

  const PLAN_MAP: Record<string, InternalTier> = {
    // FREE / ENTRY
    "price_free": "free",

    // INDIVIDUAL USERS
    "price_pro_monthly": "pro",
    "price_pro_yearly": "pro",

    // COMPANIES
    "price_business_monthly": "business",
    "price_business_yearly": "business",
  };

  return PLAN_MAP[stripePlanId] ?? "free";
}

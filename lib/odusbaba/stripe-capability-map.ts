export function mapStripePlanToTier(planId?: string) {
  if (!planId) return "public";
  if (planId.includes("employer")) return "employer";
  if (planId.includes("pro")) return "subscriber";
  return "public";
}

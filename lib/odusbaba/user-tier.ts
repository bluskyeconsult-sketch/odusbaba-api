export function getUserTier(user: any): "free" | "pro" | "business" {
  return user?.stripe_plan_id || "free";
}

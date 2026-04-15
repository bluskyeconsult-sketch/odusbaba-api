export const STRIPE_PLAN_CAPABILITIES: Record<string, string[]> = {
  free: ["job:view"],
  jobseeker: ["job:view", "job:apply"],
  employer: ["job:view", "job:post"],
};

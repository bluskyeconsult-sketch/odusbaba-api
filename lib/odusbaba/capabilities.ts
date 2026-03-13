export type PlanTier = "free" | "pro" | "premium" | "institutional";

export const BOOM_VALUE_CAPABILITIES: Record<PlanTier, string[]> = {
  free: [
    "basic_query",
    "job_view",
    "limited_hr_advice"
  ],
  pro: [
    "basic_query",
    "job_view",
    "advanced_hr_advice",
    "cv_review",
    "career_guidance"
  ],
  premium: [
    "all_pro",
    "legal_guidance",
    "grievance_support",
    "contract_analysis",
    "priority_response"
  ],
  institutional: [
    "all_premium",
    "bulk_queries",
    "api_access",
    "custom_models",
    "audit_logs"
  ],
};

import { PlanTier } from "./capabilities";

export interface OdusbabaContext {
  userId: string | null;
  plan: PlanTier;
  source: "public" | "authenticated" | "system";
}

export function resolveContext(headers: Headers): OdusbabaContext {
  const userId = headers.get("x-user-id");
  const plan = (headers.get("x-user-plan") as PlanTier) || "free";

  return {
    userId,
    plan,
    source: userId ? "authenticated" : "public",
  };
}

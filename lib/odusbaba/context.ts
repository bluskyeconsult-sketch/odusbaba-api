import { headers } from "next/headers";
import { resolveEntitlement } from "./entitlement";

export type ODUSBABAContext = {
  requestId: string;
  role: "public" | "user" | "admin";
  user: any | null;
  capability: {
    aiDepth: "none" | "basic" | "advanced";
    jobAccess: boolean;
    cvReview: boolean;
    hireVA: boolean;
    admin: boolean;
  };
};

export async function resolveContext(req: Request): Promise<ODUSBABAContext> {
  const requestId = crypto.randomUUID();

  /**
   * STEP 1: Resolve user (safe placeholder)
   * This will later connect to Supabase auth
   */
  const user = null; // intentionally null for now

  /**
   * STEP 2: Resolve role (default-safe)
   */
  const role: ODUSBABAContext["role"] = "public";

  /**
   * STEP 3: Resolve Stripe entitlement → capability
   * This is the ONLY place Stripe plans are interpreted
   */
  const stripePlanId = user?.stripe_plan_id;
  const capability = resolveEntitlement(stripePlanId);

  /**
   * FINAL CONTEXT (single source of truth)
   */
  return {
    requestId,
    role,
    user,
    capability,
  };
}

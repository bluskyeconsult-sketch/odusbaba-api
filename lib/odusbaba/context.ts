// lib/odusbaba/context.ts
import { NextRequest } from "next/server";

/**
 * getUserContext
 * Resolves user identity, plan, role, and capabilities
 */
export async function getUserContext(req: NextRequest) {
  // In production, extract user from headers/session/token
  // For testing, fallback to demo user
  const user = {
    id: req.headers.get("x-user-id") || "anonymous",
    role: req.headers.get("x-user-role") || "public", // public | subscriber | admin
    stripe_plan_id: req.headers.get("x-stripe-plan") || "free",
  };

  // Capability placeholder
  const capability = {
    tier: user.role,
    limits: {
      aiCalls: user.role === "admin" ? 1000 : user.role === "subscriber" ? 50 : 10,
    },
  };

  return {
    user,
    capability,
  };
}

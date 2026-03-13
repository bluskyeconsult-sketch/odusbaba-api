import { NextResponse } from "next/server";
import { resolveContext } from "@/lib/odusbaba/context";
import { enforceRules } from "@/lib/odusbaba/rules";

/**
 * GET route
 * Context + Governance enforced
 */
export async function GET(req: Request) {
  // 1️⃣ Resolve ODUSBABA context for this request
  const context = await resolveContext(req);

  // 2️⃣ Enforce governance rules
  // Example: Only admin can access
  enforceRules(context, "admin");

  // 3️⃣ Respond with status + context snapshot (for debug/testing)
  return NextResponse.json({
    status: "operational",
    contextSnapshot: {
      userId: context.user?.id ?? "anonymous",
      tier: context.capability.tier,
      aiCallsAllowed: context.capability.limits.aiCalls,
    },
    timestamp: new Date().toISOString(),
  });
}

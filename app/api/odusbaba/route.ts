import { NextResponse } from "next/server";
import { getUserContext } from "@/lib/odusbaba/context";
import { applyRules } from "@/lib/odusbaba/rules";

export async function GET(req: Request) {
  // 1. Get user context
  const context = await getUserContext(req);

  // 2. Apply governance rules
  const allowed = applyRules(context);
  if (!allowed) {
    return NextResponse.json({ error: "Access denied" }, { status: 403 });
  }

  // 3. Return status & context snapshot
  return NextResponse.json({
    status: "operational",
    contextSnapshot: context,
    timestamp: new Date().toISOString(),
  });
}

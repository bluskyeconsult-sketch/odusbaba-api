import { NextResponse } from "next/server";
import { resolveContext, enforceRules } from "@/lib/odusbaba";

export async function GET(req: Request) {
  const context = await resolveContext(req);

  enforceRules(context, "public");

  return NextResponse.json({
    status: "operational",
    governedBy: "ODUSBABA",
    role: context.role,
    plan: context.plan,
  });
}

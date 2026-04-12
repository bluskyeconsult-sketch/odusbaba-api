// app/api/odusbaba/route.ts

import { NextResponse } from "next/server";
import { evaluateRules } from "@/lib/odusbaba/rules";

export async function POST(req: Request) {
  const body = await req.json();

  // TEMP: unauthenticated safe context
  const context = {
    user: null,
    action: body.action,
    payload: body.payload,
  };

  // ODUSBABA rule evaluation
  evaluateRules(context);

  return NextResponse.json({
    success: true,
    message: "ODUSBABA request processed",
  });
}

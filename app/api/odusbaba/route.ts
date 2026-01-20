import { NextResponse } from "next/server";
import { validateApiKey } from "@/lib/auth";

export async function GET(request: Request) {
  if (!validateApiKey(request.headers)) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  return NextResponse.json({
    status: "ok",
    message: "ODUSBABA API is live and secured"
  });
}

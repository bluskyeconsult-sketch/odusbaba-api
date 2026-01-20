import { NextResponse } from "next/server";
import { validateApiKey } from "@/lib/auth";

export async function GET(request: Request) {
  const isValid = validateApiKey(request);

  if (!isValid) {
    return NextResponse.json(
      { status: "error", message: "Invalid API Key" },
      { status: 401 }
    );
  }

  return NextResponse.json({
    status: "ok",
    message: "ODUSBABA API is live",
  });
}

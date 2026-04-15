import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase/server";

export async function POST(req: Request) {
  const event = await req.json();
  const supabase = getSupabaseClient();

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    const userId = session.metadata.userId;
    const plan = session.metadata.plan;

    let capabilities: string[] = [];

    if (plan === "employer") {
      capabilities = ["jobs:post"];
    }

    if (plan === "pro") {
      capabilities = [
        "jobs:post",
        "jobs:apply",
        "workforce:contact",
      ];
    }

    await supabase
      .from("user_capabilities")
      .upsert({
        user_id: userId,
        capabilities,
      });
  }

  return NextResponse.json({ received: true });
}

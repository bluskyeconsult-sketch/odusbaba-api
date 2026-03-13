import { createClient } from "@supabase/supabase-js";
import { resolveEntitlement } from "./entitlement";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

export async function getUserContext(req: Request) {
  // 1. Extract user token from headers (replace with your auth method)
  const token = req.headers.get("authorization")?.replace("Bearer ", "");
  let user = null;

  if (token) {
    const { data } = await supabase.auth.getUser(token);
    user = data.user;
  }

  // 2. Fallback anonymous
  if (!user) {
    user = {
      id: "anonymous",
      role: "public",
      stripe_plan_id: "free"
    };
  }

  // 3. Resolve capability from Stripe plan
  const capability = resolveEntitlement(user.stripe_plan_id);

  return { user, capability };
}

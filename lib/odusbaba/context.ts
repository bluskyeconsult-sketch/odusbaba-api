import { createClient } from "@supabase/supabase-js";
import { resolveEntitlement } from "./entitlement";

// Initialize Supabase
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

export async function getUserContext(req: Request) {
  let user = null;

  try {
    // 1. Extract token from headers (Bearer token)
    const token = req.headers.get("authorization")?.replace("Bearer ", "");

    if (token) {
      const { data, error } = await supabase.auth.getUser(token);

      if (!error && data.user) {
        user = {
          id: data.user.id,
          role: "subscriber", // default; can refine later
          stripe_plan_id: "pro", // for example; replace with real mapping
        };
      }
    }
  } catch (err) {
    console.warn("Supabase auth failed, falling back to anonymous:", err);
  }

  // 2. Fallback anonymous if user not resolved
  if (!user) {
    user = {
      id: "anonymous",
      role: "public",
      stripe_plan_id: "free",
    };
  }

  // 3. Map Stripe plan to capability
  const capability = resolveEntitlement(user.stripe_plan_id);

  return { user, capability };
}

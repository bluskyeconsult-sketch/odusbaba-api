import { createClient } from "@supabase/supabase-js";

export type OdusbabaContext = {
  userId: string | null;
  role: "public" | "user" | "admin";
  plan: "free" | "pro" | "business" | null;
};

export async function resolveContext(req: Request): Promise<OdusbabaContext> {
  // Placeholder: expand later
  return {
    userId: null,
    role: "public",
    plan: "free",
  };
}

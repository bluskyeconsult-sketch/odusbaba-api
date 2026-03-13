// lib/odusbaba/rules.ts

type Context = {
  user: {
    id: string;
    role: string;
    stripe_plan_id: string;
  };
  capability: {
    tier: string;
    limits: {
      aiCalls: number;
    };
  };
};

export function applyRules(context: Context) {
  // Hard deny invalid roles
  if (!["public", "subscriber", "admin"].includes(context.user.role)) {
    return false;
  }

  // Public users always allowed basic access
  if (context.user.role === "public") {
    return true;
  }

  // Subscriber and admin allowed
  return true;
}

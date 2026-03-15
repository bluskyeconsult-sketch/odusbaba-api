export type UserRole = "public" | "subscriber" | "admin";

export interface UserContext {
  user: {
    id: string;
    role: UserRole;
    stripe_plan_id: string;
  };
  capability: {
    tier: UserRole;
    limits: {
      aiCalls: number;
    };
  };
}

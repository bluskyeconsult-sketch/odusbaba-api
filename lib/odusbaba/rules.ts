// lib/odusbaba/rules.ts

import { enforce } from "./enforcement";

export type RuleContext = {
  user?: any;
  action: string;
  payload?: any;
};

export function evaluateRules(context: RuleContext) {
  // Example enforcement — extend later
  enforce(
    !!context.user,
    "User must be authenticated"
  );

  return { allowed: true };
}

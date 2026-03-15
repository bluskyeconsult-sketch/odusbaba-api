import { BOOM_VALUE } from "./boomvalue";
import { UserContext } from "./types";

export function reason({
  intent,
  context,
}: {
  intent: string;
  context: UserContext;
}) {
  return {
    intent,
    evaluatedAgainst: BOOM_VALUE.principles,
    userTier: context.user.role,
    decision: "pending-external-reasoning",
  };
}

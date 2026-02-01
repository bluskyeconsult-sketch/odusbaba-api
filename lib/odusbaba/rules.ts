import { OdusbabaContext } from "./context";

export function enforceRules(
  context: OdusbabaContext,
  capability: string
) {
  if (capability === "admin" && context.role !== "admin") {
    throw new Error("Access denied");
  }

  if (capability === "advanced_ai" && context.plan === "free") {
    throw new Error("Upgrade required");
  }

  return true;
}

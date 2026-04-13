import { rateLimit } from "./rate-limit";

export function secureAction({
  userId,
  action,
}: {
  userId: string;
  action: () => any;
}) {
  const allowed = rateLimit(userId, 20, 60000);

  if (!allowed) {
    throw new Error("RATE_LIMIT_EXCEEDED");
  }

  return action();
}

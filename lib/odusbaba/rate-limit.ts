const memoryStore = new Map<string, { count: number; ts: number }>();

export function rateLimit(key: string, limit = 10, windowMs = 60000) {
  const now = Date.now();
  const entry = memoryStore.get(key);

  if (!entry || now - entry.ts > windowMs) {
    memoryStore.set(key, { count: 1, ts: now });
    return true;
  }

  if (entry.count >= limit) {
    return false;
  }

  entry.count += 1;
  return true;
}

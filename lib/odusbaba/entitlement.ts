export function resolveEntitlement(stripePlanId: string) {
  const map: Record<string, any> = {
    free: {
      tier: "public",
      limits: { aiCalls: 5, jobAccess: "basic" },
    },
    pro: {
      tier: "subscriber",
      limits: { aiCalls: 50, jobAccess: "full", hrTools: true },
    },
    business: {
      tier: "admin",
      limits: { aiCalls: 1000, jobAccess: "full", hrTools: true, hireVA: true },
    },
  };

  return map[stripePlanId] || map.free;
}

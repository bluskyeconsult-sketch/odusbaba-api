export type Tier = "free" | "pro" | "business";

export function resolveCapabilities(tier: Tier) {
  const map = {
    free: {
      canViewMarketplace: true,
      canContactWorkforce: false,
      canUseHireVA: false,
      aiLimit: 5,
    },
    pro: {
      canViewMarketplace: true,
      canContactWorkforce: true,
      canUseHireVA: false,
      aiLimit: 50,
    },
    business: {
      canViewMarketplace: true,
      canContactWorkforce: true,
      canUseHireVA: true,
      aiLimit: 500,
    },
  };

  return map[tier];
}

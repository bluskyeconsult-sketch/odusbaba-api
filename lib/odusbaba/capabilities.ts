// lib/odusbaba/capabilities.ts

export type Tier = "free" | "pro" | "business" | "employer";

export type Capabilities = {
  // Marketplace
  canViewMarketplace: boolean;
  canContactWorkforce: boolean;

  // Hire VA
  canUseHireVA: boolean;

  // Job Board
  canPostJobs: boolean;
  canApplyJobs: boolean;

  // Platform limits
  aiLimit: number;
};

export function resolveCapabilities(tier: Tier): Capabilities {
  const map: Record<Tier, Capabilities> = {
    free: {
      canViewMarketplace: true,
      canContactWorkforce: false,
      canUseHireVA: false,
      canPostJobs: false,
      canApplyJobs: false,
      aiLimit: 5,
    },

    pro: {
      canViewMarketplace: true,
      canContactWorkforce: true,
      canUseHireVA: false,
      canPostJobs: false,
      canApplyJobs: true,
      aiLimit: 50,
    },

    business: {
      canViewMarketplace: true,
      canContactWorkforce: true,
      canUseHireVA: true,
      canPostJobs: false,
      canApplyJobs: true,
      aiLimit: 500,
    },

    employer: {
      canViewMarketplace: true,
      canContactWorkforce: true,
      canUseHireVA: false,
      canPostJobs: true,
      canApplyJobs: false,
      aiLimit: 100,
    },
  };

  return map[tier];
}

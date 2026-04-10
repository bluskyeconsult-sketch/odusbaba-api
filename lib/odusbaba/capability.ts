export type Capability = {
  canViewWorkforce: boolean;
  canContactWorkforce: boolean;
  canHireWorkforce: boolean;
  aiCallsPerDay: number;
};

export function resolveCapability(tier: string): Capability {
  switch (tier) {
    case "admin":
      return {
        canViewWorkforce: true,
        canContactWorkforce: true,
        canHireWorkforce: true,
        aiCallsPerDay: 1000,
      };

    case "business":
      return {
        canViewWorkforce: true,
        canContactWorkforce: true,
        canHireWorkforce: true,
        aiCallsPerDay: 300,
      };

    case "pro":
      return {
        canViewWorkforce: true,
        canContactWorkforce: true,
        canHireWorkforce: false,
        aiCallsPerDay: 100,
      };

    case "free":
      return {
        canViewWorkforce: true,
        canContactWorkforce: false,
        canHireWorkforce: false,
        aiCallsPerDay: 20,
      };

    default: // public / anonymous
      return {
        canViewWorkforce: true,
        canContactWorkforce: false,
        canHireWorkforce: false,
        aiCallsPerDay: 10,
      };
  }
}

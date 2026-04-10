// Capability resolution for ODUSBABA features

export type Capability = {
  canViewWorkforce: boolean;
  canContactWorkforce: boolean;
  canHireWorkforce: boolean;
};

export function resolveCapability(tier: string): Capability {
  switch (tier) {
    case "admin":
    case "business":
      return {
        canViewWorkforce: true,
        canContactWorkforce: true,
        canHireWorkforce: true,
      };

    case "subscriber":
    case "pro":
      return {
        canViewWorkforce: true,
        canContactWorkforce: true,
        canHireWorkforce: false,
      };

    default: // free / public
      return {
        canViewWorkforce: true,
        canContactWorkforce: false,
        canHireWorkforce: false,
      };
  }
}

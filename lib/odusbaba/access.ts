import { getUserTier } from "./user-tier";
import { resolveCapabilities } from "./capabilities";

export function getAccess(user: any) {
  const tier = getUserTier(user);
  const capabilities = resolveCapabilities(tier);

  return {
    tier,
    capabilities,
  };
}

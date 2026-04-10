export type ViewerTier = "public" | "subscriber" | "admin";

export function resolveViewerCapabilities(tier: ViewerTier) {
  return {
    canContactWorkforce:
      tier === "subscriber" || tier === "admin",
  };
}

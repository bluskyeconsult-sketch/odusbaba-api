import { mapStripePlanToTier } from "./stripe-capability-map";

const tier = mapStripePlanToTier(user.stripe_plan_id);
const capabilities = resolveViewerCapabilities(tier);

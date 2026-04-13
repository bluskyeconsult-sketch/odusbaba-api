import { enforce } from "./enforcement";
import { ROUTE_REGISTRY } from "./route-registry";

export function assertRouteAccess({
  path,
  user,
  capabilities,
}: {
  path: string;
  user?: any;
  capabilities?: string[];
}) {
  const route = ROUTE_REGISTRY.find(r => r.path === path);

  if (!route) {
    enforce(false, "Route not registered");
    return;
  }

  if (route.visibility === "authenticated") {
    enforce(!!user, "Authentication required");
  }

  if (route.visibility === "admin") {
    enforce(user?.role === "admin", "Admin only");
  }

  if (route.capability) {
    enforce(
      capabilities?.includes(route.capability),
      "Capability missing"
    );
  }
}

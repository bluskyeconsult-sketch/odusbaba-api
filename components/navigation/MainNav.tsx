import { ROUTE_REGISTRY } from "@/lib/odusbaba/route-registry";

export function MainNav({
  user,
  capabilities,
}: {
  user?: any;
  capabilities?: string[];
}) {
  return (
    <nav className="flex gap-6">
      {ROUTE_REGISTRY.filter(r => r.nav).map(route => {
        if (route.visibility === "admin" && user?.role !== "admin") return null;
        if (
          route.capability &&
          !capabilities?.includes(route.capability)
        ) return null;

        return (
          <a
            key={route.path}
            href={route.path}
            className="text-sm font-medium"
          >
            {route.label}
          </a>
        );
      })}
    </nav>
  );
}

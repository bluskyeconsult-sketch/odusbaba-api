export type RouteVisibility =
  | "public"
  | "authenticated"
  | "admin";

export type Capability =
  | "workforce:view"
  | "workforce:submit"
  | "workforce:contact"
  | "jobs:view"
  | "jobs:post"
  | "admin:access";

export type AppRoute = {
  path: string;
  label: string;
  visibility: RouteVisibility;
  capability?: Capability;
  nav?: boolean;
};

export const ROUTE_REGISTRY: AppRoute[] = [
  {
    path: "/",
    label: "Home",
    visibility: "public",
    nav: true,
  },
  {
    path: "/workforce",
    label: "Workforce Marketplace",
    visibility: "public",
    capability: "workforce:view",
    nav: true,
  },
  {
    path: "/workforce/submit",
    label: "Submit Skill",
    visibility: "authenticated",
    capability: "workforce:submit",
    nav: true,
  },
  {
    path: "/dashboard",
    label: "Dashboard",
    visibility: "authenticated",
    nav: true,
  },
  {
    path: "/jobs",
    label: "Job Board",
    visibility: "public",
    capability: "jobs:view",
    nav: true,
  },
  {
    path: "/admin",
    label: "Admin",
    visibility: "admin",
    capability: "admin:access",
    nav: false,
  },
];

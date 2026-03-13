export type Capability = {
  aiDepth: "none" | "basic" | "advanced";
  jobAccess: boolean;
  cvReview: boolean;
  hireVA: boolean;
  admin: boolean;
};

export const CAPABILITY_PROFILES: Record<string, Capability> = {
  free: {
    aiDepth: "none",
    jobAccess: true,
    cvReview: false,
    hireVA: false,
    admin: false,
  },
  pro: {
    aiDepth: "basic",
    jobAccess: true,
    cvReview: true,
    hireVA: false,
    admin: false,
  },
  business: {
    aiDepth: "advanced",
    jobAccess: true,
    cvReview: true,
    hireVA: true,
    admin: false,
  },
  admin: {
    aiDepth: "advanced",
    jobAccess: true,
    cvReview: true,
    hireVA: true,
    admin: true,
  },
};

export const CAPABILITY_PROFILES = {
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
